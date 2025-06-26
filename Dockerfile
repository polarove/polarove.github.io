# Stage 1: transfer files
FROM node:22.16-slim as transfer
WORKDIR /files

COPY . .

# Stage 1: Build
FROM node:22.16-slim as build

WORKDIR /app

COPY --from=transfer /files ./

# ARG NUXT_API_BASE_URL
# ENV NUXT_API_BASE_URL=$NUXT_API_BASE_URL

RUN corepack enable && corepack prepare pnpm@latest --activate
RUN pnpm install

# 安装 pnpm
RUN pnpm run build

# Stage 2: Production
FROM node:22.16-slim as production

EXPOSE 3000

WORKDIR /app

# Copy built output from build stage
COPY --from=build /app/.output . 

# ENV NUXT_API_BASE_URL=$NUXT_API_BASE_URL
CMD [ "node", "./server/index.mjs" ]
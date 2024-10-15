<template>
    <div
        class="ma-auto xl:mt-30vh lg:mt-25vh md:mt-20vh sm:mt-15vh xs:mt-10vh lt-xs:mt-10vh">
        <section class="text-center self-center">
            <h1>{{ $t('hello') }}</h1>
            <h1>{{ $t('whoami') }}</h1>
            <h1>
                <Icon
                    name="mdi:alphabetical-variant"
                    class="text-6xl cursor-pointer hover:color-$primary"
                    @click="$switchLocale('en')"
                    :class="
                        $getLocale() === 'en'
                            ? 'color-$primary'
                            : 'color-$inherit'
                    "></Icon>
                <Icon
                    name="mdi:ideogram-chinese-japanese-korean-variant"
                    class="text-6xl cursor-pointer hover:color-$primary"
                    @click="$switchLocale('zh')"
                    :class="
                        $getLocale() === 'zh'
                            ? 'color-$primary'
                            : 'color-$inherit'
                    "></Icon>
            </h1>
        </section>
        <section class="text-center">
            <client-only>
                <v-theme />
            </client-only>
        </section>
    </div>
</template>

<script lang="ts" setup></script>

# Typescript

Typescript 是21世纪最伟大的发明之一。

它时常让我思考，typescript 诞生之前的人们是如何忍受那么糟糕的日子的？我是怎么忍受 javascript 100 种报错方式还摸不着头脑的日子的？

但我讨厌[类型体操](https://github.com/vuejs/core/blob/1222437ec26a6da1dbd5b882aecd4a048a6e3571/packages/shared/src/typeUtils.ts#L32C1-L46C10)

::v-code-area
```typescript
type OverloadUnionRecursive<
  TOverload,
  TPartialOverload = unknown,
> = TOverload extends (...args: infer TArgs) => infer TReturn
  ? TPartialOverload extends TOverload
    ? never
    :
        | OverloadUnionRecursive<
            TPartialOverload & TOverload,
            TPartialOverload &
              ((...args: TArgs) => TReturn) &
              OverloadProps<TOverload>
          >
        | ((...args: TArgs) => TReturn)
  : never
```
::
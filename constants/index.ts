export interface Locale {
    code: string
    disabled?: boolean
    iso?: string
    dir?: 'ltr' | 'rtl' | 'auto'
    displayName?: string
}
export const zh_CN: Locale = {
    code: 'zh',
    iso: 'zh-CN',
    dir: 'ltr',
    displayName: '简体中文'
}
export const en_US: Locale = {
    code: 'en',
    iso: 'en-US',
    dir: 'ltr',
    displayName: 'English'
}

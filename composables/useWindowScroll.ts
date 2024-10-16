export const useWindowScroll = () => {
    const scroll = useState('scroll', () => 0)
    onMounted(() => {
        window.addEventListener('scroll', () => {
            scroll.value = window.scrollY
        })
    })
    return scroll
}

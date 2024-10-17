export const useWindowScroll = () => {
	const scroll = useState('scroll', () => 0)

	function set() {
		scroll.value = window.scrollY
	}

	onMounted(() => window.addEventListener('scroll', set))
	onUnmounted(() => window.removeEventListener('scroll', set))
	return { scroll }
}

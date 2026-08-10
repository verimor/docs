import DefaultTheme from 'vitepress/theme'
import { useRoute } from 'vitepress'
import { nextTick, onMounted, watch } from 'vue'
import mediumZoom from 'medium-zoom'
import './custom.css'

export default {
  ...DefaultTheme,
  setup() {
    const route = useRoute()
    const zoom = () => {
      const margin = window.innerWidth * 0.1

      mediumZoom('.vp-doc img', {
        background: 'var(--vp-c-bg)',
        container: { left: margin, right: margin },
      })
    }

    onMounted(zoom)
    watch(() => route.path, () => nextTick(zoom))
  },
}

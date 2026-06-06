import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

function setRemUnit() {
  const html = document.documentElement
  const width = html.clientWidth
  const isLandscape = window.matchMedia('(orientation: landscape)').matches

  if (width > 1000 || isLandscape) {
    html.style.fontSize = '40px'
  }
  else {
    html.style.fontSize = `${width / 10}px`
  }
}

setRemUnit()
window.addEventListener('resize', setRemUnit)

createApp(App).mount('#app')

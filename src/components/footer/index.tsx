import Vue, { CreateElement } from 'vue'
import { Component } from 'vue-property-decorator'
import theme from './theme.css'

@Component
export class Footer extends Vue {
  render(h: CreateElement) {
    return <footer class={theme.footer}>footer</footer>
  }
}

import Vue, { CreateElement } from 'vue'
import { Component } from 'vue-property-decorator'
import theme from './theme.css'

@Component
export class About extends Vue {
  render(h: CreateElement) {
    return (
      <div class={theme.wrap}>
        About
      </div>
    )
  }
}
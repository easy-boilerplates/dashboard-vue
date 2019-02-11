import { Nav } from 'components/header/components/nav'
import Vue, { CreateElement } from 'vue'
import { Component } from 'vue-property-decorator'
import theme from './theme.css'

@Component
export class Header extends Vue {
  render(h: CreateElement) {
    return (
      <header class={theme.header}>
        <Nav />
      </header>
    )
  }
}

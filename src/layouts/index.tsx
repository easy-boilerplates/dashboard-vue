import { Footer, Header, Page } from 'components'
import Vue, { CreateElement } from 'vue'
import { Component } from 'vue-property-decorator'
import theme from './theme.css'

@Component
export class Layout extends Vue {
  render(h: CreateElement) {
    return (
      <div class={theme.layout}>
        <Header />
        <Page />
        <Footer />
      </div>
    )
  }
}

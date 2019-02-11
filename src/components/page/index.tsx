import Vue, { CreateElement } from 'vue'
import { Component } from 'vue-property-decorator'
import theme from './theme.css'

@Component
export class Page extends Vue {
  render(h: CreateElement) {
    return (
      <main class={theme.main}>
        <div class={theme.container}>
          <transition
            name="fade"
            mode="out-in"
            duration="1000"
          >
            <router-view />
          </transition>
        </div>
      </main>
    )
  }
}

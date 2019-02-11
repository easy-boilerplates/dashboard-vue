import { Counter } from 'pages/home/components/counter'
import { InputChanger } from 'pages/home/components/input-changer'
import Vue, { CreateElement } from 'vue'
import { Component } from 'vue-property-decorator'
import theme from './theme.css'

@Component
export class Home extends Vue {
  render(h: CreateElement) {
    return (
      <div class={theme.home}>
        <h1>Hello</h1>
        <Counter />
        <InputChanger title="Input Changer" />
      </div>
    )
  }
}
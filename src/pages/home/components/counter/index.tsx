import Vue, { CreateElement } from 'vue'
import { Component } from 'vue-property-decorator'
import theme from './theme.css'

@Component
export class Counter extends Vue {
  private count = 0
  render(h: CreateElement) {
    return (
      <div class={theme.wrap}>
        <h2>Counter</h2>
        <p>{this.count}</p>
        <p><button onClick={this.inc}>INC</button></p>
        <p><button onClick={this.dec}>DEC</button></p>
      </div>
    )
  }

  private inc() {
    this.count++
  }

  private dec() {
    this.count--
  }
}
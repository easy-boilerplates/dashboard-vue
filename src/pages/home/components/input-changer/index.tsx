import Vue, { CreateElement } from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export class InputChanger extends Vue {
  @Prop(String) title!: string
  private text = ''
  render(h: CreateElement) {
    const { title } = this.$props
    return (
      <div>
        <h2>{title}</h2>
        <p>
          <input
            type="text"
            onInput={(e: any) => this.text = e.target.value}
          />
        </p>
        <p>{this.text}</p>
      </div>
    )
  }
}
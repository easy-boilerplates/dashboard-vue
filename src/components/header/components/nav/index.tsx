import { routes } from 'routes'
import Vue, { CreateElement } from 'vue'
import { Component } from 'vue-property-decorator'
import theme from './theme.css'

@Component
export class Nav extends Vue {
  render(h: CreateElement) {
    return (
      <nav>
        <ul class={theme.list}>
          {routes.map(item => <li
            key={item.name}
            class={theme.item}
          >
            <router-link
              class={theme.link}
              to={item.path}
            >
              {item.name}
            </router-link>
          </li>)}
        </ul>
      </nav>
    )
  }
}
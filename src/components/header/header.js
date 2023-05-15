import { DivComponent } from "../../common/div-component"; 
import './header.css'

export class Header extends DivComponent {
  constructor(appState) {
    super()
    this.appState = appState
  }

  render() {
    this.el.classList.add('header')
    this.el.innerHTML = `
      <div>
        <img src="/static/logo.svg"  alt="logo"/>
      </div>
      <nav class="nav">
        <a class="nav__item" href="#">
          <img src="/static/search-icon.svg" alt="search-icon" />
          Search books
        </a>
        <a class="nav__item" href="/#favorites">
          <img src="/static/favorites-icon.svg" alt="favorites-icon"/>
          Favorites
        </a>
        <div class="menu__counter">
          ${this.appState.favorites.length}
        </div>
      </nav>
    `
    return this.el
  }
}
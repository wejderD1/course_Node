import { DivComponent } from "../../common/div-component"; 
import './search.css'

export class Search extends DivComponent {
  constructor(state) {
    super()
    this.state = state
  }

  search() {
    const value = this.el.querySelector('input').value
    this.state.searchQuery = value
  }

  render() {
    this.el.classList.add('search')
    this.el.innerHTML = `
      <div class="search__wrapper">
        <input 
          type="text"
          placeholder="Find book or author" 
          class="search__input"
          value="${this.state.searchQuery ? this.state.searchQuery : ''}"
        />
        <img src="/static/search-icon.svg" alt="search-icon"/>
      </div>
      <button class="search__button">
        <img src="/static/search-icon__white.svg" alt="search-icon" arial-label="Search"/>
      </button>
    `
    this.el.querySelector('.search__button').addEventListener('click', this.search.bind(this))
    this.el.querySelector('.search__input').addEventListener('keydown', (event) => {
      if(event.key === 'Enter'){
        this.search()
      }
    })
    return this.el
  }
}
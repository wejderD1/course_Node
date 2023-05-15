import { DivComponent } from "../../common/div-component";
import './card.css'

export class Card extends DivComponent {
  constructor(appState, cardState) {
    super()
    this.appState = appState
    this.cardState = cardState
  }

  #addToFavorites() {
    this.appState.favorites.push(this.cardState)
  }

  #deleteFromFavorites() {
    this.appState.favorites = this.appState.favorites.filter(
      b => b.key !== this.cardState.key
    )
  }

  #addToSelected() {
    this.appState.selected.push(this.cardState)
  }

  render() {
    this.el.classList.add('card')
    const existInFavourites = this.appState.favorites.find(
      b => b.key == this.cardState.key)
    this.el.innerHTML = `
    <a href="#selectedBook?${this.cardState.title}">
      <div class="card__image">
        <img src="https://covers.openlibrary.org/b/olid/${this.cardState.cover_edition_key}-M.jpg" />
      </div>
      <div class="card__info">
        <div class="card__tag">
          ${this.cardState.subject ? this.cardState.subject[0] : 'not set'}
        </div>
        <div class="card__name">
          ${this.cardState.title}
        </div>
        <div class="card__author">
          ${this.cardState.author_name ? this.cardState.author_name[0] : 'not set'}
        </div>
        <div class="card__footer">
          <button class="button ${existInFavourites ? 'button__active' : ''}">
            ${existInFavourites 
              ? '<img src="/static/favorites-icon.svg" alt="favourites icon">'
              : '<img src="/static/favorites-white-icon.svg" alt="favourites icon"></img>'
            } 
          </button>
        </div>
      </div>
    </a>
    `
    if(existInFavourites){
      this.el
        .querySelector('.button')
        .addEventListener('click', this.#deleteFromFavorites.bind(this))
    } else {
      this.el
        .querySelector('.button')
        .addEventListener('click', this.#addToFavorites.bind(this))
      this.el
        .addEventListener('click', this.#addToSelected.bind(this))
    }
    return this.el
  }
}
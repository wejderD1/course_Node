import { AbstractView } from "../../common/view.js";
import onChange from "on-change"
import { Header } from "../../components/header/header.js";
import { Tags } from "../../components/tags/tags.js";

export class SelectedBookView extends AbstractView {

  constructor(appState) {
    super()
    this.appState = appState
    this.appState = onChange(this.appState, this.appStateHook.bind(this))
    this.setTitle('Selected book')
    this.state = []
  }

  destroy() {
    onChange.unsubscribe(this.appState)
  }

  appStateHook(path) {
    if(path === 'favorites') {
      this.render()
    }
  }


  render() {
    //треба через цикл витягувати все з проксі типу for of
    const [title]= this.appState.selected
    // console.log("ddd ---- " + title)
    const selectedBook = document.createElement('div')
    selectedBook.classList.add('selected__container')
    selectedBook.innerHTML = `
      <h1>${title}</h1>
    `
    // favorites.append(new CardList(this.appState, {list: this.appState.favorites}).render())
    selectedBook.append(new Tags(this.state).render())
    this.app.innerHTML = ''
    this.app.append(selectedBook)
    this.renderHeader()
  }

  renderHeader() {
    const header = new Header(this.appState).render()
    this.app.prepend(header)
  }
}
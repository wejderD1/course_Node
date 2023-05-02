import { DivComponent } from "../../common/div-component";
import { Card } from "../card/card";
import './cardList.css'

export class CardList extends DivComponent {
  constructor(appState, parentState) {
    super()
    this.parentState = parentState
    this.appState = appState
  }

  render() {
    if(this.parentState.loading) {
      this.el.innerHTML = `
        <div class="card_list__loader">Loading...</div>
      `
      return this.el
    }
    this.el.classList.add('card_list')
    this.el.innerHTML = `
      <h1>Found books - ${this.parentState.numFound}</h1>
    `
    for (const card of this.parentState.list){
      this.el.append(new Card(this.appState, card).render())
    }
    return this.el
  }
}
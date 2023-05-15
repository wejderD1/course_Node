import { DivComponent } from "../../common/div-component";
import './pageScroll.css'

export class PageScroll extends DivComponent {
  constructor(parentState) {
    super()
    this.parentState = parentState
    this.offsetWidth = 0
    this.scrollWidth = 0
    this.neighbourEl = undefined
  }
  
  scrollRight() {
    const mainChildrenArray = this.el.parentElement.children

    for (const i of mainChildrenArray) {
      if(i.getAttribute('data-card') === ''){
        this.neighbourEl = i.querySelector('.card_grid')
      }
    }
    this.scrollWidth = this.neighbourEl.scrollWidth
    if ( this.offsetWidth < this.scrollWidth - this.neighbourEl.clientWidth ) {
      this.offsetWidth += this.neighbourEl.clientWidth + 25
      this.neighbourEl.style.transform = `translateX(-${this.offsetWidth}px)`
      console.dir(this.neighbourEl)
    } else {
      return
    }
  }

  scrollLeft() {
    const mainChildrenArray = this.el.parentElement.children

    for (const i of mainChildrenArray) {
      if(i.getAttribute('data-card') === ''){
        this.neighbourEl = i.querySelector('.card_grid')
      }
    }
    this.scrollWidth = this.neighbourEl.scrollWidth
    if ( this.offsetWidth !== 0) {
      this.offsetWidth -= this.neighbourEl.clientWidth + 25
      this.neighbourEl.style.transform = `translateX(-${this.offsetWidth}px)`
      console.dir(this.neighbourEl)
    } else {
      return
    }
  }

  render() {
    const pageScroll = document.createElement('div')
    pageScroll.classList.add('page-scroll')
    pageScroll.innerHTML = `
      <h2 class="scroll scroll_left">Previous page</h2>
      <h2 class="scroll scroll_right">Next page</h2>
    `

    pageScroll.querySelector('.scroll_right').addEventListener('click', this.scrollRight.bind(this))
    pageScroll.querySelector('.scroll_left').addEventListener('click', this.scrollLeft.bind(this))

    this.el.append(pageScroll)
    return this.el
  }
}
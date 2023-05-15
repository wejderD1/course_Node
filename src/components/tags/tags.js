import { DivComponent } from "../../common/div-component";

export class Tags extends DivComponent {
  constructor(data) {
    super()
    this.data = data
    this.tagsItems = ['tag1', 'tag2']
  }

  render() {
    const tags = document.createElement('div')
    tags.classList.add('tags__wrapper')
    tags.innerHTML = `
      <a href="#" class="tags__item">${this.tagsItems[0]}</a>
    `
    this.el.append(tags)
    return this.el
  }
}
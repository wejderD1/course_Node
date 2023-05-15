import { SelectedBookView } from "./views/book/selectedBook"
import { FavoritesView } from "./views/favorites/favorites"
import { MainView } from "./views/main/main"

class App {

  routes = [
    {path: '', view: MainView},
    {path: '#favorites', view: FavoritesView},
    {path: '#selectedBook', view: SelectedBookView},
  ]
  
  appState = {
    favorites: [],
    selected: []
  }
  
  constructor() {
    window.addEventListener('hashchange', this.route.bind(this))
    this.route()
  }

  selectUrl(urlHash){
    let str = urlHash
    str = str.match(/selectedBook/gi) ? '#selectedBook' : urlHash
    return str
  }

  route() {
    if(this.currentView){ 
      this.currentView.destroy()
    }

    const view = this.routes.find(r => r.path == this.selectUrl(location.hash)).view
  
    this.currentView = new view(this.appState)
    this.currentView.render()
  }
}

new App()
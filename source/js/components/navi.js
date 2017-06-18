import utils from '../libs/utils'

let header = document.querySelector('.header')
let openNavBtn = document.querySelector('.js-open-nav-btn')

let navi = {
  init() {
    window.addEventListener('scroll', this.handleScroll)
    openNavBtn.addEventListener('click', this.handleClick)
  },

  handleScroll() {
    let posY = window.pageYOffset || document.documentElement.scrollTop
    if (posY > 170) {
      utils.addClass(header, 'header--shrink')
      utils.removeClass(header, 'header--nav-open')
    } else {
      utils.removeClass(header, 'header--shrink')
    }
  },

  handleClick() {
    if (utils.hasClass(header, 'header--nav-open')) {
      utils.removeClass(header, 'header--nav-open')
    } else {
      utils.addClass(header, 'header--nav-open')
    }
  }
}

navi.init()

export default navi

import utils from '../libs/utils'

let colorboxEl = document.querySelectorAll('.colorbox')

let colorbox = {
  $el: null,

  init(el) {
    this.$el = el
    this.$el.addEventListener('click', this.handleClick)
  },

  handleClick(e) {
    var hasClass = utils.hasClass(e.currentTarget, 'colorbox--active')

    for (var i = 0; i < colorboxEl.length; i++) {
      utils.removeClass(colorboxEl[i], 'colorbox--active')
    }

    if (hasClass) {
      utils.removeClass(e.currentTarget, 'colorbox--active')
    } else {
      utils.addClass(e.currentTarget, 'colorbox--active')
    }
  }
}


for (var i = 0; i < colorboxEl.length; i++) {
  colorbox.init(colorboxEl[i])
}

export default colorbox

import utils from '../libs/utils'

let forms = document.querySelectorAll('.js-form')

let form = {
  $el: null,

  init(el) {
    this.$el = el
    el.addEventListener('submit', (event) => { this.handleSubmit(event) })
  },

  handleSubmit(e) {
    e.preventDefault()

    let btn = this.$el.querySelector('button')
    btn.disabled = true
    btn.innerHTML = 'Loading...'

    utils.loadScript('https://app.storyblok.com/storyblok-latest.js')
      .then(() => { this.sendEmail() })
  },

  sendEmail() {
    storyblok.init({accessToken: this.$el.getAttribute('data-token')})
    storyblok.sendEmail(utils.serialize(this.$el),
      (data) => {
        this.$el.innerHTML = '<h2 class="u__center">Message sent successfully</h2>'
      },
      (data) => {
        this.$el.innerHTML = '<h2 class="u__center">Something went wrong. Please try again.</h2>'
      })
  }
}

for (var i = 0; i < forms.length; i++) {
  form.init(forms[i])
}

export default form

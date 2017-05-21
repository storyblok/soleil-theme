export default {
  loadScript(src, resolve) {
    return new Promise(function(resolve, reject) {
      var s
      s = document.createElement('script')
      s.src = src
      s.onload = resolve
      s.onerror = reject
      document.head.appendChild(s)
    })
  },

  loadStylesheet(url) {
    var s = document.createElement('link')
    s.type = 'text/css'
    s.href = url
    s.rel = 'stylesheet'
    var x = document.getElementsByTagName('head')[0]
    x.appendChild(s)
  },

  hasClass(el, className) {
    return el.classList ? el.classList.contains(className) : new RegExp('\\b'+ className+'\\b').test(el.className);
  },

  addClass(el, className) {
    if (el.classList) el.classList.add(className);
    else if (!hasClass(el, className)) el.className += ' ' + className;
  },

  removeClass(el, className) {
    if (el.classList) el.classList.remove(className);
    else el.className = el.className.replace(new RegExp('\\b'+ className+'\\b', 'g'), '');
  },

  serialize(form) {
    var field
    var l
    var s = []

    if (typeof form == 'object' && form.nodeName == "FORM") {
      var len = form.elements.length

      for (var i=0; i<len; i++) {
        field = form.elements[i]

        if (field.name && !field.disabled && field.type != 'file' && field.type != 'reset' && field.type != 'submit' && field.type != 'button') {
          if (field.type == 'select-multiple') {
            l = form.elements[i].options.length
            for (var j=0; j<l; j++) {
              if(field.options[j].selected) {
                s[s.length] = encodeURIComponent(field.name) + "=" + encodeURIComponent(field.options[j].value)
              }
            }
          } else if ((field.type != 'checkbox' && field.type != 'radio') || field.checked) {
            s[s.length] = encodeURIComponent(field.name) + "=" + encodeURIComponent(field.value)
          }
        }
      }
    }

    return s.join('&').replace(/%20/g, '+')
  }
}


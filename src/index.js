import main from './main'

let hasRunMain = false

window.onload = () => {
  document.body.addEventListener('click', () => {
    if (!hasRunMain) {
      hasRunMain = true
      main()
    }
  })
}

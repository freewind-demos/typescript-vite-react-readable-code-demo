import { printAlert } from './utils'

const button = document.querySelector('#button')

// how to keep the comment in bundle file?
button?.addEventListener('click', () => {
  printAlert('Clicked');
})


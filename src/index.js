// Test import of a JavaScript module
// import { example } from '@/js/example'



// Test import of an asset
import restaurant from '@/images/restaurant.png'

// Test import of styles
import 'styles/index.scss'

import './js/mainSlide'
import './js/changeDishCategory'

// Appending to the DOM
const logo = document.createElement('img')
logo.src = restaurant

const heading = document.createElement('h1')
// heading.textContent = example()

// Test a background image url in CSS
const imageBackground = document.createElement('div')
imageBackground.classList.add('image')

// Test a public folder asset
// const imagePublic = document.createElement('img')
// imagePublic.src = '/assets/example.png'
//
// const app = document.querySelector('#root')
// app.append(logo, heading, imageBackground, imagePublic)

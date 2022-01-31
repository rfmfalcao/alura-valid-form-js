import { valid } from './valid.js'

const inputs = document.querySelectorAll('input')

inputs.forEach(input => {
    input.addEventListener('blur', (e) => {
        valid(e.target)   
    })
})
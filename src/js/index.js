const monthly = [...document.querySelectorAll('.monthly')]
const annually = [...document.querySelectorAll('.annually')]

const checkbox = document.getElementById('toggle')

checkbox.addEventListener('click', () => {
  if(!checkbox.checked === true) {
    annually.map(annual => {
      annual.classList.add('active')
    })
    monthly.map(month => {
      month.classList.remove('active')
    })
  } else {
    annually.map(annual => {
      annual.classList.remove('active')
    })
    monthly.map(month => {
      month.classList.add('active');
    })
  }
 
})

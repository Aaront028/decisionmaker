let choice = Math.trunc(Math.random() * 2) + 1
let isTired = document.querySelector('.tired').value
let notTired = document.querySelector('.notTired').value

document.querySelector('.tired').addEventListener('click', function () {
  if (isTired) {
    document.querySelector('.outcomeAnswer').textContent = ''
    document.querySelector('.decide').addEventListener('click', function () {
      document.querySelector('.outcomeAnswer').textContent = 'go to sleep'
    })
  }
})

document.querySelector('.notTired').addEventListener('click', function () {
  if (notTired) {
    document.querySelector('.outcomeAnswer').textContent = ''
    document.querySelector('.decide').addEventListener('click', function () {
      choice = Math.trunc(Math.random() * 2) + 1
      let choice1 = document.querySelector('.choice1').value
      let choice2 = document.querySelector('.choice2').value
      let result = choice === 1 ? choice1 : choice2
      document.querySelector('.outcomeAnswer').textContent = result
    })
  }
})

// let isTired = document.querySelector('.tired').value
// let notTired = document.querySelector('.notTired').value
// let choice = Math.floor(Math.random() * 2) + 1
// let blockChoice = document.querySelector('.hidden')
// blockChoice.classList.add('hidden')
// if (notTired === true) {
//   if (choice === 1) {
//     blockChoice.classList.remove('hidden')
//   } else {
//     console.log('watch The Boys')
//   }
// } else {
//   console.log('study')
// }

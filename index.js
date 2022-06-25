let choice = Math.trunc(Math.random() * 2) + 1
let isTired = document.querySelector('.tired').value
let notTired = document.querySelector('.notTired').value
let hideBlock = document.querySelector('.hidden')

document.querySelector('.tired').addEventListener('click', function () {
  document.querySelector('.block').classList.add('hidden')
  document.querySelector('.send').addEventListener('click', function () {
    document.querySelector('.outcomeAnswer').textContent = 'go to sleep'
  })
})

if (notTired) {
  document.querySelector('.notTired').addEventListener('click', function () {
    let hideBlock = document.querySelector('.hidden')

    if (hideBlock) {
      document.querySelector('.hidden').classList.remove('hidden')
      document.querySelector('.decide').addEventListener('click', function () {
        let choice1 = document.querySelector('.choice1').valuehidden
        let choice2 = document.querySelector('.choice2').value
        let result = choice === 1 ? choice1 : choice2
        document.querySelector('.outcomeAnswer').textContent = result
      })
    }
  })
}

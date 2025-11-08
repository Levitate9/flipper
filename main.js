function hideCards(index, cards) {
  for (let i = 0; i < cards.length; i++) {
    (i < index)
      ? cards[i].style.display = 'block'
      : cards[i].style.display = 'none'
  }
}

function selectView(id) {
  let container = document.querySelector('.cards')
  let cards = document.querySelectorAll('.flip-card')
  switch (id) {
    case "three":
      container.style.gridTemplateColumns = 'auto auto auto'
      container.style.alignContent = 'center'
      hideCards(3, cards)
      break
    case "four":
      container.style.gridTemplateColumns = 'auto auto'
      hideCards(4, cards)
      break
    case "six":
      container.style.gridTemplateColumns = 'auto auto auto'
      container.style.alignContent = 'flex-start'
      hideCards(6, cards)
      break
  }
}

function toggleActive(id) {
  let divs = Array.from(document.querySelectorAll('.nav'))
  for (let i = 0; i < divs.length; i++) {
    if (!divs[i].classList.value.includes(id)) {
      divs[i].classList.remove('active')
    } else {
      divs[i].classList.add('active')
      selectView(id)
    }
  }
}
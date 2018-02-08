const getFirstSelector = (selector) => {
  return document.querySelector(selector)
}

const nestedTarget = () => {
  return document.getElementById('nested')
}

const increaseRankBy = (n) => {
  const items = document.querySelectorAll('ul.ranked-list li')
  
  for (let i = 0; i < items.length; i++) {
    items[i].innerHTML = parseInt(items[i].innerHTML, 10) + n
  }
}
const getFirstSelector = (selector) => {
  return document.querySelector(selector)
}

const nestedTarget = () => {
  return document.getElementById('nested')
}

const increaseRankBy = (n) => {
  const items = document.querySelectorAll('ul.ranked-list li')
  
  // for (let i of items) returns undefined
  for (let i in items) {
    items[i].innerHTML = parseInt(items[i].innerHTML, 10) + n
  }
}
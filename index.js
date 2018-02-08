const getFirstSelector = (selector) => {
  return document.querySelector(selector)
}

const nestedTarget = () => {
  return document.getElementById('nested')
}

const increaseRankBy = (n) => {
  let items = document.querySelectorAll('ul.ranked-list li')
  
  for (const i of items) {
    parseInt(items[i] += n).innerHTML
  }
}
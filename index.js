const getFirstSelector = (selector) => {
  return document.querySelector(selector)
}

const nestedTarget = () => {
  return document.getElementById('nested')
}

const increaseRankBy = (n) => {
  let items = document.querySelectorAll('ul.ranked-list li')
  return items.forEach(item => {
    console.log(item)
  })
}
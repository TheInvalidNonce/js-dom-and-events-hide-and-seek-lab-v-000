const getFirstSelector = (selector) => {
  return document.querySelector(selector)
}

const nestedTarget = () => {
  return document.getElementById('nested')
}

const increaseRankBy = (n) => {
  let items = parseInt(document.querySelectorAll('ul.ranked-list li').innerHTML + n)
  console.log(items)
}
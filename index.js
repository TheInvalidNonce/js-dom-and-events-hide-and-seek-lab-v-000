const getFirstSelector = (selector) => {
  return document.querySelector(selector)
}

const nestedTarget = () => {
  return document.getElementById('nested')
}

const increaseRankBy = (n) => {
  let items = document.querySelectorAll('ul.ranked-list li')
  
  for (let i in items) {
    return parseInt(i.innerHTML += n);
  }
}
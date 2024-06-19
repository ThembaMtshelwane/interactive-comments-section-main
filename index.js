document.addEventListener('DOMContentLoaded', () => {
  fetch('./data.json')
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
    })
    .catch((error) => console.error('Error loading JSON:', error))
})

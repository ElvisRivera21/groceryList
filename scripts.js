//Scripts.js

//Function to toggle the 'Strikethrough'class
function toggleStrikethrough(event) {
      console.log('Item clicked:', event.target); // This should log when you click an item
    //'event.target' is the click element
    event.target.classList.toggle('strikethrough');
}

//add click event listeners to all list items
document.addEventListener('DOMContentLoaded', (event) => {
    const listItems = document.querySelectorAll('li');
    listItems.forEach((item) => {
        item.addEventListener('click', toggleStrikethrough);
    });
});
const hambugerMenu = document.querySelector('#hamburger-menu');
const primaryLinks = document.querySelector('.primary-links');
const secondaryLinks = document.querySelector('.secondary-links');

hambugerMenu.addEventListener('click', () =>{
    primaryLinks.style.display = 'block';
    secondaryLinks.style.display = 'block';
})
console.log(hambugerMenu);
console.log(primaryLinks);
console.log(secondaryLinks);
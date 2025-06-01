const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () =>{
    navLinks.classList.toggle('active');
    burger.classList.toggle('toggle');

});
document.querySelectorAll('.nav-links a').forEach(link =>{
    link.addEventListener('click',() => {
        navLinks.classList.remove('active');
        burger.classList.remove('toggle');
    });
})
document.querySelectorAll('card').forEach(card =>{
    card.addEventListener('click', function(){
        console.log('Card clicked:' + this.querySelector('h2').textContent)
    });
});
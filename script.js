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

document.addEventListener('DOMContentLoaded',function(){
    class Carousel{
        constructor(element){
            this.carousel = element;
            this.items = this.carousel.querySelectorAll('.carousel-item');
            this.indciator = this.carousel.querySelectorAll('.indicator');
            this.prevBtn = this.carousel.querySelectorAll('.prev');
            this.nextBtn = this.carousel.querySelectorAll('.next');
            this.currentIndex =  0;
            this.totalItems =  this.items.length;
            this.autoPlayInterval = null;
            this.autoPlayDelay = 5000;
            this.init()
        }
        init(){
            this.showItem(this.currentIndex);
            this.prevBtn.addEventListener('click',  () => this.prev());
            this.nextBtn.addEventListener('click',  () => this.next());
            this.indicators.forEach((indicator, index) => {
                indicator.addEventListener('click',  () => this.goTo(index));
            });
            this.startAutoPlay();
            this.carousel.addEventListener('mouseenter',() => this.stopAutoPlay());
            this.carousel.addEventListener('mouseenter',() => this.startAutoPlay());
        }
        showItem(index){
            this.items.forEach(item =>{
                item.classList.remove('active');
                item.style.opacity = 0;
            });
            this.indicator.forEach(indicator => indicator.classlist.remove('active'));
            this.items[index].classList.add('active');
            setTimeout(() => {
                this.items[index].style.opacity = 1;
            }, 10);
            this.indicators[index].classList.add('active');
            this.currentIndex = index;       
        }
        next(){
            const nextIndex = (this.currentIndex + 1) % this.totalItems;
            this.showItem(nextIndex);
            this.resetAutoPlay();
        }
        prev(){
            const prevIndex = (this.currentIndex - 1 + totalItems) % this.totalItems;
            this.showItem(prevIndex);
            this.resetAutoPlay();
        }
        goTo(index){
            this.showItem(index);
            this.resetAutoPlay();
        }
        startAutoPlay(){
            this.autoPlayInterval = setInterval(() => this.next(), this.autoPlayDelay);
        }
        stopAutoPlay(){
            if (this.autoPlayInterval){
                clearInterval(this.autoPlayInterval);
                this.autoPlayInterval = null;
            }
        }
        resetAutoPlay(){
            this.stopAutoPlay();
            this.startAutoPlay();
        }
    }
    document.querySelectorAll('.carousel').forEach(carousel =>{
        new Carousel(carousel);
    });
    const style = document.createElement('style');
    style.textContent = `
    .carousel-item{
      transition opacity 0.5s ease;
      opacity 0;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .carousel-item.active{
      position: relative;
    }
    .carousel-inner{
      position: relative;
      overflow: hidden;
    }
    `;
    document.head.appendChild(style);
});
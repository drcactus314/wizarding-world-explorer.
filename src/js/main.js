console.log("hello");

const button = document.querySelector('.hero-section__button');
const category = document.querySelector('.categories-section');
console.log(category);

const getCategories =(e)=>{
    e.preventDefault();
    category.classList.toggle('visually-hidden');
    category.scrollIntoView({ 
            behavior: 'smooth', // Плавна прокрутка
            block: 'start'})
    console.log(category);
    
}
button.addEventListener('click', getCategories);
console.log(button);


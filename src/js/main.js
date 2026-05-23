import {renderStudentsSection} from "./components/students"
import {getStudents} from "./api/api"

const button = document.querySelector('.hero-section__button');
const category = document.querySelector('.categories-section');
console.log(category);

const getCategories =(e)=>{
    e.preventDefault();
    category.classList.toggle('visually-hidden');
    category.scrollIntoView({ 
            behavior: 'smooth', // Плавна прокрутка
            block: 'start'})
    
}
button.addEventListener('click', getCategories);


const sectionsButtons = document.querySelector('.categories-section__list');
const mainContent = document.getElementById('app');

sectionsButtons.addEventListener('click', (e)=>{
      const clickedButton = e.target.id;
      navigateToCategory(clickedButton)
})

 const navigateToCategory = (buttonId)=>{
    mainContent.innerHTML = '';
     if (buttonId === 'students-button'){
        mainContent.innerHTML = renderStudentsSection();
    } else if(buttonId === 'teachers-button'){
        mainContent.innerHTML = '<h1>teachers</h1>';
    } else if(buttonId === 'faculty-button'){
        mainContent.innerHTML = '<h1>Houses</h1>';
    } else {
        mainContent.innerHTML = '<h1>Повернутись на головну</h1><button>Вернутись</button>';
    }
}

const data = await getStudents();
console.log(data);



export default function getData(data){
    return data.map((item)=> {return {
        name: item.name,
        id: item.id
    }}
    
    )
}
const students = getData(data);
console.log(students);





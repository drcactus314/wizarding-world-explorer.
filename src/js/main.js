import { renderHomePage } from "./components/home";
import { getStudents } from "./api/api";
import {
  renderStudentsSection,
  unPacked,
  createCard,
} from "./components/students";

const mainContent = document.getElementById("app");
mainContent.innerHTML = renderHomePage();

 const loadStudents = async() => {
      const rawData = await getStudents();
      const students = unPacked(rawData);
      const studentsCard = createCard(students);
      mainContent.innerHTML = renderStudentsSection(studentsCard);
      const studentsToView = document.querySelector(".students")
      studentsToView.scrollIntoView({
      behavior: 'smooth',
      block: "start"
    });
  }

mainContent.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.classList.contains("hero-section__button")) {
    const category = document.querySelector(".categories-section");
    category.classList.remove("visually-hidden");
    category.scrollIntoView({
      behavior: "smooth",
    });
  } else if (e.target.id === "students-button") {
     loadStudents();
    
  } else if (e.target.id === "back-button") {
    mainContent.innerHTML = renderHomePage();
  } 
   
});

import { renderHomePage } from "./components/home";
import { renderStaffSection} from "./components/staff";
import { renderHouseSection} from "./components/houses";
import { getStudents, getStaff, getHouses } from "./api/api";
import {
  renderStudentsSection,
  unPacked,
  createCard,
} from "./components/students";

const mainContent = document.getElementById("app");
mainContent.innerHTML = renderHomePage();

const loadStudents = async () => {
  const rawData = await getStudents();
  const students = unPacked(rawData);
  const studentsCard = createCard(students);
  mainContent.innerHTML = renderStudentsSection(studentsCard);
  const studentsToView = document.querySelector(".students");
  studentsToView.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

const loadStaff = async ()=>{
  const rawData = await getStaff();
  const staff = unPacked(rawData);
  const staffCard = createCard(staff);
  mainContent.innerHTML = renderStaffSection(staffCard);
  const staffToView = document.querySelector(".staff");
  staffToView.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
  
}

const loadHouses =async()=>{
  const rawData = await getHouses();
  const housesData = unPacked(rawData);
  const housesCard = createCard(housesData);
  mainContent.innerHTML = renderHouseSection(housesCard);
  const staffToView = document.querySelector(".houses");
  staffToView.scrollIntoView({
    behavior: "smooth",
    block: "start",
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
  } else if (e.target.id === "staff-button") {
    loadStaff();
  } else if (e.target.id === "houses-button") {
    loadHouses();
  }else if (e.target.id === "back-button") {
    mainContent.innerHTML = renderHomePage();
  }
});

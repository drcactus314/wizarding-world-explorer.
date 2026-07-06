import { renderHomePage } from "./components/home";
import { renderStaffSection } from "./components/staff";
import { renderHouseSection } from "./components/houses";
import { getStudents, getStaff, getCharacters } from "./api/api";
import {
  renderStudentsSection,
  unPacked,
  createCard,
} from "./components/students";

import { getFilterHouses } from "./utils/filter.js";

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

const loadStaff = async () => {
  const rawData = await getStaff();
  const staff = unPacked(rawData);
  const staffCard = createCard(staff);
  mainContent.innerHTML = renderStaffSection(staffCard);
  const staffToView = document.querySelector(".staff");
  staffToView.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

const loadHouses = async () => {
  mainContent.innerHTML = renderHouseSection("");

  const housesToView = document.querySelector(".houses");
  housesToView.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

const updateHouseCards = async (houseName) => {
  const rawData = await getFilterHouses(houseName);
  const houses = unPacked(rawData);
  const houseCard = createCard(houses);
  const cardContainer = document.querySelector(".card-section-flex");
  if (cardContainer) {
    cardContainer.innerHTML = `${houseCard}
    <button class="item-card__button" id="back-button">Повернутись назад</button>`;
  }
};

mainContent.addEventListener("click", (e) => {
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
  } else if (e.target.id === "back-button") {
    mainContent.innerHTML = renderHomePage();
  } else if (e.target.id === "Hufflepuff") {
    updateHouseCards(e.target.id);
  } else if (e.target.id === "Gryffindor") {
    updateHouseCards(e.target.id);
  } else if (e.target.id === "Slytherin") {
    updateHouseCards(e.target.id);
  } else if (e.target.id === "Ravenclaw") {
    updateHouseCards(e.target.id);
  }
});

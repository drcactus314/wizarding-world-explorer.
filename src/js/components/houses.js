const housePage = document.querySelector(".houses");
console.log(housePage);

housePage.addEventListener("click", alert("Привіт"))
export const createCard = (student) => {
  const firstEightStud = student.slice(0, 8);

  const cardHtml = firstEightStud
    .map(
      (card) => `
      <div class="item-card">
      <image class="item-card__image" src="${card.image}"/ >
      <div class="item-card__wrapper"></div>
      <div class="item-card__description">
      <p class="item-card__name">${card.name}</p>
      <div class="item-card__data">
       <p class="item-card__alter-name">${card.alternateNames[0]}</p>
      <p class="item-card__house">${card.house}</p>
      <p class="item-card__birth">${card.dateOfBirth}</p>
      </div>
      <div class="item-card__interactive">
      <button class="item-card__button">Більше інформації</button> 
      <img src="./src/assets/images/hp-arrow-card.svg"/>
      </div>
      </div>
    </div>
    `,
    )
    .join("");
  return cardHtml;
};
export const renderHouseSection = (card) => {

  return `
   <div class="houses">
     <section class="card-section">
      <h1 class="card-section__title">Персонажі в певному будинку</h1>
      <div class="card-section__filtered-list">
      <button class="card-section__button">
      <img class="card-section__image" src="./src/assets/images/hp-gryf.png"/>      
      Gryffindor
      </button>
      <button class="card-section__button">
      <img class="card-section__image" src="./src/assets/images/hp-sliz.png"/>   
      Slytherin
      </button>
      <button class="card-section__button">
      <img class="card-section__image" src="./src/assets/images/hp-rawen.png"/>   
      Hafelpuff
      </button>
      <button class="card-section__button">
      <img class="card-section__image" src="./src/assets/images/hp-haffel.png"/>
      Rawenclaw
      </button>
      </div>
      <div class="flex-container">
      ${card}
           <button class="item-card__button" id="back-button">Повернутись назад</button>
      </div>
     </section>
    </div>
  `;
};

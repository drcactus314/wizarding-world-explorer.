export const unPacked = (data) => {
  const student = data.map((item) => {
    return {
      image: item.image,
      name: item.name,
      alternateNames: item.alternate_names,
      house: item.house,
      dateOfBirth: item.dateOfBirth,
    };
  });
  return student;
};

export const createCard = (student) => {
  const firstEightStud = student.slice(0, 8);
  const cardHtml = firstEightStud
    .map(
      (card) => `
      <div class="students-card">
      <image class="students-card__image" src="${card.image}"/ >
      <div class="students-card__wrapper"></div>
      <div class="students-card__description">
      <p class="students-card__name">${card.name}</p>
      <div class="students-card__data">
       <p class="students-card__alter-name">${card.alternateNames[0]}</p>
      <p class="students-card__house">${card.house}</p>
      <p class="students-card__birth">${card.dateOfBirth}</p>
      </div>
      <div class="students-card__interactive">
      <button class="students-card__button">Більше інформації</button> 
      <img src="./src/assets/images/hp-arrow-card.svg"/>
      </div>
      </div>
    </div>
    `,
    )
    .join("");
  return cardHtml;
};

export const renderStudentsSection = (card) => {
  return `
    <div class="students">
     <section class="students-section">
      <h1 class="students-section__title">Студенти Гогвортсу</h1>
      <div class="flex-container">
      ${card}
           <button class="students-card__button" id="back-button">Повернутись назад</button> 
      </div>
     </section>
    </div>
    
    `;
};

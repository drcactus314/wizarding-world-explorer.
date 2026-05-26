export const unPacked = (data) => {
  const staff = data.map((item) => {
    return {
      image: item.image,
      name: item.name,
      alternateNames: item.alternate_names,
      house: item.house,
      dateOfBirth: item.dateOfBirth,
    };
  });
  return staff;
};

export const createCard = (staff) => {
  const firstEightStud = staff.slice(0, 8);
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







export const renderStaffSection = (card)=>{



    return `
    <div class="staff">
     <section class="card-section">
      <h1 class="card-section__title">Співробітники Гогвортсу</h1>
      <div class="flex-container">
      ${card}
           <button class="item-card__button" id="back-button">Повернутись назад</button>
      </div>
     </section>
    </div>
    `
}
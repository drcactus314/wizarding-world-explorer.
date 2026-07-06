export const unPacked = (data) => {
  
  const student = data.map((item) => {
   
    return {
      image: item.image,
      name: item.name,
      alternateNames: item.alternate_names,
      species: item.species,
      gender: item.gender,
      house: item.house,
      dateOfBirth: item.dateOfBirth,
      yearOfBirth: item.yearOfBirth,
      wizard: item.wizard,
      ancestry: item.ancestry,
      eyeColor: item.eyeColour,
      hairColor: item.hairColour,
      wood: item.wand.wood,
      core: item.wand.core,
      length: item.wand.length,
      patronus: item.patronus,
      hogwardsStudent: item.hogwartsStudent,
      hogwardsStaff: item.hogwartsStaff,
      actor: item.actor,
      alive: item.alive,
    };
  });
  return student;
};

export const createCard = (student) => {
  const firstEightStud = student.slice(0, 8);
  const cardHtml = firstEightStud
    .map(
      (card) => `
      <div class="item-card">
      <div class="item-card__info-wrapper">
      <p>
      <span class="info-text">Name:</span>
      <span class="info-data"> ${card.name}</span>
      </p>
      <p>
      <span class="info-text">Alternate Name:</span>
      <span class="info-data"> ${card.alternateNames[0]}</span>
      </p>
      <p>
      <span class="info-text">Species:</span>
      <span class="info-data"> ${card.species}</span>
      </p>
      <p>
      <span class="info-text">Gender:</span>
      <span class="info-data"> ${card.gender}</span>
      </p>
      <p>
      <span class="info-text">House:</span>
      <span class="info-data"> ${card.house}</span>
      </p>
      <p>
      <span class="info-text">Day of birth:</span>
      <span class="info-data"> ${card.dateOfBirth}</span>
      </p>
      <p>
      <span class="info-text">Year of birth:</span>
      <span class="info-data"> ${card.yearOfBirth}</span>
      </p>
      <p>
      <span class="info-text">Wizard:</span>
      <span class="info-data"> ${card.wizard}</span>
      </p>
      <p>
      <span class="info-text">Ancestry:</span>
      <span class="info-data"> ${card.ancestry}</span>
      </p>
      <p>
      <span class="info-text">Name:</span>
      <span class="info-data"> ${card.eyeColor}</span>
      </p>
      <p>
      <span class="info-text">Hair Color:</span>
      <span class="info-data"> ${card.hairColor}</span>
      </p>
      <p>
      <span class="info-text">Wand:</span>
      <span class="info-data"> Wood: ${card.wood}, core:"${card.core}", length:${card.length}</span>
      </p>
      <p>
      <span class="info-text">Patronus:</span>
      <span class="info-data"> ${card.patronus}</span>
      </p>
      <p>
      <span class="info-text">Hogwarts Student:</span>
      <span class="info-data"> ${card.hogwardsStudent}</span>
      </p>
      <p>
      <span class="info-text">Hogwarts Staff:</span>
      <span class="info-data"> ${card.hogwardsStaff}</span>
      </p>
      <p>
      <span class="info-text">Actor:</span>
      <span class="info-data"> ${card.actor}</span>
      </p>
      <p>
      <span class="info-text">Alive:</span>
      <span class="info-data"> ${card.alive}</span>
      </p>
   
      
      </div>
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

export const renderStudentsSection = (card) => {
  return `
    <div class="students">
     <section class="card-section">
      <h1 class="card-section__title">Студенти Гогвортсу</h1>
      <div class="flex-container">
      ${card}
           <button class="item-card__button" id="back-button">Повернутись назад</button> 
      </div>
     </section>
    </div>
    `;
};

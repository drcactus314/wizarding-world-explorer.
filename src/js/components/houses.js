import React from 'react'

export const renderHousePage = () => {
  return `
   <div class="houses">
     <section class="card-section">
      <h1 class="card-section__title">Факультети Гогвортсу</h1>
      <div class="flex-container">
      ${card}
           <button class="item-card__button" id="back-button">Повернутись назад</button>
      </div>
     </section>
    </div>
  `
}

// import { renderStudentsSection } from "./students";

export const renderHomePage =()=>{

    return `
    <div class="wrapper">
        <main class="content-container">
          <section class="hero-section">
            <div class="container hero-section__container">
              <h1 class="hero-section__title">
                Ласкаво просимо у світ Гаррі Поттера
              </h1>
              <button type="button" class="hero-section__button">
                Показати всіх персонажів
              </button>
            </div>
          </section>
          <section class="categories-section container visually-hidden" >
            <ul class="categories-section__list">
              <li class="categories-section__list-card card">
                <article class="categories-section__list-card-content">
                  <figure>
                    <img
                      src="src/assets/images/hp-students.jpg"
                      alt="Студенти Гогвортсу"
                      class="card__image"
                    />
                  </figure>
                  <button type="button" class="card__button button"  id="students-button">
                    Студенти Гогвортсу
                  </button>
                </article>
              </li>
              <li class="categories-section__list-card">
                <article class="categories-section__list-card-content">
                  <figure>
                    <img
                      src="src/assets/images/hp-teachers.jpg"
                      alt="Вчителі Гогвортсу"
                      class="card__image"
                    />
                  </figure>
                  <button type="button" class="card__button button"  id="staff-button">
                    Співробітники Гогвортсу
                  </button>
                </article>
              </li>
              <li class="categories-section__list-card">
                <article class="categories-section__list-card-content">
                  <figure>
                    <img
                      src="src/assets/images/hp-houses.jpg"
                      alt="Факультети Гогвортсу"
                      class="card__image"
                    />
                  </figure>
                  <button type="button" class="card__button button" id="houses-button">
                    Факультети Гогвортсу
                  </button>
                </article>
              </li>
            </ul>
          </section>
        </main>
      </div>
    
    `
}
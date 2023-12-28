<template>
  <div class="reviews">
    <div class="reviews-content width">
      <div class="reviews-title">
        <p class="reviews-main-title">
          Aimé par des milliers d’élèves & de parents
        </p>
        <p class="reviews-subtitle">
          Papillon est l’app alternative de vie scolaire numéro 1 du marché, et les avis en témoignent.
        </p>
      </div>
      <div class="reviews-container">
        <div class="review">
          <div class="review-title">
            <p>Un changement de vie</p>
            <img src="~/assets/img/stars.svg" alt="5 étoiles" />
          </div>
          <div class="review-name">
            <p>Timo FEB.</p>
            <span>•</span>
            <p>19 oct 2023</p>
          </div>
          <p class="review-text">
            Grâce à cette application magique, la gestion de mon emploi du temps a évolué. Pourquoi ? Parce que l’application Papillon est passée par là...
          </p>
        </div>
        <div class="review">
          <div class="review-title">
            <p>Super appli</p>
            <img src="~/assets/img/stars.svg" alt="5 étoiles" />
          </div>
          <div class="review-name">
            <p>Dreiouchdu92</p>
            <span>•</span>
            <p>30 sept. 2023</p>
          </div>
          <p class="review-text">
            Depuis la mise à jour c’est vraiment devenu la meilleure application, elle est très stable et marche même hors connexion !
          </p>
        </div>
        <div class="review">
          <div class="review-title">
            <p>Bravo les gars</p>
            <img src="~/assets/img/stars.svg" alt="5 étoiles" />
          </div>
          <div class="review-name">
            <p>et apres ?</p>
            <span>•</span>
            <p>21 nov 2023</p>
          </div>
          <p class="review-text">
            Bravo les gars c’est trop bien, PRONOTE en mode sombre, avec couleurs personnalisable, accueil aussi etc. Bref une dinguerie.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .reviews {
    background: #16302A;
    color: #fff;
  }

  .reviews-content {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding-top: 40px;
    padding-bottom: 50px;
  }

  .reviews-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }

  .reviews-main-title {
    font-size: 24px;
    font-weight: bold;
    margin: 0;
    padding: 0;
    text-align: center;
  }

  .reviews-subtitle {
    font-size: 16px;
    font-weight: 500;
    margin: 0;
    padding: 0;
    opacity: 0.6;
    text-align: center;
  }

  .reviews-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  .review {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 16px;
    background: #ffffff10;
    border-radius: 10px;
    width: 100%;
    border: 1px solid #ffffff20;
  }

  .review-title {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }

  .review-title p {
    font-size: 18px;
    font-weight: bold;
    margin: 0;
    padding: 0;
  }

  .review-title img {
    margin-top: -2px;
  }

  .review-name {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    margin-bottom: 5px;
  }

  .review-name p {
    font-size: 14px;
    font-weight: 600;
    margin: 0;
    padding: 0;
    opacity: 0.6;
  }

  .review-name span {
    font-size: 14px;
    font-weight: 500;
    margin: 0;
    padding: 0;
    opacity: 0.3;
  }

  .review-text {
    font-size: 15px;
    font-weight: 400;
    margin: 0;
    padding: 0;
    opacity: 1;
  }

  @media (max-width: 1000px) {
    .reviews-content {
      padding-top: 30px;
      padding-bottom: 30px;
    }

    .reviews-container {
      flex-direction: column;
    }

    .review {
      width: calc(100% - 20px);
    }
  }
</style>
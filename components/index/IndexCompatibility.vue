<template>
  <div class="compatibilty">
    <div class="compatibilty-container width">
      <div class="compatibilty-text">
        <p>Plus de 44 ENT compatibles</p>
        <div class="ents">
          <img src="~/assets/img/ent1.png" alt="ENT 1" />
          <img src="~/assets/img/ent2.png" alt="ENT 2" />
          <img src="~/assets/img/ent3.png" alt="ENT 3" />
          <img src="~/assets/img/ent4.png" alt="ENT 4" />
          <img src="~/assets/img/ent5.png" alt="ENT 5" />
        </div>
        <p class="no-mobile">dans plus de 7 000 établissements</p>
      </div>

      <p class="end-text no-mobile">
        .. et ça augmente chaque jour
      </p>
    </div>
  </div>
</template>

<style scoped>
  .compatibilty {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), #32AB8E;
    height: 60px;
  }

  .compatibilty-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    color: #fff;
  }

  .compatibilty-text {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .compatibilty-text p {
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-weight: 600;
    line-height: 110%;
  }

  .ents {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .ents img {
    border-radius: 50px;
  }

  .end-text {
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-weight: 500;
    line-height: 110%;
    opacity: 0.5;
  }

  @media (max-width: 1208px) {
    .end-text {
      display: none;
    }

    .compatibilty-container {
      justify-content: center;
    }
  }

  @media (max-width: 800px) {
    .compatibilty {
      height: auto;
    }

    .compatibilty-container {
      flex-direction: column;
      gap: 15px;
      padding: 16px 0;
    }

    .compatibilty-text {
      flex-direction: column;
      gap: 8px;
    }

    .ents {
      gap: 8px;
    }

    .no-mobile {
      display: none;
    }
  }
</style>
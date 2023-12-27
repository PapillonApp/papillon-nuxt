<template>
  <div class="index-header">
    <div class="index-header-content width">
      <div class="id-data">
        <p class="title">
          Enfin une app simple<br/>
          pour votre vie scolaire
        </p>
        <p class="description">
          Votre emploi du temps, votre agenda, vos notes, vos news et bien plus encore en un clin d’œil grâce à la nouvelle app Papillon.
        </p>

        <div class="buttons">
          <a href="https://apps.apple.com/fr/app/papillon-pour-pronote-ed/id1662669707" class="button button-primary">
            <img src="~/assets/img/app-store.svg" alt="App Store" />
            <span>App Store</span>
          </a>
          <a href="https://play.google.com/store/apps/details?id=plus.pronote.app" class="button button-secondary">
            <img src="~/assets/img/google-play.svg" alt="Google Play" />
            <span>Google Play</span>
          </a>
        </div>

        <div class="compatibility">
          <p>Compatible avec</p>
          <img src="~/assets/img/logo_modern_pronote.png" alt="Pronote" />
          <img src="~/assets/img/logo_modern_skolengo.png" alt="Skolengo" />
        </div>

        <p class="terms">
          En téléchargeant l’app, vous acceptez les <a href="https://docs.getpapillon.xyz/documents/privacy-policy/">conditions d’utilisation</a> et la <a href="https://docs.getpapillon.xyz/documents/privacy-policy/">politique de confidentialité</a>
        </p>
      </div>

      <img class="id-image" src="~/assets/img/headerimage.png" alt="Illustration" />
    </div>
  </div>
</template>
<style scoped>
  .index-header {
    background: #32AB8E;
    height: 450px;
    color: #fff;
    position: relative;
    overflow: hidden;
  }

  .index-header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

  .id-image {
    height: 100%;
    position: absolute;
    left: 42%;
  }

  .id-data {
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .id-data .title {
    text-edge: cap;
    font-size: 34px;
    font-weight: 700;
    line-height: 100%;
  }

  .id-data .description {
    font-size: 16px;
    font-weight: 500;
    line-height: 110%;
    opacity: 70%;
  }

  .id-data .buttons {
    display: flex;
    gap: 14px;
  }

  .id-data .buttons .button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 10px 20px;
    border-radius: 30px;
    font-size: 16px;
    font-weight: 500;
    line-height: 110%;
    text-decoration: none;
    color: #fff;
  }

  .id-data .buttons .button-primary {
    background: #ffffff33;
  }

  .id-data .buttons .button-secondary {
    background: #ffffff00;
    border: 1px solid #ffffff99;
  }

  .id-data .buttons .button-primary:hover {
    background: #ffffff55;
  }

  .id-data .buttons .button-secondary:hover {
    background: #ffffff11;
  }

  .id-data .compatibility {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    font-weight: 500;
    line-height: 110%;
    opacity: 100%;
  }

  .id-data .terms {
    font-size: 14px;
    font-weight: 500;
    line-height: 110%;
    color: #ffffff55;
  }

  .id-data .terms a {
    color: #ffffff99;
  }

  @media (max-width: 800px) {
    .index-header {
      height: auto;
    }

    .index-header-content {
      flex-direction: column;
      gap: 20px;
    }

    .id-data {
      width: 100%;
      align-items: center;
      text-align: center;
      margin-top: 40px;
      margin-bottom: 40px;
    }

    .id-data .title {
      font-size: 28px;
    }

    .id-data .description {
      font-size: 14px;
    }

    .id-data .buttons {
      flex-direction: column;
      gap: 10px;
    }

    .id-data .terms {
      font-size: 12px;
    }

    .id-image {
      display: none;
    }
  }
</style>
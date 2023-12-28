<script setup>
  import { Users, BookLock, LifeBuoy, Brain } from 'lucide-vue-next'
</script>

<template>
  <div class="reviews">
    <div class="reviews-content width">
      <div class="reviews-title">
        <p class="reviews-main-title">
          Créé par des élèves, pour des élèves
        </p>
        <p class="reviews-subtitle">
          L’application est majoritairement développée par des lycéens sur leur temps libre, pour aider tous les élèves.
        </p>
      </div>
    </div>
    <div class="features-content width">
      <div class="feature">
        <div class="feature-icon">
          <Users color="#29947a" />
        </div>
        <p class="feature-title">
          Communautaire
        </p>
        <p class="feature-desc">
          La communauté de développeurs permet à Papillon d’évoluer
        </p>
      </div>
      <div class="feature-separator"></div>
      <div class="feature">
        <div class="feature-icon">
          <BookLock color="#29947a" />
        </div>
        <p class="feature-title">
          Sécurisé
        </p>
        <p class="feature-desc">
          Le code open-source permet d’assurer efficacement la sécurité de vos données scolaires
        </p>
      </div>
      <div class="feature-separator"></div>
      <div class="feature">
        <div class="feature-icon">
          <LifeBuoy color="#29947a" />
        </div>
        <p class="feature-title">
          Assistance
        </p>
        <p class="feature-desc">
          Tout le monde peut participer à réparer des bugs et problèmes sur l’app
        </p>
      </div>
      <div class="feature-separator"></div>
      <div class="feature">
        <div class="feature-icon">
          <Brain color="#29947a" />
        </div>
        <p class="feature-title">
          Apprendre
        </p>
        <p class="feature-desc">
          Participer à Papillon permet à tout le monde d’apprendre simplement le code
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .reviews {
    background: #DCF3ED;
    color: #16302A;
  }

  .reviews-content {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding-top: 40px;
    padding-bottom: 15px;
  }

  .features-content {
    display : flex;
    align-items: center;
    padding-bottom: 25px;
  }

  .reviews-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    text-align: center;
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
  }

  .feature {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    gap: 5px;
    width: 100%;
  }

  .feature-icon {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    border: 2px solid #29947a;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5px;
  }

  .feature-title {
    font-size: 19px;
    font-weight: 600;
    margin: 0;
    padding: 0;
  }

  .feature-desc {
    font-size: 15px;
    font-weight: 500;
    margin: 0;
    padding: 0;
    text-align: center;
    opacity: 0.8;
  }

  .feature-separator {
    width: 2px;
    height: 100px;
    background: #00000022;
    border-radius: 2px;
  }

  @media (max-width: 1000px) {
    .features-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 0px;
    }

    .feature {
      width: auto;
      padding: 5px;
    }

    .feature-separator {
      display: none;
    }
  }
</style>
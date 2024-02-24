
<script setup>
  import { Sparkles, Palette, Check, Shield } from 'lucide-vue-next'
</script>
<template>
  <div class="features">
    <div class="features-content width">
      <div class="feature">
        <div class="feature-icon">
          <Sparkles color="#29947a" />
        </div>
        <p class="feature-title">
          Intuitive
        </p>
        <p class="feature-desc">
          Papillon est facile et intuitive, et ce dès la première ouverture. Pas de prise de tête !
        </p>
      </div>
      <div class="feature-separator"></div>
      <div class="feature">
        <div class="feature-icon">
          <Palette color="#29947a" />
        </div>
        <p class="feature-title">
          Interface
        </p>
        <p class="feature-desc">
          Le design s’améliore continuellement pour créer une meilleure expérience.
        </p>
      </div>
      <div class="feature-separator"></div>
      <div class="feature">
        <div class="feature-icon">
          <Check color="#29947a" />
        </div>
        <p class="feature-title">
          Fonctionnalité
        </p>
        <p class="feature-desc">
          Toutes les fonctionnalités les plus attendues sont déjà disponibles dans Papillon !
        </p>
      </div>
      <div class="feature-separator"></div>
      <div class="feature">
        <div class="feature-icon">
          <Shield color="#29947a" />
        </div>
        <p class="feature-title">
          Vie privée
        </p>
        <p class="feature-desc">
          Personne n’a accès à vos données scolaires, afin de vous garantir la plus grande confidentialité.
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .features {
    background: #FFFFFF;
  }

  .features-content {
    display : flex;
    align-items: center;
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
      padding-top: 20px;
      padding-bottom: 20px;
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
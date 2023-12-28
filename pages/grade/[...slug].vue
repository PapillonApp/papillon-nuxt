<script setup>
  import { ref, onMounted } from 'vue'
  import { AlertTriangle, Users, UserMinus, UserPlus, SquareAsterisk, Contact2 } from 'lucide-vue-next';

  useSeoMeta({
    title: 'Note partagée avec Papillon',
    ogTitle: 'Note partagée avec vous - Papillon',
    description: 'Quelqu\'un a partagé une note avec vous depuis le client de vie scolaire Papillon.',
    ogDescription: 'Quelqu\'un a partagé une note avec vous depuis le client de vie scolaire Papillon.',
    ogWebsite: 'https://getpapillon.xyz',
  })

  // get current md file route
  const route = useRoute()
  const gradeBase = ref(route.params.slug[0])

  definePageMeta({
    layout: 'preview'
  })

  const grade = ref(null)
  const error = ref(null)

  const canOpenInApp = process.client && navigator.userAgent.match(/(iPhone|iPod|iPad|Android|webOS|BlackBerry|IEMobile|Opera Mini)/i)

  function openInApp() {
    window.location.href = `papillon://grade?=${gradeBase.value}`
  }

  onMounted(() => {
    try {
      const decodedGrade = atob(gradeBase.value)
      grade.value = JSON.parse(decodedGrade)
    } catch (e) {
      console.error(e)
      error.value = e
    }
  })
</script>

<template>
  <div class="app">
    <div class="app-overlay"
    :style="{
      backgroundColor: grade.color,
    }"
    v-if="grade"></div>
    <div class="error" v-if="error">
      <AlertTriangle size="28" />
      <p class="error-text1">Une erreur est survenue.</p>
      <p class="error-text2">{{ error }}</p>

      <a href="/">Retourner à l'accueil</a>
    </div>
    <div class="grade" v-else-if="grade">
      <div
        class="grade-header"
        :style="{
          backgroundColor: grade.color,
        }"
      >
        <div class="grade-info">
          <p class="grade-subject">{{ grade.subject.name }}</p>
          <p class="grade-description">{{ grade.description || "Aucune description" }}</p>
        </div>
        <div class="grade-icon">
          <a href="/">
            <img src="~/assets/img/papillon-icon.svg" alt="Logo Papillon" />
          </a>
        </div>
      </div>
      <div
        class="grade-button"
        :style="{
          backgroundColor: grade.color,
        }"
        v-if="canOpenInApp"
        @click="openInApp"
      >
        <div class="grade-button-overlay">
          <p>Ouvrir dans l'app</p>
        </div>
      </div>
      <div class="grade-content">
        <div class="grade-data grade-data-student">
          <div class="value-title">
            <Contact2 size="20" />
            <p class="grade-data-title">Note de élève</p>
          </div>
          <div class="value">
            <p class="grade-data-value">{{ grade.grade.value.toFixed(2) }}</p>
            <p class="grade-data-unit">/{{ grade.grade.out_of }}</p>
          </div>
        </div>
        <div class="separator"></div>
        <div class="grade-data">
          <div class="value-title">
            <Users size="20" />
            <p class="grade-data-title">Moyenne du groupe</p>
          </div>
          <div class="value">
            <p class="grade-data-value">{{ grade.grade.average.toFixed(2) }}</p>
            <p class="grade-data-unit">/{{ grade.grade.out_of }}</p>
          </div>
        </div>
        <div class="separator"></div>
        <div class="grade-data">
          <div class="value-title">
            <UserPlus size="20" />
            <p class="grade-data-title">Note la plus élevée</p>
          </div>
          <div class="value">
            <p class="grade-data-value">{{ grade.grade.min.toFixed(2) }}</p>
            <p class="grade-data-unit">/{{ grade.grade.out_of }}</p>
          </div>
        </div>
        <div class="separator"></div>
        <div class="grade-data">
          <div class="value-title">
            <UserMinus size="20" />
            <p class="grade-data-title">Note la plus faible</p>
          </div>
          <div class="value">
            <p class="grade-data-value">{{ grade.grade.max.toFixed(2) }}</p>
            <p class="grade-data-unit">/{{ grade.grade.out_of }}</p>
          </div>
        </div>
        <div class="separator"></div>
        <div class="grade-data">
          <div class="value-title">
            <SquareAsterisk size="20" />
            <p class="grade-data-title">Coefficient</p>
          </div>
          <div class="value">
            <p class="grade-data-unit">x</p>
            <p class="grade-data-value">{{ grade.grade.coefficient.toFixed(2) }}</p>
          </div>
        </div>
        <div class="separator"></div>
        <div class="forcing">
          <p>Mais malgré tout, on sait que c'est avec notre fameuse application Papillon que ton pote à réussi. <a href="/">Et pourquoi pas vous ?</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .app {
    background-color: #f0f0f0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
  }

  .app-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    background-color: #000000;
    opacity: 0.3;
    z-index: 1;
  }

  .error {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    width: 500px;
    z-index: 2;
  }

  .error-text1 {
    font-size: 20px;
    text-align: center;
    font-weight: 600;
  }

  .error-text2 {
    font-size: 15px;
    text-align: center;
    font-weight: 400;
    opacity: 0.8;
  }

  .error a {
    font-size: 15px;
    text-align: center;
    font-weight: 600;
    color: #32AB8E;
    text-decoration: underline;
    margin-top: 20px;
  }

  .error a:hover {
    color: #1E7D5A;
  }

  @media (max-width: 600px) {
    .error {
      width: calc(100vw - 80px);
    }
  }

  .grade {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0px;
    padding: 0px;
    background-color: #fff;
    border-radius: 10px;
    width: 500px;
    overflow: hidden;
    z-index: 2;
  }

  .grade-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    width: 100%;
    color: #fff;
  }

  .grade-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 2px;
    padding: 14px;
  }

  .grade-subject {
    font-size: 15px;
    font-weight: 400;
    opacity: 0.8;
  }

  .grade-description {
    font-size: 17px;
    font-weight: 600;
  }

  .grade-icon {
    margin-left: auto;
    margin-right: 20px;
  }

  .grade-icon img {
    width: 32px;
    opacity: 0.4;
    margin-top: 3px;
  }

  .grade-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 13px;
    padding: 14px;
    width: calc(100% - 14px * 2);
  }

  .grade-data {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    width: 100%;
  }

  .grade-data-title {
    font-size: 16px;
    font-weight: 400;
  }

  .value-title {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
    opacity: 0.8;
  }

  .value {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
    gap: 0px;
  }

  .grade-data-value {
    font-size: 17px;
    font-weight: 600;
  }

  .grade-data-unit {
    font-size: 15px;
    font-weight: 400;
    opacity: 0.8;
  }

  .separator {
    width: 100%;
    height: 1px;
    background-color: #e0e0e0;
  }

  @media (max-width: 600px) {
    .grade {
      width: calc(100vw - 40px);
      height: calc(100vh - 40px);
    }
  }

  .forcing {
    margin: 0px 10px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .forcing p {
    color: #00000099;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
  }

  .forcing a {
    font-weight: 600;
    color: #000000b5;
    text-decoration: underline;
  }

  .forcing a:hover {
    color: #000000ff;
  }

  .grade-data-student {
    flex-direction: column;
    gap: 6px;
  }

  .grade-data-student .value-title {
    gap: 5px;
    align-items: center;
    justify-content: center;
  }

  .grade-data-student .value-title p {
    margin-top: 3px;
  }

  .grade-data-student .grade-data-value {
    font-size: 30px;
  }

  .grade-data-student .grade-data-unit {
    font-size: 20px;
  }

  .grade-button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
    height: 44px;
    cursor: pointer;
  }

  .grade-button-overlay {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
    height: 44px;
    background-color: #00000050;
  }

  .grade-button-overlay:hover {
    background-color: #00000070;
  }

  .grade-button-overlay:active {
    background-color: #00000090;
  }

  .grade-button p {
    font-size: 15px;
    font-weight: 600;
    color: #fff;
    user-select: none;
  }
</style>
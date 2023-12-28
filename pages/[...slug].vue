<script setup>
  import { ref, onMounted } from 'vue'

  // get current md file route
  const route = useRoute()
  const { data } = await useAsyncData(route.path, () => queryContent(route.path).findOne())

  // get github user
  const github = ref(null)

  onMounted(() => {
    fetch('https://api.github.com/users/' + data.value.githubUser)
      .then(res => res.json())
      .then(data => {
        github.value = data
        console.log(data)
      })
      .catch(err => {
        console.error(err)
      })
  })
</script>

<template>
  <div class="app width">
    <ContentDoc>
      <template v-slot="{ doc }">
        <div class="head-container">
          <p class="title">{{ doc.title }}</p>

          <div class="user">
            <a class="user-info" v-if="github" :href="github?.html_url">
              <img alt="Avatar" class="avatar" :src="github?.avatar_url" />
              <p class="name">{{ github?.name || "Équipe Papillon" }}</p>
            </a>

            <div v-if="github" class="separator"></div>

            <p class="date">{{ new Date(doc.date).toLocaleDateString('fr', { year: 'numeric', month: 'long', day: 'numeric' }) }}</p>
          </div>
        </div>

        <ContentRenderer :value="doc">
          <div class="article">
            <ContentRendererMarkdown :value="doc" />
          </div>
        </ContentRenderer>
      </template>
      <template #not-found>
        <div class="error">
          <p class="error-code">404</p>
          <p class="error-text">Page non trouvée ou déplacée</p>

          <p class="error-description">La page que vous cherchez n'existe pas ou a été supprimée.</p>

          <p class="error-link">
            <a href="/">Retourner à l'accueil</a>
          </p>
        </div>
      </template>
    </ContentDoc>
  </div>
</template>

<style scoped>
  .app {
    padding-bottom: 30px;
  }

  .head-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 30px;
    margin-bottom: 30px;
    gap: 5px;
  }

  .head-container .title {
    font-size: 26px;
    font-weight: bold;
  }

  .head-container .user {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    height: 36px;
  }

  .head-container .user .user-info {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    color: #000;
    animation: user-info 0.2s ease-out forwards;
  }

  @keyframes user-info {
    0% {
      transform: scale(0.8);
      margin-left: -30px;
      opacity: 0;
    }
    100% {
      transform: scale(1);
    }
  }

  .head-container .user .user-info .avatar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }

  .head-container .user .user-info .name {
    font-size: 16px;
    font-weight: bold;
  }

  .head-container .user .separator {
    width: 1px;
    height: 20px;
    background-color: #000;
    opacity: 0.2;
    margin: 0px 5px;
  }

  .head-container .user .date {
    font-size: 16px;
    opacity: 0.7;
  }

  .error {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 30px;
  }

  .error-code {
    font-size: 100px;
    font-weight: bold;
    margin: 0;
    padding: 0;
    color: #32AB8E;
  }

  .error-text {
    font-size: 26px;
    font-weight: bold;
    margin: 0;
    padding: 0;
  }

  .error-description {
    font-size: 16px;
    opacity: 0.7;
    margin: 0;
    padding: 0;
  }

  .error-link {
    font-size: 16px;
    margin: 0;
    padding: 0;
    margin-top: 20px;
  }

  .error-link a {
    color: #32AB8E;
    font-weight: bold;
  }
</style>
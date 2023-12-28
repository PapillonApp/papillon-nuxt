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
    <ContentDoc v-slot="{ doc }">
      <div class="head-container">
        <p class="title">{{ doc.title }}</p>

        <div class="user" v-if="github">
          <a class="user-info" :href="github?.html_url">
            <img alt="Avatar" class="avatar" :src="github?.avatar_url" />
            <p class="name">{{ github?.name }}</p>
          </a>

          <div class="separator"></div>

          <p class="date">{{ new Date(doc.date).toLocaleDateString('fr', { year: 'numeric', month: 'long', day: 'numeric' }) }}</p>
        </div>
      </div>

      <ContentRenderer :value="doc">
        <div class="article">
          <ContentRendererMarkdown :value="doc" />
        </div>
      </ContentRenderer>
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
  }

  .head-container .user .user-info {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    color: #000;
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
</style>
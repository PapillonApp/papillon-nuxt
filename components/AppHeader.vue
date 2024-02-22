<script setup>
  import { Download } from 'lucide-vue-next';
</script>

<template>
  <div class="app-header">
    <div class="app-header-content width">
      <a href="/" class="logo">
        <img src="~/assets/img/logo.svg" alt="Logo Papillon" />
      </a>

      <div class="app-header-content-nav">
        <nuxt-link to="/">
          Découvrir Papillon
        </nuxt-link>
        <nuxt-link to="https://support.getpapillon.xyz/">
          Assistance
        </nuxt-link>
        <nuxt-link to="https://docs.getpapillon.xyz/">
          Documentation
        </nuxt-link>
        <nuxt-link to="https://docs.getpapillon.xyz/development/intro/">
          Développeurs
        </nuxt-link>
      </div>

      <div class="app-header-content-right">
        <a href="https://onelink.to/py4sj9" class="button button-primary">
          <Download />
          <p>Télécharger l'app</p>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .app-header {
    background: #FFF;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.15);
    height: 70px;
    position: sticky;
    top: 0;
    z-index: 9999;
  }

  .app-header-content {
    align-items: center;
    display: flex;
    height: 100%;
    position: relative;
  }

  .app-header-content-right {
    margin-left: auto;
  }

  .app-header-content-nav {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    height: 100%;
    margin-left: 30px;
  }

  .app-header-content-nav a {
    text-decoration: none;
    color: #00000088;
    padding: 0 20px;

    height: calc(100% - 5px - 2px);
    margin-top: 5px;

    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
  }

  .app-header-content-nav a.router-link-active {
    color: #000000;
    border-bottom: 2px solid #32AB8E;
  }

  .app-header-content-nav a:hover:not(.router-link-active) {
    color: #000000;
    border-bottom: 2px solid #999;
  }

  .app-header-content-right .button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 8px 16px;
    gap: 8px;
    border-radius: 5px;
    border: none;
    background: #32AB8E;
    color: #FFF;
    font-weight: 600;
    text-decoration: none;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.15);
  }

  .app-header-content-right .button:hover {
    background: #2A8B75;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.45);
  }

  .logo {
    margin-top: 3.5px;
  }

  @media screen and (max-width: 1000px) {
    .app-header-content-nav {
      display: none;
    }
  }
</style>

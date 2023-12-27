<template>
  <div class="server-status">
    <div class="server-status-content width">
      <p class="ss-title">
        Statut des serveurs
      </p>

      <div class="ss-data">
        <div class="ss-nb ss-nb-up"></div>
        <p class="ss-nb-title">Tout fonctionne normalement</p>
      </div>

      <div class="socials">
        <a href="https://discord.com/invite/vFmCwSzvAp">
          <img src="~/assets/img/discord.svg" alt="Discord" />
        </a>
        <a href="https://github.com/PapillonApp/">
          <img src="~/assets/img/github.svg" alt="Github" />
        </a>
        <a href="https://instagram.com/thepapillonapp">
          <img src="~/assets/img/instagram.svg" alt="Instagram" />
        </a>
        <a href="https://x.com/thepapillonapp">
          <img src="~/assets/img/x.svg" alt="X" />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .server-status {
    background: #444444;
    height: 42px;
  }

  .server-status-content {
    align-items: center;
    display: flex;
    height: 100%;
  }

  .ss-title {
    color: #FFFFFF99;
    font-size: 16px;
    font-weight: 500;
    margin: 0;
    padding: 0;
  }

  .ss-data {
    display: flex;
    align-items: center;

    margin-left: 20px;
    gap: 10px;
  }

  .ss-nb {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    z-index: 999;
  }

  @keyframes ss-nb-border-anim {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }

  .ss-nb::before {
    content: '';
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #ffffff90;
    z-index: 99;
    animation: ss-nb-border-anim 1.25s infinite;
  }

  .ss-nb-up {
    background: #0DFF8B;
  }

  .ss-nb-down {
    background: #e66e3a;
  }

  .ss-nb-title {
    color: #FFF;
    font-size: 16px;
    font-weight: 600;
    margin: 0;
    padding: 0;
  }

  .socials {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    gap: 24px;
  }

  .socials a {
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.5;
  }

  .socials a:hover {
    opacity: 1;
  }

  @media screen and (max-width: 768px) {
    .server-status {
      display: none;
    }
  }
</style>
<script setup>
  import { ref, onMounted } from 'vue'

  const status = ref('unknown')
  const allWorking = ref(0)
  const allTotal = ref(0)

  onMounted(() => {
    fetch('https://uptime-api.getpapillon.xyz/status')
      .then(res => res.json())
      .then(data => {
        let working = 0;
        let total = data.monitor_statuses.length;
        
        data.monitor_statuses.forEach((monitor) => {
          if (monitor.status === "true") {
            working++;
          }
        })

        allWorking.value = working
        allTotal.value = total

        if (working === total) {
          status.value = 'up'
        } else if (working === 0) {
          status.value = 'down'
        } else {
          status.value = 'mid'
        }
      })
      .catch(err => {
        console.error(err)
        status.value = 'error'
      })
  })
</script>

<template>
  <div class="server-status">
    <div class="server-status-content width">
      <a href="https://status.getpapillon.xyz/status/papillon/" class="server-status-ct">
        <p class="ss-title">
          Statut des serveurs
        </p>

        <div class="ss-data" v-if="status === 'unknown'">
          <div class="ss-nb ss-nb-unknown"></div>
          <p class="ss-nb-title">Récupération du statut...</p>
        </div>

        <div class="ss-data" v-if="status === 'up'">
          <div class="ss-nb ss-nb-up"></div>
          <p class="ss-nb-title">Tout fonctionne normalement</p>
        </div>

        <div class="ss-data" v-if="status === 'mid'">
          <div class="ss-nb ss-nb-mid"></div>
          <p class="ss-nb-title">{{ allTotal - allWorking }} {{ allTotal - allWorking > 1 ? 'serveurs sont' : 'serveur est' }} en panne</p>
        </div>

        <div class="ss-data" v-if="status === 'down'">
          <div class="ss-nb ss-nb-down"></div>
          <p class="ss-nb-title">Tous les serveurs sont en panne</p>
        </div>

        <div class="ss-data" v-if="status === 'error'">
          <div class="ss-nb ss-nb-unknown"></div>
          <p class="ss-nb-title">Impossible de récupérer le statut</p>
        </div>
      </a>

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

  .ss-nb-unknown {
    background: #888888;
  }

  .ss-nb-up {
    background: #0DFF8B;
  }

  .ss-nb-mid {
    background: #e6963a;
  }

  .ss-nb-down {
    background: #e64b3a;
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

  .server-status-ct {
    display: flex;
    align-items: center;
    text-decoration: none;

    border-radius: 5px;
    transition: all 0.1s ease-in-out;
  }

  .server-status-ct:hover {
    background-color: #ffffff20;
    padding: 7px 12px;
    margin: -7px -12px;
  }

  @media screen and (max-width: 768px) {
    .server-status {
      height: 56px;
    }

    .ss-title {
      display: none;
    }

    .ss-data {
      margin-left: 0;
      gap: 16px;
    }
  }
</style>
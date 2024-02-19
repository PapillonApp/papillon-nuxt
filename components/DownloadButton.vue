<template>
  <div id="download_options">
    <a :href="downloadLink" id="download_link">
      <div class="download_button">
        <Download />
        <div class="download_button_text">
          <h3>Télécharger Papillon</h3>
          <p>{{ downloadService }}</p>
        </div>
        <p>{{ version }}</p>
      </div>
    </a>
    <a id="more_dropdown" @click="showDropdown">
      <ChevronDown />
    </a>
    <div id="more_dropdown_content" :class="{ show: dropdownVisible }">
      <a
        href="https://github.com/PapillonApp/Papillon/releases/latest"
        class="more_dropdown_option"
      >
        <Github />
        <div class="option_text">
          <h3>GitHub</h3>
          <p>Voir sur GitHub</p>
        </div>
      </a>
      <a
        href="https://play.google.com/store/apps/details?id=plus.pronote.app"
        class="more_dropdown_option"
      >
        <img
          class="option_service"
          src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_Play_2022_icon.svg"
          alt="Logo d'un service"
        />
        <div class="option_text">
          <h3>Google Play Store</h3>
          <p>Voir sur Google Play</p>
        </div>
      </a>
      <a
        href="https://apps.apple.com/fr/app/papillon-votre-vie-scolaire/id1662669707"
        class="more_dropdown_option"
      >
        <img
          class="option_service"
          src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg"
          alt="Logo d'un service"
        />
        <div class="option_text">
          <h3>App Store</h3>
          <p>Voir sur l'App Store</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Download, ChevronDown, Github } from "lucide-vue-next";

// Variables réactives
const {isAndroid, isApple } = useDevice();
const downloadLink = ref("");
const downloadService = ref("");
const version = ref("");
const dropdownVisible = ref(false);

// Fonction pour récupérer les liens de téléchargement en fonction du système d'exploitation
function setDownloadLinks() {
  if (isAndroid) {
    downloadLink.value =
      "https://play.google.com/store/apps/details?id=plus.pronote.app";
    downloadService.value = "depuis le Google Play Store";
  } else if (isApple) {
    downloadLink.value =
      "https://apps.apple.com/fr/app/papillon-votre-vie-scolaire/id1662669707";
    downloadService.value = "depuis l'App Store";
  } else {
    downloadLink.value =
      "https://github.com/PapillonApp/Papillon/releases/latest";
    downloadService.value = "depuis GitHub";
  }
}

// Fonction pour afficher ou masquer le dropdown
function showDropdown() {
  dropdownVisible.value = !dropdownVisible.value;
}

// Tableau d'options pour le dropdown
const dropdownOptions = ref([
  {
    name: "GitHub",
    description: "Voir sur GitHub",
    link: "https://github.com/PapillonApp/Papillon/releases/latest",
    icon: "~/assets/img/github-logo.svg",
  },
]);

// Effectuer des opérations une fois que le composant est monté
onMounted(() => {
  setDownloadLinks();
  fetchLatestVersion();
});

// Fonction pour récupérer la dernière version à partir de l'API GitHub (optionnel)
async function fetchLatestVersion() {
  const response = await fetch(
    "https://api.github.com/repos/PapillonApp/Papillon/releases/latest"
  );
  const data = await response.json();
  version.value = "v" + data.tag_name;
}
</script>

<style scoped>
#download_options {
  display: flex;
  align-items: center;
  gap: 0px;
  margin-top: 20px;
}

#download_link {
  color: inherit;
  text-decoration: none;
  width: fit-content;
  display: inline-block;
  margin-top: 0 !important;
}

.download_button * {
  padding: 0;
  margin: 0 !important;
}

.download_button {
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 10px;
  padding: 0px 0px;

  border-top-right-radius: 0px !important;
  border-bottom-right-radius: 0px !important;

  gap: 16px;

  width: fit-content;
  border: 1px solid #ffffff20;

  color: #fff;

  width: 280px;
  height: 55px;
}

.download_button:hover {
  border: 1px solid #ffffff50;
  background: #ffffff10;
}

.download_button_text {
  display: flex;
  flex-direction: column;
  gap: 0px;
}

.download_button_text h3 {
  font-weight: 600;
  font-size: 16px;
}

.download_button_text p {
  font-weight: 500;
  font-size: 15px;
  opacity: 0.5;
}

#more_dropdown {
  text-decoration: none;
  color: #ffffff;

  width: 35px;
  height: 55px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #ffffff00;
  border: 1px solid #ffffff30;
  border-left: 1px solid #ffffff01;

  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  margin-left: -1px;
}

#more_dropdown:hover {
  background: #ffffff10;
  border: 1px solid #ffffff50;
  cursor: pointer;
}

#more_dropdown span {
  margin-top: 1px;
  user-select: none;
}

#more_dropdown_content {
  position: absolute;

  left: var(--margin-width);
  margin-top: 220px;

  width: 316px;

  background: #ffffff;
  border-radius: 10px;

  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);

  z-index: 99999;

  display: flex;
  flex-direction: column;

  display: none;

  animation: dropdown 0.2s ease-in-out;
  z-index: 99999;
}

@keyframes dropdown {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
}

#more_dropdown_content.show {
  display: flex;
  z-index: 99999;
}

#more_dropdown_content * {
  padding: 0;
  margin: 0;
  z-index: 99999;
}

.more_dropdown_option {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 8px 15px !important;

  text-decoration: none;
  color: #000;
}

.more_dropdown_option:hover {
  background: #00000010;
  cursor: pointer;
}

.more_dropdown_option img {
  width: 28px;
  height: 28px;
}

.more_dropdown_option h3 {
  font-weight: 600;
  font-size: 16px;
  color: #000;
}

.more_dropdown_option p {
  font-weight: 500;
  font-size: 15px;
  color: #000;
  opacity: 0.7;
}

#version {
  font-weight: 400;
  font-size: 15px;
  opacity: 0.5;
  margin-top: 10px;
}

#header_image {
  position: relative !important;
  right: var(--margin-width);
  top: -350px;
  left: 45%;
  z-index: 99;
}

@media screen and (max-width: 1081px) {
  #download_link {
    margin-top: 20px;
  }

  #more_dropdown_content {
    position: absolute;
    z-index: 99999x;
    /* center */
    left: calc(50% - 158px);
    margin-top: 220px;
  }
}
</style>

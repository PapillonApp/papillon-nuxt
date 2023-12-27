<template>
  <div class="screenshots">
    <div class="screenshots-content width">
      <div class="screenshot">
        <p class="title">Emploi du temps</p>
        <p class="description">
          C’est le même emploi du temps que vous regardez déjà chaque jour pour vous rendre à chaque cours. Mais celui-ci est plus compact, fluide et agréable.
        </p>
        <img src="~/assets/img/screen-edt.png" alt="Emploi du temps" />
      </div>
      <div class="screenshot">
        <p class="title">Notes</p>
        <p class="description">
          Papillon vous propose des statistiques et des données supplémentaires sur vos résultats scolaires, tout en proposant une interface intuitive.
        </p>
        <img src="~/assets/img/screen-notes.png" alt="Notes" />
      </div>
      <div class="screenshot">
        <p class="title">Personnalisation</p>
        <p class="description">
          L’appli Papillon vous ressemble avant tout. Vous avez le choix des couleurs, des options, et bien plus encore. Car on se sent toujours mieux chez soi.
        </p>
        <img src="~/assets/img/screen-customization.png" alt="Personnalisation" />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .screenshots {
    background-color: #DCF3ED;
  }

  .screenshots-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }

  .screenshot {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
  }

  .screenshot .title {
    font-size: 19px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  .screenshot .description {
    font-size: 15px;
    text-align: center;
    margin-bottom: 25px;
    opacity: 0.8;
  }

  .screenshot img {
    margin: 0;
    width: 300px;
  }

  @media (max-width: 1000px) {
    .screenshots-content {
      flex-direction: column;
    }

    .screenshot {
      padding-top: 20;
    }
  }
</style>
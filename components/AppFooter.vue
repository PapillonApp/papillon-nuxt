<template>
  <div class="footer">
    <div class="footer-content width">
      <div class="footer-left">
        <img src="~/assets/img/papillon-icon.svg" alt="Logo Papillon" />
        <p>
          Ce site web est <a href="#">open-source</a>
          et modifiable par la communauté
        </p>
      </div>
      <div class="footer-right">
        <p>
          (C) 2024 The Papillon Company
          et les développeurs contributeurs
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .footer {
    background: #15302A;
    color: #fff;
  }

  .footer-content {
    display: flex;
    padding-top: 15px;
    padding-bottom: 15px;
    align-items: center;
    justify-content: space-between;
  }

  .footer-left {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .footer-left img {
    opacity: 0.5;
    height: 32px;
  }

  .footer-left p {
    width: 310px;
    color: #ffffff99;
  }

  .footer-left p a {
    color: #fff;
    font-weight: 600;
  }

  .footer-right {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .footer-right p {
    color: #ffffff55;
    font-size: 14px;
    font-weight: 500;
    width: 310px;
    text-align: right;
  }

  @media (max-width: 1000px) {
    .footer-content {
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
    }

    .footer-left {
      flex-direction: row;
      align-items: flex-start;
      gap: 20px;
    }

    .footer-left p {
      width: 100%;
    }

    .footer-right {
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
      margin-top: 10px;
    }

    .footer-right p {
      width: 100%;
      text-align: left;
    }
  }
</style>
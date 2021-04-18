<template>
  <div class="side-bar_header items-center flex flex-col rounded-br-2xl">
    <h2 class="font-weight-bold">Meet & Play</h2>
    <div class="avatar">
      <img class="avatar-img" src="#" alt="avatar" />
    </div>
    <div class="authorization-description text-center">
      <template>
        <span class="user-name"
          >Константин <br />
          Константинов</span
        >
        <span class="user-city d-block">Санкт-Петербург</span>
      </template>
      <!-- <span class="user-authorization font-weight-bold">Вход&nbsp;/&nbsp;Регистрация</span> -->
    </div>
  </div>
</template>

<script>
export default {
  component: {},
}
</script>

<style lang="scss">
.side-bar_header {
  & > h2 {
    margin: 32px 0;
    font-size: 24px;
  }

  .avatar {
    border-radius: 50%;
    background-color: grey;
    width: 80px;
    height: 80px;
  }
  // .avatar-img {
  // }
  .authorization-description {
    text-align: center;
    margin: 0 auto;
    & span {
      display: block;
    }
  }
  .user-name {
    font-weight: bold;
    font-size: 18px;
    line-height: 140%;
    margin-top: 16px;
    margin-bottom: 8px;
  }
  .user-city {
    font-size: 16px;
    margin-bottom: 48px;
  }

  .user-authorization {
    font-weight: bold;
    font-size: 18px;
    margin: 32px 0 68px;
  }
}
.side-bar_navigation {
  .top-link,
  .bottom-link {
    &::before {
      content: '';
      display: block;
      margin-right: 16px;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background-color: grey;
    }
  }
  .bottom-list-link {
    margin-bottom: 40px;
  }
}
</style>

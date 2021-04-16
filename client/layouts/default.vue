<template>
  <div class="container mx-auto w-screen h-screen flex flex-row">
    <Nav :navItemMenu="navItemMenu" :navBottomMenu="navBottomMenu" />
    <div class="flex h-screen w-75 flex-col flex-grow overflow-y-auto relative">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Nav: () => import('@/components/Layouts/Nav'),
  },
  data: () => ({
    navItemMenu: [
      {
        name: 'Главная',
        to: '/',
      },
      {
        name: 'Участвую',
        to: '/paticipating',
      },
      {
        name: 'Мои встречи',
        to: '/myMeetings',
      },
      {
        name: 'Создать встречу',
        to: '/create',
      },
      {
        name: 'Избранное',
        to: '/favorites',
      },
    ],
    navBottomMenu: [
      {
        name: 'Настройки',
        to: '/settings',
      },
      {
        name: 'Помощь',
        to: '/support',
      },
    ],
  }),
}
</script>

<style lang="scss">
@import 'assets/styles/global.scss';
</style>
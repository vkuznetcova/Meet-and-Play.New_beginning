<template>
  <div
    class="modal modal-sign-up min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <span class="modal-close"></span>
    <div class="max-w-xl w-full space-y-8">
      <div>
        <h2 class="modal-title mt-6 text-center text-3xl">Регистрация</h2>
      </div>
      Ошибки валидации
      <form class="modal-form mt-6 space-y-6" @submit.prevent="onSubmit">
        <input type="hidden" name="remember" value="true" />
        <div class="flex flex-wrap justify-between">
          <div class="mt-4">
            <label for="name" class="block mb-2 not-sr-only">Имя</label>
            <input
              id="name"
              name="name"
              type="name"
              autocomplete="name"
              required
              class="appearance-none rounded-lg relative block w-64 h-12 px-3 py-2 border placeholder-gray-500 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Ваше имя"
            />
          </div>
          <div class="mt-4">
            <label for="city" class="block mb-2 not-sr-only">Город</label>
            <input
              id="city"
              name="city"
              type="city"
              autocomplete="city"
              required
              class="appearance-none rounded-lg relative block w-64 h-12 px-3 py-2 border placeholder-gray-500 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Город"
            />
          </div>
          <div class="mt-4">
            <label for="email-address" class="block mb-2 not-sr-only"
              >Email</label
            >
            <input
              id="email-address"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="appearance-none rounded-lg relative block w-64 h-12 px-3 py-2 border placeholder-gray-500 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email"
            />
          </div>
          <div class="mt-4">
            <label for="password" class="block mb-2 not-sr-only">Пароль</label>
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              class="appearance-none rounded-lg relative block w-64 h-12 px-3 py-2 border placeholder-gray-500 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Пароль"
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            class="btn-fill group relative m-auto w-72 h-12 items-center flex justify-center py-2 px-4 border border-transparent text-lg font-medium rounded-md text-black focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            Регистрация
          </button>
        </div>
      </form>
      <span class="flex justify-center modal-msg">Уже зарегистрированы?</span>
      <router-link
        :to="{ name: 'login' }"
        class="flex justify-center text-black font-bold modal-msg-link"
        >Войти</router-link
      >
    </div>
  </div>
  <!-- <div class="modal modal-sign-up">
    <span class="modal-close"></span>
    <span class="modal-title">Регистрация</span>
    <form action="#" class="modal-form">
      <div class="wrp">
        <label>
          <span class="modal-name">Имя</span>
          <input type="text" name="" id="" placeholder="Иван" />
        </label>
        <label>
          <span class="modal-name">Город</span>
          <input type="text" name="" id="" placeholder="Москва" />
        </label>
      </div>
      <div class="wrp">
        <label>
          <span class="modal-name">Эл. почта</span>
          <input type="email" name="" id="" placeholder="ivan@ivanov.ru" />
        </label>
        <label>
          <span class="modal-name">Пароль</span>
          <input type="password" name="" id="" placeholder="******" />
        </label>
      </div>
      <button type="button" class="form-btn">Найти</button>
    </form>
    <span class="modal-msg">Уже зарегистрированы?</span>
    <a href="#" class="modal-msg-link">Войти</a>
  </div> -->
</template>

<script>
export default {
  name: 'Registration',
  methods: {
    onSubmit() {
      console.log('Отправка формы')
    },
  },
}
</script>

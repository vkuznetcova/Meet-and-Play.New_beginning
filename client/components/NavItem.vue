<template>
  <li class="mt-5">
    <nuxt-link
      :to="to"
      class="top-link flex items-center no-underline text-black hover:text-blue-530"
      active-class="active-link"
      ><slot
    /></nuxt-link>
  </li>
</template>

<script>
export default {
  name: "NavItem",
  props: {
    to: {
      type: String,
      default: "",
    },
  },
};
</script>

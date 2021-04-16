<template>
  <div class="flex flex-col w-72 h-screen">
    <nav-side-bar />
    <nav
      class="side-bar_navigation flex flex-grow flex-col items-center font-medium text-base"
    >
      <div>
        <ul class="list-none mt-11">
          <nav-item
            v-for="(navItem, key) in navItemMenu"
            :to="navItem.to"
            :key="`navItem-${key}`"
          >
            {{ navItem.name }}
          </nav-item>
        </ul>
        <ul class="list-none my-11">
          <nav-bottom
            v-for="(navBottom, key) in navBottomMenu"
            :to="navBottom.to"
            :key="`navBottom-${key}`"
          >
            {{ navBottom.name }}
          </nav-bottom>
        </ul>
      </div>
      <span class="mx-auto mt-auto mb-5 text-xs"
        >Copyright&nbsp;&copy;&nbsp;{{ year }}&nbsp;Meet & Play</span
      >
    </nav>
  </div>
</template>

<script>
export default {
  components: {
    NavItem: () => import('@/components/NavItem'),
    NavSideBar: () => import('@/components/NavSideBar'),
    NavBottom: () => import('@/components/NavBottom'),
  },
  props: {
    navItemMenu: {
      type: Array,
      default: () => [],
    },
    navBottomMenu: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    year() {
      return new Date().getFullYear()
    },
  },
}
</script>

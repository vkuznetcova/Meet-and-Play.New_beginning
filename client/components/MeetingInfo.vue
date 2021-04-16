<template>
  <div class="meetings-info">
    <div v-for="(info, key) in info" :key="`info-${key}`" class="meetings-info__item">
      <span class="meetings-info__item-name">{{ info.name }}:</span>
      <p class="meetings-info__item-content font-bold">{{ info.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MeetingInfo",
  props: {
    info: {
      type: Array,
      default: () => [],
    }
  },
};
</script>





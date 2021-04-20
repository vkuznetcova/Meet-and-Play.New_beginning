<template>
  <div class="play-cards-block">
    <template v-if="meetings">
      <div
        v-for="(meeting, key) in meetings"
        :key="`meeting-${key}`"
        class="max-h-56 hover:cursor-pointer play-card"
      >
        <img class="block mb-2 rounded-2xl" :src="meeting.src" alt="play-card"/>
        <div class="play-card__header">
        <span class="inline-block font-bold meeting-name">{{
            meeting.name
          }}</span>
          <span class="inline-block font-bold">(до {{ meeting.age }} лет)</span>
        </div>
        <span class="inline-block"
        >{{ meeting.available_quantity }} из
        {{ meeting.required_quantity }}</span
        >
        <span class="inline-block float-right">{{ meeting.date }}</span>
      </div>
    </template>
    <template v-if="meeting">
      <nuxt-link :to="`/MeetingsCard/${meet._id}`"
                 v-for="(meet, key) in meeting"
                 :key="`meeting-${key}`"
                 class="max-h-56 hover:cursor-pointer play-card"
      >
        <img class="block mb-2 rounded-2xl" :src="meet.image" alt="play-card"/>
        <div class="play-card__header">
        <span class="inline-block font-bold meeting-name">{{
            meet.title
          }}</span>
          <!-- <span class="inline-block font-bold">(до {{ meeting.age }} лет)</span> -->
        </div>
        <span class="inline-block"
        >{{ meet.count }} из
        21</span
        >
        <span class="inline-block float-right">{{ meet.date }}</span>
      </nuxt-link>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    meetings: {
      type: Array,
      default: () => [],
    },
    meeting: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

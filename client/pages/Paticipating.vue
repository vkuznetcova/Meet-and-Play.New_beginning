<template>
  <section class="views-main">
    <h2 class="views-main-title d-inline-block">Участвую</h2>
    <button class="btn-search d-block" type="button">Найти игру</button>
    <div class="filter-block">
      <FilterForm :filter="filter" />
    </div>    
      <MeetingsForm :meetings="meetings" />
  </section>
</template>

<script>
export default {
  components: {
    FilterForm: () => import('@/components/FilterForm'),
    MeetingsForm: () => import('@/components/MeetingsForm'),
  },
  data: () => ({
    meetings: [
      {
        key: '',
        src: 'http://placehold.it/280x200',
        name: 'Футбол',
        age: '16',
        date: '18.05.2021',
      },
      {
        key: '',
        src: 'http://placehold.it/280x200',
        name: 'Футбол',
        age: '16',
        date: '18.05.2021',
      },
      {
        key: '',
        src: 'http://placehold.it/280x200',
        name: 'Футбол',
        age: '16',
        date: '18.05.2021',
      },
      {
        key: '',
        src: 'http://placehold.it/280x200',
        name: 'Футбол',
        age: '16',
        date: '18.05.2021',
      },
    ],
    filter: [
      { key: '', name: 'Футбол' },
      { key: '', name: 'Волейбол' },
      { key: '', name: 'Тенис' },
    ],
  }),
}
</script>

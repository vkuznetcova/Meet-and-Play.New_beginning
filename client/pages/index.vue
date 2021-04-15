<template>
  <section class="views-main">
    <h2 class="views-main-title d-inline-block">Выберите спортивную игру</h2>
    <div class="filter-block">
      <FilterForm :filter="filter" />
    </div>
    <div class="search mb-6">
      <input type="text" class="search__input" placeholder="Город" />
      <button class="search__btn">Найти</button>
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

<style lang="scss">
.search {
  display: flex;
  flex-wrap: wrap;
  gap: 16px 32px;

  input,
  button {
    outline: none;
    width: 280px;
    height: 48px;
    border: 1px solid #000;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 14px 18px;

    &:focus {
      border: 2px solid #ffdada;
    }

    &::placeholder {
      color: #c4c4c4;
    }
  }

  .search__btn {
    background-color: #d2d2d2;
    border: none;
    font-size: 14px;
    font-weight: 500;

    &:hover {
      cursor: pointer;
      background-color: #e9e9e9;
    }

    &:focus {
      background-color: #ffdada;
    }
  }
}

// .content {
//   padding: 32px;
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   gap: 32px;

//   .header {
//     font-size: 32px;
//     line-height: 140%;
//     font-weight: bold;
//   }

//   .filters {
//     display: flex;
//     gap: 16px;

//     .filter-btn {
//       outline: none;
//       height: 40px;
//       border: none;
//       box-sizing: border-box;
//       border-radius: 105px;
//       padding: 7px 12px;
//       font-size: 16px;
//       background: #e5e5e5;

//       &:hover {
//         cursor: pointer;
//         color: #727272;
//       }

//       &:focus {
//         background-color: #ffdada;
//       }
//     }
//   }

//   .meetings {
//     .meetings__header {
//       font-size: 24px;
//       line-height: 140%;
//       font-weight: bold;
//       margin-bottom: 24px;
//     }

//     .meetings__meeting-list {
//       display: flex;
//       flex-wrap: wrap;
//       gap: 16px 32px;

//       .meeting-card {
//         width: 280px;

//         .meeting-card__block {
//           height: 200px;
//           position: relative;
//           border-radius: 10px;
//           background: #c4c4c4;
//           margin-bottom: 8px;
//         }

//         .meeting-card__header {
//           position: absolute;
//           font-weight: bold;
//           left: 10px;
//           bottom: 0;
//         }

//         .meeting-card__info {
//           display: flex;
//           justify-content: space-between;
//         }

//         &:hover {
//           cursor: pointer;

//           .meeting-card__block {
//             background-color: #e9e9e9;
//           }
//         }
//       }
//     }
//   }
// }
</style>
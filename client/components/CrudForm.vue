<template>
  <div class="mt-16 w-8/12">
    <form class="grid grid-cols-2 gap-y-4 gap-x-8" @submit.prevent="validate">
      <vue-form-generator
        :schema="formShema"
        :model="formModel"
        :option="formOptions"
        ref="form"
        @model-updated="onUpdate"
      />
    </form>
    <button
      type="submit"
      class="mt-6 py-2 px-4 flex justify-center items-center bg-blue-600 hover:bg-blue-700 text-white text-center text-base shadow-md focus:outline-none rounded-lg"
    >
      Создать встречу
    </button>
  </div>
</template>

<script>
export default {
  props: {
    formShema: {
      type: Object,
      default: () => {},
    },
    formModel: {
      type: Object,
      default: () => {},
    },
    formOptions: {
      type: Object,
      default: () => ({
          validateAsync: true
      }),
    },
  },
  methods: {
      async validate() {
          const errors = await this.$refs.form.validate()
          const isValid = errors.length === 0
          if (isValid) {
              this.$emit('on-submit', this.formModel)
          }
      },
      onUpdate(val, field) {
          this.$emit(`on${field}Update`, val)
      }
  }
}
</script>
export default {
  data() {
    return {
      DEFAULT_OPTION: {
        size: 'small',
        clearable: true
      }
    }
  },

  props: {
    column: Object
  },

  computed: {
    all$Attrs({ $attrs, DEFAULT_OPTION }) {
      return { ...DEFAULT_OPTION, ...$attrs }
    }
  }
}

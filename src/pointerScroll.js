export default {
  watch: {
    pointer() {
      this.maybeAdjustScroll();
    },
  },
  data() {
    return {
      pointer: -1,
    };
  },
  methods: {
    pixelsToPointerTop() {
      let pixelsToPointerTop = 0;
      if (!this.$refs.options) {
        return 0;
      }

      for (let i = 0; i < this.pointer; i++) {
        pixelsToPointerTop += this.$refs.options.children[i].offsetHeight;
      }

      return pixelsToPointerTop;
    },

    pixelsToPointerBottom() {
      return this.pixelsToPointerTop() + this.pointerHeight();
    },

    pointerHeight() {
      let element = this.$refs.options
        ? this.$refs.options.children[this.pointer]
        : false;
      return element ? element.offsetHeight : 0;
    },

    viewport() {
      return {
        top: this.$refs.options ? this.$refs.options.scrollTop : 0,
        bottom: this.$refs.options
          ? this.$refs.options.offsetHeight + this.$refs.options.scrollTop
          : 0,
      };
    },

    scrollTo(position) {
      return this.$refs.options
        ? (this.$refs.options.scrollTop = position)
        : null;
    },
  },
};

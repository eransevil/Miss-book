export default {
  template: `
    <section class="book-filter">
        <input type="text" @input="setFilter" placeholder="Search by title...." v-model="filterBy.title">
        <input type="number" @input="setFilter" placeholder="Min Price" v-model.number="filterBy.fromPrice">
        <input type="number" @input="setFilter" placeholder="Max Price" v-model.number="filterBy.toPrice">
    </section>
    `,
  data() {
    return {
      filterBy: {
        title: '',
        fromPrice: 0,
        toPrice: Infinity,
      },
    };
  },
  methods: {
    setFilter() {
      console.log(this.filterBy)
      this.$emit('filtered', { ...this.filterBy });
    },
  },
};

import bookPreview from '../cmps/book-preview.cmp.js';

export default {
  props: ['books'],
  template: `
    <ul class="book-list">
    <li v-for="book in books" :key="book.id" class="book-preview-container">
              <img class="book-img" :src="book.thumbnail">
              
               <book-preview :book="book"/>
               <router-link class="open-preview-btn" :to="'/book/'+book.id"> Details</router-link>
    </li>
    </ul>
    `,
  methods: {
    select(book) {
      this.$emit('selected', book);
    },
  },
  components: {
    bookPreview,
  },
};

import { BookService } from '../services/book-service.js';
import bookFilter from '../cmps/book-filter.cmp.js';
import bookList from '../cmps/book-list.cmp.js';

export default {
  template: `
  
    <section class="book-app"> 
    <book-filter @filtered="setFilter"></book-filter>
    <book-list v-if="!selectedBook" :books="booksToShow" @selected="selectBook"></book-list>
    </section>

    `,

  data() {
    return {
      books: BookService.query(),
      selectedBook: null,
      filterBy: null,
    };
  },

  methods: {
    loadBooks() {
      BookService.query()
        .then((books) => (this.books = books));
    },
    selectBook(book) {
      this.selectedBook = book;
    },
    setFilter(filterBy) {
      this.filterBy = filterBy;
    },
  },
  computed: {
    booksToShow() {
      if (!this.filterBy) return this.books;
      var searchStr = this.filterBy.title;
      searchStr = searchStr.toLowerCase();
      const bookToShow = this.books.filter((book) => {
        return (
          !this.filterBy.toPrice ||
          (this.filterBy.fromPrice < book.listPrice.amount &&
            this.filterBy.toPrice > book.listPrice.amount &&
            book.title.toLowerCase().includes(searchStr))
        );
      });
      return bookToShow;
    },
 
  },
  created() {
    this.loadBooks();
  },
  components: {
    bookList,
    bookFilter,
  },
};

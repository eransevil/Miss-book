import longText from '../cmps/long-text.cmp.js';
import { bookDetailsService } from '../services/bookDetails-service.js';
import { BookService } from '../services/book-service.js';
import bookReview from '../cmps/book-review.cmp.js';
import formReview from '../cmps/form-review.cmp.js';

export default {
  template: `
    <section v-if="book" class="book-details-container">
      <router-link class="x-btn" :to="'/book/'"> ✖</router-link>
    <div class="book-details"> 
      <div class="book-info"> 
        <p class="title"> {{book.title}}</p>
        <p class="price" :class="{red:book.listPrice.amount > 150, green:book.listPrice.amount<50 }">{{book.listPrice.amount}}{{getCurrencyIcon}}<span >{{isOnSale}} </span></p>
        <p>  {{pageCount}} </p>
        <p>  {{PublishedDate}} </p>
        <p class="sub-text" >{{showDesc}} <long-text v-if="readMore===true" :txt="showRest"/> <h4 @click="SetReadMore"> {{ReadMsg}}</h4> </p>
        </div> 
        <img class="book-img" :src="book.thumbnail">
        </div>       
        <div class="reviews-container"> 

        
        <button class="review-btn" @click="toggleReviewForm"> {{btnMsg}} </button>
        <form-review @reviewsSent="updateReview" v-if="addReview"/>
        <button v-if="book.reviews.length" class="open-review-btn" @click="openReviews"> Show Reviews </button>
        <book-review @deleteReview="removeReview" v-if="showReviews===true" :reviews="book.reviews" />     
        </div>
        
    </section>
    `,

  data() {
    return {
      readMore: false,
      book: null,
      showReviews: false,
      addReview: false,
    };
  },
  methods: {
    SetReadMore() {
      this.readMore = !this.readMore;
    },
    openReviews() {
      this.showReviews = !this.showReviews;
      console.log(this.showReviews);
    },
    toggleReviewForm() {
      this.addReview = !this.addReview;
    },
    updateReview(review) {
      this.book.reviews.push(review);
      BookService.save(this.book);
    },
    removeReview(idx) {
      this.book.reviews.splice(idx, 1);
      BookService.save(this.book);
    },
  },
  computed: {
    pageCount() {
      if (this.book.pageCount > 500) return 'Long reading';
      else if (this.book.pageCount > 200) return 'Decent Reading';
      else return 'Light Reading';
    },
    PublishedDate() {
      const date = new Date();
      const year = date.getFullYear();
      if (year - this.book.publishedDate > 10) return 'Veteran Book';
      else if (year - this.book.publishedDate <= 1) return 'New!';
      else return this.book.publishedDate;
    },
    getCurrencyIcon() {
      return bookDetailsService.getCurrencySymbol(this.book);
    },
    isOnSale() {
      if (this.book.listPrice.isOnSale) return ' ON SALE ⭐';
    },
    showDesc() {
      const txt = this.book.description;
      return txt.substr(0, 100);
    },
    ReadMsg() {
      if (this.readMore === false) return 'Read More';
      else return 'Read Less';
    },
    showRest() {
      return this.book.description;
    },
    btnMsg() {
      if (this.addReview) return '✖';
      else return 'Add Review';
    },
  },
  components: {
    longText,
    bookReview,
    formReview,
  },
  created() {
    const id = this.$route.params.bookId;
    console.log(id);
    BookService.getById(id).then((book) => {
      console.log(book);
      this.book = book;
    });
  },
};

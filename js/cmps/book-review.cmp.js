export default {
  props: ['reviews'],
  template: `
    <section class="reviews-container"> 
        <div class="review" v-for="(review,idx) in reviews" :key="idx"> 
            <button class="delete-btn"  @click="deletereview(idx)"> ✖ </button>   
              <span> name: {{ review.name }} </span>  <span> rate: {{review.rate}}  </span> <span> {{review.review}}  </span> 
            </div>
  
        </section>
    `,
 
  data() {
    return {
      bookReviews: this.reviews,
    };
  },
  methods:{
    deletereview(reviewIdx){
        this.$emit('deleteReview', reviewIdx )
    }
  }
};

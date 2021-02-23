import {eventBus} from '../services/event-bus-service.js';

export default {
    template: `
      <section class="form-container"> 
          <form class="form">
            <input ref="nameInput" v-model="userName" type="text" placeholder="Name">  
            <input  v-model="rate" type="number" placeholder="Rate">  
            <textarea  v-model="review"  placeholder="Your Review"></textarea>
            <button class="submit-btn" @click.prevent="sendReview" > Submit </button>
         </form>
      
          </section>
      `,
    
    data() {
      return {
        userName:'',
        rate:0,
        review:''
      };
    },
    methods:{
        sendReview(){
            const review = {name:this.userName, rate:this.rate, review:this.review}
            this.$emit('reviewsSent', review)
            const msg = {
                txt:'review saved Succesfully',
                type: 'success'
            }
            eventBus.$emit('show-msg' ,msg)
        }
    },
    mounted(){
        this.$refs.nameInput.focus()
    }
  };
  
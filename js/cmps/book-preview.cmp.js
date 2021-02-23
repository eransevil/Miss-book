import {bookDetailsService} from '../services/bookDetails-service.js'


export default {
    props:['book'],
    template:`
    <section class="book-preview">
        <p class="title"> {{book.title}}</p>
        <p class="price"> {{book.listPrice.amount}} {{getCurrencyIcon}}</p>
    </section>
    `,
        computed:{
            getCurrencyIcon(){
                return bookDetailsService.getCurrencySymbol(this.book)
            }

        }
}


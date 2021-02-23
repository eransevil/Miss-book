// import BookApp from './pages/book-app.cmp.js';
import appHeader from './cmps/app-header.cmp.js';
import { myRouter } from './routes.js'
import userMsg from './cmps/user-msg.cmp.js'

const options = {
  el: '#app',
  router: myRouter,
  template: `
    <section>
      <user-msg/>
      <app-header />
      <router-view />
      <footer><p> &copy; Coffeerights 2021</p></footer>
    </section>       
    `,
  components: {
    appHeader,
    userMsg
  },
};

const app = new Vue(options);

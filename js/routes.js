import bookApp from './pages/book-app.cmp.js'
import homePage from './pages/home-page.cmp.js'
import bookDetails from './pages/book-details.cmp.js'
import about from './pages/about.cmp.js'


const routes = [
    {
        path:'/',
        component:homePage
    },
    {
        path:'/book',
        component:bookApp
    },
    {
        path:'/about',
        component:about
    },
    {
        path:'/book/:bookId',
        component:bookDetails
    }
 
]

export const myRouter = new VueRouter({ routes })
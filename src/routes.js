import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/Home.vue';
import Account from './components/Account.vue';
import Login from './components/Login.vue';
import BookDetail from './components/BookDetail.vue';
import Books from './components/Books.vue';
import NotFound from './components/NotFound.vue';
import Purchase from './components/Purchase.vue';
import SignUp from './components/SignUp.vue';

Vue.use(VueRouter);

const routes = [
    {path:'/', component: Home},

    {path: '/account', component: Account, beforeEnter(to, from, next){
        if(store.state.token)
            {next()}
            else{next('/login')}
    }},

    {path: '/login', component: Login},

    {path: '/books', component: Books},

    {path: '/books/:pk', component: BookDetail,
        children: [
            {path: 'purchase', component: Purchase}
        ] },

    {path: '/signup', component: SignUp},

    {path: '/:invalidroute(.*)', component: NotFound}
]

export default new VueRouter({
    mode: 'history',
    routes: routes
})
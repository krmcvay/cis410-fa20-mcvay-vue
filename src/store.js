import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import routes from './routes.js';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        token: null,
        user: null,
        books: []
    },
    mutations:{
        storeTokenInApp(state, myToken){
            state.token = myToken
        },
        storeUserInApp(state, myUser){
            state.user = myUser
        },
        storeBooks(state, myBooks){
            state.books = myBooks
        },
        clearAuthData(state){
            state.token = null;
            state.user = null;
        }
    },
    actions:{
        getBooks({commit}){
            axios.get('/books')
            .then((myResponse)=>{
                console.log("response from getBooks action", myResponse);
                commit('storeBooks', myResponse.data)
            })
            .catch(()=>{console.log("error in getBooks action")})
        },
        logout({commit, state}){
            axios.post('/customers/logout', null, {
                headers:{
                    Authorization: `Bearer ${state.token}`
                }
            });

            commit('clearAuthData');
            routes.replace("/");
        }

    }
})
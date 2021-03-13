import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex)
// 用到了 localStorage，即本地存储，在项目打开的时候会判断本地存储中是否有 user 这个对象存在
// 如果存在就取出来并获得 username 的值，否则则把 username 设置为空。
const store = new Vuex.Store({
    state: {
        user: {
            username: window.sessionStorage.getItem('user'|| '[]')== null ? '' : JSON.parse(window.sessionStorage.getItem('user' || '[]')).username,
            id: window.sessionStorage.getItem('user'|| '[]')== null ? '' : JSON.parse(window.sessionStorage.getItem('user' || '[]')).id,
        },
        index: 0,
        path: '',
    },
    mutations: {
        login (state, user) {
            state.user = user
            window.sessionStorage.setItem('user', JSON.stringify(user))
        }
    },
})

export default store
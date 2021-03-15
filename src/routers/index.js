import Vue from "vue";
import VueRouter from "vue-router";

import Login from "@/components/common/Login";
import Home from "@/components/content/Home";
import Homeview from "@/views/home/Homeview";
import Library from "@/components/content/Library";
import Libraryview from "@/views/library/libraryview";
import Noteview from "@/views/note/Noteview";
import total from "@/views/library/content/total";
import AddOrUpdate from "@/views/library/content/AddOrUpdate";
import whitepage from "@/views/library/content/whitepage";
import Regis from "@/views/login/Regis";
import Note from "@/components/content/Note";
import addnote from "@/views/note/content/addnote";
import totalnote from "@/views/note/content/totalnote";
// import videoview from "@/views/videoshow/videoview";
import video from "@/components/content/video";
import personal from "@/components/content/personal";
// import Personalview from "@/views/personal/Personalview";
Vue.use(VueRouter)
const routes = [
    {
        path: '',
        redirect: '/login'
    },
    {
        path: '/login',
        component: Login,
        children: [
            {
                path: '/regis',
                component: Regis
            }
        ]
    },
    {
      path: '/whitepage' ,
      component: whitepage
    },
    {
        path: '/home',
        component: Home,
        // redirect: '/homeview',
        meta : {
            requireAuth: true
        },
        children: [
            {
                path: '/homeview',
                component: Homeview
            },
            {
                path: '/libraryview',
                component: Libraryview
            },
            {
                path: '/library',
                component: Library,
                meta : {
                    requireAuth: true
                },
                children : [
                    {
                    path: 'total',
                    component: total
                    },
                    {
                        path: 'addorupdate',
                        component: AddOrUpdate,
                    },
                ]
            },
            {
                path: '/noteview',
                component: Noteview,
            },
            {
                path: '/note',
                component: Note,
                children: [
                    {
                        path: 'addnote',
                        component: addnote
                    },
                    {
                        path: 'totalnote',
                        component: totalnote
                    }
                ]
            },
            {
                path: '/video',
                component: video,
            },
            {
                path: '/personal',
                component: personal,
            }
        ]
    }
]

const router = new VueRouter({
    routes,
    mode: 'history',
})
// router.beforeEach((to,from,next) =>{
//     //从from跳转到to
//     document.title = to.meta.title
//     next()
// })
export default router
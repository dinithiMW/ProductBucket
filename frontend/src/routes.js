import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import AddProduct from './components/AddProduct.vue'
import About from './components/About.vue'
import Product from './components/List.vue'
import Contact from './components/Contact.vue'
import Home from './components/Home.vue'

const router = new VueRouter({
     mode: 'history',
    routes:[
        { path:"/add",component:AddProduct},
        { path:"/about",component:About},
        { path:"/product",component:Product},
        { path:"/contact",component:Contact},
        { path:"/",component:Home}
    ]
});


export default router
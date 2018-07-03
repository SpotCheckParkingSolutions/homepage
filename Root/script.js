    
const products = { template: '<div>Products and Services</div>' }
const our_app = { template: '<div>App</div>' }
const about = { template: '<div>About Us</div>'}
const jobs = { template: '<div>Jobs</div>'}
const contact = { template: '<div>Contact</div>'}

const routes = [
    { path: '/products', component: products },
    { path: '/app', component: our_app },
    { path: '/about', component: about},
    { path: '/jobs', component: jobs},
    { path: '/contact', component: contact}
]


const router = new VueRouter({
    routes
})

const app = new Vue({
    router
}).$mount('#app')

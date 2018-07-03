  //**********Main Routes**************   
    const products = { template: 
        `<div class="main-view">
        <h2>Our Products</h2>
        <router-view></router-view>
    </div>`  };
    const our_app = { template: `<div class="main-view"><h2>App</h2><router-view></router-view></div>` };
    const about = { template: `<div class="main-view"><h2>About</h2><router-view></router-view></div>` };
    const jobs = { template: `<div class="main-view"><h2>Jobs</h2><router-view></router-view></div>` };
    const contact = { template: `<div class="main-view"><h2>Contact</h2></div>` };

    //***********Side Bars **********
    const productSidebar = {template: `
        <nav>
            <router-link to="/products/vision">Vision</router-link>
            <router-link to="/products/data">Data</router-link>
            <router-link to="/products/pricing">Pricing</router-link>
            <router-link to="/products/quota">Get A Quota</router-link>
        </nav>
    `};

    //*********Sub Routes************
    //Products
    const vision = { template: '<div>Vision Network</div>' };
    const data = { template: '<div>Data Services</div>' };
    const pricing = { template: '<div>General Pricing</div>' };
    const quota = { template: '<div>Get Quota</div>' };

    //App
    const coverage = { template: '<div>Coverage</div>' };
    // const myspotcheck = { template: '<div>My SpotCheck</div>' };
    const map = { template: '<div>Map</div>' };

    //about
    const leadership = { template: '<div>Leadership</div>' };
    const summary = { template: '<div>Summary</div>' };

    //Jobs
    const full = { template: '<div>Part Time Listings</div>' };
    const part = { template: '<div>Part Time Listings</div>' };
    const contract = { template: '<div>Contract and Specific Project Listings</div>' };
    const newest = { template: '<div>New Job Openings<div>' };

    
    const testFunctionalRoutes = ()=>{
        return [
            
        ]
    }

    const routes = [
        { path: '/products', 
            components: 
                {
                    default: products,
                    sidebar: productSidebar
                },
            children:  [{
                path: '',
                component: vision
            },
            {
                path: 'vision',
                component: vision
            },
            {
                path: 'data',
                component: data
            },
            {
                path: 'pricing',
                component: pricing
            },
            {
                path: 'quota',
                component: quota
            }]
        },
        { path: '/ourapp', component: our_app,
            children: [
                {
                    path: '',
                    component: map
                },
                {
                    path: 'coverage',
                    component: coverage
                },
                {
                    path: 'map',
                    component: map
                },
                
            ] },
        { path: '/about', component: about,
            children: [
                {
                    path: '',
                    component: summary
                },
                {
                    path: 'summary',
                    component: summary
                },
                {
                    path: 'leadership',
                    component: leadership
                },

            ]},
        { path: '/jobs', component: jobs,
            children:[
                {
                    path: '',
                    component: newest
                },
                {
                    path: 'full',
                    component: full
                },
                {
                    path: 'part',
                    component: part
                },
                {
                    path: 'contract',
                    component: contract
                },
                {
                    path: 'newest',
                    component: newest
                }
            ]},
        { path: '/contact', component: contact}
    ]


    const router = new VueRouter({
        routes
    })

    const app = new Vue({
        router
    }).$mount('#app')
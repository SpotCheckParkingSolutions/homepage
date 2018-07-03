  //Main Routes   
    const products = { template: 
        `<div>
            <div>Our Products</div>
            <router-view></router-view>
        </div>`  };
    const our_app = { template: '<div><div>App</div><router-view></router-view></div>' };
    const about = { template: '<div><div>About Us</div><router-view></router-view></div>'};
    const jobs = { template: '<div><div>Jobs</div><router-view></router-view></div>'};
    const contact = { template: '<div><div>Contact</div>'};

    //*********Sub Routes************
    //Products
    const vision = { template: '<div>Vision Network</div>' };
    const data = { template: '<div>Data Services</div>' };
    const pricing = { template: '<div>General Pricing</div>' };
    const quota = { template: '<div>Get Quota</div>' };

    //App
    const coverage = { template: '<div>Coverage</div>' };
    const myspotcheck = { template: '<div>My SpotCheck</div>' };
    const map = { template: '<div>Map</div>' };

    //about
    const leadership = { template: '<div>Leadership</div>' };
    const summary = { template: '<div>Summary</div>' };

    //Jobs
    const full = { template: 'Part Time Listings' };
    const part = { template: 'Part Time Listings'};
    const contract = { template: 'Contract and Specific Project Listings'};
    const newest = { template: 'New Job Openings'};

    


    const routes = [
        { path: '/products', component: products,
            children: [
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
                }
            ] },
        { path: '/app', component: our_app,
            childern: [
                {
                    path: 'coverage',
                    component: coverage
                },
                {
                    path: 'myspotcheck',
                    component: myspotcheck
                },
                {
                    path: 'map',
                    component: map
                },
                
            ] },
        { path: '/about', component: about,
            children: [
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
            childern:[
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
                    path: 'new',
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
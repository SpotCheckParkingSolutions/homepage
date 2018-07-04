(()=>{ 
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
        <nav class="sub-nav">
            <img src='./icon.ico' alt="icon" class='icon'>
            <router-link to="/products/vision">Vision</router-link>
            <router-link to="/products/data">Data</router-link>
            <router-link to="/products/pricing">Pricing</router-link>
            <router-link to="/products/quota">Get A Quota</router-link>
        </nav>
    `};
    
    const appSidebar = {template: `
    <nav class="sub-nav">
        <img src='./icon.ico' alt="icon" class='icon'>
        <router-link to="/app/coverage">Coverage</router-link>
        <router-link to="/app/map">Map</router-link>
    </nav>
`};
    const aboutSidebar = {template:`
        <nav class="sub-nav">
            <router-link to="/about/leadership">Leadership</router-link>
            <router-link to="/about/summary">Summary</router-link>
        </nav>`
    };
    const jobsSidebar = {template: `
        <nav class="sub-nav">
            <router-link to="/jobs/new">New</router-link>
            <router-link to="/jobs/full">Full Time</router-link>
            <router-link to="/jobs/part">Part Time</router-link>
            <router-link to="/jobs/cotract">Contract/Temporary</router-link>
        </nav>
    `
    };

    //*********Sub Routes************
    //Products
    const vision = { template: `
        <div class='sub-view'>
            <h3>Vision Network</h3>
            <img class="slides" src="pic1.jpg">
            <div class="text-blocks">
                <h4>Section 1</h4>
                <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
                <h4>Section 2</h4>
                <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
                <h4>Section 3</h4>
                <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
            </div>

        </div>` 
    };
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
        {path: '',
            redirect: '/about'
        },
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
        { path: '/app', 
            components: {
                default: our_app,
                sidebar: appSidebar
            },
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
        { path: '/about', 
            components: {
                default: about,
                sidebar: aboutSidebar
            },
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
        { path: '/jobs', components: {
            default: jobs,
            sidebar: jobsSidebar
        },
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

})();
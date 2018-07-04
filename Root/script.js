(()=>{ 
  //**********Main Route Templates**************   
    const products = { template: 
        `<div class="main-view">
        <h2>Our Products</h2>
        <router-view></router-view>
    </div>`  };
    const our_app = { template: `<div class="main-view"><h2>App</h2><router-view></router-view></div>` };
    const about = { template: `<div class="main-view"><h2>About</h2><router-view></router-view></div>` };
    const jobs = { template: `<div class="main-view"><h2>Jobs</h2><router-view></router-view></div>` };
    const contact = { template: `
        <div class="main-view">
            <h2>Contact</h2>
            <div id="email" >{{ email.emailToken1 + email.emailToken2 + email.emailToken3 + email.emailToken4 }}</div>
        </div>`,
        data: ()=>{
            return {
                email: {
                    emailToken1: "support",
                    emailToken2: "@",
                    emailToken3: "spotcheckparking",
                    emailToken4: ".com"
                }
            }
        }
    }
    

    //***********Side Bar Templates **********
    const productSidebar = {template: `
    <div class="sub-nav">
        <nav>
            <router-link to="/products/vision">Vision</router-link>
            <router-link to="/products/data">Data</router-link>
            <router-link to="/products/pricing">Pricing</router-link>
            <router-link to="/products/quote">Get A Quote</router-link>
        </nav>
    </div>
    `};
    
    const appSidebar = {template: `
    <div class="sub-nav">
        <nav>
            <router-link to="/app/coverage">Coverage</router-link>
            <router-link to="/app/map">Map</router-link>
        </nav>
    </div>
`};
    const aboutSidebar = {template:`
        <div class="sub-nav">
            <nav>
                <router-link to="/about/leadership">Leadership</router-link>
                <router-link to="/about/summary">Summary</router-link>
            </nav>
        </div>`
    };
    const jobsSidebar = {template: `
        <div class="sub-nav">
            <nav>
                <router-link to="/jobs/new">New</router-link>
                <router-link to="/jobs/full">Full Time</router-link>
                <router-link to="/jobs/part">Part Time</router-link>
                <router-link to="/jobs/cotract">Contract/Temporary</router-link>
            </nav>
        </div>
    `
    };

    //*********Sub Route Templates************
    //Products
    const vision = { template: `
        <div class='sub-view'>
            <h3>Vision Network</h3>
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
    const data = { template: `
    <div class='sub-view'>
        <h3>Data Services</h3>
        <div class="text-blocks">
            <h4>Section 1</h4>
            <p>Backing equity hypotheses niche market alpha crowdfunding hackathon first mover advantage lean startup ownership. Strategy ramen graphical user interface research & development metrics disruptive pitch bandwidth customer market. Buzz influencer metrics venture angel investor partnership. Network effects rockstar hackathon buyer accelerator. Branding early adopters first mover advantage angel investor agile development crowdfunding influencer return on investment. Analytics iPhone monetization learning curve influencer. Handshake creative mass market monetization seed money focus release startup paradigm shift churn rate responsive web design. Churn rate research & development marketing disruptive deployment equity gen-z freemium crowdfunding assets responsive web design. Network effects branding ownership. Stealth long tail android crowdsource alpha rockstar success traction ramen.</p>
            <h4>Section 2</h4>
            <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
            <h4>Section 3</h4>
            <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
            
        </div>
        
    </div>`  };
    const pricing = { template: `<div class='sub-view'>
    <h3>Pricing</h3>
    <div class="text-blocks">
        <h4>Section 1</h4>
        <p>Supply chain beta assets pivot ownership branding monetization. Creative long tail advisor churn rate. Agile development responsive web design long tail funding partnership social proof crowdsource. Assets supply chain equity. Product management technology lean startup termsheet. Ecosystem business-to-consumer holy grail launch party stealth buyer freemium interaction design business-to-business stock low hanging fruit strategy. Beta MVP business plan iPhone churn rate. Prototype disruptive business plan gen-z return on investment learning curve iPad stealth focus bootstrapping.</p>
        <h4>Section 2</h4>
        <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
        <h4>Section 3</h4>
        <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
        
    </div>
    
</div>` };
    const quote = { template: `<div class='sub-view'>
    <h3>Get a Quote</h3>
    <div class="text-blocks">
        <h4>Section 1</h4>
        <img src='./money.jpg' alt='money' height='400px' width='auto'>
        <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
        
    </div>
 
</div>` };

    //App
    const coverage = { template: `
    <div class="sub-view">
        <h3>Coverage</h3>
        <div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=portland%2C%20or&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.maps-erstellen.de">maps-erstellen.de</a></div><style>.mapouter{text-align:right;height:500px;width:600px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style></div>
    </div>`};
    const map = { template: `
        <div class="sub-view">
            <h3>Map</h3>
            <div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=portland%2C%20or&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.maps-erstellen.de">maps-erstellen.de</a></div><style>.mapouter{text-align:right;height:500px;width:600px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style></div>
        </div>` };

    //about
    const leadership = { template: '<div>Leadership</div>' };
    const summary = { template: '<div>Summary</div>' };

    //Jobs
    const full = { template: '<div>Part Time Listings</div>' };
    const part = { template: '<div>Part Time Listings</div>' };
    const contract = { template: '<div>Contract and Specific Project Listings</div>' };
    const newest = { template: '<div>New Job Openings<div>' };

    //Routes Declared
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
                path: 'quote',
                component: quote
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

    //Create VueRouter Object
    const router = new VueRouter({
        routes
    })

    //Mount app with Router
    const app = new Vue({
        router, 
    }).$mount('#app')

    
})();
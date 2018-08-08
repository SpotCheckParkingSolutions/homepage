(()=>{
  //**********Main Route Templates**************
    // const back = {
    //   props: ['route'],
    //   template: "<router-link to={{route}}><img class='back arrow' alt='back' src='./back.svg'/></router-link>"

    // }
    const products = {

      template:
        `<div class="main-view">
        <div class="openingContainer">
        <h2 class='openingTitle'>Parking services which enhance the efficiency of everyday travel.</h2></div>
          <transition name='fade'>
            <router-view></router-view>
          </transition>
        </div>`
      };

    const our_app = { template:
      `<div class="main-view">

      <div class="openingContainer">
        <h2 class='openingTitle'>State of the art tools.</h2>
        <h3 class='openingSubTitle'>Making Parking Administration a Breeze.</h3>
      </div>
        <router-view></router-view>
      </div>` };
    const about = { template: `
      <div class="main-view">
          <div class="openingContainer">
            <h2 class='openingTitle'>Your destination has arrived.</h2>
          </div>
        <router-view></router-view>
        </div>` };
    const jobs = { template: `
      <div class="main-view">

          <div class="openingContainer">
            <h2 class='openingTitle'>Work With Us.</h2>
          </div>

      <router-view></router-view>
      </div>` };
    const contact = { template: `
        <div class="main-view">

          <div class="openingContainer">
            <h2 class='openingTitle'>Contact us.</h2>
            <h3 class='openingSubTitle'>We'd Love to Hear From You!</h3>
          </div>

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
    };


    //***********Side Bar Templates **********
    const productSidebar = {template: `
    <div class="sub-nav">
        <nav>
            <router-link to="/products/vision">Machine Vision</router-link>
            <router-link to="/products/data">Data</router-link>
        </nav>
    </div>
    `};

    const appSidebar = {template: `
    <div class="sub-nav">
        <nav>
            <router-link to="/app/coverage">Coverage</router-link>
            <router-link to="/app/tools">Tools</router-link>
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
                <router-link to="/jobs/newest">New</router-link>
                <router-link to="/jobs/full">Full Time</router-link>
                <router-link to="/jobs/part">Part Time</router-link>
                <router-link to="/jobs/contract">Contract/Temporary</router-link>
            </nav>
        </div>
    `
    };

    //*********Sub Route Templates************
    //Products
    const vision = { template: `
        <div class='sub-view'>
            <h3>SpotCheck's State of the Art Vision Network</h3>
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
        <h3>Ethical, Privacy First Data Services</h3>
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
        <div><h2>Help Us Bring SpotCheck to An Area near You. </h2>
        <button class="inLineContact"><router-link to="/contact">Contact Us</router-link></button>
        </div>
    </div>`};
    const tools = { template: `
        <div class="sub-view">
            <h3>Administration Tools</h3>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            <img class='adminToolsImg' src='./admintools.png' alt='admin tools'>
        </div>` };

    //about
    const leadership = { template: `
    <div class="sub-view">
        <h3>Leadership</h3>
        <ul>
            <li>Jacob van de Lindt- CEO</li>
            <li>Taylor Griffin- CTO</li>
            <li>Alex De Paz - COO</li>
            <li>Cooper Runstein- CFO</li>
        </ul>
    </div>` };
    const summary = { template: `
    <div class="sub-view">
        <h3>Summary</h3>
        <div class="text-blocks">
            <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
        </div>
    </div>` };

    //Jobs
    const full = { template: `
      <div class='sub-view'>
      <h3>Full Time Listings</h3>
      <div class="jobList">
          <p>Sorry, We're Not Hiring Right Now!</p>
        </div>
      </div>` };
    const part = { template: `
      <div class='sub-view'>
        <h3>Part Time Listings</h3>
        <div class="jobList">
          <p>Sorry, We're Not Hiring Right Now!</p>
        </div>
      </div>` };
    const contract = { template: `
    <div class="sub-view">
      <h3>Contract and Specific Project Listings</h3>
      <div class="jobList">
          <p>Sorry, We're Not Hiring Right Now!</p>
        </div>
    </div>` };
    const newest = { template: `
      <div class='sub-view'>
        <h3>New Job Openings</h3>
        <div class="jobList">
          <p>Sorry, We're Not Hiring Right Now!</p>
        </div>
      <div>` };


    const subMenus = {
    };
    subMenus['sidebar-products'] = productSidebar;
    subMenus['sidebar-app'] = appSidebar;
    subMenus['sidebar-jobs'] = jobsSidebar;
    subMenus['sidebar-about'] = aboutSidebar;

    //Routes Declared
    const routes = [
        {path: '',
            redirect: '/about'
        },
        { path: '/products',
            components: Object.assign({default: products}, subMenus),
            children:  [{
                path: '',
                redirect: '/products/vision'
            },
            {
                path: 'vision',
                component: vision
            },
            {
                path: 'data',
                component: data
            },
              ]
        },
        { path: '/app',
            components: Object.assign({default: our_app}, subMenus),
            children: [
                {
                    path: '',
                    component: tools
                },
                {
                    path: 'coverage',
                    component: coverage
                },
                {
                    path: 'tools',
                    component: tools
                },

            ] },
        { path: '/about',
        components: Object.assign({default: about}, subMenus),
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
        { path: '/jobs',
            components: Object.assign({default: jobs}, subMenus),
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
        { path: '/contact', components: Object.assign({default: contact}, subMenus)}
    ]

    //Create VueRouter Object
    const router = new VueRouter({
        routes
    })

    //Mount app with Router
    const app = new Vue({
        router,
        data: {
          route: this.$router,
          s: 'hello'
        }
    }).$mount('#app')


})();

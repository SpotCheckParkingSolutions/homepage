(()=>{
  //**********Main Route Templates**************
    // const back = {
    //   props: ['route'],
    //   template: "<router-link to={{route}}><img class='back arrow' alt='back' src='./back.svg'/></router-link>"

    // }
    const products = {

      template:
        `<div class="main-view">
        <div class="openingContainer productsOpeningContainer">
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
            <h2 class='openingTitle'>Join Our Team to Revolutionize the way we Commute.</h2>
            <h3>We strive to hire the best in computer science, business, and engineering.</h3>

          </div>

      <router-view></router-view>
      </div>` };
    const contact = { template: `
        <div class="main-view">
            <h2 class='openingTitle contactTitle'>Contact us.</h2>
            <h3 class='openingSubTitle contactSubTitle'>We'd Love to Hear From You!</h3>
            <a :href="'mailto:' + emailToken1 + emailToken2 + emailToken3 + emailToken4" id="email" class='email'>{{ emailToken1 + emailToken2 + emailToken3 + emailToken4 }}</a></button>
        </div>`,
        data: ()=> {
        return ({
          emailToken1: "support",
          emailToken2: "@",
          emailToken3: "spotcheckparking",
          emailToken4: ".com"
        })
      }
    };


    //***********Side Bar Templates **********
    const productSidebar = {template: `
    <div class="sub-nav">
        <nav>
            <router-link to="/products/vision">Live Parking Coverage</router-link>
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
            <div class="text-blocks vision-text-blocks">
                <h4>Best in the Business</h4>
                <p class="textBlockP">SpotCheck uses the newest and best in machine learning technology coupled with advanced and cost-effective cameras to create state of the art detection systems. SpotCheck uses a series of neural networks in real time to detect, track, and predict cars in a variety of parking scenarios.</p>
                <h4>Small or Large, Your Destination Has Arrived</h4>
                <p class="textBlockP">One camera, or fifty, SpotCheck excels at making parking easy.</p>

            </div>


        </div>`
    };
    const data = { template: `
    <div class='sub-view'>
        <h3>Ethical, Privacy First Data Services</h3>
        <div class="text-blocks data-text-blocks">
        <h4>Our Data</h4>
        <p class="textBlockP">SpotCheck is leading the way in ethical data collection. From determining the average size of cars in your lot, busiest time of day, or the most popular spot, SpotCheck can help answer any question!</p>
            <h4>Your Privacy Matters</h4>

            <p class="textBlockP">SpotCheck values privacy above all else, we never track license plates, or store video data for longer than the time it takes to run detection algorithms.</p>



        </div>

    </div>`  };


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
            <div class="textBlockPContainer">
              <p class="textBlockP">State of the Art Administration tools create an easy way to manage parking areas large and small. Updated by the second, SpotCheck offers a live data stream accesable around the globe. Using the newest and best technologies, SpotCheck allows you to administer a parking lot without leaving your seat!</p>
            </div>
            <img class='adminToolsImg' src='./admintools.png' alt='admin tools'>
        </div>` };

    //about
    const leadership = { template: `
    <div class="sub-view">
        <h3>The Next Generation of Technology Leaders</h3>
        <ul class='leaders'>
            <li><h4>Jacob van de Lindt- CEO</h4><div class='leader-description'>Jacob van de Lindt has several years of experience with neural networks. He acted as an external contractor and intern for ITER, the International Thermonuclear Experimental Reactor in Southern France, where machine learning was applied to improve plasma modeling. He has been a leader at Oregon State University in Inventors Enterprise, a club aiming to create new technology and aid new innovators. Through this club, he organized Hweekend, a technology competition with nearly sixty participants with sponsorship from Hewlett-Packard. He is pursuing a Bachelor in Science in Nuclear Engineering and a Bachelor of Science in Physics, with a minor in mathematics, at the Oregon State University Honors College.
            </div></li>
            <li>Taylor Griffin- CTO</li>
            <li>Alex De Paz - COO</li>
            <li>Cooper Runstein- CFO</li>
        </ul>
    </div>` };
    const summary = { template: `
    <div class="sub-view summary-view">
        <h3>SpotCheck</h3>
        <div class="text-blocks">
            <p class="textBlockP">Founded in 2017, SpotCheck is a parking solutions company which utilizes state of the art machine vision to bring you the best in parking technology. We strive to modernize existing parking infrastructure and roadways by providing real-time coverage of available parking, creating more efficient traffic flow for everyday commuters, and improving the safety of parking environments which experience heavy traffic. </p>
        </div>
    </div>` };

    //Jobs
    const full = { template: `
      <div class='sub-view'>
      <h3>Full Time Listings</h3>
      <div class="jobList textBlockPContainer">
          <p class="textBlockP">Sorry, We're Not Hiring Right Now!</p>
        </div>
      </div>` };
    const part = { template: `
      <div class='sub-view'>
        <h3>Part Time Listings</h3>
        <div class="jobList textBlockPContainer">
          <p class="textBlockP">Sorry, We're Not Hiring Right Now!</p>
        </div>
      </div>` };
    const contract = { template: `
      <div class="sub-view">
        <h3>Contract and Specific Project Listings</h3>
        <div class="jobList textBlockPContainer">
            <p class="textBlockP">Sorry, We're Not Hiring Right Now!</p>
          </div>
      </div>`
    };

    const newest = { template: `
      <div class='sub-view'>
        <h3>New Job Openings</h3>
        <div class="jobList textBlockPContainer">
          <p class="textBlockP">Sorry, We're Not Hiring Right Now!</p>
        </div>
      </div>`
    };


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
        }
    }).$mount('#app')


})();

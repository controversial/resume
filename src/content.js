/* eslint-disable max-len */
const email = 'luke@deentaylor.com';
const portfolio = 'luke.deentaylor.com';

export default {
  // summary: `
  //   Award-winning creative full-stack developer with a passion for applying technology to create
  //   beautiful and effective products.
  // `,
  about: `
    I’ve been interested in creating with code since my first LEGO robotics projects as a little
    kid. I picked up Python in middle school, then turned to the web to share my creations with
    the world. In high school, I started working with JavaScript and CSS for fun, and eagerly
    expanded my skills until I’d mastered modern web development. Today, I pair this expertise with
    skills in interface design and back-end development to bring projects I'm passionate about to
    life.
  `,

  email,
  portfolio,

  experience: [
    {
      employer: 'Stainless',
      position: 'Product Engineer',
      location: 'New York, NY',
      startDate: new Date('2025-09-09'),
      tasks: [
        'Developed design system for <a href="https://stainless.com/docs-platform" target="_blank" rel="noopener noreferrer">Stainless Docs</a>, which powers API reference for Anthropic, Cloudflare, etc.',
        'Supported a diverse set of technical customers, triaging issues, and designing and developing features to support customer needs.',
      ],
    },
    {
      employer: 'The Marriage Pact',
      position: 'Founding Design Engineer',
      location: 'New York',
      startDate: new Date('2021-08-31'), // 07/12 is accurate
      endDate: new Date('2025-09-04'),
      tasks: [
        'Led design engineering at an early stage startup, building several consumer social products for a college audience.',
        'Built the company’s first revenue-generating product, scaling revenue from 0 to over $100k/yr',
        'Designed and built complex front-ends and back-end services to serve hundreds of thousands of users across multiple products.',
        'Developed boundary-pushing web visuals with WebGL, CSS, and custom animation systems.',
        // 'Led engineering discussions to develop a robust and scalable architecture for an early-stage startup.',
        // 'Contributed significantly to product design and ideation through active discussion, helping develop multiple viral social products.',
        // 'Rapidly develop and iterate on new products with changing feature sets.',
        // 'Designed and created a novel, scalable system for on-demand generation of images, which provides social preview images and personalized email/SMS content and handles over 1000 requests per hour at peak times.',
        // 'Built a fully new product end to end in the space of a few months, including visual design, branding, database design, front-end development, and back-end development.',

        // 'Build up a collection of multiple integrated web apps, starting from scratch to ',
        // 'Maintain a large codebase of multiple integrated React web apps.',
        // 'Serve as a core member of product design and ideation discussions.',
        // 'Participate centrally in product design and discussions and ideation.',
        // 'Designed and implemented generative animated visuals and simulations that formed a core part of the visual identity on many sites.',
        // 'Designed and built a privacy-focused analytics collection system from scratch.',
        // 'Designed and built a privacy-focused authentication system from scratch.',
        // 'Launch custom web apps at high velocity to support a range of viral products targeted at college students.',
        // 'Iterate on UX patterns to promote viral growth.',
        // 'Target core web vitals to establish best-in-class performance and make web experiences feel native.',
        // 'Take leadership within a small team of developers.',
      ],
    },
    {
      employer: 'OddCommon',
      position: 'Developer',
      location: 'Brooklyn, NY',
      startDate: new Date('2021-05-17'),
      endDate: new Date('2021-08-31'),
      tasks: [
        'Built and launched complex and polished React apps from scratch with great attention to detail.',
        'Focused on animation, performance, and micro-interactions to deliver highly polished products.',
        'Took creative and technical ownership of client projects.',
      ],
    },
    {
      employer: 'Johns Hopkins Coronavirus Resource Center',
      position: 'Full-Stack Software Engineer',
      location: 'Remote',
      startDate: new Date('2020-05-06'),
      endDate: new Date('2020-09-04'),
      tasks: [
        'Maintained and expanded <a href="https://coronavirus.jhu.edu" target="_blank" rel="noopener noreferrer">coronavirus.jhu.edu</a>, a critical, high-traffic public health resource.',
        'Created rich visual data displays cited daily by The Washington Post, NPR, and others.',
        'Led effort to centralize data processing; created a novel science toolkit underpinning the data pipelines.',
        'Oversaw and led development on a full site redesign.',
      ],
    },
    {
      employer: 'JumboCode',
      position: 'President',
      location: 'Tufts University',
      startDate: new Date('2019-10-01'),
      endDate: new Date('2023-05-31'),
      tasks: [
        'Advised and supported over 100 student developers doing pro-bono work to support local nonprofits.',
        'Developed and led instructional workshops to teach modern web development.',
      ],
    },
    // {
    //   employer: 'Tufts University Digital Services',
    //   position: 'Developer',
    //   location: 'Medford, MA',
    //   startDate: new Date('2019-10-07'),
    //   endDate: new Date('2021-05-01'),
    //   tasks: ['Developed and sent HTML emails with cross-client support to a large audience.'],
    // },
    {
      employer: 'Moonfarmer',
      position: 'Junior Developer',
      location: 'Kingston, NY',
      startDate: new Date('2018-06-20'),
      endDate: new Date('2020-09-01'),
      tasks: [
        'Built large-scale React apps in an agile team.',
        'Wrote extensive documentation and blog posts.',
      ],
    },
    // {
    //   employer: 'Newburgh Armory Unity Center',
    //   position: 'Classroom Assistant',
    //   location: 'Newburgh, NY',
    //   startDate: new Date('2017-01-01'),
    //   endDate: new Date('2019-01-01'),
    //   datePrecision: 'year',
    //   tasks: [
    //     'Volunteered teaching basic programming skills to underserved elementary school students.',
    //   ],
    // },
    // {
    //   employer: 'AppMobi Inc.',
    //   position: 'Summer Intern',
    //   location: 'Poughkeepsie, NY',
    //   startDate: new Date('2016-06-21'),
    //   endDate: new Date('2016-08-30'),
    //   tasks: ['Built and deployed mobile apps using Angular.js.'],
    // },
  ],

  education: [
    {
      institution: 'Tufts University',
      startDate: new Date('2019-08-28'),
      gpa: '3.99',
      endDate: new Date('2023-05-23'),
      description: 'B.S. Computer Science',
    },
    // {
    //   institution: 'New Paltz Central High School',
    //   gpa: '99.4',
    //   startDate: new Date('2015-09-02'),
    //   endDate: new Date('2019-06-26'),
    // },
  ],

  work: [
    {
      title: 'Codus.io',
      href: 'https://codus.io/',
      github: 'https://github.com/codus-app/codus',
      startDate: new Date('2018-01-01'), // year precision
      endDate: new Date('2019-01-01'),
      tags: ['Vue', 'Express', 'Docker'],
      description: `
        Independently designed, developed, and launched a full-featured product—an online
        educational platform for students to learn programming.
      `,
    },
    // {
    //   title: 'sleep later',
    //   href: 'https://sleeplater.now.sh/',
    //   github: 'https://github.com/controversial/sleeplater.co',
    //   startDate: new Date('2018-05-01'),
    //   endDate: new Date('2018-08-01'),
    //   tags: ['JavaScript', 'Vue.js', 'Airtable'],
    //   description: 'Designed and built a fully custom e-commerce front-end, back-end, and CMS for a local clothing startup.',
    // },
    {
      title: 'Wikipedia Map',
      href: 'https://wikipedia.luk.ke/',
      github: 'https://github.com/controversial/wikipedia-map',
      startDate: new Date('2016-01-01'),
      endDate: new Date('2016-12-31'),
      tags: ['JavaScript', 'Node.js', 'Flask'],
      description: `
        Original web app allowing users to explore Wikipedia through linked topics. Conceived,
        designed, and built a custom front-end and back-end from scratch.
      `,
    },
    // {
    //   title: 'maze-cv',
    //   href: 'https://github.com/controversial/maze-cv',
    //   startDate: new Date('2015-07-01'),
    //   endDate: new Date('2015-12-01'),
    //   tags: ['Python'],
    //   description: `
    //     Interactive iOS application that solves paper mazes on a device’s camera, using my own
    //     implementations of computer vision and pathfinding algorithms.
    //   `,
    // },
  ],

  awards: [
    {
      projectName: 'BGSTR',
      href: 'https://www.awwwards.com/sites/bgstr',
      date: new Date('2021-10-14'),
      institution: 'Awwwards',
      titles: ['Honorable Mention', 'Mobile Excellence'],
      linkIcon: true,
    },
    {
      projectName: 'Tau Beta Pi',
      href: 'https://en.wikipedia.org/wiki/Tau_Beta_Pi',
      institution: 'Academic honor society |',
      startDate: new Date('2021-10-04'),
      linkIcon: false,
    },
    // {
    //   projectName: 'National Merit Scholarship',
    //   startDate: new Date('2019-01-01'),
    // },
  ],

  skills: [
    {
      title: 'JavaScript',
      description: `
        Advanced web development skills; expertise building products with popular frameworks
        like React and Vue.
      `,
      tags: ['React', 'Next.js', 'TypeScript', 'Node', 'WebGL'],
    },
    {
      title: 'Product Design',
      description: `
        Driven to design beautiful and accessible user interfaces that make products easy to use.
      `,
      // prettier-ignore
      tags: [
        'Figma', 'Sketch', 'CSS layout', 'CSS animation', 'SASS', 'Photoshop', 'Illustrator', 'UI', 'UX',
      ],
    },
    {
      title: 'Programming Languages / Technologies',
      // prettier-ignore
      tags: [
        'JavaScript', 'TypeScript', 'Python', 'C', 'C++', 'Docker', 'OpenGL', 'Numpy', 'Pandas', 'Git',
      ],
    },
  ],

  links: [
    portfolio,
    'github.com/controversial',
    // 'dribbble.com/controversial',
    'linkedin.com/in/lukedeentaylor',
  ],
};

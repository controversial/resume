export default {
  about: `
    I’ve been interested in creating with code since my first LEGO robotics projects as a little
    kid. I picked up Python in middle school, and soon turned to the web to share my creations with
    the world. In high schoool, I started working with JavaScript and CSS for fun, and quickly
    expanded my skills and mastered modern web development. Today, I pair this expertise with
    skills in interface design and back-end development to bring projects I'm passionate about to
    life online.
  `,

  experience: [
    {
      employer: 'Johns Hopkins Coronavirus Resource Center',
      position: 'Full-Stack Software Engineer',
      startDate: new Date('2020-05-06'),
      endDate: new Date('2020-09-04'),
      tasks: [
        'Worked as one of three core developers maintaining and expanding coronavirus.jhu.edu, a crucial public health resource drawing 15 million weekly visitors.',
        'Created rich visual data displays that are cited daily by The Washington Post, NPR and others.',
        'Developed core components of a new design system as part of a major site redesign.',
        'Led effort to centralize data processing strategy; single-handedly developed Python data science toolkit upon which the site’s primary engagements are built.',
        'Oversaw and led development on a full rewrite of the site in Next.js.',
      ],
    },
    {
      employer: 'Tufts University Digital Services',
      position: 'Developer',
      startDate: new Date('2019-10-07'),
      endDate: new Date('2020-04-30'),
      tasks: [
        'Managed multiple weekly alumni outreach campaigns.',
        'Developed, revised, and sent HTML emails with cross-client support to a large audience.',
      ],
    },
    {
      employer: 'Moonfarmer',
      position: 'Junior Web Developer',
      startDate: [new Date('2018-06-20'), new Date('2019-06-18')],
      endDate: [new Date('2018-08-29'), new Date('2019-08-23')],
      tasks: [
        'Worked on developer team building large-scale React apps and meeting deadlines.',
        'Switched rapidly between multiple concurrent agile client projects, tracking billable hours on each.',
        'Wrote extensive internal technical documentation, as well as public-facing technical blog articles.',
      ],
    },
    {
      employer: 'sleep later',
      position: 'Freelance Developer',
      startDate: new Date('2018-05-01'),
      endDate: new Date('2018-08-01'),
      tasks: [
        'Designed and built a fully custom e-commerce front-end, back-end, and CMS for a local clothing startup.',
      ],
    },
    {
      employer: 'Newburgh Armory Unity Center',
      position: 'Classroom Assistant',
      startDate: new Date('2017-01-01'),
      endDate: new Date('2019-01-01'),
      datePrecision: 'year',
      tasks: [
        'Volunteered teaching basic computer science and programming skills to underserved elementary school students as a part of a free enrichment program.',
      ],
    },
    {
      employer: 'AppMobi Inc.',
      position: 'Summer Intern',
      startDate: new Date('2016-06-21'),
      endDate: new Date('2016-08-30'),
      tasks: ['Built and deployed mobile apps using Angular.js and Apache Cordova.'],
    },
  ],

  work: [
    {
      title: 'Codus.io',
      href: 'https://codus.io/',
      startDate: new Date('2018-01-01'), // year precision
      endDate: new Date('2019-01-01'),
      tags: ['Vue', 'Express', 'Docker'],
      description: `
        High school independent study project designing and developing a web app for computer
        science students and classrooms that presents a set of original practice problems in a
        custom online development environment.
      `,
    },
    {
      title: 'Wikipedia Map',
      href: 'https://github.com/controversial/wikipedia-map',
      startDate: new Date('2016-01-01'),
      endDate: new Date('2016-12-31'),
      tags: ['JavaScript', 'Node.js', 'Flask'],
      description: `
        Web app allowing users to explore the world’s knowledge based on related topics.
        Leverages Wikipedia API to parse articles and extract “related concepts” from relevant page
        links in order to build a content graph.
      `,
    },
    {
      title: 'maze-cv',
      href: 'https://github.com/controversial/maze-cv',
      startDate: new Date('2015-07-01'),
      endDate: new Date('2015-12-01'),
      tags: ['Python'],
      description: `
        Interactive iOS application that solves paper mazes on a device’s camera, using my own
        implementations of computer vision and pathfinding algorithms.
      `,
    },
  ],

  education: [
    {
      institution: 'Tufts University',
      startDate: new Date('2019-08-28'),
      endDate: null,
      description: 'Student in Computer Science',
    },
    {
      institution: 'New Paltz Central High School',
      startDate: new Date('2015-09-02'),
      endDate: new Date('2019-06-26'),
    },
    {
      institution: 'Stanford Summer Institutes',
      startDate: new Date('2017-07-25'),
      endDate: new Date('2017-08-14'),
      datePrecision: 'month',
      description: 'Artificial Intelligence',
    },
  ],

  skills: [
    {
      title: 'JavaScript',
      description: `
        Expert-level development skills in web programming with “vanilla” JavaScript as well as with
        React and Vue.
      `,
      tags: ['ES6+', 'React', 'Next.js', 'Vue', 'Node', 'Express'],
    },
    {
      title: 'UI/UX Design',
      description: `
        Creating interface designs for web apps which are simultaneously beautiful, responsive, and
        intuitive.
      `,
      // prettier-ignore
      tags: [
        'Sketch', 'Figma', 'CSS layout', 'CSS animation', 'Photoshop', 'Illustrator', 'Affinity',
      ],
    },
    {
      title: 'Other technologies',
      // prettier-ignore
      tags: [
        'HTML', 'CSS', 'SASS', 'Python', 'Flask', 'Pandas', 'C++', 'MongoDB', 'GraphQL', 'Docker',
        'Nginx', 'Git', 'GitHub', 'Asana', 'Jira',
      ],
    },
  ],

  contact: [
    { type: 'link', value: 'luke.deentaylor.com' },
    { type: 'email', value: 'luke@deentaylor.com' },
    { type: 'link', value: 'github.com/controversial' },
    { type: 'link', value: 'dribbble.com/controversial' },
    { type: 'tel', value: '845 943 9304' },
  ],
};

export default {
  about: [
    {
      title: 'Front-End Developer',
      originDate: new Date('2015-01-01'),
      description: `
        I first started working with JavaScript and CSS in high school for fun. Since then, I’ve
        developed my skills and mastered of modern web development. Today, I pair this expertise
        with skills in design and back-end development to bring projects I'm passionate about to
        life online.
      `,
    },
    {
      title: 'UI/UX Designer',
      originDate: new Date('2016-01-01'),
      description: `
        I take great pride in polishing every experience I build with careful interface design and
        painstaking attention to detail.
      `,
    },
    {
      title: 'Code Enthusiast',
      originDate: new Date('2013-01-01'),
      description: `
        I’ve been interested in creating with code since I was a small kid spending hours sunk
        deep in LEGO robotics projects. I picked up Python in middle school, and later, I turned to
        the web to share my creations with the world.
      `,
    },
  ],

  experience: [
    {
      employer: 'Johns Hopkins Coronavirus Resource Center',
      position: 'Developer',
      startDate: new Date('2020-05-06'),
      endDate: new Date('2020-09-04'),
      tasks: [
        'Maintained and expanded a crucial public health resource drawing 15 million weekly visitors.',
        'Created engagements that are cited daily in the Washington Post, NPR, and others.',
        'Led an effort to centralize data processing strategy; single-handedly developed a bespoke data science toolkit upon which the site’s primary engagements are built.',
        'Oversaw and led development on a full rewrite of the site in Next.js.',
      ],
    },
    {
      employer: 'Tufts University Digital Services',
      position: 'Developer',
      startDate: new Date('2019-10-07'),
      endDate: new Date('2019-04-30'),
      tasks: [
        'Managed multiple weekly alumni outreach campaigns.',
        'Developed, revised, and sent HTML emails with good cross-client support to a large audience.',
      ],
    },
    {
      employer: 'Moonfarmer',
      position: 'Junior Web Developer',
      startDate: [new Date('2018-06-20'), new Date('2019-06-18')],
      endDate: [new Date('2018-08-29'), new Date('2019-08-23')],
      tasks: [
        'Worked on a team to develop large-scale React apps and meet deadlines.',
        'Switched rapidly between multiple concurrent agile client projects, tracking billable hours on each.',
      ],
    },
    {
      employer: 'sleep later',
      position: 'Freelance Developer',
      startDate: new Date('2018-05-01'),
      endDate: new Date('2018-08-01'),
      tasks: [
        'Designed and built a fully custom e-commerce front-end, back-end, and CMS a local clothing startup.',
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
        A web app for computer science students and classrooms that presents a set of original
        practice problems in a custom online development environment. Includes classroom features
        that enable student collaboration as well as tools for instructors to track student progress
        and content knowledge.
      `,
    },
    {
      title: 'Wikipedia Map',
      href: 'https://github.com/controversial/wikipedia-map',
      startDate: new Date('2016-01-01'),
      endDate: new Date('2016-12-31'),
      tags: ['JavaScript', 'Node.js', 'Flask'],
      description: `
        A web app that allows users to explore the world’s knowledge based on related topics.
        Leverages Wikipedia's API to parse articles and extract “related concepts” from relevant
        page links in order to build a content graph.
      `,
    },
    {
      title: 'maze-cv',
      href: 'https://github.com/controversial/maze-cv',
      startDate: new Date('2015-07-01'),
      endDate: new Date('2015-12-01'),
      tags: ['Python'],
      description: `
        An interactive iOS application to solve paper mazes on a device’s camera using computer
        vision. I implemented all of the computer vision and pathfinding algorithms myself using raw
        pixel data from the input images.
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
        Mastery in modern JavaScript and web programming with “vanilla”
        JavaScript as well as with React and Vue.
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
    { type: 'link', value: 'github.com/controversial' },
    { type: 'link', value: 'dribbble.com/controversial' },
    { type: 'email', value: 'luke@deentaylor.com' },
    { type: 'tel', value: '845 943 9304' },
  ],
};

const email = 'luke@deentaylor.com';

export default {
  about: `
    I’ve been interested in creating with code since my first LEGO robotics projects as a little
    kid. I picked up Python in middle school, then turned to the web to share my creations with
    the world. In high school, I started working with JavaScript and CSS for fun, and eagerly
    expanded my skills until I’d mastered modern web development. Today, I pair this expertise with
    skills in interface design and back-end development to bring projects I'm passionate about to
    life.
  `,

  email,
  portfolio: 'luke.deentaylor.com',

  experience: [
    {
      employer: 'Johns Hopkins Coronavirus Resource Center',
      position: 'Full-Stack Software Engineer',
      location: 'Remote',
      startDate: new Date('2020-05-06'),
      endDate: new Date('2020-09-04'),
      tasks: [
        'Served as one of three core developers maintaining and expanding coronavirus.jhu.edu, a crucial public health resource drawing 15 million weekly visitors.',
        'Created rich visual data displays that are cited daily by The Washington Post, NPR, and others.',
        'Led effort to centralize data processing strategy; single-handedly developed Python data science toolkit upon which the site’s primary engagements are built.',
        'Oversaw and led development on a major redesign and a full rewrite of the site in Next.js.',
      ],
    },
    {
      employer: 'JumboCode',
      position: 'Engineering Lead',
      location: 'Tufts University',
      startDate: new Date('2019-10-01'),
      tasks: [
        'Collaborate in a student team to develop web applications pro-bono for nonprofit organizations.',
        'Create and lead instructional workshops to teach web development with React.',
        'Perform project management duties: write and assign tickets; monitor the progress of a year-long project.',
      ],
    },
    {
      employer: 'Tufts University Digital Services',
      position: 'Developer',
      location: 'Medford, MA',
      startDate: new Date('2019-10-07'),
      tasks: [
        'Manage multiple weekly alumni outreach campaigns.',
        'Develop, revise, and send HTML emails with cross-client support to a large audience.',
      ],
    },
    {
      employer: 'Moonfarmer',
      position: 'Junior Web Developer',
      location: 'Kingston, NY',
      startDate: new Date('2018-06-20'),
      tasks: [
        'Build large-scale React apps in a team setting.',
        'Switch rapidly between multiple concurrent agile client projects, tracking billable hours on each.',
        'Write extensive internal technical documentation, as well as public-facing technical blog articles.',
      ],
    },
    {
      employer: 'Newburgh Armory Unity Center',
      position: 'Classroom Assistant',
      location: 'Newburgh, NY',
      startDate: new Date('2017-01-01'),
      endDate: new Date('2019-01-01'),
      datePrecision: 'year',
      tasks: [
        'Volunteered teaching basic programming skills to underserved elementary school students.',
      ],
    },
    {
      employer: 'AppMobi Inc.',
      position: 'Summer Intern',
      location: 'Poughkeepsie, NY',
      startDate: new Date('2016-06-21'),
      endDate: new Date('2016-08-30'),
      tasks: ['Built and deployed mobile apps using Angular.js'],
    },
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
        High school independent study project designing and developing a web app for computer
        science students and classrooms that presents a set of original practice problems in a
        custom online development environment.
      `,
    },
    {
      title: 'sleep later',
      href: 'https://sleeplater.now.sh/',
      github: 'https://github.com/controversial/sleeplater.co',
      startDate: new Date('2018-05-01'),
      endDate: new Date('2018-08-01'),
      tags: ['JavaScript', 'Vue.js', 'Airtable'],
      description: 'Designed and built a fully custom e-commerce front-end, back-end, and CMS for a local clothing startup.',
    },
    {
      title: 'Wikipedia Map',
      href: 'https://wikipedia.luk.ke/',
      github: 'https://github.com/controversial/wikipedia-map',
      startDate: new Date('2016-01-01'),
      endDate: new Date('2016-12-31'),
      tags: ['JavaScript', 'Node.js', 'Flask'],
      description: `
        Web app allowing users to explore the world’s knowledge based on related topics.
        Leverages Wikipedia API to parse articles and extract “related concepts” from relevant page
        links in order to build a content graph.
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

  education: [
    {
      institution: 'Tufts University',
      startDate: new Date('2019-08-28'),
      gpa: '3.98',
      endDate: new Date('2023-05-23'),
      description: 'B.S. Computer Science',
    },
    {
      institution: 'New Paltz Central High School',
      gpa: '99.4',
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
      tags: ['React', 'Next.js', 'Vue', 'TypeScript', 'Node'],
    },
    {
      title: 'UI/UX Design',
      description: `
        Creating interface designs for web apps that are simultaneously beautiful, responsive, and
        intuitive.
      `,
      // prettier-ignore
      tags: [
        'Sketch', 'Figma', 'CSS layout', 'CSS animation', 'SASS', 'Photoshop', 'Illustrator', 'Affinity',
      ],
    },
    {
      title: 'Programming Languages',
      // prettier-ignore
      tags: ['JavaScript', 'Python', 'C', 'C++', 'Java'],
    },
    {
      title: 'Technologies',
      tags: ['Docker', 'Flask', 'Django', 'Express', 'Pandas'],
    },
    {
      title: 'Tools',
      tags: ['Git', 'GraphQL', 'Asana', 'GitHub', 'Jira'],
    },
  ],

  links: [
    'luke.deentaylor.com',
    'github.com/controversial',
    // 'dribbble.com/controversial',
    'linkedin.com/in/lukedeentaylor',
  ],
};

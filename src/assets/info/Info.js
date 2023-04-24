import self from '../img/self.jpeg';
import { colors } from '../colors/mainGradient';

export const info = {
  firstName: 'Marina',
  lastName: '',
  initials: 'ai-marina', // the example uses first and last, but feel free to use three or more if you like.
  position: 'a Machine Learning Engineer',
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: '🗽',
      text: 'immigrant based in California',
    },
    {
      emoji: '💻',
      text: 'tech geek at Autodesk',
    },
    {
      emoji: '📥',
      // text: 'ai.marina11.io@gmail.com',
      text: <a href='mailto:ai.marina11.io@gmail.com'>ai.marina11.io@gmail.com</a>
    },
  ],
  socials: [
    {
      link: 'https://www.instagram.com/ai.marina.io',
      icon: 'fa fa-instagram',
      label: 'instagram',
    },
    {
      link: 'https://github.com/maritum',
      icon: 'fa fa-github',
      label: 'github',
    },
    {
      link: 'https://www.linkedin.com/in/marina-petzel',
      icon: 'fa fa-linkedin',
      label: 'linkedin',
    },
    {
      link: 'www.tiktok.com/@ai_marina',
      icon: 'fa fa-music',  
      label: 'tiktok',
    },
    {
      link: 'https://hello.com/mp.pdf', // this should be https://yourname.com/resume.pdf once you've deployed
      icon: 'fa fa-file',
      label: 'resume',
    },
  ],
  // bio: "Hello! I'm Marina Petzel. I'm a Machine Learning Engineer. I studied CompSci at UofT, I enjoy building web applications and learning new technologies. I'm currently working at commonsku as a Full Stack Developer. I'm also a freelance photographer. I love to travel and explore new places. I'm currently based in Toronto, Canada.",
  bio: "I am a Machine Learning Engineer. I have been working in the Data Science field for more than 5 years. I have lived in 3 countries in 6 different cities, I am constantly seeking new ways to improve and grow my skills, and I love sharing my knowledge with others.",
  skills: {
    // you dont havew to strictly follow the 'languages', 'frameworks', 'databases', 'cloudServices', and 'tools' categories. You can add your own if you'd like.
    // but the structure should be the same, an array of strings and the key should be one word, no spaces.
    languages: [ 'Python', 'R'],
    cloudServices: ['AWS S3', 'AWS EC2', 'SageMaker'],
    tools: [
      'Git',
      'VSCode',
      'Docker',
      'Jenkins',
      'Jira',
      'Confluence',
    ],
  },
  hobbies: [
    {
      label: 'travel',
      emoji: '🧳 ',
    },
    {
      label: 'dance',
      emoji: '💃',
    },
    {
      label: 'video games',
      emoji: '🎮',
    },
    {
      label: 'hike',
      emoji: '🥾',
    },
   
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    //   for the null ones, the button will not show up
    {
      title: 'Speaker at Predictive Analytics World for Business',
      live: null,
      source: 'https://www.predictiveanalyticsworld.com/business/2023/speakers/',
      image: 'https://stuff.risingmedia.eu/images/speaker/8877.jpg?d=1679594790/',
    },
    {
      title: 'Speaker at Data Science Salon',
      live: null,
      source: 'https://tech.autodesk.com/events',
      image: 'https://www.datascience.salon',
    },
    {
      title: 'Preoperative Surgical Risk Prediction',
      live: null, //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/maritum/PeriopMortality-Prediction', // this should be a link to the **repository** of the project, where the code is hosted.
      image: 'https://www.nature.com/articles/s41598-022-13879-7',
    },
    {
      title: 'Master of Science. Major Data Science',
      live: null,
      source: 'https://www.rochester.edu/class-of-2021/marina-kupina/',
      image: 'https://www.rochester.edu/class-of-2021/marina-kupina/',
    },
  ],
};

import self from '../img/self.jpeg';
import { colors } from '../colors/mainGradient';

export const info = {
  firstName: 'Marina',
  lastName: 'Petzel',
  initials: 'MP', // the example uses first and last, but feel free to use three or more if you like.
  position: 'a Machine Learning Engineer',
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: '🇨🇦',
      text: 'based in Southern California',
    },
    {
      emoji: '💻',
      text: 'Machine Learning Engineer at AutoDesk',
    },
    {
      emoji: '📧',
      text: 'not@my.email',
    },
  ],
  socials: [
    {
      link: 'https://hello.com/mp.pdf', // this should be https://yourname.com/resume.pdf once you've deployed
      icon: 'fa fa-file',
      label: 'resume',
    },
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
      link: 'https://www.linkedin.com/in/marina-kupina',
      icon: 'fa fa-linkedin',
      label: 'linkedin',
    },
    {
      link: 'https://twitter.com/hello',
      icon: 'fa fa-twitter',
      label: 'twitter',
    },
  ],
  // bio: "Hello! I'm Marina Petzel. I'm a Full Stack Developer. I studied CompSci at UofT, I enjoy building web applications and learning new technologies. I'm currently working at commonsku as a Full Stack Developer. I'm also a freelance photographer. I love to travel and explore new places. I'm currently based in Toronto, Canada.",
  bio: "Hello! I'm Marina Petzel. I love to wake up early and cook for my husband. ",
  skills: {
    // you dont havew to strictly follow the 'languages', 'frameworks', 'databases', 'cloudServices', and 'tools' categories. You can add your own if you'd like.
    // but the structure should be the same, an array of strings and the key should be one word, no spaces.
    languages: [ 'Python'],
    frameworks: [
      'hello',
    ],
    databases: ['MySQl', 'MongoDB', 'PostgreSQL', 'Mybatis', 'TypeORM'],
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
      label: 'hello',
      emoji: '📷',
    },
    {
      label: 'jfowiejfwoiefj',
      emoji: '🎮',
    },
    {
      label: 'music',
      emoji: '🎸',
    },
    {
      label: 'jaw;oeijfaweofij',
      emoji: '🎞',
    },
    {
      label: 'joaiwejfawoiefj',
      emoji: '🍳',
    },
    {
      label: 'more',
      emoji: '✈️',
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    //   for the null ones, the button will not show up
    {
      title: 'CryptoGoGo - Online Cryptocurrency Community and Trading platform',
      live: null, //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/hello/hello', // this should be a link to the **repository** of the project, where the code is hosted.
      image: 'https://i1.jpg',
    },
    {
      title: 'Dynrank.js - High-performance dynamic bar chart visualization library',
      live: null,
      source: 'https://github.com/woeifjawoeifjawe',
      image: 'https://wefwefwe/02.jpg',
    },
  ],
};

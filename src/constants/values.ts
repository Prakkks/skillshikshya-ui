import type { task1ContainerProps, Task2ContainerHover, Task2ContainerProps, Task3ContainerProps } from "./props";

export const task2_container: Task2ContainerProps[]  = [
  {
    id: 1,
    heading: "Start with Clarity",
    sub_heading: 'Step into a better learning path.',
    description: "Overwhelmed by too many learning \n options? SkillShikshya provides a clear, \n curated roadmap from the start. Whether \n you're a beginner or upskilling, we have a \n path tailored to your growth.",
    bg_color: '#F45B5B',
    icons: '/assets/Task2/cartoon-1.png',
    text_alignment : 'right',
    icon_position : 'left',
  },
{
    id: 2,
    heading: "Learn by Doing",
    sub_heading: 'Practical skills, real projects.',
    description: "Theory is great, but action is better. At \n SkillShikshya, you learn by doing. Hands-on \n projects and real-world scenarios help you build, \n break, and create—leading to true mastery.",
    bg_color: '#5492A0',
    icons: '/assets/Task2/cartoon-2.png',
    text_alignment : 'left',
    icon_position : 'right',
},
  {
    id: 3,
    heading: "Get Mentored & Supported",
    sub_heading: "You're not learning alone.",
    description: "Stuck or need feedback? SkillShikshya’s \n community of mentors and learners \n has your back with live support, \n interactive discussions, and expert \n insights. You’re never on your own.",
    bg_color: '#6C64A8',
    icons: '/assets/Task2/cartoon-13.png',
    text_alignment : 'right',
    icon_position : 'left',
},
  {
    id: 4,
    heading: "Achieve & Showcase",
    sub_heading: 'Build your portfolio, get job-ready.',
    description: "Your journey ends with achievement. Each \n completed project builds a portfolio \n showcasing your skills snd job readliness, \n bringing your closer to that dream job, \n promotion, or your own venture.   ",
    bg_color: '#A88964',
    icons: '/assets/Task2/cartoon-4.png',
    text_alignment : 'left',
    icon_position : 'right',
  },
];


export const task2_container_hover: Task2ContainerHover[] = [
   {id:1,
    bg: '/assets/Task2/bg-id-1.png',
        content: [ {
            img: '/assets/Task2/cartoon-2-1.png',
            title: 'Clarity unlocked— \n stickers, sips, and skills \n all in one go!',
            position: 'right',
        },]
    },
    {id:2,
        bg: '/assets/Task2/bg-id-2.png',
        content: [ {
            img: '/assets/Task2/cartoon-3-1.png',
            title: 'Focused faces—learning \n mode: ON!',

        }, {
              img: '/assets/Task2/cartoon-3-2.png',
            title: 'Laptops, lessons, and a whole lot of \n growth!',

        }]
    },
]


export const task3_container:Task3ContainerProps[] = [
  {
    id:1,
    headingvalue : '23',
    title: 'All Courses',
    sub_title: "courses you're powering \n through right now.",
  },
   {
    id: 2,
    headingvalue : '05',
    title: 'Upcoming Courses',
    sub_title: "exciting new courses \n waiting to boost your skills.",
  },
    {
    id: 3,
    headingvalue : '10',
    title: 'Ongoing Courses',
    sub_title: "currently happening — don’t \n miss out on the action!",
  },
]


export const task1_container: task1ContainerProps[] = [
 
   {
    img: '/assets/Task1/testimonial3.png',
    
  },

   {
    img: '/public/assets/Task1/likes.gif',
   },

   {
    img: '/assets/Task1/testimonial4.png',
    message: '⭐️⭐️⭐️⭐️⭐️',
    hover : 'video',
    hover_video : '/assets/Task1/Content.png',
  },
   {
    img: '/public/assets/Task1/trophy.gif',
   },

   {
    img: '/assets/Task1/testimonial5.png',
   
  },
   {
    img: '/public/assets/Task1/happylife.gif',
   },

   {
    img: '/assets/Task1/testimonial6.png',
   
  },
   {
    img: '',
   },

   {
    img: '/assets/Task1/testimonial1.png',
    message: 'Amazing ⭐️⭐️⭐️⭐️⭐️',
    hover : 'text',
    hover_text : {
      text: 'I was amazed and impressed by the course structure as \n it was distinctly different from other courses in the \n market. The classes were highly interactive and the \n instructor was very humble and friendly. Recordings of \n the classes were provided within a short time after \n each class, which made revision very easy and \n beneficial. I have recommended the same course to my \n data-enthusiast friends."',
      name: 'Rajesh Dhakal',
      sub: 'Digital Marketing Student',
    }
  },
   {
    img: '/public/assets/Task1/like.gif',

   },

   {
    img: '/assets/Task1/testimonial2.png',
   
  },
   {
    img: '',
   },
]


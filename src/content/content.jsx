// imports

import logo from "../assets/images/logo.svg";
import jd from "../assets/images/jd.svg";
import grocery from "../assets/images/grocery.svg";
import hr from "../assets/images/hr.svg";

// navabar

export const NavLogo = logo;
export const Navlist = [
  "Home",
  "About",
  "Experience",
  "Skills",
  "Project",
  "Contact",
];

// home

export const HomeName = "Muthu Aravindh";
export const HomeRole = "React Developer & Designer";

// About

export const AboutText =
  "Hello! I'm Muthu , a dedicated Front-end Developer and UI/UX Designer with 1.4 years of experience. I specialize in creating sleek and interactive web interfaces using HTML, CSS, JavaScript, React.js, Redux, Axios, and GSAP. I'm skilled in UI libraries like Bootstrap, Material-UI, Chakra UI and Prime React, and I use Figma for design.";
export const AboutText1 =
  "My expertise includes API integration, data binding, and optimizing web performance for faster load times. I have a strong focus on writing clean, structured code and organizing projects effectively. Past projects include a stock market trading platform, an advertising website, and an HRMS dashboard.";

export function HugeiconsDeveloper(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke="#14d184"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        color="#14d184"
      >
        <path d="M15.175 22v-1.009A1.007 1.007 0 0 1 16.18 20h.075c1.432-.012 2.662-1.006 2.954-2.388l.01-.052l.52-2.56l.94-.464c.505-.248.756-.373.81-.6c.055-.228-.114-.45-.451-.895l-1.908-2.508c-.19-.25-.285-.374-.335-.506s-.067-.32-.098-.693C18.353 5.227 14.865 2 10.612 2C6.132 2 2.5 5.582 2.5 10c0 2.75 1.407 5.175 3.55 6.615m0 0V22m0-5.385a8 8 0 0 0 2.027.987"></path>
        <path d="m14 9l.92.793c.387.333.58.5.58.707s-.193.374-.58.707L14 12M7 9l-.92.793c-.387.333-.58.5-.58.707s.193.374.58.707L7 12m4.5-4l-2 5"></path>
      </g>
    </svg>
  );
}

export function HugeiconsMobileProgramming01(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="#C7E514"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 8c.01-2.644.108-4.059 1.024-4.975C7.049 2 8.699 2 11.999 2s4.95 0 5.975 1.025c.916.916 1.013 2.33 1.023 4.975M5 16c.01 2.644.108 4.059 1.024 4.975C7.049 22 8.699 22 11.999 22s4.95 0 5.975-1.025c.916-.916 1.013-2.33 1.023-4.975M11 19h2m3-9l1.227 1.057c.515.445.773.667.773.943s-.258.498-.773.943L16 14m-8-4l-1.227 1.057C6.258 11.502 6 11.724 6 12s.258.498.773.943L8 14m5-5l-2 6"
        color="#C7E514"
      ></path>
    </svg>
  );
}

export function HugeiconsAdobeIndesign(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke="#D53E3F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        color="#D53E3F"
      >
        <path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></path>
        <path d="M15 11v4c0 1.103-.517 1-1.5 1a2.5 2.5 0 0 1 0-5zm0 0V8M8 8v8"></path>
      </g>
    </svg>
  );
}

// Experience

export function HugeiconsArrowUpRight01(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 7L6 18m5-11.868s5.634-.475 6.488.38c.855.854.38 6.488.38 6.488"
        color="white"
      ></path>
    </svg>
  );
}

// skills

export const Tools = [
  {
    image: require("../assets/images/photoshop.svg").default,
    name: "Photoshop",
  },
  { image: require("../assets/images/figma.svg").default, name: "Figma" },
];
// Technologies.js (or content.js)
export const Technologies = [
  { image: require("../assets/images/html.svg").default, name: "HTML" },
  { image: require("../assets/images/css.svg").default, name: "CSS" },
  { image: require("../assets/images/sass.svg").default, name: "Sass" },
  {
    image: require("../assets/images/javascript.svg").default,
    name: "JavaScript",
  },
  { image: require("../assets/images/react.svg").default, name: "React" },
  { image: require("../assets/images/angular.svg").default, name: "Angular" },
  { image: require("../assets/images/redux.svg").default, name: "Redux" },
  { image: require("../assets/images/firebase.svg").default, name: "Firebase" },
  {
    image: require("../assets/images/material.svg").default,
    name: "Material UI",
  },
  { image: require("../assets/images/formik.svg").default, name: "Formik" },
  {
    image: require("../assets/images/bootstrap.svg").default,
    name: "Bootstrap",
  },
  { image: require("../assets/images/git.svg").default, name: "Git" },
  {
    image: require("../assets/images/sc.svg").default,
    name: "Styled Components",
  },
  { image: require("../assets/images/axios.svg").default, name: "Axios" },
  { image: require("../assets/images/gsap.svg").default, name: "GSAP" },
  { image: require("../assets/images/appwrite.svg").default, name: "Appwrite" },
];

//  project

export const Hr = hr;
export const Grocery = grocery;
export const Jd = jd;

export const Hrms = [
  { image: require("../assets/images/html.svg").default, name: "HTML" },

  { image: require("../assets/images/sass.svg").default, name: "Sass" },

  {
    image: require("../assets/images/javascript.svg").default,
    name: "JavaScript",
  },

  { image: require("../assets/images/react.svg").default, name: "React" },

  { image: require("../assets/images/redux.svg").default, name: "Redux" },

  {
    image: require("../assets/images/material.svg").default,
    name: "Material UI",
  },

  { image: require("../assets/images/git.svg").default, name: "Git" },

  { image: require("../assets/images/axios.svg").default, name: "Axios" },

  { image: require("../assets/images/gsap.svg").default, name: "GSAP" },
];

export const GroceryWeb = [
  { image: require("../assets/images/html.svg").default, name: "HTML" },

  { image: require("../assets/images/sass.svg").default, name: "Sass" },

  {
    image: require("../assets/images/javascript.svg").default,
    name: "JavaScript",
  },

  { image: require("../assets/images/react.svg").default, name: "React" },

  { image: require("../assets/images/redux.svg").default, name: "Redux" },

  {
    image: require("../assets/images/material.svg").default,
    name: "Material UI",
  },

  { image: require("../assets/images/git.svg").default, name: "Git" },

  { image: require("../assets/images/axios.svg").default, name: "Axios" },

  { image: require("../assets/images/gsap.svg").default, name: "GSAP" },
];

export const JdAni = [
  { image: require("../assets/images/html.svg").default, name: "HTML" },

  {
    image: require("../assets/images/javascript.svg").default,
    name: "JavaScript",
  },

  { image: require("../assets/images/git.svg").default, name: "Git" },
  { image: require("../assets/images/gsap.svg").default, name: "GSAP" },
];

// contact

export function SolarMapArrowUpLinear(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="white"
        strokeWidth={1.5}
        d="m3.165 19.503l7.362-16.51c.59-1.324 2.355-1.324 2.946 0l7.362 16.51c.667 1.495-.814 3.047-2.202 2.306l-5.904-3.152c-.459-.245-1-.245-1.458 0l-5.904 3.152c-1.388.74-2.87-.81-2.202-2.306Z"
      ></path>
    </svg>
  );
}

// footer

export function SkillIconsGithubLight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      {...props}
    >
      <g fill="none">
        <rect width={256} height={256} fill="#f4f2ed" rx={60}></rect>
        <path
          fill="#161614"
          d="M128.001 30C72.779 30 28 74.77 28 130.001c0 44.183 28.653 81.667 68.387 94.89c4.997.926 6.832-2.169 6.832-4.81c0-2.385-.093-10.262-.136-18.618c-27.82 6.049-33.69-11.799-33.69-11.799c-4.55-11.559-11.104-14.632-11.104-14.632c-9.073-6.207.684-6.079.684-6.079c10.042.705 15.33 10.305 15.33 10.305c8.919 15.288 23.394 10.868 29.1 8.313c.898-6.464 3.489-10.875 6.349-13.372c-22.211-2.529-45.56-11.104-45.56-49.421c0-10.918 3.906-19.839 10.303-26.842c-1.039-2.519-4.462-12.69.968-26.464c0 0 8.398-2.687 27.508 10.25c7.977-2.215 16.531-3.326 25.03-3.364c8.498.038 17.06 1.149 25.051 3.365c19.087-12.939 27.473-10.25 27.473-10.25c5.443 13.773 2.019 23.945.98 26.463c6.412 7.003 10.292 15.924 10.292 26.842c0 38.409-23.394 46.866-45.662 49.341c3.587 3.104 6.783 9.189 6.783 18.519c0 13.38-.116 24.149-.116 27.443c0 2.661 1.8 5.779 6.869 4.797C199.383 211.64 228 174.169 228 130.001C228 74.771 183.227 30 128.001 30M65.454 172.453c-.22.497-1.002.646-1.714.305c-.726-.326-1.133-1.004-.898-1.502c.215-.512.999-.654 1.722-.311c.727.326 1.141 1.01.89 1.508m4.919 4.389c-.477.443-1.41.237-2.042-.462c-.654-.697-.777-1.629-.293-2.078c.491-.442 1.396-.235 2.051.462c.654.706.782 1.631.284 2.078m3.374 5.616c-.613.426-1.615.027-2.234-.863c-.613-.889-.613-1.955.013-2.383c.621-.427 1.608-.043 2.236.84c.611.904.611 1.971-.015 2.406m5.707 6.504c-.548.604-1.715.442-2.57-.383c-.874-.806-1.118-1.95-.568-2.555c.555-.606 1.729-.435 2.59.383c.868.804 1.133 1.957.548 2.555m7.376 2.195c-.242.784-1.366 1.14-2.499.807c-1.13-.343-1.871-1.26-1.642-2.052c.235-.788 1.364-1.159 2.505-.803c1.13.341 1.871 1.252 1.636 2.048m8.394.932c.028.824-.932 1.508-2.121 1.523c-1.196.027-2.163-.641-2.176-1.452c0-.833.939-1.51 2.134-1.53c1.19-.023 2.163.639 2.163 1.459m8.246-.316c.143.804-.683 1.631-1.864 1.851c-1.161.212-2.236-.285-2.383-1.083c-.144-.825.697-1.651 1.856-1.865c1.183-.205 2.241.279 2.391 1.097"
        ></path>
      </g>
    </svg>
  );
}

export function SkillIconsLinkedin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      {...props}
    >
      <g fill="none">
        <rect width={256} height={256} fill="#fff" rx={60}></rect>
        <rect width={256} height={256} fill="#0a66c2" rx={60}></rect>
        <path
          fill="#fff"
          d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4M38 59.628c0 11.864 9.767 21.626 21.632 21.626c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627m6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4"
        ></path>
      </g>
    </svg>
  );
}

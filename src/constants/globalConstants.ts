interface IHeaderNavLinks {
  name: string;
  value: string;
  id: number;
}

interface ISocialsList {
  id: number;
  name: string;
  value: string;
  link: string;
  icon: string;
}

export const HeaderNavLinks: IHeaderNavLinks[] = [
  {
    name: "About me",
    value: "about",
    id: 1,
  },
  {
    name: "Projects",
    value: "projects",
    id: 2,
  },
  {
    name: "Contact info",
    value: "contact",
    id: 3,
  },
  {
    name: "Resume",
    value: "resume",
    id: 4,
  },
];


export const SocialsList: ISocialsList[] = [
  {
    id: 1,
    name: "Linkedin",
    value: "linkedin",
    link: "https://www.linkedin.com/in/albina-anistratenko/",
    icon: "icon-linkedin",
  },
  {
    id: 2,
    name: "Instagram",
    value: "instagram",
    link: "https://www.instagram.com/albusichka/",
    icon: "icon-instagram",
  },
  {
    id: 3,
    name: "Telegram",
    value: "telegram",
    link: "https://t.me/albina_anistratenko",
    icon: "icon-telegram",
  },
  {
    id: 4,
    name: "GitHub",
    value: "github",
    link: "https://github.com/albuska",
    icon: "icon-github",
  },
];

export const FooterLinksList = [
  {
    id: 1,
    title: "Back to top",
    icon: "icon-arrow-top",
  },
  {
    id: 2,
    title: "Send message",
    icon: "icon-send-message",
  },
  {
    id: 3,
    title: "Give me a call",
    icon: "icon-give-me-call",
  },
  {
    id: 4,
    title: "Open contact info",
    icon: "",
  },
  {
    id: 5,
    title: "View my resume",
    icon: "",
  },
  {
    id: 6,
    title: "Website repo",
    icon: "",
  },
  {
    id: 7,
    title: "Learning",
    icon: "",
  },
];
import { Error, Landing, Contact, Gallery, Services } from "../Pages";

export const links = [
  {
    id: 1,
    url: '/',
    text: 'Home',
    page: <Landing />,
  },
  {
    id: 2,
    url: '/contact',
    text: 'Contact',
    page: <Contact />,
  },
  {
    id: 3,
    url: '/gallery',
    text: 'Gallery',
    page: <Gallery />,
  },
  {
    id: 4,
    url: '*',
    text: 'Error',
    page: <Error />,
  }
];

import { Landing, Contact, Gallery, Error, Services } from "../Pages";

export const links = [
  {
    id: 2,
    url: "/landing",
    text: "Landing",
    page: <Landing />,
  },
  {
    id: 3,
    url: "/contact",
    text: "Contact",
    page: <Contact />,
  },
  {
    id: 4,
    url: "/gallery",
    text: "Gallery",
    page: <Gallery />,
  },
  {
    id: 5,
    url: "/services",
    text: "Services",
    page: <Services />,
  },
  {
    id: 6,
    url: "*",
    text: "Error",
    page: <Error />,
  },
];

import { About, Contact, Home, Gallery, Error, Services } from "../Pages";

export const links = [
  {
    id: 1,
    url: "/",
    text: "Home",
    page: <Home />,
  },
  {
    id: 2,
    url: "/about",
    text: "About",
    page: <About />,
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

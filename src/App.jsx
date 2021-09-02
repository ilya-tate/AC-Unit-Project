import { Landing } from "./Pages";
import { Route, Switch } from "react-router-dom";
import { links } from "./util/consts";
import { Footer, Navbar } from "./Components";
import React, { useState, useEffect } from 'react'


function App() {
  const [size, setSize] = useState(window.innerWidth);

  const changeSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", changeSize);
    return () => {
      window.removeEventListener("resize", changeSize);
    };
  });

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Navbar size={size} />
          <Landing />
        </Route>

        {links
          .filter((link) => link.text !== "Home")
          .map((link) => {
            const { id, url, page } = link;
            return (
              <Route key={id} path={url}>
                <Navbar />
                {page}
              </Route>
            );
          })}
      </Switch>
      <Footer/>
    </>
  );
}

export default App;

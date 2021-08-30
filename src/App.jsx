import { Landing } from "./Pages";
import { Route, Switch } from "react-router-dom";
import { links } from "./util/consts";
import { Navbar } from "./Components";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>

        {links
          .filter((link) => link.text !== "Landing")
          .map((link) => {
            const { id, url, page, text } = link;
            return (
              <Route key="id" path={url}>
                <Navbar />
                {page}
              </Route>
            );
          })}
      </Switch>
    </>
  );
}

export default App;
import { Home } from "./Pages";
import { Route, Switch } from "react-router-dom";
import { links } from "./util/consts";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      {links
        .filter((link) => link.text !== "Home")
        .map((link) => {
          const { id, url, page, text } = link;
          return (
            <Route key="id" path={url}>
              {page}
            </Route>
          );
        })}
    </Switch>
  );
}

export default App;

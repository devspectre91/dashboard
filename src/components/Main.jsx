import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Articles from "./Articles";
import SingleArticle from "./SingleArticle";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        {/* <nav>
          <ul className="level has-background-light m-0  box p-2 ">
            <li className="level-item">
              <Link to='/'><div className="button">Home</div></Link>
            </li>
            <li className="level-item">
            <Link to='/articles'><div className="button">Articles</div></Link>
            </li>
            <li className="level-item">
            <Link to='/help'><div className="button">Help</div></Link>
            </li>
          </ul>
        </nav> */}

        <Switch>
          <Route path="/help">
            <Help />
          </Route>
          <Route path="/articles" exact>
            <Articles />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/articles/:slug" component={SingleArticle} />
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </>
    );
  }
}
function Home() {
  return (
    <h2 className="has-text-primary title mt-6 has-text-centered">
      This is the home page
    </h2>
  );
}

function Help() {
  return (
    <h2 className="has-text-success-dark title mt-6 has-text-centered">
      Lets get you some Help!
    </h2>
  );
}

function NoMatch() {
  return (
    <h2 className="has-text-danger title mt-6 has-text-centered">
      404: Page not found!
    </h2>
  );
}

export default Main;

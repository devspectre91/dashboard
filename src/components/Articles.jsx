import React from "react";
import articles from "./data";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Articles extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    {
      console.log(articles);
    }
    return (
      <div className="mt-2 px-1 columns my-2 is-centered is-multiline">
        {/* <div className=" column is-10 card my-4">Home</div>
        <div className=" column is-10 card my-4 ">Articles</div>
        <div className=" column is-10 card my-4">Help</div> */}
        {articles.map((article) => {
          return (
            <Link key={article.slug}
              className=" column has-background-danger-light is-10 card my-4"
              to={`/articles/${article.slug}`}
            >
              <header className="card-header">
                <p className="card-header-title">{article.title}</p>
              </header>
              <div className="card-content">
                <div className="content">{article.author}</div>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}

export default Articles;

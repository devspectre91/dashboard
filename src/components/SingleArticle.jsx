import React from "react";
import articles from "./data";

class SingleArticle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      article: [],
      flag: false,
    };
  }

  componentDidMount() {
    this.setState(
      {
        article: articles.filter((article) => {
          return article.slug === this.props.match.params.slug;
        }),
      },
      () => {
        if (this.state.article.length != 0) {
          this.setState({
            flag: true,
          });
        }
      }
    );
  }
  render() {
    {
      console.log("i got rendered");
    }
    return (
      <>
        {this.state.flag ? (
          <div className="card mx-6 has-background-success mt-6">
            <header className="card-header">
              <p className="card-header-title">{this.state.article[0].title}</p>
            </header>
            <div class="card-content">
              <div class="content has-text-white">
                {this.state.article[0].author}
              </div>
            </div>
          </div>
        ) : (
          <div className="title m-6 has-text-danger has-text-centered">
            Article not found :404
          </div>
        )}
      </>
    );
  }
}

export default SingleArticle;

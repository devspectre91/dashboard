import React from "react";
import { Link } from "react-router-dom";
class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mt-6 px-4 columns my-2 is-centered is-multiline">
        <div className=" column my-2 is-10">
          <Link to="/" exact>
            <div className="button is-fullwidth">Home</div>
          </Link>
        </div>
        <div className=" column my-2 my-2 is-10">
          {" "}
          <Link to="/articles">
            <div className="button is-fullwidth">Articles</div>
          </Link>
        </div>
        <div className=" my-2 is-10 my-2 column">
          {" "}
          <Link to="/help">
            <div className="button is-fullwidth">Help</div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Sidebar;

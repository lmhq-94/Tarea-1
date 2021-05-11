import * as React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home-section">
      <div className="container">
        <div className="row">
          <div className="home-container col-sm-10">
            <div className="card text-center">
              <i className="fas fa-cube fa-4x"></i>
              <h1 className="font-weight-normal semibold">Welcome!</h1>
              <h3 className="medium">First Factory React Challenge</h3>
              <div className="text-center">
                <hr className="line" />
              </div>
              <p className="lead font-weight-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <br />
              <Nav.Link>
                <Link
                  className="btn btn-outline-primary my-2 my-sm-0 btn-init"
                  to="/components/pages/Login"
                >
                  Get Started
                </Link>
              </Nav.Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;

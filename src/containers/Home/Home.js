import React, { Component } from 'react';
// import { Link } from 'react-router';
import config from '../../config';
import Helmet from 'react-helmet';

export default class Home extends Component {
  render() {
    const styles = require('./Home.scss');
    // require the logo image both from client and server
    const logoImage = require('./logo.png');
    return (
      <div className={styles.home}>
        <Helmet title="Home"/>
        <div className={styles.masthead}>
          <div className="container">
            <div className={styles.logo}>
              <p>
                <img src={logoImage}/>
              </p>
            </div>
            <h1>{config.app.title}</h1>

            <h2>{config.app.description}</h2>

          </div>
        </div>

        <div className="container">
          <br />
          <br />

          <div className="jumbotron">
            <h2>Cleared boilerplate:</h2>

            <p><a className="btn btn-primary btn-lg" href="https://github.com/erikras/react-redux-universal-hot-example" role="button" target="_blank">Read documentation</a></p>
          </div>


        </div>
      </div>
    );
  }
}

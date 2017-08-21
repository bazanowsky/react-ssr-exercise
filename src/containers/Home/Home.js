import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Col, Row, Grid, Accordion, Panel } from 'react-bootstrap';

export default class Home extends Component {
  render() {
    const styles = require('./Home.scss');
    const accordions = new Array(10).fill(500);
    return (
      <div className={styles.home}>
        <Helmet title="Home"/>

        <div className="container">
          <br />
          <Grid>
            <Row>
              {accordions.map((accordion, accordionIndex) => {
                const items = new Array(accordion).fill(1);
                return (
                  <Col xs={12} md={6} key={`accordion-group-${accordionIndex}`}>
                    <Accordion>
                      {items.map((item, itemIndex) => (
                        <Panel
                          header={`Accordion: ${accordionIndex} Item: ${itemIndex}`}
                          eventKey={itemIndex}
                          key={`${accordionIndex}-${itemIndex}`}
                        >
                          asdf
                        </Panel>
                      ))}
                    </Accordion>
                  </Col>
                );
              })}
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

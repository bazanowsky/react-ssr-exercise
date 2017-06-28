import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Col, Row, Grid, Thumbnail, Accordion, Panel } from 'react-bootstrap';

export default class Home extends Component {
  render() {
    const styles = require('./Home.scss');
    const images = new Array(200).fill(1);
    const accordions = new Array(8).fill(50);
    return (
      <div className={styles.home}>
        <Helmet title="Home"/>

        <div className="container">

          <Grid>
            <Row>
              {accordions.map((accordion, accordionIndex) => {
                console.log(accordion);
                const items = new Array(accordion).fill(1);
                return (
                  <Col xs={12} md={6} key={`accordion-group-${accordionIndex}`}>
                    <Accordion>
                      {items.map((item, itemIndex) => (
                        <Panel header={`Accordion: ${accordionIndex} Item: ${itemIndex}`} eventKey={itemIndex}>
                          asdf
                        </Panel>
                      ))}
                    </Accordion>
                  </Col>
                );
              })}

            </Row>
          </Grid>

          <hr/>

          <Grid>
            <Row>
              {images.map((el, index) => (
                <Col xs={6} md={3} key={`image-${index}`}>
                  <Thumbnail href="#" alt={`image-${index}`} src={`http://lorempixel.com/${200 + index}/${200 + index}/`} title={`${200 + index}x${200 + index}`} />
                </Col>
              ))}
            </Row>
          </Grid>
        </div>

      </div>
    );
  }
}

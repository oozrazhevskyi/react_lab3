import React, { Component } from 'react'
import {Button, Card, Col, Container, Row} from "react-bootstrap";
export default class Home extends Component {
  render() {
    return (
      <Container>
        <h2 className="text-center m-4">Наша команда</h2>
        <Row>
          <Col>
            <Card className="m-4 text-center" bg="light" border="primary">
              <Card.Img
                variant="top"
                src="https://qwertify.io/images/img_openpositions.png"
              />
              <Card.Body>
                <Card.Title>Розробники</Card.Title>
                <Card.Text>
                  Команда 1
                </Card.Text>
                <Button variant="primary">Про команду</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="m-4 text-center" bg="light">
              <Card.Img
                variant="top"
                src="https://cdn.vox-cdn.com/thumbor/Ndb49Uk3hjiquS041NDD0tPDPAs=/0x169:1423x914/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/7342855/microsoftteams.0.jpg"
              />
              <Card.Body>
                <Card.Title>Природознавці</Card.Title>
                <Card.Text>
                  Команда 2
                </Card.Text>
                <Button variant="primary">Про команду</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="m-4 text-center" bg="light">
              <Card.Img
                variant="top"
                src="https://www.kv.by/sites/default/files/pictures/userpictures/2019/11/29/2359/foto6_1.jpg"
              />
              <Card.Body>
                <Card.Title>Маркетологи</Card.Title>
                <Card.Text>
                  Команда 3
                </Card.Text>
                <Button variant="primary">Про команду</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

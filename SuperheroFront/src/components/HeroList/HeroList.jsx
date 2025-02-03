import { Card, Col, Row } from 'react-bootstrap';

export const HeroList = ({heroes}) => {
  console.log(heroes);
  return (
    <>
      <Row className="d-flex flex-wrap justify-content-center gap-2">
        {heroes?.length && heroes.map((hero) => {
          return(
            <Col key={hero.id} lg={3} md={6} xs={12}>
              <Card className='card-hero'>
                <Card.Body>
                  <Card.Title>{hero.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Power: {hero.superpower}</Card.Subtitle>
                  <Card.Text>
                    Humility Score: {hero.numericHumilityScore}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>
    </>
  )
}

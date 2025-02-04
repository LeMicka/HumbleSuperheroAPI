import { useState } from "react"
import { Button, Col, Form, Row } from "react-bootstrap"
import { fetchData } from "../../helpers/axiosHelper";

import "./createHeroForm.css"

const initialValue = {
  name : "",
  superpower : "",
  humilityScore : ""
}

export const CreateHeroForm = ({getHeroes}) => {
  const [hero, setHero] = useState(initialValue);
  const [msgHumility, setMsgHumility] = useState("");
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    const {name, value} = e.target;
    setHero({...hero, [name]:value});
  }

  const onSubmit = async () => {
    try {
      const {name, superpower, humilityScore} = hero;
      if (!name || !superpower || !humilityScore){
        setMsg("You have to fill all the inputs");
      }
      else if (humilityScore < 1 || humilityScore > 10){
        setMsgHumility("Set to a number between 1 and 10");
      }
      else{
        await fetchData("api/heroes/superheroes", "post", hero);
        getHeroes();
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Row>
      <Col lg={6} md={8} xs={12} className="d-flex justify-content-center mx-auto my-5">
        <Form  className="form-create">
          <Form.Group className="mb-3">
            <Form.Label>Superhero name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Superhero name"
              value={hero.name}
              onChange={handleChange}
              name="name"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Superpower</Form.Label>
            <Form.Control
              type="text"
              placeholder="Superpower"
              value={hero.superpower}
              onChange={handleChange}
              name="superpower"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Humility score</Form.Label>
            <Form.Control
              type="number"
              placeholder="Humility score"
              min="1"
              max="10"
              value={hero.humilityScore}
              onChange={handleChange}
              name="humilityScore"
            />
            {msgHumility && <p className="warning-msg">{msgHumility}</p>}
          </Form.Group>
          {msg && <p className="warning-msg">{msg}</p>}
          <div className="d-flex justify-content-between button-form">
            <Button  onClick={onSubmit} >Submit</Button>
            <Button  onClick={()=>setHero(initialValue)}>Cancel</Button>
          </div>
        </Form>
      </Col>
    </Row>
  )
}

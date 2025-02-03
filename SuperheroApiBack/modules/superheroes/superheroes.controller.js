import superheroesDal from "./superheroes.dal.js";
import SuperheroesDal from "./superheroes.dal.js";

class SuperheroesController {
  getSuperheroes = (req, res) => {
    try {
      const result = SuperheroesDal.getSuperheroes();
      
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  }

  addSuperheroes = (req, res) => {
    let numericHumilityScore = null;
    console.log(req.body);
    try {
      const {
        name,
        superpower,
        humilityScore
      } = req.body;
  
      if(!name || !superpower || !humilityScore){
        throw new Error("Your superhero is missing a property (name, superpower, humilityScore)");
      }
      numericHumilityScore = parseInt(humilityScore);
      if (numericHumilityScore <= 0 || numericHumilityScore > 10){
        throw new Error("The humilityScore has to be a number between 1 and 10");
      }

      const dataToDal = {
        name,
        superpower,
        numericHumilityScore
      }

      superheroesDal.addSuperheroes(dataToDal);
      res.status(200).json({msg: "Superhero created correctly"});
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  }
}

export default new SuperheroesController();
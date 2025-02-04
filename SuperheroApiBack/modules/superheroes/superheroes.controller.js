import SuperheroesDal from "./superheroes.dal.js";

class SuperheroesController {

  /**
   * This controller return the sorted array it got from the dal. 
   */

  getSuperheroes = (req, res) => {
    try {
      const result = SuperheroesDal.getSuperheroes();
      
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  }

  /**
   * This controller method gets the data from the front, turns the humility humilityScore
   * to an int and sends this data to the dal
   */
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
      if (numericHumilityScore < 1 || numericHumilityScore > 10){
        throw new Error("The humilityScore has to be a number between 1 and 10");
      }

      const dataToDal = {
        name,
        superpower,
        numericHumilityScore
      }

      SuperheroesDal.addSuperheroes(dataToDal);
      res.status(200).json({msg: "Superhero created correctly"});
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  }
}

export default new SuperheroesController();
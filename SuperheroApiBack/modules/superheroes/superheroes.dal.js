
let superheroArray = [];

class SuperheroesDal {
  getSuperheroes = () => {
    try {
      superheroArray.sort((hero1, hero2) => {
        return(hero1.humility - hero2.humility);
      })
      return superheroArray;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  addSuperheroes = (data) => {
    try {
      const superheroData = {...data , id: superheroArray.length} 
      superheroArray.push(superheroData);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export default new SuperheroesDal();
import { useEffect, useState } from 'react'
import { fetchData } from '../../helpers/axiosHelper'
import { HeroList } from '../../components/HeroList/HeroList';
import { CreateHeroForm } from '../../components/CreateHeroForm/CreateHeroForm';
import { Container } from 'react-bootstrap';

import "./frontPage.css"

export const FrontPage = () => {
  const [heroes, setHeroes] = useState();


  const getHeroes = async () => {
    try {
      const heroesResult = await fetchData("api/heroes/superheroes", "get");
      setHeroes(heroesResult);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getHeroes();
  }, []);
  

  return (
    <>
      <section>
        <h1 className='page-title'>Humble Superhero API</h1>
      </section>
      <section>
        <Container fluid="xxl" className='mx-auto'>
          <CreateHeroForm getHeroes={getHeroes} />
        </Container>
      </section>
      <section>
        <Container fluid="xxl" className='mx-auto'>
          <HeroList heroes={heroes}/>
        </Container>
      </section>
    </>
  )
}

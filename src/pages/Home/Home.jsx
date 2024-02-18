import { Container, CountryList, Heading, Section } from 'components';
import { useState, useEffect } from 'react';
import { fetchByRegion } from '../../service/countryApi';

const Home = () => {
  const [countries, setCountries] = useState(null);
  useEffect(() => {
    const fn = async () => {
      try {
        const result = await fetchByRegion('europe');
        setCountries(result);
      } catch (error) {
        console.log('error: ', error.message);
      }
    };
    fn();
  }, []);

  return (
    <Section>
      <Container>
        <Heading title="Home" bottom />
        {countries && <CountryList countries={countries} />}
      </Container>
    </Section>
  );
};
export default Home;

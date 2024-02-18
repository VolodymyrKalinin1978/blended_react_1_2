import { Container, CountryList, Heading, Section } from 'components';
import { useState, useEffect } from 'react';
import { fetchByRegion } from '../../service/countryApi';
import SearchCountry from 'pages/SearchCountry/SearchCountry';

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

  const searchCountry = async region => {
    try {
      const result = await fetchByRegion(region);
      setCountries(result);
    } catch (error) {
      console.error('Error searching countries by region:', error.message);
    }
  };

  return (
    <Section>
      <Container>
        <SearchCountry onChange={searchCountry} />
        {countries && <CountryList countries={countries} />}
      </Container>
    </Section>
  );
};
export default Home;

import { Container, Section, CountryInfo, GoBackBtn } from 'components';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router';
import { fetchCountry } from 'service/countryApi';

const Country = () => {
  const [countryInfo, setCountryInfo] = useState(null);
  const { countryId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state || '/');

  useEffect(() => {
    const fn = async () => {
      try {
        const result = await fetchCountry(countryId);
        setCountryInfo(result);
      } catch (error) {
        console.log('error: ', error.message);
      }
    };
    fn();
  }, [countryId]);

  return (
    <Section>
      <Container>
        <GoBackBtn state={backLink}>GO BACK</GoBackBtn>
        {countryInfo && <CountryInfo {...countryInfo} />}
      </Container>
    </Section>
  );
};
export default Country;

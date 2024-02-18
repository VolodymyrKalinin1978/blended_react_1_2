import { Grid } from 'components/Grid/Grid';
import { GridItem } from 'components/GridItem/GridItem';
import { Link } from 'react-router-dom';
export const CountryList = ({ countries }) => {
  return (
    <Grid>
      {countries.map(({ flag, country, id }) => (
        <GridItem key={id}>
          <Link to={`/country/${id}`}>
            <img src={flag} alt={country} />
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
};

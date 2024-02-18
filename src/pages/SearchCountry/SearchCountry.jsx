import { Container, SearchForm, Section } from 'components';

const SearchCountry = ({ onChange }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const region = e.target.region.value;
    if (!region) return;
    onChange(region);
  };

  return (
    <>
      <Section>
        <Container>
          <SearchForm onSubmit={handleSubmit} />
        </Container>
      </Section>
    </>
  );
};

export default SearchCountry;

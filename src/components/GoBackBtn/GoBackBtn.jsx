import { Link } from 'react-router-dom';

export const GoBackBtn = ({ state, children }) => {
  return <Link to={state.current}>{children}</Link>;
};

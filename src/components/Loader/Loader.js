
import { Grid } from 'react-loader-spinner';
import { Loaders } from './Loader.styled';

const Loader = () => (
  <Loaders>
    <Grid
      color="rgb(0, 157, 255)"
      height={100}
      width={110}
      ariaLabel="loading"
      css={`
        display: block;
        margin: 0 auto;
      `}
    />
  </Loaders>
);

export default Loader;

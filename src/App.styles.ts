import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';

export const Wrapper = styled.div`
  margin: 40px;
  font-family: Arial, Helvetica, sans-serif;
  > h1 {
    text-align: center;
    margin-bottom: 40px;
  }

  > p {
    margin: 40px;
  }
`;

export const StyledButton = styled(IconButton)`
  position: fixed;
  z-index: 2;
  top: 40px;
  right: 40px;
`;

import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 2px solid #daa520;
  border-radius: 20px;
  height: 100%;
  transition: all 0.3s linear;
  cursor: pointer;
  filter: grayscale(50%);

  :hover {
    transform: scale(1.05);
    filter: grayscale(0%);
    border: 2px solid #edd087;
    div {
      background-color: #edd087;
    }
  }

  button {
    border-radius: 0 0 20px 20px;
  }

  img {
    max-height: 250px;
    object-fit: scale-down;
    margin: 10px;
    border-radius: 20px 20px 0 0;
  }

  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
    transition: all 0.3s linear;
  }

  p {
    overflow: hidden;
  }
`;

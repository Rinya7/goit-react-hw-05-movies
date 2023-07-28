import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const AditionLi = styled.li`
  .active {
    color: red;
  }
`;

export const BackLick = styled(Link)`
  color: rgb(252, 255, 235);
  font-size: 16px;
  line-height: 16px;
  padding: 6px;
  border-radius: 15px;
  font-family: Georgia, serif;
  font-weight: normal;
  text-decoration: none;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  background-image: linear-gradient(
    to right,
    rgb(28, 110, 164) 0%,
    rgb(35, 136, 203) 50%,
    rgb(20, 78, 117) 100%
  );
  box-shadow: rgb(0, 0, 0) 5px 5px 15px 5px;
  border: 2px solid rgb(28, 110, 164);
  display: inline-block;
  margin: 20px;
`;

export const Conteiner = styled.div`
  margin: 20px;
`;

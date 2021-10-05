import styled from "styled-components";
import { Link } from "gatsby";

export const FooterContainer = styled.div`
  width: 100%;
  padding: 30px;
`;

export const ColumnWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 1440px;
  margin: auto;
  flex-wrap: wrap;

  @media screen and (max-width: 850px) {
    grid-template-columns: 1fr;
  }
`;

export const Column = styled.div`
  min-width: 175px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 850px) {
    margin-top: 20px;
  }
`;

export const FirstColumn = styled.div`
  h2 {
    margin-bottom: 20px;
    color: #f26a2e;
  }
`;

export const ColumnTitle = styled.h4`
  margin-bottom: 10px;
`;

export const FooterLink = styled(Link)`
  margin-bottom: 5px;
  text-decoration: none;
  font-size: 14px;
  color: #3d3d4e;

  &:hover {
    color: #f26a2e;
    transition: 0.3s ease-out;
  }
`;

export const LinkColumnWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 550px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

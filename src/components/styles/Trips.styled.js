import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { ImLocation } from "react-icons/im";

export const ProductsContainer = styled.div`
  max-width: 1440px;
  padding: 50px 0px;
  margin: 50px auto 20vh auto;
`;

export const ProductsHeading = styled.div`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: black;
`;

export const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  justify-items: center;
  padding: 0 2rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

export const TripCard = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  border-radius: 10px;
  transition: 0.2s ease;
  color: white;

  @media screen and (max-width: 1200px) {
    height: 400px;
  }

  @media screen and (max-width: 860px) {
    height: 300px;
  }
`;
export const TripImage = styled(GatsbyImage)`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  filter: brightness(70%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
  object-fit: cover;

  &:hover {
    filter: brightness(100%);
  }
`;

export const TripInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2rem;

  @media screen and (max-width: 280px) {
    padding: 0 1rem;
  }
`;

export const TextWrap = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 75px;
  padding-left: 5px;
`;

export const TripTitle = styled.h4`
  font-weight: 400;
  font-size: 1rem;
  margin-left: 0.5rem;
`;

export const LocationIcon = styled(ImLocation)``;

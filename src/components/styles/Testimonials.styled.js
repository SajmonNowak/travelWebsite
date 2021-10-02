import styled from 'styled-components';
import { GatsbyImage} from "gatsby-plugin-image";
import {IoMdCheckmarkCircleOutline} from "react-icons/io"
import {FaRegLightbulb} from "react-icons/fa"

export const TestimonialContainer = styled.div`
  min-height: 100vh;
  max-width: 1440px;
  width: 100%;
  background: #fcfcfc;
  margin: auto;
  padding: 30px;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;

  @media screen and (max-width: 880px){
      display: flex;
      flex-direction: column;
  }
`;

export const Testimonial = styled.div`
  min-height: 150px;

  h3 {
      margin-bottom: 1rem;
      font-size: 1.5rem;
      font-style: italic;
  }

  p {
      color: #3b3b3b;
  }
`;

export const ColumnOne = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-gap: 20px;

`;

export const ColumnTwo = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
margin-top: 20px;
grid-gap: 10px;
@media screen and (max-width: 500px){
    grid-template-columns: 1fr;
}
`;

export const Description = styled.div`
  font-size: clamp(1.5rem, 5vw, 2rem);
  margin-bottom: 60px;
  font-weight: bold;

  @media screen and (max-width: 880px){
    margin-bottom: 40px;
  }
`;

export const Heading = styled.h4`
  font-size: 1rem;
  color: #077bf1;
  margin-bottom: 5px;
`;

export const Image = styled(GatsbyImage)`
  border-radius: 10px;
  height: 100%;
`;

export const CheckmarkIcon = styled(IoMdCheckmarkCircleOutline)`
  color: #3fffa8;
  font-size: 2rem;
  margin-bottom: 10px;
`;

export const LightbulbIcon = styled(FaRegLightbulb)`
   color: #f9b19b;
  font-size: 2rem;
  margin-bottom: 10px;
`;
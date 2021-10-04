import styled from "styled-components";
import { GiEarthAmerica } from "react-icons/gi";
import { MdAirplanemodeActive, MdTimer } from "react-icons/md";
import { FaMoneyCheck } from "react-icons/fa";

export const StatsContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  background: white;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  margin: auto;
`;

export const Title = styled.h4`
  font-size: clamp(1.5rem, 5vw, 2rem);
  margin-bottom: 30px;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;

  @media screen and (max-width: 770px) {
    grid-template-columns: 1fr;
  }
`;


export const StatDiv = styled.div`
    height: 100%;
    width: 100%;
    padding: 20px;

`;

export const EarthIcon = styled(GiEarthAmerica)`
color: #047bf1;
`;

export const AirplaneIcon = styled(MdAirplanemodeActive)`
color: #f3a82e;
`;

export const TimerIcon = styled(MdTimer)`
color: #f34f2e;
`;

export const MoneyIcon = styled(FaMoneyCheck)`
color: #3af576;
`;

export const Icon = styled.div`
  font-size: 40px;
  margin-bottom: 10px;
`;

export const StatTitle = styled.h4`
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  margin-bottom: 10px;
`;

export const Description = styled.p`
`;
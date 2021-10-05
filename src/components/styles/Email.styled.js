import styled from "styled-components";

export const EmailContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 10vh;
  min-height: 400px;
  color: white;
  z-index: 2!important;;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0.6) 35%,
    rgba(0, 0, 0, 0.2) 100%
  );
`;

export const Title = styled.h4`
  margin-bottom: 10px;
  font-size: clamp(1rem, 5vw, 3rem);
`;

export const Description = styled.p`
  margin-bottom: 50px;
  font-size: clamp(1rem, 2.5vw, 1.5rem);
`;

export const EmailInput = styled.input`
  border-radius: 20px;
  min-width: 100px;
  border: 1px solid lightgrey;
  width: 100%;
  outline: none;
  max-width: 300px;
  height: 35px;
  margin-bottom: 10px;
  padding: 10px;
  text-align: center;
`;

export const Message = styled.p`
  margin-bottom: 10px;
`;
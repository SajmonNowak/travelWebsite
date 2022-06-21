import React from "react";
import {
  ProductsContainer,
  ProductsHeading,
  ProductsWrapper,
  TextWrap,
  TripImage,
  TripCard,
  TripInfo,
  TripTitle,
  LocationIcon,
} from "./styles/Trips.styled";
import { Button } from "./styles/Button.styled";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Trips = () => {
  const data = useStaticQuery(graphql`
    query TripsQuery {
      allTripsJson {
        edges {
          node {
            alt
            button
            name
            img {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  `);

  function getTrips(data) {
    const tripsArray = [];

    data.allTripsJson.edges.forEach((trip, index) => {
      let tripImage = getImage(trip.node.img.childImageSharp.gatsbyImageData);
      tripsArray.push(
        <TripCard key={index}>
          <TripImage image={tripImage} alt={trip.node.alt} />
          <TripInfo>
            <TextWrap>
              <LocationIcon/>
              <TripTitle>{trip.node.name}</TripTitle>
            </TextWrap>
            <Button to="" primary="true" round="true" css={`position: absolute; bottom:20px; font-size: 14px;`}>View more</Button>
          </TripInfo>
        </TripCard>
      );
    });
    return tripsArray;
  }

  return (
    <ProductsContainer>
      <ProductsHeading>Explore new places</ProductsHeading>
      <ProductsWrapper>{getTrips(data)}</ProductsWrapper>
    </ProductsContainer>
  );
};

export default Trips;

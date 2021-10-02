import React from "react";
import {
  ProductsContainer,
  ProductsHeading,
  ProductsWrapper,
} from "./styles/Trips.styled";
import { useStaticQuery, graphql } from "gatsby";
import  { GatsbyImage, getImage} from "gatsby-plugin-image"

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
          let tripImage= getImage(trip.node.img.childImageSharp.gatsbyImageData)
          tripsArray.push(
              <div key={index}>
                  <GatsbyImage image={tripImage}
                  alt={trip.node.alt}
                  />

              </div>
          )
      })
      return tripsArray;
  }

  return (
    <ProductsContainer>
      <ProductsHeading></ProductsHeading>
      <ProductsWrapper>{getTrips(data)}</ProductsWrapper>
    </ProductsContainer>
  );
};

export default Trips;

import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import React from "react";
import {
    CheckmarkIcon,
  ColumnOne,
    ColumnTwo,
  ContentWrapper,
  Description,
  Heading,
  Image,
  LightbulbIcon,
  Testimonial,
  TestimonialContainer,
} from "./styles/Testimonials.styled";

const Testimonials = () => {
const data = useStaticQuery(graphql`
query MyQuery {
    allFile(
      filter: {name: {in: ["Testimonial-1", "Testimonial-2"]}, ext: {regex: "/(jpg)/"}}
    ) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    }
  }
`)

const getImages = () => {
    const imgArray = [];

    data.allFile.edges.forEach((item, index) => {
        let tripImage = getImage(item.node.childImageSharp.gatsbyImageData);
        imgArray.push(
            <Image key={index} image={tripImage} alt="TestimonialImage"/>
        )
    })

    return imgArray;
}

  return (
    <TestimonialContainer>
      <Heading>Testimonials</Heading>
      <Description>What our Customers say</Description>
      <ContentWrapper>
        <ColumnOne>
          <Testimonial>
            <CheckmarkIcon/>
            <h3>Fred Gray</h3>
            <p>
              "It was a really greate Trip! The best adventure i had in my life.
              I will soon be back again."
            </p>
          </Testimonial>
          <Testimonial>
            <LightbulbIcon />
            <h3>Paula Radriguez</h3>
            <p>
              "I can only recommend to travel with Travely. I couldn't imagine
              that we will encounter so many adventures and beatiful places on
              our trip."
            </p>
          </Testimonial>
        </ColumnOne>
        <ColumnTwo>
        {getImages()}
        </ColumnTwo>
      </ContentWrapper>
    </TestimonialContainer>
  );
};

export default Testimonials;

import React from 'react'
import { Column, ColumnTitle, ColumnWrapper, FirstColumn, FooterContainer, FooterLink, LinkColumnWrapper } from './styles/Footer.styled'

const Footer = () => {
    return (
        <FooterContainer>
            <ColumnWrapper>
            <FirstColumn>
                <h2>Travely</h2>
                <p>We strive to create the best experiences for our customers</p>
            </FirstColumn>
            <LinkColumnWrapper>
            <Column>
                <ColumnTitle>Contact Us</ColumnTitle>
                <FooterLink to="/">Contact</FooterLink>
                <FooterLink to="/">Support</FooterLink>
                <FooterLink to="/">Destinations</FooterLink>
                <FooterLink to="/">Sponsorships</FooterLink>
            </Column>
            <Column>
                <ColumnTitle>Videos</ColumnTitle>
                <FooterLink to="/">Submit Video</FooterLink>
                <FooterLink to="/">Ambassadors</FooterLink>
                <FooterLink to="/">Agency</FooterLink>
                <FooterLink to="/">Influencer</FooterLink>
            </Column>
            <Column>
                <ColumnTitle>Social Media</ColumnTitle>
                <FooterLink to="/">Instagram</FooterLink>
                <FooterLink to="/">Facebook</FooterLink>
                <FooterLink to="/">Youtube</FooterLink>
                <FooterLink to="/">Twitter</FooterLink>
            </Column>
            </LinkColumnWrapper>
            </ColumnWrapper>
        </FooterContainer>
    )
}

export default Footer

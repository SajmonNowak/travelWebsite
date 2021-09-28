import React from 'react'
import { Button } from './styles/Button.styled'
import { HeroBg, HeroContent, HeroContainer, HeroH1, VideoBg, HeroItems, HeroP } from './styles/Hero.styled'
import Video from '../assets/videos/BackgroundVideo.mp4'

const Hero = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg src={Video} type="video/mp4" autoPlay loop muted playsInline/>
            </HeroBg>
            <HeroContent>
                <HeroItems>
                    <HeroH1> Beatiful Destinations </HeroH1>
                    <HeroP> Book a Trip with us now to experience the biggest adventures you ever had</HeroP>
                    <Button primary="true" big="true" round="true" to="/trips"> Order now  </Button>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero

import React from 'react'
import { StatsContainer, Title, Wrapper, StatDiv, EarthIcon, MoneyIcon, AirplaneIcon, TimerIcon, Icon, StatTitle, Description } from './styles/Stats.styled'

const statsData =  [
    {
        icon: <EarthIcon/>,
        title: "Over 100 Destinations",
        desc: "Travel to over 100 unique places"
    },
    {
        icon: <AirplaneIcon/>,
        title: "1 Million Trips Made",
        desc: "We completed Trip over 1 Million Trips "
    },
    {
        icon: <TimerIcon/>,
        title: "Fastest Support",
        desc: "24/7 support for our customers"
    },
    {
        icon: <MoneyIcon/>,
        title: "Best Deals",
        desc: "We offer the best prices for trips"
    },
]

const Stats = () => {
    return (
        <StatsContainer>
            <Title>Why travel with us?</Title>
            <Wrapper>
                {statsData.map((item ,index) => {
                    return (
                        <StatDiv key={index}>
                            <Icon>{item.icon}</Icon>
                            <StatTitle>{item.title}</StatTitle>
                            <Description>{item.desc}</Description>
                        </StatDiv>
                    )
                })}
            </Wrapper>
        </StatsContainer>
    )
}

export default Stats

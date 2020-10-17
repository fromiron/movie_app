import React from "react";
import styled from "styled-components/native";
import propTypes from "prop-types";
import {apiImage} from "../../api";
import Poster from "../Poster";
import {TouchableOpacity} from "react-native";


const Container = styled.View`
flex: 1;
`
const Bg = styled.Image`
width: 100%;
height:100%;
opacity: 0.4;
position: absolute;
`


const Content = styled.View`
flex-direction: row;
align-items: center;
justify-content: space-around;
height: 100%;
`
const Data = styled.View`
width: 50%;
align-items: flex-start;
`
const Title = styled.Text`
color: white;
font-weight: bold;
font-size: 19px;
margin-bottom: 5px;
`

const Vote = styled.Text`
color: white;
margin-bottom: 7px;
`

const Stars = styled.Text`
color: orange;
font-size: 18px;
`

const Overview = styled.Text`
color: white;
font-size: 14px;
`
const Button = styled.View`
margin-top: 10px;
padding: 3px 10px;
background-color: #60a3bc;
border-radius: 3px;
`;
const ButtonText = styled.Text`
color: #0a3d62;
font-weight: bold;
font-size: 17px;
`;


const PaintStars = (votes) => {
    const intNum = Math.floor(votes);
    const decimalNum = (votes % 1).toFixed(1) * 10;
    let star = "";
    for (let i = 0; i < Math.floor(intNum / 2); i++) {
        star += "◆";
    }
    if (intNum % 2 === 1) star += "◈"
    if (decimalNum >= 5) star += "◇"

    return (
        <Stars>{star}</Stars>
    )
}


const Slider = ({id, title, backgroundImage, votes, overview, poster}) => {

    PaintStars(votes)
    return (
        <Container>
            <Bg source={{uri: apiImage(backgroundImage)}}/>

            <Content>
                <Poster url={apiImage(poster)}/>
                <Data>
                    <Title>{title.slice(0, 25)}</Title>
                    <Vote>{PaintStars(votes)} / 5point</Vote>
                    <Overview>{overview.slice(0, 80)}</Overview>

                    <TouchableOpacity>
                        <Button>
                            <ButtonText onPress={() => alert(votes)}>
                                More
                            </ButtonText>

                        </Button>

                    </TouchableOpacity>
                </Data>

            </Content>
        </Container>

    )
};


Slider.propTypes = {
    id: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    backgroundImage: propTypes.string.isRequired,
    votes: propTypes.number.isRequired,
    overview: propTypes.string.isRequired,
    poster: propTypes.string.isRequired
}


export default Slider;

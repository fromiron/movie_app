import React from "react";
import styled from "styled-components/native";
import propTypes from "prop-types";
import {apiImage} from "../../api";
import Poster from "../Poster";
import {TouchableOpacity} from "react-native";
import PaintStars from "../PaintStars";


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
color: white;
font-size: 13px;
`;


const Slider = ({title, backgroundImage, votes, overview, poster}) => {
    return (
        <Container>
            <Bg source={{uri: apiImage(backgroundImage)}}/>

            <Content>
                <Poster url={apiImage(poster)}/>
                <Data>
                    <Title>{title.length > 20 ? `${title.slice(0, 20)}...` : title}</Title>
                    <Vote>{PaintStars(votes)} / 5point</Vote>
                    <Overview>{overview.length > 80 ? `${overview.slice(0, 80)}...` : overview}</Overview>

                    <TouchableOpacity>
                        <Button>
                            <ButtonText onPress={() => alert(votes)}>
                                View details
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

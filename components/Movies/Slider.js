import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import {Dimensions} from "react-native";
import {apiImage} from "../../api";
import {TouchableHighlight} from "react-native";


const {width: WIDTH, height: HEIGHT} = Dimensions.get("screen");

const Container = styled.View`
width: ${WIDTH}px;
height: ${HEIGHT / 4}px;
background-color: red;
`

const Bg = styled.Image`
width: 100%;
height:100%;
`

const Slider = ({id, title, backgroundImage, votes, overview}) => (
    <Container>
        <TouchableHighlight onPress={() => alert(votes)}>
            <Bg style={{width: "100%", height: "100%"}} source={{uri: apiImage(backgroundImage)}}/>
        </TouchableHighlight>
    </Container>
);


Slider.PropTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired
}


export default Slider;

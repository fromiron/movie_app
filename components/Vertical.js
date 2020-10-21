import React from 'react';
import styled from "styled-components/native";
import propsTypes from "prop-types";
import Poster from "./Poster";
import PaintStars from "./PaintStars";
import {trimText} from "../utils";
import {TouchableOpacity} from "react-native";

const Container = styled.View`
margin: 0 10px;
overflow: hidden;
`
const Title = styled.Text`
color: white;
`
const Votes = styled.Text`
color:white;
`

const Vertical = ({poster, title, votes}) => (
    <TouchableOpacity onPress={() => alert(title)}>

        <Container>
            <Poster url={poster}/>
            <Title>{trimText(title, 10)}</Title>
            <Votes>{PaintStars(votes)}</Votes>
        </Container>
    </TouchableOpacity>
)


Vertical.prototype = {
    id: propsTypes.number.isRequired,
    Poster: propsTypes.string.isRequired,
    title: propsTypes.string.isRequired,
    votes: propsTypes.number.isRequired
}

export default Vertical;
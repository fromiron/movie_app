import React from 'react';
import styled from "styled-components/native";
import propsTypes from "prop-types";
import Poster from "./Poster";
import {apiImage} from "../api";
import PaintStars from "./PaintStars";

const Container = styled.View`
`
const Title = styled.Text`
color: white;
`
const Votes = styled.Text`
color:white;
`

const Vertical = ({poster, title, votes}) =>(
    <Container>
        <Poster url={apiImage(poster)}/>
        <Title>{title.length > 10 ? `${title.slice(0, 10)}...` : title}</Title>
        <Votes>{PaintStars(votes)}</Votes>
    </Container>
)


Vertical.prototype = {
    Poster: propsTypes.string.isRequired,
    title: propsTypes.string.isRequired,
    votes: propsTypes.number.isRequired
}

export default Vertical;
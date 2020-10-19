import React from "react"
import styled from "styled-components/native"
import propTypes from "prop-types";
import Poster from "./Poster";
import PaintStars from "./PaintStars";
import {apiImage} from "../api";

const Container = styled.View`
padding:0 30px;
margin-bottom: 20px;
align-items: flex-start;
flex-direction: row;
`;

const Data = styled.View`
color: white;
`;

const Overview = styled.Text`
color: white;
`;

const Title = styled.Text`
color: white;
font-weight: 500;
`;
const Votes = styled.View`
`;

const Horizontal = ({id, title, votes, poster, overview}) => (
    <Container>
        <Poster url={apiImage(poster)}/>
        <Data>
            <Title>{title}</Title>
            <Votes>{PaintStars(votes)}</Votes>
            <Overview>{overview}</Overview>
        </Data>
    </Container>
)


Horizontal.propTypes = {
    id: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    votes: propTypes.number.isRequired,
    poster: propTypes.string.isRequired,
    overview: propTypes.string.isRequired,
}

export default Horizontal;
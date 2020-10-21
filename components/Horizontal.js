import React from "react"
import styled from "styled-components/native"
import propTypes from "prop-types";
import Poster from "./Poster";
import {formatDate, trimText} from "../utils";
import {TouchableOpacity} from "react-native";

const Container = styled.View`
padding:0 30px;
margin-bottom: 20px;
align-items: flex-start;
flex-direction: row;
`;

const Data = styled.View`
color: white;
align-items: flex-start;
width: 60%;
margin-left: 25px;
`;

const Overview = styled.Text`
color: white;
margin-top: 5px;
`;

const Title = styled.Text`
color: white;
font-weight: bold;
margin-bottom: 5px;
`;
const ReleaseDate = styled.Text`
color: white;
font-size: 11px;
`;

const Horizontal = ({id, title, releaseDate, poster, overview}) => (
    <TouchableOpacity onPress={() => alert(title)}>
        <Container>
            <Poster url={poster}/>
            <Data>
                <Title>{trimText(title, 20)}</Title>
                {releaseDate ? <ReleaseDate>{formatDate(releaseDate)}</ReleaseDate> : null}
                <Overview>{trimText(overview, 100)}</Overview>
            </Data>
        </Container>
    </TouchableOpacity>
)


Horizontal.propTypes = {
    id: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    releaseDate: propTypes.string,
    poster: propTypes.string.isRequired,
    overview: propTypes.string.isRequired,
}

export default Horizontal;
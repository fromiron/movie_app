import React from "react";
import propTypes from 'prop-types'
import styled from 'styled-components/native';

const Image = styled.Image`
width: 100px;
height: 160px;
border-radius: 5px;
`

const Poster = ({url}) => (
    <Image source={{uri: url}}/>
)

Poster.propTypes = {
    url: propTypes.string.isRequired
}
export default Poster;
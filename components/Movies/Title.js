import React from 'react';
import styled from "styled-components/native"
import propTypes from "prop-types"

const Text = styled.Text`
color: white;
font-weight: bold;
font-size: 16px;
margin-left: 20px;
margin-bottom: 20px;
`

const Title = ({title}) => <Text>{title}</Text>


Title.prototype = {
    title: propTypes.string.isRequired
}

export default Title
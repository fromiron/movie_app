import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import {Dimensions} from "react-native-web";
import {ActivityIndicator} from "react-native";


const {width, height} = Dimensions.get("screen");

const Container = styled.View`
flex: 1;
background-color: black;
justify-content: center;
`

const Header = styled.View`
width:100%;
height: 30%;
`
const Section = styled.View`
background-color: #444;
height: 100%;
`

const Text = styled.Text`
color:white;
`

export default ({loading, nowPlaying}) => (
    <Container>
        {loading ? <ActivityIndicator size="large" color="#00ff00"/> :
            <Header>
                <Swiper controlsEnabled={false} loop={true} timeout={3}>
                    {nowPlaying.map(movie => (
                        <Section key={movie.id}>
                            <Text>{movie.original_title}</Text>
                        </Section>
                    ))}

                </Swiper>
            </Header>
        }

    </Container>
)

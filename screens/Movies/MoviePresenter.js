import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import {ActivityIndicator} from "react-native";
import Slider from "../../components/Movies/Slider";


const Container = styled.View`
flex: 1;
background-color: black;
justify-content: center;
`


export default ({loading, nowPlaying}) => (
    <Container>
        {loading ? <ActivityIndicator size="large" color="#00ff00"/> :
            <>
                <Swiper controlsEnabled={false} loop={true} timeout={3} >
                    {nowPlaying.map(movie => (
                        <Slider key={movie.id} title={movie.original_language} overview={movie.overview}
                                votes={movie.vote_average} backgroundImage={movie.backdrop_path}/>
                    ))}

                </Swiper>
            </>
        }

    </Container>
)

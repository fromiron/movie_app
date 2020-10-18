import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import {ActivityIndicator, Dimensions} from "react-native";
import Slider from "../../components/Movies/Slider";
import Title from "../../components/Movies/Title";
import {ScrollView} from "react-native";

const {width: WIDTH, height: HEIGHT} = Dimensions.get("window");


const SliderContainer = styled.View`
width: ${WIDTH}px;
height: ${HEIGHT / 4}px;
margin-bottom: 20px;
`
const Container = styled.View`
`


export default ({loading, nowPlaying}) => (
    <ScrollView
        style={{backgroundColor: "black"}}
        contentContainerStyle={{flex: 1, justifyContent: loading === true ? "center" : "flex-start"}}>

        {loading ? <ActivityIndicator size="large" color="#00ff00"/> :
            <>
                <SliderContainer>
                    <Swiper controlsEnabled={false} loop={true} timeout={3}>
                        {nowPlaying.map(movie => (
                            <Slider key={movie.id}
                                    id={movie.id}
                                    title={movie.original_title}
                                    overview={movie.overview}
                                    votes={movie.vote_average}
                                    backgroundImage={movie.backdrop_path}
                                    poster={movie.poster_path}/>
                        ))}

                    </Swiper>
                </SliderContainer>
                <Container>
                    <Title title={"Sexy"}/>
                </Container>
            </>
        }

    </ScrollView>
)

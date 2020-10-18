import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import {ActivityIndicator, Dimensions, ScrollView} from "react-native";
import Slider from "../../components/Movies/Slider";
import Title from "../../components/Movies/Title";
import Vertical from "../../components/Vertical";

const {width: WIDTH, height: HEIGHT} = Dimensions.get("window");


const SliderContainer = styled.View`
width: ${WIDTH}px;
height: ${HEIGHT / 4}px;
margin-bottom: 20px;
`
const Container = styled.View`
`


export default ({loading, nowPlaying, popular}) => (
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
                    <Title title={"Popular Movies"}/>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {popular.map(movie => (
                            <Vertical key={movie.id} title={movie.original_title}
                                      votes={movie.vote_average} poster={movie.poster_path}/>
                        ))}
                    </ScrollView>
                </Container>
            </>
        }

    </ScrollView>
)

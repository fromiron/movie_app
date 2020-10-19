import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import {ActivityIndicator, Dimensions, ScrollView} from "react-native";
import Slider from "../../components/Movies/Slider";
import Title from "../../components/Movies/Title";
import Vertical from "../../components/Vertical";
import Horizontal from "../../components/Horizontal";

const {width: WIDTH, height: HEIGHT} = Dimensions.get("window");


const SliderContainer = styled.View`
width:100%;
height: ${HEIGHT / 4}px;
margin-bottom: 20px;
`
const Container = styled.View`
`


export default ({loading, nowPlaying, popular, upcoming}) => (
    <ScrollView
        style={{backgroundColor: "black"}}
        contentContainerStyle={{justifyContent: loading === true ? "center" : "flex-start"}}>

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
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginBottom: 20}}>
                        {popular.map(movie => (
                            <Vertical key={movie.id} title={movie.original_title}
                                      votes={movie.vote_average} poster={movie.poster_path}/>
                        ))}
                    </ScrollView>
                    <Title title={"Coming soon"}/>

                        {upcoming.map(movie => (
                            <Horizontal key={movie.id} id={movie.id}
                                        title={movie.original_title}
                                        votes={movie.vote_average}
                                        poster={movie.poster_path}/>
                        ))}

                </Container>
            </>
        }

    </ScrollView>
)

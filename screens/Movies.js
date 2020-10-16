import React, {useEffect} from "react";
import {View, Text} from "react-native";
import {movieApi} from "../api";

export default () => {
    const getData = async () => {
        const [nowPlaying, error] = await movieApi.nowPlaying();
        console.log(nowPlaying, error)
    };

    useEffect(() => {
        getData().then()
    }, [])
    return (
        <View style={{flex: 1, backgroundColor: "black"}}>
            <Text>Movies</Text>
        </View>
    )
};

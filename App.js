import React, {useState} from 'react';
import {AppLoading} from "expo";
import {Image} from "react-native";
import {Asset} from "expo-asset";
import {Ionicons} from "@expo/vector-icons";
import * as Font from "expo-font";
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Stack from "./navigation/Stack";


const cacheImages = images =>
    images.map(image => {
        if (typeof image === "string") {
            return Image.prefetch(image); //urlが来たら先にダウンロード
        } else {
            return Asset.fromModule(image).downloadAsync(); //expo install expo-asset　URLじゃない場合はモージュルをリターン
        }
    })

const cacheFonts = fonts => fonts.map(font => [Font.loadAsync(font)])


export default function App() {
    const [isReady, setIsReady] = useState(false);
    const loadAssets = () => {
        const images = cacheImages([
            "https://i.picsum.photos/id/325/200/300.jpg?hmac=Msn1Ui614fNi6HvLNovytf3IQx4fpJrJYRz59dR6TFQ",
            "https://i.picsum.photos/id/1031/200/300.jpg?hmac=HVS-5o6kRugo6EcoZhPEsxm8Jnl7-J5tuEc20pN029c"])
        const fonts = cacheFonts([Ionicons.font])
        return Promise.all([...images, ...fonts]); //imageとiconのPromiseを配列にしてリターン
    };
    const onFinish = () => setIsReady(true);
    return isReady ? (
        <NavigationContainer>
            <Stack/>
        </NavigationContainer>
    ) : (
        <AppLoading startAsync={loadAssets} onFinish={onFinish} onError={console.error}/>)
}

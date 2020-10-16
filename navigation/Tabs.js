import React, {useLayoutEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Movies from "../screens/Movies/MoviesContainer";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import Fav from "../screens/Fav";
import {Ionicons} from "@expo/vector-icons";
import {Platform} from "react-native-web";

const Tabs = createBottomTabNavigator();


const getHeaderName = route => route?.state?.routeNames[route.state.index] || "Movies";

export default ({navigation, route}) => {
    useLayoutEffect(() => {
        const name = getHeaderName(route);
        navigation.setOptions({
            title: name
        });
    }, [route]);
    return (
        <Tabs.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused}) => {
                    let icon = Platform.OS === "ios" ? "ios-" : "md-"; //OS 確認
                    const name = route.name;
                    switch (name) {
                        case "Movies" :
                            icon += "film";
                            break;
                        case "Tv" :
                            icon += "tv";
                            break;
                        case "Search" :
                            icon += "search";
                            break;
                        case "Discover" :
                            icon += "star";
                            break;
                    }
                    return <Ionicons name={icon} color={focused ? "white" : "gray"} size={25}/>
                }
            })}
            tabBarOptions={{
                showLabel: false,
                style: {
                    backgroundColor: "black",
                    borderTopColor: "black"
                }
            }}>
            <Tabs.Screen name={"Movies"} component={Movies}/>
            <Tabs.Screen name={"Tv"} component={Tv}/>
            <Tabs.Screen name={"Search"} component={Search}/>
            <Tabs.Screen name={"Discover"} component={Fav}/>
        </Tabs.Navigator>
    )
}

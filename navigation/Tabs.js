import React, {useLayoutEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Movies from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import Fav from "../screens/Fav";
import {Ionicons} from "@expo/vector-icons";

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
                    let icon;
                    const name = route.name;
                    switch (name) {
                        case "Movies" :
                            icon = "ios-film";
                            break;
                        case "Tv" :
                            icon = "ios-tv";
                            break;
                        case "Search" :
                            icon = "ios-search";
                            break;
                        case "Fav" :
                            icon = "ios-star";
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
            <Tabs.Screen name={"Fav"} component={Fav}/>
        </Tabs.Navigator>
    )
}
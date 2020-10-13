import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Movies from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import Fav from "../screens/Fav";

const Tabs = createBottomTabNavigator();

export default () => (
    <Tabs.Navigator>
        <Tabs.Screen name={"Movies"} component={Movies}/>
        <Tabs.Screen name={"Tv"} component={Tv}/>
        <Tabs.Screen name={"Search"} component={Search}/>
        <Tabs.Screen name={"Fav"} component={Fav}/>
    </Tabs.Navigator>
)
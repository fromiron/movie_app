import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import Detail from "../screens/Detail";
import Tabs from "./Tabs";
import cardOne from "../screens/card/cardOne";
import cardTwo from "../screens/card/cardTwo";


const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator>
        <Stack.Screen name={'cardOne'} component={cardOne}/>
        <Stack.Screen name={'cardTwo'} component={cardTwo}/>
    </Stack.Navigator>
)
import React from 'react';
import {View, Text, Button} from 'react-native';

export default ({route, navigation}) => (

    <View>
        <Text>
            Index {navigation.getParam("index")}
        </Text>
        <Button title={'back'} onPress={() => navigation.goBack()}/>

    </View>
)
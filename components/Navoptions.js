import React from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'
import { useNavigation } from '@react-navigation/core';

export default function Navoptions() {
    const navigation = useNavigation();

    const data =[
        {
            id:"1",
            title:"Get a Ride",
            image: "https://links.papareact.com/3pn",
            screen:"MapScreen"
        },
        {
            id:"2",
            title:"Order Food",
            image: "https://links.papareact.com/28w",
            screen:"EatScreen"
        }
    ]
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            horizontal
            renderItem={({item})=>(
                    <TouchableOpacity style={tw`p-2 pl-6 bg-gray-200 ml-6 w-40  h-56 rounded-lg`}
                    onPress={()=> navigation.navigate(item.screen)}>
                        <View>
                            <Image
                                style={{height:120,width:120,resizeMode:"contain"}}
                                source={{uri: item.image}}
                            />
                            <Text style={tw`mt-2 font-bold text-lg`}>{item.title}</Text>
                            <Icon
                            style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                            name="arrowright"
                            type="antdesign"
                            color="white"
                            />
                        </View>
                    </TouchableOpacity>
            )}
        />
    )
}

const styles = StyleSheet.create({})

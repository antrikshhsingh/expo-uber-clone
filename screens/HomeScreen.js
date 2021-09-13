import React from 'react'
import { Image, SafeAreaView ,StyleSheet, Text, View } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import Navoptions from '../components/Navoptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_API_KEY} from "@env"
import { TextInput } from 'react-native-gesture-handler';

export default function HomeScreen() {
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image
                style={{height:100, width: 100, resizeMode:"contain"}}
                source={{uri: "https://links.papareact.com/gzs"}}/>
            </View>
            <GooglePlacesAutocomplete
             query={{
                key: GOOGLE_API_KEY,
                language: 'en',
              }}
            styles={{
                container:{
                    flex:0,
                },
                textInput:{
                    fontSize:18,
                    backgroundColor:"#ebeced",
                }
            }}
            placeholder="Where From"
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}/>
            <Navoptions/> 
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
})

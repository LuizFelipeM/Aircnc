import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, Text, Image, AsyncStorage, StyleSheet, TouchableOpacity, View } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import logo from '../assets/logo.png';
import SpotList from '../components/SpotList';

export default function List({ navigation }){
    const [techs, setTechs] = useState([])

    useEffect(()=>{
        AsyncStorage.getItem('techs').then(storageTechs =>{
            const techsA = storageTechs.split(',').map(techs => techs.trim());

            setTechs(techsA);
        })
    }, [])

    function handleBackButton(){ navigation.navigate('Login') }

    return (
        <SafeAreaView style={styles.container}>
            {/* <View style={styles.header}>
                <TouchableOpacity style={styles.backBtn} onPress={()=>{ handleBackButton() }}>
                    <MaterialIcons name="arrow-back" size={20} color="#000000"></MaterialIcons>
                </TouchableOpacity> */}
                <Image source={logo} style={styles.logo}/>
            {/* </View> */}

            <ScrollView>
                {techs.map(tech => <SpotList tech={tech} key={tech} /> )}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    header: {
        flexDirection: "row",
    },

    backBtn: {
        alignSelf: "center"
    },

    logo: {
        // width: "auto",
        height: 32,
        resizeMode: "contain",
        alignSelf: "center",
        // alignSelf: "flex-end",
        marginTop: 10,
        marginTop: 35
    }
})
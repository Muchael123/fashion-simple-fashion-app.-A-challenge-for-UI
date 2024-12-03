import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Theme'
import { Ionicons } from '@expo/vector-icons'
import { Size } from '@/constants/size'
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

interface SearchProps {
    iconType: "notifications-outline" | "search-outline"
}
export default function Search({iconType}: SearchProps) {
  return (
    <View style={styles.container}>
        <Pressable
        style= {({pressed}) => [{opacity: pressed ? 0.5 : 1}, styles.btn]}
         hitSlop={10} onPress={()=> console.log('icon 1 pressed')}>
            <Ionicons name= {iconType} size={Size.icons} color={Colors.grey} />
        </Pressable>
        <View style={styles.inputView}>
            <Ionicons name="search" size={24} color={Colors.grey} />
            <TextInput 
            cursorColor={Colors.secondary}
            placeholder="Search here" style={styles.input} />
            
            <View style={styles.divider} />
            <Pressable style={styles.btn} hitSlop={10} onPress={()=> console.log('pressed')}>
            <AntDesign name="filter" size={24} color={Colors.grey} />
            </Pressable>
        </View>
        <Pressable
        style= {({pressed}) => [{opacity: pressed ? 0.5 : 1}, styles.btn]}
         hitSlop={10} onPress={()=> console.log('handbag pressed')}>
            <SimpleLineIcons name="handbag" size={Size.icons} color={Colors.grey} />
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10
    },
    inputView: {
        flex: 1,
        height: 40,
        backgroundColor: Colors.white,
        borderRadius: 20,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    btn: {
        padding: 1,
        borderRadius: 30,
        backgroundColor: Colors.white,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        flex: 1,
        height: 40,
        color: Colors.dark
    },
    divider: {
        width: 2,
        height: '70%',
        backgroundColor: Colors.primary
    }
})
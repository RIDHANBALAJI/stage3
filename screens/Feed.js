import React, { Component } from 'react';
import { Text, View,Image,StyleSheet, SafeAreaView,Platform,StatusBar} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import PostCard from './PostCard';
let posts = require("./temp_posts.json")
export default class Feed extends Component {
     
    constructor(){
        super()
        this.state={

        }
    }
    renderItem=({item:post})=>{
        return <PostCard post={post}/>
    }
    keyExtractor=(item,index)=>index.toString()

    render() {
        return (
            <View>
                <SafeAreaView style={styles.droidSafeArea}/>
                <View style={styles.appTitle}>
                    <Image
                        source={require("../assets/logo.png")}
                        style={styles.iconImage}
                        ></Image>
                </View>
                <View style={styles.appTitleTextContainer}>
                    <Text style={styles.appTitleText}>Spectagram</Text>
                </View>
                <View style={styles.cardContainer}>
                    <FlatList
                        keyExtractor={this.keyExtractor}
                        data={posts}
                        renderItem={this.renderItem}
                     />   
                </View>
                
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        
            flex: 1,
            backgroundColor:"black"
    },
        
    
})
import React, { Component } from 'react';
import { Text, View,StyleSheet,SafeAreaView,Platform,StatusBar,Image,ScrollView,TextInput,Dimensions } from 'react-native';

import DropDownPicker from "react-native-dropdown-picker"
export default class CreatePost extends Component {
    constructor(){
        super()
        this.state={
            fontsLoaded:false,
            previewImage:"image_1",
            dropdownHeight:40
        }
    }
    render() {
     
            let preview_images={
                image_1:require("../assets/image_1.jpg"),
                image_2:require("../assets/image_2.jpg"),
                image_3:require("../assets/image_3.jpg"),
                image_4:require("../assets/image_4.jpg"),
                image_5:require("../assets/image_5.jpg"),
                image_6:require("../assets/image_6.jpg"),
                image_7:require("../assets/image_7.jpg")
            
        }
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Image
                    source={require("../assets/logo.png")}
                ></Image>
                <Text>New Post</Text>
                <ScrollView>
                    <Image source={preview_images[this.state.previewImage]}>

                    </Image>
                    <DropDownPicker
                        items={[
                            {label:"Image 1", value:"image_1"},
                            {label:"Image 2", value:"image_2"},
                            {label:"Image 3", value:"image_3"},
                            {label:"Image 4", value:"image_4"},
                            {label:"Image 5", value:"image_5"},
                            {label:"Image 6", value:"image_6"},
                            {label:"Image 7", value:"image_7"},
                        ]}
                        onOpen={()=>{
                            this.setState({dropdownHeight:170})
                        }}

                        onClose={()=>{
                            this.setState({dropdownHeight:40})
                        }}
                        onChangeItem={item=>
                            this.setState({
                                previewImage:item.value
                            })
                        }
                    />
                </ScrollView>
            </View>
        )
    }
}
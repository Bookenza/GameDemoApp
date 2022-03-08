import React, { Component}  from 'react';

import {
    StyleSheet,
    View,
    Dimensions,
    Text
  } from 'react-native';
  

  const Header = props => {

    return (

        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>

    );
  };


  const styles = StyleSheet.create({

    header:{
        width:'100%',
        height:90,
        paddingTop:36,
        backgroundColor:'#f7287b',
        alignItems:'center',
        justifyContent:'center',
    },

    headerTitle:{
        // top:15,
        color:'white',
        fontSize:20,
    },


});



  export default Header;
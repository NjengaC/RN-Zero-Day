
import React, { JSX } from "react";

import {
    View,
    Text,
    StyleSheet,
    useColorScheme,
    ScrollView
} from 'react-native';
import FlatCards from "./FlatCards";

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'
  return(
    <ScrollView>
      <View style = {styles.container}>
        <Text style = {isDarkMode ? styles.whiteMode : styles.darkMode}>Cards Project</Text>
      </View>
      <FlatCards />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF6347',
    },
    
    whiteMode: {
        color: '#FFFFFF'
    },
    darkMode: {
        color: '#000000'
    }

}
)
export default AppPro;
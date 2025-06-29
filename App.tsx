
import React, { JSX } from "react";

import {
    StyleSheet,
    useColorScheme,
    ScrollView,
    SafeAreaView,
} from 'react-native';
import FlatCards from "./FlatCards";
import ElevatedCards from "./ElevatedCards";
import FancyCard from "./FancyCard";
// import LinkButton from "./Link";
import ActionCard from "./ActionCard";
import ContactList from "./ContactList";

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'
  return(
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <FancyCard />
        <ContactList />
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
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
export default App;

import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'

export default class ElevatedCards extends Component {
  render() {
    return (
      <View>
        <Text style={styles.HeadingText}> Elevated Cards </Text>
        <ScrollView horizontal={true} style={styles.container}>
            <View style={[styles.cards, styles.cardElevated]}>
                <Text>Tap</Text>
            </View>
            <View style={[styles.cards, styles.cardElevated]}>
                <Text>me</Text>
            </View>
            <View style={[styles.cards, styles.cardElevated]}>
                <Text>to</Text>
            </View>
            <View style={[styles.cards, styles.cardElevated]}>
                <Text>scroll</Text>
            </View>
            <View style={[styles.cards, styles.cardElevated]}>
                <Text>side</Text>
            </View>
            <View style={[styles.cards, styles.cardElevated]}>
                <Text>;-;</Text>
            </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 8,
        margin: 2

    },
    cards: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        backgroundColor: '#e83577',
        margin: 4,
        borderRadius: 5,
        // elevation: 4
    },
    cardElevated: {},
        HeadingText: {
        fontSize: 24,
        fontWeight: 'bold',
        textDecorationColor: '#333',
        paddingHorizontal: 'auto'
    }
})

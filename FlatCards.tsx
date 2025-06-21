import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class FlatCards extends Component {
  render() {
    return (
        <View>
            <Text style={styles.HeadingText}> Flat Cards</Text>
            <View style={styles.container}>
                <View style={[styles.cards, styles.CardOne]}>
                    <Text> Red </Text>
                </View>
                <View style={[styles.cards, styles.CardTwo]}>
                    <Text> Blue </Text>
                </View>
                <View style={[styles.cards, styles.CardThree]}>
                    <Text> Green </Text>
                </View>
            </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 8

    },
    cards: {
        flex: 1,
        flexDirection: 'row',
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    CardOne: {
        backgroundColor: '#ff0000'
    },
    CardTwo: {
        backgroundColor: '#0000cd'
    },
    CardThree: {
        backgroundColor: '#008000'

    },
    HeadingText: {
        fontSize: 24
    }
})

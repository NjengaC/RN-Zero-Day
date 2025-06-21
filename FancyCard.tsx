import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'

export default class FancyCard extends Component {
  render() {
    return (
      <View>
        <Text style={styles.headingText}> Trending Places </Text>
        <View style={[styles.card, styles.cardElevated]}>
            <Image
            source={{
                uri: 'https://media.istockphoto.com/id/1195696110/photo/hands-using-mobile-payments-digital-marketing-banking-network-online-shopping-and-icon.jpg?s=612x612&w=0&k=20&c=5FKhSWy-O3sqP2JXrJ6ThSGWUleeQjB4aTu8LsRt-fE='
            }}
            style={styles.cardImage}
            />
            <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>Nakuru</Text>
                <Text style={styles.cardLabel}>Molo Stadium</Text>
                <Text style={styles.cardDescription}>The largest Stadium
                    Constructed in Molo City
                </Text>
                <Text style={styles.cardFooter}>25 mins</Text>
            </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    card: {
        width: 350,
        height: 360,
        marginHorizontal: 16,
        marginVertical: 16,
        borderRadius: 6
    },
    cardElevated: {
        backgroundColor: '#ffffff',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        }
    },
    cardImage: {
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12
    },
    cardTitle: {
        color: '#000000',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4
    },
    cardLabel: {
        color: '#000000',
        fontSize: 14,
        marginBottom: 6
        // fontWeight: 'bold'
    },
    cardFooter: {
        color: '#000000'
    },
    cardDescription: {
        color: 'black',
        fontSize: 12,
        marginBottom: 12,
        marginTop: 6,
        flexShrink: 1
        // fontWeight: 'bold',
    }
})

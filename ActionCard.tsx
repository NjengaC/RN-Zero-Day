import React, { JSX } from "react";
import {
  Text,
  StyleSheet,
  View,
  Linking,
  TouchableOpacity,
  Image,
} from "react-native";

function openWebsite(websiteLink: string) {
  Linking.openURL(websiteLink);
}

export default function ActionCard(): JSX.Element {
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>What's new in React Native?</Text>
        </View>
        <Image
          source={{
            uri: "https://img.freepik.com/free-photo/representations-user-experience-interface-design_23-2150104511.jpg?semt=ais_hybrid&w=740",
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3} style={styles.bodyText}>
            React Native combines the best parts of native development with
            React, a best-in-class JavaScript library for building user
            interfaces. Use a little—or a lot. You can use React Native in your
            entire app or just a few parts.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() => openWebsite("https://reactnative.dev/")}
          >
            <Text style={styles.linkText}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openWebsite("http://portfolio-site-2ole.vercel.app/")}
          >
            <Text style={styles.linkText}>Follow Me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 8,
    marginTop: 12,
  },
  card: {
    width: 350,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  elevatedCard: {
    backgroundColor: "#FFFFFF",
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "#333",
    shadowOpacity: 0.4,
  },
  headerContainer: {
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
  },
  cardImage: {
    height: 190,
  },
  bodyContainer: {
    padding: 10,
  },
  bodyText: {
    color: "#333",
  },
  footerContainer: {
    padding: 8,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  linkText: {
    fontSize: 16,
    color: "#007AFF",
    fontWeight: "bold",
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 4
  },
});
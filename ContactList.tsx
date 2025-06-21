
import React, { JSX } from "react";
import { Text, StyleSheet, View, ScrollView, Image } from "react-native";

export default function ContactList(): JSX.Element {
  // In a real app, this data would come from an API or database
  const contacts = [
    {
      uid: 1,
      name: "Alice Johnson",
      status: "Making a new app!",
      online: true,
      imageUrl: "https://i.pravatar.cc/150?u=alicejohnson",
    },
    {
      uid: 2,
      name: "Bob Williams",
      status: "Learning React Native",
      online: true,
      imageUrl: "https://i.pravatar.cc/150?u=bobwilliams",
    },
    {
      uid: 3,
      name: "Charlie Brown",
      status: "Good grief!",
      online: false,
      imageUrl: "https://i.pravatar.cc/150?u=charliebrown",
    },
    {
      uid: 4,
      name: "Diana Prince",
      status: "Saving the world.",
      online: false,
      imageUrl: "https://i.pravatar.cc/150?u=dianaprince",
    },
    {
      uid: 5,
      name: "Mark Daniel",
      status: "Making a new app!",
      online: true,
      imageUrl: "https://i.pravatar.cc/150?u=markdaniel",
    }
  ];

  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container} scrollEnabled={true}>
        {contacts.map(({ uid, name, status, online, imageUrl }) => (
          <View key={uid} style={styles.userCard}>
            <Image source={{ uri: imageUrl }} style={styles.userImage} />
            <View style={styles.userInfo}>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
              <View
                style={[styles.onlineCheck,
                { backgroundColor: online ? "#2ecc71" : "grey" },
                ]}>
              </View>
          </View>
        ))}
      </ScrollView>
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
  container: {
    paddingHorizontal: 16,
    marginBottom: 4,
  },
  userCard: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    // backgroundColor: "#8D3DAF",
    backgroundColor: "#6502d6",
    padding: 8,
    borderRadius: 10,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 14,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  userStatus: {
    fontSize: 12,
    color: "#E0E0E0",
  },
  onlineCheck: {
    width: 14,
    height: 14,
    borderRadius: 7,
    // backgroundColor: "#2ecc71",
    borderWidth: 2,
    borderColor: "#ffffff",
    marginRight: 8,
  },
//   onlineCheckFalse: {
//     width: 14,
//     height: 14,
//     borderRadius: 7,
//     backgroundColor: "grey",
//     borderWidth: 2,
//     borderColor: "#fff",
//     marginRight: 8,
//   },
});
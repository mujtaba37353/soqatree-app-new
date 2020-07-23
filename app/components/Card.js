import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Image } from "react-native-expo-image-cache";

import Text from "./Text";
import colors from "../config/colors";

function Card({ title, subTitle, imageUrl, onPress, thumbnailUrl }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          tint="light"
          preview={{ uri: thumbnailUrl }}
          uri={imageUrl}
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.subTitle} numberOfLines={2}>
            {subTitle}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginHorizontal: 5,
    marginVertical: 5,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    height: 250,
    width: 150,
  },
  detailsContainer: {
    padding: 5,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 100,
    padding: 3,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
    marginHorizontal: 20,
  },
  title: {
    marginBottom: 10,
  },
});

export default Card;

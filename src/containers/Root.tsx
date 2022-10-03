import React from "react";
import { Text, View, StyleSheet } from "react-native";

interface RootProps {}

const Root = (props: RootProps) => {
  return (
    <View style={styles.container}>
      <Text>Root</Text>
    </View>
  );
};

export default Root;

const styles = StyleSheet.create({
  container: {},
});

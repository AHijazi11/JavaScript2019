import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  Button
} from "react-native";

function UserDirectory(props) {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>UserDirectory Component</Text>
        {/* <Image
          source={{
            uri: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          }}
          style={styles.Image}
        /> */}
        <Button title="Back to Menu" onPress={() => props.history.push("/")} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Image: {
    height: 220,
    width: 220
  }
});

export default UserDirectory;

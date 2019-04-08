import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Link
} from "react-native";

function Menu(props) {
  console.log(props);
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>Rick and Morty</Text>
        {/* <Link to="/RickMorty" style={styles.link}> */}
        <TouchableOpacity onPress={() => props.history.push("/RickMorty")}>
          <Image
            style={styles.Image}
            source={{
              uri: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            }}
          />
        </TouchableOpacity>
        {/* </Link> */}
        <Text>User Directory</Text>
        {/* <Link to="/RickMorty" style={styles.link}> */}
        <TouchableOpacity onPress={() => props.history.push("/UserDirectory")}>
          <Image
            style={styles.Image}
            source={{
              uri:
                "https://ps.w.org/dynamic-user-directory/assets/screenshot-1.jpg?rev=1638128"
            }}
          />
        </TouchableOpacity>
        {/* </Link> */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Image: {
    height: 220,
    width: 220
  },
  link: {
    paddingVertical: 12,
    paddingHorizontal: 16
  }
});

export default Menu;

import React, { useEffect, useRef, useState, RefObject } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  Platform,
  StatusBar,
} from "react-native";
import Animated from "react-native-reanimated";
import Button from "../shared/Button/Button";

const baseUrl = "https://randomuser.me/api/?seed=lol&inc=picture,name";

const item = {
  name: {
    first: "Jerry",
    last: "Cunningham",
    title: "Mr",
  },
  picture: {
    large: "https://randomuser.me/api/portraits/men/48.jpg",
    medium: "https://randomuser.me/api/portraits/med/men/48.jpg",
    thumbnail: "https://randomuser.me/api/portraits/thumb/men/48.jpg",
  },
};

const getUsers = async (
  count: number = 10,
  page: number = 1,
  callback: (users: any) => void
) => {
  const users = await fetch(`${baseUrl}&page=${page}&results=${count}`);
  const parsedUser = await users.json();
  callback(parsedUser.results);
};
const headerHeightConfig = {
  ios: 115,
  android: 70 + StatusBar.currentHeight,
  web: 70,
};
export default function MessagesTab() {
  const HEADER_HEIGHT = headerHeightConfig[Platform.OS];
  const [users, setUsers] = useState([]);
  const ref = useRef(null);
  const scrollY = new Animated.Value(0);
  const diffClampScrollY = Animated.diffClamp(scrollY, 0, HEADER_HEIGHT);
  console.log(scrollY.value)
  const headerY = Animated.interpolateNode(diffClampScrollY, {
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, -HEADER_HEIGHT],
  });

  useEffect(() => {
    getUsers(101, 1, setUsers);
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.messageContainer}>
        <Image style={styles.image} source={{ uri: item.picture.medium }} />
        <Text style={styles.text}>{item.name.first}</Text>
      </View>
    );
  };

  // const onPressScrollToStart = () => {};
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Animated.View
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: HEADER_HEIGHT,
            backgroundColor: "grey",
            zIndex: 1000,
            elevation: 1000,
            transform: [{ translateY: headerY }],
          }}
        >
          <Text style={styles.messages}>Messages</Text>
        </Animated.View>
      </View>
      {/*<Button*/}
      {/*  style={styles.ScrollToStart}*/}
      {/*  text="ScrollToStart"*/}
      {/*  onPress={onPressScrollToStart}*/}
      {/*/>*/}
      <Animated.ScrollView
        bounces={false}
        scrollEventThrottle={16}
        style={{ paddingTop: HEADER_HEIGHT }}
        onScroll={Animated.event([
          {
            nativeEvent: { contentOffset: { y: scrollY } },
          },
        ])}
      >
        <FlatList
          data={users}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ref={ref}
        />
      </Animated.ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
  },
  messageContainer:{
    display:"flex",
    flexDirection:"row",
    alignItems: 'center',
    marginBottom: 20,
    marginTop:20,
    borderBottomWidth: 1,
    borderColor: "red",
  },
  container: {
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "red",
    backgroundColor: "#000",
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 30,
  },
  messages: {
    fontSize: 20,
    textAlign: "center",
    color: "red",
    top: 40,
  },
  text: {
    marginLeft: 65,
    fontSize: 25,
    color: "#fff",
  },
  ScrollToStart: {
    minWidth: "80%",
    marginRight: "auto",
    marginLeft: "auto",
    marginBottom: 30,
    backgroundColor: "red",
    borderColor: "red",
  },
});

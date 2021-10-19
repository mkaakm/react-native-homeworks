import React, { useEffect, useRef, useState} from "react";
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
  const scrollY = useRef(new Animated.Value(0)).current;
  const diffClampScrollY = Animated.diffClamp(scrollY, 0, HEADER_HEIGHT);
  const headerY = Animated.interpolateNode(diffClampScrollY, {
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, -HEADER_HEIGHT],
    extrapolate:'clamp'
  });

  const opacity = Animated.interpolateNode(diffClampScrollY, {
    inputRange: [0, HEADER_HEIGHT, 94.1],
    outputRange: [1.8, 0, 1],
    extrapolate:'clamp'
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

  const onPressScrollToStart = () => {
    ref.current?.scrollTo({
      y : 0,
      animated : true
    });
  };
  return (
    <SafeAreaView style={styles.container}>
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
            opacity,
          }}
        >
          <Text style={styles.messages}>Messages</Text>
        </Animated.View>
      <Button
        style={styles.ScrollToStart}
        text="ScrollToStart"
        onPress={onPressScrollToStart}
      />
      <Animated.ScrollView
        ref={ref}
        bounces={false}
        scrollEventThrottle={16}
        style={styles.head}
        onScroll={Animated.event(
          [
            {
              nativeEvent: { contentOffset: { y: scrollY } },
            }
          ],
          { useNativeDriver: true }
        )}
      >
        <FlatList
          data={users}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </Animated.ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  head:{
    top:40
  },
  messageContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingTop:15,
    paddingBottom:15,
    borderBottomWidth: 1,
    borderColor: "red",
  },
  container: {
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "red",
    backgroundColor: "#000",
    paddingTop:70,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 30,
  },
  messages: {
    fontSize: 25,
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
    width:"50%",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop:20,
    backgroundColor: "red",
    borderColor: "red",
    position:'absolute',
    left:'25%',
    zIndex:900
  },
});

import React from "react";

import {useQuery } from "@apollo/client";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";

import getUser from "../../graphql/queries/getUser";
import UserInfo from "../UserInfo/UserInfo";
import UserActivity from "../UserActivity/UserActivity";
import getGallery from "../../graphql/queries/getGallery";

export default function Profile() {
  const { data, error, loading } = useQuery(getUser);
  const user = data?.findOneUser
  const {email, phone, address} = user ? user : {}

  const {data: activity} = useQuery(getGallery)
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.backgroundImage}>
          <TouchableOpacity>
            <ImageBackground
              source={require("../../../assets/Lihtman.png")}
              style={styles.backgroundImageStyles}
            ></ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={styles.avatarImage}>
          <Image
            source={require("../../../assets/Lihtman.png")}
            style={styles.avatarImageStyles}
          ></Image>
          <Text style={styles.avatarText}>Anna Likhtman</Text>
        </View>
        <UserActivity activity={activity}/>
        {loading && <Text style={styles.loading}>Loading</Text>}
        {error && <Text style={styles.loading}>{error.message}</Text>}
        {!loading && <UserInfo user={{email, phone, address}} />}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#000",
  },
  backgroundImage: {
    width: "100%",
    height: 150,
  },
  backgroundImageStyles: {
    width: "100%",
    height: 150,
  },
  avatarImage: {
    alignItems: "center",
    marginBottom: 35,
  },
  avatarImageStyles: {
    width: 140,
    height: 140,
    borderRadius: 100,
    marginTop: -70,
  },
  avatarText: {
    fontSize: 25,
    fontWeight: "bold",
    padding: 10,
    color: "#fff",
  },
  loading:{
    color: "#fff",
  }
});

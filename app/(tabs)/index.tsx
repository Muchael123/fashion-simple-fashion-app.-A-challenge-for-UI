
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard } from "react-native";

import { Colors } from "@/constants/Theme";
import Search from "@/components/Home/Search";
import Trending from "@/components/Home/Trending";


export default function App() {
  
  return (
    <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
    <View style={styles.container}>
      <Search iconType="notifications-outline" />
      <Trending />
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    padding: 10,
    gap:20
    
  },
});

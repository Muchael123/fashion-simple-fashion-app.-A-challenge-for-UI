import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from "@/constants/Theme";
import { Easing, StyleSheet } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>['name'];
  color: string;
}) {
  return <Ionicons size={28} {...props} />;
}


export default function _layout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <Tabs
          screenOptions={{
            animation: 'shift',
            tabBarActiveTintColor: Colors.secondary,
            tabBarInactiveTintColor: Colors.grey,
            tabBarHideOnKeyboard: true,
            tabBarLabelPosition: "beside-icon",
            
            tabBarItemStyle:{
                borderRadius: 30,
            },
            tabBarStyle: {
              position: "absolute",
              bottom: 8,
              borderRadius: 20,
              height: 75,
              marginHorizontal: 50,
              zIndex: 50,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
              paddingHorizontal: 10,
            },
            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: "bold",
              paddingBottom: 5,
            },
            headerShown: false,
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
                sceneStyleInterpolator: ({ current }) => ({
                    sceneStyle: {
                      opacity: current.progress.interpolate({
                        inputRange: [-1, 0, 1],
                        outputRange: [0, 1, 0],
                      }),
                    },
                  }),
              tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
              tabBarLabel: "Home",
            }}
          />
          <Tabs.Screen
            name="shop"
            options={{
              tabBarIcon: ({ color }) => (
                <Entypo name="shop" size={28} color={color} />
              ),
              tabBarLabel: "Shop",
              
            }}
          />
          <Tabs.Screen
            name="wishlist"
            options={{
              tabBarIcon: ({ color }) => (
                <SimpleLineIcons name="heart" size={28} color={color} />
              ),
              tabBarLabel: "Wishlist",
            }}
          />
          <Tabs.Screen
            name="profile"
            options={{
              tabBarIcon: ({ color }) => (
                TabBarIcon({ name: "person-outline", color: color })
              ),
              tabBarLabel: "Profile",
            }}
          />
        </Tabs>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
});

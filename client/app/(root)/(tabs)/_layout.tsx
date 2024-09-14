import { icons } from "../../constants";
import { Tabs } from "expo-router";
import {
  Image,
  ImageSourcePropType,
  View,
} from "react-native";

const TabIcon = ({
  source,
  focused,
}: {
  source: ImageSourcePropType;
  focused: boolean;
}) => (
  <View
    className={`flex flex-row justify-center items-center ${focused ? "bg-white" : ""}`}
  >
    <View
      className={`rounded-full w-10 h-10 items-center justify-center border-2  ${focused ? "bg-white border-[#71B8CA]" : "border-slate-300"}`}
    >
      <Image
        source={source}
        tintColor={ `${ focused ? "#71B8CA" : "#cbd5e1" }` }
        resizeMode="contain"
        className="w-7 h-7"
      />
    </View>
  </View>
);

const Layout = () => {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",
        tabBarShowLabel: true,
        tabBarLabelPosition: "below-icon",
        tabBarStyle: {
          // backgroundColor: "#333333",
          borderRadius: 25,
          padding: 10,
          paddingBottom: 10,
          overflow: "hidden",
          marginHorizontal: 20,
          marginBottom: 20,
          height: 76,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // flexDirection: "row",
          position: "absolute",
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "bold",
          alignContent: "flex-end",
          color: "#71B8CA"
        }
      }}
    >
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              source={icons.person}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="vitals"
        options={{
          title: "Vitals",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              source={icons.person}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              source={icons.home}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="quests"
        options={{
          title: "Quests",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              source={icons.person}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              source={icons.profile}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;

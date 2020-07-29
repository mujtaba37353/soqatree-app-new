import React, { useContext, useReducer } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AccountNavigator from "./AccountNavigator";
import FeedNavigator from "./FeedNavigator";
import ListingEditScreen from "../screens/ListingEditScreen";
import NewListingButton from "./NewListingButton";
import routes from "./routes";
import navigation from "./rootNavigation";
import useNotifications from "../hooks/useNotifications";
import AuthContext from "../auth/context";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  useNotifications();
  const { user, setUser } = useContext(AuthContext);

  const renderListingsEditScreen = () => {
    if (user && user.email === "manager.soqatree.app@gmail.com") {
      return (
        <Tab.Screen
          name="ListingEdit"
          component={ListingEditScreen}
          options={({ navigation }) => ({
            tabBarButton: () => (
              <NewListingButton
                onPress={() => navigation.navigate(routes.LISTING_EDIT)}
              />
            ),
          })}
        />
      );
    }
    return <></>;
  };
  console.log("USER", user);
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          title: "المنتجات",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      {renderListingsEditScreen()}
      <Tab.Screen
        name="Account"
        component={AccountNavigator}
        options={{
          title: "حسابي",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;

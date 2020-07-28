import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import {
  ListItem,
  ListItemDeleteAction,
  ListItemSeparator,
} from "../components/lists";

import messagesApi from "../api/messages";

function MessagesScreen(props) {
  const [messages, setMessages] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  // const getMessagesApi = useApi(messagesApi.getMessages);
  useEffect(() => {
    async function fetchData() {
      const response = await messagesApi.getMessages();
      setMessages(response.data);
    }
    fetchData();
  }, []);
  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.fromUser && item.fromUser.name}
            subTitle={item.content}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => setMessages(messages)}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;

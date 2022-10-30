import { Chat, defaultTheme, Input } from '@flyerhq/react-native-chat-ui';
import { HStack, Text } from 'native-base';
import React, { useState } from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import Header from '../../comp/Header';

// For the testing purposes, you should probably use https://github.com/uuidjs/uuid
const uuidv4 = () =>
  'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = Math.floor(Math.random() * 16);
    const v = c === 'x' ? r : (r % 4) + 8;
    return v.toString(16);
  });

function Comments() {
  const [messages, setMessages] = useState([]);
  const user = { id: '06c33e8b-e835-4736-80f4-63f44b66666c', name: 'Mathu' };

  const addMessage = (message) => {
    setMessages([message, ...messages]);
  };

  const handleSendPress = (message) => {
    const textMessage = {
      author: user,
      createdAt: Date.now(),
      id: uuidv4(),
      text: message.text,
      type: 'text',
    };
    addMessage(textMessage);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header
        title="Reviews"
        rightComp={() => (
          <TouchableOpacity>
            <HStack alignItems="center">
              <Text variant="bold" color="white">
                Next
              </Text>
              <Feather color="white" name="chevron-right" size={20} />
            </HStack>
          </TouchableOpacity>
        )}
      />

      <Chat
        showUserAvatars
        showUserNames
        messages={messages}
        onSendPress={handleSendPress}
        user={user}
        // isAttachmentUploading
        onAttachmentPress={() => Alert.alert('KKK')}
        // customBottomComponent={() => {
        //   return <Input />;
        // }}
        textInputProps={{ placeholder: 'Type Your Comment' }}
        theme={{
          ...defaultTheme,
          colors: { ...defaultTheme.colors, inputBackground: 'white', inputText: 'black' },
        }}
      />
    </SafeAreaView>
  );
}

export default Comments;

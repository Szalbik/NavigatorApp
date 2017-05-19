import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Screen 1',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hej NavBar1!</Text>
        <Button
          onPress={() => navigate('Chat')}
          title="Idź do => Screen 2"
        />
      </View>
    );
  }
}

class ChatScreen extends React.Component {
  static navigationOptions = {
    title: 'Screen 2',
  };
  render() {
    return (
      <View>
        <Text>Hej NavBar2!</Text>
      </View>
    );
  }
}

const Navigator = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
});

AppRegistry.registerComponent('Navigator', () => Navigator);

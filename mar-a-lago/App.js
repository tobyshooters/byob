import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

export class HelloWorldScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
        <Text>Hello World</Text>
    );
  }
}

export class HomeScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Hello World"
        onPress={ () =>
          navigate('HelloWorld')
        }
      />
    );
  }
}

const App = StackNavigator({
  Home:       { screen: HomeScreen },
  HelloWorld: { screen: HelloWorldScreen },
});

export default () => <App />;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

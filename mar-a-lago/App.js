import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { MapView } from 'expo';
import { StackNavigator } from 'react-navigation';
import { LoginButton, AccessToken } from 'react-native-fbsdk';

var Login = React.createClass({
  render: function() {
    return (
      <View>
        <LoginButton
          publishPermissions={["publish_actions"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("login has error: " + result.error);
              } else if (result.isCancelled) {
                alert("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => { alert(data.accessToken.toString()) }
                )
              }
            }
          }/>
      </View>
    );
  }
});

export class HelloWorldScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: -23.597732,
        longitude: -46.682186,
        latitudeDelta: 0.00922,
        longitudeDelta: 0.00421,
      },
      markers: [
        {
          coord: {
            latitude: -23.597732,
            longitude: -46.682186
          },
        }
      ],
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <MapView
        style={styles.container}
        region={this.state.region}
      >
        {this.state.markers.map(marker => (
          <MapView.Marker
            coordinate={marker.coord}
            title={marker.key}
          />
        ))}
      </MapView>
    );
  }
}

export class HomeScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button
          title="Go to Hello World"
          onPress={ () =>
             navigate('HelloWorld')
          }
        />
        <Text>Login to Facebook!</Text>
        <Login />
      </View>
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

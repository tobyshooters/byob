import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { MapView } from 'expo';
import { StackNavigator } from 'react-navigation';

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
          key: "test",
        }
      ],
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
      <MapView
        style={{ flex: 1 }}
        region={this.state.region}
      >
        {this.state.markers.map(marker => (
          <MapView.Marker
            coordinate={marker.coord}
            title={marker.key}
          />
        ))}
      </MapView>
      </View>
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

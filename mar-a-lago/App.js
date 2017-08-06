import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { MapView } from 'expo';
import { TabNavigator } from 'react-navigation';
import { challenges, bars } from './data';
import beerToken from './assets/beer.png';

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
      markers: bars,
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
            coordinate={marker.coords}
            title={marker.key}
            image={beerToken}
          />
        ))}
      </MapView>
    );
  }
}

export class ChallengesScreen extends React.Component {
  render() {
    return (
      <ScrollView>
        <List>
          {challenges.map((challenge) => (
            <ListItem
              title={challenge.nome}
            />
          ))}
        </List>
      </ScrollView>
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
      </View>
    );
  }
}

const App = TabNavigator({
  Home:       { screen: HomeScreen },
  HelloWorld: { screen: HelloWorldScreen },
  Challenges: { screen: ChallengesScreen },
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

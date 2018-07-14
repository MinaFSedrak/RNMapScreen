/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



class Main extends Component {


  constructor(props) {
    super(props);
    this.state = {
      region: {
        longitude: 31.2357,
        latitude: 30.0444,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      showServices: false
    }
  }


  toggleShowServices() {
    this.setState({
      showServices: !this.state.showServices
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          initialRegion={this.state.region}
          region={this.state.region}
          style={styles.map}
        >
          <Marker
            coordinate={this.state.region}
          />
        </MapView>

        <TouchableWithoutFeedback onPress={() => this.toggleShowServices()}>
          <View style={[styles.servicesView, this.state.showServices ? { justifyContent: 'flex-start' } : { justifyContent: 'center' }]}>
            <Icon name="square" size={13} color="black" />
            <Text style={styles.servicesText}>Services</Text>
          </View>
        </TouchableWithoutFeedback>
        {
          this.state.showServices ?
            <View style={styles.servicesInnerView}>
              <TouchableOpacity style={[styles.btn, { backgroundColor: '#fc3707', marginBottom: 10 }]} >
                <Text style={styles.btnText}>Pick & Drop Delivery</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.btn, { backgroundColor: '#072561', marginBottom: 10 }]}>
                <Text style={styles.btnText}>Captain Drivers</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.btn, { backgroundColor: '#f9bb06' }]}>
                <Text style={styles.btnText}>House Helpers</Text>
              </TouchableOpacity>
            </View>
            :
            null
        }

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  map: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0
  },

  btn: {
    alignSelf: 'stretch',
    height: 55,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },

  servicesInnerView: {
    padding: 20,
    alignSelf: 'stretch',
    marginRight: 40,
    marginLeft: 40,
    alignItems: 'center',
    backgroundColor: 'white'
  },

  servicesView: {
    flexDirection: 'row',
    marginTop: 75,
    padding: 10,
    zIndex: 2,
    height: 60,
    alignSelf: 'stretch',
    marginRight: 40,
    marginLeft: 40,
    backgroundColor: 'white',
    alignItems: 'center'
  },

  servicesText: {
    marginLeft: 10,
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold'
  },

  btnText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white'

  }

});

export { Main };

import React from 'react';
import { API_LEVEL, Package, Device, Service, Host } from 'miot';
import { PackageEvent, DeviceEvent } from 'miot';
import { View, Text } from 'react-native';
import Home from './src/HomePage';


class App extends React.Component {
    render() {
        return <Home />
    }
}
Package.entry(App, () => {

})

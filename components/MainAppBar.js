import React from 'react';
import { AppBar } from 'react-native-paper';

export default function MainAppBar(props) {
  return (
      <AppBar.Header style={{backgroundColor: props.backgroundColor}}>
        <AppBar.BackAction onPress={() => {}} />
        <AppBar.Content title={props.title} />
        <AppBar.Action icon={props.icon} onPress={props.getUserPosition} />
      </AppBar.Header>
    )
}
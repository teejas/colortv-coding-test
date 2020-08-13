import UserScreen from '../components/userScreen.js';
import React, {Component} from 'react';

const UserView = ({ route, navigation }) => {
  console.log(route.params.user)
  return <UserScreen user={route.params.user} navigate={navigation.navigate}/>
}

export default UserView;

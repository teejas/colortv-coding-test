import SearchScreen from '../components/searchScreen.js';
import React, {Component} from 'react';

const SearchView = ({ navigation }) => {
  return <SearchScreen navigate={navigation.navigate}/>
}

export default SearchView;

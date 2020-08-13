import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, FlatList} from 'react-native';
import { SearchBar } from 'react-native-elements';

import {searchUsers} from '../utils/searchUtils.js';

class SearchScreen extends Component {

  _isMounted = false;

  state = {
    search: '',
    results: null
  }

  componentDidMount = () => {
    this._isMounted = true
  }

  componentWillUnmount = () => {
    this._isMounted = false;
  }

  updateSearch = async (search) => {
    searchUsers(search).then((search_res) => {
      if(this._isMounted) {
        this.setState({
          results: search_res,
        })
      }
    });
    if(this._isMounted) {
      this.setState({
        search: search,
      })
    }
  };

  handleClick = (user_obj) => {
    this.props.navigate('User', {
      user: user_obj
    })
  }

  render() {
    const { search, results } = this.state;

    return (
      <View>
        <SearchBar
          placeholder="Search Unsplash users..."
          onChangeText={async (query) => {
            await this.updateSearch(query);
          }}
          value={search}
        />
        <FlatList
          data={results}
          renderItem={
            ({item}) =>
            <Button
              title={item.name}
              onPress={() => this.handleClick(item)}
            />
          }
        />
      </View>
    );
  }

}

export default SearchScreen;

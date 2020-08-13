import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, FlatList, Image, TouchableOpacity} from 'react-native';
import Gallery from 'react-native-image-gallery';

class UserScreen extends Component {

  _isMounted = false;

  state = {
    user_obj: this.props.user,
    profile_img_available: false,
  }

  componentDidMount = () => {
    this._isMounted = true;
    var sources = []
    if(this.state.user_obj.photos) {
      for(var i in this.state.user_obj.photos) {
        sources.push({source: {uri: this.state.user_obj.photos[i].urls.thumb}})
      }
      if(this._isMounted) {
        this.setState({
          images: sources,
        })
      }
    }
    if(this.state.user_obj.profile_image && this._isMounted) {
      this.setState({
        profile_img_available: true,
      })
    }
  }

  componentWillUnmount = () => {
    this._isMounted = false;
  }

  render() {
    if(this.state.profile_img_available) {
      return (
        <View style={styles.container}>
          <View style={styles.profile}>
            <Image
              style={styles.profile_img}
              source={{
                uri: this.state.user_obj.profile_image.large,
              }}
            />
            <Text style={styles.header1}>{this.state.user_obj.username}</Text>
          </View>
          <Gallery
            style={{ flex: 1, backgroundColor: 'black' }}
            images={this.state.images}
          />
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.profile}>
            <Text style={styles.title}>{this.state.user_obj.username}</Text>
          </View>
          <Gallery
            style={{ flex: 1, backgroundColor: 'black' }}
            images={this.state.images}
          />
        </View>
      );
    }
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "black",
    justifyContent: "center",
    //alignItems: "center"
  },
  profile: {
    flex: 0,
    padding: 12,
    backgroundColor: "white",
    //justifyContent: "center",
    //alignItems: "center"
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "green",
    borderRadius: 6,
    backgroundColor: "black",
    color: "green",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  header1: {
    marginTop: 16,
    paddingVertical: 6,
    borderWidth: 4,
    borderColor: "green",
    borderRadius: 10,
    backgroundColor: "black",
    color: "green",
    textAlign: "center",
    fontSize: 16,
  },
  header2: {
    marginTop: 16,
    paddingVertical: 4,
    borderWidth: 2,
    borderColor: "green",
    borderRadius: 10,
    backgroundColor: "black",
    color: "green",
    textAlign: "center",
    fontSize: 14,
  },
  profile_img: {
    width: 100,
    height: 100,
  },
  likebutton: {
    marginTop: 16,
    paddingVertical: 7,
    borderWidth: 3,
    borderColor: "green",
    borderRadius: 6,
    backgroundColor: "blue",
    color: "green",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    height: 200
  },
  endbutton: {
    marginTop: 16,
    paddingVertical: 7,
    borderWidth: 3,
    borderColor: "green",
    borderRadius: 6,
    backgroundColor: "red",
    color: "green",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    height: 100
  }
});


export default UserScreen;

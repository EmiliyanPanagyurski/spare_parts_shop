import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import ShopThumbnail from '../../components/shopThumbnail';

class Profile extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const favArray = Object.values(this.props.user.favorites);
    return (
      <View>
        <Image  style={{width: 150, height: 150}} source={{uri: this.props.user.image}} />
        <Text>{this.props.user.email}</Text>
        <Text>{this.props.user.password}</Text>
        <View>
          <Text>Favorite shops</Text>
          <View>
            {
              this.props.user.favorites && this.props.shops.map((shop, index) => {
                if(favArray.includes(shop.name)) {
                  return <ShopThumbnail {...shop} index={index} goTo={(index) => {}} key={index} />
                }
              })
            }
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.HomeReducer.user,
    shops: state.HomeReducer.shops
  };
};

export default connect(
  mapStateToProps
)(Profile);
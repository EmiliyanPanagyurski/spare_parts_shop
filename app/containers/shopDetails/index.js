import React, { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';
import { connect } from 'react-redux';
import MakeStoreFavorite from './actions';

class ShopDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const shop = this.props.navigation.state.params.shop;
    const favArray = Object.values(this.props.favoriteShops);
    const isFavoriteShop = favArray.includes(shop.name);
    return (
      <View>
        <Image style={{width: 150, height: 150}} source={{uri: shop.image}} />
        <Text>{shop.name}</Text>
        <Text>{shop.phone}</Text>
        {isFavoriteShop && <Button disabled={true} title="Is in favorites" onPress={() => {}} />}
        {!isFavoriteShop && <Button title="Make favorite" onPress={() => this.props.makeFavorite(this.props.navigation.state.params.shop.name)} />}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    favoriteShops: state.HomeReducer.user.favorites
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    makeFavorite: shop => dispatch(MakeStoreFavorite(shop))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopDetails);
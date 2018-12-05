import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import ShopThumbnail from '../../components/shopThumbnail/index';
import { GetUserDetails, FetchStores } from './actions';

class Home extends Component {
  constructor(props) {
    super(props);

    this.goToDetails = this.goToDetails.bind(this);
  }

  componentDidMount(){
    this.props.getShops();
    this.props.getuser();
  }

  goToDetails(index) {
    this.props.navigation.navigate('ShopDetails', {shop: this.props.shops[index]});
  }

  render() {
    const shops = this.props.shops;
    return (
      <View style={styles}>
        {
          shops && shops.map((shop, index) => {
            return <ShopThumbnail goTo={this.goToDetails} name={shop.name} image={shop.image} index={index} key={shop.name + index} />
          })
        }
      </View>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    shops: state.HomeReducer.shops,
    available: state.HomeReducer.available
  };
};

const mapDisparchToProps = (dispatch) => {
  return {
    getShops: () => dispatch(FetchStores()),
    getuser: () => dispatch(GetUserDetails())
  };
};

export default connect(
  mapStateToProps,
  mapDisparchToProps
)(Home);

const styles = StyleSheet.create ({
  container: {
     padding: 10,
     marginTop: 3,
     backgroundColor: '#d9f9b1',
     alignItems: 'center',
  },
  text: {
     color: '#4f603c'
  }
})
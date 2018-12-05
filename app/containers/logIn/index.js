import React, { Component } from 'react';
import { View, Button, TextInput, Text } from 'react-native';
import { connect } from 'react-redux';
import AuthenticateUser from './actions';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false,
      email: '',
      password: '',
      authFailed: 'Wrong password or email!',
      errorMsg: ' '
    };
    this.checkCredentials = this.checkCredentials.bind(this);
  }

  checkCredentials(email, password) {
    const credentials = {
      email: email,
      password: password
    };
    
    this.props.authenticate(credentials);
  }

  componentDidUpdate() {
    if(this.props.authenticated) {
      this.props.navigation.navigate('Home');
    }
  }

  render() {
    return(
      <View>
        {this.props.failedAuth && <Text>{this.state.authFailed}</Text>}
        {this.state.errorMsg && <Text>{this.state.errorMsg}</Text>}
        <TextInput onChangeText={(email) => this.setState({email})} />
        <TextInput onChangeText={(password) => this.setState({password})}/>
        <Button title='Login' onPress={() => this.state.email !== '' && this.state.password !== '' ? this.checkCredentials(this.state.email, this.state.password) : this.setState({errorMsg: 'Inputs must not be empty!'})}/>
        <Button title='Forgot your password?' onPress={() => alert('DumbAss!')}/>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.LoginReducer.authenticate,
    authenticating: state.LoginReducer.authenticating,
    failedAuth: state.LoginReducer.failedAuth
  };
};

const mapDisparchToProps = (dispatch) => {
  return {
    authenticate: credentials => dispatch(AuthenticateUser(credentials))
  }
}

export default connect(
  mapStateToProps,
  mapDisparchToProps
)(Login);
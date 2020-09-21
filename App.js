import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TextInput,
} from 'react-native';


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
      loaded: true,
      error: null,
      accIn: true,
    };
  }

  username = null;
  password = null;
  countryIn = null;

  baseURL = 'https://api.covid19api.com/summary';
  getData = (ev) => {
    this.setState({ loaded: false, error: null });
    let url = this.baseURL;
    let h = new Headers();
    //let p = new Path();
    //p.append('/summary');
    //h.append('X-Access-Token', '5cf9dfd5-3449-485e-b5ae-70a60e997864');

    let req = new Request(url, {
      headers: h,
      method: 'GET',
    });

    fetch(req)
      .then((response) => response.json())
      .then(this.showData)
      .catch(this.badStuff);
  };
  showData = (data) => {
    this.setState({ loaded: true, data });
    console.log(data);
  };
  badStuff = (err) => {
    this.setState({ loaded: true, error: err.message });
  };
  componentDidMount() {
    //this.getData();
    //geolocation -> fetch
  }
  //IMPORTANT!!!! Sign in code goes into the signIn function below this line
  signIn = (state) => {
    this.setState({ accIn: false });
  };
  signOut = (state) => {
    this.setState({accIn : true})
  }

  render() {
    return (
      <ScrollView>
        {!this.state.loaded && <Text style={styles.txt}> LOADING</Text>}
        <Text style={styles.txt}>Covid 19 App</Text>
        {this.state.accIn && <Button title="Sign In" onPress={this.signIn} />}
        {this.state.accIn && (
        <TextInput style={{ height: 40 }} placeholder="Username" onChangeText={text => this.username = text} />
        )}
        {this.state.accIn && (
        <TextInput style={{ height: 40 }} placeholder="Password" onChangeText={text => this.password = text} />
        )}
        {!this.state.accIn && (
          <Button
            style={{ height: 40 }}
            title="Update Global Covid Info"
            onPress={this.getData}
          />
        )}
        {!this.state.accIn && (
          <Button
            title="Update Personal Covid Info"
            onPress={this.componentDidMount}
          />
        )}
        {/*This.getData gets replaced by your function*/}
        {this.state.error && <Text style={styles.err}>{this.state.error}</Text>}

        {this.state.data && (
          <Text style={styles.txt}>
            Total Deaths: {this.state.data.Global.TotalConfirmed}
          </Text>
        )}

        {!this.state.accIn &&  <Button
            title="Logout"
            onPress={this.signOut}
          />}


       {this.state.accIn && <Text style={styles.subtxt}> Made by: Jianyu Ni and Sergio Pareja</Text>}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  txt: {
    textAlign: 'center',
    fontSize: 24,
    color: '#333',
    margin: 20,
  },
  err: {
    color: 'red',
    fontSize: 30,
    fontWeight: 'bold',
  },
    subtxt: {
    textAlign: 'center',
    fontSize: 8,
    color: '#333',
    margin: 2,
    height : 60,
  },
});

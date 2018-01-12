import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { auth } from './firebase';

import LoadingSpinner from './components/_loading-spinner/loading-spinner.component';

import { 
  LoginPage, 
  ChannelDash,
  ViewChannelPage
} from './components/pages';

import './App.css';

class App extends Component {
  state={
    loading: true,
    user: null,
  }

  componentDidMount(){
    auth().onAuthStateChanged((user)=>{
      this.setState({
        loading: false,
        user
      })
    })
  }

  render() {
    const {user, loading} = this.state;
    if(loading) {
      return (
        <div>
          <h4 style={{
            textAlign: "center", 
            margin: "40px auto",
            color: "#efefef"
            }}
          >
            Hang on a sec...
          </h4>
          <LoadingSpinner />
        </div>
      )
    }
    
    // if not logged in,
    // return sign in page
    if(!user){
      return <LoginPage/>
    }

    const toDash = ()=>(<Redirect to="/channels" />)

    const ChannelDashWithUserId = (routeProps)=>{  
      return (
        <ChannelDash 
        {...routeProps}
        userId={this.state.user.uid}
        />
      )
    }

    return (
      <div className="App">

        <Switch> 
          <Route exact path="/channels" component={ ChannelDashWithUserId }/>
          <Route path="/channels/:channelName" component={ ViewChannelPage } />
          <Route component={toDash} />
        </Switch>
        
      </div>
    );
  }
}

export default App;

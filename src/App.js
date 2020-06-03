import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MainNav, MarketTable } from './components';
import {fetchCoinsAction} from './actions/fetchCoinsAction';

class App extends Component {
  render() { 
    return (
      <div>
        <MainNav/>
        <MarketTable/>
      </div>
    );
  }
}
 
// export default App;
const mapStateToProps = state => ({
  ...state
 })
 const mapDispatchToProps = dispatch => ({
  fetchCoinsAction: () => dispatch(fetchCoinsAction())
 })

 export default connect(mapStateToProps, mapDispatchToProps)(App);
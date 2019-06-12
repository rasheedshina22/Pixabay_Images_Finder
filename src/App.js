import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Search from "./components/Search/Search";
class App extends Component {
  render() {
    return (
      <div className="app">
        <MuiThemeProvider>
          <div>
            <Navbar />
            <Search />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
export default App;

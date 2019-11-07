import React,{Component} from 'react';
// import "./App.css";
import Filter from "./filter";
import Search from './search'
import Header from './Header';



class App extends Component {
    render() {
        return (
            <div className="App">
            <Header/>
            <Search/>
            <Filter/>
            </div>
        );
    }
}
export default App;

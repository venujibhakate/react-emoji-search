import React,{Component} from 'react';
import Header from './Header';
import json from "./emojiList.json";
import "./App.css";

function searchingFor(term){
    return function(x){
        return x.keywords.toLowerCase().includes(term.toLowerCase())
         || x.title.toLowerCase().includes(term.toLowerCase())
    }
}

class App extends Component {
    constructor(props){
        super(props);
            this.state = {
                json : json,
                term: "",
        }
        this.searchHandler = this.searchHandler.bind(this);
    }

    searchHandler(event){
        this.setState({term: event.target.value})
    }
    render() {
        const {term,json} = this.state;
        return (
            <div className="App">
            <Header/>
            <form>
                <input type="text"
                onChange={this.searchHandler}
            />
            </form>
            {
            
             json.filter(searchingFor(term)).slice(0,20).map(post =>
                <div  className="filter-emoji">
                <h1>
                {post.symbol}
                {post.title}
                </h1>
            </div>
             )
             }
            </div>
        );
    }
}
export default App;



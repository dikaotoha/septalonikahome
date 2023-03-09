//Libraries
import React, {Component, Fragment} from "react";
import {
    BrowserRouter as Router ,
    Routes,
    Route,
    Link
} from "react-router-dom";

//Pages
import BlogPost from "../pages/Blogpost/Blogpost";
import LifecycleComponent from "../pages/LifecycleComponent/LifecycleComponent";
import Product from "../pages/Product/Product";
import YouTubeComponent from "../pages/YoutubeComponent/YoutubeComponent";

//CSS
import './Home.css';

class Home extends Component {
    state = {
        showComponent: true
    }

    componentDidMount(){
        // setTimeout(() =>{
        //     this.setState({
        //         showComponent: false
        //     })
        // }, 3000)
    }

    render(){
        return(
            <Router>
                <div className="navigation">
                    <Link to="/">Blog Post</Link>
                    <Link to="/product">Product</Link>
                    <Link to="/lifecycle-component">Lifecycle</Link>
                    <Link to="/youtubecomponent">Youtube</Link>
                </div>
                <Routes>
                    <Route path="/" exact element={<BlogPost />}/>
                    <Route path="/lifecycle-component" element={<LifecycleComponent/>}/>    
                    <Route path="/product" element={<Product/>}/>
                    <Route path= "/youtubecomponent" element={<YouTubeComponent/>}/>
                </Routes>
            </Router>
        )
    }
}

export default Home;
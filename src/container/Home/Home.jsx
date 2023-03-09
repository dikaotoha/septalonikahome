import React, {Component, Fragment} from "react";
import {
    BrowserRouter as Router ,
    Routes,
    Route,
    Link
} from "react-router-dom";
import BlogPost from "../Blogpost/Blogpost";

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
                <Routes>
                    <Route path="/" exact element={<BlogPost />}/>
                    {/* <Route path="/lifecyclecomponent" element={<LifeCycleComponent/>}/>    
                    <Route path="/product" element={<Product/>}/>
                    <Route path= "/youtubecomponent" element={<YouTubeComponent/>}/> */}
                </Routes>
            </Router>
        )
    }
}

export default Home;
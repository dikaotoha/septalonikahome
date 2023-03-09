import React, {Component, Fragment} from "react";
import CardProduct from "../Product/CardProduct/CardProduct";
import './Product.css';

class Product extends Component {
    state ={
        order: 0,
        name: 'Andika'
    }

    handleCounterChange = (newValue) => {
        this.setState({
            order: newValue
        })
    }

    render(){
        return(
            <Fragment>
                <div className="header">
                    <div className="logo">
                        <img src="" alt="logo_gambar" />
                    </div>
                    <div className="troley">
                        <img src="https://etanee.id/static/media/basket-blue.937a12ce.svg" alt="keranjang_belanja" />
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>
                <CardProduct onCounterChange={(value) => this.handleCounterChange(value)}/>
            </Fragment>
            
        )
    }
}

export default Product;
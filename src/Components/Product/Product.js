import React, {Component} from 'react'

class Product extends Component{
    constructor() {
        super()
        this.state = {
            pic: '',
            name: '',
            price: ''

        }
        
    }

    render(){
        const {product_id, pic, name, price} = this.props.products;
        return(
            <div>
                <h1>{this.props.products.pic}</h1>
                <h1>{this.props.products.name}</h1>
                <h1>{this.props.products.price}</h1>
                    <button>edit</button>
                    <button>delete</button>
            </div>
        )
    }



}
export default Product
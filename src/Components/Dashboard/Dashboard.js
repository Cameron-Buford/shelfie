import React, {Component} from 'react'
import Product from '../Product/Product'

class Dashboard extends Component{
    constructor(){
        super()
        this.state = {

        }
    }


    render(){
        const {deleteProduct, editProduct} = this.props

        const list = this.props.list.map((element, index) => {
            return <Product 
            key= {index} 
            products= {element}
            deleteProduct= {deleteProduct} 
            editProduct= {editProduct}/>
        })
        return(
            <div>{list}</div>
        )
    }
}



        
export default Dashboard
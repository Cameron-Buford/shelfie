import React, {Component} from 'react'
import Product from '../Product/Product'

class Dashboard extends Component{
    constructor(){
        super()
        this.state = {

        }
    }


    render(){
        const list = this.props.list.map((element, index) => {
            return <Product key= {index} products= {element}/>
        })
        return(
            <div>{list}</div>
        )
    }
}



        
export default Dashboard
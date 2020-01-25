import React, {Component} from 'react'
import Axios from 'axios'

class Form extends Component{
    constructor(){
        super()
        this.state = {

            name: '',
            price: 0,
            pic:''
        }
    }

    handleChange = ({name, value}) => {
        this.setState({[name]: value})

    }


   




    render(){
        const {name, price, pic} = this.state;
        const {submitProduct} = this.props



        return(
            <div>
                <div className= 'img-box'></div>



            <div className= 'input-boxes'>
                <div className= 'imagebox'>
                        <div className= 'image-url'>Image URL:</div>
                            <input className= 'img-input'
                                 name= 'pic'
                                value= {pic}
                                placeholder= 'image url here'
                                onChange= {(e) => this.handleChange(e.target)}
                
                            ></input>
                        
                </div>

                <div className= 'productbox'>

                    <div className= 'product-url'>Product Name:
                        <input className= 'product-input' 
                            name= 'name'
                            value= {name}
                            placeholder= 'Product Name'
                            onChange= {(e) => this.handleChange(e.target)}
                
                         ></input>
                    </div>
                </div>

                <div className= 'pricebox'>

                <div className= 'price-url'>Price:
                    <input className= 'price-input'
                        name= 'price'
                        value= {price}
                        placeholder= 'enter price'
                        onChange= {(e) => this.handleChange(e.target)}
                
                     ></input>
                </div>
            </div>

            
            
            
            <div className= 'button-box'>
                <button className= 'cancel-button'>cancel</button>

                <button className= 'add-inventory-button'
                    onClick = {() => {
                    submitProduct({name, price, pic})
                    this.setState({name: '', price: '', pic: ''})
                }}> Add to Inventory </button>

            </div>
            </div>




            


            </div>
        )
    }



}
export default Form
import React, {Component} from 'react'

class Product extends Component{
    constructor() {
        super()
        this.state = {
            edit: false,
            
            name: '',
            price: '',
            pic: ''

        }
        
    }


    componentDidMount() {
        const {name, price, pic} = this.props.products
        this.setState({name, price, pic})
    }


    editToggle = () => {
        this.setState({edit: !this.state.edit})
    }


    handleChange = ({name, value}) => {
        this.setState({[name]: value})

    }







    render(){
        const {edit, name, price, pic} = this.state;
        const {product_id} = this.props.products;
        const {deleteProduct, editProduct} = this.props;
        return(
            <div>
                {!edit ? 
                <div className= 'display-box'>
                    <h1>{this.props.products.pic}</h1>
                    <h1>{this.props.products.name}</h1>
                    <h1>{this.props.products.price}</h1>
                    <button onClick = {() => this.editToggle()}>edit</button>
                        <button onClick = {() => {
                            deleteProduct(product_id)
                            }}>delete</button>
             </div>
                : <div>
                    <input name= 'name'
                            value= {name}
                            placeholder= 'Product Name'
                            onChange= {(e) => this.handleChange(e.target)}
 
                        ></input>
                    <input name= 'price'
                            value= {price}
                            placeholder= 'enter price'
                            onChange= {(e) => this.handleChange(e.target)}
 
                    ></input>
                    <input name= 'pic'
                            value= {pic}
                            placeholder= 'image url here'
                            onChange= {(e) => this.handleChange(e.target)}
 
                     ></input>
                     <button onClick= {() => this.editToggle()}>cancel</button>
                     <button onClick= {()=> {
                         editProduct({product_id, name, price, pic})
                         this.editToggle()
                         }}>edit submit</button>

            

                </div>}
            </div>
        )
    }



}
export default Product
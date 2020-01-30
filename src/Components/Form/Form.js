import React, {Component} from 'react'
import axios from 'axios'

class Form extends Component{
    constructor(){
        super()
        this.state = {
            inventoryUrl: '/api/inventory',
            edit: false,

            name: '',
            price: 0,
            pic:''
        }
    }


    componentDidMount() {
       console.log(this.props.match.params)
        if(this.props.match.params.id){
            // console.log('hit')
            axios.get(`/api/product/${this.props.match.params.id}`).then(results => {
                const {name, price, pic}= results.data[0];
                // console.log(results.data)
                this.setState({name, price, pic, edit: true})
            })
        }
    }

    handleChange = ({name, value}) => {
        this.setState({[name]: value})

    }

    submitProduct = (products) => {
        const {inventoryUrl} = this.state
        axios.post(inventoryUrl, products).then( results => {
            // this.setState({products: results.data})
            this.props.history.push('/')
        }).catch(err => console.log(err))
    
    
    
    }

    editProduct= () => {
        const {inventoryUrl, name, price, pic} = this.state
        console.log(true)
        axios.put(`${inventoryUrl}/${this.props.match.params.id}`, {name, price, pic}).then( results => {
            // this.setState({products: results.data})
            this.props.history.push('/')
        }).catch(err => console.log(err))
    
    
    
    }

    


   




    render(){
        const {name, price, pic} = this.state;
        // const {submitProduct} = this.state
        // console.log(this.props)



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
                <button className= 'cancel-button' onClick= {() => this.props.history.push('/')}>cancel</button>

               {!this.state.edit ? <button className= 'add-inventory-button'
                    onClick = {() => {
                    this.submitProduct({name, price, pic})
                    this.setState({name: '', price: '', pic: ''})
                }}> Add to Inventory </button> :
                <button 
                onClick = {() => {
                    this.editProduct()
                }}
                
                >Update</button>
            }

            </div>

            </div>




            


            </div>
        )
    }



}
export default Form
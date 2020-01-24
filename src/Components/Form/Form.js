import React, {Component} from 'react'

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


    submitProduct() {

    }





    render(){
        const {name, price, pic} = this.state;


        return(
            <div>
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
            </div>
        )
    }



}
export default Form
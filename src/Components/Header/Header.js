import React, {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'

class Header extends Component{
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return (
            
            <header className= 'header'>Shelfie
                <Link to='/'>Dashboard</Link>
                <Link to='/form'>Add Inventory</Link>
            </header>
            
        )
    }



}
export default withRouter(Header)
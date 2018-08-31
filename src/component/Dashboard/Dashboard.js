import React, {Component} from 'react'
import Product from '../Product/Product'

class Dashboard extends Component{
render(){
    const list = this.props.inventory.map((e, i)=>{
        return(
            <h1 key={i}>{e}</h1>
        )
    })
    return(
        <div>Dashboard
        <Product/>
        </div>

    )
}
}

export default Dashboard
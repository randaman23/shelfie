import React, {Component} from 'react'
import Product from '../Product/Product'

class Dashboard extends Component{
render(){
    const list = this.props.inventory.map((product, i)=>{
       return(
           <div key={i}>
               {product}
           </div>
       )
    })
    return(
        <div>Dashboard
        <Product
        // delete={this.props.delete}
         />
        {list}
        </div>

    )
}
}

export default Dashboard
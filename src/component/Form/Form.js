import React, {Component} from 'react'
import axios from 'axios'

class Form extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'',
            price:0,
            imageurl:''
        }
        this.baseState = this.state
        this.handleCancel=this.handleCancel.bind(this)
        // this.addNewProduct=this.addNewProduct.bind(this)
    

    }
    componentDidMount(){
        axios.post('/api/product', {name:this.state.name, price:this.state.price, image_url:this.state.imageurl})
        .then((res)=>this.setState({name:res.data, price:res.data, image_url:res.data}), this.props.get()) //??
        // this.props.get()
    }

    handleName(val){
        this.setState({name:val})
    }

    handlePrice(val){
        this.setState({price:val})
    }

    handleImage(val){
        this.setState({imageurl:val})
    }

    handleCancel(){
        this.setState(this.baseState)
    }

    




    render(){
        return(
            <div>Form
                {/* {this.props.get} this is the prop from app.js for componentDidMount */}
            <input onChange={(e)=>this.handleName(e.target.value)} type="text"placeholder = 'Name'/>
            <input onChange={(e)=>this.handlePrice(e.target.value)}type="text" placeholder='Price'/>
            <input onChange={(e)=>this.handleImage(e.target.value)} type="text" placeholder='ImageUrl'/>
            <button onClick={this.handleCancel}>Cancel</button>
            <button onClick={this.componentDidMount}>Add to Inventory</button>
            </div>
            
        )
    }
}

export default Form
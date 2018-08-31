import React, {Component} from 'react'

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
            <input onChange={(e)=>this.handleName(e.target.value)} type="text"/>
            <input onChange={(e)=>this.handlePrice(e.target.value)}type="text"/>
            <input onChange={(e)=>this.handleImage(e.target.value)} type="text"/>
            <button onClick={this.handleCancel}>Cancel</button>
            <button>Add to Inventory</button>
            </div>
            
        )
    }
}

export default Form
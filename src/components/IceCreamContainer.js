import { connect } from 'react-redux'
import React from 'react'
import {buyIceCream} from '../Redux/indux'

function IceCreamContainer(props) {
  return (
    <div>
        <h2>Number of iceCreams - {props.numOfIceCream}</h2>
        <button onClick={props.buyIceCream}>Buy Icecream</button>
    </div>
  )
}


const mapStateToProps = state=>{
  return{
    numOfIceCream:state.iceCream.numOfIceCream
  }
}

const mapDispatchToProps = dispatch=>{
  return{
    buyIceCream:()=>dispatch(buyIceCream())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer)
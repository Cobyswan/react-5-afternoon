import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import {realEstateAgentFound} from '../../ducks/reducer'

class WizardFive extends Component {

    render(){
        return(
            <div className="parent-div">
                    <div className="vert-align">    

                    <p>Are you currently working with a real estate agent?</p> <br />
                    <div className="row">
                        <Link to="/wSix"><button value='True' onClick={(e) => this.props.realEstateAgentFound(e.target.value)}>Yes</button></Link>
                        <Link to="/wSix"><button value='False' onClick={(e) => this.props.realEstateAgentFound(e.target.value)}>No </button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        found: state.found
    }
}

export default connect(mapStateToProps, {realEstateAgentFound})( WizardFive);
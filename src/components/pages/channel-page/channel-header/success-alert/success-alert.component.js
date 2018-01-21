import React from 'react';
import PropTypes from 'prop-types';

class SuccessAlert extends React.Component{
    componentDidMount(){
        setTimeout(() => {
            this.props.handleClose();
        }, 1000);
    }

    render(){
        return (
            <div
            style={{
                position: "fixed",
                top: "100px",
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                flexDirection: "row",
                backgroundColor: "rgba(30,30,30,.9)",
                color: "rgb(250,250,250)",
                padding: "15px",
                borderRadius: "10px"
            }}
            >

                <i className="fa fa-check"/> 
                <span 
                style={{
                    marginLeft: "10px",
                }}>
                    Success
                </span>
            </div>
        )
    }
}

SuccessAlert.propTypes = {
    handleClose: PropTypes.func.isRequired
}

export default SuccessAlert;
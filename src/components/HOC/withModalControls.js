import React from 'react';

export default (WrappedComponent)=>{
    return class extends React.Component {
        state={
            openModalName: ""
        }

        toggleModal=(modalName)=>{
            const openModal = 
                (modalName === this.state.openModalName) ?
                    "" : modalName;

            this.setState({
                openModal
            })
        }

        
        render(){
            return (
                <WrappedComponent
                openModalName={this.state.openModalName}
                handleToggle={this.toggleModal}
                />
            )
        }
    }
}
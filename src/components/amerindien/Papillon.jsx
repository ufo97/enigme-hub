import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

class Papillon extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <Draggable draggableId={this.props.id} index={this.props.index}>
            {(provider, snapshot) => (
                <span
                {...provider.draggableProps}
                {...provider.dragHandleProps}
                ref={provider.innerRef} >
                    
                    <img 
                        src={require(`../../assets/images/amerindien/pap_${this.props.id}.png`)} 
                        id={`pap-${this.props.id}`} 
                        className={`papillon ${this.props.class}`} />
                
                </span>
            )}
        </Draggable>
            
      );
    }
  }

export default Papillon;
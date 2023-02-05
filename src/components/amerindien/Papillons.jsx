import React from 'react';

import Papillon from './Papillon';

import { Droppable } from 'react-beautiful-dnd';

class Papillons extends React.Component {
    constructor(props) {
      super(props);
    }

    handleOnDragStart() {

    }

    render() {
      return (
        <Droppable droppableId={"papillons"}>
            {(provided, snapshot) => (
                <div id="#papillons"
                {...provided.droppableProps}
                ref={provided.innerRef} >
                  {this.props.papillons.map((papillon, index) => (
                    <Papillon id={papillon} index={index} />
                  ))
                  }
            </div>
            )}
                
        </Droppable>
        );
    }
  }

export default Papillons;
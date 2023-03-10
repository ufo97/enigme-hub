import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Papillon from './Papillon.jsx';
import '../../assets/css/Step5.css';

class DroppableImage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ...this.props
        }
    }

    render() {
        const isFirefox = typeof InstallTrigger !== 'undefined';
        const classImage = "on-image" + (isFirefox ? "-firefox" : "");

        return <Droppable droppableId={this.state.id}>
            {(provided, snapshot) => (
                <div
                {...provided.droppableProps}
                ref={provided.innerRef} 
                className={"droppable-img"}>
                    <img src={this.state.src}/>
                    {this.props.papillonIn[0] &&
                        <Papillon id={this.props.papillonIn[0]} index={0} class={classImage}/>
                    }
                
                </div>
            )}
                
        </Droppable>
    }
}

export default DroppableImage;
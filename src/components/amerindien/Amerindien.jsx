import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import '../../assets/css/style.css';
import '../../assets/css/Step5.css';


import Logo from '../common/Logo.jsx';
import Background from '../../assets/images/amerindien/LKehBI.jpg';
import Parchemin from './Parchemin';
import Papillons from './Papillons';
import DroppableImage from './DroppableImage';


import ImgConseil from '../../assets/images/amerindien/conseil.png';
import ImgDanger from '../../assets/images/amerindien/danger.png';
import ImgDeath from '../../assets/images/amerindien/death.png';
import ImgLuck from '../../assets/images/amerindien/luck.png';
import ImgPerte from '../../assets/images/amerindien/perte.png';
import Heros from '../../assets/images/heros/hero_marche.png';

import wording from '../../wording.json';


class Amerindien extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ...this.props,
            dataPapillons: wording.histoire5.initialData,
            imgTab: [
                [
                    ImgLuck,
                    ImgPerte,
                    ImgDanger
                ],
                [
                    ImgDeath,
                    ImgConseil
                ]
            ]
        }
    }

    checkIfSolved() {
        let solved = true;
        for (const soluce in wording.histoire5.solution) {
            this.state.dataPapillons.papillonsPlaces.forEach(obj => {
                for (const key in obj) {
                    if (key == soluce) {
                        if (obj[key][0] != wording.histoire5.solution[soluce]) {
                            solved = false;
                        }
                    }
                }
            })
        }
        return solved;
    }

    handleOnDragEnd = result => {
        const { destination, source, draggableId } = result;

        if (!destination || destination.droppableId == source.droppableId) return;

        let tmpDataPapillons = {...this.state.dataPapillons};
    
        let draggedSuccessful = false;
        tmpDataPapillons.papillonsPlaces.forEach(obj => {
            for (const key in obj) {
                if (key == destination.droppableId) {
                    if (obj[key].length > 0) {
                        tmpDataPapillons.papillonsInit.push(obj[key][0]);
                        obj[key] = [];
                    }
                    obj[key].push(draggableId);
                    draggedSuccessful = true;
                } else if (key == source.droppableId) {
                    obj[key] = [];
                }
            }
        })

        if (draggedSuccessful) {
            tmpDataPapillons.papillonsInit = tmpDataPapillons.papillonsInit.filter(item => item !== draggableId);
        }

        this.setState(prevstate => ({
            ...prevstate,
            dataPapillons: tmpDataPapillons
        }), () => {
            if (this.checkIfSolved()) {
                window.location.replace(wording.baseUrl + '/final');
            }
        })
    }

    render() {
        const rowsImages = this.state.dataPapillons.papillonsPlaces.map((line, i) => {
            return (
                <div className={"row"}>
                    {Object.entries(line).map((val, index) => {
                        return <DroppableImage src={this.state.imgTab[i][index]} id={val[0]} papillonIn={val[1]}/>;
                    })}
                </div>
            );
        })

        return (
            <div className="amerindien">
                <img src={Background} id="bg" />
                <DragDropContext onDragEnd={this.handleOnDragEnd.bind(this)}>
                    <Papillons papillons={this.state.dataPapillons.papillonsInit} />
                    <div class='rows'>
                        {rowsImages}
                        <div class='row'>
                            <img src={Heros} id={"heros"} />
                            <Parchemin />
                        </div>
                    </div>
                </DragDropContext>
            </div>
        );
    } 
}

export default Amerindien;
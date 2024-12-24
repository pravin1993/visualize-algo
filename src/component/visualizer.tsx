import React, { useContext, useEffect } from 'react'
import AnimateVisualizerComponent from './AnimateVisualizerComponent';
import { useAlgo } from '@/hooks/useAlgo';
import { Context } from './ContextProvider';

function Visualizer() {

    const {swapPositions, highlightPositions, dataArr, sorted} = useAlgo()
    // console.log( {swapPositions, highlightPositions})
    return (
        <AnimateVisualizerComponent toSwap={swapPositions} sorted={sorted} highlightPositions={highlightPositions} dataArr={dataArr}/>
    )
  
}

export default Visualizer;

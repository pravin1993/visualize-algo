import AnimateVisualizerComponent from './AnimateVisualizerComponent';
import { useAlgo } from '@/hooks/useAlgo';
function Visualizer() {

    const {swapPositions, highlightPositions, dataArr, sorted} = useAlgo()
    // console.log( {swapPositions, highlightPositions})
    return (
        <AnimateVisualizerComponent toSwap={swapPositions} sorted={sorted} highlightPositions={highlightPositions} dataArr={dataArr}/>
    )
  
}

export default Visualizer;

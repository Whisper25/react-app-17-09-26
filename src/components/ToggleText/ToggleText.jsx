import {useState} from 'react';
import Icon from '@mdi/react';
import { mdiArrowDownDropCircleOutline } from '@mdi/js';
import { mdiArrowUpDropCircleOutline } from '@mdi/js';
const ToggleText = () => {
    const colors=['red', 'blue', 'purple', 'orange', 'gray']
    const [color, setColor] = useState('#ffaa00');
    const changeColor =()=>{
        setColor{colors.at(Math.random()*colors.length)};
    }
    const [close, setClose] = useState(true);
    console.log(close);
    const changeClose = ()=>{setClose(!close)};
    return (
        <div style={{backgroundColor: color}, onClick={changeColor}}>
            <h2>Title <span onClick={changeClose}>{close?<Icon path={mdiArrowDownDropCircleOutline} size={1} color='red'/>:<Icon path={mdiArrowUpDropCircleOutline} size={1} color='gray'/>}</span></h2>
            {close && <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, aperiam!</p>}
        </div>
    );
}

export default ToggleText;

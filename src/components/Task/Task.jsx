import PropTypes from 'prop-types';
import styles from './Task.module.css';

const Task = (props) => {
    const {dataTask:{text, days=2, isDone}, setDoneTask} = props;
    const setDone = () => setDoneTask()
    return (
        <div className={styles.task}>
            <p style={{color: isDone ?'green' : 'red'}}>{text}</p>
            <p>{days}</p>
            <button onClick={setDone}>done</button>
        </div>
    );
};


Task.propTypes = {
    dataTask: PropTypes.shape({
    id: PropTypes.number,    
    text: PropTypes.string.isRequired,
    days: PropTypes.number.isRequired,
    isDone: PropTypes.bool,
}),
setDoneTask: PropTypes.func,
}





export default Task;

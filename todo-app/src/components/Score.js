import React from 'react';


const Score = ({todos}) => {

    const completed = () => {
        let completed = todos.filter((todo)=> todo.done == true);
        return completed.length;
    }

    const incompleted = () => {
        let incompleted = todos.filter((todo)=> todo.done != true);
        return incompleted.length;
    }

    return(
        <div className='score'>
            <div className='score-wrap'>
<p className='score-completed'>Completed: {completed()}</p>
<p className='score-incompleted'>Incompleted: {incompleted()}</p>
</div>
</div>
)
}

export default Score;
import React from 'react'

interface IDisplayBoard {
    numberOfUsers: number;
    // getAllUsers: Function;
}

function DisplayBoard({numberOfUsers}: IDisplayBoard) {

    return(
        <div className="display-board">
            <h4 style={{color: 'white'}}>Created</h4>
            <div className="number">
            {numberOfUsers}
            </div>
            {/*<div className="btn">*/}
            {/*    <button type="button" onClick={(e) => getAllUsers()} className="btn btn-warning">Get all Users</button>*/}
            {/*</div>*/}
        </div>
    )
}

export default DisplayBoard
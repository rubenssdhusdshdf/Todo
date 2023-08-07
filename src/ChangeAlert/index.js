import React from 'react';
import { withStorageListener } from './withStorageListener';
import './ChangeAlert.css';

function ChangeAlert({ show, toggleShow }) {
  if (show) {
    return(
        <div className='changeAlert-bg'>
          <div className='ChangeAlert-container'>
            <p>It seems you have changes all your Todos in other tab or window</p>
            <p>Would you like to change your toDos?</p>
            <button
              className="TodoForm-button TodoForm-button--add"
              onClick={toggleShow}
              >
                Yes!
            </button>
          </div>
        </div>
        
    );
  }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };
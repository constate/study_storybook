import React, { useState } from 'react';
import { Reset } from 'styled-reset';
// import { Button } from './components/Button/Button';
import { Button } from './stories/Button';
import { Modal } from './components/Modal/Modal';
import './App.css';

const App = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const drawLog = () => {
        console.log('동작');
        setIsOpenModal(true);
    };
    return (
        <>
            <Reset />
            <Button primary={true} label={'버튼을 눌러봐'} onClick={drawLog} />
            <Button primary={true} label={'버튼을 눌러봐'} onClick={drawLog} />
            <Button primary={true} label={'버튼을 눌러봐'} onClick={drawLog} />
            <Button primary={true} label={'버튼을 눌러봐'} onClick={drawLog} />
            {isOpenModal && <Modal hasBackground={true} />}
        </>
    );
};

export default App;

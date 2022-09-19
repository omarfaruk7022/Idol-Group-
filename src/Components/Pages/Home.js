import React from 'react';
import Documents from './Documents';
import Equipment from './Equipment';
import MedicalStaff from './MedicalStaff';
import Others from './Others';

const Home = () => {
    return (
        <div className='lg:px-28'>
            <Documents/>
            <MedicalStaff/>
            <Equipment/>
            <Others/>
        </div>
    );
};

export default Home;
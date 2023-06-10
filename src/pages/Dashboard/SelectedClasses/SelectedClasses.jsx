import React from 'react';
import useSelectedClass from '../../../hooks/useSelectedClass';

const SelectedClasses = () => {
    const {data}=useSelectedClass()
    console.log(data);
    return (
        <div>
            selectedClasses
        </div>
    );
};

export default SelectedClasses;
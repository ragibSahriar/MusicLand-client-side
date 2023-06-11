import React from 'react';
import AllClassHook from '../hooks/AllClassHook';
import AllClassSection from './AllClassSection';

const Classes = () => {

        const [data, refetch] = AllClassHook();
      console.log(data);
    return (
        <div className='grid grid-cols-3 container mx-auto mt-10'>
            {
                data.map(classes => <AllClassSection key={data._id}
                classes={classes}></AllClassSection>)
            }
        </div>
    );
};

export default Classes;
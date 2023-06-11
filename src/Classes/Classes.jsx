import React from 'react';
import AllClassHook from '../hooks/AllClassHook';
import AllClassSection from './AllClassSection';

const Classes = () => {

        const [data, refetch] = AllClassHook();
      console.log(data);
    return (
        <div>
            {
                data.map(classes => <AllClassSection key={data._id}
                classes={classes}></AllClassSection>)
            }
        </div>
    );
};

export default Classes;
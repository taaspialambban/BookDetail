import React, { useEffect, useState } from 'react';
import { getItem } from '../../Utils';
import ReadPage from './ReadPage';

const ReadPages = () => {
    const [data , setData] = useState([]);
    useEffect(()=>{
        const storeData = getItem()
        setData(storeData)

    },[])
    console.log(data)
    return (
        <div>
            <div className='flex flex-col gap-6 mt-9'>
                {
                    data.map(d => <ReadPage d={d}></ReadPage>)
                }
            </div>
        </div>
    );
};

export default ReadPages;
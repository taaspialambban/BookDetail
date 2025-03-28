import React, { useEffect, useState } from 'react';
import { getItem } from '../Utils';

// import React, { PureComponent } from 'react';
import { BarChart, Bar, ResponsiveContainer ,XAxis , YAxis, Tooltip} from 'recharts';

const PageRead = () => {
    const [pages , setPages] = useState([]);
    const[wishPage , setWishPage] = useState([])
    useEffect(()=>{
        const totalPages = getItem()
        setPages(totalPages);
        const totalWishPages = getItem('wishlist')
        setWishPage(totalWishPages)
    },[])
    console.log(pages)

    console.log(wishPage)
    return (
        
        <div className='flex'>    
            <div>
                
                <ResponsiveContainer width={250} height={300}>
                <BarChart width={300} height={200} data={pages}>
                        <XAxis dataKey={'bookName'}></XAxis>
                        <YAxis dataKey={'totalPages'}></YAxis>
                        <Tooltip></Tooltip>
                        <Bar dataKey='totalPages' fill="red"
                        ></Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div>
                <ResponsiveContainer width={250} height={300}>
                    <BarChart width={300} height={200} data={wishPage}>
                        <XAxis dataKey={'bookName'}></XAxis>
                        <YAxis dataKey={'totalPages'}></YAxis>
                        <Tooltip></Tooltip>
                        <Bar dataKey='totalPages' fill="red"
                        ></Bar>
                    </BarChart>
                   
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default PageRead;
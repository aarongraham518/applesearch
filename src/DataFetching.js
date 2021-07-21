import React, {useState, useEffect} from 'react'
import axios from 'axios';

function DataFetching() {
    const[post, setPost] = useState([])
    const[searchName, setSearchName] = useState('Hello');

    useEffect(() => {
        axios.get(`https://itunes.apple.com/search?term="${searchName}&limit=5`)
            .then(res => {
                console.log(res.data.results)
                setPost(res.data.results);
            })
            .catch(err => {
                console.log(err)
            })
        }, [searchName])

    return (
        <div>
            <input type="text" value={searchName} onChange={e => setSearchName(e.target.value)}/>
            <div>{post.artistName}</div>
            <ul>
                {
                    post.map((post, index) => <li key={index}>Artist Name: {post.artistName} - Country: {post.country} - Album Price: {post.collectionPrice}</li>)
                }
            </ul>
        </div>
    )
}

export default DataFetching

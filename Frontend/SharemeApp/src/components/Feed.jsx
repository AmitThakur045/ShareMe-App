import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

import { client } from '../client';
import { searchQuery } from '../utils/data';
import MasonryLayout from "./MasonryLayout";
import Spinner from "./Spinner";

const Feed = () => {
    const [loading, setLoading] = useState(false);
    const [pins, setPins] = useState(null);
    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);
        if(categoryId) {
            // fetching post for a specific category using categoryId
            const query = searchQuery(categoryId);

            client.fetch(query)
                .then((data) => {
                    setPins(data);
                    setLoading(false);
                })
        } else {

        }
    }, [categoryId])

    if(loading) return <Spinner message="We are adding new ideas to your feed!" />

    return (
        <div>
            feed
        </div>
    )
}

export default Feed;

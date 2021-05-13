import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Rating from '../components/Rating';



function Item(props) {

 const {id} = useParams()
    const [item, setItem] = useState({

    });
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(false);

    useEffect(() => {

        const loadData = async () => {
            try {
                //            setLoading(true);
                const { data } = await axios.get('/api/items/' + id);
                //             setLoading(false);
                setItem(data);
            }
            catch (err) {
                //             setError(err.message);
                //             setLoading(false);
            }
        };
        loadData();
    }, []);



    if (!item) {
        return <div> No Product Found </div>;
    }
    return (
        <main>
        <div>
            <Link to='/'>Return to Results</Link>
            <div className="top row">
                <div className="col-2">
                    <img className="large" src={item.image} alt={item.name} />
                </div>
                <div className="col-1">
                    <ul>
                        <li>
                            <h2>{item.name}</h2>
                        </li>
                        <li>
                            <Rating rating={item.rating} reviews={item.reviews} />
                        </li>
                        <li>
                            Price: ${item.price}
                        </li>
                        <li>
                            Description: {item.description}
                        </li>
                    </ul>
                </div>
                <div className="col-1">
                    <div className="card-body card">
                        <ul>
                            <li>
                                <div className="row">
                                    <div>Price: </div>
                                    <div className="price">${item.price}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Status: </div>
                                    <div>{item.stock > 0 ? (<span className="inStock"> In Stock</span>) : (<span className="noStock"> Unavailable</span>)}
                                    </div>
                                </div>
                            </li>
                            <li>
                                <button className="block">Add to Cart</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </main>
    );
}

export default Item;
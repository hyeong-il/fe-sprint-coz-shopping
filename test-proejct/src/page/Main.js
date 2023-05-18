import React, {useState, useEffect} from 'react';
import Filter from '../components/Filter';


const Main = () => {
    const [product, setProduct] = useState([]);
    let getBookMark = [];
    if(localStorage.getItem("bookmark")) {
        getBookMark = JSON.parse(localStorage.getItem("bookmark"))
    }
    useEffect(()=> {
        fetch("http://cozshopping.codestates-seb.link/api/v1/products?count=4")
        .then((res) => res.json())
        .then((data) => setProduct(data))
    },[]);

    return (
        <div>
            <div className='main'>
                <div className='main_container'>
                    <div className='sub_container'>
                        <h2 className='main_title'>상품 리스트</h2>
                        <Filter product = {product}
                                bookMarkData = {getBookMark}/>
                    </div>
                    <div className='sub_container'>
                        <h2 className='main_title'>북마크 리스트</h2>
                        {getBookMark.length >0 ? 
                        <Filter bookMarkData = {getBookMark}
                                product={getBookMark.slice(0,4)}/>: ''}
                    </div>
                </div>
            </div>
        </div>
        );
    }

    export default Main;
import React from 'react';
import {Link} from 'react-router-dom';
import {AiOutlineGift} from "react-icons/ai"
import {BsStar} from "react-icons/bs";

export default function Dropdown() {
    return (
        <div className='dropdown'>
            <section className='menus'>
                <div className='menu'>OOO님, 안녕하세요!</div>
                <Link to='/productlist' className='menu'>
                    <AiOutlineGift size='22px' /> 상품리스트 페이지
                </Link>
                <Link to='/bookmark' className='menu'>
                    <BsStar size='20px' /> 북마크 페이지
                </Link>
            </section>
        </div>
    );
}
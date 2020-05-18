import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({ foodDetail, onClickHandler }) => {

    const { id, title = '', image, store, description, rating } = foodDetail;
    const imageUrl = image;
    return (
        <div
            className={`menu-item`}>
            <div className='background-image'
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className='content'>
                <div className='content-header'>
                    <span className='content-title'> {title.toUpperCase()}</span>
                    <span className='rating'>
                        <button data-id_key={id}
                            onClick={onClickHandler} >Buy</button>
                    </span>
                </div>
                <div className='description'>{store}</div>
            </div>
        </div>
    )
}

export default MenuItem;
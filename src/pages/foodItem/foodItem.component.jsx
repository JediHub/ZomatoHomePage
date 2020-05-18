import React from 'react';
import './foodItem.styles.scss';

function FoodItem({ itemDetail }) {
    const { title = '', image, description } = itemDetail;
    const imageUrl = image;
    return (
        <div
            className={`foodItem`}>
            <div className='background-image'
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className='content'>
                <div className='content-header'>
                    <span className='content-title'> {title.toUpperCase()}</span>
                </div>
                <div className='description'>{description}</div>
            </div>
        </div>
    )
}

export default FoodItem;
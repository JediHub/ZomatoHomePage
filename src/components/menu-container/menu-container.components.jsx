import React from 'react';
import './menu-container.styles.scss';
import MenuItem from '../../components/menu-item/menu-item.component';

const MenuContainer = ({ foodList = [], selectFoodHandler }) => {
    return (
      <div className="menuContainer">
            {foodList.map(item => <MenuItem key={item.id} foodDetail={item} onClickHandler={selectFoodHandler} />
            )}
      </div>
    )
}

export default MenuContainer;
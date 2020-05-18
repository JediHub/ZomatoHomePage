import React from 'react';

import './homepage.styles.scss';
import MenuContainer from '../../components/menu-container/menu-container.components';

function HomePage(props) {
    return (
        <div className="HomePage">
            <MenuContainer {...props}>
            </MenuContainer>
        </div>
    );
}

export default HomePage;
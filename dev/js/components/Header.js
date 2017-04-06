import React from 'react';
import App_Bar from 'material-ui/AppBar';

const styles = {
    title: {
        cursor: 'pointer',
    },
};

const Header = () => {
    return (
        <div>
            <App_Bar
                className="header"
                title={<span style={styles.title} href="localhost:3000">To-Do App</span>}
                showMenuIconButton={false}
                iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
        </div>
    );
};

export default Header;
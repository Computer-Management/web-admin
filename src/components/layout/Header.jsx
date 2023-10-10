import React from 'react';
import Text from '../ui/Text';
import Button from '../ui/Button';

const Header = () => {
    const test = () => {
        console.log('ABC');
    };

    return (
        <header>
            <Text>ABC</Text>
            <Button onClick={test}>Test Submit</Button>
        </header>
    );
};

export default Header;

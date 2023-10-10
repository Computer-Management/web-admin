import React from 'react';
import Text from '../ui/Text';
import { Button } from '../ui/Button';

const Header = () => {
    return (
        <header>
            <Text as={'span'} color="#fff">
                This is header
            </Text>
            <Button>Button</Button>
        </header>
    );
};

export default Header;

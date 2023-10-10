import styled from 'styled-components';
import { colors } from '../../shared/theme/colors';
import {
    color,
    space,
    layout,
    flexbox,
    gridArea,
    position,
    textStyle,
    colorStyle,
    typography,
    fontWeight,
    fontSize
} from 'styled-system';

const Text = styled.span`
    word-break: ${p => p.wordBreak || 'normal'};
    word-wrap: ${p => p.wordWrap || 'normal'};
    word-spacing: ${p => p.wordSpacing || 'normal'};
    user-select: ${p => p.userSelect || 'auto'};
    cursor: ${p => p.cursor || 'inherit'};
    border: ${p => p.border || ''};
    border-bottom: ${p => p.borderBottom || ''};
    text-decoration: ${p => p.textDecoration || 'none'};
    white-space: ${p => p.whiteSpace || 'normal'};
    align-items: ${p => p.alignItems || 'stretch'};
    transition: ${p => p.transition || 'none'};
    transform: ${p => p.transform || 'none'};
    background-color: ${p => p.backgroundColor || 'transparent'};
    text-transform: ${p => p.textTransform || 'initial'};
    ${color};
    ${space};
    ${layout};
    ${flexbox};
    ${gridArea};
    ${position};
    ${textStyle};
    ${colorStyle};
    ${typography};
    ${fontWeight};
    ${fontSize};
`;

Text.defaultProps = {
    as: 'p',
    color: colors.text[0],
    wordBreak: 'normal',
    userSelect: 'auto',
    cursor: 'default',
    textDecoration: 'none',
    fontSize: '16px'
};

Text.displayName = 'Text';

export default Text;

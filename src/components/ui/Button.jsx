import styled, { css } from 'styled-components';
import { switchProp } from 'styled-tools';
import { colors } from '../../shared/theme/colors';

const Button = styled.button`
    cursor: ${p => (p.disabled || !p.cursor ? 'default' : p.cursor)};
    opacity: ${p => (p.disabled ? 0.5 : 1)};
    padding: 4px 24px;
    font-weight: 400;
    min-width: 0;
    font-style: normal;
    box-sizing: border-box;
    outline: none;
    overflow: hidden;
    border-radius: 5px;
    text-align: center;
    font-size: 16px;
    line-height: 24px;

    transition: 0.3s all;
    ${switchProp('variant', {
        primary: css`
            color: ${colors.white};
            background-color: ${colors.primary};
            border: 1px solid ${colors.primary};

            &:hover {
                background-color: ${colors.white};
                color: ${colors.primary};
            }

            &:active {
                background-color: ${colors.secondary};
                color: ${colors.white};
            }
        `,
        outline: css`
            border: 1px solid ${colors.primary};
            color: ${colors.primary};

            &:hover {
                background-color: ${colors.primary};
                color: ${colors.white};
            }

            &:active {
                background-color: ${colors.secondary};
                color: ${colors.white};
            }
        `,
        icon: css`
            border: none !important;
            background-color: unset !important;
            padding: 0 !important;
            outline: none !important;
            width: fit-content;
            height: fit-content;
        `
    })}
`;

Button.defaultProps = {
    variant: 'primary',
    cursor: 'pointer'
};

Button.displayName = 'ButtonBase';

export default Button;

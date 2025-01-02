import styled from 'styled-components';
import Link from 'next/link';
import { ButtonProps } from '@/app/lib/types';

interface StyledLinkProps {
    fontSize: string;
    active: boolean;
    width: string;
    backgroundColor: string;
    backgroundHover: string;
    colorHover: string;
    colorText: string;
    colorActive: string;
    backgroundActive: string;
    backgroundActiveHover: string;
    colorActiveHover: string;
}

const StyledLink = styled.span.withConfig({ 
        shouldForwardProp: (prop) => !["active", "fontSize", "width", "backgroundColor", "backgroundHover", "colorHover", "colorText", "colorActive", "backgroundActive", "backgroundActiveHover", "colorActiveHover"].includes(prop)
    })<StyledLinkProps>`
    font-size: ${props => props.fontSize};
    font-weight: ${props => props.active ? 'bold' : 'normal'};
    text-decoration: none;
    padding: 0.5vw 1vw;
    border-radius: 1vw;
    transition: all 0.5s ease-in-out;
    width: ${props => props.width};
    text-align: center;
    background-color: ${props => props.active ? props.backgroundActive : props.backgroundColor};
    color: ${props => props.active ? props.colorActive : props.colorText};
    display: block;
    &:hover {
        background-color: ${props => props.active ? props.backgroundActiveHover : props.backgroundHover};
        color: ${props => props.active ? props.colorActiveHover : props.colorHover};
    }
`;

function ButtonLink({ 
    active = false, 
    href = "#", 
    children, 
    backgroundColor = '', 
    backgroundHover = '', 
    colorHover = '', 
    colorText = '', 
    width = '', 
    fontSize = '', 
    colorActive = '', 
    backgroundActive = '', 
    backgroundActiveHover = '', 
    colorActiveHover = '', 
    className, 
    onClick
}: ButtonProps ) {
    return (
        <Link href={href} passHref style={{ textDecoration: 'none' }}>
            <StyledLink
                fontSize={fontSize}
                active={active}
                width={width}
                backgroundColor={backgroundColor}
                backgroundHover={backgroundHover}
                colorHover={colorHover}
                colorText={colorText}
                colorActive={colorActive}
                backgroundActive={backgroundActive}
                backgroundActiveHover={backgroundActiveHover}
                colorActiveHover={colorActiveHover}
                className={className}
                onClick={onClick}
            >
                {children}
            </StyledLink>
        </Link>
    );
}

export default ButtonLink;
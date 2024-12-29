export interface NavBarProps {
    active: boolean;
    position: string;
}

export interface ButtonProps {
    active?: boolean;
    href?: string;
    children: React.ReactNode;
    backgroundColor?: string;
    backgroundHover?: string;
    colorHover?: string;
    colorText?: string;
    width?: string;
    fontSize?: string;
    colorActive?: string;
    backgroundActive?: string;
    backgroundActiveHover?: string;
    colorActiveHover?: string;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}
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

export default interface RootLayoutProps {
    active: boolean;
    position: string;
    children: React.ReactNode;
}

interface ImageUrls {
    xsmall?: string;
    small?: string;
    medium?: string;
    large?: string;
    xlarge?: string;
    xxlarge?: string;
    original?: string;
}

export interface Announcement {
    title: string;
    text: string;
    img: string;
}

export interface Service {
    id: number;
    nombre: string;
    descripcion: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    image: {
        jpg: ImageUrls;
        webp: ImageUrls;
    }
    route: string;
}

export interface Project {
    id: number;
    name: string;
    description: string;
    img: {
        jpg: ImageUrls;
        webp: ImageUrls;
    }
}
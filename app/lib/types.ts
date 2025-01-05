export interface NavBarProps {
    readonly active: boolean;
    readonly position: string;
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

export interface ImageUrls {
    xsmall?: string;
    small?: string;
    medium?: string;
    large?: string;
    xlarge?: string;
    xxlarge?: string;
    giant?: string;
    xgiant?: string;
    xxgiant?: string;
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

export interface Client {
    id?: number;
    descripcion: string;
    img: string;
}

export interface InfiniteScrollerType {
    heading: string;
    content: Client[];
    duration: string;
    direction: string;
}

export interface ImageAndTextProps {
    firstText: boolean;
    firstHeading: string;
    secondHeading: string;
    text: string;
    image: {
        jpg: ImageUrls;
        webp: ImageUrls;
    }
    backgroundColor: string;
    textColor?: string;
}

export interface Valores {
    heading: string;
    text: string;
}

export interface Video {
    webm: {
        "240p"?: string
        "360p"?: string;
        "480p"?: string;
        "720p"?: string;
        "1080p"?: string;
        "original"?: string;
    },
    mp4: {
        "240p"?: string
        "360p"?: string;
        "480p"?: string;
        "720p"?: string;
        "1080p"?: string;
        "original"?: string;
    },
    thumbnail: string;
}

export interface HeroVideoProps {
    video: Video;
    heading: string;
    paragraphs: string[];
    linkText: string;
    linkTo: string;
}

export interface ContactImage {
    webp: ImageUrls;
    jpg: ImageUrls;
}

export interface ProjectPhases {
    title: string;
    tasks: string[];
}

export interface Accordion {
    heading: string;
    paragraphs: string[];
}

export interface ImageAndTextServiceProps {
    heading: string;
    text: string;
    img: {
        webp: ImageUrls;
        jpg: ImageUrls;
    }
}

export interface ArticleServiceProps {
    heading: string;
    img: {
        webp: ImageUrls;
        jpg: ImageUrls;
    }
    paragraphs: string[];
}
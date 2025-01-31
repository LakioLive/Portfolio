export interface ITechnologyIcons {
    [key: string]: string;
}

export interface ProjectCardProps {
    id: number;
    name: string;
    description: string;
    imageSrc: string;
    technologies: string[];
    repository: string;
    link: string;
}

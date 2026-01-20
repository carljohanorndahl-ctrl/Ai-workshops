import { ReactNode } from 'react';

export interface NavLink {
    label: string;
    href: string;
}

export interface Feature {
    title: string;
    description: string;
    icon: ReactNode;
    colSpan?: number;
}

export interface ProcessStep {
    number: string;
    title: string;
    description: string;
}

export interface SocialProofLogo {
    name: string;
    url?: string;
}

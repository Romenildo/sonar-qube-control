
export interface Project {
    id: number;
    name: string;
    description: string;
    color:string;
    status: boolean;
    months: Month[];
}

export interface Month {
    id: number;
    name: string;
    status: string;
    code_smells: number;
    bugs: number;
    vulnerabilities: number;
    security_hotspots: number;
    code_coverage: number;
    duplications: number;
}
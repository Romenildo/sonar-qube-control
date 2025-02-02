import { Project } from "../dto/project.interface";

export const EDUCACIONAL:Project  = {
    id: 1,
    name: 'Educacional',
    description: 'Description 1',
    color: 'lime',
    status: true,
    months : [
        {
            id: 1,
            name: 'Janeiro',
            status: 'Active',
            data:{
                code_smells: 167,
                bugs: 3,
                vulnerabilities: 0,
                security_hotspots: 0,
                code_coverage: 0,
                duplications: 18
            }
        },
        {
            id: 2,
            name: 'February',
            status: 'Active',
            data:{
                code_smells: 120,
                bugs: 2,
                vulnerabilities: 0,
                security_hotspots: 0,
                code_coverage: 0,
                duplications: 22
            }
        },
    ]
};  
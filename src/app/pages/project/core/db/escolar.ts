import { Project } from "../dto/project.interface";

export const ESCOLAR:Project  = {
    id: 2,
    name: 'Escolar',
    description: 'Description 2',
    status: true,
    color: 'yellow',
    months : [
        {
            id: 1,
            name: 'Janeiro',
            status: 'Active',
            data:{
                code_smells: 1756,
                bugs: 81,
                vulnerabilities: 0,
                security_hotspots: 0,
                code_coverage: 0,
                duplications: 22
            }
        },
        {
            id: 2,
            name: 'Feverreiro',
            status: 'Active',
            data:{
                code_smells: 1923,
                bugs: 67,
                vulnerabilities: 0,
                security_hotspots: 0,
                code_coverage: 0,
                duplications: 17
            }
        },
    ]
};  
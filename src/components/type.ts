interface Data {
    user?: User;
    works?: Works;
    skill?: Skill;
    education?: Education;
    company?: Company;
    honor?: Honor;
}

interface User {
    name: string;
    phone: string;
    describe: string;
    sex: boolean;
    status: string;
    age: string;
    photo: string;
    email: string;
    wechat: string;
    github: string;
}

interface Works {
    name: string;
    url: string;
    photo: string;
}

interface Skill {
    name: string;
    sequence: number;
    percentage: number;
}

interface Education {
    school: string;
    formal: string;
    start: number;
    end: number;
    job: string;
}

interface Company {
    info: Info;
    event: null;
}

interface Honor {
    code: string;
    name: string;
    url: string;
}

interface Info {
    code: string;
    company_name: string;
    company_code: string;
}

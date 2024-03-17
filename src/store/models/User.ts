
export default interface IClaim{
    name: string;
    value: string
}

export default interface IUser {
    email: string,
    password: string,
    isAuthenticated: boolean,
    accessToken: string,
    claims: IClaim[]
}


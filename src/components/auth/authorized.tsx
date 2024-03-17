import { ReactElement, useEffect, useState} from 'react';
import { useSelector } from "react-redux";
import store from '../../store/store';
import IUser from '../../store/models/User';

export default function Authorized(props: IAuthorizedProps){
    const authUser = useSelector((state: IUser) => store.getState().auth);
    const [isAuthorized, setIsAuthorized] = useState(false);
    useEffect(() => {
        if (authUser.isAuthenticated){
            setIsAuthorized(true);
        }
        else{
            setIsAuthorized(false);
        }

    },[authUser]);
    return(
        <>{isAuthorized ? props.authorized : props.unauthorized }</>
    )
}

interface IAuthorizedProps{
    authorized: ReactElement;
    unauthorized?: ReactElement;
    role?: string
}
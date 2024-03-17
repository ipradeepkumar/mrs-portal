import { Button, Card, Container, Form } from "react-bootstrap";
import serviceCore from "@app/services/core";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { authSlice } from '@app/store/reducers/auth';
import IUser from '../store/models/User';
import { useAppDispatch, AppDispatch, RootState } from '../store/store';
import { useSelector } from "react-redux";


function Login(){
    const dispatch: AppDispatch = useAppDispatch();
    const isAuthenticated = useSelector((state: IUser) => state.isAuthenticated);
    const { setAuthentication } = authSlice.actions;
    
    const [values, setValues] = useState({
        username: '',
        password: ''
    });

    const navigate = useNavigate();

    function handleInputChange(event: any){
        const {name, value} = event.target;
        setValues({...values, [name]: value});
    }
    async function login(event: any) {
        const user = {} as IUser;
        user.email = values.username;
        user.password = values.password;
        serviceCore.user.login(user).then(
            (response: any) => {
                console.log(response);
                user.accessToken = response.data;
                user.isAuthenticated = response.isSuccess ? true : false;
                dispatch(setAuthentication(user));
                navigate('/');
            },
            error => {
                console.log(error)
                toast.error('Loagin failed!!');
            }
        )
    }

    return(
        <Container className="d-flex align-items-center  
        justify-content-center vh-100 p-0 m-0 text-dark bg-opacity-20" >
        <Card className="shadow-lg bg-white rounded" style={{ width:'400px' }}>
        <Card.Header>Login</Card.Header>
        <Card.Body>
    <Form>
        <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="username" placeholder="Enter username" 
                        autoComplete="false" onChange={handleInputChange} value={values.username}/>
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" 
                    autoComplete="false" onChange={handleInputChange} value={values.password}/>
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <div className="d-flex justify-content-center">
        <Button variant="primary" type="button" onClick={login}>
            Login
        </Button></div>
    </Form>
    </Card.Body>
      <Card.Footer className="text-center text-muted">Ver@2024.0.0</Card.Footer>
    </Card>
    <ToastContainer
        autoClose={3000}
        draggable={false}
        position="top-right"
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnHover
      />
    </Container>
    
    )
}

export default Login;
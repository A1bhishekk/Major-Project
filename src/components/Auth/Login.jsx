import {
    Box,
    Button,
    Container,
    FormLabel,
    Heading,
    HStack,
    Input,
    Text,
    VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import { login } from '../../redux/actions/user';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //   const dispatch = useDispatch();

    const submitHandler = e => {
        e.preventDefault();
        // dispatch(login(email, password));
    };

    return (
        <Container minH={["64vh","74vh"]}>
            <VStack  justifyContent="center" spacing={'26'} alignItems="center" mt={40}>
                <Heading children={'Technical Abhi'} />

                <form onSubmit={submitHandler} style={{ width: '100%' }}>
                    <Box my={'4'}>
                        <FormLabel htmlFor="email" children="Email Address" />
                        <Input
                            required
                            id="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="xyz@gmail.com"
                            type={'email'}
                            focusBorderColor="yellow.500"
                        />
                    </Box>

                    <Box my={'4'}>
                        <FormLabel htmlFor="password" children="Password" />
                        <Input
                            required
                            id="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="Enter Your Password"
                            type={'password'}
                            focusBorderColor="yellow.500"
                        />
                    </Box>

                    <Box>
                        <Link to="/forgetpassword">
                            <Button fontSize={'sm'} variant="link">
                                Forget Password?
                            </Button>
                        </Link>
                    </Box>

                    <VStack my="4" alignItems="center">
                        <Button my="4" colorScheme={'teal'} type="submit" >
                            Login
                        </Button>
                    </VStack>

                    <HStack my="4" alignItems={"center"} justifyContent="center">
                        <Text children="New User?" />
                        <Link to="/register">
                            <Button colorScheme={'teal'} variant="link">
                                Sign Up
                            </Button>
                        </Link>
                    </HStack>
                </form>
            </VStack>
        </Container>
    );
};

export default Login;

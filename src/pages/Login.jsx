import React, { useEffect } from 'react'
import { Link, Form, useNavigation, useActionData } from 'react-router-dom'
import { banner } from '../assets/assets'

/**
*components 
 */

import PageTitle from '../components/PageTitle'
import TextField from '../components/TextField'
import { Button } from '../components/Button'
import { CircularProgress, LinearProgress } from '../components/Progress'
import { useSnackbar } from '../hooks/useSnackbar'
import { AnimatePresence } from 'motion/react'
import { Logo } from '../components/Logo'
function Login() {
    const navigation = useNavigation();
    const error = useActionData();
    const { showSnackbar } = useSnackbar();
    useEffect(() => {
        if (error?.message) {
            showSnackbar({
                message: error.message,
                type: 'error',
            })
        }
    }, [error, showSnackbar])

    return (
        <React.Fragment>
            <PageTitle title='Login' />
            <div className="relative w-screen h-dvh p-2 grid 
            grid-cols-1 lg:grid-cols-[1fr,1.2fr] lg:gap-2">
                <div className="flex flex-col p-4">
                    <Logo classes='mx-auto mb-auto lg:mx-0' />
                    <div className='flex flex-col gap-2 max-w-[480px] w-full mx-auto'>
                        <h2 className='text-displaySmall font-semibold 
                        text-light-onBackground dark:text-dark-onBackground 
                        text-center'>Welcome Back To Dom Ai</h2>
                        <p className='text-bodyLarge text-light-onSurfaceVariant
                        dark:text-dark-onSurfaceVariant mt-1 mb-5 text-center px-2'>
                            Enter your Dom Ai account details.
                        </p>
                        <Form
                            method='post'
                            className='grid grid-cols-1 gap-4'
                        >

                            <TextField
                                type='email'
                                name='email'
                                label='Email'
                                placeholder='Email'
                                required={true}
                                autoFocus={true}
                            />

                            <TextField
                                type='Password'
                                name='password'
                                label='Password'
                                placeholder='Enter Your Password'
                                required={true}
                            />

                            <div className='text-right'>
                                {/* <Link to='/reset-link' className='link text-labelLarge 
                                inline-block'>
                                    Forgot password?
                                </Link> */}
                            </div>

                            <Button type='submit' disabled={navigation.state === 'submitting'}>
                                {
                                    navigation.state === 'submitting' ? (
                                        <CircularProgress size='small' />
                                    ) : 'sign in'
                                }
                            </Button>
                        </Form>
                        <p className='text-bodyMedium text-light-onSurfaceVariant 
                                dark:text-dark-onSurfaceVariant text-center mt-4
                        '>
                            Don&apos;t have an account?
                            <Link to='/register' className='link inline-block
                             ms-1 text-light-onSurface text-labelLarge
                            dark:text-dark-onSurface
                            '>
                                Create an account
                            </Link>

                        </p>
                       
                    </div>
                    <p className="mt-auto mx-auto text-light-surfaceTint text-center
                        dark:text-dark-surfaceTint text-bodyMedium lg:mx-0">
                        &copy; 2024 code with . All right reserved
                    </p>
                </div>

                <div className="hidden img-box lg:block lg:relative 
                                lg:rounded-large ">
                    <img src={banner} alt="" className='img-cover ' />
                    <p className='box '>
                        Dom Ai with gemini Ai
                    </p>
                </div>
            </div>
            <AnimatePresence>
                {navigation.state === 'loading' && (
                    <LinearProgress classes='absolute top-0 left-0 right-0 ' />
                )}
            </AnimatePresence>
        </React.Fragment>
    )
}

export default Login
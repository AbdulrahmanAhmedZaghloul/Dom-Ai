import React, { useEffect } from 'react'
import { Form, useNavigation, useActionData } from 'react-router-dom'
import { banner } from '../assets/assets'

/**
*components 
 */
import PageTitle from '../components/PageTitle'
import TextField from '../components/TextField'
import {Button} from '../components/Button'
import { CircularProgress, LinearProgress } from '../components/Progress'
import { AnimatePresence } from 'motion/react'
import { Logo } from '../components/Logo'
import { useSnackbar } from '../hooks/useSnackbar'
function ResetLink() {
    const navigation = useNavigation();
    
    const actionData = useActionData();

    const { showSnackbar } = useSnackbar();

    useEffect(() => {
        if (actionData) {
            showSnackbar({
                message: actionData?.message,
                type: actionData.ok ? 'info' : 'error',
                timeOut: 8000,
            });
        };
    }, [actionData, showSnackbar]);

    return (
        <React.Fragment>
            <PageTitle title='Reset Password' />
            <div className="relative w-screen h-dvh p-2 grid 
                 grid-cols-1 lg:grid-cols-[1fr,1.2fr] lg:gap-2">
                <div className="flex flex-col p-4">
                    <Logo classes='mx-auto mb-auto lg:mx-0'/>
                    <div className='flex flex-col gap-2 max-w-[480px] w-full mx-auto'>
                        <h2 className='text-displaySmall font-semibold 
                        text-light-onBackground 
                        dark:text-dark-onBackground 
                        text-center'>Forgot your Password ?</h2>
                        <p className='text-bodyLarge text-light-onSurfaceVariant
                        dark:text-dark-onSurfaceVariant mt-1 mb-5 text-center px-2'>
                            Enter your email, and we&apos;ll send a
                            Password reset link.
                        </p>
                        <Form
                            method='post'
                            className='grid grid-cols-1 gap-4'
                        >

                            <TextField
                                type='email'
                                name='email'
                                label='Email'
                                helperText='The verification link sent to
                                your email address will be valid for 1 hour.
                                '
                                placeholder='Email'
                                required={true}
                                autoFocus={true}
                            />

                            <Button type='submit' disabled={navigation.state === 'submitting'}>
                                {
                                    navigation.state === 'submitting' ? (
                                        <CircularProgress size='small' />
                                    ) : 'Get link'
                                }
                            </Button>
                        </Form>

                    </div>
                    <p className="mt-auto mx-auto text-light-surfaceTint text-center
                        dark:text-dark-surfaceTint text-bodyMedium lg:mx-0">
                        &copy; 2024 code with . All right reserved
                    </p>
                </div>

                <div className="hidden img-box lg:block lg:relative 
                                lg:rounded-large ">
                    <img src={banner} alt="image chat ai" className='img-cover ' />
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

export default ResetLink;
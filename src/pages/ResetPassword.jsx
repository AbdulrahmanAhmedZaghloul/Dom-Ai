import React, { useEffect } from 'react'
import { Form, useNavigation, useActionData } from 'react-router-dom'
import {  banner } from '../assets/assets'

/**
*components 
 */
import PageTitle from '../components/pageTitle'
import TextField from '../components/TextField'
import {Button} from '../components/Button'
import { CircularProgress, LinearProgress } from '../components/Progress'
import { AnimatePresence } from 'motion/react'
import { Logo } from '../components/Logo'
import { useSnackbar } from '../hooks/useSnackbar'
function ResetPassword() {
    const navigation = useNavigation();
    const error = useActionData();
    
    const { showSnacKbar } = useSnackbar();

    useEffect(() => {
        if (error?.message) {
            showSnacKbar({ message: error.message, type: 'error' })
        }
    }, [error, showSnacKbar])

    return (
        <React.Fragment>
            <PageTitle title='New Password' />
            <div className="relative w-screen h-dvh p-2 grid 
            grid-cols-1 lg:grid-cols-[1fr,1.2fr] lg:gap-2">
                <div className="flex flex-col p-4">
                <Logo classes='mx-auto mb-auto lg:mx-0'/>
                    <div className='flex flex-col gap-2 max-w-[480px] w-full mx-auto'>
                        <h2 className='text-displaySmall font-semibold 
                        text-light-onBackground dark:text-dark-onBackground 
                        text-center'>Set a new password</h2>
                        <p className='text-bodyLarge text-light-onSurfaceVariant
                        dark:text-dark-onSurfaceVariant mt-1 mb-5 text-center px-2'>
                            please choose a password that hasn&apos;t been used before.
                            must be at least 8 characters.
                        </p>
                        <Form
                            method='post'
                            className='grid grid-cols-1 gap-4'
                        >
                            <TextField
                                type='password'
                                name='password'
                                label='password'
                                placeholder='New Password'
                                required={true}
                                autoFocus={true}
                            />

                            <Button type='submit' disabled={navigation.state === 'submitting'}>
                                {
                                    navigation.state === 'submitting' ? (
                                        <CircularProgress size='small' />
                                    ) : 'Reset Password'
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

export default ResetPassword
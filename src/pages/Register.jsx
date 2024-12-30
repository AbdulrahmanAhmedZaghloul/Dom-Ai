import React, { useEffect } from 'react'
import { Link, Form, useNavigation, useActionData } from 'react-router-dom'
import {  banner } from '../assets/assets'

/**
*components 
 */
import PageTitle from '../components/PageTitle'
import TextField from '../components/TextField'
import {Button} from '../components/Button'
import { CircularProgress, LinearProgress } from '../components/Progress'
import { useSnackbar } from '../hooks/useSnackbar'
import { AnimatePresence } from 'motion/react'
import { Logo } from '../components/Logo'

function Register() {
    const navigation = useNavigation();
    const error = useActionData();
    const { showSnackbar } = useSnackbar();
    useEffect(() => {
        if (error?.message) {
            showSnackbar({ message: error.message, type: 'error' })
        }
    }, [error, showSnackbar]);
    return (
        <React.Fragment>
            <PageTitle title='Create an account' />
            <div className="relative w-screen h-dvh p-2 grid 
            grid-cols-1 lg:grid-cols-[1fr,1.2fr] lg:gap-2">
                <div className="flex flex-col p-4">
                    <Logo classes=' mb-auto lg:mx-0 mx-auto'/>
                    <div className='flex flex-col gap-2 max-w-[480px] w-full mx-auto'>
                        <h2 className='text-displaySmall font-semibold text-light-onBackground dark:text-dark-onBackground text-center'>Create an account</h2>
                        <p className='text-bodyLarge text-light-onSurfaceVariant
                        dark:text-dark-onSurfaceVariant mt-1 mb-5 text-center px-2'>
                            Register today and gain access to powerful tools that will supercharge your ideas.
                        </p>
                        <Form
                            method='post'
                            className='grid grid-cols-1 gap-4' >
                            <TextField
                                type='text'
                                name='name'
                                label='full name'
                                placeholder='Full name'
                                required={true}
                                autoFocus={true}
                                helperText='some helper text'/>
                            <TextField
                                type='email'
                                name='email'
                                label='Email'
                                placeholder='Email'
                                required={true}/>
                            <TextField
                                type='Password'
                                name='password'
                                label='Password'
                                placeholder='Enter Your Password'
                                required={true}/>
                            <Button type='submit' disabled={navigation.state === 'submitting'}>
                                {
                                    navigation.state === 'submitting' ? (
                                        <CircularProgress size='small' />
                                    ) :
                                        'Create account'}
                            </Button>
                        </Form>
                        <p className='text-bodyMedium text-light-onSurfaceVariant 
                                dark:text-dark-onSurfaceVariant text-center mt-4'>
                            Already have an account?
                            <Link to='/login' className='link inline-block ms-1 text-light-onSurface
                            dark:text-dark-onSurface text-labelLarge'>
                                Sing in
                            </Link>
                        </p>
                        {
    error ? <div className="p-2 rounded tracking-widest bg-light-errorContainer text-light-onErrorContainer">
    {error}
</div> :null
}
                    </div>
                    <p className="mt-auto mx-auto text-light-surfaceTint text-center
                        dark:text-dark-surfaceTint text-bodyMedium lg:mx-0">
                        &copy; 2024 code with . All right reserved
                    </p>
                </div>
                <div className="hidden img-box lg:block lg:relative lg:rounded-large ">
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
    );
};
export default Register
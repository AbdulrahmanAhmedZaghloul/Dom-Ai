import { Link, useRouteError } from 'react-router-dom'

export const ConversationError = () => {
    const error = useRouteError();
    return (
        <div className='grid grid-cols-1 justify-items-center content-center h-full'>
            <p className="text-displayMedium font-semibold">{error.code}</p>
            <p className="text-light-onSurfaceVariant 
            dark:text-dark-onSurfaceVariant mt-2 mb-4">{error.message}</p>
            <Link
                className='btn filled primary'
                to='/'
            >
                Create New chat
                <div className="state-layer"></div>
            </Link>
        </div>
    )
}

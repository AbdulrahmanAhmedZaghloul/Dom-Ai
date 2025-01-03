import PropTypes from 'prop-types';
import {
    createContext, useState, useRef,
    useMemo, useCallback} from 'react';
import Snackbar from '../components/SnacKbar';

const initialCtxValue = {
    snackbar: {
        open: false,
        message: '',
        type: 'info',
    },
    showSnacKbar: ({
        timeOut= 5000,
        message,
        type= 'info',
    }) => { },
    hideSnacKbar: () => { },
};
export const SnackbarContext = createContext(initialCtxValue);

const SnackbarProvider = ({ children }) => {

    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        type: 'info',
    });

    const timeoutRef = useRef();


    const showSnackbar = useCallback(({ message, type = 'info', timeOut = 5000 }) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setSnackbar({ open: true, message, type });
        timeoutRef.current = setTimeout(() => {
            setSnackbar((prev) => {
                return { ...prev, open: false };
            });
        }, timeOut);
    }, []);
    
    const hideSnackbar = useCallback(() => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setSnackbar({ open: false, message: '', type: 'info' });
    }, []);
    
    const contextValue = useMemo(() => {
        return { showSnackbar, hideSnackbar };
    }, [showSnackbar, hideSnackbar]);
    
    return (
        <SnackbarContext.Provider value={contextValue}>
            {children}
            <Snackbar snackbar={snackbar}/>
        </SnackbarContext.Provider>
    )
};

SnackbarProvider.propTypes = {
    children: PropTypes.any,
};
export default SnackbarProvider;
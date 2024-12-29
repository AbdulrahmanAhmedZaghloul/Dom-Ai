import { motion } from 'motion/react';
import PropTypes from 'prop-types';


export const Snackbar = ({ snackbar }) => {
    const snackbarVariant = {
        hidden: { scale: 0 },
        Variant: {
            scale: 1,
            Transition: {
                duration: 0.2,
                ease: [0.05, 0.7, 0.1, 1],
            }
        }
    }
    const snackbarChildVariant = {
        hidden: { opacity: 0 },
        Variant: { opacity: 1 },
    }
    return (<>
        {
            snackbar.open && (
                <motion.div
                    initial='hidden'
                    animate='visible'
                    variants={snackbarVariant}
                    className={`snackbar ${snackbar.type}`}
                >
                    <motion.span
                        variants={snackbarChildVariant}
                    >
                        {snackbar.message}
                    </motion.span>
                </motion.div>
            )
        }
    </>

    )
}


Snackbar.propTypes = {
    snackbar: PropTypes.object
};

export default Snackbar

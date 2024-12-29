import { motion } from 'motion/react';
import PropTypes from 'prop-types';


const CircularProgress = ({ classes = '', size = '' }) => {
    return (
        <div
            role='progressbar'
            className={`circular-progress ${classes} ${size}`}>
        </div>
    )
};

const LinearProgress = ({ classes = '' }) => {
    const progressbarVariant = {
        start: { scaleY: 0 },
        end: {
            scaleY: 1,
            transform: {
                when: 'beforeChildren',
                duration: 0.2,
                ease: "easeOut",
                delay: 0.5,
            }
        },
        exit: {
            scaleY: 0,
            transition: {
                duration: 0.1,
                ease: "easeOut",
            }
        }
    } ;

    const activeIndicatorVariant = {
        start: { translateX: '-100%' },
        end: { translateX: '100%' },
    }

    return (
        <motion.div
            role='progressbar'
            initial='start'
            animate='end'
            exit='exit'
            variants={progressbarVariant}
            className={`linear-progress ${classes}`}>
            <motion.div
                transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: [0.2, 0, 0, 1]
                }}
                variants={activeIndicatorVariant}
                className='active-indicator'>
            </motion.div>
        </motion.div>
    )
}
LinearProgress.propTypes = {
    classes: PropTypes.string,
};


CircularProgress.propTypes = {
    classes: PropTypes.string,
    size: PropTypes.string,
};
 
export { CircularProgress, LinearProgress }
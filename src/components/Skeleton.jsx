import { motion } from 'motion/react'

export const Skeleton = () => {
    const skeletonLines = [1, 2, 3];
    const skeletonVariant = {
        start: {},
        end: {
            transition:{
                staggerChildren:0.15,
            }
        }
    }
    const skeletonChildVariant = {
        start: {opacity:0.5},
        end: {opacity:1}
    }
    return (
        <motion.div
            variants={skeletonVariant}
            initial='start'
            animate='end'
            >
            {skeletonLines.map((item) => (
                <motion.div
                variants={skeletonChildVariant}
                transition={{
                    repeat:Infinity,
                    repeatType:"reverse",
                    duration:0.5, 
                }}
                 key={item} 
                 className='skeleton' />
            ))
            }

        </motion.div>
    )
}

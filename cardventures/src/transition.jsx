import { motion } from 'framer-motion'

const transition = (OgComponent) => {

    return () => (
        <>
            <motion.div
                key='modal-1'
                className='slide-in'
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />
            <OgComponent />
            <motion.div
                key='modal-2'
                className='slide-out'
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />
        </>
    );
};

export default transition;
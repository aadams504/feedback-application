import {motion, AnimatePresence} from 'framer-motion'
import {useContext} from 'react'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList({ }) {
    const {feedback} = useContext(FeedbackContext)

    if(!feedback || feedback.length === 0) {
        return <p>No Feedback Yet</p>
    }

    return <div className='feedback-list'>
        {feedback.map((item) => (
            <motion.div 
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            >
                <AnimatePresence>
                    <FeedbackItem 
                    key={item.id} 
                    item={item}  />
                </AnimatePresence>
            </motion.div>
        ))}
    </div>
}


export default FeedbackList
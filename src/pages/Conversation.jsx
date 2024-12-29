import { motion } from 'motion/react'
import React from 'react'
import PageTitle from '../components/PageTitle'
import { useLoaderData, useLocation } from 'react-router-dom'
import UserPrompt from '../components/UserPrompt'
import { AiResponse } from '../components/AiResponse'
import { PromptPreloader } from '../components/PromptPreloader'
import { usePromptPreloader } from '../hooks/usePromptPreloader'

// export const Conversation = () => {
//     const { conversation: { title = "chat Ai", chats }, } = useLoaderData()||{};

//     const { promptPreloaderValue } = usePromptPreloader();

//     const location = useLocation()||{};

//     return (
//         <React.Fragment>
//             <PageTitle title={`${title} `} />
//             <motion.div
//                 className='max-w-[700px] mx-auto !will-change-auto'
//                 initial={location.state?._isRedirect && { opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.2, delay: 0.05, ease: 'easeInOut' }}
//             >
//                         {
//                                 chats?.map((chat) => (
//                                     <div key={chat.$id}>
//                                         <UserPrompt text={chat.user_prompt} />
//                                         <AiResponse aiResponse={chat.ai_response} />
//                                     </div>
//                                 ),)
//                         }
             
//             </motion.div>

//             {promptPreloaderValue && (
//                 <PromptPreloader promptValue={promptPreloaderValue} />
//             )}



//         </React.Fragment>
//     )
// }



export const Conversation = () => {
    const data = useLoaderData() || {};
    const conversation = data.conversation || {};
    const { title = "", chats = [] } = conversation;
    const { promptPreloaderValue } = usePromptPreloader();
    const location = useLocation();

    console.log({ title, chats });

    return (
        <React.Fragment>
            <PageTitle title={`${title} chat Ai`} />
            <motion.div
                className='max-w-[700px] mx-auto !will-change-auto'
                initial={location.state?._isRedirect && { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.05, ease: 'easeInOut' }}
            >
                {chats.map((chat) => (
                    <div key={chat.$id}>
                        <UserPrompt text={chat.user_prompt} />
                        <AiResponse aiResponse={chat.ai_response} />
                    </div>
                ))}
            </motion.div>

            {promptPreloaderValue && (
                <PromptPreloader promptValue={promptPreloaderValue} />
            )}
        </React.Fragment>
    );
};

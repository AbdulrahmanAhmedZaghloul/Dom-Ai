import { databases } from "../../lib/appwrite";
import { getAiResponse } from "../../Api/googleAi";
import generateID from "../../utils/generateID";
// import { useParams } from "react-router-dom";




const conversationAction = async ({ request, params }) => {
    const { conversationId } = params;
    
    const formData = await request.formData();
    const userPrompt = formData.get('user_prompt');

    let chatHistory = [];
    let aiResponse = '';
    try {
        const { chats } = await databases.createDocument(
            'conversations',
            conversationId 
        )
        console.log(chats);
        chatHistory = chats.map(({ user_prompt, ai_response }) => {
            return { user_prompt, ai_response }
        })
    } catch (err) {
        console.log(err);
    }

    try {
        aiResponse = await getAiResponse(userPrompt,chatHistory)
    } catch (err) {
        console.log(err);
    }

    try {
        await databases.createDocument(
            import.meta.env.VITE_APPWRITE_DATABASE_ID,
            'chats',
            generateID(),
            {
                user_prompt:userPrompt,
                ai_response:aiResponse,
                conversation: conversationId,
            }
        )
    } 
    catch (err) {
        console.log(err.message);
    }
    return null ;
}

export default conversationAction
import { redirect } from "react-router-dom";
import { account, databases } from "../../lib/appwrite";
export const conversationLoader = async ({ params }) => {
    const { conversationId } = params;
    const data = {};
    try {
        data.user = await account.get();
    } 
    catch (err) {
        console.log(err.message);
        return redirect('/login')
    }
    try {
        data.conversation = await databases.getDocument(
            import.meta.env.VITE_APPWRITE_DATABASE_ID,
            'conversations',
            conversationId,
        );
    } catch (err) {
        console.log(err.message);
        throw err;
    } 
    
    return data;
}
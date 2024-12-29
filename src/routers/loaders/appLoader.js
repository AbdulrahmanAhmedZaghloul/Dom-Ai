import { redirect } from "react-router-dom";
import { account, databases } from "../../lib/appwrite";
import { Query } from "appwrite";
const appLoader = async () => {
    const data = {};
    try {
        data.user = await account.get();
    } catch (err) {
        console.log(err.message);
        return redirect("/login");
    }
    try {
        data.conversations = await databases.listDocuments(
            import.meta.env.VITE_APPWRITE_DATABASE_ID,
            'conversations',
            [
                Query.select(['$id','title']),
                Query.orderDesc('$createdAt'),
                Query.equal('user_id',data.user.$id),
            ]
        )
    } catch (err) {
        console.log(err.message);
    }
    console.log(data);

    return data
}
export default appLoader
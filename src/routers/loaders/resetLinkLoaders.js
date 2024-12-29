import { redirect } from "react-router-dom";
import { account } from "../../lib/appwrite";

const resetLinkLoaders = async () => {
    try {
        await account.get();
    }
    catch (err) {
        console.log(err.message);
        return null
    }
    return redirect('/');
}

export default resetLinkLoaders
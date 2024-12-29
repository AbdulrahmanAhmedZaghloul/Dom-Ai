import { redirect } from "react-router-dom";
import { account } from "../../lib/appwrite";

const resetPasswordLoaders = async ({request}) => {
    const url = new URL(request.url)
    try {
        await account.get();
    }
    catch (err) {
        console.log(err.message);
    }

if (!url.searchParams.get('userId') && !url.searchParams.get('secret')) {
    return redirect('/reset-link')
}

return null

}

export default resetPasswordLoaders
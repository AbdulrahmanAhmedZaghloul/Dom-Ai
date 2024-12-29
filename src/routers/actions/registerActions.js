import { redirect } from "react-router-dom";
import { account } from "../../lib/appwrite";
import generateID from "../../utils/generateID";


const registerActions = async ({ request }) => {
    const formData = await request.formData();
    try {
        await account.create(
            generateID(),
            formData.get('email'),
            formData.get('password'),
            formData.get('name'),
        )
        console.log(formData);
    }

    catch (err) {
        console.log(err);
        return {
            message: err.message
        }
    }
    try {

        await account.createEmailPasswordSession(
            formData.get('email'),
            formData.get('password'),
        )
    }
    catch (err) {
        console.log(`Error create email session : ${err.message}`);
        return redirect('/login')
    }


    return redirect('/login')
}
export default registerActions
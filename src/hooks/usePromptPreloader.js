import { useEffect, useState } from 'react'
import { useNavigation } from 'react-router-dom'

export const usePromptPreloader = () => {
    const [promptPreloaderValue, setPromptPreloaderValue] = useState('')
    const navigtion = useNavigation();

    useEffect(() => {
        if (navigtion.formData) {
            setPromptPreloaderValue(navigtion.formData.get('user_prompt'));
        } else {
            setPromptPreloaderValue('');
        }
    }, [navigtion])

    return { promptPreloaderValue }

}

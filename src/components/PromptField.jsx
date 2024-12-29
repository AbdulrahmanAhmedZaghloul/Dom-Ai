import React, { useCallback, useRef, useState } from 'react'
import { motion } from 'motion/react';
import { IconBtn } from './Button';
import { useNavigation, useParams, useSubmit } from 'react-router-dom';

export const PromptField = () => {
    const { conversationId } = useParams();
    const inputField = useRef();
    const inputFieldContainer = useRef();
    const [placeholderShow, setPlaceholderShow] = useState(true);
    const [isMultiline, setMultiline] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const submit = useSubmit();
    const navigation = useNavigation();

    const moveCursorToEnd = useCallback(() => {
        const editableElem = inputField.current;
        const range = document.createRange();
        const selection = window.getSelection();
        // 
        range.selectNodeContents(editableElem);
        range.collapse(false);
        // 
        selection.removeRange();
        selection.addRange(range);
    }, []);

    // handleInput 
    const handleInputChange = useCallback(() => {
        if (inputField.current.innerText === '\n')
            inputField.current.innerHTML = '';
        setPlaceholderShow(!inputField.current.innerText);
        setMultiline(inputFieldContainer.current.clientHeight > 64);
        setInputValue(inputField.current.innerText.trim())
    }, []);

    const handlePaste = useCallback((e) => {
        e.preventDefault();
        inputField.current.innerText += e.clipboardData.getData('text');
        handleInputChange();
        moveCursorToEnd();
    }, [handleInputChange, moveCursorToEnd]);

    const handleSubmit = useCallback(() => {
        if (!inputValue || navigation.state === 'submitting')
            return;
        submit({
            user_prompt: inputValue,
            request_type: 'user_prompt',
        }, {
            method: 'POST',
            encType: "application/x-www-form-urlencoded",
            action: `/${conversationId || ''}`
        })
        inputField.current.innerHTML = '';
        handleInputChange();
    }, [handleInputChange, inputValue, navigation.state, submit, conversationId]);

    const promptFieldVariant = {
        hidden: { scaleX: 0 },
        visible: {
            scaleX: 1,
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.2,
                duration: 0.4,
                delay: 0.4,
                ease: [0.05, 0.7, 0.1, 1],
            }
        },
    };

    const promptFieldChildrenVariant = {
        hidden: { scaleX: 0 },
        visible: {
            scaleX: 1,
        },
    };

    return (
        <React.Fragment>
            <motion.div
                className={`prompt-field-container ${isMultiline ? 'rounded-large' : ''}`}
                variants={promptFieldVariant}
                initial='hidden'
                animate='visible'
                ref={inputFieldContainer}
            >
                <motion.div 
                className={`prompt-field ${placeholderShow ? '' : 'after:hidden'}`}
                    variants={promptFieldChildrenVariant}
                    contentEditable={true}
                    ref={inputField}
                    role='textbox'
                    aria-multiline={true}
                    aria-label='Enter a prompt here'
                    data-placeholder='Enter a prompt here'
                    onInput={handleInputChange}
                    onPaste={handlePaste}
                    onKeyDown={
                        (e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                                e.preventDefault();
                                handleSubmit();
                            }
                        }
                    }
                />
                < IconBtn
                    icon='send'
                    title='Submit'
                    size='large'
                    classes='ms-auto'
                    variants={promptFieldChildrenVariant}
                    onClick={handleSubmit}
                />
                <div className='state-layer'>

                </div>
            </motion.div>
        </React.Fragment>
    )
}

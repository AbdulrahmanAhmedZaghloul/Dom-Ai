
import PropTypes from 'prop-types';
import { iconLogo } from '../assets/assets';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighLighter } from 'react-syntax-highlighter';
import { hopscotch, coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { IconBtn } from './Button';
import { useSnackbar } from '../hooks/useSnackbar';
import { useCallback, useEffect, useState } from 'react';
import toTitleCase from '../utils/toTitleCase';

export const AiResponse = ({ aiResponse, children }) => {
    const [codeTheme, setCodeTheme] = useState("");

    useEffect(() => {
        const mediaQuery = window.matchMedia('prefers-color-scheme:dark');
        setCodeTheme(mediaQuery.matches ? hopscotch : coy);
        const themeListener = mediaQuery.addEventListener('change', (event) => {
            setCodeTheme(event.matches ? hopscotch : coy);
        })
        return () => mediaQuery.removeEventListener('change', themeListener)
    }, []);
    const { showSnacKbar, hideSnacKbar } = useSnackbar();

    const handleCopy = useCallback(async (text) => {
        if (hideSnacKbar) hideSnacKbar();
        try {
            await navigator.clipboard.writeText(text);
            showSnacKbar({
                message: 'Copied to clipboard',
                timeOut: 2500,
            });
        } catch (err) {
            showSnacKbar({
                message: err.message,
            });
            console.log(err);
        }
    }, [showSnacKbar, hideSnacKbar]);

    const code = ({ children, className, ...rest }) => {
        const match = className?.match(/language-(\w+)/)
        return match ? (
            <>
                <div className="code-block">
                    <div className='p-4 pb-0 font-sans'>
                        {toTitleCase(match[1])}
                    </div> 
                    <SyntaxHighLighter
                        {...rest}
                        language={toTitleCase(match[1])}
                        style={codeTheme}
                        customStyle={{
                            marginBlock: '0',
                            padding: '2px'
                        }}
                        codeTagProps={{
                            style: {
                                padding: '14px',
                                fontWeight: '600',
                            }
                        }}
                    >
                        {children}
                    </SyntaxHighLighter>
                </div>

                <div className="bg-light-surfaceContainer 
                dark:bg-dark-surfaceContainer h-11 font-sans text-bodyMedium ps-4 pe-2
                 rounded-t-extraSmall rounded-b-medium flex justify-between items-center
                ">
                    <p>
                        Use code
                        <a target='_blank'
                            href="https://gemini.google.com/faq#coding"
                            className="link ms-3">
                            with caution.
                        </a>
                    </p>

                    <IconBtn
                        icon='content_copy'
                        size='small'
                        title='Copy code'
                        onClick={handleCopy.bind(null, children)}
                    />

                </div>
            </>
        ) : (
            <code className={className}>{children}</code>
        )
    }
    return (
        <div className='grid grid-col-1 items-start gap-1 py-4 
            md:grid-cols-[max-content,minmax(0,1fr)] md:gap-5'>
            <figure className='w-8 h-8 grid place-items-center'>
                <img src={iconLogo}
                    width={32}
                    height={32}
                    alt="chatAi logo" />
            </figure>
            {children}
            {aiResponse &&(
                   <div className='markdown-content'>
                <Markdown
                    remarkPlugins={[remarkGfm]}
                    components={{ code }}
                >
                    {aiResponse}

                </Markdown>
            </div>
            )}
         
        </div>
    )
}



AiResponse.propTypes = {
    aiResponse: PropTypes.string,
    children: PropTypes.any,
};



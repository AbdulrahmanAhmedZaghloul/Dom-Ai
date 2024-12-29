import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react'
import Avatar from './Avatar'
import { useLoaderData } from 'react-router-dom';
import { useToggle } from '../hooks/useToggle';
import { IconBtn } from './Button';
const UserPrompt = ({ text }) => {
    const { user } = useLoaderData();
    const [isExpanded, toggleExpand] = useToggle()
    const textBoxRef = useRef();
    const [hasMoreContent, setMoreContent] = useState(false)
    useEffect(() => {
        setMoreContent(
            textBoxRef.current.scrollHeight > textBoxRef.current.clientHeight,
        )
    }, [textBoxRef])

    return (
        <React.Fragment>
    <div className="grid grid-col-1 items-start gap-1 py-4 
        md:grid-cols-[max-content,minmax(0,1fr),max-content] md:gap-5">
        <Avatar name={user?.name} />
        <p
            ref={textBoxRef} // Move ref here
            className={`text-bodyLarge pt-1 whitespace-pre-wrap ${!isExpanded ? 'line-clamp-4' : ''} `}
        >
            {text}
        </p>
        {
            hasMoreContent && (
                <IconBtn
                    onClick={toggleExpand} // Fix typo here: onclick -> onClick
                    icon={isExpanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
                    title={isExpanded ? 'Collapse text' : 'Expand text'}
                />
            )
        }
    </div>
</React.Fragment>
    )
};

UserPrompt.propTypes = {
    text: PropTypes.string,
};

export default UserPrompt;

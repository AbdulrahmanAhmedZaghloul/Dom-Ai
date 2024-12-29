import { AiResponse } from "./AiResponse";
import { Skeleton } from "./Skeleton";
import UserPrompt from "./UserPrompt";
import PropTypes from 'prop-types';

export const PromptPreloader = ({ promptValue }) => {
    return (
        <div className="max-w-[700px] mx-auto">
            <UserPrompt text={promptValue}/>
            <AiResponse>
            <Skeleton>
            </Skeleton>
            </AiResponse>
        </div>
    )
}



PromptPreloader.propTypes = {
    promptValue: PropTypes.string,
};

export default UserPrompt;
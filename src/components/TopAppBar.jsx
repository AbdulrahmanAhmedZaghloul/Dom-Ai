import React from 'react'
import { IconBtn } from './Button'
import { useNavigate, useNavigation, useLoaderData, useParams, useSubmit } from 'react-router-dom'
import Avatar from './Avatar'
import Menu from './Menu'
import { MenuItem } from './MenuItem'
import { AnimatePresence } from 'motion/react'
import { useToggle } from '../hooks/useToggle'
import logout from '../utils/logout'
import PropTypes from 'prop-types'
import { deleteConversation } from '../utils/deleteConversation'

const TopAppBar = ({ toggleSidebar }) => {
    const navigation = useNavigation();
    const navigate = useNavigate();
    const params = useParams();
    const [showMenu, setShowMenu] = useToggle();
    const { user, conversations } = useLoaderData();
    const submit = useSubmit();
    const isNormalLoad = navigation.state === 'loading' && !navigation.formData;
    console.log(isNormalLoad);
    return (
        <React.Fragment>
            <header className="relative flex justify-between items-center h-16 px-4">
                <div className="flex items-center gap-1">
                    
                    <IconBtn
                        icon='menu'
                        title='menu'
                        classes='lg:hidden'
                        onClick={toggleSidebar}
                        size='small'
                    />
                    {/* <Logo classes='lg:hidden  ms-12 ' /> */}
                </div>
                {
                    params.conversationId && (
                        <IconBtn
                            icon='delete'
                            title='delete'
                            classes='ms-auto  me-1 lg:hidden'
                            onClick={() => {
                                console.log('conversations', conversations);
                                const { title } = conversations.documents.find(
                                    ({ $id }) => params.conversationId === $id,
                                );
                                deleteConversation({
                                    id: params.conversationId,
                                    title,
                                    submit
                                })
                            }}
                            size='small'
                        />
                    )
                }
                <div className='menu-wrapper'>
                    <IconBtn onClick={setShowMenu}>
                        <Avatar name={user.name} />
                    </IconBtn>

                    <Menu classes={showMenu ? 'active' : ''}>
                        <MenuItem labelText='Log out' onClick={() => logout(navigate)} />
                    </Menu>
                </div>


                <AnimatePresence>
                    {isNormalLoad && (
                        <div className='absolute overflow-hidden h-10 top-full left-2 right-16 z-10'>
                            <div className="relative h-4 w-full">
                                <div className="absolute h-[1px] top-3/4 w-[80%] left-2 right-16 bg-light-primary dark:bg-dark-primary animate-loading" />
                            </div>
                        </div>
                    )}
                </AnimatePresence>
            </header>
        </React.Fragment>
    )
};
TopAppBar.propTypes = {
    toggleSidebar: PropTypes.func
}
export default TopAppBar;
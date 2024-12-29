import React from 'react'
import { ExtendedFab, IconBtn } from './Button'
import { NavLink, useLoaderData, useParams, useSubmit } from 'react-router-dom'
import PropTypes from 'prop-types'
import { motion } from 'motion/react';
import { deleteConversation } from '../utils/deleteConversation'

export const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {

    const { conversations: { documents: conversationData } } = useLoaderData() || {};

    const submit = useSubmit();
    const {conversationId} = useParams();

    return (
        <React.Fragment>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
                <div className="sidebar-inner">
                    {/* <div className="h-16 grid items-center px-8 mb-">
                        <Logo />
                    </div> */}
                           <ExtendedFab
                        classes='lg:mt-4 md:mt-20 sm:mt-20 mt-20'
                        href='/'
                        text='New chat'
                        onClick={toggleSidebar}
                        disabled={!conversationId}
                    />

                
                    <div className="overflow-y-auto -me-2 pe-1 mt-10">
                        <p className="text-titleSmall h-9 grid items-center px-4">Recent</p>
                        <nav className="">
                            {conversationData?.map((item) => (
                                <div key={item?.$id} className="relative group my-2">
                                    <NavLink
                                        to={item?.$id}
                                        className='nav-link'
                                        title={item?.title}
                                        onClick={toggleSidebar}
                                    >
                                        <span className='material-symbols-rounded icon-small'>
                                            chat_bubble
                                        </span>
                                        <span className='truncate'>
                                            {item?.title}
                                        </span>
                                        <div className='state-layer '>

                                        </div>
                                    </NavLink>
                                    <IconBtn
                                        icon='delete'
                                        size='small'
                                        classes='
                                                absolute top-[60%] right-1.5 
                                                -translate-y-1/2 z-10 opacity-0 
                                                group-hover:opacity-100
                                                group:focus-within:opacity-100 hidden lg:grid'
                                        title='Delete'
                                        onClick={() => {
                                            deleteConversation({
                                                id: item.$id,
                                                title: item.title,
                                                submit,
                                            })
                                        }}
                                    />
                                </div>
                            )
                            )}
                        </nav>
                    </div>
                    {/* <div className=' 
                    mt-4 
                    h-14 
                    px-4 
                    lg:grid 
                    items-center 
                    text-labelLarge 
                  text-light-onSurfaceVariant
                  dark:text-dark-onSurfaceVariant 
                    border-t
                  border-light-surfaceContainerHigh
                  dark:border-dark-surfaceContainerHigh
                    truncate
                    hidden
                    '>
                        &copy; 2024 code with chat
                    </div> */}
                </div>
            </motion.div>

            {/* <div 
            className={`overlay ${isSidebarOpen ? 'active' : ''}`}
                onClick={toggleSidebar}
            >
              
            </div> */}
            
        </React.Fragment>
    )
}


Sidebar.propTypes = {
    isSidebarOpen: PropTypes.bool.isRequired,
    toggleSidebar: PropTypes.func.isRequired,
}

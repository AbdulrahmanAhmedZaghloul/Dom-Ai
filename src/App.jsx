import React, { useEffect, useRef } from 'react'
import './index.css'
import PageTitle from './components/PageTitle'
import TopAppBar from './components/TopAppBar'
import { Sidebar } from './components/Sidebar'
import { useToggle } from './hooks/useToggle'
import { Greetings } from './pages/Greetings'
import { motion } from 'motion/react';
import { PromptField } from './components/PromptField'
import { Outlet, useActionData, useNavigation, useParams } from 'react-router-dom'
import { useSnackbar } from './hooks/useSnackbar'
import { usePromptPreloader } from './hooks/usePromptPreloader'

function App() {

  const params = useParams();
  const navigation = useNavigation();
  const actionData = useActionData();
  const [isSidebarOpen, toggleSidebar] = useToggle();
  const { showSnackbar } = useSnackbar();
  const { promptPreloaderValue } = usePromptPreloader();
  const isNormalLoad = navigation.state === 'loading' && !navigation.formData;
  const chatHistoryRef = useRef();
  useEffect(() => {
    const chatHistory = chatHistoryRef.current;
    if (promptPreloaderValue) {
      chatHistory.scroll({
        top: chatHistory.scrollHeight - chatHistory.clientHeight,
        behavior: 'smooth',
      })
    }
  }, [promptPreloaderValue, chatHistoryRef])


  useEffect(() => {
    if (actionData?.conversationTitle) {
      showSnackbar({
        message: `Deleted '${actionData.conversationTitle}conversation'`
      })
    }
  }, [actionData,showSnackbar])

  return (
    <React.Fragment>
      <PageTitle title='Chat Ai' />

      <div className="lg:grid lg:grid-cols-[320px,1fr]">
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
        <div className="h-dvh grid grid-rows-[max-content,minmax(0,1fr),max-content]">
          <TopAppBar toggleSidebar={toggleSidebar} />
          <div className="px-5 pb-5 flex flex-col overflow-y-auto">
            <div ref={chatHistoryRef} className="max-w-[840px] w-full mx-auto grow">
              {isNormalLoad ? null : params.conversationId ? (
                <Outlet />
              ) : 
              <Greetings />
              }
            </div>
          </div>
          <div className="bg-light-background dark:bg-dark-background">
            <div className='max-w-[870px] w-full mx-auto'>
              <PromptField />
              <motion.p
                initial={{ opacity: 0, translateY: '-4px' }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.2, delay: 0.8, ease: 'easeOut' }}
                className='text-bodySmall text-center 
              text-light-onSurfaceVariant  dark:text-dark-onSurfaceVariant p-3
              mb-4
              '>
                ChatAi May display inaccurate info including about people,
                so double-check its response
                <a className='inline underline ms-1' target='_blank'
                  href="https://support.google.com/gemini?p=privacy_notice">
                  Your privacy & Gemini Apps
                </a>
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default App

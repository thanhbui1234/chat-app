import style from './App.module.scss'
import Chat from './components/chat'
import Detail from './components/detail'
import List from './components/list'
import clsx from 'clsx';

import { DarkModeProvider } from './contexts/DarkmodeContext';


export default function App() {
  return (
    <DarkModeProvider>
    <div className={clsx(style.container, 'flex dark:bg-gray-900')}>
      <List></List>
      <Chat></Chat>
      <Detail></Detail>
    </div>
    </DarkModeProvider>

  )
}
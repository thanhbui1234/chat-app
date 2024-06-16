import style from './App.module.scss'
import Chat from './components/chat'
import Detail from './components/detail'
import List from './components/list'
import clsx from 'clsx';

export default function App() {
  return (
    <div className={clsx(style.container, 'flex')}>
      <List></List>
      <Chat></Chat>
      <Detail></Detail>
    </div>
  )
}
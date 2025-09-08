import Feed from './pages/Feed'
import Chat from './pages/Chat'
import Perfil from './pages/Perfil'
import Loja from './pages/Loja'
import Video from './pages/Video'
import { Header, TabBar } from './components/ui'
import { useState } from 'react'

const { parse, stringify} = JSON

const App = () => {

  const [pages, setPages] = useState([
    {
      name: 'Feed',
      hidden: false,
    },
    {
      name: 'Chat',
      hidden: true,
    },
    {
      name: 'Video',
      hidden: true,
    },
    {
      name: 'Loja',
      hidden: true,
    },
    {
      name: 'Perfil',
      hidden: true,
    },
  ])

  function handlePage(name) {
    const pagesCopy = parse(stringify(pages))
    const index = pages.findIndex((item) => item.name.toLowerCase() === name.toLowerCase())

    for(let i = 0; i < pagesCopy.length; i++) {
      pagesCopy[i].hidden = true
    }

    pagesCopy[index].hidden = false

    setPages(pagesCopy)
  }

  return (
    <>
      <Header />
        {!pages[0].hidden && <Feed />}
        {!pages[1].hidden && <Chat />}
        {!pages[2].hidden && <Video />}
        {!pages[3].hidden && <Loja />}
        {!pages[4].hidden && <Perfil />}
      <TabBar setPage={handlePage}/>
    </>
  )
}

export default App

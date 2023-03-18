import { Header } from './components/Header'
import { Menu } from './components/Menu'
import { Explorer } from './components/Explorer'

import './styles/global.css'
import { ArchiveTitleOpenned } from './components/ArchiveTitleOpenned'
import { ArchiveContent } from './components/ArchiveContent'
import { Fragment, useState } from 'react'

function App() {
  const [isArchiveOpenned, setIsArchiveOpenned] = useState(false)
  const [archiveContent, setArchiveContent] = useState('')

  console.log(isArchiveOpenned)

  return (
    <div className="z-10 h-screen p-20 flex items-center justify-center">
      <div className="bg-[#232135] overflow-hidden border border-[#72707D] w-full max-w-[1480px] aspect-video shadow-md shadow-black/20 rounded-lg">
        <div className="mt-1">
          <Header />
        </div>

        <div className="h-full pt-1 flex">
          <Menu />
          <Explorer
            isArchiveOpenned={setIsArchiveOpenned}
            archiveContent={setArchiveContent}
          />
          <div className="w-3/4 bg-[#232136]">
            <div className="w-full h-9 pl-8">
              {isArchiveOpenned && (
                <Fragment>
                  <ArchiveTitleOpenned
                    isArchiveOpenned={setIsArchiveOpenned}
                    archiveContent={setArchiveContent}
                  />
                  <ArchiveContent content={archiveContent} />
                </Fragment>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

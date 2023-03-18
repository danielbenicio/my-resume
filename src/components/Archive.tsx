import { FileCode } from 'lucide-react'
import { Dispatch, Fragment, SetStateAction } from 'react'

interface ArchiveProps {
  content: string
  isArchiveOpenned?: Dispatch<SetStateAction<boolean>>
  archiveContent?: Dispatch<SetStateAction<string>>
}

export function Archive({
  content,
  isArchiveOpenned,
  archiveContent,
}: ArchiveProps) {
  function handleOpenArchive() {
    if (isArchiveOpenned && archiveContent) {
      isArchiveOpenned(true)
      archiveContent(content)
    }
  }

  return (
    <Fragment>
      <button
        type="button"
        className="pl-11 flex items-center gap-2 h-7 transition duration-200 ease-out hover:bg-[#2a273f] hover:text-[#E0DEF2]"
        onClick={() => handleOpenArchive()}
      >
        <FileCode size={16} />
        <span className="text-sm">index.ts</span>
      </button>
    </Fragment>
  )
}

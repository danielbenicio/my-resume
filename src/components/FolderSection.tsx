import { ChevronDown, ChevronRight, Folder } from 'lucide-react'
import { Dispatch, Fragment, SetStateAction, useState } from 'react'
import { Archive } from './Archive'

interface FoldersDataProps {
  title: string
  content: string
  isArchiveOpenned?: Dispatch<SetStateAction<boolean>>
  archiveContent?: Dispatch<SetStateAction<string>>
}

export function FolderSection({
  title,
  content,
  isArchiveOpenned,
  archiveContent,
}: FoldersDataProps) {
  const [isFolderOpened, setIsForderOpened] = useState(false)

  return (
    <Fragment>
      <button
        className="flex gap-1 pl-3 items-center h-7 w-full transition duration-200 ease-out hover:bg-[#2a273f] hover:text-[#E0DEF2]"
        onClick={() => setIsForderOpened((prevState) => !prevState)}
      >
        {isFolderOpened ? (
          <ChevronDown size={20} />
        ) : (
          <ChevronRight size={20} />
        )}

        <div className="flex items-center gap-2">
          <Folder size={16} />
          <span className="font-normal text-sm">{title}</span>
        </div>
      </button>
      {isFolderOpened && (
        <Archive
          isArchiveOpenned={isArchiveOpenned}
          archiveContent={archiveContent}
          content={content}
        />
      )}
    </Fragment>
  )
}

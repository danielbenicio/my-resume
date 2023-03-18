import { ChevronDown, ChevronRight } from 'lucide-react'
import { Dispatch, SetStateAction, useState } from 'react'
import { FolderSection } from './FolderSection'

interface FoldersDataProps {
  title: string
  description: string
}

interface WorkspaceProps {
  title: string
  foldersData?: FoldersDataProps[]
  isArchiveOpenned?: Dispatch<SetStateAction<boolean>>
  archiveContent?: Dispatch<SetStateAction<string>>
}

export function Workspace({
  title,
  foldersData,
  isArchiveOpenned,
  archiveContent,
}: WorkspaceProps) {
  const [isWorkspaceOpened, setIsWorkspaceOpened] = useState(false)

  return (
    <div className="w-full h-full text-[#84829D]">
      <button
        type="button"
        className="flex gap-2 items-center w-full"
        onClick={() => setIsWorkspaceOpened((prevState) => !prevState)}
      >
        {isWorkspaceOpened ? (
          <ChevronDown size={20} />
        ) : (
          <ChevronRight size={20} />
        )}
        <h1 className="font-semibold text-xs uppercase">{title}</h1>
      </button>

      <div className="mt-2 flex flex-col gap-[2px]">
        {isWorkspaceOpened && foldersData
          ? foldersData.map((folder, index) => (
              <FolderSection
                key={index}
                title={folder.title}
                content={folder.description}
                isArchiveOpenned={isArchiveOpenned}
                archiveContent={archiveContent}
              />
            ))
          : null}
      </div>
    </div>
  )
}

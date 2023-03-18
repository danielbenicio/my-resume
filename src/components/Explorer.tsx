import { Workspace } from './Workspace'
import { MY_RESUME_DATA } from '../constants/my-resume-data'
import { MoreHorizontal } from 'lucide-react'
import { Dispatch, SetStateAction } from 'react'

interface ExplorerProps {
  isArchiveOpenned: Dispatch<SetStateAction<boolean>>
  archiveContent: Dispatch<SetStateAction<string>>
}

export function Explorer({ isArchiveOpenned, archiveContent }: ExplorerProps) {
  return (
    <div className="w-64 pl-6 pt-1">
      <div className="flex items-center justify-between mb-4">
        <h1 className="font-medium text-xs text-[#84829D] uppercase">
          explorer
        </h1>
        <MoreHorizontal color="#84829D" size={14} />
      </div>

      <div className="flex flex-col gap-1">
        <Workspace title="open editors" />
        <Workspace
          title="MY-RESUME"
          foldersData={MY_RESUME_DATA}
          isArchiveOpenned={isArchiveOpenned}
          archiveContent={archiveContent}
        />
      </div>
    </div>
  )
}

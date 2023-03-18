import { FileCode, X } from 'lucide-react'
import { Dispatch, SetStateAction } from 'react'

interface ArchiveTitleOpennedProps {
  isArchiveOpenned: Dispatch<SetStateAction<boolean>>
  archiveContent: Dispatch<SetStateAction<string>>
}

export function ArchiveTitleOpenned({
  archiveContent,
  isArchiveOpenned,
}: ArchiveTitleOpennedProps) {
  function handleCloseArchive() {
    isArchiveOpenned(false)
    archiveContent('')
  }

  return (
    <div className="h-full w-[7.4rem] bg-[#817c9c14] rounded-sm flex items-center justify-center gap-1 text-white hover:bg-[#817c9c26]">
      <FileCode size={14} />
      <small className="text-sm mr-1">index.ts</small>
      <button
        type="button"
        className="p-[2px] hover:bg-[#817c9c26] cursor-pointer"
        onClick={handleCloseArchive}
      >
        <X size={14} strokeWidth={2} />
      </button>
    </div>
  )
}

import { createLinesFromText } from '../utils/create-lines-from-text'

interface ArchiveContentProps {
  content: string
}

export function ArchiveContent({ content }: ArchiveContentProps) {
  let maxCharsPerLine = 100

  if (window.screen.width <= 1366) {
    maxCharsPerLine = 82
  }

  const lines = createLinesFromText(content, maxCharsPerLine)

  return (
    <div className="w-full flex flex-col gap-2 text-[#9CCFD8] mt-1 max-[1366px]:h-[37rem] xl:overflow-y-auto h-[45rem] overflow-y-auto  scrollbar scrollbar-thumb-[#2B283B] scrollbar-track-transparent">
      <div className="flex gap-1 flex-col">
        {lines.map((line, index) => (
          <div key={index} className="flex">
            {index !== lines.length - 0 && (
              <div className="w-10">
                <span className="font-code text-[#908CAA]">{index + 1}</span>
              </div>
            )}
            {line.content.includes('https') ? (
              <a
                className="font-code text-[#908CAA]"
                href={line.content}
                target="_blank"
                rel="noreferrer"
              >
                {line.content}
              </a>
            ) : (
              <span className="font-code">{line.content}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

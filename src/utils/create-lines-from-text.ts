export function createLinesFromText(text: string, maxCharsPerLine: number) {
  const words = text.split(' ')
  const lines = []
  let currentLine = { content: '', number: 0 }

  for (let i = 0; i < words.length; i++) {
    const word = words[i]

    if (word.includes('./') || word.includes('.\\')) {
      lines.push(currentLine)
      currentLine = { content: '', number: currentLine.number + 1 }
      if (word.includes('./')) {
        lines.push({ content: '', number: currentLine.number })
      }
    } else if (currentLine.content.length + word.length <= maxCharsPerLine) {
      currentLine.content += `${word} `
    } else {
      lines.push(currentLine)
      currentLine = { content: `${word} `, number: currentLine.number + 1 }
    }
  }

  lines.push(currentLine)
  return lines
}

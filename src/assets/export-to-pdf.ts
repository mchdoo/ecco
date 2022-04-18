import { unified } from 'unified'
import { remark } from 'remark'
import pdf from 'remark-pdf'
import * as fs from 'fs'

const processor = remark().use(pdf, {output: 'buffer'})

export default async function pdfExport(markdown: string) {

    const doc = await processor.process(markdown)
    const buffer = await doc.result;
    
    // fs.writeFileSync("example.pdf", buffer)
}
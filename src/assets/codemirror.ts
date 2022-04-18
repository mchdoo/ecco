
import { HighlightStyle, tags } from '@codemirror/highlight'
import { EditorView } from '@codemirror/view'

export const pedrito = EditorView.theme({
    "&": {
        height: '100%',
        border: 'none',
        "&:focus": {
            outline: 'none'
        }
    },
    ".cm-content": {
        fontFamily: 'Roboto Mono, monospace',
    }
})

export const highlighter = HighlightStyle.define([
    {
        tag: tags.heading1,
        fontSize: '1.8rem',
        fontWeight: 600
    },
    {
        tag: tags.heading2,
        fontSize: '1.5rem',
        fontWeight: 600
    },
    {
        tag: tags.heading3,
        fontSize: '1.3rem',
        fontWeight: 600,
    }
])
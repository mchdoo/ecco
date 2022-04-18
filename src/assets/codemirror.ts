
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
        fontSize: '1.2rem',
        fontWeight: 600
    },
    {
        tag: tags.heading2,
        fontWeight: 600
    },
    {
        tag: tags.heading3,
        fontWeight: 600,
    }
])

import { HighlightStyle, tags } from '@codemirror/highlight'
import { EditorView } from '@codemirror/view'

export const pedrito = EditorView.theme({
    "&": {
        height: '100%',
        border: 'none',
        backgroundColor: '#eee',
        borderRight: "1px solid #ddd",
    },
    ".cm-content": {
        fontFamily: 'Roboto Mono, monospace',
        padding: 0,
    },
    ".cm-activeLine": {
        backgroundColor: '#e5e5e5'
    },
    ".cm-activeLineGutter": {
        backgroundColor: '#eee'
    },
    ".cm-gutter": {
        backgroundColor: '#eee',
        "&.cm-lineNumbers": {
            minWidth: '2rem'
        }
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
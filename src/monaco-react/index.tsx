import * as Y from 'yjs'
import { WebsocketProvider } from 'y-websocket'
import { MonacoBinding } from 'y-monaco'

import React, { useEffect, useMemo, useState } from 'react'
import Editor from '@monaco-editor/react'

function MonacoEdit() {
  const ydoc = useMemo(() => new Y.Doc(), [])
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [editor, setEditor] = useState<any|null>(null)
  const [provider, setProvider] = useState<WebsocketProvider|null>(null)
  const [binding, setBinding] = useState<MonacoBinding|null>(null)

  // this effect manages the lifetime of the Yjs document and the provider
  useEffect(() => {
    // const provider = new WebsocketProvider('wss://demos.yjs.dev/ws', 'monaco-react-2', ydoc)
    // setProvider(provider)
    // return () => {
    //   provider?.destroy()
    //   ydoc.destroy()
    // }
  }, [ydoc])

  useEffect(() => {
    // if (provider == null || editor == null) {
    //   return
    // }
    // console.log('reached', provider)
    // const binding = new MonacoBinding(ydoc.getText(), editor.getModel()!, new Set([editor]), provider?.awareness)
    // setBinding(binding)
    // return () => {
    //   binding.destroy()
    // }
  }, [ydoc, provider, editor])

  return <Editor 
    height="90vh" 
    defaultValue="// some comment"
    defaultLanguage="javascript" 
    onMount={editor => { setEditor(editor) }} />
}

export default MonacoEdit
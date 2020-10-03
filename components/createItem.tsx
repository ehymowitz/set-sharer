import React, { useState } from 'react'
import { useFeed } from './util/hooks'
import { mutate } from 'swr'

const CreateItem = () => {
  const [input, setInput] = useState("")
  const { feed } = useFeed()

  return (
    <form
      onSubmit = {async e => {
          e.preventDefault()

          mutate("/api/feed", [{text: input, author: me}, ...feed], false)
          setInput("")
      }}
    >
      <input value = {input} onChange = { e => setInput(e.target.value)} />
      <input type="submit" value="add"/>
    </form>
  )
}

export default CreateItem

import React, { useState } from 'react'
import { fetcher } from './util/fetcher'
import { useSongs } from './util/hooks'
import { mutate } from 'swr'

const CreateItem = () => {
  const [name, setName] = useState("")
  const [madeBy, setMadeBy] = useState("")
  const { songs } = useSongs()

  return (
    <form
      onSubmit = {async e => {
          e.preventDefault()

          mutate("/api/songs", [{name: name, madeBy: madeBy}, ...songs], false)
          fetcher("/api/song/create", {
            name: name,
          })
          setName("")
          setMadeBy("")
      }}
    >
      <input value = {name} onChange = { e => setName(e.target.value)} />
      <input value = {madeBy} onChange = { e => setMadeBy(e.target.value)} />
      <input type="submit" value="add"/>
    </form>
  )
}

export default CreateItem

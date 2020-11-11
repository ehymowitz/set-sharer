import { useState, useCallback } from 'react'
import { parse, stringify } from 'query-string'

const setQueryStringWithoutPageReload = (qsValue: string) => {
  const newurl = `${qsValue}`

  history.pushState({ path: newurl }, "", newurl)
}

export const getQueryStringValue = (
  key: string,
  queryString: string = location.search
) => {
  const values = parse(queryString)
  return values[key] as string
};

const setQueryStringValue = (
  key: string,
  value: string,
  queryString: string = location.search
) => {
  const values = parse(queryString)
  const newQsValue = stringify({ ...values, [key]: value })
  setQueryStringWithoutPageReload(`?${newQsValue}`)
}

export const useQueryString = (key: string) => {
  const [value, setValue] = useState(key)
  const onSetValue = useCallback(
    value => {
     setValue(value);
     setQueryStringValue(key, value)
    },
    [key]
  )
  return [value, onSetValue] as const
}

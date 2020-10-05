import useSWR from 'swr'
import { fetcher } from './fetcher'

export function useSongs() {
  const { data: songs } = useSWR("/api/songs", fetcher)
  return { songs }
}

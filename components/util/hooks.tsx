import useSWR from 'swr'
import  { Song, Set } from '@prisma/client'
import { fetcher } from './fetcher'

export function useSongs() {
  const { data: songs }: { data?: (Song & { Set: Set})[] } = useSWR("/api/songs", fetcher)
  return { songs }
}

export function useGigInfo() {
  const { data: gigInfo }: { data?: Set } = useSWR("/api/set", fetcher)
  return { gigInfo }
}

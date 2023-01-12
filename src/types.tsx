import { ReactNode } from 'react'

export type SearchResult = {
  children: ReactNode
  id: string
  prefix?: ReactNode
  route: string
}

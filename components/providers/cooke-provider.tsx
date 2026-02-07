'use client'

import { ChildProps } from '@/types'
import { CookiesProvider } from 'react-cookie'

export function CookieProvider({ children }: ChildProps) {
	return <CookiesProvider>{children}</CookiesProvider>
}

import React from 'react'
import '@/assets/css/auth.css'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className='auth-layout'>
			<h1>Auth Layout</h1>
			{children}
		</div>
	)
}

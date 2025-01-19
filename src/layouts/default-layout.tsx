import React from 'react'

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
	if (!isLoggedIn) return <Navigate to='/auth' />

	return <div className='default-layout'>{children}</div>
}

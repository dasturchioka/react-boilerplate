import React from 'react'
import { Button } from './shared/ui/button'
import { AuthLoginPage } from './auth'
import { AuthLoginStore } from './auth'

export default function App() {
	return (
		<div>
			<Button>Hello world</Button>
			<AuthLoginPage />
		</div>
	)
}

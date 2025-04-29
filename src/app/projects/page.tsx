'use client'

import { Project } from '@/components/project'

export default function Projects() {
	return (
		<>
		<div className='Page'>
			<h2 style={{color: '#1E1E1E', fontWeight: '500',  margin: '0', marginTop: '20px'}}>Projects</h2>
			<Project />
			<Project />
		</div>
		</>
	)
}
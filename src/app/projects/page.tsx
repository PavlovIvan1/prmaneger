'use client'

import { Project } from '@/components/project'
import { useState } from 'react'

export default function Projects() {
	const [projects, setProjects] = useState([])
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
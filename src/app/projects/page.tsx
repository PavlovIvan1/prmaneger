'use client'

import { Project } from '@/components/project'
import { getProjects } from '@/services/requests'
import { useEffect } from 'react'

export default function Projects() {

	useEffect(() => {
    getProjects()
      .then((data) => console.log("data", data))
      .catch(console.error);
  }, []);

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
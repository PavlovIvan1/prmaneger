// 'use client'

// import { Project } from '@/components/project'
// import { getProjects } from '@/services/requests'
// import { useEffect } from 'react'

// export default function Projects() {

// 	useEffect(() => {
//     getProjects()
//       .then((data) => console.log("data", data))
//       .catch(console.error);
//   }, []);

// 	return (
// 		<>
// 		<div className='Page'>
// 			<h2 style={{color: '#1E1E1E', fontWeight: '500',  margin: '0', marginTop: '20px'}}>Projects</h2>
// 			<Project />
// 			<Project />
// 		</div>
// 		</>
// 	)
// }

'use client'

import { Project } from '@/components/project'
import { API_URL } from '@/config/config'
import axios from 'axios'
import { useEffect } from 'react'

export default function Projects() {
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const userId = window.Telegram?.WebApp?.initDataUnsafe?.user?.id
        
        if (!userId) {
          console.warn('Telegram user ID not available')
          return
        }

        const response = await axios.get(`${API_URL}/projects`, {
          headers: {
            'x-user-id': userId,
            'Content-Type': 'application/json'
          }
        })

        console.log('Server response:', response.data)
      } catch (err) {
        console.error('Failed to fetch projects:', err)
      }
    }

    fetchProjects()
  }, [])

  return (
    <div className="Page">
      <h2 style={{ color: '#1E1E1E', fontWeight: '500', margin: '0', marginTop: '20px' }}>
        Projects
      </h2>
			<Project />
			<Project />
    </div>
  )
}
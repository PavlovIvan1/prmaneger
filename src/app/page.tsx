'use client'

import { Daily } from '@/components/dailytasks'
import { Pinned } from '@/components/pinned'
import { Settings, UserCircleIcon } from 'lucide-react'

// init()
// viewport.mount()
// viewport.expand()

export default function Home() {
  return (
    <>
      <div className='Page'>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <UserCircleIcon width={30} height={30} />
          </div>
          <Settings />
        </div>
        <Pinned />
        <Daily />
      </div>
    </>
  );
}

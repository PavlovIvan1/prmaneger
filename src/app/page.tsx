'use client'

import { Daily } from '@/components/dailytasks'
import { Pinned } from '@/components/pinned'
import { Settings, UserCircleIcon } from 'lucide-react'
import { useEffect } from 'react'

export default function Home() {

  useEffect(() => {
    if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
      console.log("initData", window.Telegram.WebApp.initData)
      window.Telegram.WebApp.ready()
    }
  }, [])

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

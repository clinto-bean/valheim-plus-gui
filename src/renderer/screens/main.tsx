import { useEffect } from 'react'

import {
  Alert,
  AlertTitle,
  AlertDescription,
} from 'renderer/components/ui/alert'

// The "App" comes from the context bridge in preload/index.ts
const { App } = window

export function MainScreen() {
  useEffect(() => {
    // check the console on dev tools
    App.sayHelloFromBridge()
  }, [])

  const userName = App.username || 'Viking'

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-black">
      <Alert className="mt-5 bg-transparent border-transparent text-accent w-fit">
        <AlertTitle className="text-5xl text-[#FFD700]">
          Hello, {userName}!
        </AlertTitle>

        <AlertDescription className="flex items-center gap-2 text-lg">
          <span className="text-gray-400">
            Ready to set up Valheim Plus?
          </span>
        </AlertDescription>
      </Alert>
      <button className="cursor-pointer active:translate-y-0.5 transition-all p-2 rounded-[4px] w-[300px] bg-[#FFD700] text-black active:bg-orange-600">Start</button>
    </main>
  )
}

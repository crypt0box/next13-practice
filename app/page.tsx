import { Suspense } from 'react'
import NotesList from './components/notes-list'
import RefreshBtn from './components/refresh-button'
import Spinner from './components/spinner'
import TimerCounter from './components/timer-counter'

export default function Page() {
  return (
    <main>
      <div className="m-10 text-center">
        <p>Hello World🦐</p>
        <Suspense fallback={<Spinner color="border-green-500" />}>
          {/* @ts-ignore */}
          <NotesList />
        </Suspense>
        <TimerCounter />
        <RefreshBtn />
      </div>
    </main>
  )
}

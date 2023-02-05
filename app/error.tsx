'use client'

export default function Error({ error }: { error: Error }) {
  return (
    <div>
      <p className="mt-6 text-center text-red-500">
        Data Fetching in server failed
      </p>
    </div>
  )
}

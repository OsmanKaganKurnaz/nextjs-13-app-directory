import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <br/>
      <Link href={'/test'}>TEST</Link>
      <br/>
      <br/>
      <Link href={'/test/test-2'}>TEST2</Link>
      <br/>
      <br/>
      <Link href={'/test/error'}>ERROR</Link>
      <br/>
      <br/>
    </div>
  )
}

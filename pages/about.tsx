
import Link from 'next/link'
import { FC } from 'react'
import DarkLayout from '../components/layouts/DarkLayout'
import MainLayout from '../components/layouts/MainLayout'



export default function About() {
  return (
    <> 
      

      <h1>About Page</h1>

    <h1 className="title">
      {/* Ir a <a href="/about">About</a> */}
      Ir a<Link href="/contact">Contact</Link>
    </h1>

    <p className="description">
      Get started by editing{' '}
      <code className="code">pages/about.js</code>
    </p>
      
    </>
  )
}


About.getLayout = function getLayout(page:JSX.Element){
  return (
    <MainLayout>
      <DarkLayout>
      {page}
      </DarkLayout>
    </MainLayout> 
  )
}

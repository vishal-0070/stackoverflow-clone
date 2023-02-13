import React from 'react'
import './RightSideBar.css'
import Widget from './Widget'
import Widgettags from './Widgettags'

export default function RightSideBar() {
  return (
    <section className='right-sidebar'>
       <Widget/>
       <Widgettags/>
    </section>
  )
}

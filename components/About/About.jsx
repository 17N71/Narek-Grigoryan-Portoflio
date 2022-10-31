import React, { useContext } from 'react'
import Table from '../Table/Table';
import { dataContext } from './../../pages/index';
import Article from './../Article/Article';

const About = () => {
  const {data,lang} = useContext(dataContext)
  const par = data.data.left.about.paragraph
  const title = data.data.left.about.title
  const heading = data.data.left.about.heading
  const table = data.data.left.about.table

  return (
    <div name="about" className='flex flex-col gap-2 min-h-screen'>
        <Article par={par} title={title} heading={heading} />
        <Table table={table} />
    </div>
  )
}

export default About
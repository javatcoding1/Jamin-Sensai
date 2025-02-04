import { getResume } from '@/actions/resume'
import React from 'react'
import ResumeBuilder from './_components/resume-builder'
const ResumePage = async() => {
    const resume=await getResume()
  return (
    <div className='container mx-auto py-6'>
        <ResumeBuilder initialConten={resume?.content}/>
    </div>
  )
}

export default ResumePage
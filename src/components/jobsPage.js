import React from 'react'
import createList from './listFactory'

const JobStoriesList = createList('jobstories')

export default () => (
  <div>
    <h2>Job stories</h2>
    <JobStoriesList />
  </div>
)
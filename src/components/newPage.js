import React from 'react'
import createList from './listFactory'

const NewStoriesList = createList('newstories')

export default () => (
  <div>
    <h2>New stories</h2>
    <NewStoriesList />
  </div>
)
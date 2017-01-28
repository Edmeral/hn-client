import React from 'react'
import createList from './listFactory'

const TopStoriesList = createList('topstories')

export default () => (
  <div>
    <h2>Top stories:</h2>
    <TopStoriesList />
  </div>
)
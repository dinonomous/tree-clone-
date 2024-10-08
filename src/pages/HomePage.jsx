import React from 'react'
import Format from '../components/Format'
import PageOne from '../components/PageOne'
import Pagetwo from '../components/Pagetwo'
import PageThree from '../components/PageThree'
import PageFour from '../components/PageFour'
import PageFive from '../components/PageFive'
import PageSix from '../components/PageSix'
import PageSeven from '../components/PageSeven'
import FeaturePage from '../components/FeaturePage'
import AuthorPage from '../components/AuthorPage'
import DropdownPage from '../components/DropdownPage'
import '../App.css'

const HomePage = () => {
    return (
        <Format>
          <PageOne />
          <Pagetwo />
          <PageFour />
          <PageThree />
          <PageFive />
          <PageSix />
          <PageSeven />
          <FeaturePage />
          <AuthorPage />
          <DropdownPage />
        </Format>
      )
}

export default HomePage
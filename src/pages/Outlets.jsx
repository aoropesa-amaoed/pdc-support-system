import React from 'react'
import OutletsTable from '../components/OutletsTable'
import '@fontsource/roboto/300.css';
import Container from '@mui/material/Container'
import PageTitle from '../components/PageTitle';
import HeaderNav from '../components/HeaderNav';
import Footer from '../components/Footer';

const Outlets = () => {
  return (
    <>
      <HeaderNav />
      <Container>
        <PageTitle />
        <OutletsTable />
      </Container>
      <Footer />
    </>
  )
}

export default Outlets
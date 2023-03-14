import React from "react"
import {Banner} from "../components/Banner"
import Container from 'react-bootstrap/Container'

export const Home = () => {
  return (
    <Container className="outside">
      <Banner/>
    </Container>
  )
}
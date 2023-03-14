import React from "react"
import Container from 'react-bootstrap/Container'

export const About = () => {
  return (
    <>
    <Container className="outside"><h1>Biography</h1></Container>
    <Container className="inside">
      <p>Welcome to Coding Finesse! I built this site from the ground up with the intent of using it as a formal channel to interact with the public. It will also serve as a technical resource for aspiring programmers.</p>

      <p>My name is Darren and I have been passionate about technology for as long as I can remember. I recently decided to make a career out of it and with both feet on the gas pedal, this transition has been a combination of excitement and terror. I've been both excited and terrified about all the possibilities and knowledge that I have yet to discover.</p>

      <p>One of the biggest challenges concerning my transition is the overabundance of resources that are readily available with a simple google search. While this might seem beneficial, it's really a crutch that causes decision fatigue. Too much of anything is never a good thing. To make matters worse, the majority of these online resources are sorely lacking in quality.</p>

      <p>For this reason, this website will strive to deliver information as simple and straightforward as possible without sacrificing any quality. Thank you for taking the time to visit my page!</p>
    </Container>
    </>
  )
}
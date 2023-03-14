import React from "react"
import { Navigation } from "./Navigation"
import { Footer } from "./Footer"
import { Container } from "react-bootstrap"

export const Layout = ({ children }) => {
    return (
        <div>
            <Navigation />
                <main>{children}</main>    
            <Footer />
        </div>
        )
}
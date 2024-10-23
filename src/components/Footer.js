import React from "react";
import {Row,Col} from 'react-bootstrap'

const footer = () =>{
   const currentYear = new Date().getFullYear()

    return(
        <footer>
        <Row className="text-center">
            <Col>
               VTU &copy;{currentYear}
            </Col>
        </Row>
        </footer>
    )
}
export default footer;
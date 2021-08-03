import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const MatrixDataComponent = ({ gridData, columnClick }) => {

    const gridColumnClick = (data) => {
        if (data.isClicked === false) {
            let id = data.id;
            let gname = data.gname;
            let bgColor = 'redBgColor';
            let isClicked = true;
            let sdata = {
                id,
                gname,
                bgColor,
                isClicked
            }
            columnClick(sdata);
        }
    }
    let dispGridList = gridData && gridData.length > 0 && gridData[0].map(item => (
        <Col
            xs='3'
            key={item.gname}
            className={item.bgColor + ' ' + item.gname}
            onClick={(e) => gridColumnClick(item)}
            style={{ height: "100px" }}
        >
            {item.isClicked === true ? item.gname : ''}
        </Col>
    ));


    return (
        <Container>
            <Row className="row">
                {dispGridList}
            </Row>
        </Container>
    );
}

export default MatrixDataComponent;

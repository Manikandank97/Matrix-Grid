import React, { useState, useEffect } from 'react';
import { Container } from 'reactstrap';
import MatrixDataComponent from './MatrixDataComponent';

function MatrixDashboard() {

  useEffect(() => {
    const gridData = [
      { id: 0, gname: 'Box #1', bgColor: 'blueBgColor', isClicked: false },
      { id: 1, gname: 'Box #2', bgColor: 'blueBgColor', isClicked: false },
      { id: 2, gname: 'Box #3', bgColor: 'blueBgColor', isClicked: false },
      { id: 3, gname: 'Box #4', bgColor: 'blueBgColor', isClicked: false },
      { id: 4, gname: 'Box #5', bgColor: 'blueBgColor', isClicked: false },
      { id: 5, gname: 'Box #6', bgColor: 'blueBgColor', isClicked: false },
      { id: 6, gname: 'Box #7', bgColor: 'blueBgColor', isClicked: false },
      { id: 7, gname: 'Box #8', bgColor: 'blueBgColor', isClicked: false },
      { id: 8, gname: 'Box #9', bgColor: 'blueBgColor', isClicked: false },
      { id: 9, gname: 'Box #10', bgColor: 'blueBgColor', isClicked: false },
      { id: 10, gname: 'Box #11', bgColor: 'blueBgColor', isClicked: false },
      { id: 11, gname: 'Box #12', bgColor: 'blueBgColor', isClicked: false },
      { id: 12, gname: 'Box #13', bgColor: 'blueBgColor', isClicked: false },
      { id: 13, gname: 'Box #14', bgColor: 'blueBgColor', isClicked: false },
      { id: 14, gname: 'Box #15', bgColor: 'blueBgColor', isClicked: false },
      { id: 15, gname: 'Box #16', bgColor: 'blueBgColor', isClicked: false },]
    setMatrixGridData(prevState => [...prevState, gridData]);
  }, []);

  const [matrixGridData, setMatrixGridData] = useState([]);
  const [addedMatCol, setAddedMatCol] = useState([]);

  const gridColClick = (data) => {
    if (data) {
      matrixGridData[0].map((item) => {
        if (item.id === data.id) {
          return matrixGridData[0].splice(data.id, 1, data);
        }
      })
      setAddedMatCol(prevState => [...prevState, data]);
      setMatrixGridData(prevState => [...prevState]);
    }

    if (addedMatCol.length === 2) {
      let removedData = addedMatCol.splice(0, 1);
      setAddedMatCol(prevState => [...prevState]);

      let id = removedData[0].id;
      let gname = removedData[0].gname;
      let bgColor = 'blueBgColor';
      let isClicked = removedData[0].isClicked;
      let removedCol = {
        id,
        gname,
        bgColor,
        isClicked
      };

      matrixGridData[0].map((item) => {
        if (item.id === removedCol.id) {
          return matrixGridData[0].splice(removedCol.id, 1, removedCol);
        }
      })
      setMatrixGridData(prevState => [...prevState]);
    }
  }

  return (
    <Container>
      <MatrixDataComponent
        gridData={matrixGridData}
        columnClick={gridColClick}
      />
    </Container>
  );
}

export default MatrixDashboard;

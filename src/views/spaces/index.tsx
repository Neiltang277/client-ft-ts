import React, { FC,useState,useEffect } from 'react';
import { Card } from 'antd';
import './index.css';
import {querySpaces} from './services';

const App: FC = () => {
  const [kols, setKols] = useState<any>({
    total: 0,
    pageIndex: 1,
    pageSize: 10,
    dataList: []
  });
  const [pageSize, setPageSize] = useState<number>(10);
  const [pageIndex, setPageIndex] = useState<number>(1);
 

  useEffect(() => {
    getDataList(pageIndex, pageSize);
  }, []);
  const getDataList = async (index: number, size: number) => {
    const res = await querySpaces(index, size);
    console.log(res);
    setKols(res.data)
  }

  return ( 
  <>
    <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </>);
}


export default App;
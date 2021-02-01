import React, { useState, useEffect } from 'react';
// import IceContainer from '@icedesign/container';
import { Layout, Table, Pagination, message } from 'antd';
// import { Layout, Table, Pagination } from 'antd';
import PageTitle from '../../components/PageTitle';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

const { Content } = Layout;

const mockData = () => {
  return {
    status: 'SUCCESS',
    message: '请求成功',
    data: Array.from({ length: 10 }).map((item, index) => {
      return {
        id: `00000${index}`,
        name: '聘用合同',
        ourCompany: 'xxx商铺',
        amount: '999,999',
        currency: 'CNY',
        state: '签约中',
      };
    }),
  };
};

export default function List() {
  const [isLoading, setLoading] = useState(false);
  const [data, setData]: any = useState([]);
  const [current, setCurrent] = useState(1);

  async function handlePagination(currentPage: any) {
    await setCurrent(currentPage);
  }

  useEffect(() => {
    async function fetchData() {
      await setLoading(true);
      const { data: resData }: any = await mockApi();
      await setData(Array.isArray(resData) ? resData : []);
      await setLoading(false);
    }
    fetchData();
  }, [current]);

  function mockApi() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(mockData());
      }, 600);
    });
  }

  const success = () => {
    message.success('暂不支持修改合同', 10);
  };

  return (
    <Content className={styles.siteLayout}>
      <PageTitle title="小二列表" />
      <Table
        loading={isLoading}
        dataSource={data}
        rowKey={(record) => record.id}
        className={styles.customTable}
      >
        <Table.Column title="合同编号" dataIndex="id" key="id" width={100} />
        <Table.Column title="合同名称" dataIndex="name" key="name" width={100} />
        <Table.Column title="商家名称" dataIndex="ourCompany" key="ourCompany" width={160} />
        <Table.Column title="合同金额" dataIndex="amount" key="amount" width={100} />
        <Table.Column title="币种" dataIndex="currency" key="currency" width={100} />
        <Table.Column
          title="合同状态"
          dataIndex="state"
          key="state"
          width={100}
          render={value => (
            <div className={styles.state}>
              <span className={styles.stateText}>{value}</span>
            </div>
          )}
        />
        <Table.Column
          title="操作"
          dataIndex="detail"
          key="detail"
          width={200}
          render={(text, record, index) => (
            <div>
              <span className={styles.link} onClick={success}>
                修改
              </span>
              <span className={styles.separator} />
              <Link className={styles.link} to={`/list/detail/${data[index].id}`}>
                查看
              </Link>
            </div>
          )}
        />
      </Table>
      <Pagination className={styles.pagination} current={current} total={data.length} pageSize={10} onChange={handlePagination} />
    </Content>
  );
}

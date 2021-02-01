import React, { useState, useEffect } from 'react';
import PageTitle from '../../components/PageTitle';

import styles from './index.module.scss';

import { Layout, Row, Col, Button, Spin } from 'antd';
import { useRouteMatch, useHistory } from "react-router-dom";
const { Content } = Layout;

const mockData = (id: any) => {
  return {
    status: 'SUCCESS',
    message: '请求成功',
    data: {
      basic: [
        {
          key: 'id',
          label: '任务ID',
          value: id,
        },
        {
          key: 'task',
          label: '任务标题',
          value: '集盒家居旗舰店双十一活动',
        },
        {
          key: 'shop',
          label: '店铺名称',
          value: '集盒家居旗舰店',
        },
        {
          key: 'currency',
          label: '币种',
          value: 'CNY',
        },
        {
          key: 'amount',
          label: '任务金额',
          value: '1000.00',
        },
        {
          key: 'reward',
          label: '任务赏金',
          value: '200.00',
        },
        {
          key: 'ordertime',
          label: '接单时间',
          value: '2017-10-18 12:20:07',
        },
        {
          key: 'deliverytime',
          label: '交付时间',
          value: '2017-10-18 12:20:07',
        },
      ],
      more: [
        {
          key: 'phone',
          label: '联系方式',
          value: '138xxxx9876',
        },
        {
          key: 'address',
          label: '收货地址',
          value: '杭州市文一西路',
        },
        {
          key: 'status',
          label: '任务状态',
          value: '进行中',
        },
        {
          key: 'remark',
          label: '备注',
          value: '暂无',
        },
      ],
    },
  };
};

export default function Detail() {
  const [isLoading, setLoading] = useState(false);
  const [data, setData]: any = useState({});
  let history = useHistory();

  let match: any = useRouteMatch({
    path: "/list/detail/:contractId",
    strict: false,
    sensitive: false
  });

  useEffect(() => {
    async function fetchData() {
      await setLoading(true);
      if (match.params.contractId !== "empty") {
        const { data: resData }: any = await mockApi(match.params.contractId);
        await setData(resData);
        await setLoading(false);
      }
    }
    fetchData();
  }, [match.params.contractId]);

  function mockApi(id: any) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(mockData(id));
      }, 600);
    });
  }

  const goHome = () => {
    function handleClick() {
      history.push('/list');
    }

    return (
      <>
        <Button type="primary" onClick={handleClick}>useHistory返回</Button>
      </>
    )
  }

  const basic = (data && data.basic) || [];
  const more = (data && data.more) || [];
  return (
    <Content className={styles.siteLayout}>
      <PageTitle title="小二详情" subTitle={goHome()} />
      <Spin spinning={isLoading}>
        <div className={styles.infoColumn}>
          <h5 className={styles.infoColumnTitle}>基本信息</h5>
          <Row wrap className={styles.infoItems}>
            {basic.map((item: any) => {
              const { key, label, value } = item;
              return (
                <Col xs="24" lg="12" className={styles.infoItem} key={key}>
                  <span className={styles.infoItemLabel}>{label}：</span>
                  <span className={styles.infoItemValue}>{value}</span>
                </Col>
              );
            })}
          </Row>
        </div>
        <div className={styles.infoColumn}>
          <h5 className={styles.infoColumnTitle}>更多信息</h5>
          <Row wrap className={styles.infoItems}>
            {more.map((item: any) => {
              const { key, label, value } = item;
              return (
                <Col xs="24" lg="12" className={styles.infoItem} key={key}>
                  <span className={styles.infoItemLabel}>{label}：</span>
                  <span className={styles.infoItemValue}>{value}</span>
                </Col>
              );
            })}
          </Row>
        </div>
      </Spin>
    </Content>
  );
}

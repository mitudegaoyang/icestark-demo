import React from 'react';
import PageTitle from '../../components/PageTitle';
import { Layout, Button } from 'antd';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

const { Content } = Layout;

export default function List() {

  function handleHistoryPush() {
    console.log('/angular');
    // appHistory.push('/angular');
  };

  return (
    <Layout>
      <Content className={styles.siteLayout}>
        <PageTitle title="小二首页" />
        <Link className={styles.link} to="/list">Link子应用内跳转</Link>
        <br />
        <br />
        {/* <AppLink className={styles.link} to="/waiter">AppLink子应用间跳转</AppLink> */}
        <br />
        <br />
        <Button type="primary" onClick={handleHistoryPush}>appHistory子应用间跳转 </Button>
      </Content>
    </Layout>
  );
}

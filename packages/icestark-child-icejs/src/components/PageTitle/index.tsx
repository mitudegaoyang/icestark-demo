import React from 'react';
import styles from './index.module.scss';

// export default ({ title }) => <h5 className={styles.title}>{title}</h5>;

export interface PageTitleProps {
    title?: any;
    subTitle?: any;
}

export default function PageTitle(props: PageTitleProps) {
    let { title, subTitle } = props;
    return (
        <h5 className={styles.title}>
            <span>{title}</span>
            <span className={styles.subTitle}>{subTitle}</span>
        </h5>
    );
}
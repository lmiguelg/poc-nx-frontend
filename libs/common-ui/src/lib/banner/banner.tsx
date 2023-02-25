import styles from './banner.module.css';

/* eslint-disable-next-line */
export interface BannerProps {}

export function Banner(props: BannerProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Banner!</h1>
      <p>Banner description</p>
    </div>
  );
}

export default Banner;

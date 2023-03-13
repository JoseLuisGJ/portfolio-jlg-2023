import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Aboutme() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1 className='text-6xl font-thin' >
         About me
        </h1>
        <Image className='chico' src="/_chico.png" width={512} height={512} />

      </div>

    </div>
  );
}

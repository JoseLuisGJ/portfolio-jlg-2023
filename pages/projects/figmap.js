import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import Link from 'next/link'

export default function Figmap() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1 className='text-6xl font-thin' >
         Figmap
        </h1>
        <Link href="/projects/qatium">Next project</Link>
        <Image className='chico' src="/_chico.png" width={512} height={512} />

      </div>

    </div>
  );
}

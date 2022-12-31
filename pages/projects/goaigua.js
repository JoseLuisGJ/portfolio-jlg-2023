import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import Link from 'next/link'

export default function Goaigua() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1 className='text-6xl font-thin' >
         GoAigua
        </h1>
        <Link href="/projects/figmap">Next project</Link>
        <Image className='chico' src="/_chico.png" width={512} height={512} />

      </div>

    </div>
  );
}

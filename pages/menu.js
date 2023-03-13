import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link'
import { useRouter } from 'next/router'


export default function Menu() {
  const router = useRouter()
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1 className='text-6xl font-thin' >
          Menu
        </h1>
        <ul>
          <li>
            <button type="button" onClick={() => router.back()}>
              Close
            </button>
          </li>
          <li>
            <br></br>
          </li>
          <li>
            <Link href="/projects/qatium">Qatium</Link>
          </li>
          <li>
            <Link href="/projects/goaigua">GoAigua</Link>
          </li>
          <li>
            <Link href="/projects/figmap">Figmap</Link>
          </li>
        </ul>



        <br />

        <Image className='chico' src="/_chico.png" width={512} height={512} />

      </div>

    </div>
  );
}

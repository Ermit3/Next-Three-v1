import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Scene } from '@/components/canvas/Scene'
import { Cube } from '@/components/mesh/cube'

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  return (
    <>
      <Scene>
        <Cube />
      </Scene>
    </>
  )
}

export default Home;
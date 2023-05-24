
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import { ReactNode } from 'react'
import { Perf } from 'r3f-perf'

interface Props {
  children?: ReactNode
  // any props that come into the component
}

export const Scene = ({ children, ...props }: Props) => {
  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <div id="root">
      <Canvas {...props}>
        <Perf position={'top-left'} />
        <directionalLight intensity={0.75} />
        <ambientLight intensity={0.75} />
        {children}
        <Preload all />
        <OrbitControls />
      </Canvas>
    </div>
  )
}
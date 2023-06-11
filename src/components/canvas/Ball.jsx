import { Suspense } from 'react'

import { Canvas } from '@react-three/fiber'

// Decal use as the texture
// Float 
// orbit controls to move them around 
import { 
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture
 } from '@react-three/drei'

 // loads the %
 import CanvasLoader from '../Loader'

 // ball excepting props
 // destruct decal const equal to useTexture. then we pass through props.imgUrl
 //Explination :
 // 1. we are calling Ball, technically a ballCanvas
 // 2. passing in technology.item from Tech.jsx 
 // 3. thats coming from technologies from the constants folder 
 // textures coming from drai
 // images are from the icons in technologies
 // changed Dive with ball to <Float><Float/> inside the float add some ambiant light
const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl])


  
  
  return (
    
    <Float speed={3} rotationIntensity={2} floatIntensity={1}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>

        <icosahedronGeometry args={[1, 1]} />

        <meshStandardMaterial 
         color="#fff8eb"
         polygonOffset
         polygonOffsetFactor={-5}
         flatShading
        
        />
        <Decal 
         position={[0, 0, 1]}
         rotation={[ 2 * Math.PI, 0, 6.25 ]}
         scale={1}
         flatShading
         map={decal}
        />

      </mesh>
    </Float>
    
  )
}

//canvas to show it off
// use same canvas as computer.jsx BUT>> no shadows >> nocamra >>
// OrbitControlls only enable zoom set to false >> change render computers to <Ball /> 
// where the image url equal to icon

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
    
    dpr={[1, 2]}
    
    gl={{ preserveDrawingBuffer: true }}
  >
    <Suspense fallback={<CanvasLoader />}>
      <OrbitControls
        enableZoom={false} />
      <Ball imgUrl={icon}/>
    </Suspense>

    <Preload all />
  </Canvas>
  )
}

export default BallCanvas
// export ball canvas not the actual ball

// to change technoogies> go into constants > tech > then add them , add the icon can find online and import from assest 
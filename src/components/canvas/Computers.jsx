/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line no-unused-vars
import React, { Suspense, useEffect, useState }  from 'react'

//empty canvas alowing us to place something on it
import { Canvas } from "@react-three/fiber"

//import helpers to help us draw on the canvas
//useGLTF to import 3D models
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader'



//check console error  53.08 ?

// 3d models downloads for the computer scean eg sketchfab

//import useGLTF from desktop folder where scene.gltf lives 
// when using 3D elements use mesh instead of div
// inside the mesh we need a light so we can see anything eg hemisphere light
// react three fiber doucs for lights 
// glair on moniter is point light
// primitive self closing comp of which we can pass the object thats going to be computer scene

// new componet below to we can see the computer  const computer canvas
// camera most important part!! where are we looking at the model from important where the camra and the lights are coming from
// camera  position : [20=x axis, 3=y axis, 5=zaxis]  fov: feild of view = 25
// gl property value needs to be there to properly to help it render the model !
// suspence from react to add a loader whilst the model is loading
// orbit controlls alow to move the model from left to right
// add some initial props max/minPolarAngle math.PI pie over angel alows us not to raotate it all the way down
// up and down left and right it gives some stop in the click move rotation, So can only rotate it around a spasific axis

// add computers component between the suspance 
// add a preload component 



// use isMobile as a prop
// eslint-disable-next-line react/prop-types
const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75} // changed scale from 
        position={isMobile ? [0, -3, -2.2] : [0, -3.80, -1.5]} // changed -3.35 to -4.25 for view of text / 3d pc for better view on laptop. bigger is bteer on big pc
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

//useEffect for mobile compatibility 
// give smooth effect when changing screen size from mobile to desktop 

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    // remove it for a react thing 
    // can now use the ismobile variable to chnage the model
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;



import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

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
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -4, -2.2] : [0, -4, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

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
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    // Canvas component from react-three-fiber library to create a 3D scene in a React application.
    <Canvas
      frameloop='demand' // The frameloop prop allows you to specify the type of loop that the canvas should use to render the scene.
      shadows // The shadows prop enables shadows in the scene.
      dpr={[1, 2]} // The dpr prop allows you to specify the device pixel ratio for the canvas.
      camera={{ position: [20, 3, 5], fov: 25 }} // The camera prop allows you to specify the position and field of view of the camera in the scene.
      gl={{ preserveDrawingBuffer: true }} // The gl prop allows you to specify additional options for the WebGL renderer.
    >
      <Suspense fallback={<CanvasLoader />}> // The Suspense component from React allows you to specify a fallback UI to display while waiting for data to load.
        <OrbitControls // The OrbitControls component from drei library allows you to add interactive camera controls to the scene.
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
//The Preload component from drei library allows you to preload assets before rendering the scene.
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;

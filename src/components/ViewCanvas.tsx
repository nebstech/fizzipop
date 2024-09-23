"use-client";

import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { Suspense } from "react";
import dynamic from "next/dynamic";

const Loader = dynamic(
  ()=> import('@react-three/drei').then((mod) => mod.Loader), { ssr: false }
)

type Props = {};

const ViewCanvas = (props: Props) => {
  return (
    <>
      <Canvas
        style={{
          position: "fixed",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 30,
        }}
        shadows
        dpr={[1, 1.5]}
        gl={{ antialias: true }}
        camera={{
          fov: 30,
        }}
      >
        <Suspense fallback={null} />
        <View.Port />
      </Canvas>
      <Loader 
      containerStyles={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
      }}
      innerStyles={{
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
      }}
      barStyles={{
        width: '80%',
        height: '80%',
        borderRadius: '50%',
        backgroundColor: 'green',
      }}
      dataStyles={{
        fontSize: '1rem',
        fontWeight: 'bold',
        color: 'black', // Text color
      }}
      dataInterpolation={(p) => `Loading ${p.toFixed(2)}%`} // Text interpolation
      initialState={(active) => active} // Initial state
      />
    </>
  );
};

export default ViewCanvas;

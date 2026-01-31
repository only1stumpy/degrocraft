"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Model } from "./Model";
import { OrbitControls, Stage, Center } from "@react-three/drei";
import Loader from "./Loader";

export default function Scene() {
  return (
    <div className="w-full h-full">
      <Canvas shadows camera={{ position: [25, 0, 33], fov: 70 }}>
        <Suspense fallback={<Loader />}>
          <Stage
            intensity={0.5}
            environment="city"
            shadows="contact"
            adjustCamera={false}
          >
            <Center>
              <Model />
            </Center>
          </Stage>
        </Suspense>

        {/* Позволяет вращать модель мышкой */}
        <OrbitControls makeDefault />
      </Canvas>
    </div>
  );
}

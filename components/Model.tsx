"use client";

import { useGLTF, Stage, OrbitControls } from "@react-three/drei";

export function Model() {
  // Загружаем модель (файл в public/models/robot.glb)
  const { scene } = useGLTF("/minecraft_-_sheep.glb");

  return <primitive object={scene} scale={1.5} />;
}

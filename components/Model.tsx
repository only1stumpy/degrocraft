"use client";

import { useGLTF } from "@react-three/drei";

const MODEL_PATH = "/minecraft_-_sheep.glb";
const MODEL_SCALE = 1.5;

interface ModelProps {
  path?: string;
  scale?: number;
}

export function Model({ path = MODEL_PATH, scale = MODEL_SCALE }: ModelProps) {
  const { scene } = useGLTF(path);
  return <primitive object={scene} scale={scale} />;
}

useGLTF.preload(MODEL_PATH);

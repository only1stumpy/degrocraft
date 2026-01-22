"use client";

import { useGLTF } from "@react-three/drei";

// ===========================================
// НАСТРОЙКА МОДЕЛИ
// ===========================================
// Чтобы изменить 3D модель:
// 1. Скачай .glb файл (например, с https://sketchfab.com)
// 2. Положи файл в папку /public
// 3. Измени MODEL_PATH на имя твоего файла
// ===========================================

const MODEL_PATH = "/minecraft_-_sheep.glb";
const MODEL_SCALE = 1.5;

// ===========================================

interface ModelProps {
  path?: string;
  scale?: number;
}

export function Model({ path = MODEL_PATH, scale = MODEL_SCALE }: ModelProps) {
  const { scene } = useGLTF(path);
  return <primitive object={scene} scale={scale} />;
}

// Preload модели для быстрой загрузки
useGLTF.preload(MODEL_PATH);

"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";

export function FloatingBook() {
    const groupRef = useRef<Group>(null);

    useFrame((state) => {
        if (groupRef.current) {
            const t = state.clock.getElapsedTime();
            groupRef.current.rotation.y = Math.sin(t / 4) / 4;
            groupRef.current.rotation.z = Math.sin(t / 4) / 8;
            groupRef.current.position.y = Math.sin(t / 2) / 4;
        }
    });

    return (
        <group ref={groupRef} rotation={[0.2, 0, 0]}>
            {/* Book Cover */}
            <mesh castShadow receiveShadow>
                <boxGeometry args={[3, 4, 0.5]} />
                <meshStandardMaterial color="#FFB7B2" roughness={0.4} metalness={0.1} />
            </mesh>
            {/* Pages (White block inside) */}
            <mesh position={[0.1, 0, 0]}>
                <boxGeometry args={[2.8, 3.8, 0.4]} />
                <meshStandardMaterial color="#FDFBF7" />
            </mesh>
        </group>
    );
}

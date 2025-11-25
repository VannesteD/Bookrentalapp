"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";

export function CartoonSun() {
    const groupRef = useRef<Group>(null);
    const raysRef = useRef<Group>(null);

    useFrame((state) => {
        if (groupRef.current) {
            const t = state.clock.getElapsedTime();
            // Gentle floating
            groupRef.current.position.y = Math.sin(t / 2) * 0.2;
            groupRef.current.rotation.z = Math.sin(t / 4) * 0.1;
        }
        if (raysRef.current) {
            // Much slower rotation
            raysRef.current.rotation.z -= 0.002;
        }
    });

    return (
        <group ref={groupRef}>
            {/* Central Sun Body - warmer golden color like the photo */}
            <mesh castShadow receiveShadow>
                <sphereGeometry args={[1.5, 32, 32]} />
                <meshStandardMaterial color="#EAB308" emissive="#F59E0B" emissiveIntensity={0.3} roughness={0.2} />
            </mesh>

            {/* Rays - much longer to reach screen edges */}
            <group ref={raysRef}>
                {Array.from({ length: 12 }).map((_, i) => (
                    <mesh key={i} position={[0, 0, 0]} rotation={[0, 0, (i * Math.PI * 2) / 12]}>
                        <boxGeometry args={[0.6, 15, 0.1]} />
                        <meshStandardMaterial color="#EAB308" />
                    </mesh>
                ))}
            </group>
        </group>
    );
}

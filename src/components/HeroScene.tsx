"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Html } from "@react-three/drei";
import { Suspense } from "react";

const BOOKS = [
    { title: "Het Moois\nDat We\nDelen", author: "Ish Ait Hamou", color: "#F6C90E", accentColor: "#E5A000" },
    { title: "Hoe We\nOnszelf Graag\nKunnen Zien", author: "Nicolas Overmeire", color: "#A78BFA", accentColor: "#7C3AED" },
    { title: "De Avond\nis Ongemak", author: "M.L. Rijneveld", color: "#FF8E9E", accentColor: "#F472B6" },
    { title: "The Lord\nof the Rings", author: "J.R.R. Tolkien", color: "#DC2626", accentColor: "#991B1B" },
    { title: "1984", author: "George Orwell", color: "#374151", accentColor: "#1F2937" },
    { title: "To Kill a\nMockingbird", author: "Harper Lee", color: "#059669", accentColor: "#047857" },
    { title: "Atomic\nHabits", author: "James Clear", color: "#3B82F6", accentColor: "#1D4ED8" },
    { title: "The\nMidnight\nLibrary", author: "Matt Haig", color: "#8B5CF6", accentColor: "#6D28D9" },
    { title: "Piranesi", author: "Susanna Clarke", color: "#0891B2", accentColor: "#0E7490" },
    { title: "Klara and\nthe Sun", author: "Kazuo Ishiguro", color: "#F59E0B", accentColor: "#D97706" },
    { title: "Educated", author: "Tara Westover", color: "#EC4899", accentColor: "#DB2777" },
    { title: "Sapiens", author: "Yuval Noah Harari", color: "#10B981", accentColor: "#059669" },
];

const bookConfigs = [
    { position: [-12, 6, -4] as [number, number, number], rotation: [0, 0, -0.25] as [number, number, number] },
    { position: [-8, 7, -6] as [number, number, number], rotation: [0, 0, 0.18] as [number, number, number] },
    { position: [10, 7, -5] as [number, number, number], rotation: [0, 0, -0.2] as [number, number, number] },
    { position: [14, 5, -7] as [number, number, number], rotation: [0, 0, 0.3] as [number, number, number] },
    { position: [-13, 1, -5] as [number, number, number], rotation: [0, 0, 0.15] as [number, number, number] },
    { position: [-9, -1, -3] as [number, number, number], rotation: [0, 0, -0.22] as [number, number, number] },
    { position: [11, 0, -4] as [number, number, number], rotation: [0, 0, 0.17] as [number, number, number] },
    { position: [15, -2, -6] as [number, number, number], rotation: [0, 0, -0.28] as [number, number, number] },
    { position: [-11, -5, -5] as [number, number, number], rotation: [0, 0, -0.18] as [number, number, number] },
    { position: [-7, -7, -4] as [number, number, number], rotation: [0, 0, 0.25] as [number, number, number] },
    { position: [9, -6, -3] as [number, number, number], rotation: [0, 0, -0.15] as [number, number, number] },
    { position: [13, -8, -5] as [number, number, number], rotation: [0, 0, 0.22] as [number, number, number] },
];

function BookWithText({
    book,
    position,
    rotation
}: {
    book: typeof BOOKS[0];
    position: [number, number, number];
    rotation: [number, number, number];
}) {
    return (
        <group position={position} rotation={rotation}>
            {/* Book cover background */}
            <mesh position={[0, 0, -0.01]}>
                <planeGeometry args={[2.5, 3.5]} />
                <meshBasicMaterial color={book.color} transparent opacity={0.25} />
            </mesh>

            {/* Top accent bar */}
            <mesh position={[0, 1.5, 0]}>
                <planeGeometry args={[2.5, 0.4]} />
                <meshBasicMaterial color={book.accentColor} transparent opacity={0.4} />
            </mesh>

            {/* Gradient fade overlay */}
            <mesh position={[0, -0.5, 0.02]}>
                <planeGeometry args={[2.5, 2]} />
                <meshBasicMaterial color="#FFF8E7" transparent opacity={0.3} />
            </mesh>

            {/* HTML Text overlay - rotates with the group */}
            <Html
                position={[0, 0.2, 0.1]}
                center
                transform
                distanceFactor={10}
                style={{
                    pointerEvents: 'none',
                    userSelect: 'none',
                }}
            >
                <div style={{
                    color: book.accentColor,
                    textAlign: 'center',
                    fontFamily: 'Outfit, sans-serif',
                    fontWeight: 'bold',
                    opacity: 0.8,
                    width: '120px',
                    maxWidth: '120px',
                }}>
                    <div style={{
                        fontSize: '14px',
                        marginBottom: '6px',
                        whiteSpace: 'pre-line',
                        lineHeight: '1.2',
                        wordWrap: 'break-word',
                        overflowWrap: 'break-word',
                    }}>
                        {book.title}
                    </div>
                    <div style={{
                        fontSize: '11px',
                        opacity: 0.65,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                    }}>
                        {book.author}
                    </div>
                </div>
            </Html>
        </group>
    );
}

export default function HeroScene() {
    return (
        <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden">
            <Canvas
                shadows
                camera={{ position: [0, 0, 15], fov: 60 }}
                gl={{
                    antialias: true,
                    alpha: true,
                    preserveDrawingBuffer: true
                }}
            >
                <ambientLight intensity={1} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <Suspense fallback={null}>
                    {BOOKS.map((book, index) => (
                        <BookWithText
                            key={book.title}
                            book={book}
                            position={bookConfigs[index].position}
                            rotation={bookConfigs[index].rotation}
                        />
                    ))}
                    <Environment preset="sunset" />
                </Suspense>
            </Canvas>
        </div>
    );
}

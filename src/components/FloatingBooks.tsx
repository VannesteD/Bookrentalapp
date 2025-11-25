"use client";

const BOOKS = [
  // Dutch books
  { title: "Het Moois\nDat We Delen", author: "Ish Ait Hamou", color: "#F6C90E", accentColor: "#E5A000" },
  { title: "Hoe We Onszelf\nGraag Kunnen Zien", author: "Nicolas Overmeire", color: "#A78BFA", accentColor: "#7C3AED" },
  { title: "De Avond is\nOngemak", author: "Marieke Lucas Rijneveld", color: "#FF8E9E", accentColor: "#F472B6" },

  // International classics
  { title: "The Lord of\nthe Rings", author: "J.R.R. Tolkien", color: "#DC2626", accentColor: "#991B1B" },
  { title: "1984", author: "George Orwell", color: "#374151", accentColor: "#1F2937" },
  { title: "To Kill a\nMockingbird", author: "Harper Lee", color: "#059669", accentColor: "#047857" },

  // Contemporary popular
  { title: "Atomic\nHabits", author: "James Clear", color: "#3B82F6", accentColor: "#1D4ED8" },
  { title: "The Midnight\nLibrary", author: "Matt Haig", color: "#8B5CF6", accentColor: "#6D28D9" },

  // Less popular gems
  { title: "Piranesi", author: "Susanna Clarke", color: "#0891B2", accentColor: "#0E7490" },
  { title: "Klara and\nthe Sun", author: "Kazuo Ishiguro", color: "#F59E0B", accentColor: "#D97706" },

  // Additional books for more coverage
  { title: "Educated", author: "Tara Westover", color: "#EC4899", accentColor: "#DB2777" },
  { title: "Sapiens", author: "Yuval Noah Harari", color: "#10B981", accentColor: "#059669" },
];

function BookCover({
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
      {/* Book cover background with gradient effect */}
      <mesh position={[0, 0, -0.01]}>
        <planeGeometry args={[2.5, 3.5]} />
        <meshBasicMaterial color={book.color} transparent opacity={0.25} />
      </mesh>

      {/* Top accent bar (like book spine showing) */}
      <mesh position={[0, 1.5, 0]}>
        <planeGeometry args={[2.5, 0.4]} />
        <meshBasicMaterial color={book.accentColor} transparent opacity={0.4} />
      </mesh>

      {/* Gradient fade overlay - top to bottom */}
      <mesh position={[0, -0.5, 0.02]}>
        <planeGeometry args={[2.5, 2]} />
        <meshBasicMaterial color="#FFF8E7" transparent opacity={0.3} />
      </mesh>
    </group>
  );
}

export function FloatingBooks() {
  // Spread books across ENTIRE viewport - much wider spread, various depths
  const bookConfigs: Array<{
    position: [number, number, number];
    rotation: [number, number, number];
  }> = [
      // Far top left
      { position: [-12, 6, -4], rotation: [0, 0, -0.25] },
      { position: [-8, 7, -6], rotation: [0, 0, 0.18] },

      // Far top right
      { position: [10, 7, -5], rotation: [0, 0, -0.2] },
      { position: [14, 5, -7], rotation: [0, 0, 0.3] },

      // Middle left - spread out
      { position: [-13, 1, -5], rotation: [0, 0, 0.15] },
      { position: [-9, -1, -3], rotation: [0, 0, -0.22] },

      // Middle right - spread out
      { position: [11, 0, -4], rotation: [0, 0, 0.17] },
      { position: [15, -2, -6], rotation: [0, 0, -0.28] },

      // Bottom left - very spread
      { position: [-11, -5, -5], rotation: [0, 0, -0.18] },
      { position: [-7, -7, -4], rotation: [0, 0, 0.25] },

      // Bottom right - very spread
      { position: [9, -6, -3], rotation: [0, 0, -0.15] },
      { position: [13, -8, -5], rotation: [0, 0, 0.22] },
    ];

  return (
    <group>
      {BOOKS.map((book, index) => (
        <BookCover
          key={book.title}
          book={book}
          position={bookConfigs[index].position}
          rotation={bookConfigs[index].rotation}
        />
      ))}
    </group>
  );
}

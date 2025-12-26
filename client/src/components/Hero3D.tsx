import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, PerspectiveCamera } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowDown, Download, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import * as THREE from 'three';

function GeometricScene() {
  const groupRef = useRef<THREE.Group>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      };
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  useFrame((state) => {
    if (groupRef.current) {
      // Base rotation
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      
      // Mouse interaction (smooth interpolation)
      const targetX = mouseRef.current.y * 0.5;
      const targetY = mouseRef.current.x * 0.5;
      
      groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.05;
      groupRef.current.rotation.z += (targetY - groupRef.current.rotation.z) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        {/* Abstract Icosahedron representing complex systems */}
        <mesh position={[2, 0, -2]}>
          <icosahedronGeometry args={[1.5, 0]} />
          <meshStandardMaterial
            color="#2FA4FF"
            wireframe
            transparent
            opacity={0.3}
            emissive="#2FA4FF"
            emissiveIntensity={0.5}
          />
        </mesh>
        
        {/* Inner solid core */}
        <mesh position={[2, 0, -2]}>
          <icosahedronGeometry args={[0.8, 0]} />
          <meshPhysicalMaterial
            color="#0B1F33"
            roughness={0.2}
            metalness={0.8}
            transmission={0.5}
            thickness={2}
          />
        </mesh>
      </Float>

      {/* Floating particles/nodes */}
      {Array.from({ length: 20 }).map((_, i) => (
        <Float key={i} speed={1 + Math.random()} rotationIntensity={1} floatIntensity={1}>
          <mesh position={[
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 5 - 5
          ]}>
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshBasicMaterial color="#4FC3F7" />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

export default function Hero3D() {
  const { t } = useTranslation();

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0B1F33]">
      {/* 3D Background Layer */}
      <div className="absolute inset-0 z-0">
        <Canvas dpr={[1, 2]} gl={{ antialias: false, powerPreference: "high-performance" }}>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#2FA4FF" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4FC3F7" />
          <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
          <GeometricScene />
          <fog attach="fog" args={['#0B1F33', 5, 15]} />
        </Canvas>
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F33] via-[#0B1F33]/80 to-transparent z-10 pointer-events-none" />

      {/* Content Layer */}
      <div className="relative z-20 container h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h2 className="text-primary font-medium tracking-widest mb-4 uppercase text-sm">
            {t('hero.role')}
          </h2>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Simón <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-300">
              Barrera Ruíz
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed border-l-2 border-primary/50 pl-6">
            {t('hero.statement')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 h-12 text-lg rounded-full shadow-[0_0_20px_rgba(47,164,255,0.3)] transition-all hover:scale-105">
              {t('hero.cta_primary')} <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/20 text-white hover:bg-white/10 px-8 h-12 text-lg rounded-full backdrop-blur-sm"
              onClick={() => window.open('/CV_Simon_Barrera_Ruiz.pdf', '_blank')}
            >
              {t('hero.cta_secondary')} <Download className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}

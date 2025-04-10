"use client";

import React from "react";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { FaAtom, FaMicrochip, FaDatabase, FaLock, FaSatellite, FaCode } from "react-icons/fa";

// 量子波动背景
const QuantumBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      hue: number;
      wave: number;
    }[] = [];
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // 创建粒子
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: Math.random() * 1 - 0.5,
        speedY: Math.random() * 1 - 0.5,
        hue: Math.random() * 60 + 180, // 蓝绿色范围
        wave: Math.random() * 0.02
      });
    }
    
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // 绘制波动效果
      ctx.fillStyle = 'rgba(0, 20, 40, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // 边界检查
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
        
        // 量子叠加效果 - 模拟粒子在多个位置
        for (let i = 0; i < 3; i++) {
          const waveOffset = Math.sin(Date.now() * particle.wave) * 20;
          const x = particle.x + waveOffset * Math.cos(i * Math.PI * 2 / 3);
          const y = particle.y + waveOffset * Math.sin(i * Math.PI * 2 / 3);
          
          // 绘制粒子
          const gradient = ctx.createRadialGradient(x, y, 0, x, y, particle.size * 2);
          gradient.addColorStop(0, `hsla(${particle.hue}, 100%, 70%, 0.8)`);
          gradient.addColorStop(1, `hsla(${particle.hue}, 100%, 50%, 0)`);
          
          ctx.beginPath();
          ctx.fillStyle = gradient;
          ctx.arc(x, y, particle.size * 2, 0, Math.PI * 2);
          ctx.fill();
        }
      });
      
      requestAnimationFrame(drawParticles);
    };
    
    drawParticles();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0"
      style={{ background: 'linear-gradient(to bottom, #001428, #000810)' }}
    />
  );
};

// 量子比特可视化
const QubitVisualization = () => {
  return (
    <div className="relative h-48 md:h-64 w-full">
      {/* 量子球体 */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-radial from-teal-400 to-teal-900 opacity-80"
        animate={{
          scale: [1, 1.1, 1],
          boxShadow: [
            '0 0 20px 5px rgba(45, 212, 191, 0.3)',
            '0 0 30px 8px rgba(45, 212, 191, 0.5)',
            '0 0 20px 5px rgba(45, 212, 191, 0.3)',
          ],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* 量子轨道 */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 md:w-48 md:h-48 rounded-full border border-teal-500 opacity-70"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-36 md:w-64 md:h-48 rounded-full border border-teal-600 opacity-40"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{ borderRadius: '40% 60% 60% 40% / 60% 30% 70% 40%' }}
      />
      
      {/* 量子点 */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full shadow-lg shadow-teal-400"
        animate={{
          x: [0, 80, 0, -80, 0],
          y: [0, 40, 80, 40, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

// 量子技术卡片
interface QuantumTechCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  delay: number;
}

const QuantumTechCard = ({ title, icon, description, delay }: QuantumTechCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      className="bg-blue-950/30 backdrop-blur-md p-6 rounded-xl border border-teal-900/30 hover:border-teal-700/50 transition-colors"
    >
      <div className="flex items-center mb-4">
        <div className="p-3 rounded-lg bg-teal-900/30 text-teal-400 mr-4">{icon}</div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

export default function QuantumPage() {
  return (
    <div className="min-h-screen relative">
      <QuantumBackground />
      <Navbar />
      
      <div className="container mx-auto pt-32 px-4 md:px-6 pb-20 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-300"
          >
            量子计算探索
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl"
          >
            探索计算的下一个范式，体验量子技术如何改变我们解决问题的方式
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-blue-950/20 backdrop-blur-md p-8 rounded-xl border border-teal-800/40 flex flex-col justify-center"
          >
            <h2 className="text-2xl font-bold mb-6 text-teal-300">量子计算体验区</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="mr-2 text-teal-400">•</span>
                量子计算模拟器，体验量子比特的叠加和纠缠状态
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-teal-400">•</span>
                量子编程入门，学习如何编写简单的量子算法
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-teal-400">•</span>
                量子密码学演示，了解量子计算对现代加密的影响
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-teal-400">•</span>
                量子传感器原理展示，探索量子技术在测量中的应用
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-teal-400">•</span>
                互动问答环节，与量子计算专家面对面交流
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-b from-blue-950/30 to-teal-950/20 backdrop-blur-md rounded-xl overflow-hidden flex items-center justify-center"
          >
            <div className="p-8 w-full">
              <h3 className="text-xl font-bold mb-4 text-teal-300 text-center">量子比特可视化</h3>
              <QubitVisualization />
            </div>
          </motion.div>
        </div>

        <div className="mt-20">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-2xl md:text-3xl font-bold mb-10 text-center"
          >
            量子技术前沿
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <QuantumTechCard
              title="量子算法"
              icon={<FaCode size={24} />}
              description="了解Shor算法和Grover算法等量子算法如何在特定问题上远超传统计算机的性能。"
              delay={0.8}
            />
            <QuantumTechCard
              title="量子密码学"
              icon={<FaLock size={24} />}
              description="探索量子密钥分发如何提供理论上无法破解的通信加密，以及后量子密码学的发展。"
              delay={0.9}
            />
            <QuantumTechCard
              title="量子传感"
              icon={<FaAtom size={24} />}
              description="了解如何利用量子系统的极端灵敏度制造超精密传感器，应用于医学成像和地质勘探。"
              delay={1.0}
            />
            <QuantumTechCard
              title="量子材料"
              icon={<FaMicrochip size={24} />}
              description="探索拓扑绝缘体等量子材料如何为量子计算机的物理实现提供突破性平台。"
              delay={1.1}
            />
            <QuantumTechCard
              title="量子机器学习"
              icon={<FaDatabase size={24} />}
              description="了解量子计算如何加速机器学习算法，解决传统计算难以处理的复杂模式识别问题。"
              delay={1.2}
            />
            <QuantumTechCard
              title="量子通信"
              icon={<FaSatellite size={24} />}
              description="探索量子互联网的愿景，如何通过量子纠缠实现安全可靠的全球信息传输。"
              delay={1.3}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "@/components/Navbar";

// 粒子背景效果
const ParticleBackground = () => {
  return (
    <div className="fixed inset-0 z-0 opacity-40">
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 100 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: Math.random() * 0.5 + 0.3,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              x: [
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
              ],
              y: [
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
              ],
            }}
            transition={{
              duration: Math.random() * 40 + 20,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

// 主题卡片
interface ThemeCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  href: string;
  color: string;
  delay: number;
}

const ThemeCard = ({ title, icon, description, href, color, delay }: ThemeCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: "easeOut",
      }}
      className={`bg-gray-900/50 backdrop-blur-xl p-6 rounded-xl border-t border-l ${color} shadow-xl hover:scale-105 transition-transform duration-300`}
    >
      <div className="flex items-center mb-4">
        <div className={`p-3 rounded-lg ${color} mr-4`}>{icon}</div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-gray-300 mb-6">{description}</p>
      <Link href={href} className="group inline-flex items-center text-blue-400 hover:text-blue-300">
        探索更多
        <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
};

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      <Navbar />
      
      <div className="container mx-auto pt-32 px-4 md:px-6 pb-20">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
          >
            探索科技 • 创造未来
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl"
          >
            2025年学校科技创新节：探索前沿科技，体验未来世界
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <ThemeCard
            title="航天科技"
            icon={<span className="text-2xl">🚀</span>}
            description="探索太空探索的最新进展，体验模拟火箭发射和太空站任务。"
            href="/aerospace"
            color="border-blue-900/50"
            delay={0.4}
          />
          <ThemeCard
            title="人工智能"
            icon={<span className="text-2xl">🤖</span>}
            description="了解AI如何改变我们的世界，体验智能机器人和深度学习应用。"
            href="/ai"
            color="border-purple-900/50"
            delay={0.6}
          />
          <ThemeCard
            title="量子计算"
            icon={<span className="text-2xl">⚛️</span>}
            description="探索计算新范式，了解量子比特和量子叠加原理如何改变科技未来。"
            href="/quantum"
            color="border-emerald-900/50"
            delay={0.8}
          />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-24 text-center"
        >
          <p className="text-gray-400 mb-8">2025年4月15日 - 4月20日</p>
          <div className="inline-block">
            <Link 
              href="#schedule" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-3 px-8 rounded-full inline-flex items-center transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              查看活动日程
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

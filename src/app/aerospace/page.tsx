"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { FaSatellite, FaRocket, FaSpaceShuttle, FaGlobe } from "react-icons/fa";

// 3D 星球旋转效果
const SpaceBackground = () => {
  const [stars, setStars] = useState<{ x: number; y: number; opacity: number; size: number }[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const width = containerRef.current.offsetWidth;
      const height = containerRef.current.offsetHeight;
      const newStars = Array.from({ length: 200 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        opacity: Math.random() * 0.8 + 0.2,
        size: Math.random() * 2 + 1,
      }));
      setStars(newStars);
    }
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 overflow-hidden bg-black">
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            top: star.y,
            left: star.x,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
          }}
        />
      ))}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] opacity-30">
        <div className="absolute w-full h-full rounded-full bg-gradient-radial from-blue-500 to-transparent opacity-20"></div>
        <motion.div
          animate={{ rotateZ: 360 }}
          transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
          className="absolute w-full h-full"
        >
          <div className="absolute w-2 h-2 bg-white rounded-full left-0 top-1/2 transform -translate-x-1/2"></div>
          <div className="absolute w-2 h-2 bg-white rounded-full right-0 top-1/2 transform translate-x-1/2"></div>
          <div className="absolute w-2 h-2 bg-white rounded-full top-0 left-1/2 transform -translate-y-1/2"></div>
          <div className="absolute w-2 h-2 bg-white rounded-full bottom-0 left-1/2 transform translate-y-1/2"></div>
        </motion.div>
      </div>
    </div>
  );
};

// 技术卡片
interface TechCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  delay: number;
}

const TechCard = ({ title, icon, description, delay }: TechCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      className="bg-gray-900/70 backdrop-blur-md p-6 rounded-xl border border-blue-900/30 hover:border-blue-700/50 transition-colors"
    >
      <div className="flex items-center mb-4">
        <div className="p-3 rounded-lg bg-blue-900/30 text-blue-400 mr-4">{icon}</div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

export default function AerospacePage() {
  return (
    <div className="min-h-screen relative">
      <SpaceBackground />
      <Navbar />
      
      <div className="container mx-auto pt-32 px-4 md:px-6 pb-20 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-300"
          >
            航天科技探索
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl"
          >
            探索太空的奥秘，体验人类航天技术的最新突破
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-blue-900/20 backdrop-blur-md p-8 rounded-xl border border-blue-800/40"
          >
            <h2 className="text-2xl font-bold mb-4 text-blue-300">航天科技展区亮点</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="mr-2 text-blue-400">•</span>
                模拟火箭发射实验室，亲手组装并发射小型火箭
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-400">•</span>
                太空舱模拟器，体验宇航员在太空中的生活
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-400">•</span>
                VR太空漫步，感受在空间站外执行任务的挑战
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-400">•</span>
                卫星通信技术展示，了解卫星如何改变我们的生活
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-400">•</span>
                火星车模型展示，探索未来的星际探索计划
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-b from-blue-900/40 to-purple-900/20 backdrop-blur-md rounded-xl overflow-hidden h-full flex items-center justify-center"
          >
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 2, 0, -2, 0],
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="p-8"
            >
              <FaRocket className="text-9xl text-blue-400 opacity-80" />
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-20">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-2xl md:text-3xl font-bold mb-10 text-center"
          >
            航天技术前沿
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TechCard
              title="可重复使用火箭"
              icon={<FaRocket size={24} />}
              description="了解现代可重复使用火箭技术如何降低太空探索成本并开创商业航天新时代。"
              delay={0.8}
            />
            <TechCard
              title="卫星星座"
              icon={<FaSatellite size={24} />}
              description="探索低轨道卫星星座如何提供全球互联网覆盖和环境监测等革命性服务。"
              delay={0.9}
            />
            <TechCard
              title="深空探测"
              icon={<FaSpaceShuttle size={24} />}
              description="了解最新的深空探测任务，从小行星采矿到寻找系外行星的宜居环境。"
              delay={1.0}
            />
            <TechCard
              title="月球基地"
              icon={<FaGlobe size={24} />}
              description="探索建立永久月球基地的计划，这将成为人类太空探索的下一个重要里程碑。"
              delay={1.1}
            />
            <TechCard
              title="太空旅游"
              icon={<FaRocket size={24} />}
              description="了解商业太空旅游的兴起，以及它如何为普通人打开太空旅行的大门。"
              delay={1.2}
            />
            <TechCard
              title="太空资源利用"
              icon={<FaSatellite size={24} />}
              description="探索如何利用太空资源进行原位制造，减少地球发射物资的需求。"
              delay={1.3}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
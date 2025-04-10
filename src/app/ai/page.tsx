"use client";

import React from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { FaBrain, FaRobot, FaMicrochip, FaNetworkWired, FaCode, FaLaptopCode } from "react-icons/fa";

// 简化AI页面结构，避免复杂的JSX解析问题
export default function AiPage() {
  return (
    <>
      <NeuralNetworkBackground />
      <Navbar />
      
      <div className="min-h-screen relative">
        <div className="container mx-auto pt-32 px-4 md:px-6 pb-20 relative z-10">
          <div className="flex flex-col items-center text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-400"
            >
              人工智能科技
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl"
            >
              体验AI如何改变世界，探索机器学习和深度神经网络的无限可能
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-purple-900/20 backdrop-blur-md p-8 rounded-xl border border-purple-800/40"
            >
              <h2 className="text-2xl font-bold mb-4 text-purple-300">人工智能体验区</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-purple-400">•</span>
                  AI智能对话体验，与最先进的大语言模型交谈
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-400">•</span>
                  实时图像生成，见证AI创造艺术的能力
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-400">•</span>
                  智能机器人互动展示，体验AI如何理解并响应物理世界
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-400">•</span>
                  沉浸式AI虚拟助手，感受未来科技助手如何理解你的需求
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-400">•</span>
                  编程入门工作坊，学习如何训练你自己的AI模型
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-b from-purple-900/30 to-indigo-900/20 backdrop-blur-md rounded-xl overflow-hidden h-full"
            >
              <div className="p-8 h-full flex flex-col justify-center">
                <h3 className="text-xl font-bold mb-6 text-purple-300">AI能力进展</h3>
                <AiCapabilityChart />
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
              前沿AI技术解析
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AiTechCard
                title="大语言模型"
                icon={<FaBrain size={24} />}
                description="探索大型语言模型如何理解和生成人类语言，以及它们如何改变人机交互的方式。"
                delay={0.8}
              />
              <AiTechCard
                title="计算机视觉"
                icon={<FaRobot size={24} />}
                description="了解AI如何「看见」世界，从图像识别到无人驾驶汽车的障碍物检测技术。"
                delay={0.9}
              />
              <AiTechCard
                title="强化学习"
                icon={<FaMicrochip size={24} />}
                description="探索AI如何通过试错和奖励机制学习，掌握从游戏到机器人控制的复杂任务。"
                delay={1.0}
              />
              <AiTechCard
                title="生成式AI"
                icon={<FaNetworkWired size={24} />}
                description="体验AI如何创作艺术、音乐、文学和视频，模糊技术与创造力的界限。"
                delay={1.1}
              />
              <AiTechCard
                title="联邦学习"
                icon={<FaCode size={24} />}
                description="了解新兴的隐私保护AI训练方法，如何在保护数据隐私的同时提升AI能力。"
                delay={1.2}
              />
              <AiTechCard
                title="AI芯片技术"
                icon={<FaLaptopCode size={24} />}
                description="探索专为AI设计的芯片架构，如何加速神经网络计算并降低能耗。"
                delay={1.3}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// 神经网络背景动画
const NeuralNetworkBackground = () => {
  return (
    <div className="fixed inset-0 z-0 bg-gradient-to-b from-purple-900/40 to-black overflow-hidden">
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="neural-pattern" width="50" height="50" patternUnits="userSpaceOnUse">
            <circle cx="25" cy="25" r="1" fill="rgba(147, 51, 234, 0.5)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#neural-pattern)" />
      </svg>
      
      {/* 神经网络连线 */}
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div 
          key={i}
          className="absolute h-px bg-gradient-to-r from-purple-500 to-transparent"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 30}%`,
            width: `${Math.random() * 40 + 20}%`,
            transform: `rotate(${Math.random() * 180}deg)`,
            opacity: Math.random() * 0.3 + 0.1,
          }}
          animate={{
            opacity: [0.1, Math.random() * 0.3 + 0.2, 0.1],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// AI技术卡片
interface AiTechCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  delay: number;
}

const AiTechCard = ({ title, icon, description, delay }: AiTechCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      className="bg-purple-900/20 backdrop-blur-md p-6 rounded-xl border border-purple-800/30 hover:border-purple-600/50 transition-colors"
    >
      <div className="flex items-center mb-4">
        <div className="p-3 rounded-lg bg-purple-900/30 text-purple-400 mr-4">{icon}</div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

// AI能力图表
const AiCapabilityChart = () => {
  const capabilities = [
    { name: "自然语言处理", value: 92 },
    { name: "计算机视觉", value: 85 },
    { name: "语音识别", value: 88 },
    { name: "推荐系统", value: 78 },
    { name: "机器人控制", value: 65 },
    { name: "数据分析", value: 95 },
  ];

  return (
    <div className="space-y-4">
      {capabilities.map((capability, index) => (
        <div key={index} className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm text-gray-300">{capability.name}</span>
            <span className="text-sm text-purple-300">{capability.value}%</span>
          </div>
          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-purple-600 to-pink-500"
              initial={{ width: 0 }}
              animate={{ width: `${capability.value}%` }}
              transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
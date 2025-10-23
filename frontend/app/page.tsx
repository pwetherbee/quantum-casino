"use client";

import { motion } from "motion/react";
import { useMemo } from "react";
import {
  Atom,
  Zap,
  Shield,
  TrendingUp,
  Coins,
  GitBranch,
  Radio,
  Sparkles,
  DollarSign,
  Trophy,
  Gem,
  Crown,
} from "lucide-react";
import { QuantumChipIcon } from "@/components/quantum-chip-icon";

export default function Home() {
  const particles = useMemo(
    () => [
      { id: 0, left: 23, top: 45, duration: 4.2, delay: 0.5 },
      { id: 1, left: 67, top: 12, duration: 3.8, delay: 1.2 },
      { id: 2, left: 89, top: 78, duration: 4.5, delay: 0.3 },
      { id: 3, left: 15, top: 34, duration: 3.5, delay: 1.8 },
      { id: 4, left: 45, top: 67, duration: 4.8, delay: 0.8 },
      { id: 5, left: 78, top: 23, duration: 3.2, delay: 1.5 },
      { id: 6, left: 34, top: 89, duration: 4.1, delay: 0.2 },
      { id: 7, left: 56, top: 56, duration: 3.9, delay: 1.1 },
      { id: 8, left: 12, top: 90, duration: 4.4, delay: 0.7 },
      { id: 9, left: 90, top: 15, duration: 3.6, delay: 1.6 },
      { id: 10, left: 42, top: 71, duration: 4.3, delay: 0.4 },
      { id: 11, left: 73, top: 38, duration: 3.7, delay: 1.3 },
      { id: 12, left: 28, top: 52, duration: 4.6, delay: 0.9 },
      { id: 13, left: 61, top: 19, duration: 3.4, delay: 1.7 },
      { id: 14, left: 85, top: 63, duration: 4.7, delay: 0.6 },
      { id: 15, left: 19, top: 85, duration: 3.3, delay: 1.4 },
      { id: 16, left: 51, top: 28, duration: 4.0, delay: 1.0 },
      { id: 17, left: 77, top: 47, duration: 3.8, delay: 0.5 },
      { id: 18, left: 36, top: 76, duration: 4.4, delay: 1.2 },
      { id: 19, left: 64, top: 31, duration: 3.6, delay: 0.8 },
      { id: 20, left: 8, top: 59, duration: 4.2, delay: 1.5 },
      { id: 21, left: 93, top: 22, duration: 3.9, delay: 0.3 },
      { id: 22, left: 47, top: 68, duration: 4.5, delay: 1.1 },
      { id: 23, left: 71, top: 41, duration: 3.5, delay: 0.7 },
      { id: 24, left: 25, top: 83, duration: 4.1, delay: 1.6 },
      { id: 25, left: 58, top: 14, duration: 3.7, delay: 0.4 },
      { id: 26, left: 82, top: 54, duration: 4.3, delay: 1.3 },
      { id: 27, left: 39, top: 92, duration: 3.4, delay: 0.9 },
      { id: 28, left: 68, top: 26, duration: 4.6, delay: 1.7 },
      { id: 29, left: 14, top: 73, duration: 3.8, delay: 0.6 },
    ],
    []
  );

  const fallingChips = useMemo(
    () => [
      {
        id: 0,
        left: 15,
        duration: 10.5,
        delay: 2.3,
        size: 28,
        opacity: 0.18,
        rotation: 45,
      },
      {
        id: 1,
        left: 32,
        duration: 9.2,
        delay: 5.1,
        size: 35,
        opacity: 0.22,
        rotation: 120,
      },
      {
        id: 2,
        left: 58,
        duration: 11.3,
        delay: 1.8,
        size: 24,
        opacity: 0.15,
        rotation: 270,
      },
      {
        id: 3,
        left: 73,
        duration: 8.7,
        delay: 6.4,
        size: 38,
        opacity: 0.25,
        rotation: 180,
      },
      {
        id: 4,
        left: 25,
        duration: 10.1,
        delay: 3.6,
        size: 31,
        opacity: 0.2,
        rotation: 90,
      },
      {
        id: 5,
        left: 86,
        duration: 9.8,
        delay: 0.9,
        size: 26,
        opacity: 0.16,
        rotation: 315,
      },
      {
        id: 6,
        left: 44,
        duration: 11.6,
        delay: 4.2,
        size: 33,
        opacity: 0.23,
        rotation: 225,
      },
      {
        id: 7,
        left: 67,
        duration: 8.4,
        delay: 7.5,
        size: 29,
        opacity: 0.19,
        rotation: 135,
      },
      {
        id: 8,
        left: 9,
        duration: 10.9,
        delay: 2.7,
        size: 36,
        opacity: 0.24,
        rotation: 60,
      },
      {
        id: 9,
        left: 51,
        duration: 9.5,
        delay: 5.8,
        size: 22,
        opacity: 0.14,
        rotation: 300,
      },
      {
        id: 10,
        left: 78,
        duration: 11.0,
        delay: 1.3,
        size: 39,
        opacity: 0.27,
        rotation: 150,
      },
      {
        id: 11,
        left: 38,
        duration: 8.9,
        delay: 6.9,
        size: 27,
        opacity: 0.17,
        rotation: 210,
      },
    ],
    []
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a0118] via-[#1a0a2e] to-[#16013e] relative overflow-hidden">
      {/* Casino Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(138,43,226,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,215,0,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(220,20,60,0.08),transparent_50%)]" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(138,43,226,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(138,43,226,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            background: particle.id % 3 === 0 ? "#FFD700" : "#8B5CF6",
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
          }}
        />
      ))}

      {/* Falling Quantum Chips */}
      {fallingChips.map((chip) => (
        <motion.div
          key={`chip-${chip.id}`}
          className="absolute pointer-events-none"
          style={{
            left: `${chip.left}%`,
            width: `${chip.size}px`,
            height: `${chip.size}px`,
            opacity: chip.opacity,
          }}
          initial={{ y: -100, rotate: chip.rotation }}
          animate={{
            y: "100vh",
            rotate: chip.rotation + 360,
          }}
          transition={{
            duration: chip.duration,
            repeat: Infinity,
            delay: chip.delay,
            ease: "linear",
          }}
        >
          <QuantumChipIcon className="w-full h-full" />
        </motion.div>
      ))}
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#FFD700]/30 bg-gradient-to-r from-[#FFD700]/10 to-[#8B5CF6]/10 px-6 py-2 shadow-[0_0_20px_rgba(255,215,0,0.2)]"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <QuantumChipIcon className="h-5 w-5" />
              </motion.div>
              <span className="text-sm font-medium bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">
                Real Quantum Computing Powered
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-serif text-6xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl"
              style={{
                textShadow:
                  "0 0 20px rgba(139, 92, 246, 0.5), 0 0 40px rgba(139, 92, 246, 0.3)",
              }}
            >
              QUANTUM CASINO
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mx-auto mt-6 max-w-2xl text-xl text-gray-300"
            >
              💎 <span className="text-[#FFD700] font-bold">WIN BIG</span> with
              Real Quantum Physics 💎
              <br />
              Every spin verified on IBM Quantum Hardware
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-10 flex items-center justify-center gap-4 flex-wrap"
            >
              <button className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] px-10 py-5 font-bold text-[#1a0a2e] shadow-[0_0_30px_rgba(255,215,0,0.5)] transition-all hover:scale-110 hover:shadow-[0_0_50px_rgba(255,215,0,0.8)] text-lg">
                <span className="relative z-10 flex items-center gap-2">
                  <Crown className="h-5 w-5" />
                  🎲 PLAY NOW 🎲
                  <Gem className="h-5 w-5" />
                </span>
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    background: [
                      "linear-gradient(45deg, transparent, rgba(255,255,255,0.3), transparent)",
                      "linear-gradient(225deg, transparent, rgba(255,255,255,0.3), transparent)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </button>
              <button className="rounded-lg border-2 border-[#8B5CF6] bg-[#8B5CF6]/10 px-8 py-5 font-semibold text-[#8B5CF6] backdrop-blur-sm transition-all hover:bg-[#8B5CF6]/20 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]">
                <Shield className="inline h-5 w-5 mr-2" />
                View Proof System
              </button>
            </motion.div>
          </motion.div>

          {/* Jackpot Counter */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mx-auto mt-20 max-w-5xl"
          >
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 20px rgba(255,215,0,0.3)",
                  "0 0 40px rgba(255,215,0,0.5)",
                  "0 0 20px rgba(255,215,0,0.3)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="rounded-2xl border-2 border-[#FFD700] bg-gradient-to-br from-[#1a0a2e] to-[#0a0118] p-8"
            >
              <div className="text-center">
                <div className="text-sm font-bold text-[#FFD700] mb-2">
                  💰 QUANTUM JACKPOT 💰
                </div>
                <div className="text-5xl font-bold font-mono text-[#FFD700] drop-shadow-[0_0_20px_rgba(255,215,0,0.8)]">
                  $847,293.00
                </div>
                <div className="text-xs text-gray-400 mt-2">
                  Verified on Real Quantum Hardware
                </div>
              </div>
            </motion.div>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {[
                {
                  label: "Active Players",
                  value: "2,847",
                  icon: Trophy,
                  color: "#FFD700",
                },
                {
                  label: "Games Played",
                  value: "∞",
                  icon: Coins,
                  color: "#8B5CF6",
                },
                {
                  label: "Win Rate",
                  value: "47.3%",
                  icon: TrendingUp,
                  color: "#00FF00",
                },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative overflow-hidden rounded-xl border-2 bg-[#1a0a2e]/80 p-6 backdrop-blur-sm"
                  style={{
                    borderColor: stat.color + "40",
                    boxShadow: `0 0 20px ${stat.color}20`,
                  }}
                >
                  <stat.icon
                    className="mb-3 h-8 w-8"
                    style={{
                      color: stat.color,
                      filter: `drop-shadow(0 0 8px ${stat.color})`,
                    }}
                  />
                  <div
                    className="text-3xl font-bold"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Games Section */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.h2
              className="font-serif text-4xl font-bold sm:text-5xl"
              style={{
                filter: "drop-shadow(0 0 20px rgba(255, 215, 0, 0.3))",
              }}
            >
              🎮 QUANTUM GAMES 🎮
            </motion.h2>
            <p className="mt-4 text-lg text-[#FFD700] font-semibold">
              ⚡ Stack Your Qbits • Control The Quantum • Win Big ⚡
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "🎰 Quantum Slots",
                subtitle: "JACKPOT SPINS",
                description:
                  "Multi-qubit interference creates RARE jackpot patterns. More qubits = exponentially bigger payouts!",
                icon: TrendingUp,
                color: "#00FF00",
                bgGradient: "from-green-500/20 to-emerald-500/20",
                formula: "P(jackpot) ∝ 2^(-γN)",
                emoji: "🎰",
              },
              {
                title: "💎 Token Cloner",
                subtitle: "MULTIPLY WINS",
                description:
                  "Clone your tokens using quantum limits. Higher qbit stake = better fidelity = MORE VALUE!",
                icon: Sparkles,
                color: "#FF1493",
                bgGradient: "from-pink-500/20 to-rose-500/20",
                formula: "F = F₀(1 - e^(-β·q/k))",
                emoji: "💎",
              },
              {
                title: "⚡ Quantum Filter",
                subtitle: "HIGH STAKES",
                description:
                  "Rotate through superposition! Higher qbit count = better odds. UPGRADE or BURN!",
                icon: Radio,
                color: "#8B5CF6",
                bgGradient: "from-violet-500/20 to-purple-500/20",
                formula: "θ = θ₀ + α·qcount",
                emoji: "⚡",
              },
              {
                title: "🎲 Heralded Split",
                subtitle: "DOUBLE OR NOTHING",
                description:
                  "Deploy ancilla qubits for duplication! More qbits = more ancilla = HIGHER SUCCESS!",
                icon: GitBranch,
                color: "#00BFFF",
                bgGradient: "from-blue-500/20 to-cyan-500/20",
                formula: "m = floor(qcount/2)",
                emoji: "🎲",
              },
              {
                title: "👑 Entangled Wager",
                subtitle: "PVP BETTING",
                description:
                  "Two-player quantum showdown! Stack qbits to control entanglement depth and win strategy!",
                icon: Zap,
                color: "#FFD700",
                bgGradient: "from-amber-500/20 to-orange-500/20",
                formula: "N = q₁ + q₂",
                emoji: "👑",
              },
              {
                title: "🔮 Quantum Fusion",
                subtitle: "COMBINE & CONQUER",
                description:
                  "Fuse tokens via controlled gates! Qbit investment controls fusion power and MEGA REWARDS!",
                icon: Atom,
                color: "#FF6B6B",
                bgGradient: "from-red-500/20 to-rose-500/20",
                formula: "gates = f(qcount)",
                emoji: "🔮",
              },
            ].map((game, i) => (
              <motion.div
                key={game.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                className={`group relative overflow-hidden rounded-2xl border-2 bg-gradient-to-br ${game.bgGradient} backdrop-blur-sm p-6 transition-all cursor-pointer`}
                style={{
                  borderColor: game.color + "60",
                  boxShadow: `0 0 20px ${game.color}30`,
                }}
              >
                {/* Neon glow effect on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    boxShadow: `inset 0 0 40px ${game.color}40, 0 0 40px ${game.color}40`,
                  }}
                />

                <div className="relative">
                  {/* Game Icon with Glow */}
                  <div className="mb-4 flex items-center justify-between">
                    <div
                      className="inline-flex rounded-lg p-3 shadow-lg"
                      style={{
                        background: game.color + "20",
                        boxShadow: `0 0 20px ${game.color}40`,
                      }}
                    >
                      <game.icon
                        className="h-6 w-6"
                        style={{
                          color: game.color,
                          filter: `drop-shadow(0 0 8px ${game.color})`,
                        }}
                      />
                    </div>
                    <div className="text-3xl">{game.emoji}</div>
                  </div>

                  {/* Title */}
                  <h3
                    className="mb-1 font-serif text-2xl font-bold"
                    style={{ color: game.color }}
                  >
                    {game.title}
                  </h3>

                  {/* Subtitle */}
                  <div
                    className="mb-3 text-xs font-bold tracking-wider"
                    style={{ color: game.color + "CC" }}
                  >
                    {game.subtitle}
                  </div>

                  {/* Description */}
                  <p className="mb-4 text-sm text-gray-300">
                    {game.description}
                  </p>

                  {/* Formula Badge */}
                  <div
                    className="rounded-lg border p-3 font-mono text-xs font-semibold backdrop-blur-sm"
                    style={{
                      borderColor: game.color + "40",
                      background: game.color + "10",
                      color: game.color,
                    }}
                  >
                    {game.formula}
                  </div>

                  {/* Play Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 w-full rounded-lg py-2 font-bold transition-all"
                    style={{
                      background: game.color,
                      color: "#000",
                      boxShadow: `0 0 20px ${game.color}60`,
                    }}
                  >
                    PLAY NOW
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-serif text-4xl font-bold text-foreground sm:text-5xl">
              Provably Fair Quantum Mechanics
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Every outcome is cryptographically auditable with full provenance
            </p>
          </motion.div>

          <div className="mt-16 grid gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {[
                {
                  step: "01",
                  title: "Stake Qbits",
                  description:
                    "Your qbit balance determines quantum circuit parameters: qubit count N, rotation angles θ, ancilla count m, or shot allocation.",
                },
                {
                  step: "02",
                  title: "QPU Execution",
                  description:
                    "Server runs your parameterized circuit on real IBM quantum hardware. Job IDs and circuit hashes are recorded.",
                },
                {
                  step: "03",
                  title: "Measurement",
                  description:
                    "Quantum superposition collapses to classical bitstring. Specific shot indices determine your outcome.",
                },
                {
                  step: "04",
                  title: "Provenance",
                  description:
                    "Every token minted or burned includes: job_id, shot_index, circuit_hash, and server signature for full auditability.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 font-mono text-sm font-bold text-primary">
                      {item.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-primary/20 bg-card p-8"
            >
              <h3 className="mb-6 font-serif text-2xl font-bold text-foreground">
                Token Ledger Structure
              </h3>
              <div className="space-y-4 font-mono text-sm">
                <div className="rounded-lg border border-primary/10 bg-muted/20 p-4">
                  <div className="text-primary">token_id:</div>
                  <div className="text-muted-foreground">uuid</div>
                </div>
                <div className="rounded-lg border border-primary/10 bg-muted/20 p-4">
                  <div className="text-primary">fidelity:</div>
                  <div className="text-muted-foreground">0.0 - 1.0</div>
                </div>
                <div className="rounded-lg border border-primary/10 bg-muted/20 p-4">
                  <div className="text-primary">provenance:</div>
                  <div className="text-muted-foreground">
                    {`{ job_id, shot_index,`}
                    <br />
                    {`  circuit_hash, created_at }`}
                  </div>
                </div>
                <div className="rounded-lg border border-primary/10 bg-muted/20 p-4">
                  <div className="text-primary">parent_tokens:</div>
                  <div className="text-muted-foreground">array[uuid]</div>
                </div>
              </div>

              <div className="mt-6 rounded-lg border border-accent/20 bg-accent/5 p-4">
                <div className="flex items-start gap-3">
                  <Shield className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                  <div className="text-sm text-accent-foreground">
                    <strong>100% Auditable:</strong> Every event includes
                    job_id, shot indices, raw outcomes, and cryptographic
                    signatures. Verify on our proof explorer.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl"
        >
          <motion.div
            animate={{
              boxShadow: [
                "0 0 40px rgba(255,215,0,0.2), 0 0 80px rgba(139,92,246,0.2)",
                "0 0 60px rgba(255,215,0,0.3), 0 0 100px rgba(139,92,246,0.3)",
                "0 0 40px rgba(255,215,0,0.2), 0 0 80px rgba(139,92,246,0.2)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="relative overflow-hidden rounded-3xl border-2 border-[#FFD700]/50 bg-gradient-to-br from-[#1a0a2e] via-[#16013e] to-[#0a0118] p-12 text-center"
          >
            {/* Animated background effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,215,0,0.15),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(139,92,246,0.15),transparent_50%)]" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="mx-auto mb-6"
              >
                <div className="relative">
                  <QuantumChipIcon className="h-20 w-20 mx-auto drop-shadow-[0_0_30px_rgba(139,92,246,0.8)]" />
                  <div className="absolute inset-0 animate-ping">
                    <QuantumChipIcon className="h-20 w-20 mx-auto opacity-30" />
                  </div>
                </div>
              </motion.div>

              <h2
                className="mb-4 font-serif text-4xl font-bold sm:text-6xl"
                style={{
                  background:
                    "linear-gradient(to right, #FFD700, #FFA500, #FFD700)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 0 20px rgba(255, 215, 0, 0.5))",
                }}
              >
                🎊 START WINNING NOW! 🎊
              </h2>

              <p className="mb-2 text-2xl font-bold text-[#00FF00]">
                🎁 GET 1000 FREE QBITS 🎁
              </p>

              <p className="mb-8 text-lg text-gray-300">
                No deposit • Real quantum hardware • Provably fair
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative overflow-hidden rounded-xl bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] px-12 py-6 text-2xl font-black text-[#000] shadow-[0_0_40px_rgba(255,215,0,0.6)] transition-all"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <Trophy className="h-7 w-7" />
                    CLAIM FREE QBITS
                    <Sparkles className="h-7 w-7" />
                  </span>
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      background: [
                        "linear-gradient(45deg, transparent, rgba(255,255,255,0.4), transparent)",
                        "linear-gradient(225deg, transparent, rgba(255,255,255,0.4), transparent)",
                      ],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                  />
                </motion.button>

                <button className="rounded-xl border-2 border-[#8B5CF6] bg-[#8B5CF6]/10 px-8 py-4 font-bold text-[#8B5CF6] backdrop-blur-sm transition-all hover:bg-[#8B5CF6]/20 hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]">
                  <DollarSign className="inline h-6 w-6 mr-2" />
                  VIEW PAYOUTS
                </button>
              </div>

              <div className="mt-8 flex items-center justify-center gap-8 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-[#00FF00]" />
                  <span>100% Verified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-[#FFD700]" />
                  <span>Instant Payouts</span>
                </div>
                <div className="flex items-center gap-2">
                  <Crown className="h-4 w-4 text-[#8B5CF6]" />
                  <span>VIP Rewards</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-[#FFD700]/20 bg-gradient-to-b from-[#0a0118] to-[#000000] px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-2">
              <QuantumChipIcon className="h-10 w-10" />
              <motion.div
                animate={{
                  textShadow: [
                    "0 0 10px rgba(255,215,0,0.5)",
                    "0 0 20px rgba(255,215,0,0.8)",
                    "0 0 10px rgba(255,215,0,0.5)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-3xl font-bold text-[#FFD700]"
              >
                QUANTUM CASINO
              </motion.div>
              <QuantumChipIcon className="h-10 w-10" />
            </div>
            <p className="text-sm text-[#8B5CF6] font-semibold">
              Where Quantum Physics Meets Big Wins
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-sm">
            <div>
              <h4 className="font-bold text-[#FFD700] mb-3">🎮 GAMES</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Quantum Slots</li>
                <li>Token Cloner</li>
                <li>Quantum Filter</li>
                <li>Heralded Split</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#FFD700] mb-3">🛡️ SECURITY</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Provably Fair System</li>
                <li>IBM Quantum Verified</li>
                <li>Full Audit Trail</li>
                <li>Crypto Signatures</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#FFD700] mb-3">💎 SUPPORT</h4>
              <ul className="space-y-2 text-gray-400">
                <li>24/7 Live Chat</li>
                <li>FAQ & Guides</li>
                <li>VIP Support</li>
                <li>Discord Community</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#FFD700]/20 pt-6 text-center text-xs text-gray-500">
            <p className="mb-2">
              🔬 Powered by IBM Quantum Computing • Next.js • Real Quantum
              Hardware
            </p>
            <p>
              Every outcome cryptographically verifiable • Job IDs publicly
              auditable • 100% Transparent
            </p>
            <p className="mt-4 text-[#8B5CF6]">
              © 2025 Quantum Casino • Play Responsibly • Must be 18+
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

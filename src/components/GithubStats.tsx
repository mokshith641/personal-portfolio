"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiStar, FiGitBranch, FiTrendingUp, FiActivity } from "react-icons/fi";

interface Repo {
  name: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  url: string;
}

interface GithubData {
  username: string;
  followers: number;
  publicRepos: number;
  starsCount: number;
  topLanguages: { name: string; percentage: number; color: string }[];
  pinnedRepos: Repo[];
  contributions: number[]; // commitments density mapping (7x20 grid representation)
}

export default function GithubStats() {
  const [data, setData] = useState<GithubData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch("/api/github");
        if (response.ok) {
          const resData = await response.json();
          setData(resData);
        } else {
          throw new Error("Unable to fetch stats");
        }
      } catch (err) {
        console.warn("GitHub integration: using local simulation fallback.");
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="py-12 flex justify-center items-center">
        <span className="w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  // Fallback data if API failed/unconfigured
  const stats = data || {
    username: "mokshith641",
    followers: 12,
    publicRepos: 18,
    starsCount: 8,
    topLanguages: [
      { name: "Python", percentage: 55, color: "#3572A5" },
      { name: "Java", percentage: 25, color: "#b07219" },
      { name: "TypeScript", percentage: 15, color: "#3178c6" },
      { name: "SQL", percentage: 5, color: "#e38c00" },
    ],
    pinnedRepos: [
      {
        name: "research-paper-assistant",
        description: "RAG-driven research paper analyzer enabling vector semantic searches, summarization, and PDF chats.",
        stars: 3,
        forks: 1,
        language: "TypeScript",
        url: "https://github.com/mokshith641/research-paper-assistant",
      },
      {
        name: "career-compass",
        description: "Intelligent career path recommendations using TF-IDF matching and repository skill analysis.",
        stars: 3,
        forks: 0,
        language: "Python",
        url: "https://github.com/mokshith641/career-compass",
      },
    ],
    contributions: Array.from({ length: 140 }, () => Math.floor(Math.random() * 5)), // 7 rows x 20 cols
  };

  return (
    <section id="github" className="py-24 px-6 md:px-12 xl:px-24 max-w-6xl mx-auto scroll-mt-16">
      
      {/* Section Header */}
      <div className="flex flex-col items-start text-left mb-16">
        <h2 className="text-xs font-mono tracking-widest text-primary uppercase mb-2">08 / Synchronization</h2>
        <h3 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-text-primary to-text-secondary select-none">
          GitHub Activity
        </h3>
        <div className="h-[1.5px] w-12 bg-primary mt-3 rounded-full" />
      </div>

      {/* Bento Layout for Github Statistics */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 text-left">
        
        {/* Core Stats Overview */}
        <div className="lg:col-span-4 p-6 rounded-3xl glass bg-black/20 border border-card-border flex flex-col justify-between gap-6 relative overflow-hidden group">
          <div className="flex items-center justify-between text-text-secondary">
            <div className="flex items-center gap-2">
              <FiGithub className="text-lg text-text-primary" />
              <span className="text-xs font-mono">@{stats.username}</span>
            </div>
            <a 
              href={`https://github.com/${stats.username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-mono text-accent hover:underline"
            >
              Follow
            </a>
          </div>

          {/* Stats counts */}
          <div className="grid grid-cols-3 gap-4 border-y border-white/[0.05] py-4 my-2">
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold text-text-primary">{stats.publicRepos}</div>
              <div className="text-[10px] text-text-secondary font-mono uppercase">Repos</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold text-text-primary">{stats.starsCount}</div>
              <div className="text-[10px] text-text-secondary font-mono uppercase">Stars</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold text-text-primary">{stats.followers}</div>
              <div className="text-[10px] text-text-secondary font-mono uppercase">Followers</div>
            </div>
          </div>

          {/* Languages Distribution */}
          <div className="flex flex-col gap-3">
            <div className="text-[10px] font-mono uppercase text-text-secondary flex items-center gap-1.5">
              <FiTrendingUp className="text-accent" /> Language Distribution
            </div>
            
            {/* Split horizontal chart */}
            <div className="w-full h-2 bg-white/[0.05] rounded-full overflow-hidden flex">
              {stats.topLanguages.map((lang, lIdx) => (
                <div 
                  key={lIdx}
                  style={{ 
                    width: `${lang.percentage}%`,
                    backgroundColor: lang.color 
                  }}
                  title={`${lang.name}: ${lang.percentage}%`}
                />
              ))}
            </div>

            {/* Language Legend */}
            <div className="grid grid-cols-2 gap-2 text-[10px] font-mono text-text-secondary">
              {stats.topLanguages.map((lang, lIdx) => (
                <div key={lIdx} className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: lang.color }} />
                  <span className="text-text-primary">{lang.name}</span>
                  <span>({lang.percentage}%)</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pinned Repositories Grid */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          
          {/* Contributions Graph Calendar representation */}
          <div className="p-6 rounded-3xl glass bg-black/20 border border-card-border flex flex-col gap-4">
            <div className="flex items-center justify-between text-xs font-mono text-text-secondary">
              <span className="flex items-center gap-1.5"><FiActivity className="text-emerald-500" /> Contributions Density</span>
              <span>1 year index</span>
            </div>

            {/* SVG Representation of Grid cells */}
            <div className="flex flex-col items-center justify-center py-2 overflow-x-auto no-scrollbar">
              <div className="grid grid-flow-col grid-rows-7 gap-[3px] self-start md:self-auto">
                {stats.contributions.map((density, cIdx) => {
                  const colors = [
                    "bg-white/[0.02]", // zero commits
                    "bg-emerald-950/40", // low density
                    "bg-emerald-900/60", // medium
                    "bg-emerald-700/80", // high
                    "bg-emerald-500", // extreme
                  ];
                  return (
                    <div
                      key={cIdx}
                      className={`w-[8px] h-[8px] rounded-[1.5px] ${colors[density]}`}
                      title={`${density === 0 ? "No" : density * 2} commits`}
                    />
                  );
                })}
              </div>
            </div>

            <div className="flex justify-between items-center text-[9px] font-mono text-text-secondary/50">
              <span>Less</span>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-[1px] bg-white/[0.02]" />
                <span className="w-1.5 h-1.5 rounded-[1px] bg-emerald-950/40" />
                <span className="w-1.5 h-1.5 rounded-[1px] bg-emerald-900/60" />
                <span className="w-1.5 h-1.5 rounded-[1px] bg-emerald-700/80" />
                <span className="w-1.5 h-1.5 rounded-[1px] bg-emerald-500" />
              </div>
              <span>More</span>
            </div>
          </div>

          {/* Repo cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {stats.pinnedRepos.map((repo, rIdx) => (
              <a
                key={rIdx}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl border border-white/[0.04] bg-white/[0.01] hover:border-white/10 hover:bg-white/[0.03] transition-all flex flex-col justify-between gap-4 group cursor-pointer text-left"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center text-text-primary text-sm font-bold">
                    <span className="group-hover:text-primary transition-colors truncate max-w-[80%]">{repo.name}</span>
                    <FiGithub className="text-text-secondary text-base group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="text-text-secondary text-[11px] leading-relaxed line-clamp-2">
                    {repo.description}
                  </p>
                </div>

                <div className="flex items-center gap-4 text-[10px] font-mono text-text-secondary">
                  <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-accent/30 border border-accent/60 shrink-0" /> {repo.language}</span>
                  <span className="flex items-center gap-1"><FiStar className="text-amber-500" /> {repo.stars}</span>
                  <span className="flex items-center gap-1"><FiGitBranch className="text-secondary" /> {repo.forks}</span>
                </div>
              </a>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

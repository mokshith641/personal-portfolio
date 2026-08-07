import { NextResponse } from "next/server";

export const revalidate = 3600; // Cache stats for 1 hour

export async function GET() {
  const username = "mokshith641";
  
  // Default mock fallback in case of rate-limiting or network issues
  const fallbackData = {
    username,
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
    contributions: Array.from({ length: 140 }, () => Math.floor(Math.random() * 5)), // 7 rows x 20 columns density mapping
  };

  try {
    const userResponse = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "Mokshith-Portfolio-Agent",
      },
      next: { revalidate: 3600 }
    });

    if (!userResponse.ok) {
      throw new Error(`GitHub user endpoint returned status: ${userResponse.status}`);
    }

    const userData = await userResponse.json();

    const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "Mokshith-Portfolio-Agent",
      },
      next: { revalidate: 3600 }
    });

    if (!reposResponse.ok) {
      throw new Error(`GitHub repos endpoint returned status: ${reposResponse.status}`);
    }

    const reposData = await reposResponse.json();

    // Star counter and language parsing
    let starsCount = 0;
    const languagesMap: { [key: string]: number } = {};

    reposData.forEach((repo: any) => {
      starsCount += repo.stargazers_count;
      if (repo.language) {
        languagesMap[repo.language] = (languagesMap[repo.language] || 0) + 1;
      }
    });

    // Formatting language distribution
    const totalReposWithLang = Object.values(languagesMap).reduce((a, b) => a + b, 0);
    const langColors: { [key: string]: string } = {
      Python: "#3572A5",
      Java: "#b07219",
      TypeScript: "#3178c6",
      JavaScript: "#f1e05a",
      HTML: "#e34c26",
      CSS: "#563d7c",
      SQL: "#e38c00",
      C: "#555555"
    };

    const topLanguages = Object.entries(languagesMap)
      .map(([name, count]) => ({
        name,
        percentage: Math.round((count / totalReposWithLang) * 100),
        color: langColors[name] || "#8e8e8e"
      }))
      .sort((a, b) => b.percentage - a.percentage)
      .slice(0, 4);

    // Extracting actual pinned or top starred repos
    const pinnedRepos = reposData
      .filter((repo: any) => !repo.fork)
      .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
      .slice(0, 2)
      .map((repo: any) => ({
        name: repo.name,
        description: repo.description || "No description provided.",
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        language: repo.language || "Unknown",
        url: repo.html_url
      }));

    return NextResponse.json({
      username,
      followers: userData.followers || fallbackData.followers,
      publicRepos: userData.public_repos || fallbackData.publicRepos,
      starsCount: starsCount || fallbackData.starsCount,
      topLanguages: topLanguages.length > 0 ? topLanguages : fallbackData.topLanguages,
      pinnedRepos: pinnedRepos.length > 0 ? pinnedRepos : fallbackData.pinnedRepos,
      contributions: fallbackData.contributions, // API doesn't expose grid graphs directly, use simulation
    });
  } catch (error: any) {
    console.error("API github route failure, serving fallbackData:", error?.message);
    // Graceful error fallback
    return NextResponse.json(fallbackData);
  }
}

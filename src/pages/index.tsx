import { Agent } from '@/components/Agent/Agent';
import { Navbar } from '@/components/Mobile/Navbar';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [showSidebar, setShowSidebar] = useState<boolean>(true);
  const [newObjectiveClicked, setNewObjectiveClicked] = useState(false);

  const menuClickHandler = () => {
    setShowSidebar(!showSidebar);
  };

  const newObjectiveClickHandler = () => {
    setNewObjectiveClicked(true);
    setTimeout(() => {
      setNewObjectiveClicked(false);
    }, 100);
  };

  return (
    <>
      <Head>
        <title>Sandy AI</title>
        <meta
          name="description"
          content="Sandy AI is a perpetual autonomous LLM suite that makes ChatGPT seem like a baby toy."
        />
        <meta name="twitter:image" content="https://raw.githubusercontent.com/oyoops/Sandy-AI/main/public/sandy-big.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Sandy AI" />
        <meta
          property="og:description"
          content="Sandy AI is a perpetual autonomous LLM suite that makes ChatGPT seem like a baby toy."
        />
        <meta property="og:url" content="https://sandyai.xyz" />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/oyoops/Sandy-AI/main/public/sandy-big.png"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@oyoops" />
        <meta name="twitter:title" content="Sandy AI" />
        <meta
          name="twitter:description"
          content="Sandy AI is a perpetual autonomous LLM suite that makes ChatGPT seem like a baby toy."
        />
        <meta name="twitter:image" content="https://raw.githubusercontent.com/oyoops/Sandy-AI/main/public/sandy-big.png" />
      </Head>
      <main className="flex h-screen w-screen flex-col text-sm text-white dark:text-white">
        <div className="fixed top-0 w-full sm:hidden">
          <Navbar onMenuClick={menuClickHandler} />
        </div>
        <div className="flex h-full w-full pt-12 sm:pt-0">
          {showSidebar && (
            <div>
              <Sidebar onMenuClick={menuClickHandler} />
            </div>
          )}
          <Agent />
        </div>
      </main>
    </>
  );
}

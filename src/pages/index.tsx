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
        <title>SuperSandy AI</title>
        <meta
          name="description"
          content="SuperSandy = The next quantum leap in AI."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="SuperSandy AI" />
        <meta
          property="og:description"
          content="SuperSandy = The next quantum leap in AI."
        />
        <meta property="og:url" content="https://sandyai.xyz" />
        <meta
          property="og:image"
          content="https://sandyai.xyz/og-image.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SuperSandy AI" />
        <meta
          name="twitter:description"
          content="SuperSandy = The next quantum leap in AI."
        />
        <meta name="twitter:image" content="/og-image.png" />
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

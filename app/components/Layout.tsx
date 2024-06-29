import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="layout">
      <header>
        <h1>My Next.js Blog</h1>
      </header>
      <main>{children}</main>
      <footer>© 2024 My Blog</footer>
    </div>
  );
}
"use client"
import Head from 'next/head';
import { ReactNode } from 'react';
import Header from './header';

interface LayoutProps {
  children: ReactNode;
}


export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>My eCommerce Shop</title>
        <meta name="description" content="Your eCommerce Shop powered by Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        {children}
      </main>
    </>
  );
}

import type React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../app/globals.css';
import { Providers } from '../src/app/providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Branch - Natural Study Tracking',
  description: 'Track your learning journey with calm, focused productivity',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}



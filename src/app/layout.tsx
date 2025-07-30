import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { Inter, Syne, Quintessential } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'], 
  display: 'swap',
  variable: '--font-inter' 
});

const syne = Syne({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-syne',
});

const quintessential = Quintessential({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-quintessential',
});


export const metadata: Metadata = {
  title: 'Anushkaverse',
  description: 'Welcome to the universe of Anushka.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable} ${quintessential.variable} !scroll-smooth`}>
      <body className="font-sans antialiased bg-background">
        {children}
        <Toaster />
      </body>
    </html>
  );
}

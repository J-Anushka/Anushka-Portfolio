import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { Inter, Quintessential } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter' 
});

const quintessential = Quintessential({
  subsets: ['latin'],
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
    <html lang="en" className={`${inter.variable} ${quintessential.variable} !scroll-smooth dark`}>
      <body className="font-sans antialiased bg-background">
        {children}
        <Toaster />
      </body>
    </html>
  );
}

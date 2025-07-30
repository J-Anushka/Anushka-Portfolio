import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { Inter, Fira_Code } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter' 
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code'
})

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
    <html lang="en" className={`${inter.variable} ${firaCode.variable} !scroll-smooth dark`}>
      <body className="font-sans antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}

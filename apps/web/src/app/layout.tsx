import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { AnimatedBackground } from '@/components/animated-background';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://cv.jaime.dev'),
  title: 'Jaime García · Full-Stack Engineer',
  description:
    'Portfolio de Jaime García, Full-Stack Engineer especializado en React, TypeScript, y plataformas cloud con Postgres.',
  openGraph: {
    title: 'Jaime García · Full-Stack Engineer',
    description:
      'Portfolio de Jaime García, Full-Stack Engineer especializado en React, TypeScript, y plataformas cloud con Postgres.',
    url: 'https://cv.jaime.dev',
    siteName: 'Jaime García',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@jaime',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es" suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="relative overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} storageKey="jaime-theme">
          <AnimatedBackground />
          <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 pb-12 sm:px-8">
            <Header />
            <main className="flex-1 pb-16">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

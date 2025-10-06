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
  metadataBase: new URL('https://jagarcig.com'),
  title: 'Jaime García · Senior Technical Lead & Banking Modernization Expert',
  description:
    'Portfolio of Jaime García, Senior Technical Lead specializing in banking modernization, GenAI platforms, and cloud-native microservices with React, TypeScript, and PostgreSQL.',
  openGraph: {
    title: 'Jaime García · Senior Technical Lead & Banking Modernization Expert',
    description:
      'Portfolio of Jaime García, Senior Technical Lead specializing in banking modernization, GenAI platforms, and cloud-native microservices with React, TypeScript, and PostgreSQL.',
    url: 'https://jagarcig.com',
    siteName: 'Jaime García',
    locale: 'en_US',
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
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="color-scheme" content="light dark" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('jaime-theme');
                const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                const currentTheme = theme === 'system' || !theme ? systemTheme : theme;
                
                if (currentTheme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {
                // Fallback to light theme if there's any error
                document.documentElement.classList.remove('dark');
              }
            `,
          }}
        />
      </head>
      <body className="relative overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true} storageKey="jaime-theme">
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

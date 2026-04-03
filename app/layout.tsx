import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Feliz Páscoa',
  description: 'Uma página simples e moderna para celebrar a Páscoa em português.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

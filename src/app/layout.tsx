import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "motivaChart",
  description: "モチベーショングラフを簡単に作成できるWebアプリです!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "잠시맘",
  description: "단시간 아이돌봄 사이트 잠시맘",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

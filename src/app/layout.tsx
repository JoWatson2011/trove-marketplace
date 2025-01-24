import type { Metadata } from "next";
import { Suspense } from "react";
import { CategoriesProvider } from "../context/CategoriesContext";
import { AuthProvider } from "../context/AuthContext.tsx";
import Header from "../Components/Header.jsx";

export const metadata: Metadata = {
  title: "trove marketplace",
  description: "buy and resell",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div id="root">
          <Suspense>
            <AuthProvider>
              <CategoriesProvider>
                <Header />
                {children}
              </CategoriesProvider>
            </AuthProvider>
          </Suspense>
        </div>
      </body>
    </html>
  );
}

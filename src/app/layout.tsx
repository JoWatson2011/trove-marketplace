import type { Metadata } from "next";
import { CategoriesProvider } from "../context/CategoriesContext.jsx";
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
          <AuthProvider>
            <CategoriesProvider>
              <Header />
              {children}
            </CategoriesProvider>
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}

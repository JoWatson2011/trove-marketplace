
import type { Metadata } from "next";
import { UserProvider } from "../context/UserContext.jsx";
import { CategoriesProvider } from "../context/CategoriesContext.jsx";
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
          <UserProvider>
            <CategoriesProvider>
              <Header/>
              {children}
              </CategoriesProvider>
          </UserProvider>
        </div>
      </body>
    </html>
  );
}

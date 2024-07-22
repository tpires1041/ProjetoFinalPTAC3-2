import Header from "./components/Header";

export const metadata = {
  title: "Meu Shop.com",
  description: "E-commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Header/>
        {children}
      </body>
    </html>
  );
}

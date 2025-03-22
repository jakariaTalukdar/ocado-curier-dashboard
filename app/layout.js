import "./globals.css";
export default function BlankLayout({ children }) {
  return (
    <html>
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  );
}

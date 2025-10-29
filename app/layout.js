export const metadata = {
    title: "Home Page",
    description: "Welcome to our home page!",
}

export default function RootLayout ({ children }) {
    return (
        <html lang="en">
            <body> {children} </body>
        </html>
    );
}

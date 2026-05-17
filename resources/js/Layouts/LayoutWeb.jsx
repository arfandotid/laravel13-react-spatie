import { ThemeProvider } from "@/Components/ThemeProvider";
import Footer from "@/Pages/Web/Components/Footer";
import Navbar from "@/Pages/Web/Components/Navbar";

export default function LayoutWeb({ children }) {
    return (
        <>
            <ThemeProvider defaultTheme="dark" storageKey="theme">
                <Navbar />
                <div className="pt-16 min-h-[calc(100svh-64px)]">
                    {children}
                </div>
                <Footer />
            </ThemeProvider>
        </>
    );
}

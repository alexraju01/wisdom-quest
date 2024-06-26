import Navbar from "@/components/navBar";
import { Inter, Nunito } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const nunito = Nunito({
	subsets: ["latin"],
});

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				<main>{children}</main>
			</body>
		</html>
	);
}

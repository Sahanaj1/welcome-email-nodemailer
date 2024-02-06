import Image from "next/image";
import { Inter } from "next/font/google";
import EmailForm from "@/components/Email";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
  <>
  <EmailForm/>
  </>
  );
}

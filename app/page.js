'use client'

import { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import Header from "@/components/header";
import Main from "@/components/main";
import Footer from "@/components/footer";
export default function Home() {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  useEffect(() => {

    const isLoggedIn = localStorage.getItem('isLoggedIn'); 

    if (isLoggedIn) {
      setUser({ name: "John Doe" }); 
    } else {
      router.push('/login'); 
    }
  }, [router]);
  return (
    <main >
          <Header/>
          <Main/>
          <Footer/>
      </main>
  );
}

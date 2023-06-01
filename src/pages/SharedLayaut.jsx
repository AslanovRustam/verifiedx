import Header from "../components/header/Header";
import Links from "../components/links/Links";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

export default function SharedLayaut() {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Links />
      <Footer />
    </>
  );
}

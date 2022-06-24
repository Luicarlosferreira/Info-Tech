import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../Components/Header";
import { ScrollToTop } from "./ScrollToTop";
import { Section } from "../Components/Section";
import { SectionItems } from "../Components/Section/SectionItems";
import { Login } from "../pages/login";
import { NotFound } from "../pages/notFound";
import { Product } from "../pages/product";
import { Register } from "../pages/register";
import { Search } from "../pages/search";

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <ScrollToTop>
        <Routes>
          <Route exact path="/" element={<Section />} />
          <Route path="/products" element={<SectionItems />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};

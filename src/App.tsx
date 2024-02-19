import "./App.css";
import Hero from "./components/main/Hero";
import Nav from "./components/main/Nav";
import SlideCard from "./components/main/SlideCard";
import { data1, data2, data4 } from "./assets/data";
import Iconic from "./components/main/Iconic";
import Trending from "./components/main/Trending";
import Movement from "./components/main/Movement";
import Footer from "./components/main/Footer";
import ItemList from "./components/main/ItemList";
import { Routes, Route } from "react-router-dom";
import Title from "./components/shop/shop-comp/Title";
import ShopMain from "./components/shop/shop-comp/ShopMain";
import { useState } from "react";


function App() {
  const [filter, setFilter] = useState(false);
  return (
    <>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Hero />
              <SlideCard title={'소중한 사람들을 위한 선물'} items={data1} number={0} perView={3.2}/>
              <SlideCard title={'연말 선물 추천 Apparel'} items={data2} number={1} perView={4}/>
              <Iconic title={"Always Iconic"} />
              <Trending title={"Trending Now"} items={data4} />
              <Movement title={"끝없는 움직임"} />
              <ItemList />
            </main>
          }
        />
        <Route
          path='/shop'
          element={
            <section>
              <Title filter={filter} setFilter={setFilter} />
              <ShopMain filter={filter} setFilter={setFilter} />
            </section>
          }
        />
        <Route path="/detail/:id" element={<div>상세 페이지</div>} />
        <Route path="*" element={<div>없는 페이지</div>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

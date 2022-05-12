import { BrowserRouter, Routes as RoutesRD, Route } from "react-router-dom";

import { Cards } from "../pages/Cards";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";

export function Routes(){

  return (
    <BrowserRouter>
      <RoutesRD>
        <Route index element={<Home />} />
        <Route path="cards" element={<Cards />} />
        <Route path="*" element={<NotFound />} />
      </RoutesRD>
    </BrowserRouter>
  );
}
// pages/pages.js
import HomePage from "./HomePage.jsx";

import BecomeProfi from "./BecomeProfi.jsx";
import HomeProfiPage from "./HomeProfiPage.jsx";
import ProfiClientsPage from "./ProfiClientsPage.jsx";
import BookingPage from "./BookingPage.jsx";
import ProfiTagPage from "./ProfiTagPage.jsx";

// Словарь всех страниц по ключу (card.href)
export const pages = {
  home: HomePage,
  homeProfi: HomeProfiPage,
  becomeProfi: BecomeProfi,
  profiClients: ProfiClientsPage,
  booking: BookingPage,
  profiTag: ProfiTagPage,
};
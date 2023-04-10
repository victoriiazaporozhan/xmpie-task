import React from "react";
import { HomePage } from "./pages/HomePage.tsx";
import { FavoritesPage } from "./pages/FavoritesPage.tsx";

export const routes = [
  {
    key: 'home',
    title: 'Home',
    path: '/',
    enabled: true,
    component: <HomePage />,
  },
  {
    key: 'favorites',
    title: 'Favorites',
    path: '/favorites',
    enabled: true,
    component: <FavoritesPage />,
  }
]
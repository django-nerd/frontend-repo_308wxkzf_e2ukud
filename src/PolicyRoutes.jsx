import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ImpressumPage, DatenschutzPage, CookiesPage } from './components/Policies'

const PolicyRoutes = () => (
  <Routes>
    <Route path="/impressum" element={<ImpressumPage />} />
    <Route path="/datenschutz" element={<DatenschutzPage />} />
    <Route path="/cookies" element={<CookiesPage />} />
  </Routes>
)

export default PolicyRoutes

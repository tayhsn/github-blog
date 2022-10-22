import { Layout } from '../layout/index'
import { Routes, Route } from 'react-router-dom'
import { Feed } from '../pages/Feed'
import { IssuePage } from '../pages/IssuePage'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Feed />} />
        <Route path="/issue" element={<IssuePage />} />
      </Route>
    </Routes>
  )
}

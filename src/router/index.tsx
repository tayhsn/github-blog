import { Layout } from '@/layout/index'
import { Feed } from '@/pages/Feed'
import { IssuePage } from '@/pages/Post'
import { Route, Routes } from 'react-router-dom'

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

import { Layout } from '@/layout/index'
import { Feed } from '@/pages/Feed'
import { Post } from '@/pages/Post'
import { Route, Routes } from 'react-router-dom'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Feed />} />
        <Route path="/post" element={<Post />} />
      </Route>
    </Routes>
  )
}

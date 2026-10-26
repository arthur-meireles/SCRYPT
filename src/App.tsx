import { useEffect } from 'react'
import { Outlet, Route, Routes, useLocation } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Post from './pages/Post'
import { scrollToHash, setLenis } from './scroll'
import { useTheme } from './useTheme'

gsap.registerPlugin(ScrollTrigger)

const reduceMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches

function Layout() {
  const { theme, toggle } = useTheme()
  const { pathname, hash } = useLocation()

  // rolagem suave: uma instância para o site todo
  useEffect(() => {
    if (reduceMotion()) return
    const lenis = new Lenis()
    setLenis(lenis)
    lenis.on('scroll', ScrollTrigger.update)
    const tick = (t: number) => lenis.raf(t * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)
    return () => {
      gsap.ticker.remove(tick)
      lenis.destroy()
      setLenis(null)
    }
  }, [])

  // a cada página: vai ao topo (ou à âncora) e anima as seções
  useEffect(() => {
    scrollToHash(hash)
  }, [pathname, hash])

  useEffect(() => {
    if (reduceMotion()) return
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.reveal').forEach((el) => {
        gsap.from(el, {
          y: 28,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        })
      })
    })
    return () => ctx.revert()
  }, [pathname])

  return (
    <>
      <Nav theme={theme} onToggleTheme={toggle} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<Post />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}

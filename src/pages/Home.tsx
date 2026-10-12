import { usePageMeta } from '../hooks/usePageMeta'
import { About } from '../sections/About'
import { Beyond } from '../sections/Beyond'
import { Contact } from '../sections/Contact'
import { Experience } from '../sections/Experience'
import { Expertise } from '../sections/Expertise'
import { Hero } from '../sections/Hero'
import { Philosophy } from '../sections/Philosophy'
import { Projects } from '../sections/Projects'

export default function Home() {
  usePageMeta()
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Expertise />
      <Philosophy />
      <Experience />
      <Beyond />
      <Contact />
    </>
  )
}

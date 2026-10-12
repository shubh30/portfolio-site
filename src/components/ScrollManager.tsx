import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Scrolls to the #hash target after navigation, otherwise back to the top.
 * Smooth scrolling is kept for in-page anchors; moving to a different page jumps instantly.
 */
export function ScrollManager() {
  const { pathname, hash } = useLocation()
  const previousPath = useRef(pathname)

  useEffect(() => {
    const samePage = previousPath.current === pathname
    previousPath.current = pathname
    const behavior = samePage ? 'auto' : 'instant'
    const target = hash ? document.getElementById(hash.slice(1)) : null
    if (target) target.scrollIntoView({ behavior })
    else window.scrollTo({ top: 0, behavior })
  }, [pathname, hash])

  return null
}

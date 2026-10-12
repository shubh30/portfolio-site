import { useEffect } from 'react'

const BASE_TITLE = 'Shubham Nagpal — Senior Frontend Engineer'

export function usePageMeta(title?: string, description?: string) {
  useEffect(() => {
    document.title = title ? `${title} · Shubham Nagpal` : BASE_TITLE
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    const original = meta?.content
    if (meta && description) meta.content = description
    return () => {
      if (meta && original) meta.content = original
    }
  }, [title, description])
}

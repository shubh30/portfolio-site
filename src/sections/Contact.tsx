import { ArrowDownToLine, Check, Copy, Mail } from 'lucide-react'
import { useState } from 'react'
import { GitHubIcon, LinkedInIcon } from '../components/Icons'
import { SectionHeading } from '../components/SectionHeading'
import { profile } from '../data/profile'

export function Contact() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeading index="07" id="contact-title" title="Contact" lede="Hiring for a senior frontend role? Let’s talk." />
        <p className="section-note">
          I’m interested in Senior Frontend Engineer, Lead Frontend Engineer and Frontend Platform roles, and in conversations about hard frontend problems.
        </p>
        <div className="contact-actions">
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>
            <Mail size={18} aria-hidden="true" /> {profile.email}
          </a>
          <button type="button" className="btn btn-secondary" onClick={copy}>
            {copied ? <Check size={18} aria-hidden="true" /> : <Copy size={18} aria-hidden="true" />}
            {copied ? 'Copied' : 'Copy email'}
          </button>
          <a className="btn btn-secondary" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            <LinkedInIcon /> LinkedIn<span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a className="btn btn-secondary" href={profile.github} target="_blank" rel="noopener noreferrer">
            <GitHubIcon /> GitHub<span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a className="btn btn-ghost" href={profile.resumeUrl} download>
            <ArrowDownToLine size={18} aria-hidden="true" /> Resume (PDF)
          </a>
        </div>
        <p className="sr-only" role="status">{copied ? 'Email address copied to clipboard' : ''}</p>
      </div>
    </section>
  )
}

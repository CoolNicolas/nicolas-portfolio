import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Github, Mail, Menu, X } from 'lucide-react'
import { interests, milestones, profile, type JourneyKind, type Milestone } from './content'

const kinds: Array<'All' | JourneyKind> = ['All', 'Project', 'Learning', 'Education']

function SmallLabel({ number, children }: { number: string; children: string }) {
  return <div className="section-kicker"><span>{number}</span><span className="kicker-rule" /><span>{children}</span></div>
}

function MilestoneRow({ milestone, isExpanded, onToggle }: { milestone: Milestone; isExpanded: boolean; onToggle: () => void }) {
  const reducedMotion = useReducedMotion()
  const panelId = `panel-${milestone.id}`

  return (
    <article className={`milestone-row ${isExpanded ? 'is-expanded' : ''}`} id={`milestone-${milestone.id}`}>
      <div className="milestone-date"><span>{milestone.date}</span><span className="timeline-dot" aria-hidden="true" /></div>
      <div className="milestone-content">
        <button
          type="button"
          className="milestone-button"
          aria-expanded={isExpanded}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span className="milestone-heading">
            <span className="milestone-kind">{milestone.kind}</span>
            <span className="milestone-title">{milestone.title}</span>
            <span className="milestone-summary">{milestone.summary}</span>
          </span>
          <span className="milestone-action" aria-hidden="true"><span className="action-circle">{isExpanded ? <X size={18} strokeWidth={1.3} /> : <ArrowUpRight size={21} strokeWidth={1.35} />}</span></span>
        </button>
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              id={panelId}
              key={panelId}
              className="milestone-expand"
              initial={reducedMotion ? false : { height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={reducedMotion ? undefined : { height: 0, opacity: 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="milestone-expand-inner">
                <p>{milestone.story}</p>
                <div className="milestone-tags" aria-label="Related topics">
                  {milestone.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                {milestone.link && (
                  <div className="milestone-link-group">
                    <a className="milestone-link" href={milestone.link.href} target="_blank" rel="noopener noreferrer">
                      {milestone.link.label}<ArrowUpRight size={15} aria-hidden="true" />
                    </a>
                    {milestone.link.note && <span className="milestone-link-note">{milestone.link.note}</span>}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </article>
  )
}

function Journey() {
  const [kind, setKind] = useState<'All' | JourneyKind>('All')
  const [activeId, setActiveId] = useState<string | null>(milestones[0].id)
  const visible = kind === 'All' ? milestones : milestones.filter((entry) => entry.kind === kind)

  function chooseKind(nextKind: 'All' | JourneyKind) {
    setKind(nextKind)
    setActiveId(null)
  }

  return (
    <section className="journey-section" id="journey" aria-labelledby="journey-title">
      <div className="container">
        <SmallLabel number="01" >THE JOURNEY</SmallLabel>
        <div className="journey-heading-grid">
          <div>
            <h2 className="section-title" id="journey-title">A collection of <em>firsts,</em><br />lessons &amp; ideas.</h2>
          </div>
          <p className="journey-intro">Not just a list of projects. A look at the things I've learned, attempted, and built along the way. Select any moment to discover its story.</p>
        </div>
        <div className="journey-toolbar">
          <div className="journey-filters" role="group" aria-label="Filter timeline">
            {kinds.map((choice) => (
              <button key={choice} className={`filter-chip ${choice === kind ? 'active' : ''}`} type="button" aria-pressed={choice === kind} onClick={() => chooseKind(choice)}>{choice === 'All' ? 'Everything' : choice === 'Project' ? 'Projects' : choice === 'Learning' ? 'Learning' : 'Education'}</button>
            ))}
          </div>
          <span className="journey-count">{String(visible.length).padStart(2, '0')} MOMENTS</span>
        </div>
        <div className="milestone-list">
          {visible.map((entry) => (
            <MilestoneRow key={entry.id} milestone={entry} isExpanded={activeId === entry.id} onToggle={() => setActiveId(activeId === entry.id ? null : entry.id)} />
          ))}
        </div>
        <p className="timeline-footnote"><span className="footnote-star">✳</span> An ongoing story. New lessons and projects will find their place here.</p>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="container">
        <SmallLabel number="02">BEYOND THE SCREEN</SmallLabel>
        <div className="about-heading-grid">
          <h2 className="section-title" id="about-title">There’s more to me<br />than <em>code.</em></h2>
          <p className="about-intro">A couple of things that make my days more interesting when I'm not studying or building something.</p>
        </div>
        <div className="interest-grid">
          {interests.map((interest) => (
            <article className="interest-card" key={interest.name}>
              <div className="interest-top"><span>{interest.number} / WHAT I ENJOY</span><span aria-hidden="true" className="interest-symbol">{interest.symbol}</span></div>
              <div className="interest-bottom"><h3>{interest.name}</h3><p>{interest.description}</p></div>
            </article>
          ))}
        </div>
        <div className="about-note"><span className="about-asterisk" aria-hidden="true">✳</span><p>Curiosity doesn't stop at the keyboard. I like learning how things work, being part of a team, and making time for the things I enjoy.</p></div>
      </div>
    </section>
  )
}

function Contact() {
  const [copied, setCopied] = useState(false)
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2200)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <SmallLabel number="03">LET'S CONNECT</SmallLabel>
        <div className="contact-row">
          <div className="contact-text">
            <h2 id="contact-title">The next chapter<br />could start <em>here.</em></h2>
            <p>I'm open to opportunities across technology — internships, projects, collaborations, or simply an interesting conversation.</p>
            <div className="contact-buttons">
              <a className="button button-light" href={`mailto:${profile.email}`}>Say hello <ArrowUpRight size={17} aria-hidden="true" /></a>
              <a className="button button-outline-light" href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={17} aria-hidden="true" /> My GitHub <ArrowUpRight size={15} aria-hidden="true" /></a>
            </div>
          </div>
          <div className="contact-details">
            <span className="contact-detail-label">EMAIL</span>
            <button className="contact-email" type="button" onClick={copyEmail} title="Copy email address">
              {profile.email} {copied ? <Check size={18} aria-label="Copied" /> : <ArrowUpRight size={18} aria-hidden="true" />}
            </button>
            <span className="contact-copy-status" role="status" aria-live="polite">{copied ? 'Email copied to clipboard' : 'Click the address to copy it'}</span>
            <div className="contact-rule" />
            <span className="contact-detail-label">GITHUB</span>
            <a className="contact-email" href={profile.github} target="_blank" rel="noopener noreferrer">github.com/CoolNicolas <ArrowUpRight size={18} aria-hidden="true" /></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (!mobileOpen) return
    function keydown(event: KeyboardEvent) { if (event.key === 'Escape') setMobileOpen(false) }
    window.addEventListener('keydown', keydown)
    return () => window.removeEventListener('keydown', keydown)
  }, [mobileOpen])

  function goTo(section: string) {
    setMobileOpen(false)
    document.querySelector(section)?.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' })
  }

  return (
    <>
      <a className="skip-link" href="#journey">Skip to journey</a>
      <header className="site-header" id="top">
        <div className="container nav-container">
          <a href="#top" className="wordmark" aria-label="Nicolas Lin — home" onClick={(e) => { e.preventDefault(); goTo('#top') }}>{profile.initials}<span className="wordmark-dot">.</span></a>
          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#journey">The journey</a><a href="#about">Beyond work</a><a href="#contact">Contact</a>
          </nav>
          <a className="nav-github" href={profile.github} target="_blank" rel="noopener noreferrer">GITHUB <ArrowUpRight size={15} aria-hidden="true" /></a>
          <button className="mobile-toggle" type="button" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileOpen} aria-controls="mobile-navigation">{mobileOpen ? <X size={23} /> : <Menu size={23} />}</button>
        </div>
        {mobileOpen && <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation"><a href="#journey" onClick={() => setMobileOpen(false)}>The journey <ArrowRight size={17} /></a><a href="#about" onClick={() => setMobileOpen(false)}>Beyond work <ArrowRight size={17} /></a><a href="#contact" onClick={() => setMobileOpen(false)}>Contact <ArrowRight size={17} /></a><a href={profile.github} target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)}>GitHub <ArrowUpRight size={17} /></a></nav>}
      </header>

      <main>
        <section className="hero-section" id="home" aria-labelledby="hero-name">
          <div className="container">
            <div className="hero-topline"><span>PERSONAL PORTFOLIO</span><span>2024 — PRESENT</span></div>
            <div className="hero-grid">
              <div className="hero-main">
                <span className="hero-eyebrow">HELLO, I'M</span>
                <h1 id="hero-name">Nicolas<br /><em>Lin.</em></h1>
                <p className="hero-lead">
                  Computer Science Student at Queen's University
                </p>
                <div className="hero-credentials">
                  <span>GPA 3.9 / 4.3</span>
                  <span>Software Development & AI</span>
                  <span>Open to Tech Opportunities</span>
                </div>
                <p className="hero-description">{profile.introduction}</p>
                <div className="hero-actions">
                  <a className="button button-dark" href="#journey">Explore my journey <ArrowDown size={17} aria-hidden="true" /></a>
                  <a className="hero-text-link" href={profile.github} target="_blank" rel="noopener noreferrer">Visit GitHub <ArrowUpRight size={16} aria-hidden="true" /></a>
                </div>
              </div>
              <div className="hero-aside" aria-label="A little about me">
                <div className="hero-aside-top"><span>A NOTE FROM ME</span><span>01 / 01</span></div>
                <div className="hero-aside-body"><div className="aside-quote-mark">“</div><p>Always learning.<br />Always building.<br /><em>Always curious.</em></p></div>
                <div className="hero-aside-bottom"><span>STUDENT · BUILDER · TEAMMATE</span><span className="aside-mark" aria-hidden="true">NL</span></div>
              </div>
            </div>
            <div className="hero-bottomline">
              <span className="opportunity"><span className="availability-dot" aria-hidden="true" />{profile.opportunity}</span>
              <span className="hero-personal">BASKETBALL <span>·</span> LEAGUE OF LEGENDS</span>
            </div>
          </div>
        </section>
        <Journey />
        <About />
        <Contact />
      </main>

      <footer className="site-footer">
        <div className="container footer-content"><a href="#top" className="footer-logo" aria-label="Back to top">NL<span>.</span></a><span>Made with intention. Updated as I grow.</span><div className="footer-links"><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={12} aria-hidden="true" /></a><a href={`mailto:${profile.email}`}>Email <Mail size={12} aria-hidden="true" /></a>{profile.resume && <a href={profile.resume} target="_blank" rel="noopener noreferrer">Resume <ArrowUpRight size={12} /></a>}{profile.linkedIn && <a href={profile.linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={12} /></a>}</div></div>
      </footer>
    </>
  )
}

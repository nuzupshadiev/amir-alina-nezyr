export function SectionTitle({ children, eyebrow }: { children: React.ReactNode; eyebrow?: string }) {
  return <header className="section-heading">{eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}<h2>{children}</h2><span aria-hidden="true" className="title-flourish">❦</span></header>;
}

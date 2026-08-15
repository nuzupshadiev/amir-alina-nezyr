export function PriglasiCredit({ language }: { language: string }) {
  const kyrgyz = language === "ky";

  return (
    <div
      className="priglasi-credit"
      style={{
        position: "relative",
        zIndex: 2,
        width: "calc(100% - 2rem)",
        maxWidth: "22rem",
        margin: "2.5rem auto 0",
        padding: "1.25rem 1rem 0",
        paddingBottom: "max(1rem, env(safe-area-inset-bottom))",
        borderTop: "1px solid currentColor",
        color: "inherit",
        opacity: 0.64,
        font: "inherit",
        fontSize: "0.68rem",
        lineHeight: 1.7,
        letterSpacing: "0.08em",
        textAlign: "center",
      }}
    >
      <p style={{ margin: 0 }}>
        {kyrgyz ? "Дизайн: " : "Дизайн от "}
        <a
          href="https://www.instagram.com/priglasi.design.kg/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit", textUnderlineOffset: "0.18em" }}
        >
          @priglasi.design.kg
        </a>
      </p>
      <nav
        aria-label={kyrgyz ? "Priglasi Design шилтемелери" : "Ссылки Priglasi Design"}
        style={{ display: "flex", justifyContent: "center", gap: "0.75rem", marginTop: "0.35rem" }}
      >
        <a
          href="https://www.instagram.com/priglasi.design.kg/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit", textUnderlineOffset: "0.18em" }}
        >
          Instagram
        </a>
        <span aria-hidden="true">·</span>
        <a
          href="https://wa.me/996776260702"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit", textUnderlineOffset: "0.18em" }}
        >
          WhatsApp
        </a>
      </nav>
    </div>
  );
}


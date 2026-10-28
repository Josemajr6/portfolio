"use client";

// Último recurso: sustituye al layout raíz si falla, así que no puede usar providers ni fuentes del layout.
// Por eso los estilos van en línea y el texto en los dos idiomas.
export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="es">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          background: "#13213f",
          color: "#f6eedd",
          fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif",
          padding: "24px",
        }}
      >
        <main style={{ maxWidth: 560 }}>
          <h1 style={{ fontSize: "clamp(2.5rem, 8vw, 4.5rem)", lineHeight: 0.95, margin: 0, color: "#f5c451", letterSpacing: "-0.04em" }}>
            Se ha roto algo.
          </h1>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.6, color: "#c3c8d8", marginTop: 20 }}>
            Ha habido un error inesperado. Prueba a recargar la página.
            <br />
            <span lang="en">An unexpected error occurred. Try reloading the page.</span>
          </p>
          <button
            type="button"
            onClick={reset}
            style={{
              marginTop: 24,
              height: 48,
              padding: "0 24px",
              borderRadius: 999,
              border: "none",
              background: "#f5c451",
              color: "#13213f",
              fontWeight: 700,
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            Reintentar · <span lang="en">Try again</span>
          </button>
        </main>
      </body>
    </html>
  );
}

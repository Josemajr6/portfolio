// Estado de carga entre páginas: la estrella ✦ de la web girando despacio
export default function Loading() {
  return (
    <div role="status" className="min-h-screen grid place-items-center">
      <span aria-hidden="true" className="animate-badge text-albero text-5xl leading-none">
        ✦
      </span>
      <span className="sr-only">Cargando… / Loading…</span>
    </div>
  );
}

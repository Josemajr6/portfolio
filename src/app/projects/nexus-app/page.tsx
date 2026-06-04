"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import BackButton from "@/components/ui/BackButton";


import {
  FaGithub,
  FaDatabase,
  FaLayerGroup,
  FaServer,
  FaTerminal,
  FaCheckCircle,
  FaStar,
  FaRocket,
  FaLightbulb,
  FaLock,
  FaShoppingCart,
  FaComments,
  FaMobile,
  FaShieldAlt,
  FaCog,
  FaUsersCog,
  FaStore,
  FaBolt,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { SiDocker, SiStripe, SiIonic } from "react-icons/si";

/* ─────────────────────────── helpers ─────────────────────────── */

const DesktopMockup = ({
  src,
  caption,
  url,
}: {
  src: string;
  caption: string;
  url?: string;
}) => (
  <div className="flex flex-col gap-3 group">
    <div className="relative rounded-xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-950 transition-all duration-300 group-hover:border-emerald-500/40 group-hover:shadow-emerald-500/10">
      {/* Browser chrome */}
      <div className="bg-zinc-900 border-b border-zinc-800 px-4 py-2.5 flex items-center gap-2.5">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="bg-zinc-800 text-zinc-500 text-[10px] font-mono px-3 py-0.5 rounded-sm truncate max-w-[200px]">
            {url ?? "nexus-app.vercel.app"}
          </div>
        </div>
      </div>
      <div className="relative" style={{ aspectRatio: "16/10" }}>
        <Image
          src={src}
          alt={caption}
          fill
          className="object-contain object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
    <p className="text-xs text-zinc-500 font-mono text-center leading-relaxed px-2">
      {caption}
    </p>
  </div>
);

const MobileMockup = ({ src, caption }: { src: string; caption: string }) => (
  <div className="flex flex-col items-center gap-3 group">
    <div
      className="relative mx-auto bg-zinc-900 rounded-[40px] p-2.5 shadow-2xl border-[2px] border-zinc-700 transition-all duration-300 group-hover:border-emerald-500/50"
      style={{ width: 200 }}
    >
      {/* Dynamic Island */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-zinc-900 rounded-b-2xl z-20" />
      <div className="relative bg-zinc-950 rounded-[32px] overflow-hidden" style={{ aspectRatio: "9/19.5" }}>
        <Image
          src={src}
          alt={caption}
          fill
          className="object-contain object-center"
          sizes="200px"
        />
      </div>
      {/* Home indicator */}
      <div className="mt-1.5 mx-auto w-20 h-1 bg-zinc-600 rounded-full" />
      {/* Buttons */}
      <div className="absolute -left-[3px] top-24 w-[3px] h-8 bg-zinc-700 rounded-l" />
      <div className="absolute -left-[3px] top-36 w-[3px] h-12 bg-zinc-700 rounded-l" />
      <div className="absolute -right-[3px] top-32 w-[3px] h-14 bg-zinc-700 rounded-r" />
    </div>
    <p className="text-xs text-zinc-500 font-mono text-center max-w-[200px] leading-relaxed">
      {caption}
    </p>
  </div>
);

/* ─────────────────── section heading component ─────────────────── */
const SectionHead = ({
  icon: Icon,
  label,
  title,
  subtitle,
}: {
  icon: React.ElementType;
  label: string;
  title: string;
  subtitle?: string;
}) => (
  <div className="mb-12">
    <div className="flex items-center gap-2 text-emerald-500 font-mono text-xs uppercase tracking-widest mb-3">
      <Icon size={12} />
      <span>{label}</span>
    </div>
    <h2 className="text-3xl md:text-4xl font-black text-white mb-3">{title}</h2>
    {subtitle && (
      <p className="text-zinc-400 max-w-3xl text-base leading-relaxed">{subtitle}</p>
    )}
    <div className="mt-4 h-[1px] bg-zinc-800" />
  </div>
);

/* ──────────────────────────── page ──────────────────────────── */

type GalleryTab = "main" | "auth" | "catalog" | "chat" | "buy" | "publish" | "profile" | "admin" | "mobile";

const GALLERY_TABS: { id: GalleryTab; label: string; icon: React.ElementType }[] = [
  { id: "main", label: "Inicio", icon: FaRocket },
  { id: "auth", label: "Auth & Registro", icon: FaLock },
  { id: "catalog", label: "Catálogo", icon: FaStore },
  { id: "chat", label: "Chat & Reservas", icon: FaComments },
  { id: "buy", label: "Compra & Pagos", icon: FaShoppingCart },
  { id: "publish", label: "Publicar", icon: FaBolt },
  { id: "profile", label: "Perfil", icon: FaUsersCog },
  { id: "admin", label: "Admin", icon: FaShieldAlt },
  { id: "mobile", label: "Móvil", icon: FaMobile },
];

const GALLERY_DATA: Record<GalleryTab, { src: string; caption: string; type: "desktop" | "mobile"; url?: string }[]> = {
  main: [
    { src: "/images/projects/nexus/img-pruebas/pantalla-inicio-invitado.png", caption: "Pantalla de inicio para visitantes (PC) — acceso de solo lectura al catálogo", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas/pantalla-principal-Lo-ultimo-en-nexus.png", caption: "Feed principal — Lo último en Nexus con artículos recientes", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas/pantalla-principal-Chollos-del-dia.png", caption: "Chollos del Día — ranking dinámico por sistema de votos Spark/Drip", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas/pantalla-principal-top-chollos-flash.png", caption: "Top Chollos Flash — ofertas con cuenta atrás y límite de unidades", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas/pantalla-principal-Explora-por-categoria.png", caption: "Explorar por categoría — navegación jerárquica de categorías", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas/pantalla-ofertas-flash.png", caption: "Sección Flash Sales — ofertas de tiempo limitado con badge EXPIRA_HOY", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas/pantalla-gratis.png", caption: "Sección Gratuita — productos en donación e intercambio", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas/pantalla-viajes.png", caption: "Sección Viajes — ofertas especializadas de turismo", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas/desplegable-izquierda-categorias.png", caption: "Menú lateral de categorías con navegación rápida", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas/menu-notificaciones.png", caption: "Centro de notificaciones in-app con badging inteligente", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas/pantalla-favoritos.png", caption: "Sección Favoritos — items guardados por el usuario", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas/pantalla-prueba-cerca-de-ti-radar-10km-1coche.png", caption: "Búsqueda 'Cerca de ti' — radar GPS con radio ajustable (10 km)", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas/pantalla-cerca-de-ti-50km-2coches.png", caption: "Búsqueda geográfica — radio de 50 km mostrando 2 vehículos cercanos", type: "desktop" },
  ],
  auth: [
    { src: "/images/projects/nexus/img-pruebas/registro-normal.png", caption: "Formulario de registro con medidor de fortaleza de contraseña y reCAPTCHA v3 en backend", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas/inicio-sesion-normal.png", caption: "Login estándar con usuario/email y contraseña hasheada con BCrypt", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas/inicio-sesion-google.png", caption: "Login con Google OAuth 2.0 — ID token verificado en el backend", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas/verificacion-registro.png", caption: "Verificación de email — OTP de 6 dígitos válido 30 minutos", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas/recuperar-contrasena.png", caption: "Recuperación de contraseña — token UUID de 15 minutos de vigencia", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas/registro-eleccion-seguridad.png", caption: "Wizard de onboarding — configuración de seguridad (2FA, contraseña)", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas/registro-eleccon-identidad-personal.png", caption: "Wizard de onboarding — identidad personal y tipo de cuenta", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas/registro-eleccion-estilo-predeterminado.png", caption: "Wizard de onboarding — preferencias de estilo visual", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas-admin/2fa-qr.png", caption: "2FA TOTP — código QR para vincular con Google Authenticator (generado con ZXing)", type: "desktop", url: "admin.nexus-app.vercel.app" },
    { src: "/images/projects/nexus/img-pruebas-admin/login-2fa-activado.png", caption: "Login del panel admin con 2FA TOTP activado — solicita código de 6 dígitos", type: "desktop", url: "admin.nexus-app.vercel.app" },
  ],
  catalog: [
    { src: "/images/projects/nexus/img-pruebas/pantalla-categoria-coches.png", caption: "Catálogo de vehículos — filtros por tipo, marca, combustible, km y precio", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas/pantalla-vehiculos.png", caption: "Vista listado de vehículos con paginación y ordenación", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas/coche-detail.png", caption: "Ficha técnica completa de vehículo — marca, modelo, año, km, combustible, ITV, garantía", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas/coche-detail-2.png", caption: "Detalle de vehículo — galería de imágenes y características extra", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas/producto-detail.png", caption: "Detalle de producto de segunda mano — galería Cloudinary, precio, condición y vendedor", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas/producto-detail-2.png", caption: "Detalle de producto — descripción completa y botones de acción (comprar, contactar)", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas/oferta-producto-detail.png", caption: "Detalle de oferta/chollo — precio original vs. oferta, badge automático y votación", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas/oferta-producto-detail-2.png", caption: "Votación Spark/Drip en tiempo real — sparkScore recalculado cada 5 minutos por scheduler", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas/desplegable-perfil.png", caption: "Menú de perfil desplegable — acceso rápido a cuenta, notificaciones y ajustes", type: "desktop" },
  ],
  chat: [
    { src: "/images/projects/nexus/img-pruebas-msg-editoranuncios-reservas/pc/pantalla_mensajes_pc.png", caption: "Chat en tiempo real con WebSocket STOMP — lista de conversaciones activas", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas-msg-editoranuncios-reservas/pc/vista_producto_contactar_pc.png", caption: "Botón 'Contactar' en el producto — inicia sala de chat con roomId determinista", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas-msg-editoranuncios-reservas/pc/envio_mensaje_pc.png", caption: "Envío de mensaje de texto en tiempo real (tipo TEXTO vía STOMP)", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas-msg-editoranuncios-reservas/pc/recepci%C3%B3n_mensaje.png", caption: "Recepción del mensaje en la sala compartida (WebSocket bidireccional)", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas-msg-editoranuncios-reservas/pc/envio_fotos_pc.png", caption: "Envío de imágenes al chat — subidas a Cloudinary (tipo IMAGEN)", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas-msg-editoranuncios-reservas/pc/recepcion_fotos.png", caption: "Recepción de fotos en el chat del comprador", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas-msg-editoranuncios-reservas/pc/envio_propuesta_precio.png", caption: "Propuesta de precio — tipo OFERTA_PRECIO con aceptación/rechazo en tiempo real", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas-msg-editoranuncios-reservas/pc/recepcion_propuesta_pc.png", caption: "Recepción de propuesta de precio por el vendedor (acepta o rechaza)", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas-msg-editoranuncios-reservas/pc/pagina_productos_reservar.png", caption: "Gestión de productos con opción de reservar artículo para un comprador", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas-msg-editoranuncios-reservas/pc/popup_reserva_pc.png", caption: "Popup de confirmación de reserva — artículo pasa a estado RESERVADO", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas-msg-editoranuncios-reservas/pc/reservado_pc.png", caption: "Producto con estado RESERVADO visible en el catálogo del vendedor", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas-msg-editoranuncios-reservas/pc/botones_y_editar_anuncio.png", caption: "Panel de edición de anuncio — opciones de gestión del artículo publicado", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas-msg-editoranuncios-reservas/pc/edicion_anuncio_1_pc.png", caption: "Editor de anuncio — modificar detalles del producto publicado (PC)", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas-msg-editoranuncios-reservas/movil/pantalla_mensajes_movil.png", caption: "Chat en tiempo real — versión móvil (Android/Ionic)", type: "mobile" },
    { src: "/images/projects/nexus/img-pruebas-msg-editoranuncios-reservas/movil/vista_producto_contactar_movil.png", caption: "Contactar con el vendedor desde el detalle del producto (móvil)", type: "mobile" },
    { src: "/images/projects/nexus/img-pruebas-msg-editoranuncios-reservas/movil/recepcion_mensaje_movil.png", caption: "Recepción de mensaje en el chat (móvil)", type: "mobile" },
  ],
  buy: [
    { src: "/images/projects/nexus/img-pruebas-compra/pc/vista_producto_pc.png", caption: "Vista de producto — botón 'Comprar' que inicia el flujo de pago con Stripe", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas-compra/pc/metodo_envio_1_pc.png", caption: "Selección de método de entrega — envío a domicilio o recogida en mano", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas-compra/pc/metodo_envio_2_pc.png", caption: "Detalles del envío — dirección de entrega y estimación de costes", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas-compra/pc/datos_personales_pedido.png", caption: "Datos personales del pedido — dirección completa de entrega", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas-compra/pc/datos_pago_pc.png", caption: "Formulario de pago Stripe — Payment Intent con modelo escrow (dinero retenido)", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas-compra/pc/confirmacion_pago_pc.png", caption: "Confirmación de pago exitoso — webhook payment_intent.succeeded recibido", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas-compra/pc/notificacion_compra_pc.png", caption: "Notificación in-app de nueva compra — comprador y vendedor notificados", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas-compra/pc/detalles_pedido_pc.png", caption: "Detalle del pedido — estado PAGADO, código QR de envío generado automáticamente", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas-compra/pc/movimientos_pedidos_pc.png", caption: "Historial de movimientos del pedido — trazabilidad completa de estados", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas-compra/pc/gmail_compra_auriculares_pc.png", caption: "Email de confirmación de compra enviado automáticamente (Gmail SMTP)", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas-compra/pc/gmail_detalle_pago_pc.png", caption: "Email con desglose de pago — precio final + comisión Nexus detallada", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas-compra/movil/vista_producto_movil.png", caption: "Vista de producto — versión responsive", type: "mobile" },
    { src: "/images/projects/nexus/img-pruebas-compra/movil/pantalla_envio_1_movil.png", caption: "Selección de método de envío — responsive", type: "mobile" },
    { src: "/images/projects/nexus/img-pruebas-compra/movil/pantalla_datos_pago_movil.png", caption: "Formulario de pago Stripe — responsive", type: "mobile" },
    { src: "/images/projects/nexus/img-pruebas-compra/movil/confirmacion_pago_movil.png", caption: "Confirmación de pago exitoso — responsive", type: "mobile" },
  ],
  publish: [
    { src: "/images/projects/nexus/img-pruebas/publicar.png", caption: "Menú de publicación — elegir entre Producto, Vehículo u Oferta", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas/publicar-producto-detalles-basicos.png", caption: "Wizard de publicación — Detalles básicos del producto (título, categoría, condición)", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas/publicar-subir-producto-Fotos-y-descripcion.png", caption: "Subir fotos y descripción — 1 imagen principal + hasta 5 en galería (Cloudinary)", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas/publicar-subir-producto-Precio-y-ubicacion.png", caption: "Precio y ubicación — geolocalización GPS o manual para filtro 'Cerca de ti'", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas/publicar-subir-producto-Revision-final.png", caption: "Revisión final antes de publicar — vista previa del anuncio", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas/publicar-producto-publicado.png", caption: "Producto publicado con éxito — vigencia automática de 180 días", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas/publicar-vehiculo.png", caption: "Wizard de publicación de vehículo — selección de tipo (coche, moto, etc.)", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas/publicar-vehiculo-coche-1.png", caption: "Publicar vehículo — ficha técnica: marca, modelo, año, kilómetros", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas/publicar-vehiculo-coche-2.png", caption: "Publicar vehículo — combustible, cambio, potencia, cilindrada, puertas", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas/publicar-vehiculo-coche-Fotos-y-descripcion.png", caption: "Publicar vehículo — fotos y descripción detallada", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas/publicar-subir-una-oferta.png", caption: "Publicar oferta/chollo — precio original, precio oferta, tienda y URL externa", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas/publicar-oferta-1.png", caption: "Publicar oferta — paso 1: detalles básicos e imagen de portada", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas/publicar-oferta-publicada.png", caption: "Oferta publicada con badge automático asignado (NUEVA, CHOLLAZO, etc.)", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas/soporte-chat-con-ia-normal.png", caption: "Asistente IA de soporte — chatbot con Google Gemini / Groq LLaMA", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas/soporte-chat-con-humano.png", caption: "Soporte con agente humano — escalado automático cuando la IA no puede resolver", type: "desktop" },
  ],
  profile: [
    { src: "/images/projects/nexus/img-pruebas/perfil-resumen.png", caption: "Perfil — Resumen: reputación (0-5★), total de ventas y estadísticas del usuario", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas/perfil-estadisticas.png", caption: "Perfil — Estadísticas detalladas de actividad y valoraciones recibidas", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas/perfil-mis-productos-con-productos.png", caption: "Mis Productos — gestión de anuncios publicados con estado y acciones", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas/perfil-Mis-vehiculos-con-vehiculo.png", caption: "Mis Vehículos — gestión de vehículos publicados con ficha resumida", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas/perfil-Mis-ofertas-con-oferta.png", caption: "Mis Ofertas — ofertas publicadas con sparkScore y estado de actividad", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas/perfil-mis-compras.png", caption: "Mis Compras — historial completo de compras con estado del envío", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas/perfil-mis-ventas.png", caption: "Mis Ventas — historial de ventas realizadas con importes y comisiones", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas/perfil-buzon.png", caption: "Buzón — bandeja de entrada de mensajes de la plataforma", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas/perfil-publicidad.png", caption: "Mis Patrocinios — gestión de contratos publicitarios de la empresa (ROLE_EMPRESA)", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas/perfil-Metodos-de-pago.png", caption: "Métodos de pago — gestión de tarjetas guardadas en Stripe Customer", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas/micuenta-seguridad.png", caption: "Mi Cuenta — Seguridad: cambio de contraseña y configuración de 2FA", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas/micuenta-datos-del-perfil.png", caption: "Mi Cuenta — Datos del perfil: nombre, avatar, ubicación por defecto", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas/micuenta-privacidad.png", caption: "Mi Cuenta — Privacidad: cuenta pública/privada y gestión RGPD", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas/micuenta-notificaciones.png", caption: "Mi Cuenta — Notificaciones: 6 flags de notificación configurables", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas/publicidad-paso-1.png", caption: "Publicidad — Solicitud de patrocinio Paso 1: tipo BANNER o PUBLICACION", type: "desktop" },
    { src: "/images/projects/nexus/img-pruebas/pagar-patrocinio-paso-1.png", caption: "Pago de contrato — Stripe Checkout Session para contratos publicitarios", type: "desktop" },
  ],
  admin: [
    { src: "/images/projects/nexus/img-pruebas-admin/dashboard.png", caption: "Dashboard — KPIs en tiempo real: usuarios, productos, ventas y actividad global", type: "desktop", url: "admin.nexus-app.vercel.app" },
    { src: "/images/projects/nexus/img-pruebas-admin/estadisticas-live-1.png", caption: "Estadísticas en vivo — gráficas de registros y actividad de usuarios", type: "desktop", url: "admin.nexus-app.vercel.app" },
    { src: "/images/projects/nexus/img-pruebas-admin/estadisticas-live-2.png", caption: "Estadísticas — métricas de contenido publicado por categoría", type: "desktop", url: "admin.nexus-app.vercel.app" },
    { src: "/images/projects/nexus/img-pruebas-admin/usuarios-lista.png", caption: "Gestión de Usuarios — lista paginada con filtros de rol, estado y búsqueda", type: "desktop", url: "admin.nexus-app.vercel.app" },
    { src: "/images/projects/nexus/img-pruebas-admin/usuario-detail.png", caption: "Detalle de Usuario — perfil completo, historial y panel de sanciones", type: "desktop", url: "admin.nexus-app.vercel.app" },
    { src: "/images/projects/nexus/img-pruebas-admin/sanciones.png", caption: "Sanciones — ban permanente, suspensión temporal y marcado de fraude", type: "desktop", url: "admin.nexus-app.vercel.app" },
    { src: "/images/projects/nexus/img-pruebas-admin/productos.png", caption: "Moderación de Productos — listado global con filtros de estado y categoría", type: "desktop", url: "admin.nexus-app.vercel.app" },
    { src: "/images/projects/nexus/img-pruebas-admin/ofertas.png", caption: "Moderación de Ofertas — control del chollometro con acceso a edición y eliminación", type: "desktop", url: "admin.nexus-app.vercel.app" },
    { src: "/images/projects/nexus/img-pruebas-admin/vehiculos.png", caption: "Moderación de Vehículos — listado de todos los vehículos publicados", type: "desktop", url: "admin.nexus-app.vercel.app" },
    { src: "/images/projects/nexus/img-pruebas-admin/reportes-lista.png", caption: "Reportes — lista de denuncias activas con prioridad y motivo", type: "desktop", url: "admin.nexus-app.vercel.app" },
    { src: "/images/projects/nexus/img-pruebas-admin/reporte-detail.png", caption: "Detalle de Reporte — contenido denunciado, contexto e historial de acciones", type: "desktop", url: "admin.nexus-app.vercel.app" },
    { src: "/images/projects/nexus/img-pruebas-admin/contratos.png", caption: "Contratos Publicitarios — gestión de patrocinios DRAFT→ACTIVE→EXPIRED", type: "desktop", url: "admin.nexus-app.vercel.app" },
    { src: "/images/projects/nexus/img-pruebas-admin/cupones.png", caption: "Cupones — creación y gestión de descuentos PORCENTAJE y FIJO", type: "desktop", url: "admin.nexus-app.vercel.app" },
    { src: "/images/projects/nexus/img-pruebas-admin/newsletter-automatizacion-semanal.png", caption: "Newsletter — automación semanal con plantillas y programación de envíos", type: "desktop", url: "admin.nexus-app.vercel.app" },
    { src: "/images/projects/nexus/img-pruebas-admin/newsletter-emision-manual.png", caption: "Newsletter — emisión manual de campañas a todos los suscriptores activos", type: "desktop", url: "admin.nexus-app.vercel.app" },
    { src: "/images/projects/nexus/img-pruebas-admin/correo-automatizacion-semanal-enviado-desde-gmail.png", caption: "Email de newsletter enviado desde Gmail SMTP a suscriptores verificados", type: "desktop", url: "admin.nexus-app.vercel.app" },
    { src: "/images/projects/nexus/img-pruebas-admin/soporte-chat-panel.png", caption: "Panel de Soporte — chat en tiempo real que el admin puede tomar del asistente IA", type: "desktop", url: "admin.nexus-app.vercel.app" },
    { src: "/images/projects/nexus/img-pruebas-admin/devoluciones.png", caption: "Devoluciones — gestión de solicitudes con fotos de evidencia (hasta 4)", type: "desktop", url: "admin.nexus-app.vercel.app" },
    { src: "/images/projects/nexus/img-pruebas-admin/notificaciones.png", caption: "Notificaciones masivas — envío de alertas a todos los usuarios de la plataforma", type: "desktop", url: "admin.nexus-app.vercel.app" },
    { src: "/images/projects/nexus/img-pruebas-admin/configuracion-1.png", caption: "Configuración Global — ajustes del sistema accesibles solo para superadmin (nivel 3)", type: "desktop", url: "admin.nexus-app.vercel.app" },
    { src: "/images/projects/nexus/img-pruebas-admin/login.png", caption: "Login del Panel Admin — acceso exclusivo ROLE_ADMIN en subdominio separado", type: "desktop", url: "admin.nexus-app.vercel.app" },
    { src: "/images/projects/nexus/img-pruebas-compra/administracion/pantalla_compras.png", caption: "Gestión de Compras — listado de pedidos con filtros de estado", type: "desktop", url: "admin.nexus-app.vercel.app" },
    { src: "/images/projects/nexus/img-pruebas-compra/administracion/filtro_compras_pagadas.png", caption: "Compras filtradas por estado PAGADO — vista del administrador", type: "desktop", url: "admin.nexus-app.vercel.app" },
  ],
  mobile: [
    { src: "/images/projects/nexus/img-pruebas-mobile/pantalla-inicio-invitado.png", caption: "Pantalla de inicio — diseño responsive adaptado a móvil", type: "mobile" },
    { src: "/images/projects/nexus/img-pruebas-mobile/inicio-sesion-normal.png", caption: "Login — formulario optimizado para pantallas pequeñas", type: "mobile" },
    { src: "/images/projects/nexus/img-pruebas-mobile/registro-normal-1.png", caption: "Registro — paso 1: datos básicos en móvil", type: "mobile" },
    { src: "/images/projects/nexus/img-pruebas-mobile/verificacion-registro.png", caption: "Verificación de email — OTP de 6 dígitos en móvil", type: "mobile" },
    { src: "/images/projects/nexus/img-pruebas-mobile/perfil.png", caption: "Perfil de usuario — vista responsive con avatar y estadísticas", type: "mobile" },
    { src: "/images/projects/nexus/img-pruebas-mobile/perfil-mis-cosas.png", caption: "Mis Cosas — lista de artículos del usuario en móvil", type: "mobile" },
    { src: "/images/projects/nexus/img-pruebas-mobile/publicar.png", caption: "Menú de publicación — adaptado a pantalla táctil", type: "mobile" },
    { src: "/images/projects/nexus/img-pruebas-mobile/publicar-subir-articulo.png", caption: "Publicar artículo — acceso a cámara y galería del dispositivo", type: "mobile" },
    { src: "/images/projects/nexus/img-pruebas-mobile/publicar-vehiculo.png", caption: "Publicar vehículo — formulario adaptado para móvil", type: "mobile" },
    { src: "/images/projects/nexus/img-pruebas-mobile/producto-publicado.png", caption: "Producto publicado con éxito desde el móvil", type: "mobile" },
    { src: "/images/projects/nexus/img-pruebas-mobile/pantalla-categoria-coches.png", caption: "Catálogo de coches — scroll infinito en versión responsive", type: "mobile" },
    { src: "/images/projects/nexus/img-pruebas-mobile/perfil-ajustes-seguridad.png", caption: "Ajustes de seguridad — gestión de 2FA y contraseña en móvil", type: "mobile" },
  ],
};

export default function NexusAppPage() {
  const [activeTab, setActiveTab] = useState<GalleryTab>("main");

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 relative overflow-x-hidden font-sans selection:bg-violet-500/30">
      <BackButton />

      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-violet-500/5 blur-[120px]" />
        <div className="absolute top-[200px] right-0 w-[400px] h-[400px] bg-emerald-500/3 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 relative z-10">

        {/* ── BREADCRUMB ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="border-b border-zinc-800 pb-6 mb-16 flex flex-col md:flex-row justify-between items-end gap-4"
        >
          <div className="space-y-2 font-mono">
            <div className="flex items-center gap-2 text-xs md:text-sm text-zinc-500">
              <span className="text-emerald-500 font-bold">root</span>
              <span>/</span>
              <span>projects</span>
              <span>/</span>
              <span className="text-violet-300 font-bold bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">nexus-app</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-emerald-500 animate-pulse text-xs uppercase tracking-widest">
                <FaDatabase size={10} />
                <span>Accessing_Secure_File...</span>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="px-3 py-1.5 rounded-sm border border-violet-500/40 bg-violet-500/10 text-violet-300 text-xs font-mono uppercase tracking-widest flex items-center gap-2">
              <FaTerminal size={10} /> Full Stack
            </span>
            <span className="px-3 py-1.5 rounded-sm border border-green-500/40 bg-green-500/10 text-green-300 text-xs font-mono uppercase tracking-widest flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Completed
            </span>
          </div>
        </motion.div>

        {/* ── HERO ── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-24"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none drop-shadow-[0_0_30px_rgba(139,92,246,0.15)]">
                  Nexus<span className="text-violet-500">.</span>
                </h1>
              </div>

              <div className="relative bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl backdrop-blur-sm group hover:border-violet-500/30 transition-colors duration-500">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-violet-500 to-transparent opacity-60" />
                <p className="text-lg text-zinc-300 leading-relaxed font-light">
                  La plataforma de ahorro definitiva: <strong className="text-white">marketplace de segunda mano</strong>, 
                  {" "}<strong className="text-white">chollometro comunitario</strong> con sistema de votos Spark/Drip 
                  y <strong className="text-white">publicidad B2B</strong> para empresas, todo en un único ecosistema multiplataforma.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "48 REST controllers + WebSocket STOMP",
                  "Angular 21 + Ionic 8 + Capacitor (Android)",
                  "Pagos escrow con Stripe Payment Intents",
                  "2FA TOTP + Google OAuth + reCAPTCHA v3",
                  "Panel admin con 19 módulos de gestión",
                  "IA de soporte con Gemini + Groq LLaMA",
                  "Cumplimiento RGPD con double opt-in",
                  "Deploy: Render + Vercel CDN + Cloudinary",
                ].map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-zinc-400">
                    <FaStar className="text-violet-500 mt-0.5 shrink-0" size={10} />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="https://github.com/SomosNexusApp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative overflow-hidden flex items-center gap-3 px-7 py-3.5 bg-zinc-950 border border-zinc-700 text-white rounded transition-all group hover:border-violet-500 hover:shadow-[0_0_20px_rgba(139,92,246,0.2)]"
                >
                  <div className="absolute inset-0 bg-violet-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <FaGithub size={20} className="relative z-10" />
                  <div className="flex flex-col text-left leading-none relative z-10">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase group-hover:text-violet-400">Repository</span>
                    <span className="font-bold">View Source</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Hero image */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600/20 to-emerald-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.05),transparent_70%)]" />
                <Image
                  src="/images/projects/nexus/nexus.webp"
                  alt="Nexus App"
                  fill
                  className="object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                />
                {/* CRT scanlines */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] pointer-events-none z-20 mix-blend-overlay opacity-30" />
              </div>
              {/* Floating stats */}
              <div className="absolute -bottom-4 -right-4 grid grid-cols-2 gap-2">
                {[
                  { v: "48+", l: "Controllers" },
                  { v: "4", l: "Subapps" },
                  { v: "19", l: "Admin Modules" },
                  { v: "RGPD", l: "Compliant" },
                ].map((s) => (
                  <div key={s.l} className="bg-zinc-900/90 border border-zinc-800 rounded-lg p-2.5 text-center backdrop-blur-sm">
                    <div className="text-lg font-black text-violet-400">{s.v}</div>
                    <div className="text-[10px] font-mono text-zinc-500 uppercase">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* ── TECH STACK ── */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <SectionHead
            icon={FaLayerGroup}
            label="System Architecture"
            title="Stack Tecnológico"
            subtitle="Un único backend Spring Boot que sirve a todas las aplicaciones cliente. Ningún cliente habla directamente con PostgreSQL, Cloudinary ni Stripe."
          />

          {/* Architecture diagram */}
          <div className="mb-10 rounded-xl border border-zinc-800 bg-zinc-900/30 overflow-hidden">
            {/* Client layer */}
            <div className="p-5 border-b border-zinc-800">
              <p className="text-xs font-bold text-violet-400 uppercase tracking-widest mb-4">
                Capa de Cliente — Vercel CDN
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {[
                  { title: "nexus-angular-app", sub: "Angular 21 + Ionic 8", detail: "App usuario · Web + Android · Puerto 4200", color: "border-violet-500/30 bg-violet-500/5" },
                  { title: "nexus-admin-web-app", sub: "Angular 21", detail: "Panel de administración · 19 módulos · Puerto 4201", color: "border-emerald-500/30 bg-emerald-500/5" },
                  { title: "nexus-web-about", sub: "Astro (estático)", detail: "Web informativa y docs técnica · Puerto 4321", color: "border-blue-500/30 bg-blue-500/5" },
                ].map((app) => (
                  <div key={app.title} className={`rounded-lg border ${app.color} p-4`}>
                    <p className="font-bold text-white text-sm mb-1 font-mono">{app.title}</p>
                    <p className="text-xs text-zinc-400">{app.sub}</p>
                    <p className="text-xs text-zinc-500 mt-1">{app.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Protocol layer */}
            <div className="py-2.5 px-5 border-b border-zinc-800 bg-zinc-900/50 text-center">
              <p className="text-xs text-zinc-500 font-mono">
                HTTP REST + JWT Bearer &nbsp;·&nbsp; WebSocket STOMP (solo app usuario)
              </p>
            </div>
            {/* Backend layer */}
            <div className="p-5 border-b border-zinc-800">
              <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-4">
                Backend — Render.com · Docker · Puerto 8080
              </p>
              <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-4">
                <p className="font-bold text-white text-sm mb-3 font-mono">nexus-backend — Spring Boot 3.5.13 (Java 17)</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {[
                    { v: "48 REST + 1 WS", l: "Controllers" },
                    { v: "44", l: "Services" },
                    { v: "JWT + 2FA + reCAPTCHA", l: "Security" },
                    { v: "7 tareas auto", l: "Schedulers" },
                  ].map((s) => (
                    <div key={s.l} className="bg-zinc-950/50 rounded p-2 text-center">
                      <p className="text-xs font-bold text-emerald-300">{s.v}</p>
                      <p className="text-[10px] text-zinc-500 mt-0.5">{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* ORM layer */}
            <div className="py-2.5 px-5 border-b border-zinc-800 bg-zinc-900/50 text-center">
              <p className="text-xs text-zinc-500 font-mono">Spring Data JPA / Hibernate</p>
            </div>
            {/* External services */}
            <div className="p-5">
              <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-4">
                Servicios Externos
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { name: "PostgreSQL", detail: "Base de datos (Render DB)", color: "text-blue-400" },
                  { name: "Cloudinary", detail: "Imágenes y vídeos CDN", color: "text-yellow-400" },
                  { name: "Stripe", detail: "Pagos y webhooks HMAC", color: "text-indigo-400" },
                  { name: "Gmail SMTP", detail: "Correo transaccional", color: "text-red-400" },
                ].map((s) => (
                  <div key={s.name} className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-3 text-center">
                    <p className={`font-bold text-sm ${s.color}`}>{s.name}</p>
                    <p className="text-[10px] text-zinc-500 mt-1">{s.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tech icons grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
            {[
              { img: "/images/tools/srping.png", name: "Spring Boot" },
              { img: "/images/tools/java.png", name: "Java 17" },
              { img: "/images/tools/angular.png", name: "Angular 21" },
              { icon: <SiIonic className="text-blue-400 w-7 h-7" />, name: "Ionic 8" },
              { img: "/images/tools/postgresql.png", name: "PostgreSQL" },
              { icon: <SiStripe className="text-violet-400 w-7 h-7" />, name: "Stripe" },
              { icon: <SiDocker className="text-blue-500 w-7 h-7" />, name: "Docker" },
              { icon: <FaLock className="text-amber-400 w-6 h-6" />, name: "JWT + 2FA" },
            ].map((t) => (
              <div
                key={t.name}
                className="group bg-zinc-900/40 border border-zinc-800 p-4 rounded-lg hover:bg-zinc-900 hover:border-violet-500/40 transition-all flex flex-col items-center gap-2.5"
              >
                <div className="flex items-center justify-center w-8 h-8 transition-all group-hover:scale-110">
                  {"img" in t ? (
                    <Image src={(t as { img: string; name: string }).img} alt={t.name} width={32} height={32} className="object-contain" />
                  ) : (
                    <div className="text-zinc-400 group-hover:text-white transition-colors">{(t as { icon: React.ReactNode; name: string }).icon}</div>
                  )}
                </div>
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider group-hover:text-violet-400 text-center leading-tight">
                  {t.name}
                </span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ── FEATURES ── */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <SectionHead
            icon={FaLightbulb}
            label="Modules"
            title="Funcionalidades Clave"
            subtitle="Un ecosistema completo de 8 módulos funcionales que cubren desde el comercio electrónico hasta la moderación y la publicidad."
          />

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: FaStore,
                iconColor: "bg-violet-500/10 text-violet-400",
                title: "Marketplace de Segunda Mano",
                desc: "Publicación de productos, vehículos y ofertas con galería Cloudinary. Tipos: VENTA, DONACIÓN e INTERCAMBIO. Búsqueda unificada con expansión de sinónimos y vigencia automática de 180 días.",
                techs: ["Spring Boot", "Angular 21", "Cloudinary", "GPS / Geoloc", "PostgreSQL"],
              },
              {
                icon: FaBolt,
                iconColor: "bg-yellow-500/10 text-yellow-400",
                title: "Chollometro — Sistema Spark/Drip",
                desc: "Votación Spark o Drip para rankear ofertas. Un scheduler recalcula el sparkScore cada 5 min. Secciones: Flash, Gratis, Viajes. Badges automáticos: NUEVA, CHOLLAZO, EXPIRA_HOY.",
                techs: ["WebSocket STOMP", "Spring Scheduler", "Angular Signals", "Badge Engine"],
              },
              {
                icon: FaShoppingCart,
                iconColor: "bg-indigo-500/10 text-indigo-400",
                title: "Pagos Seguros con Stripe (Escrow)",
                desc: "Payment Intents con modelo escrow: el dinero se retiene hasta que el comprador confirma la recepción. Contratos publicitarios con Checkout Sessions. Webhooks HMAC. Cupones validados en checkout.",
                techs: ["Stripe Payment Intents", "Stripe Checkout", "Webhooks HMAC", "Cupones"],
              },
              {
                icon: FaComments,
                iconColor: "bg-emerald-500/10 text-emerald-400",
                title: "Chat en Tiempo Real (WebSocket STOMP)",
                desc: "Mensajería privada comprador-vendedor con roomId determinista. Soporta TEXTO, IMAGEN, VIDEO, AUDIO, GIF y OFERTA_PRECIO (propuesta de precio con aceptación/rechazo en tiempo real).",
                techs: ["Spring WebSocket", "STOMP", "SockJS", "@stomp/stompjs 7.3"],
              },
              {
                icon: FaLock,
                iconColor: "bg-red-500/10 text-red-400",
                title: "Autenticación Multicapa",
                desc: "JWT con invalidación por jwtVersion, Google OAuth 2.0, 2FA TOTP con QR (ZXing + samstevens.totp), Email OTP 6 dígitos. BCrypt. reCAPTCHA v3 (umbral 0.5). Wizard de onboarding.",
                techs: ["JJWT 0.11.5", "Spring Security", "Google OAuth", "TOTP/ZXing", "reCAPTCHA v3"],
              },
              {
                icon: FaShieldAlt,
                iconColor: "bg-blue-500/10 text-blue-400",
                title: "Panel Admin — 19 Módulos",
                desc: "App Angular independiente en subdominio separado (ROLE_ADMIN). Dashboard, estadísticas en vivo, moderación, devoluciones, contratos, cupones, patrocinios, newsletter con automaciones, audit log inmutable.",
                techs: ["Angular 21", "TypeScript 5.9", "Vercel", "ROLE_ADMIN", "AuditLog"],
              },
              {
                icon: FaRocket,
                iconColor: "bg-pink-500/10 text-pink-400",
                title: "Asistente IA de Soporte",
                desc: "Chatbot con dos proveedores intercambiables: Google Gemini 1.5-flash y Groq LLaMA 3.3-70b. Escalado automático a soporte humano por email si la IA no resuelve la consulta.",
                techs: ["Google Gemini 1.5-flash", "Groq LLaMA 3.3-70b", "Gmail SMTP"],
              },
              {
                icon: FaServer,
                iconColor: "bg-orange-500/10 text-orange-400",
                title: "Publicidad B2B para Empresas",
                desc: "ROLE_EMPRESA solicita patrocinios BANNER o PUBLICACION. Admin aprueba y fija precio; empresa paga con Stripe Checkout. El ítem aparece con badge 'Patrocinado' hasta la expiración.",
                techs: ["Stripe Checkout", "ROLE_EMPRESA", "Angular 21", "Role-Based Access"],
              },
            ].map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group relative bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl hover:border-violet-500/30 transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/3 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${f.iconColor}`}>
                  <f.icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">{f.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {f.techs.map((t) => (
                    <span key={t} className="text-[10px] font-mono text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded border border-violet-500/20">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── GALLERY ── */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <SectionHead
            icon={FaServer}
            label="Screenshots"
            title="Galería de Capturas"
            subtitle="Capturas reales de la aplicación en funcionamiento — navega por categorías para explorar cada módulo del ecosistema Nexus."
          />

          {/* Tab navigation */}
          <div className="flex flex-wrap gap-2 mb-10">
            {GALLERY_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-xs transition-all ${
                  activeTab === tab.id
                    ? "bg-violet-500/15 text-violet-300 border border-violet-500/40 shadow-[0_0_10px_rgba(139,92,246,0.15)]"
                    : "bg-zinc-900/50 text-zinc-500 border border-zinc-800 hover:text-zinc-300 hover:border-zinc-700"
                }`}
              >
                <tab.icon size={11} />
                {tab.label}
                <span className={`ml-0.5 text-[9px] px-1 py-0.5 rounded ${activeTab === tab.id ? "bg-violet-500/20 text-violet-400" : "bg-zinc-800 text-zinc-600"}`}>
                  {GALLERY_DATA[tab.id].length}
                </span>
              </button>
            ))}
          </div>

          {/* Gallery grid */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {(() => {
              const items = GALLERY_DATA[activeTab];
              const desktopItems = items.filter((i) => i.type === "desktop");
              const mobileItems = items.filter((i) => i.type === "mobile");

              return (
                <div className="space-y-16">
                  {desktopItems.length > 0 && (
                    <div>
                      {mobileItems.length > 0 && (
                        <p className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-6 flex items-center gap-2">
                          <FaServer size={10} /> Vista Desktop / PC
                        </p>
                      )}
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {desktopItems.map((img, idx) => (
                          <DesktopMockup
                            key={idx}
                            src={img.src}
                            caption={img.caption}
                            url={img.url}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {mobileItems.length > 0 && (
                    <div>
                      {desktopItems.length > 0 && (
                        <p className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-6 flex items-center gap-2">
                          <FaMobile size={10} /> Vista Responsive — Web &amp; Móvil
                        </p>
                      )}
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 justify-items-center">
                        {mobileItems.map((img, idx) => (
                          <MobileMockup
                            key={idx}
                            src={img.src}
                            caption={img.caption}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })()}
          </motion.div>
        </motion.section>

        {/* ── USE CASES ── */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <SectionHead
            icon={FaRocket}
            label="Use Cases"
            title="Casos de Uso Representativos"
            subtitle="Los flujos más importantes del sistema, implementados al completo en el backend y en las dos aplicaciones Angular."
          />

          <div className="space-y-6">
            {[
              {
                id: "CU-01",
                title: "Compra de un producto de segunda mano",
                actor: "Usuario autenticado (comprador)",
                color: "border-violet-500/30 bg-violet-500/5",
                badgeColor: "text-violet-400 bg-violet-500/10 border-violet-500/30",
                steps: [
                  "Navega el marketplace y accede al detalle del producto",
                  "Pulsa 'Comprar' → selecciona método de entrega (envío o recogida)",
                  "Introduce dirección de entrega → aplica cupón de descuento (opcional)",
                  "El backend crea un Stripe Payment Intent y devuelve el clientSecret",
                  "El usuario completa el pago en el formulario de Stripe.js",
                  "Stripe envía el webhook payment_intent.succeeded → backend crea entidad Compra (PAGADO) y genera código QR de envío",
                  "El vendedor confirma el envío con número de seguimiento",
                  "El comprador confirma la recepción → pago liberado (escrow) → ambas partes pueden valorarse",
                ],
              },
              {
                id: "CU-02",
                title: "Publicación y votación de una oferta/chollo",
                actor: "Usuario o Empresa autenticados",
                color: "border-yellow-500/30 bg-yellow-500/5",
                badgeColor: "text-yellow-400 bg-yellow-500/10 border-yellow-500/30",
                steps: [
                  "El usuario accede a 'Publicar oferta' y completa el formulario",
                  "El sistema calcula automáticamente el badge en @PreUpdate (NUEVA, CHOLLAZO, etc.)",
                  "La oferta se publica y es visible en el chollometro",
                  "Los usuarios votan con Spark (positivo) o Drip (negativo)",
                  "Un scheduler recalcula el sparkScore cada 5 minutos",
                  "Las ofertas más valoradas ascienden en el ranking principal",
                ],
              },
              {
                id: "CU-03",
                title: "Contratación de publicidad por una empresa",
                actor: "Empresa autenticada (ROLE_EMPRESA)",
                color: "border-orange-500/30 bg-orange-500/5",
                badgeColor: "text-orange-400 bg-orange-500/10 border-orange-500/30",
                steps: [
                  "La empresa accede a 'Publicidad / Mis contratos' y solicita un patrocinio",
                  "El administrador recibe la solicitud en estado DRAFT y la aprueba con precio",
                  "El sistema genera una Stripe Checkout Session",
                  "La empresa paga mediante Stripe Checkout (redirección al portal de Stripe)",
                  "El webhook checkout.session.completed confirma el pago",
                  "El contrato pasa a ACTIVE y el ítem recibe el flag patrocinado=true con fecha de expiración",
                ],
              },
              {
                id: "CU-04",
                title: "Registro y autenticación con 2FA TOTP",
                actor: "Visitante",
                color: "border-emerald-500/30 bg-emerald-500/5",
                badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
                steps: [
                  "El visitante rellena el formulario con username, email y contraseña + reCAPTCHA",
                  "El backend valida el captcha y crea el Usuario con contraseña BCrypt",
                  "Envía OTP de 6 dígitos al email → el usuario verifica su cuenta",
                  "El usuario accede al wizard de onboarding y activa 2FA TOTP",
                  "El backend genera un secreto TOTP, crea el QR con ZXing en base64",
                  "El usuario escanea el QR con Google Authenticator",
                  "En el próximo login: tras validar credenciales, el backend responde con twoFactorRequired: true",
                  "El usuario introduce el código TOTP → el backend lo valida → emite el JWT con el rol",
                ],
              },
            ].map((uc) => (
              <motion.div
                key={uc.id}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`border rounded-xl overflow-hidden ${uc.color}`}
              >
                <div className="flex flex-wrap items-center gap-3 p-5 border-b border-zinc-800/60">
                  <span className={`font-mono text-xs px-2.5 py-1 rounded border ${uc.badgeColor} font-bold`}>
                    {uc.id}
                  </span>
                  <h3 className="font-bold text-white text-lg">{uc.title}</h3>
                  <span className="text-xs text-zinc-500 font-mono ml-auto">Actor: {uc.actor}</span>
                </div>
                <div className="p-5">
                  <ol className="space-y-2">
                    {uc.steps.map((step, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-zinc-400">
                        <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-zinc-800 text-zinc-500 font-mono text-[10px] mt-0.5">
                          {i + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── INSTALLATION ── */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <SectionHead
            icon={FaCog}
            label="Setup"
            title="Cómo Ejecutar el Proyecto"
            subtitle="El ecosistema se divide en 4 repositorios independientes que comparten el mismo backend Spring Boot."
          />

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              "Java 17 LTS instalado en el sistema",
              "Node.js 20+ con Angular CLI 21",
              "PostgreSQL 14+ (o acceso a Render DB)",
              "Cuenta Stripe (modo test) con claves API",
              "Cuenta Cloudinary para almacenamiento",
              "Variables de entorno en application.properties",
            ].map((req, i) => (
              <div key={i} className="flex items-center gap-3 p-3.5 bg-zinc-900/50 border border-zinc-800 rounded-lg">
                <FaCheckCircle className="text-violet-500 shrink-0" size={14} />
                <span className="text-sm text-zinc-300">{req}</span>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            {[
              {
                n: 1,
                title: "Clonar los Repositorios",
                cmds: [
                  "git clone https://github.com/SomosNexusApp/nexus-backend.git",
                  "git clone https://github.com/SomosNexusApp/nexus-angular-app.git",
                  "git clone https://github.com/SomosNexusApp/nexus-admin-web-app.git",
                ],
              },
              {
                n: 2,
                title: "Configurar el Backend",
                desc: "Edita application.properties con tus credenciales de Stripe, Cloudinary y PostgreSQL",
                cmds: [
                  "cd nexus-backend",
                  "# spring.datasource.url=jdbc:postgresql://localhost:5432/nexus",
                  "# stripe.secret.key=sk_test_...",
                  "# cloudinary.url=cloudinary://api_key:api_secret@cloud_name",
                  "./mvnw spring-boot:run",
                ],
              },
              {
                n: 3,
                title: "Arrancar la App de Usuario",
                desc: "Angular 21 + Ionic 8 en puerto 4200",
                cmds: ["cd nexus-angular-app", "npm install", "ng serve --port 4200"],
              },
              {
                n: 4,
                title: "Arrancar el Panel de Administración",
                desc: "Angular 21 en puerto 4201 (subdominio separado por seguridad)",
                cmds: ["cd nexus-admin-web-app", "npm install", "ng serve --port 4201"],
              },
              {
                n: 5,
                title: "Build Android (opcional)",
                desc: "Compilar como app nativa Android con Ionic + Capacitor 8",
                cmds: [
                  "cd nexus-angular-app",
                  "ng build --configuration=production",
                  "npx cap sync android",
                  "npx cap open android  # Requiere Android Studio",
                ],
              },
            ].map((step) => (
              <div key={step.n} className="space-y-3">
                <h4 className="text-base font-bold text-white flex items-center gap-3">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-violet-500/15 text-violet-400 font-mono text-sm border border-violet-500/30">
                    {step.n}
                  </span>
                  {step.title}
                </h4>
                {step.desc && <p className="text-sm text-zinc-500 ml-10">{step.desc}</p>}
                <div className="ml-10 bg-zinc-950 border border-zinc-800 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  {step.cmds.map((cmd, j) => (
                    <div key={j} className="mb-1.5 last:mb-0 flex items-start gap-3">
                      <span className="text-violet-500 shrink-0">{cmd.startsWith("#") ? "#" : "$"}</span>
                      <span className={cmd.startsWith("#") ? "text-zinc-600" : "text-zinc-300"}>
                        {cmd.startsWith("#") ? cmd.slice(2) : cmd}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ── CTA ── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden border border-zinc-800 p-12 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-violet-950/40 via-zinc-950 to-zinc-950" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-violet-500/10 blur-[80px] rounded-full" />
          <div className="relative z-10">
            <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest mb-4">
              Proyecto Final DAM · IES Francisco Rodríguez Marín · Ecentia
            </p>
            <h2 className="text-4xl font-black text-white mb-4">
              Nexus<span className="text-violet-500">.</span>
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto mb-8 leading-relaxed">
              Ecosistema multiplataforma completo: marketplace, chollometro y publicidad B2B. 
              Un único backend que sirve a 3 aplicaciones cliente con seguridad de nivel empresarial.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://github.com/SomosNexusApp/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-zinc-950 border border-zinc-700 text-white rounded-lg hover:border-violet-500 hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all"
              >
                <FaGithub size={20} />
                <span className="font-bold">Organización GitHub</span>
                <FaExternalLinkAlt size={12} className="text-zinc-500" />
              </a>
              <Link
                href="/projects"
                className="flex items-center gap-3 px-8 py-4 bg-violet-600/20 border border-violet-500/40 text-violet-300 rounded-lg hover:bg-violet-600/30 transition-all font-bold"
              >
                Ver todos los proyectos
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}

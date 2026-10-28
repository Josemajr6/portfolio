"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import BackButton from "@/components/ui/BackButton";
import SkipLink from "@/components/layout/SkipLink";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Reveal from "@/components/ui/Reveal";
import { projectColor } from "@/data/projectColors";

import {
  FaGithub,
  FaRocket,
  FaLock,
  FaShoppingCart,
  FaComments,
  FaMobile,
  FaShieldAlt,
  FaUsersCog,
  FaStore,
  FaBolt,
} from "react-icons/fa";
import { SiDocker, SiStripe, SiIonic } from "react-icons/si";
import { useLanguage } from "@/components/providers/LanguageProvider";

/* ─────────────────────────── helpers ─────────────────────────── */

const DesktopMockup = ({
  src,
  caption,
}: {
  src: string;
  caption: string;
  url?: string;
}) => (
  <figure className="flex flex-col gap-3">
    <div className="relative rounded-2xl overflow-hidden bg-cream shadow-2xl transition-transform duration-300 hover:-translate-y-1">
      <div className="flex items-center gap-1.5 px-4 py-2.5">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff6b5f]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#f5c451]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#5cc66a]" />
      </div>
      <div className="relative bg-[#0b1428]" style={{ aspectRatio: "16/10" }}>
        <Image
          src={src}
          alt={caption}
          fill
          className="object-contain object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
    <figcaption className="text-sm text-muted leading-relaxed px-1">{caption}</figcaption>
  </figure>
);

const MobileMockup = ({ src, caption }: { src: string; caption: string }) => (
  <figure className="flex flex-col items-center gap-3">
    <div
      className="relative mx-auto bg-[#0b1428] rounded-[36px] p-2 shadow-2xl transition-transform duration-300 hover:-translate-y-1"
      style={{ width: 190 }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-[#0b1428] rounded-b-xl z-20" />
      <div className="relative bg-black rounded-[28px] overflow-hidden" style={{ aspectRatio: "9/19.5" }}>
        <Image src={src} alt={caption} fill className="object-contain object-center" sizes="190px" />
      </div>
    </div>
    <figcaption className="text-sm text-muted text-center max-w-[190px] leading-relaxed">{caption}</figcaption>
  </figure>
);

/* ─────────────────── sección con título a la izquierda ─────────────────── */
const SectionHead = ({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) => (
  <section aria-labelledby={id} className="py-12 sm:py-16 border-t border-line">
    <div className="grid md:grid-cols-[16rem_1fr] gap-6 md:gap-10">
      <h2 id={id} className="display-tight text-3xl font-bold text-albero break-words">
        {title}
      </h2>
      <div className="min-w-0">
        {subtitle && <p className="text-lg text-muted leading-relaxed mb-8 max-w-3xl">{subtitle}</p>}
        {children}
      </div>
    </div>
  </section>
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

const tabLabels = {
  es: {
    main: "Inicio",
    auth: "Auth & Registro",
    catalog: "Catálogo",
    chat: "Chat & Reservas",
    buy: "Compra & Pagos",
    publish: "Publicar",
    profile: "Perfil",
    admin: "Admin",
    mobile: "Móvil",
  },
  en: {
    main: "Home",
    auth: "Auth & Register",
    catalog: "Catalog",
    chat: "Chat & Bookings",
    buy: "Purchase & Payments",
    publish: "Publish",
    profile: "Profile",
    admin: "Admin Panel",
    mobile: "Mobile View",
  }
};

const translateCaption = (caption: string, lang: string) => {
  if (lang === 'es') return caption;
  return caption
    .replace("Pantalla de inicio para visitantes", "Home screen for visitors")
    .replace("acceso de solo lectura al catálogo", "read-only catalog access")
    .replace("Feed principal — Lo último en", "Main feed — Latest on")
    .replace("artículos recientes", "recent articles")
    .replace("ranking dinámico por sistema de votos", "dynamic ranking by voting system")
    .replace("ofertas con cuenta atrás y límite de unidades", "deals with countdown and unit limits")
    .replace("explorar por categoría — navegación jerárquica", "explore by category — hierarchical navigation")
    .replace("ofertas de tiempo limitado", "limited time offers")
    .replace("productos en donación e intercambio", "donation and exchange products")
    .replace("ofertas especializadas de turismo", "specialized tourism deals")
    .replace("Menú lateral de categorías con navegación rápida", "Side category menu with quick navigation")
    .replace("Centro de notificaciones in-app con badging inteligente", "In-app notification center with smart badging")
    .replace("items guardados por el usuario", "user saved items")
    .replace("Búsqueda 'Cerca de ti' — radar GPS con radio ajustable", "Near Me search — GPS radar with adjustable radius")
    .replace("Búsqueda geográfica — radio de 50 km mostrando 2 vehículos cercanos", "Geographical search — 50km radius showing 2 nearby vehicles")
    .replace("Formulario de registro con medidor de fortaleza de contraseña", "Registration form with password strength meter")
    .replace("y reCAPTCHA v3 en backend", "and backend reCAPTCHA v3 validation")
    .replace("Login estándar con usuario/email y contraseña hasheada", "Standard login with username/email and hashed password")
    .replace("Login con Google OAuth 2.0 — ID token verificado", "Google OAuth 2.0 login — ID token verified")
    .replace("Verificación de email — OTP de 6 dígitos válido 30 minutos", "Email verification — 6-digit OTP valid for 30 minutes")
    .replace("Recuperación de contraseña — token UUID de 15 minutos", "Password recovery — UUID token valid for 15 minutes")
    .replace("Wizard de onboarding — configuración de seguridad", "Onboarding wizard — security settings")
    .replace("identidad personal y tipo de cuenta", "personal identity and account type")
    .replace("preferencias de estilo visual", "visual style preferences")
    .replace("2FA TOTP — código QR para vincular con Google Authenticator", "2FA TOTP — QR code to link with Google Authenticator")
    .replace("Login del panel admin con 2FA TOTP activado", "Admin login with 2FA TOTP enabled")
    .replace("Catálogo de vehículos — filtros por tipo, marca, combustible", "Vehicle catalog — filters by type, brand, fuel")
    .replace("Vista listado de vehículos con paginación y ordenación", "Vehicle list view with pagination and sorting")
    .replace("Ficha técnica completa de vehículo — marca, modelo, año, km", "Complete vehicle spec sheet — brand, model, year, km")
    .replace("Detalle de vehículo — galería de imágenes y características extra", "Vehicle detail — image gallery and extra features")
    .replace("Detalle de producto de segunda mano — galería Cloudinary", "Second hand product detail — Cloudinary gallery")
    .replace("Detalle de producto — descripción completa y botones de acción", "Product detail — full description and action buttons")
    .replace("Detalle de oferta/chollo — precio original vs. oferta", "Deal/offer detail — original vs. discount price")
    .replace("Votación Spark/Drip en tiempo real", "Real-time Spark/Drip voting")
    .replace("recalculado cada 5 minutos por scheduler", "recalculated every 5 minutes by scheduler")
    .replace("Menú de perfil desplegable — acceso rápido a cuenta", "Profile dropdown menu — quick account access")
    .replace("Chat en tiempo real con WebSocket STOMP", "Real-time chat with WebSocket STOMP")
    .replace("inicia sala de chat con roomId determinista", "starts chat room with deterministic roomId")
    .replace("Envío de mensaje de texto en tiempo real", "Real-time text message sending")
    .replace("Recepción del mensaje en la sala compartida", "Message receipt in the shared room")
    .replace("Envío de imágenes al chat — subidas a Cloudinary", "Sending images to chat — uploaded to Cloudinary")
    .replace("Recepción de fotos en el chat del comprador", "Photo receipt in buyer's chat")
    .replace("Propuesta de precio — tipo OFERTA_PRECIO con aceptación/rechazo", "Price proposal — OFFER_PRICE type with accept/reject")
    .replace("Recepción de propuesta de precio por el vendedor", "Price proposal received by the seller")
    .replace("Gestión de productos con opción de reservar artículo", "Product management with option to reserve item")
    .replace("Popup de confirmación de reserva — artículo pasa a", "Reservation confirmation popup — item moves to")
    .replace("Producto con estado RESERVADO visible en el catálogo", "Product with RESERVED status visible in catalog")
    .replace("Panel de edición de anuncio — opciones de gestión", "Ad edit panel — management options")
    .replace("Editor de anuncio — modificar detalles del producto", "Ad editor — edit published product details")
    .replace("Chat en tiempo real — versión móvil", "Real-time chat — mobile version")
    .replace("Contactar con el vendedor desde el detalle", "Contact seller from details")
    .replace("Recepción de mensaje en el chat", "Message receipt in chat")
    .replace("Vista de producto — botón 'Comprar'", "Product view — 'Buy' button")
    .replace("Selección de método de entrega — envío a domicilio", "Delivery method selection — home shipping")
    .replace("Detalles del envío — dirección de entrega", "Shipping details — delivery address")
    .replace("Datos personales del pedido — dirección completa", "Personal order details — full address")
    .replace("Formulario de pago Stripe — Payment Intent con modelo escrow", "Stripe payment form — Payment Intent with escrow model")
    .replace("Confirmación de pago exitoso — webhook received", "Successful payment confirmation — webhook received")
    .replace("Notificación in-app de nueva compra — comprador y vendedor", "New purchase in-app notification — buyer and seller")
    .replace("Detalle del pedido — estado PAGADO, código QR", "Order details — PAID status, QR code")
    .replace("Historial de movimientos del pedido — trazabilidad completa", "Order movements history — full traceability")
    .replace("Email de confirmación de compra enviado", "Purchase confirmation email sent")
    .replace("Email con desglose de pago — precio final", "Email with payment breakdown — final price")
    .replace("version responsive", "responsive version")
    .replace("versión responsive", "responsive version")
    .replace("en móvil", "on mobile")
    .replace("Menú de publicación — elegir entre", "Publish menu — choose between")
    .replace("Wizard de publicación — Detalles básicos", "Publish wizard — basic details")
    .replace("Subir fotos y descripción — 1 imagen", "Upload photos and description — 1 image")
    .replace("Precio y ubicación — geolocalización", "Price and location — geolocation")
    .replace("Revisión final antes de publicar", "Final review before publishing")
    .replace("Producto publicado con éxito — vigencia", "Product successfully published — validity")
    .replace("Wizard de publicación de vehículo", "Vehicle publishing wizard")
    .replace("Publicar vehículo — ficha técnica", "Publish vehicle — spec sheet")
    .replace("Publicar vehículo — combustible, cambio", "Publish vehicle — fuel, gear")
    .replace("Publicar vehículo — fotos y descripción", "Publish vehicle — photos and details")
    .replace("Publicar oferta/chollo — precio", "Publish deal/offer — price")
    .replace("Publicar oferta — paso 1: detalles", "Publish deal — step 1: details")
    .replace("Oferta publicada con badge automático", "Deal published with automatic badge")
    .replace("Asistente IA de soporte — chatbot con", "AI Support Assistant — chatbot with")
    .replace("Soporte con agente humano — escalado", "Support with human agent — escalation")
    .replace("Perfil — Resumen: reputación", "Profile — Summary: reputation")
    .replace("Perfil — Estadísticas detalladas de actividad", "Profile — Detailed activity stats")
    .replace("Mis Productos — gestión de anuncios", "My Products — published ads management")
    .replace("Mis Vehículos — gestión de vehículos publicados", "My Vehicles — published vehicles management")
    .replace("Mis Ofertas — ofertas publicadas con", "My Deals — published deals with")
    .replace("Mis Compras — historial completo de compras", "My Purchases — complete purchase history")
    .replace("Mis Ventas — historial de ventas realizadas", "My Sales — sales history")
    .replace("Buzón — bandeja de entrada de mensajes", "Inbox — message inbox")
    .replace("Mis Patrocinios — gestión de contratos", "My Sponsorships — contracts management")
    .replace("Métodos de pago — gestión de tarjetas", "Payment methods — cards management")
    .replace("Mi Cuenta — Seguridad: cambio de", "My Account — Security: change of")
    .replace("Mi Cuenta — Datos del perfil: nombre", "My Account — Profile info: name")
    .replace("Mi Cuenta — Privacidad: cuenta", "My Account — Privacy: account")
    .replace("Mi Cuenta — Notificaciones: 6 flags", "My Account — Notifications: 6 flags")
    .replace("Publicidad — Solicitud de patrocinio", "Advertising — Sponsorship request")
    .replace("Pago de contrato — Stripe Checkout", "Contract payment — Stripe Checkout")
    .replace("Dashboard — KPIs en tiempo real", "Dashboard — real-time KPIs")
    .replace("Estadísticas en vivo — gráficas de", "Live statistics — graphs of")
    .replace("Estadísticas — métricas de contenido", "Statistics — content metrics")
    .replace("Gestión de Usuarios — lista paginada", "Users Management — paginated list")
    .replace("Detalle de Usuario — perfil completo", "User Detail — full profile")
    .replace("Sanciones — ban permanente", "Sanctions — permanent ban")
    .replace("Moderación de Productos — listado", "Products Moderation — listing")
    .replace("Moderación de Ofertas — control del", "Deals Moderation — chollometro control")
    .replace("Moderación de Vehículos — listado", "Vehicles Moderation — listing")
    .replace("Reportes — lista de denuncias", "Reports — active complaints list")
    .replace("Detalle de Reporte — contenido denunciado", "Report Detail — reported content")
    .replace("Contratos Publicitarios — gestión de", "Advertising Contracts — management of")
    .replace("Cupones — creación y gestión", "Coupons — creation and management")
    .replace("Newsletter — automación semanal", "Newsletter — weekly automation")
    .replace("Newsletter — emisión manual de", "Newsletter — manual campaign emission")
    .replace("Email de newsletter enviado desde", "Newsletter email sent from")
    .replace("Panel de Soporte — chat en tiempo real", "Support Panel — real-time chat")
    .replace("Devoluciones — gestión de solicitudes", "Returns — requests management")
    .replace("Notificaciones masivas — envío de", "Bulk notifications — sending of")
    .replace("Configuración Global — ajustes del", "Global Configuration — system settings")
    .replace("Login del Panel Admin — acceso", "Admin Panel Login — access")
    .replace("Gestión de Compras — listado de", "Purchases Management — listing of")
    .replace("Compras filtradas por estado PAGADO", "Purchases filtered by PAID status")
    .replace("Pantalla de inicio — diseño responsive", "Home screen — responsive design")
    .replace("Login — formulario optimizado para", "Login — form optimized for")
    .replace("Registro — paso 1: datos básicos", "Register — step 1: basic data")
    .replace("Verificación de email — OTP de 6", "Email verification — 6-digit OTP")
    .replace("Perfil de usuario — vista responsive", "User profile — responsive view")
    .replace("Mis Cosas — lista de artículos", "My Things — list of user items")
    .replace("Menú de publicación — adaptado a", "Publish menu — adapted to")
    .replace("Publicar artículo — acceso a cámara", "Publish item — access to camera")
    .replace("Publicar vehículo — formulario", "Publish vehicle — form")
    .replace("Producto publicado con éxito desde", "Product successfully published from")
    .replace("Catálogo de coches — scroll infinito", "Cars catalog — infinite scroll")
    .replace("Ajustes de seguridad — gestión de", "Security settings — management of")
    .replace("Vista Desktop / PC", "Desktop / PC View")
    .replace("Vista Responsive — Web & Móvil", "Responsive View — Web & Mobile");
};

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
  const { language, mounted } = useLanguage();

  useEffect(() => {
    document.title = "Nexus App | José Manuel Jiménez";
  }, []);

  const text = {
    es: {
      tagFullStack: "Full Stack",
      tagCompleted: "Completado",
      description: (
        <>La plataforma de ahorro definitiva: <strong className="font-bold text-ink">marketplace de segunda mano</strong>, {" "}<strong className="font-bold text-ink">chollometro comunitario</strong> con sistema de votos Spark/Drip y <strong className="font-bold text-ink">publicidad B2B</strong> para empresas, todo en un único ecosistema multiplataforma.</>
      ),
      bullets: [
        "48 controladores REST + WebSocket STOMP",
        "Angular 21 + Ionic 8 + Capacitor (Android)",
        "Pagos escrow con Stripe Payment Intents",
        "2FA TOTP + Google OAuth + reCAPTCHA v3",
        "Panel admin con 19 módulos de gestión",
        "IA de soporte con Gemini + Groq LLaMA",
        "Cumplimiento RGPD con double opt-in",
        "Deploy: Render + Vercel CDN + Cloudinary",
      ],
      techTitle: "Stack Tecnológico",
      techSubtitle: "Un único backend Spring Boot que sirve a todas las aplicaciones cliente. Ningún cliente habla directamente con PostgreSQL, Cloudinary ni Stripe.",
      techClientTitle: "Capa de Cliente — Vercel CDN",
      techClientDetail1: "App usuario · Web + Android · Puerto 4200",
      techClientDetail2: "Panel de administración · 19 módulos · Puerto 4201",
      techClientDetail3: "Web informativa y docs técnica · Puerto 4321",
      techBackendTitle: "Backend — Render.com · Docker · Puerto 8080",
      techBackendDetail1: "7 tareas auto",
      techServicesTitle: "Servicios Externos",
      featuresTitle: "Funcionalidades Clave",
      featuresSubtitle: "Un ecosistema completo de 8 módulos funcionales que cubren desde el comercio electrónico hasta la moderación y la publicidad.",
      features: [
        {
          title: "Marketplace de Segunda Mano",
          desc: "Publicación de productos, vehículos y ofertas con galería Cloudinary. Tipos: VENTA, DONACIÓN e INTERCAMBIO. Búsqueda unificada con expansión de sinónimos y vigencia automática de 180 días.",
          techs: ["Spring Boot", "Angular 21", "Cloudinary", "GPS / Geoloc", "PostgreSQL"],
        },
        {
          title: "Chollometro — Sistema Spark/Drip",
          desc: "Votación Spark o Drip para rankear ofertas. Un scheduler recalcula el sparkScore cada 5 min. Secciones: Flash, Gratis, Viajes. Badges automáticos: NUEVA, CHOLLAZO, EXPIRA_HOY.",
          techs: ["WebSocket STOMP", "Spring Scheduler", "Angular Signals", "Badge Engine"],
        },
        {
          title: "Pagos Seguros con Stripe (Escrow)",
          desc: "Payment Intents con modelo escrow: el dinero se retiene hasta que el comprador confirma la recepción. Contratos publicitarios con Checkout Sessions. Webhooks HMAC. Cupones validados en checkout.",
          techs: ["Stripe Payment Intents", "Stripe Checkout", "Webhooks HMAC", "Cupones"],
        },
        {
          title: "Chat en Tiempo Real (WebSocket STOMP)",
          desc: "Mensajería privada comprador-vendedor con roomId determinista. Soporta TEXTO, IMAGEN, VIDEO, AUDIO, GIF y OFERTA_PRECIO (propuesta de precio con aceptación/rechazo en tiempo real).",
          techs: ["Spring WebSocket", "STOMP", "SockJS", "@stomp/stompjs 7.3"],
        },
        {
          title: "Autenticación Multicapa",
          desc: "JWT con invalidación por jwtVersion, Google OAuth 2.0, 2FA TOTP con QR (ZXing + samstevens.totp), Email OTP 6 dígitos. BCrypt. reCAPTCHA v3 (umbral 0.5). Wizard de onboarding.",
          techs: ["JJWT 0.11.5", "Spring Security", "Google OAuth", "TOTP/ZXing", "reCAPTCHA v3"],
        },
        {
          title: "Panel Admin — 19 Módulos",
          desc: "App Angular independiente en subdominio separado (ROLE_ADMIN). Dashboard, estadísticas en vivo, moderación, devoluciones, contratos, cupones, patrocinios, newsletter con automaciones, audit log inmutable.",
          techs: ["Angular 21", "TypeScript 5.9", "Vercel", "ROLE_ADMIN", "AuditLog"],
        },
        {
          title: "Asistente IA de Soporte",
          desc: "Chatbot con dos proveedores intercambiables: Google Gemini 1.5-flash y Groq LLaMA 3.3-70b. Escalado automático a soporte humano por email si la IA no resuelve la consulta.",
          techs: ["Google Gemini 1.5-flash", "Groq LLaMA 3.3-70b", "Gmail SMTP"],
        },
        {
          title: "Publicidad B2B para Empresas",
          desc: "ROLE_EMPRESA solicita patrocinios BANNER o PUBLICACION. Admin aprueba y fija precio; empresa paga con Stripe Checkout. El ítem aparece con badge 'Patrocinado' hasta la expiración.",
          techs: ["Stripe Checkout", "ROLE_EMPRESA", "Angular 21", "Role-Based Access"],
        }
      ],
      galleryTitle: "Galería de Capturas",
      gallerySubtitle: "Capturas reales de la aplicación en funcionamiento — navega por categorías para explorar cada módulo del ecosistema Nexus.",
      useCasesTitle: "Casos de Uso Representativos",
      useCasesSubtitle: "Los flujos más importantes del sistema, implementados al completo en el backend y en las dos aplicaciones Angular.",
      useCases: [
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
        }
      ],
      setupTitle: "Cómo Ejecutar el Proyecto",
      setupSubtitle: "El ecosistema se divide en 4 repositorios independientes que comparten el mismo backend Spring Boot.",
      setupReqs: [
        "Java 17 LTS instalado en el sistema",
        "Node.js 20+ con Angular CLI 21",
        "PostgreSQL 14+ (o acceso a Render DB)",
        "Cuenta Stripe (modo test) con claves API",
        "Cuenta Cloudinary para almacenamiento",
        "Variables de entorno en application.properties",
      ],
      setupSteps: [
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
        }
      ],
      ctaText: "Ecosistema multiplataforma completo: marketplace, chollometro y publicidad B2B. Un único backend que sirve a 3 aplicaciones cliente con seguridad de nivel empresarial.",
      ctaOrg: "Organización GitHub",
      ctaAll: "Ver todos los proyectos",
      viewSource: "Ver Código",
      servicesDetails: {
        "PostgreSQL": "Base de datos (Render DB)",
        "Cloudinary": "Imágenes y vídeos CDN",
        "Stripe": "Pagos y webhooks HMAC",
        "Gmail SMTP": "Correo transaccional",
      }
    },
    en: {
      tagFullStack: "Full Stack",
      tagCompleted: "Completed",
      description: (
        <>The ultimate savings platform: <strong className="font-bold text-ink">second-hand marketplace</strong>, {" "}<strong className="font-bold text-ink">community deal-sharing</strong> with Spark/Drip voting system and <strong className="font-bold text-ink">B2B advertising</strong> for businesses, all in a single cross-platform ecosystem.</>
      ),
      bullets: [
        "48 REST controllers + WebSocket STOMP",
        "Angular 21 + Ionic 8 + Capacitor (Android)",
        "Escrow payments with Stripe Payment Intents",
        "2FA TOTP + Google OAuth + reCAPTCHA v3",
        "Admin panel with 19 management modules",
        "Gemini + Groq LLaMA support chatbot",
        "GDPR compliant with double opt-in",
        "Deploy: Render + Vercel CDN + Cloudinary",
      ],
      techTitle: "Technology Stack",
      techSubtitle: "A single Spring Boot backend serving all client applications. No client communicates directly with PostgreSQL, Cloudinary, or Stripe.",
      techClientTitle: "Client Layer — Vercel CDN",
      techClientDetail1: "User App · Web + Android · Port 4200",
      techClientDetail2: "Admin Panel · 19 modules · Port 4201",
      techClientDetail3: "Marketing site & technical docs · Port 4321",
      techBackendTitle: "Backend — Render.com · Docker · Port 8080",
      techBackendDetail1: "7 auto tasks",
      techServicesTitle: "External Services",
      featuresTitle: "Key Features",
      featuresSubtitle: "A complete ecosystem of 8 functional modules covering everything from e-commerce to moderation and advertising.",
      features: [
        {
          title: "Second-Hand Marketplace",
          desc: "Publish products, vehicles, and deals with Cloudinary gallery. Types: SALE, DONATION, and EXCHANGE. Unified search with synonym expansion and automatic 180-day validity.",
          techs: ["Spring Boot", "Angular 21", "Cloudinary", "GPS / Geoloc", "PostgreSQL"],
        },
        {
          title: "Chollometro — Spark/Drip System",
          desc: "Spark (upvote) or Drip (downvote) voting to rank deals. A scheduler recalculates the sparkScore every 5 min. Sections: Flash, Free, Travel. Auto badges: NEW, GREAT_DEAL, EXPIRES_TODAY.",
          techs: ["WebSocket STOMP", "Spring Scheduler", "Angular Signals", "Badge Engine"],
        },
        {
          title: "Secure Payments with Stripe (Escrow)",
          desc: "Payment Intents with escrow model: money is held until the buyer confirms receipt. Advertising contracts with Checkout Sessions. HMAC Webhooks. Coupons validated during checkout.",
          techs: ["Stripe Payment Intents", "Stripe Checkout", "Webhooks HMAC", "Coupons"],
        },
        {
          title: "Real-Time Chat (WebSocket STOMP)",
          desc: "Private buyer-seller messaging with deterministic roomId. Supports TEXT, IMAGE, VIDEO, AUDIO, GIF, and PRICE_OFFER (price proposal with real-time accept/reject).",
          techs: ["Spring WebSocket", "STOMP", "SockJS", "@stomp/stompjs 7.3"],
        },
        {
          title: "Multi-Layer Authentication",
          desc: "JWT with invalidation via jwtVersion, Google OAuth 2.0, 2FA TOTP with QR (ZXing + samstevens.totp), 6-digit Email OTP. BCrypt. reCAPTCHA v3 (0.5 threshold). Onboarding wizard.",
          techs: ["JJWT 0.11.5", "Spring Security", "Google OAuth", "TOTP/ZXing", "reCAPTCHA v3"],
        },
        {
          title: "Admin Panel — 19 Modules",
          desc: "Independent Angular app on separate subdomain (ROLE_ADMIN). Dashboard, live statistics, moderation, returns, contracts, coupons, sponsorships, newsletter with automation, immutable audit log.",
          techs: ["Angular 21", "TypeScript 5.9", "Vercel", "ROLE_ADMIN", "AuditLog"],
        },
        {
          title: "AI Support Assistant",
          desc: "Chatbot with two interchangeable providers: Google Gemini 1.5-flash and Groq LLaMA 3.3-70b. Automatic escalation to human support by email if the AI cannot resolve the query.",
          techs: ["Google Gemini 1.5-flash", "Groq LLaMA 3.3-70b", "Gmail SMTP"],
        },
        {
          title: "B2B Advertising for Businesses",
          desc: "ROLE_EMPRESA requests BANNER or POST sponsorships. Admin approves and sets price; business pays with Stripe Checkout. Item appears with 'Sponsored' badge until expiration.",
          techs: ["Stripe Checkout", "ROLE_EMPRESA", "Angular 21", "Role-Based Access"],
        }
      ],
      galleryTitle: "Screenshots Gallery",
      gallerySubtitle: "Real screenshots of the application in operation — browse categories to explore each module of the Nexus ecosystem.",
      useCasesTitle: "Representative Use Cases",
      useCasesSubtitle: "The most important flows of the system, fully implemented in the backend and in the two Angular applications.",
      useCases: [
        {
          id: "CU-01",
          title: "Purchase of a second-hand product",
          actor: "Authenticated user (buyer)",
          color: "border-violet-500/30 bg-violet-500/5",
          badgeColor: "text-violet-400 bg-violet-500/10 border-violet-500/30",
          steps: [
            "Browse the marketplace and access the product details",
            "Click 'Buy' → select delivery method (shipping or local pickup)",
            "Enter delivery address → apply discount coupon (optional)",
            "Backend creates a Stripe Payment Intent and returns clientSecret",
            "User completes payment in the Stripe.js form",
            "Stripe sends payment_intent.succeeded webhook → backend creates Purchase entity (PAID) and generates shipping QR code",
            "Seller confirms shipment with tracking number",
            "Buyer confirms receipt → payment released (escrow) → both parties can rate each other",
          ],
        },
        {
          id: "CU-02",
          title: "Publishing and voting on a deal/offer",
          actor: "Authenticated User or Business",
          color: "border-yellow-500/30 bg-yellow-500/5",
          badgeColor: "text-yellow-400 bg-yellow-500/10 border-yellow-500/30",
          steps: [
            "User accesses 'Publish deal' and completes the form",
            "System automatically calculates the badge in @PreUpdate (NEW, HOT_DEAL, etc.)",
            "Deal is published and visible on the chollometro",
            "Users vote with Spark (positive) or Drip (negative)",
            "A scheduler recalculates the sparkScore every 5 minutes",
            "Top-rated deals rise in the main ranking",
          ],
        },
        {
          id: "CU-03",
          title: "Advertising contracting by a business",
          actor: "Authenticated business (ROLE_EMPRESA)",
          color: "border-orange-500/30 bg-orange-500/5",
          badgeColor: "text-orange-400 bg-orange-500/10 border-orange-500/30",
          steps: [
            "Business accesses 'Advertising / My contracts' and requests a sponsorship",
            "Admin receives the request in DRAFT status and approves it with a price",
            "System generates a Stripe Checkout Session",
            "Business pays via Stripe Checkout (redirected to Stripe portal)",
            "The checkout.session.completed webhook confirms the payment",
            "Contract shifts to ACTIVE and the item gets the sponsored=true flag with expiration date",
          ],
        },
        {
          id: "CU-04",
          title: "Registration and authentication with 2FA TOTP",
          actor: "Visitor",
          color: "border-emerald-500/30 bg-emerald-500/5",
          badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
          steps: [
            "Visitor fills in the form with username, email, password + reCAPTCHA",
            "Backend validates the captcha and creates the User with BCrypt password",
            "Sends 6-digit OTP to email → user verifies account",
            "User accesses onboarding wizard and enables 2FA TOTP",
            "Backend generates TOTP secret, creates QR with ZXing in base64",
            "User scans QR with Google Authenticator",
            "Next login: after validating credentials, backend responds with twoFactorRequired: true",
            "User enters TOTP code → backend validates it → issues JWT with the role",
          ],
        }
      ],
      setupTitle: "How to Run the Project",
      setupSubtitle: "The ecosystem is divided into 4 independent repositories that share the same Spring Boot backend.",
      setupReqs: [
        "Java 17 LTS installed on system",
        "Node.js 20+ with Angular CLI 21",
        "PostgreSQL 14+ (or access to Render DB)",
        "Stripe account (test mode) with API keys",
        "Cloudinary account for storage",
        "Environment variables in application.properties",
      ],
      setupSteps: [
        {
          n: 1,
          title: "Clone the Repositories",
          cmds: [
            "git clone https://github.com/SomosNexusApp/nexus-backend.git",
            "git clone https://github.com/SomosNexusApp/nexus-angular-app.git",
            "git clone https://github.com/SomosNexusApp/nexus-admin-web-app.git",
          ],
        },
        {
          n: 2,
          title: "Configure the Backend",
          desc: "Edit application.properties with your Stripe, Cloudinary and PostgreSQL credentials",
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
          title: "Start the User App",
          desc: "Angular 21 + Ionic 8 on port 4200",
          cmds: ["cd nexus-angular-app", "npm install", "ng serve --port 4200"],
        },
        {
          n: 4,
          title: "Start the Administration Panel",
          desc: "Angular 21 on port 4201 (separate subdomain for security)",
          cmds: ["cd nexus-admin-web-app", "npm install", "ng serve --port 4201"],
        },
        {
          n: 5,
          title: "Build Android (optional)",
          desc: "Compile as a native Android app with Ionic + Capacitor 8",
          cmds: [
            "cd nexus-angular-app",
            "ng build --configuration=production",
            "npx cap sync android",
            "npx cap open android  # Requires Android Studio",
          ],
        }
      ],
      ctaText: "Complete cross-platform ecosystem: marketplace, chollometro and B2B advertising. A single backend serving 3 client apps with enterprise-grade security.",
      ctaOrg: "GitHub Organization",
      ctaAll: "View all projects",
      viewSource: "View Source",
      servicesDetails: {
        "PostgreSQL": "Database (Render DB)",
        "Cloudinary": "Images & video CDN",
        "Stripe": "Payments and HMAC webhooks",
        "Gmail SMTP": "Transactional email",
      }
    }
  };

  if (!mounted) return null;

  const es = language === "es";
  const NEXUS_COLOR = projectColor("nexus-app");

  const stats = [
    { v: "48+", l: es ? "Controladores REST" : "REST controllers" },
    { v: "4", l: es ? "Aplicaciones" : "Apps" },
    { v: "19", l: es ? "Módulos de admin" : "Admin modules" },
    { v: "RGPD", l: es ? "Cumplimiento" : "Compliant" },
  ];

  return (
    <div className="relative min-h-screen overflow-x-clip">
      <SkipLink />
      <SiteHeader />

      <main id="main" tabIndex={-1} className="focus:outline-none pt-24 sm:pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <BackButton />

          {/* ── CABECERA ── */}
          <header
            style={{ backgroundColor: NEXUS_COLOR }}
            className="relative mt-6 overflow-hidden rounded-[2.5rem] text-ink"
          >
            <div className="relative z-10 p-6 sm:p-10 md:p-14 md:pb-10 max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-ink/70">
                {text[language].tagFullStack} · {text[language].tagCompleted} · {es ? "Proyecto final de DAM" : "Final degree project"}
              </p>
              <h1 className="mt-3 display-tight font-bold text-6xl sm:text-7xl md:text-8xl">Nexus App</h1>
              <p className="mt-5 text-lg sm:text-xl leading-relaxed text-ink/85">{text[language].description}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://github.com/SomosNexusApp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-ink text-cream font-bold hover:bg-ink/85 transition-colors"
                >
                  <FaGithub aria-hidden="true" size={18} />
                  {text[language].viewSource}
                </a>
              </div>
            </div>

            <div className="relative mx-6 sm:mx-10 md:ml-auto md:mr-14 md:w-[70%] h-56 sm:h-80 md:h-[22rem] rounded-t-2xl overflow-hidden bg-ink shadow-[0_-20px_60px_-20px_rgba(19,33,63,0.5)]">
              <Image
                src="/images/projects/nexus/nexus.webp"
                alt={es ? "Portada de Nexus App" : "Nexus App cover"}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 70vw"
                className="object-contain p-3"
              />
            </div>
          </header>

          {/* ── CIFRAS ── */}
          <dl className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-px bg-line rounded-2xl overflow-hidden">
            {stats.map((s) => (
              <div key={s.l} className="bg-navy p-5">
                <dt className="text-sm text-muted">{s.l}</dt>
                <dd className="mt-1 display-tight text-4xl font-bold text-cream">{s.v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-12">
            {/* ── RESUMEN ── */}
            <SectionHead id="nexus-overview" title={es ? "Resumen" : "Overview"}>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                {text[language].bullets.map((h) => (
                  <li key={h} className="flex gap-3 text-lg text-cream leading-relaxed">
                    <span aria-hidden="true" className="text-albero">✦</span>
                    {h}
                  </li>
                ))}
              </ul>
            </SectionHead>

            {/* ── ARQUITECTURA ── */}
            <SectionHead id="nexus-tech" title={text[language].techTitle} subtitle={text[language].techSubtitle}>
              <div className="rounded-3xl bg-cream text-ink p-5 sm:p-8 space-y-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-ink/70 mb-3">
                    {text[language].techClientTitle}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {[
                      { title: "nexus-angular-app", sub: "Angular 21 + Ionic 8", detail: text[language].techClientDetail1, bg: "#cbbcff" },
                      { title: "nexus-admin-web-app", sub: "Angular 21", detail: text[language].techClientDetail2, bg: "#b9eccb" },
                      { title: "nexus-web-about", sub: es ? "Astro (estático)" : "Astro (static)", detail: text[language].techClientDetail3, bg: "#a9dcff" },
                    ].map((app) => (
                      <div key={app.title} className="rounded-2xl p-4" style={{ backgroundColor: app.bg }}>
                        <p className="font-mono font-bold text-sm">{app.title}</p>
                        <p className="mt-1 text-sm font-semibold">{app.sub}</p>
                        <p className="mt-1 text-sm text-ink/75">{app.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-center font-mono text-sm text-ink/70">
                  ↓ HTTP REST + JWT Bearer · WebSocket STOMP ↓
                </p>

                <div className="rounded-2xl bg-ink text-cream p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-albero mb-2">
                    {text[language].techBackendTitle}
                  </p>
                  <p className="font-mono font-bold text-sm mb-4">nexus-backend — Spring Boot 3.5.13 (Java 17)</p>
                  <dl className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      { v: "48 REST + 1 WS", l: "Controllers" },
                      { v: "44", l: "Services" },
                      { v: "JWT + 2FA + reCAPTCHA", l: "Security" },
                      { v: text[language].techBackendDetail1, l: "Schedulers" },
                    ].map((s) => (
                      <div key={s.l}>
                        <dt className="text-xs text-muted">{s.l}</dt>
                        <dd className="text-sm font-bold">{s.v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <p className="text-center font-mono text-sm text-ink/70">↓ Spring Data JPA / Hibernate ↓</p>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-ink/70 mb-3">
                    {text[language].techServicesTitle}
                  </p>
                  <dl className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {(["PostgreSQL", "Cloudinary", "Stripe", "Gmail SMTP"] as const).map((name) => (
                      <div key={name} className="rounded-2xl border-2 border-ink/15 p-3">
                        <dt className="font-bold text-sm">{name}</dt>
                        <dd className="text-sm text-ink/75">{text[language].servicesDetails[name]}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>

              <ul className="mt-8 flex flex-wrap gap-2.5">
                {[
                  { img: "/images/tools/spring.png", name: "Spring Boot" },
                  { img: "/images/tools/java.png", name: "Java 17" },
                  { img: "/images/tools/angular.png", name: "Angular 21" },
                  { icon: <SiIonic />, name: "Ionic 8" },
                  { img: "/images/tools/postgresql.png", name: "PostgreSQL" },
                  { icon: <SiStripe />, name: "Stripe" },
                  { icon: <SiDocker />, name: "Docker" },
                  { icon: <FaLock />, name: "JWT + 2FA" },
                ].map((tech) => (
                  <li
                    key={tech.name}
                    className="inline-flex items-center gap-2.5 rounded-full border border-cream/20 px-4 py-2 text-[15px] font-medium text-cream"
                  >
                    <span aria-hidden="true" className="flex items-center text-lg text-muted">
                      {"img" in tech && tech.img ? (
                        <Image src={tech.img} alt="" width={20} height={20} className="object-contain" />
                      ) : (
                        tech.icon
                      )}
                    </span>
                    {tech.name}
                  </li>
                ))}
              </ul>
            </SectionHead>

            {/* ── FUNCIONALIDADES ── */}
            <SectionHead id="nexus-features" title={text[language].featuresTitle} subtitle={text[language].featuresSubtitle}>
              <ol className="border-t border-line">
                {text[language].features.map((f, i) => (
                  <li key={f.title} className="py-6 border-b border-line">
                    <Reveal>
                      <div className="grid grid-cols-[3rem_1fr] gap-4">
                        <span aria-hidden="true" className="text-sm font-medium tabular-nums text-muted pt-2">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <h3 className="text-2xl font-bold text-cream">{f.title}</h3>
                          <p className="mt-2 text-muted leading-relaxed">{f.desc}</p>
                          <p className="mt-3 text-sm text-cream/70">{f.techs.join(" · ")}</p>
                        </div>
                      </div>
                    </Reveal>
                  </li>
                ))}
              </ol>
            </SectionHead>

            {/* ── GALERÍA ── */}
            <SectionHead id="nexus-gallery" title={text[language].galleryTitle} subtitle={text[language].gallerySubtitle}>
              <div role="group" aria-label={es ? "Categorías de capturas" : "Screenshot categories"} className="flex flex-wrap gap-2 mb-10">
                {GALLERY_TABS.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      aria-pressed={isActive}
                      className={`h-10 px-4 rounded-full text-[15px] font-semibold border-2 transition-colors ${
                        isActive
                          ? "bg-albero border-albero text-ink"
                          : "border-cream/25 text-cream hover:border-albero hover:text-albero"
                      }`}
                    >
                      {tabLabels[language][tab.id]}{" "}
                      <span className="opacity-60 tabular-nums">{GALLERY_DATA[tab.id].length}</span>
                    </button>
                  );
                })}
              </div>

              {(() => {
                const items = GALLERY_DATA[activeTab];
                const desktopItems = items.filter((i) => i.type === "desktop");
                const mobileItems = items.filter((i) => i.type === "mobile");

                return (
                  <div key={activeTab} className="space-y-14">
                    {desktopItems.length > 0 && (
                      <div>
                        {mobileItems.length > 0 && (
                          <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-albero mb-6">
                            {es ? "Escritorio" : "Desktop"}
                          </h3>
                        )}
                        <div className="grid sm:grid-cols-2 gap-8">
                          {desktopItems.map((img) => (
                            <DesktopMockup key={img.src} src={img.src} caption={translateCaption(img.caption, language)} />
                          ))}
                        </div>
                      </div>
                    )}

                    {mobileItems.length > 0 && (
                      <div>
                        {desktopItems.length > 0 && (
                          <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-albero mb-6">
                            {es ? "Responsive — web y móvil" : "Responsive — web & mobile"}
                          </h3>
                        )}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center">
                          {mobileItems.map((img) => (
                            <MobileMockup key={img.src} src={img.src} caption={translateCaption(img.caption, language)} />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })()}
            </SectionHead>

            {/* ── CASOS DE USO ── */}
            <SectionHead id="nexus-usecases" title={text[language].useCasesTitle} subtitle={text[language].useCasesSubtitle}>
              <div className="space-y-5">
                {text[language].useCases.map((uc) => (
                  <Reveal key={uc.id}>
                    <article className="rounded-3xl border border-line p-5 sm:p-7">
                      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                        <span className="rounded-full bg-albero px-3 py-0.5 text-sm font-bold text-ink">{uc.id}</span>
                        <h3 className="text-xl sm:text-2xl font-bold text-cream">{uc.title}</h3>
                      </div>
                      <p className="mt-2 text-sm text-muted">Actor: {uc.actor}</p>
                      <ol className="mt-5 space-y-2.5">
                        {uc.steps.map((step, i) => (
                          <li key={step} className="grid grid-cols-[2rem_1fr] gap-2 text-cream/90 leading-relaxed">
                            <span aria-hidden="true" className="text-sm font-medium tabular-nums text-muted pt-0.5">
                              {i + 1}.
                            </span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </article>
                  </Reveal>
                ))}
              </div>
            </SectionHead>

            {/* ── INSTALACIÓN ── */}
            <SectionHead id="nexus-setup" title={text[language].setupTitle} subtitle={text[language].setupSubtitle}>
              <ul className="flex flex-wrap gap-2 mb-10">
                {text[language].setupReqs.map((req) => (
                  <li key={req} className="rounded-full border border-cream/20 px-4 py-1.5 text-cream">
                    {req}
                  </li>
                ))}
              </ul>

              <ol className="space-y-6">
                {text[language].setupSteps.map((step) => (
                  <li key={step.n} className="grid grid-cols-[2.5rem_1fr] gap-3">
                    <span aria-hidden="true" className="grid place-items-center w-9 h-9 rounded-full bg-albero text-ink font-bold">
                      {step.n}
                    </span>
                    <div className="min-w-0">
                      <p className="text-lg font-semibold text-cream pt-1">{step.title}</p>
                      {step.desc && <p className="mt-1 text-muted">{step.desc}</p>}
                      <pre className="mt-3 rounded-xl bg-[#0b1428] border border-line p-4 text-sm font-mono overflow-x-auto">
                        {step.cmds.map((cmd) => (
                          <code key={cmd} className={`block ${cmd.startsWith("#") ? "text-muted" : "text-cream"}`}>
                            {!cmd.startsWith("#") && <span aria-hidden="true" className="text-albero select-none">$ </span>}
                            {cmd}
                          </code>
                        ))}
                      </pre>
                    </div>
                  </li>
                ))}
              </ol>
            </SectionHead>
          </div>

          {/* ── CIERRE ── */}
          <section
            aria-label="Nexus"
            style={{ backgroundColor: NEXUS_COLOR }}
            className="mt-8 rounded-[2rem] p-6 sm:p-10 md:p-14 text-ink"
          >
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-ink/70">
              {es ? "Proyecto final de DAM" : "Final degree project"} · IES Francisco Rodríguez Marín
            </p>
            <p className="mt-4 max-w-2xl text-xl sm:text-2xl leading-snug font-semibold">{text[language].ctaText}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://github.com/SomosNexusApp/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-ink text-cream font-bold hover:bg-ink/85 transition-colors"
              >
                <FaGithub aria-hidden="true" size={18} />
                {text[language].ctaOrg} <span aria-hidden="true">↗</span>
              </a>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 h-12 px-6 rounded-full border-2 border-ink font-bold hover:bg-ink hover:text-cream transition-colors"
              >
                {text[language].ctaAll} →
              </Link>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

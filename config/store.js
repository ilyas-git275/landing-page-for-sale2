/**
 * ============================================================
 *  STORE CONFIG — edit once for your store identity
 * ============================================================
 *  Set your logo, store name, promo banner text, and
 *  trust badge labels. Shared across all product pages.
 * ============================================================
 */

const STORE = {
  // ── Logo ───────────────────────────────────────────────────
  // Use a URL or a relative path like "assets/logo.png"
  // Set logoImage to null to show text logo instead
  logoImage: "media_market_logo.jpg",
  logoAlt: "شعار المتجر",
  logoText: "Layan Store", // shown if image fails or logoImage is null
  logoTagline: "التسوق الذكي",

  // ── Promo banner (top strip) ───────────────────────────────
  // Each item appears separated by a divider — set to [] to hide banner
  promoBanner: [
    "🚚 توصيل سريع لجميع ولايات الجزائر",
    "⏰ أطلب الآن قبل نفاد الكمية",
  ],

  // ── Navbar trust badges ────────────────────────────────────
  navTrust: [],

  // ── Bottom trust strip ─────────────────────────────────────
  trustStrip: [
    { icon: "shield", label: "دفع آمن" },
    { icon: "return", label: "إرجاع مجاني" },
    { icon: "cash", label: "الدفع عند التسليم" },
  ],
};

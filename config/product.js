/**
 * ============================================================
 *  PRODUCT CONFIG — edit this file for each new product
 * ============================================================
 *  This is the ONLY file you need to change between products.
 *  Everything else (styles, logic, layout) stays the same.
 * ============================================================
 */

const PRODUCT = {
  // ── Basic info ─────────────────────────────────────────────
  name: "Parure 3 Pièces",
  category: "اكسسوارات / مجوهرات",
  description:
    "بارور كلاسيكي  من ثلاث قطع بلمسة عصرية مرصع بأحجار لامعة يعطيك   أناقة ناعمة وراقية في نفس الوقت سارعو في الطلب فالكمية محدودة",

  // ── Pricing ────────────────────────────────────────────────
  price: 2400, // current price in DZD
  oldPrice: 3000, // original price — set to null to hide
  currency: "دج",

  // ── Image ──────────────────────────────────────────────────
  // Replace with your image URL or a relative path e.g. "assets/product.jpg"
  images: ["parure test 2.png"],
  imageAlt: "صورة المنتج",

  // ── Badge on image ─────────────────────────────────────────
  // Set to null to hide the badge
  badge: "-20% خصم",

  // ── Ratings ────────────────────────────────────────────────
  stars: 5, // 1–5
  reviewCount: 128,
  orderCount: 500, // displayed as "أكثر من X طلب"

  // ── Feature pills (shown under description) ────────────────
  features: ["جودة ممتازة", "ضمان المنتج", "دفع عند الاستلام", "تغليف محكم"],

  // ── Google Apps Script endpoint ────────────────────────────
  // Replace with your own Google Sheets webhook URL
  googleScriptURL:
    "https://script.google.com/macros/s/AKfycbzKcbNy2j6WDCDMeYPnexpRQO8ZMuMZrKyCuWDTuf7DkpOQwRR9IjtsygYmtn0i3ymEFw/exec",
};

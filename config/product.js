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
  name: "مصباح كريستالي بلمسة عصرية",
  category: "ديكور المنزل / إضاءة",
  description:
    "مصباح كريستالي أنيق بلمسة عصرية وتصميم فريد، يضفي على غرفتك أناقة ناعمة وراقية في نفس الوقت. يتميز بتقنية التشغيل بالبصمة مع ثلاث وضعيات إضاءة مختلفة تزيد وتنقص لتناسب جوّك الخاص، سارعوا في الطلب فالكمية محدودة!",

  // ── Pricing ────────────────────────────────────────────────
  price: 1750, // current price in DZD
  oldPrice: 3000, // original price — set to null to hide
  currency: "دج",

  // ── Offers ─────────────────────────────────────────────────
  offers: [
    { id: 1, label: "قطعة واحدة", quantity: 1, price: 1750, isBest: false },
    {
      id: 2,
      label: "قطعتين (توفير خاص)",
      quantity: 2,
      price: 3400,
      isBest: true,
    },
  ],

  // ── Image ──────────────────────────────────────────────────
  // Replace with your image URL or a relative path e.g. "assets/product.jpg"
  images: ["product1.png", "product3.png", "product_eulma2.jpg"],
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
    "https://script.google.com/macros/s/AKfycbzxybk82bIKx8IQJia9Rdl4fSmKt_kd3jLmZPJkvKxd7Lk0x2R8UaIIl9og3lH6wylH/exec",

  // ── Tracking ───────────────────────────────────────────────
  facebookPixelId: "YOUR_PIXEL_ID_HERE", // Replace with client's Pixel ID
};

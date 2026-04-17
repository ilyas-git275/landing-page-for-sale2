/**
 * ============================================================
 *  WILAYAS DATA — Delivery prices for all 69 Wilayas
 *  Communes are loaded dynamically from:
 *  algeria-cities-2025-main/json/cities.json
 * ============================================================
 */

// ── Delivery prices (keyed by zero-padded string "01".."69") ─

let WILAYAS = {
  "01": { name: "أدرار",                bureauCost: 800,  homeCost: 1300 },
  "02": { name: "الشلف",                bureauCost: 400,  homeCost: 800  },
  "03": { name: "الأغواط",              bureauCost: 550,  homeCost: 900  },
  "04": { name: "أم البواقي",           bureauCost: 400,  homeCost: 800  },
  "05": { name: "باتنة",                bureauCost: 400,  homeCost: 800  },
  "06": { name: "بجاية",                bureauCost: 400,  homeCost: 800  },
  "07": { name: "بسكرة",                bureauCost: 400,  homeCost: 800  },
  "08": { name: "بشار",                 bureauCost: 700,  homeCost: 1200 },
  "09": { name: "البليدة",              bureauCost: 400,  homeCost: 700  },
  "10": { name: "البويرة",              bureauCost: 400,  homeCost: 800  },
  "11": { name: "تمنراست",              bureauCost: 1000, homeCost: 1400 },
  "12": { name: "تبسة",                 bureauCost: 450,  homeCost: 800  },
  "13": { name: "تلمسان",               bureauCost: 400,  homeCost: 800  },
  "14": { name: "تيارت",                bureauCost: 400,  homeCost: 800  },
  "15": { name: "تيزي وزو",             bureauCost: 400,  homeCost: 800  },
  "16": { name: "الجزائر",              bureauCost: 350,  homeCost: 450  },
  "17": { name: "الجلفة",               bureauCost: 400,  homeCost: 900  },
  "18": { name: "جيجل",                 bureauCost: 400,  homeCost: 800  },
  "19": { name: "سطيف",                 bureauCost: 400,  homeCost: 800  },
  "20": { name: "سعيدة",                bureauCost: 400,  homeCost: 800  },
  "21": { name: "سكيكدة",               bureauCost: 400,  homeCost: 800  },
  "22": { name: "سيدي بلعباس",          bureauCost: 400,  homeCost: 800  },
  "23": { name: "عنابة",                bureauCost: 400,  homeCost: 800  },
  "24": { name: "قالمة",                bureauCost: 400,  homeCost: 800  },
  "25": { name: "قسنطينة",              bureauCost: 400,  homeCost: 800  },
  "26": { name: "المدية",               bureauCost: 400,  homeCost: 800  },
  "27": { name: "مستغانم",              bureauCost: 400,  homeCost: 800  },
  "28": { name: "المسيلة",              bureauCost: 400,  homeCost: 800  },
  "29": { name: "معسكر",                bureauCost: 400,  homeCost: 800  },
  "30": { name: "ورقلة",                bureauCost: 650,  homeCost: 900  },
  "31": { name: "وهران",                bureauCost: 400,  homeCost: 800  },
  "32": { name: "البيض",                bureauCost: 600,  homeCost: 800  },
  "33": { name: "إليزي",                bureauCost: 0,    homeCost: 1600 },
  "34": { name: "برج بوعريريج",         bureauCost: 400,  homeCost: 800  },
  "35": { name: "بومرداس",              bureauCost: 400,  homeCost: 650  },
  "36": { name: "الطارف",               bureauCost: 400,  homeCost: 800  },
  "37": { name: "تندوف",                bureauCost: 950,  homeCost: 1400 },
  "38": { name: "تيسمسيلت",             bureauCost: 400,  homeCost: 800  },
  "39": { name: "الوادي",               bureauCost: 500,  homeCost: 900  },
  "40": { name: "خنشلة",                bureauCost: 400,  homeCost: 800  },
  "41": { name: "سوق أهراس",            bureauCost: 400,  homeCost: 800  },
  "42": { name: "تيبازة",               bureauCost: 400,  homeCost: 600  },
  "43": { name: "ميلة",                 bureauCost: 400,  homeCost: 800  },
  "44": { name: "عين الدفلى",           bureauCost: 0,    homeCost: 800  },
  "45": { name: "النعامة",              bureauCost: 600,  homeCost: 1000 },
  "46": { name: "عين تموشنت",           bureauCost: 400,  homeCost: 800  },
  "47": { name: "غرداية",               bureauCost: 500,  homeCost: 900  },
  "48": { name: "غليزان",               bureauCost: 400,  homeCost: 800  },
  "49": { name: "تيميمون",              bureauCost: 0,    homeCost: 1300 },
  "50": { name: "برج باجي مختار",       bureauCost: 0,    homeCost: 0    },
  "51": { name: "أولاد جلال",           bureauCost: 0,    homeCost: 900  },
  "52": { name: "بني عباس",             bureauCost: 0,    homeCost: 1350 },
  "53": { name: "عين صالح",             bureauCost: 0,    homeCost: 1650 },
  "54": { name: "عين قزام",             bureauCost: 0,    homeCost: 0    },
  "55": { name: "تقرت",                 bureauCost: 550,  homeCost: 950  },
  "56": { name: "جانت",                 bureauCost: 0,    homeCost: 0    },
  "57": { name: "المغير",               bureauCost: 0,    homeCost: 1100 },
  "58": { name: "المنيعة",              bureauCost: 0,    homeCost: 1100 },
  "59": { name: "أفلو",                 bureauCost: 550,  homeCost: 900  },
  "60": { name: "الأبيض سيدي الشيخ",   bureauCost: 600,  homeCost: 800  },
  "61": { name: "العريشة",              bureauCost: 400,  homeCost: 800  },
  "62": { name: "القنطرة",              bureauCost: 400,  homeCost: 800  },
  "63": { name: "بريكة",                bureauCost: 400,  homeCost: 800  },
  "64": { name: "بوسعادة",              bureauCost: 400,  homeCost: 800  },
  "65": { name: "بير العاتر",           bureauCost: 450,  homeCost: 800  },
  "66": { name: "قصر البخاري",          bureauCost: 400,  homeCost: 800  },
  "67": { name: "قصر الشلالة",          bureauCost: 400,  homeCost: 800  },
  "68": { name: "عين وسارة",            bureauCost: 400,  homeCost: 900  },
  "69": { name: "مسعد",                 bureauCost: 400,  homeCost: 900  },
};

// ── Load communes from cities.json and merge into WILAYAS ─────

const WILAYAS_READY = fetch("algeria-cities-2025-main/json/cities.json")
  .then((r) => r.json())
  .then((data) => {
    // Build a map: wilaya_id (number) -> [commune names]
    const communeMap = {};
    (data.communes || []).forEach((c) => {
      const id = c.wilaya_id;
      if (!communeMap[id]) communeMap[id] = [];
      communeMap[id].push(c.commune_name_arabic);
    });

    // Merge into WILAYAS using the padded string key
    Object.keys(WILAYAS).forEach((key) => {
      const numericId = parseInt(key, 10);
      WILAYAS[key].communes = (communeMap[numericId] || []).sort((a, b) =>
        a.localeCompare(b, "ar")
      );
    });
  })
  .catch((err) => {
    console.warn("Could not load cities.json — commune dropdowns will be empty.", err);
    // Ensure every wilaya still has an empty communes array
    Object.keys(WILAYAS).forEach((key) => {
      if (!WILAYAS[key].communes) WILAYAS[key].communes = [];
    });
  });

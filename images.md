# 🖼️ Project Image Inventory - BLACKFOX DIGITAL

This document contains a comprehensive list of every image used across the BLACKFOX DIGITAL website. Use this as a guide for replacing photos or optimizing assets.

## 🏢 Global Assets
| Asset Path | Usage | Context |
| :--- | :--- | :--- |
| `/logo.png` | Site-wide | Used in the Header, Footer, and SEO Meta settings. |
| `/icons/icon-512x512.png` | Manifest/PWA | Primary app icon. |
| `/favicon.ico` | Browser Tab | Site favicon (standard). |

---

## 🏠 Homepage Assets
| Asset Path | Location | Description |
| :--- | :--- | :--- |
| `/home_slider_woman.png` | Hero Slider (Slide 1) | Main hero graphic for "Editing At Scale". |
| `/hero-1.jpg` | Hero Slider (Slide 2) | Background for "Human Retouchers" slide. |
| `/hero-2.jpg` | Hero Slider (Slide 3) | Background for "Pantone-Accurate Color" slide. |
| `/hero-3.jpg` | Hero Slider (Slide 4) | Background for "Clipping Paths to Ghost Mannequin". |
| `/upload.png` | Workflow Section | Step 1: Upload Files icon. |
| `/download.png` | Workflow Section | Step 2: Processing icon. |
| `/retouching_done.png` | Workflow Section | Step 3: Quality Check icon. |
| `/free.png` | Workflow Section | Step 4: Encrypted Delivery icon. |
| `/retouch_done_download.png` | Workflow Section | Step 5: Ready for Download icon. |
| `/home_glasses_cat1.jpg` | Difference Section | Large background image for the authority section. |
| `/gradient-1.png` | Site-wide | Background texture used in `globals.css`. |

---

## 🛠️ Service-Specific Assets (Before/After)
Each service uses a set of "Before" and "After" images for the interactive comparison sliders.

| Service | Before Image | After Image |
| :--- | :--- | :--- |
| **E-Commerce Photo Editing** | `/ECommerce.jpg` | `/ECommerce-Done.jpg` |
| **E-Commerce Hero** | N/A | `/ecommerce-hero-watch.png` |
| **Background Removal** | `/bg_removal_compare_before_1774788191480.png` | `/bg_removal_compare_after_1774788208396.png` |
| **Clipping Path** | `/clipping-path-chair-before.png` | `/clipping-path-chair-after.png` |
| **Clipping Path Hero** | N/A | `/clipping-path-bicycle-after.png` |
| **Clipping Path Bicycle** | `/clipping-path-bicycle-before.png` | `/clipping-path-bicycle-after.png` |
| **Clipping Path Ring** | `/clipping-path-ring-before.png` | `/clipping-path-ring-after.png` |
| **Clipping Path Handbag** | `/clipping-path-bag-before.png` | `/clipping-path-bag-after.png` |
| **Clipping Path Shoe** | `/clipping-path-shoe-before.png` | `/clipping-path-shoe-after.png` |
| **Clipping Path Espresso** | `/clipping-path-espresso-before.png` | `/clipping-path-espresso-after.png` |
| **Ghost Mannequin** | `/Ghost-Mannequin-2-Raw.jpg` | `/Ghost-Mannequin-2-Done.jpg` |
| **Image Masking** | `/Masking-Retouch-Service-3.jpg` | `/Masking-Retouch-Service-Done-3.jpg` |
| **Shadow & Reflection** | `/Reflection-Service.jpg` | `/Reflection-Service-Done.jpg` |
| **Beauty & Skin Retouch** | `/Beauty-Retouch-Service-Page.jpg` | `/Beauty-Retouch-Service-Page-Done.jpg` |
| **Model Retouching** | `/Model-Retouch-1.jpg` | `/Model-Retouch-1-Done.jpg` |
| **Product Retouching** | `/Product-Retouch-Service-Page.jpg` | `/Product-Retouch-Service-Page-Done.jpg` |
| **Jewelry Retouching** | `/Jewlery-Retouch-5.jpg` | `/Jewlery-Retouch-5-Done.jpg` |
| **Color Correction** | `/Color-Change.jpg` | `/Color-Change-Done.jpg` |
| **Image Manipulation** | `/Image-Manipulation.jpg` | `/Image-Manipulation-Done.jpg` |
| **Flatlay Retouch** | `/Flatlay-1.jpg` | `/Flatlay-1-Done.jpg` |
| **Real Estate Editing** | `/Real-Estate-Before.png` | `/Real-Estate-After.png` |
| **Automotive Editing** | `/Car-Before.png` | `/Car-After.png` |
| **Photo Restoration** | `/Photo-Restoration-Before.png` | `/Photo-Restoration-After.png` |

---

## 📘 About Page & Internal Assets
| Asset Path | Location | Description |
| :--- | :--- | :--- |
| `/about_studio_hero_1774785390263.png` | About Page | Studio environment hero image. |
| `/expert_workflow_1774785408307.png` | About Page | Demonstration of the precision retouching workflow. |
| `/blackfox_post_processing_about_us.jpg` | About Page | Background image for the "How We Work" section. |

---

## 🎨 UI & Supplemental Assets
| Asset Path | Usage |
| :--- | :--- |
| `/home_glasses_arrows.png` | UI Decoration in Home components. |
| `/home_glasses_off.png` | UI Decoration in Home components. |
| `/home_glasses_party_style.png` | UI Decoration in Home components. |
| `/home_priority_about_txt.png` | Decorative text overlay. |
| `/download.png` | Download button/icon. |
| `/free (1).png` | Promotional badge. |
| `/support (1).png` | Support icon graphic. |

---

## 📁 Technical Summary
- **Primary Storage**: `/public`
- **Dynamic Data**: Referenced in `lib/mock-data.js` under the `services` and `portfolio` arrays.
- **Component References**: `Hero.jsx`, `BeforeAfterSlider.jsx`, `Gallery/index.jsx`.

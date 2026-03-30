export const services = [
  {
    id: 's1',
    title: 'E-Commerce Photo Editing',
    slug: 'ecommerce-photo-editing',
    shortDescription: 'Comprehensive optimization for high-volume online retail catalogs.',
    description: '<p>Standardize your entire catalog with perfect lighting, alignment, and formatting. We ensure every product shot meets the high standards of global marketplaces like Amazon and eBay. Our complete workflow includes precise background removal to eliminate distractions, surgical clipping path isolation for crisp edges, and accurate color correction so your products always look true to life.</p>',
    priceStarting: 0.35,
    priceUnit: 'image',
    turnaround: '24 hours',
    features: ['Consistency across batches', 'Web-ready sizing', 'Color vibrancy boost', 'Marketplace compliance'],
    pricingData: [
      { type: 'Basic', price: '$0.35/image', desc: 'Standard packshots, simple products' },
      { type: 'Standard', price: '$0.75/image', desc: 'Reflective surfaces, small details' },
      { type: 'Complex', price: '$1.50/image', desc: 'Jewelry, bicycles, intricate items' },
      { type: 'Super Complex', price: '$3.00+/image', desc: 'Automotive, large multi-part assemblies' }
    ],
    targetAudience: [
      'Amazon FBA Sellers',
      'Shopify Store Owners',
      'eBay Power Sellers',
      'Retail Enterprise Catalogs',
      'Boutique Apparel Brands',
      'Commercial Photographers'
    ],
    customFaqs: [
      { q: "How fast can you process 1,000+ e-commerce images?", a: "We can process up to 3,000 images within 24 hours using our dedicated studio teams." },
      { q: "Do you offer free tests for new brands?", a: "Yes, upload up to 10 product images and we will edit them for free within 24 hours." },
      { q: "Do your edits meet Amazon & eBay standards?", a: "Absolutely. We guarantee 100% compliance with all major marketplace image requirements (pure white backgrounds, correct margins)." },
      { q: "Can I get volume discounts?", a: "Yes, we offer custom reduced pricing for daily or weekly high-volume batches." },
      { q: "What is your revision policy?", a: "We offer unlimited revisions until the images perfectly match your approved brand guidelines." }
    ],
    h2Title: 'What is E-Commerce Photo Editing?',
    schemaDescription: 'Professional e-commerce photo editing services for Amazon, Shopify, and eBay sellers. High-volume batch processing from $0.35/image. 24-hour turnaround.',
    beforeImage: '/ECommerce.jpg',
    afterImage: '/ECommerce-Done.jpg',
    order: 1,
    status: 'PUBLISHED'
  },
  {
    id: 's2',
    title: 'Background Removal',
    slug: 'background-removal-service',
    shortDescription: 'Flawless subject extraction and manual background replacement.',
    description: '<p>Pure subjects on pure backgrounds. Flawless background removal is the absolute foundational requirement for Amazon listings, Shopify storefronts, and professional print catalogs. While automated AI tools often destroy edge details and blur fine textures, our studio relies exclusively on hand-drawn clipping paths and advanced alpha-channel masking. This manual precision ensures that complex edges—like flyaway hair, translucent glass, and intricate mechanical spokes—are perfectly isolated from distracting environments, giving your high-resolution products incredibly sharp, professional silhouettes.</p>',
    priceStarting: 0.29,
    priceUnit: 'image',
    turnaround: '12-24 hours',
    features: ['100% manual Pen Tool extraction', 'Alpha masking for hair & fur', 'Pure white (RGB 255) Amazon compliance', 'Transparent (.png) / Layered (.psd) delivery'],
    pricingData: [
      { type: 'Basic Outline', price: '$0.29/image', desc: 'Simple geometric products, straight edges' },
      { type: 'Standard Product', price: '$0.75/image', desc: 'Apparel with curves, basic hardware' },
      { type: 'Complex Edges', price: '$1.50/image', desc: 'Jewelry, flyaway hair, translucent liquids' },
      { type: 'Super Complex', price: '$3.50+/image', desc: 'Bicycles, chainlink fences, intricate machinery' }
    ],
    targetAudience: [
      'Amazon FBA & Power Sellers',
      'Shopify E-Commerce Stores',
      'High-Volume Product Photographers',
      'Advertising & Print Agencies',
      'Car Dealerships & Auto Auctions',
      'Jewelry & Luxury Boutiques'
    ],
    customFaqs: [
      { q: "Why shouldn't I just use auto background-removal apps or AI?", a: "AI background removal is incredibly fast, but it routinely struggles with thin lines, transparent elements, and complex lighting. AI forces a 'blurry feathering' on edges that looks cheap and amateurish under high-resolution magnification. Our editors utilize rigid, hand-drawn vector paths for razor-sharp, flawless commercial perfection." },
      { q: "How do you remove the background from fur or model's hair?", a: "A standard Pen Tool clipping path will make fine hair look like a plastic helmet. Instead, we use highly advanced Alpha Channel mapping and complex layer masks to isolate the exact luminance of the individual hair strands, allowing us to drop the model onto a new background while preserving 100% of the fine, wispy details." },
      { q: "Can you provide a pure white background instead of transparent?", a: "Yes. By default we can deliver layered PSDs or transparent PNGs. However, if you are selling on Amazon or eBay, we will output flattened JPEGs clamped strictly to RGB 255,255,255—ensuring 100% immediate compliance with strict marketplace standards." },
      { q: "Do you keep the natural shadows of the product?", a: "Absolutely. We can cleanly isolate and retain the original shadow cast natively by the product on its original surface, or, if the original lighting was poor, entirely erase the original shadow and mathematically render a new, perfectly unified drop-shadow underneath." }
    ],
    h2Title: 'Manual Background Removal & Extraction Workflows',
    schemaDescription: 'Professional background removal and extraction services. Hand-drawn clipping paths and alpha channel masking for Amazon and E-commerce starting at $0.29/image.',
    beforeImage: '/bg_removal_compare_before_1774788191480.png',
    afterImage: '/bg_removal_compare_after_1774788208396.png',
    heroImage: '/bg_removal_studio_hero_1774788173759.png',
    workflowImage: '/bg_removal_workflow_edit_1774788226809.png',
    order: 2,
    status: 'PUBLISHED'
  },
  {
    id: 's3',
    title: 'Clipping Path Service',
    slug: 'clipping-path-service',
    heroLabel: 'Professional Service',
    shortDescription: 'Professional clipping path service for product photography, e-commerce and advertising. Hand-drawn pen tool paths in Adobe Photoshop for pixel-perfect edges. From $0.25/image. 24-hour delivery worldwide.',
    schemaDescription: 'Professional clipping path service starting from $0.25/image. Hand-drawn pen tool paths for pixel-perfect product isolation. 24-hour delivery. Trusted by 500+ global brands. Free trial available — no credit card required.',
    description: '<p>Clipping path is a photo editing technique that uses the Pen Tool in Adobe Photoshop to draw a precise vector path around a subject. This path is used to isolate the subject from its background, creating a clean, sharp edge perfect for product photography, e-commerce listings and advertising materials. Add our background removal, image masking, or e-commerce photo editing for a complete studio pipeline.</p>',
    priceStarting: 0.25,
    priceUnit: 'image',
    turnaround: '24 hours',
    features: ['Hand-drawn pen tool paths', 'Anti-aliased edges', 'Multiple nested paths', 'Non-destructive editing'],
    pricingData: [
      { type: 'Basic', price: '$0.25/image', desc: 'Simple shapes, straight distinct edges' },
      { type: 'Medium', price: '$0.49/image', desc: 'Small curves, multiple anchor points' },
      { type: 'Complex', price: '$1.00/image', desc: 'Vehicles, furniture, moderate details' },
      { type: 'Super Complex', price: '$3.00+/image', desc: 'Bicycles, chainlink, intricate cutouts' }
    ],
    targetAudience: [
      'E-Commerce Sellers (Amazon, eBay, Shopify)',
      'Fashion & Apparel Brands',
      'Product Photographers',
      'Advertising Agencies',
      'Catalogue Publishers',
      'Jewelry Retailers'
    ],
    customFaqs: [
      { q: "What is the delivery time for Clipping Path?", a: "Standard delivery is 24-48 hours. Rush options: 24hrs (+20%), 12hrs (+40%), 6hrs (+60%)." },
      { q: "Can I get a free trial?", a: "Yes! Submit up to 10 images free — no credit card required. Results in 24 hours." },
      { q: "What is your pricing model?", a: "Pricing starts from $0.25/image. Basic ($0.25), Medium ($0.49), Complex ($1.00), Super Complex ($3.00+). Volume discounts on orders of 1000+ images." },
      { q: "Do you sign NDAs?", a: "Yes. We sign NDAs on request. Your files are never shared without written permission." },
      { q: "How are files delivered?", a: "Via FTP, Dropbox, WeTransfer or Google Drive in PNG, PSD, TIFF or JPG format." }
    ],
    h2Title: 'What is Clipping Path Service?',
    beforeImage: '/bg-removal.jpg',
    afterImage: '/bg-removal-done.jpg',
    heroImage: '/bg-removal-done.jpg',
    order: 3,
    status: 'PUBLISHED'
  },
  {
    id: 's4',
    title: 'Ghost Mannequin & Neck Joint',
    slug: 'ghost-mannequin-service',
    shortDescription: 'Create premium, hollow 3D apparel visuals by digitally removing mannequins.',
    description: '<p>Instead of hiring expensive live models or displaying flat, lifeless garments on a table, the Ghost Mannequin (Invisible Mannequin) technique gives your apparel a premium, hollow 3D structure. Our studio meticulously stitches your primary exterior shot together with an inside neck-tag shot to create a single, perfectly dimensional piece of clothing. By completely removing the physical mannequin, your customers can focus entirely on the fit, cut, and fabric of the garment. We strictly enforce right/left dimensional symmetry, digitally steam out distracting wrinkles, and guarantee your apparel catalog looks perfectly uniform on high-end retail platforms.</p>',
    priceStarting: 0.75,
    priceUnit: 'image',
    turnaround: '12-24 hours',
    features: ['Invisible 3D neck-joint stitching', 'Brand tag and inner collar preservation', 'Digital apparel steaming & wrinkle removal', 'Rigid left/right dimensional symmetry'],
    pricingData: [
      { type: 'Basic T-Shirts', price: '$0.75/image', desc: 'Simple front & neck joint combinations' },
      { type: 'Standard Apparel', price: '$1.50/image', desc: 'Hoodies, button-downs, basic trousers' },
      { type: 'Complex Outerwear', price: '$3.00/image', desc: 'Suits, structured jackets, multi-layer garments' },
      { type: 'Intricate & Sheer', price: '$4.50+/image', desc: 'Lingerie, sheer fabrics, complex interior stitching' }
    ],
    targetAudience: [
      'Boutique Fashion Labels',
      'Activewear & Athleisure Brands',
      'Lingerie & Swimwear E-Commerce',
      'High-Volume Apparel Retailers',
      'Catalogue Publishers',
      'Commercial Fashion Photographers'
    ],
    customFaqs: [
      { q: "How many photos do I need to send for one Ghost Mannequin edit?", a: "You need to provide at least two photos per garment: one primary shot of the clothing on the mannequin, and a secondary 'inside' shot exposing the inner collar, neck, and brand tag (often shot inside-out). We digitally stitch these two together to create the hollow 3D effect." },
      { q: "Do you automatically fix wrinkles and symmetry?", a: "Yes. Basic 'digital ironing' is included to remove harsh folding creases. We also use advanced liquid-warping to mathematically align the left and right sleeves/hems so the garment looks perfectly balanced." },
      { q: "Can you do Ghost Mannequin for pants and underwear?", a: "Absolutely. Instead of a neck joint, we stitch the interior waistband to the exterior shot. This works phenomenally well for jeans, underwear, and swimwear." },
      { q: "Can you change the clothing color while doing the neck joint?", a: "Yes. Many high-volume clients provide one master Ghost Mannequin shoot, and we will flawlessly duplicate and digitally recolor it into 5 or 10 different SKUs, saving thousands in photography staging costs." }
    ],
    h2Title: 'Invisible 3D Apparel & Digital Styling Workflows',
    schemaDescription: 'Professional Ghost Mannequin and neck joint services for fashion e-commerce. Create premium 3D hollow clothing apparel shots starting at $0.75/image. Next-day delivery.',
    beforeImage: '/Ghost-Mannequin-2-Raw.jpg',
    afterImage: '/Ghost-Mannequin-2-Done.jpg',
    order: 4,
    status: 'PUBLISHED'
  },
  {
    id: 's5',
    title: 'Image Masking',
    slug: 'image-masking-service',
    shortDescription: 'Complex masking for hair, fur, and transparent objects.',
    description: '<p>When clipping paths fall short, image masking takes over. We use advanced alpha channel and layer masking to preserve every strand of hair or fur against any background.</p>',
    priceStarting: 0.75,
    priceUnit: 'image',
    turnaround: '24 hours',
    features: ['Alpha channel masking', 'Hair & fur preservation', 'Translucency handling', 'Precision edge refining'],
    beforeImage: '/Masking-Retouch-Service-3.jpg',
    afterImage: '/Masking-Retouch-Service-Done-3.jpg',
    order: 5,
    status: 'PUBLISHED'
  },
  {
    id: 's6',
    title: 'Shadow Creation & Reflection',
    slug: 'shadow-reflection-service',
    shortDescription: 'Realistic lighting effects to anchor your products and add 3D physical dimension.',
    description: '<p>Floating, harshly cut-out products look completely artificial and immediately cheapen the perceived value of your brand. To anchor your items in a believable, premium 3D space, we mathematically generate natural drop shadows, elongated cast shadows, and flawless acrylic-style mirror reflections. Whether we are meticulously isolating and retaining the original soft shadow shot natively on the studio floor, or artificially rendering a complex 360-degree ambient light shadow from scratch, our post-production shading creates immense physical presence, adding distinct high-end retail trust to your entire catalog.</p>',
    priceStarting: 0.45,
    priceUnit: 'image',
    turnaround: '12-24 hours',
    features: ['Natural algorithmic drop shadows', 'Plexiglass/Mirror reflection rendering', 'Studio original shadow retention', 'Multi-directional artificial light casting'],
    pricingData: [
      { type: 'Basic Drop Shadow', price: '$0.45/image', desc: 'Slight ambient shadow underneath flat products' },
      { type: 'Original Retention', price: '$0.80/image', desc: 'Isolating the true shadow shot softly in-studio' },
      { type: 'Cast Shadow Creation', price: '$1.50/image', desc: 'Simulating complex 3D directional light sources' },
      { type: 'Mirror Reflection', price: '$2.00/image', desc: 'Perfectly faded acrylic/glass bottom reflection' }
    ],
    targetAudience: [
      'Footwear & Sneaker Retailers',
      'Sunglasses & Eyewear Brands',
      'Cosmetics & Fragrance Lines',
      'Jewelry & Watch Boutiques',
      'High-End Electronics Manufacturers',
      'Automotive Dealerships'
    ],
    customFaqs: [
      { q: "What is the difference between a Drop Shadow and a Cast Shadow?", a: "A Drop Shadow is a soft, ambient glow directly underneath the product as if it were laying flat on a table. A Cast Shadow is directional; it simulates a distinct light source (like a window or strobe) throwing a long, elongated shadow away from the product, creating massive 3D depth and grounding." },
      { q: "Can you add a mirror reflection to any product?", a: "Absolutely. Even if the product was shot on matte paper or concrete, we can digitally extract it and mathematically build a fading, inverted mirror reflection underneath to simulate it sitting on high-gloss acrylic or black marble glass." },
      { q: "Is it better to retain the original shadow or create a new one?", a: "If your studio lighting was perfectly identical across 500 shots, retaining the original shadow is excellent. However, if lighting fluctuated, it is much better to completely erase the bad original shadow and mathematically render a new, perfectly consistent digital shadow for your entire catalog block." },
      { q: "Can you do both a reflection and a drop shadow simultaneously?", a: "Yes. This is incredibly popular in premium cosmetics and high-end electronics. We often blend a sharp mirror reflection descending down with a soft ambient drop shadow anchored underneath to create ultimate physical realism." }
    ],
    h2Title: 'Realistic Drop Shadows & Product Reflection Workflows',
    schemaDescription: 'Professional shadow creation and reflection rendering services. Drop shadows, cast shadows, and acrylic mirror reflections starting at $0.45/image. Next-day delivery.',
    beforeImage: '/Reflection-Service.jpg',
    afterImage: '/Reflection-Service-Done.jpg',
    order: 6,
    status: 'PUBLISHED'
  },
  {
    id: 's7',
    title: 'Beauty & Skin Retouch',
    slug: 'beauty-skin-retouching-service',
    shortDescription: 'High-end frequency separation and editorial skin retouching.',
    description: '<p>Preserve natural skin texture while eliminating blemishes. We use advanced editorial techniques for high-fashion results that look natural, not plastic. Our master retouchers employ micro-dodge-and-burn and meticulous frequency separation to ensure natural skin pores remain intact while correcting blotchiness, flyaway hairs, and harsh lighting. This level of granular control is mandatory for cosmetic campaigns and high-end magazine spreads.</p>',
    priceStarting: 2.00,
    priceUnit: 'image',
    turnaround: '24-48 hours',
    features: ['Frequency Separation', 'Advanced Dodge & Burn', 'Digital Makeup', 'Micro texture preservation'],
    pricingData: [
      { type: 'Basic', price: '$2.00/image', desc: 'Blemish removal, simple stray hairs' },
      { type: 'Standard', price: '$4.00/image', desc: 'Tone matching, basic dodge & burn' },
      { type: 'High-End', price: '$8.00/image', desc: 'Frequency separation, flawless macro detail' },
      { type: 'Editorial', price: '$15.00+/image', desc: 'Full digital makeup, pixel-level manipulation' }
    ],
    targetAudience: [
      'Cosmetics & Makeup Brands',
      'Fashion Magazines & Editorials',
      'High-End Portrait Photographers',
      'Talent & Model Agencies',
      'Skincare E-Commerce Stores',
      'Luxury Brand Campaigns'
    ],
    customFaqs: [
      { q: "What is frequency separation?", a: "It is an advanced Photoshop technique that separates the image color/tone data from its texture data. This allows us to surgically smooth under-eye bags or blotchiness without destroying the actual physical pores of the skin." },
      { q: "How fast can you retouch editorial beauty shots?", a: "Standard turnaround is 24-48 hours depending on volume and macro complexity. High-end magazine cover shots usually take the full 48 hours for flawless inspection." },
      { q: "Can you adjust digital makeup?", a: "Yes, we can naturally enhance lipstick shades, correct hard foundation lines, add eyelashes, or completely map entirely new makeup color palettes onto a subject seamlessly." },
      { q: "Will the skin look fake or plastic?", a: "Never. We strictly avoid automated 'blur' plugins or AI filters. All our beauty retouching is done manually to preserve 100% natural, realistic biometric textures." },
      { q: "Can I get a test edit for my magazine cover?", a: "Yes, you can upload up to 3 high-resolution RAW files and our art directors will return them fully retouched for free so you can evaluate our technical precision." }
    ],
    h2Title: 'High-End Beauty Retouching Workflows',
    schemaDescription: 'Master-level beauty and skin retouching using frequency separation and advanced dodge & burn. Editorial grade post-production starting at $2.00/image for cosmetics brands.',
    beforeImage: '/Beauty-Retouch-Service-Page.jpg',
    afterImage: '/Beauty-Retouch-Service-Page-Done.jpg',
    order: 7,
    status: 'PUBLISHED'
  },
  {
    id: 's8',
    title: 'Model Retouch',
    slug: 'model-retouching-service',
    shortDescription: 'Full-body fashion and editorial model enhancements.',
    description: '<p>Complete model post-production. From clothing wrinkle removal to body reshaping and overall color grading for editorial and fashion catalogs.</p>',
    priceStarting: 1.99,
    priceUnit: 'image',
    turnaround: '24-48 hours',
    features: ['Body contouring', 'Wrinkle removal', 'Eye & teeth brightening', 'Tone normalization'],
    beforeImage: '/Model-Retouch-1.jpg',
    afterImage: '/Model-Retouch-1-Done.jpg',
    order: 8,
    status: 'PUBLISHED'
  },
  {
    id: 's9',
    title: 'Product Retouch',
    slug: 'product-retouching-service',
    shortDescription: 'Commercial-grade clean-up for durable goods, tools, and electronics.',
    description: '<p>Make your physical products look absolutely flawless before they hit digital storefronts or print catalogs. We meticulously remove microscopic surface imperfections, manufacturing defects, fingerprints, and dust particles while optimizing micro-contrast for sharp, premium commercial appeal. Our specialists rebuild missing textures, neutralize harsh glares on metallic or glass surfaces, and ensure brand labels are perfectly legible and aligned. Your products will look exactly like they belong in a top-tier luxury advertisement.</p>',
    priceStarting: 0.99,
    priceUnit: 'image',
    turnaround: '12-24 hours',
    features: ['Micro-dust & scratch removal', 'Color and material matching', 'Perspective & lens correction', 'Label sharpening & enhancement'],
    pricingData: [
      { type: 'Basic', price: '$0.99/image', desc: 'Simple dust removal, contrast boosting' },
      { type: 'Standard', price: '$1.99/image', desc: 'Surface cleaning, minor defect repair' },
      { type: 'High-End', price: '$4.00/image', desc: 'Complex glare removal, label replacement' },
      { type: 'Complex Parts', price: '$8.00+/image', desc: 'Intricate electronics, highly reflective goods' }
    ],
    targetAudience: [
      'Industrial Manufacturers',
      'Consumer Electronics Brands',
      'High-End Furniture Retailers',
      'Hardware & Tool Suppliers',
      'Commercial Studio Photographers',
      'Amazon Vendor Central Partners'
    ],
    customFaqs: [
      { q: "Can you remove heavy reflections from glass or metal products?", a: "Yes, our team specializes in rebuilding gradients and masking out distracting reflections from highly polished materials like chrome, aluminum, or curved glass." },
      { q: "What if the label on the product was slightly torn or misaligned?", a: "We can electronically rebuild, straighten, and sharpen product labels. If you provide the vector artwork, we can even digitally map the perfect label onto the unedited physical product." },
      { q: "Do you handle color changes for different product SKUs?", a: "Absolutely. Instead of shooting 10 different colors of the same product, shoot it once. We will digitally recolor the master image to match all your physical product variations with 100% accuracy." },
      { q: "How do you handle extremely high-volume catalogs?", a: "We have dedicated teams for bulk processing. Clients sending 500+ images per week receive priority routing and dedicated art directors to ensure absolute batch consistency." }
    ],
    h2Title: 'Commercial Product Retouching Workflows',
    schemaDescription: 'Commercial-grade product retouching services for electronics, furniture, and durable goods. Flawless defect removal and glare reduction starting at $0.99/image. 24-hour delivery.',
    beforeImage: '/Product-Retouch-Service-Page.jpg',
    afterImage: '/Product-Retouch-Service-Page-Done.jpg',
    order: 9,
    status: 'PUBLISHED'
  },
  {
    id: 's10',
    title: 'Jewelry Retouch',
    slug: 'jewelry-retouching-service',
    shortDescription: 'High-clarity precision retouching for diamonds, gems, and metals.',
    description: '<p>Jewelry requires extreme attention to detail. We enhance the brilliance of gemstones and the luster of metals while removing microscopic imperfections.</p>',
    priceStarting: 2.00,
    priceUnit: 'image',
    turnaround: '24-48 hours',
    features: ['Stone brightening', 'Metal polishing', 'Reflection management', 'Focus stacking'],
    beforeImage: '/Jewlery-Retouch-5.jpg',
    afterImage: '/Jewlery-Retouch-5-Done.jpg',
    order: 10,
    status: 'PUBLISHED'
  },
  {
    id: 's11',
    title: 'Color Correction & Recoloring',
    slug: 'color-correction-service',
    shortDescription: 'Surgical color matching and digital recoloring for physical accuracy.',
    description: '<p>Color inaccuracies lead to massive e-commerce return rates. Prevent customer dissatisfaction with surgical, true-to-life color correction. Our editing pipeline mathematically aligns white balance, exposure, and hue to perfectly match your physical product references. We support both sRGB profiling for digital global marketplaces and strictly calibrated CMYK conversions for high-end print catalogues. Additionally, our digital recoloring workflow lets you photograph a single master SKU and have us mathematically generate every other colorway in your inventory without needing a massive reshoot.</p>',
    priceStarting: 0.50,
    priceUnit: 'image',
    turnaround: '12-24 hours',
    features: ['Pantone & Hexadecimal matching', 'Multi-SKU batch recoloring', 'sRGB/CMYK profile conversion', 'Pattern & texture preservation'],
    pricingData: [
      { type: 'Basic', price: '$0.50/image', desc: 'Global white balance, exposure, contrast' },
      { type: 'Standard', price: '$1.00/image', desc: 'Targeted hue shifting, selective grading' },
      { type: 'Digital Recolor', price: '$2.00/color', desc: 'Complete colorway generation from 1 master file' },
      { type: 'Complex Recolor', price: '$4.00+/image', desc: 'Complex patterns, transparent materials, reflections' }
    ],
    targetAudience: [
      'Apparel & Fashion Retailers',
      'Interior Design & Furniture Brands',
      'Textile Manufacturers',
      'Global E-Commerce Platforms',
      'Catalogue Publishers',
      'Automotive Dealerships'
    ],
    customFaqs: [
      { q: "Can you change the color of a specific object without affecting the background?", a: "Yes, we use precise manual clipping paths and alpha channel masking to isolate the exact item you want recolored, ensuring environmental lighting and shadows remain 100% natural." },
      { q: "How do you ensure color accuracy?", a: "We work on strictly calibrated studio monitors. If you provide specific Hex codes, RGB values, or Pantone references, our retouchers will mathematically grade the pixels to exactly match your specifications." },
      { q: "Can I use color correction instead of photographing all my product colors?", a: "Absolutely. This is a massive cost-saver for our clients. Simply shoot the product once in a neutral color (like white or grey), and we will digitally deploy your new seasonal palette across the master image." },
      { q: "Will recoloring destroy the fabric texture?", a: "Never. We use advanced luminance targeting and blending modes that only affect the color tone spectrum while preserving the intricate shadows, highlights, and physical weaves of the original material." }
    ],
    h2Title: 'Precision Color Correction Workflows',
    schemaDescription: 'Professional color correction and digital recoloring services. Pantone-accurate matching, exposure balancing, and Multi-SKU generation starting at $0.50/image. 24-hour delivery.',
    beforeImage: '/Color-Change.jpg',
    afterImage: '/Color-Change-Done.jpg',
    order: 11,
    status: 'PUBLISHED'
  },
  {
    id: 's12',
    title: 'Image Manipulation',
    slug: 'image-manipulation-service',
    shortDescription: 'Complex compositing and creative image transformations.',
    description: '<p>Transform your images into creative works of art. We expertly combine multiple elements, swap backgrounds, and manipulate reality for marketing and conceptual needs.</p>',
    priceStarting: 5.00,
    priceUnit: 'image',
    turnaround: '48-72 hours',
    features: ['Compositing', 'Creative background swapping', 'Object removal/addition', 'Conceptual art'],
    beforeImage: '/Image-Manipulation.jpg',
    afterImage: '/Image-Manipulation-Done.jpg',
    order: 12,
    status: 'PUBLISHED'
  },
  {
    id: 's13',
    title: 'Flatlay Retouch',
    slug: 'flatlay-photo-editing-service',
    shortDescription: 'Overhead product arrangement retouching for clean, symmetrical layouts.',
    description: '<p>Top-down flatlay photography is incredibly powerful for fashion and lifestyle marketing, but harsh shadows and fabric wrinkles are notoriously difficult to control in-camera. We optimize your overhead shots by mathematically aligning scattered elements perfectly to a central grid, ironing out distracting fabric creases, and cleaning up the negative space to establish a flawless, balanced aesthetic. Whether you are arranging raw cosmetics, a styled outfit, or complex stationery kits, our studio ensures crisp contrast, unified overhead lighting, and symmetrical perfection tailored for high-engagement social media campaigns and digital storefronts.</p>',
    priceStarting: 1.50,
    priceUnit: 'image',
    turnaround: '24 hours',
    features: ['Mathematical symmetry and grid alignment', 'Fabric wrinkle removal & digital pulling', 'Overhead shadow consolidation', 'Clean background extraction'],
    pricingData: [
      { type: 'Basic', price: '$1.50/image', desc: 'Simple 1-item alignment, background cleaning' },
      { type: 'Standard', price: '$2.50/image', desc: 'Fabric smoothing, shadow normalization' },
      { type: 'Complex Arrangement', price: '$4.50/image', desc: 'Multi-item grid mapping (3-7 styling items)' },
      { type: 'High-End Lifestyle', price: '$8.00+/image', desc: 'Massive layouts, complete fabric reshaping, digital styling' }
    ],
    targetAudience: [
      'Lifestyle & Fashion Retailers',
      'Cosmetic & Beauty Brands',
      'Food & Beverage Marketing',
      'Stationery & Gift Suppliers',
      'Social Media Advertising Agencies',
      'Boutique Craft Photographers'
    ],
    customFaqs: [
      { q: "Can you fix the layout if the items weren't aligned perfectly in-camera?", a: "Yes. Inherent lens distortion can make perfect 90-degree grids nearly impossible to shoot natively. We mathematically map and digitally reposition the physical items to create dead-straight, rigid symmetrical layouts." },
      { q: "Can you remove wrinkles from flatlay clothing?", a: "Absolutely. Flatlay apparel practically always suffers from bunched fabric or distracting creases. We digitally 'iron' the garments while maintaining the natural, attractive drape and weave texture." },
      { q: "Can you change the background surface of the flatlay?", a: "Yes. If your items were shot on plain white or grey paper, we can effortlessly extract them and drop them onto custom textures—like white marble, raw dark wood, or branded bold colors—while explicitly preserving the original, authentic drop shadows." },
      { q: "What's the difference between Flatlay and Ghost Mannequin?", a: "Flatlay is overhead, top-down styling where garments are laid out flat on a surface (popular on Instagram and boutique sites). Ghost mannequin shoots the garment upright, hollowed out as if being worn by an invisible 3D person (popular for massive retail technical catalogs)." }
    ],
    h2Title: 'Professional Flatlay Arrangement & Retouching',
    schemaDescription: 'Expert flatlay photography editing. Mathematical grid alignment, fabric wrinkle removal, and shadow consolidation starting at $1.50/image. Perfect for Instagram and Fashion E-Commerce.',
    beforeImage: '/Flatlay-1.jpg',
    afterImage: '/Flatlay-1-Done.jpg',
    order: 13,
    status: 'PUBLISHED'
  },
  {
    id: 's14',
    title: 'Multi Clipping Path',
    slug: 'multi-clipping-path-service',
    shortDescription: 'Modular paths for complex objects with multiple components or colors.',
    description: '<p>When you need to edit individual parts of an image. Multiple paths allow for color changes to specific sections without affecting the rest of the product.</p>',
    priceStarting: 1.50,
    priceUnit: 'image',
    turnaround: '24 hours',
    features: ['Isolated section control', 'Color-change ready', 'Multi-layer organization', 'Complex component mapping'],
    beforeImage: '/bg-removal.jpg',
    afterImage: '/bg-removal-done.jpg',
    order: 14,
    status: 'PUBLISHED'
  },
  {
    id: 's15',
    title: 'Real Estate Photo Editing',
    slug: 'real-estate-photo-editing',
    shortDescription: 'High-impact property enhancements for realtors and developers.',
    description: '<p>Stop losing high-value property leads to flat, uninspiring real estate photography. Dark, cluttered, or inherently distorted listing images ruin buyer intent before they even read the property specs. Our architectural editing team transforms your raw interior and exterior shots into massive, bright, perfectly-aligned masterpieces. We specialize in HDR bracket blending for perfect window clarity, absolute vertical lens alignment to stop buildings from looking warped, artificial sky replacement, lawn greening, and aggressive room decluttering to maximize the visual value of your multi-million dollar listings.</p>',
    priceStarting: 1.50,
    priceUnit: 'image',
    turnaround: '12-24 hours',
    features: ['Flawless HDR bracket blending', 'Artificial day-to-dusk conversion', 'Absolute vertical/horizontal architectural alignment', 'Aggressive room decluttering'],
    pricingData: [
      { type: 'Basic Grading', price: '$1.50/image', desc: 'Exposure blending, basic color tuning' },
      { type: 'HDR & Windows', price: '$2.50/image', desc: 'Advanced window pulling, vertical straightening' },
      { type: 'Exterior Enhancements', price: '$4.00/image', desc: 'Lawn greening, sky replacement, pool cleaning' },
      { type: 'Twilight Conversion', price: '$10.00+/image', desc: 'Complete day-to-night/dusk aesthetic overhaul' }
    ],
    targetAudience: [
      'Residential Real Estate Agencies',
      'Commercial Property Developers',
      'Architectural Photographers',
      'Interior Design Studios',
      'Airbnb & Vacation Rental Hosts',
      'Luxury Estate Brokers'
    ],
    customFaqs: [
      { q: "What is Day-to-Dusk (Twilight) conversion?", a: "This is a premium edit where we take a photo shot in the middle of a cloudy afternoon and mathematically manipulate the lighting, shadows, sky, and interior window glows to make it look like a stunning, inviting multi-million dollar twilight sunset." },
      { q: "Can you remove clutter from interior rooms?", a: "Absolutely. We routinely remove distracting objects like parked cars in driveways, power lines across roofs, family photos on walls, or entire pieces of ugly furniture dominating a cramped living space." },
      { q: "What does HDR blending mean?", a: "To show both a bright room AND what is outside the window simultaneously, photographers bracket multiple exposures (dark, medium, bright). We manually blend these 3-5 images into one perfect shot where both the dark corners and the bright windows are flawlessly exposed." },
      { q: "Can you fix leaning walls or warped rooms?", a: "Yes. Wide-angle lenses inevitably distort properties, making straight walls look like they are leaning backward. Our architectural team instantly snaps the perspective perfectly vertical, restoring the true towering dimensions of the property." }
    ],
    h2Title: 'Architectural & Real Estate Imaging Experts',
    schemaDescription: 'Expert real estate photo editing services for agencies and MLS listings. HDR blending, twilight conversion, sky replacement, and decluttering starting at $1.50/image. 24-hour delivery.',
    beforeImage: '/Real-Estate-Before.png',
    afterImage: '/Real-Estate-After.png',
    order: 15,
    status: 'PUBLISHED'
  },
  {
    id: 's16',
    title: 'Car Photo Editing',
    slug: 'car-photo-editing-service',
    shortDescription: 'Professional automotive retouching and showroom-ready finishes.',
    description: '<p>High-end retouching for car dealerships and collectors. We remove reflections, enhance metallic finishes, and place vehicles in clean digital showrooms.</p>',
    priceStarting: 3.00,
    priceUnit: 'image',
    turnaround: '24-48 hours',
    features: ['Reflection clean-up', 'Paint brightness boost', 'Tire/rim polishing', 'Showroom background swap'],
    beforeImage: '/Car-Before.jpg',
    afterImage: '/Car-After.jpg',
    order: 16,
    status: 'PUBLISHED'
  },
  {
    id: 's17',
    title: '360° Product Frame Editing',
    slug: '360-degree-product-photo-editing',
    shortDescription: 'High-volume, flicker-free batch editing for interactive 360° spinners.',
    description: '<p>A standard 360-degree interactive product spinner requires 36 to 72 individual photographic frames. If there is even a micro-millimeter of alignment wobble, a slight color shift, or an exposure flicker between those frames, the final interactive spin will look glitchy and amateurish. Our studio utilizes rigorous batch-processing workflows to guarantee absolute sub-pixel alignment, mathematically locked color grading, and hyper-consistent background removal across every single frame of your rotation sequence. We ensure your multi-frame spinners rotate effortlessly, boosting time-on-page and drastically reducing buyer hesitation for high-ticket items.</p>',
    priceStarting: 0.50,
    priceUnit: 'frame',
    turnaround: '48-72 hours',
    features: ['Anti-flicker exposure locking', 'Sub-pixel rotational alignment', 'Consistent multi-frame background extraction', 'Automated web-ready compression'],
    pricingData: [
      { type: 'Basic Sequence', price: '$0.50/frame', desc: 'White background extraction, basic color sync' },
      { type: 'Standard Sequence', price: '$0.90/frame', desc: 'Alignment correction, shadow stabilization' },
      { type: 'Complex Rotations', price: '$1.50/frame', desc: 'Reflective frames, complex metal/glass objects' },
      { type: 'Custom Spin Rigs', price: '$3.00+/frame', desc: 'Removing visible rig wires/mounts across all frames' }
    ],
    targetAudience: [
      'Footwear & Sneaker Retailers',
      'High-End Electronics Manufacturers',
      'Amazon A+ Premium Sellers',
      'Automotive Parts Distributors',
      'Interactive Web Design Agencies',
      'Luxury Watch Brands'
    ],
    customFaqs: [
      { q: "Why does my 360 spinner look like it's wobbling?", a: "Wobble occurs when the product wasn't perfectly centered on the turntable during shooting. We artificially fix this in post-production by mathematically aligning the center-axis of the product across all 36+ frames so it spins perfectly in place." },
      { q: "Why is exposure flickering happening in my spin sequence?", a: "Flicker happens when auto-exposure settings change slightly between shots, or studio strobes misfire. We use strict batch color-locking protocols to artificially force the exact same luminance value onto every single frame." },
      { q: "Can you edit out the turntable rig or wires holding the product?", a: "Yes. Many products (like floating shoes or bags) require physical rigs to stay upright during the spin. We meticulously clone out these wires or mounts frame-by-frame, ensuring the product looks like it is floating flawlessly." },
      { q: "Are the frames optimized for web?", a: "Absolutely. 360 viewers load dozens of images instantly. We aggressively compress the final PNG/JPG frames so your 360-player loads incredibly fast without pixelating the product detail." }
    ],
    h2Title: 'Anti-Wobble & Flicker-Free 360° Editing Workflows',
    schemaDescription: 'Professional editing for 360-degree interactive product spins. Sub-pixel rotational alignment, wire removal, and anti-flicker batch processing starting at $0.50/frame.',
    beforeImage: '/ECommerce.jpg',
    afterImage: '/ECommerce-Done.jpg',
    order: 17,
    status: 'PUBLISHED'
  },
  {
    id: 's18',
    title: 'Packshot Retouching',
    slug: 'packshot-retouching-service',
    shortDescription: 'Clean, standard product shots for retail and inventories.',
    description: '<p>Standardizing packshot images for e-commerce. Clean backgrounds, standard margins, and color-accurate representation for retail platforms.</p>',
    priceStarting: 0.99,
    priceUnit: 'image',
    turnaround: '12-24 hours',
    features: ['Shadow creation', 'Standardized centering', 'Label straightening', 'Batch processing'],
    beforeImage: '/ECommerce.jpg',
    afterImage: '/ECommerce-Done.jpg',
    order: 18,
    status: 'PUBLISHED'
  },
  {
    id: 's19',
    title: 'Image Web Optimization',
    slug: 'image-web-optimization-service',
    shortDescription: 'Lossless compression and WebP formatting to instantly boost your site speed and SEO.',
    description: '<p>Massive, unoptimized images are the absolute #1 cause of slow retail loading times, failing Core Web Vitals, and devastatingly high bounce rates. To maximize your e-commerce conversions, your catalog must load instantly. Our studio manually optimizes your entire visual database. We use advanced WebP/AVIF formatting and mathematical lossless compression algorithms to reduce your image file sizes by up to 80%—without a single pixel of visible degradation. We additionally generate dynamic responsive resolution arrays (1x, 2x, 3x retina) and can inject critical SEO Alt-Text metadata directly into your files so search engines rank your products higher.</p>',
    priceStarting: 0.25,
    priceUnit: 'image',
    turnaround: '12-24 hours',
    features: ['80% Lossless file size reduction', 'Next-gen WebP/AVIF formatting', 'Responsive retina scaling (1x, 2x, 3x)', 'SEO EXIF & Alt-Tag injection'],
    pricingData: [
      { type: 'Basic Compression', price: '$0.25/image', desc: 'Lossless compression, format standardization' },
      { type: 'Format Conversion', price: '$0.40/image', desc: 'Batch conversion from RAW/TIFF to lightweight WebP/AVIF' },
      { type: 'Responsive Arrays', price: '$0.80/image', desc: 'Generating 3 precise mobile/desktop sizes per master image' },
      { type: 'SEO Metadata', price: '$1.50/image', desc: 'Manual injection of keyword-rich Alt-Tags & EXIF data' }
    ],
    targetAudience: [
      'Shopify & WooCommerce Owners',
      'SEO & Performance Agencies',
      'Global E-Commerce Platforms',
      'Digital Marketing Agencies',
      'High-Traffic Lifestyle Blogs',
      'Core Web Vitals Consultants'
    ],
    customFaqs: [
      { q: "What is the difference between lossless and lossy compression?", a: "Lossy compression violently deletes pixel data to save space, which often causes ugly 'blocky' artifacts on your images. Lossless compression mathematically reorganizes the file data structure to save massive amounts of space without altering or deleting a single pixel from the visible image." },
      { q: "Why should I convert my JPGs to WebP or AVIF?", a: "WebP and AVIF are next-generation web image formats developed specifically for fast loading. A WebP image can be up to 30% smaller than a highly-optimized JPG while retaining the exact same visual quality—and they also support transparency layers like PNGs!" },
      { q: "Do you write SEO Alt-Tags for the images?", a: "Yes. In our premium SEO tier, we manually review the image subject and inject descriptive, keyword-rich Alt-text strings directly into the file metadata so screen readers and Google search crawlers properly index your specific products." },
      { q: "Can you batch process my entire 10,000 product catalog?", a: "Absolutely. We are built specifically for massive bulk pipeline tasks. Provide us temporary access to your server or FTP, and we will pull down, optimize, compress, and re-upload your entire catalog overnight." }
    ],
    h2Title: 'Advanced Image Compression & SEO Workflows',
    schemaDescription: 'Professional image web optimization services for e-commerce. Lossless compression, WebP conversions, and SEO metadata tagging starting at $0.25/image. 24-hour turnaround.',
    beforeImage: '/bg-removal.jpg',
    afterImage: '/bg-removal-done.jpg',
    order: 19,
    status: 'PUBLISHED'
  },
  {
    id: 's20',
    title: 'Photo Restoration',
    slug: 'photo-restoration-service',
    shortDescription: 'Bringing damaged, old, or faded photographs back to life.',
    description: '<p>Restore your precious memories. We repair cracks, remove stains, colorize monochrome shots, and rebuild missing parts of legacy photographs.</p>',
    priceStarting: 7.00,
    priceUnit: 'image',
    turnaround: '48-72 hours',
    features: ['Scratch/tear repair', 'Stain removal', 'Colorization', 'Detail reconstruction'],
    beforeImage: '/Photo-Restoration-Before.png',
    afterImage: '/Photo-Restoration-After.png',
    order: 20,
    status: 'PUBLISHED'
  }
];

export const portfolio = [
  { id: 'p1', title: 'Retail E-Commerce Batch', category: 'ecommerce-photo-editing', serviceName: 'E-Commerce', beforeImage: '/ECommerce.jpg', afterImage: '/ECommerce-Done.jpg', featured: true },
  { id: 'p1b', title: 'Apparel Consistency', category: 'ecommerce-photo-editing', serviceName: 'E-Commerce', beforeImage: '/Ghost-Mannequin-2-Raw.jpg', afterImage: '/Ghost-Mannequin-2-Done.jpg', featured: true },
  { id: 'p1c', title: 'Product Color Setup', category: 'ecommerce-photo-editing', serviceName: 'E-Commerce', beforeImage: '/Color-Change.jpg', afterImage: '/Color-Change-Done.jpg', featured: true },
  { id: 'p2', title: 'Luxury Furniture Cut-out', category: 'background-removal-service', serviceName: 'Background Removal', beforeImage: '/bg_removal_compare_before_1774788191480.png', afterImage: '/bg_removal_compare_after_1774788208396.png', featured: true },
  { id: 'p3', title: 'Vector Pen Tool Clipping', category: 'clipping-path-service', serviceName: 'Clipping Path', beforeImage: '/bg-removal.jpg', afterImage: '/bg-removal-done.jpg', featured: true },
  { id: 'p4', title: '3D Ghost Mannequin Denim', category: 'ghost-mannequin-service', serviceName: 'Ghost Mannequin', beforeImage: '/Ghost-Mannequin-2-Raw.jpg', afterImage: '/Ghost-Mannequin-2-Done.jpg', featured: true },
  { id: 'p5', title: 'Fine Hair Masking', category: 'image-masking-service', serviceName: 'Image Masking', beforeImage: '/Masking-Retouch-Service-3.jpg', afterImage: '/Masking-Retouch-Service-Done-3.jpg', featured: true },
  { id: 'p6', title: 'Reflection Shadow Finish', category: 'shadow-reflection-service', serviceName: 'Shadow & Reflection', beforeImage: '/Reflection-Service.jpg', afterImage: '/Reflection-Service-Done.jpg', featured: true },
  { id: 'p7', title: 'High-End Editorial Skin', category: 'beauty-skin-retouching-service', serviceName: 'Beauty Retouch', beforeImage: '/Beauty-Retouch-Service-Page.jpg', afterImage: '/Beauty-Retouch-Service-Page-Done.jpg', featured: true },
  { id: 'p8', title: 'Fashion Model Shoot', category: 'model-retouching-service', serviceName: 'Model Retouch', beforeImage: '/Model-Retouch-1.jpg', afterImage: '/Model-Retouch-1-Done.jpg', featured: true },
  { id: 'p9', title: 'Electronic Item Clean', category: 'product-retouching-service', serviceName: 'Product Retouch', beforeImage: '/Product-Retouch-Service-Page.jpg', afterImage: '/Product-Retouch-Service-Page-Done.jpg', featured: true },
  { id: 'p10', title: 'Jewelry Diamond Luster', category: 'jewelry-retouching-service', serviceName: 'Jewelry Retouch', beforeImage: '/Jewlery-Retouch-5.jpg', afterImage: '/Jewlery-Retouch-5-Done.jpg', featured: true },
  { id: 'p11', title: 'Product Color Correction', category: 'color-correction-service', serviceName: 'Color Correction', beforeImage: '/Color-Change.jpg', afterImage: '/Color-Change-Done.jpg', featured: true },
  { id: 'p12', title: 'Creative Background Swap', category: 'image-manipulation-service', serviceName: 'Image Manipulation', beforeImage: '/Image-Manipulation.jpg', afterImage: '/Image-Manipulation-Done.jpg', featured: true },
  { id: 'p13', title: 'Tabletop Flatlay Alignment', category: 'flatlay-photo-editing-service', serviceName: 'Flatlay Retouch', beforeImage: '/Flatlay-1.jpg', afterImage: '/Flatlay-1-Done.jpg', featured: true },
  { id: 'p15', title: 'Architecture HDR Blend', category: 'real-estate-photo-editing', serviceName: 'Real Estate', beforeImage: '/Real-Estate-Before.png', afterImage: '/Real-Estate-After.png', featured: true },
  { id: 'p20', title: 'Old Photograph Recovery', category: 'photo-restoration-service', serviceName: 'Photo Restoration', beforeImage: '/Photo-Restoration-Before.png', afterImage: '/Photo-Restoration-After.png', featured: true }
];

export const faqs = [
  { id: 'f1', question: 'What is your standard turnaround time?', answer: 'Most orders are delivered within 24 hours. Express options (12 hours) are available for urgent projects.', category: 'general' },
  { id: 'f2', question: 'Do you offer a free trial?', answer: 'Yes! You can upload up to 3 images for a free trial to evaluate our quality before placing a bulk order.', category: 'pricing' },
  { id: 'f3', question: 'What file formats do you accept?', answer: 'We accept all major formats including JPG, PNG, PSD, TIFF, and RAW files from all camera manufacturers.', category: 'technical' },
  { id: 'f4', question: 'Is my data secure with Blackfox?', answer: 'Absolutely. We maintain strict NDAs and use secure, encrypted servers for all file transfers. Your images are never shared with third parties.', category: 'security' }
];

export const testimonials = [
  { id: 't1', clientName: 'Sarah Jenkins', company: 'Luxe Fashion House', message: 'The quality of their ghost mannequin work is unparalleled. They saved our e-commerce catalog launch.', rating: 5, avatar: null },
  { id: 't2', clientName: 'Marco Rossi', company: 'Global Photo Agency', message: 'Reliable, fast, and surgical precision. Blackfox is our go-to partner for all volume retouching.', rating: 5, avatar: null }
];

export const teamMembers = [
  { id: 'tm1', name: 'Zahirul Islam', role: 'Head of Production', bio: '12+ years of experience in high-end retouching workflows.', avatar: null },
  { id: 'tm2', name: 'Emma Watson', role: 'Quality Control Lead', bio: 'Expert in pixel-perfect accuracy and brand guideline adherence.', avatar: null }
];

export const siteSettings = {
  siteName: "Blackfox Digital",
  copyright: "© 2026 BLACKFOX DIGITAL. All Rights Reserved.",
  logoUrl: "/logo.png",
  phone1: "(+88) 019 24 482 868",
  phone2: "(+88) 018 41 482 868",
  email: "info@theblackfoxstudio.com",
  addressHQ: "House 560, Road 08, Adabor, Dhaka 1207",

  facebookUrl: "https://www.facebook.com/theblackfoxstudio/",
  instagramUrl: "https://www.instagram.com/",
  linkedinUrl: "https://bd.linkedin.com/company/the-black-fox-studio",
  whatsappUrl: "https://wa.me/01924482868",
  youtubeUrl: "https://www.youtube.com/",
  teamsUrl: "https://teams.microsoft.com/"
};

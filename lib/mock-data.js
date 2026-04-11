export const services = [
  {
    id: 's1',
    title: 'E-Commerce Photo Editing',
    slug: 'ecommerce-photo-editing',
    shortDescription: 'E-commerce photo editing for Amazon, Shopify & eBay from $0.35/image. Marketplace-compliant backgrounds, color consistency, and 24-hour delivery on batches of any size.',
    description: '<p>Inconsistent product images are a silent revenue problem. Different lighting temperatures, varying crop ratios, backgrounds that almost-but-not-quite match — buyers notice, even if they can\'t articulate why. Marketplace algorithms notice too: Amazon and eBay have strict image compliance requirements that trigger listing suppression when not met.</p><p>We process your catalog as a batch, not as individual images. Every file is edited to the same white point, the same crop margin, the same output dimensions — so image 1 and image 1,000 look like they came from the same shoot. Background removal, color correction, and resize-to-spec are all handled in a single workflow, delivered in 24 hours regardless of volume.</p>',
    priceStarting: 0.35,
    priceUnit: 'image',
    turnaround: '24 hours',
    features: ['Batch consistency — image 1 matches image 1,000', 'Amazon & eBay compliant output, guaranteed', 'Background removal, color, crop in one workflow', 'Any volume — 50 or 50,000 images, 24-hour delivery'],
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
    h2Title: 'Why Catalog Consistency Matters — And How We Deliver It',
    schemaDescription: 'Outsource e-commerce photo editing for Amazon, Shopify, and eBay. Batch catalog processing with marketplace-compliant backgrounds and consistent color from $0.35/image. 24-hour delivery. White label available.',
    beforeImage: '/ECommerce.jpg',
    afterImage: '/ECommerce-Done.jpg',
    order: 1,
    status: 'PUBLISHED'
  },
  {
    id: 's2',
    title: 'Background Removal',
    slug: 'background-removal-service',
    shortDescription: 'Manual background removal from $0.29/image. Hand-drawn paths, Amazon-compliant pure white, 24-hour delivery.',
    description: '<p>Amazon rejects images with off-white backgrounds. Shopify listings with messy backgrounds get scrolled past. And AI background removal tools — however fast — leave ragged edges on anything complex: flyaway hair, translucent glass, fine jewelry, mechanical parts.</p><p>Our editors use hand-drawn Pen Tool paths and advanced alpha-channel masking for every image. Not AI. Not automation. Each subject is traced by a specialist, edge by edge, so your final files have razor-sharp silhouettes at full resolution — compliant with marketplace standards, ready for print, and consistent across your entire catalog.</p><p>From a single hero shot to a 10,000-image batch, every file goes through multi-tier QC before delivery. Pure white (RGB 255,255,255) for Amazon, transparent PNG for layered compositing, or layered PSD for post-production flexibility — we deliver in whatever format your workflow requires.</p>',
    priceStarting: 0.29,
    priceUnit: 'image',
    turnaround: '12-24 hours',
    features: ['100% manual Pen Tool — no AI, no ragged edges', 'Alpha masking for hair, fur, and translucent subjects', 'Pure white RGB 255,255,255 — Amazon & marketplace compliant', 'PNG, PSD, TIFF or JPEG — any format your workflow needs'],
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
    h2Title: 'Why AI Background Removal Falls Short — And What We Do Instead',
    schemaDescription: 'Outsource background removal to professional retouchers. Hand-drawn clipping paths and alpha channel masking for Amazon, Shopify, and print agencies starting at $0.29/image. 24-hour delivery. Bulk orders welcome. Free trial available.',
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
    shortDescription: 'Clipping path service from $0.25/image. Hand-drawn Pen Tool paths for precise product isolation — e-commerce, print, and advertising. Bulk orders welcome. 24-hour delivery.',
    schemaDescription: 'Professional clipping path service from $0.25/image. Hand-drawn Pen Tool paths in Photoshop for pixel-perfect product isolation. Bulk orders, white label, and agency pricing available. 24-hour delivery worldwide.',
    description: '<p>A clipping path is a hand-drawn vector outline — traced with the Pen Tool in Photoshop — that cuts a subject cleanly away from its background. It\'s the foundation of every e-commerce product image, advertising composite, and print catalog. The difference between a clipping path done well and one done poorly shows at full resolution: one has a clean, anti-aliased edge that holds up in print; the other has jagged artifacts or overcut edges that look cheap on screen.</p><p>We draw every path by hand — no AI, no automated selection tools. Basic geometric products start at $0.25/image; complex shapes with curves and fine detail go up from there. Files are delivered in PSD, PNG, TIFF, or JPEG — whatever your production workflow requires. Free trial: 10 images, no credit card, 24 hours.</p>',
    priceStarting: 0.25,
    priceUnit: 'image',
    turnaround: '24 hours',
    features: ['100% hand-drawn Pen Tool — no auto-select, no AI', 'Clean anti-aliased edges at full print resolution', 'Multiple nested paths for complex multi-part products', 'PSD, PNG, TIFF or JPEG — your format, your workflow'],
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
    h2Title: 'What Makes a Good Clipping Path — And Why It Matters at Scale',
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
    shortDescription: 'Ghost mannequin & neck joint service from $0.75/image. 3D hollow apparel visuals for fashion e-commerce — no models, no flat lays. 12–24 hour delivery.',
    description: '<p>Hiring a live model costs hundreds per hour. A flat lay looks lifeless. Ghost mannequin — also called invisible mannequin or neck joint — is how high-volume fashion brands get the professional 3D structure buyers expect, without either expense. We take your exterior shot and a secondary inside-collar photo, stitch them together, and remove the mannequin completely. What you get is a dimensional, hollow garment that shows off fit, cut, and construction exactly as a customer would see it on their body.</p><p>Every edit includes wrinkle removal, left/right symmetry correction, and clean brand tag preservation — standard. If you supply a single master colorway, we can duplicate and digitally recolor the finished garment into every SKU in your range, eliminating the need for multiple shoots. From basic t-shirts to structured outerwear and sheer lingerie, our specialist team handles the full complexity range at scale.</p>',
    priceStarting: 0.75,
    priceUnit: 'image',
    turnaround: '12-24 hours',
    features: ['3D hollow neck-joint — mannequin removed completely', 'Wrinkle removal & symmetry correction included', 'Inner collar & brand tag preserved clean', 'Single-shoot colorway duplication for full SKU range'],
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
    h2Title: 'How Ghost Mannequin Works — And What You Get Back',
    schemaDescription: 'Ghost mannequin and neck joint retouching for fashion e-commerce from $0.75/image. Dimensional 3D hollow apparel visuals, wrinkle removal, and multi-SKU colorway duplication. 12–24 hour delivery.',
    beforeImage: '/Ghost-Mannequin-2-Raw.jpg',
    afterImage: '/Ghost-Mannequin-2-Done.jpg',
    order: 4,
    status: 'PUBLISHED'
  },
  {
    id: 's5',
    title: 'Image Masking',
    slug: 'image-masking-service',
    shortDescription: 'Image masking for hair, fur, glass, and transparent subjects from $0.75/image. Alpha channel extraction where a clipping path would destroy the edge. 24-hour delivery.',
    description: '<p>A clipping path draws a hard vector outline. That works perfectly for products with clean edges — bottles, shoes, electronics. But hair has hundreds of individual strands. Fur blends into the background pixel by pixel. Glass is semi-transparent. A hard path around any of these creates a plastic-looking cutout that immediately signals cheap post-production.</p><p>Image masking uses luminance data instead of vector geometry — it reads the actual pixel values at the edge to extract the subject without destroying what makes it look real. We use alpha channel masking for fine hair and flyaway strands, layer masking for non-destructive multi-element work, and Refine Edge / Select & Mask for high-resolution fashion and beauty composites. The result is a clean extraction that holds at full print resolution, on any background.</p>',
    priceStarting: 0.75,
    priceUnit: 'image',
    turnaround: '24 hours',
    features: ['Alpha channel masking — luminance-based, not vector', 'Individual hair & fur strands preserved at full resolution', 'Glass, smoke & transparency isolated without halo artifacts', 'Zero fringing — Decontaminate Colors applied on every mask'],
    pricingData: [
      { type: 'Basic Layer Mask', price: '$0.75/image', desc: 'Simple soft-edge products, basic transparency' },
      { type: 'Hair & Fur Masking', price: '$1.50/image', desc: 'Portrait hair, animal fur, flyaway strands' },
      { type: 'Complex Transparency', price: '$2.50/image', desc: 'Glass, smoke, motion blur, sheer fabrics' },
      { type: 'Multi-Layer Composite', price: '$4.00+/image', desc: 'Multiple isolated elements, studio composites' }
    ],
    targetAudience: [
      'Fashion & Beauty Photographers',
      'Cosmetics & Hair Care Brands',
      'Pet Product E-Commerce',
      'Advertising & Creative Agencies',
      'Portrait & Wedding Studios',
      'High-Volume Product Catalogues'
    ],
    customFaqs: [
      { q: "What is the difference between a clipping path and image masking?", a: "A clipping path uses a rigid vector pen tool — it's ideal for hard-edged products like bottles, shoes, or electronics. Image masking uses pixel-level luminance data to preserve soft, complex edges like individual hair strands, fur, smoke, and transparent materials that a hard vector path would completely destroy." },
      { q: "Can you mask out a model's hair on a busy background?", a: "Yes. This is our most requested masking job. Using advanced Refine Edge and Alpha Channel techniques, we isolate every individual flyaway strand — even fine baby hairs — and perfectly place the model on a clean white, colored, or lifestyle background without any halo or fringing artifacts." },
      { q: "Can you mask transparent or semi-transparent objects like glass?", a: "Absolutely. Transparent glass, crystal, smoke, and liquids require luminance-based alpha masking — not a clipping path. We preserve the partial transparency of the object so it looks completely natural when placed on any new background." },
      { q: "Will the masked edges look natural or will I see a white fringe?", a: "Fringing and haloing are the number one sign of poor masking. Our editors use Decontaminate Colors and manual color correction on the mask edge to ensure zero color bleeding or fringing, regardless of the original background color." },
      { q: "Do you offer free tests for image masking?", a: "Yes. Submit up to 5 complex masking images for free as part of our standard free trial. No credit card required. Delivered within 24 hours." }
    ],
    h2Title: 'When a Clipping Path Isn\'t Enough — Image Masking Explained',
    schemaDescription: 'Professional image masking for hair, fur, glass, and transparent subjects. Alpha channel extraction and Refine Edge workflows from $0.75/image. 24-hour delivery. Trusted by 500+ global brands.',
    beforeImage: '/Masking-Retouch-Service-3.jpg',
    afterImage: '/Masking-Retouch-Service-Done-3.jpg',
    order: 5,
    status: 'PUBLISHED'
  },
  {
    id: 's6',
    title: 'Shadow Creation & Reflection',
    slug: 'shadow-reflection-service',
    shortDescription: 'Drop shadow creation and mirror reflection rendering from $0.45/image. Natural product grounding for e-commerce and print — drop shadows, cast shadows, and acrylic reflections.',
    description: '<p>A product cut out against pure white with no shadow looks like it was floating in nothing. That visual disconnect — however subtle — signals to buyers that the image is cheap and processed. Shadows and reflections are what make a product look like it\'s physically sitting somewhere, and that sense of presence affects purchasing confidence.</p><p>We create drop shadows from scratch, retain and clean up shadows captured in-studio, build directional cast shadows for 3D depth, and render acrylic mirror reflections for cosmetics, footwear, and electronics. If your existing catalog has inconsistent shadows across 500 images, we standardize them as a batch. From $0.45/image for a basic ambient drop shadow to $2.00 for a full mirror reflection with fade.</p>',
    priceStarting: 0.45,
    priceUnit: 'image',
    turnaround: '12-24 hours',
    features: ['Natural drop shadows — ambient, directional, or cast', 'Acrylic mirror reflection rendering for premium catalogs', 'Original studio shadow retained and cleaned up', 'Batch shadow standardization across inconsistent catalogs'],
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
    h2Title: 'Why Product Shadows Matter — And How We Create Them',
    schemaDescription: 'Professional drop shadow creation and mirror reflection rendering for e-commerce and print. Natural shadows, cast shadows, and acrylic reflections from $0.45/image. Next-day delivery.',
    beforeImage: '/Reflection-Service.jpg',
    afterImage: '/Reflection-Service-Done.jpg',
    order: 6,
    status: 'PUBLISHED'
  },
  {
    id: 's7',
    title: 'Beauty & Skin Retouch',
    slug: 'beauty-skin-retouching-service',
    shortDescription: 'Beauty and skin retouching from $2.00/image. Frequency separation and dodge & burn — blemishes removed, texture preserved. Editorial-grade results for cosmetics, fashion, and print.',
    description: '<p>There are two ways to retouch skin. The first is to blur it — fast, cheap, and immediately obvious. AI filters and automated smoothing tools do this, and the result is a plastic, poreless look that kills credibility in any premium context. The second is frequency separation: separating the color and tone of the skin from its physical texture, then correcting each layer independently. That\'s what we use.</p><p>Frequency separation lets us remove blemishes, even out redness, and clean up blotchy tones without touching the underlying pore structure. Combined with manual dodge and burn for lighting correction, the result looks like the model simply had better skin on that day — not like someone ran a filter. From basic blemish removal to full editorial retouching for campaign imagery and magazine covers, we work to your brief and your brand standard.</p>',
    priceStarting: 2.00,
    priceUnit: 'image',
    turnaround: '24-48 hours',
    features: ['Frequency separation — texture preserved while tone is corrected', 'Manual dodge & burn for precise lighting correction', 'No blur filters, no AI — every edit done by hand', 'Digital makeup: shade adjustments, lash enhancement, color mapping'],
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
    h2Title: 'Why Frequency Separation Beats Every Other Skin Retouching Method',
    schemaDescription: 'Beauty and skin retouching using frequency separation and dodge & burn. Editorial-grade post-production for cosmetics campaigns, fashion editorials, and magazine work from $2.00/image.',
    beforeImage: '/Beauty-Retouch-Service-Page.jpg',
    afterImage: '/Beauty-Retouch-Service-Page-Done.jpg',
    order: 7,
    status: 'PUBLISHED'
  },
  {
    id: 's8',
    title: 'Fashion Model Retouching',
    slug: 'model-retouching-service',
    shortDescription: 'Fashion model retouching from $1.99/image. Garment wrinkle removal, skin tone correction, flyaway hair cleanup. Natural results for apparel e-commerce and editorial.',
    description: '<p>A model shoot costs hundreds or thousands to execute. The images have to perform. Wrinkled garments, inconsistent skin tones across a 500-image catalog, flyaway hair around the face — these are fixable in post, but only if the retouching is done without making it obvious that anything was touched.</p><p>We specialize in full-body fashion retouching that stays within the natural. Garment digital ironing, skin tone normalization across diverse skin tones and lighting conditions, hair cleanup, and eye/teeth brightening — all done to your brand guidelines, not our defaults. If your brand requires zero body reshaping, that\'s our default. If you need clothing recolored from one master shoot into multiple SKUs, we handle that too. Delivered in 24–48 hours.</p>',
    priceStarting: 1.99,
    priceUnit: 'image',
    turnaround: '24-48 hours',
    features: ['Garment digital ironing — wrinkles removed, drape preserved', 'Skin tone normalization across diverse models and lighting', 'Flyaway hair cleanup without destroying the natural look', 'Clothing recoloring for multi-SKU generation from one shoot'],
    pricingData: [
      { type: 'Basic Clean-Up', price: '$1.99/image', desc: 'Blemish removal, basic skin smoothing, teeth brightening' },
      { type: 'Garment Focus', price: '$3.50/image', desc: 'Extensive fabric wrinkle ironing, clothing reshaping' },
      { type: 'Full Editorial', price: '$6.00/image', desc: 'Complex hair cleanup, detailed dodge & burn, body contouring' },
      { type: 'High-Fashion Cover', price: '$12.00+/image', desc: 'Pixel-level beauty separation, complex digital makeup' }
    ],
    targetAudience: [
      'Apparel & Fast Fashion Labels',
      'Commercial Portrait Photographers',
      'Modeling & Talent Agencies',
      'Activewear & Athleisure Boutiques',
      'Editorial Publishers & Magazines',
      'Swimwear & Lingerie Brands'
    ],
    customFaqs: [
      { q: "Do you mathematically alter or reshape the model's body?", a: "We only perform body contouring or reshaping (liquify) if explicitly requested in your brand's strict guidelines. Many modern brands prefer zero body alteration, so our standard workflow focuses entirely on lighting, skin tone normalization, and garment wrinkle removal." },
      { q: "Will the skin look overly airbrushed or plastic?", a: "Never. We utilize high-end frequency separation techniques. This completely detaches the 'color' of the skin from the 'texture', allowing us to mathematically remove redness and blotches while keeping the exact, natural, microscopic pores of the human skin completely intact." },
      { q: "Can you fix messy or flyaway hair?", a: "Yes. Hair cleanup is a massive part of model retouching. We meticulously remove distracting flyaway strands around the face and use advanced cloning to fill in gaps or smooth out frizzy perimeters against the pristine studio background." },
      { q: "Can you change the color of the clothing the model is wearing?", a: "Absolutely. Instead of shooting the model in 5 different colored shirts, shoot it once. We will digitally execute perfect color-change masking to mathematically generate the remaining 4 SKUs flawlessly." }
    ],
    h2Title: 'What Fashion Model Retouching Should (and Shouldn\'t) Do',
    schemaDescription: 'Fashion model retouching for apparel e-commerce and editorial. Garment wrinkle removal, skin tone normalization, and flyaway hair cleanup from $1.99/image. 24–48 hour delivery.',
    beforeImage: '/Model-Retouch-1.jpg',
    afterImage: '/Model-Retouch-1-Done.jpg',
    order: 8,
    status: 'PUBLISHED'
  },
  {
    id: 's9',
    title: 'Product Retouch',
    slug: 'product-retouching-service',
    shortDescription: 'Product photo retouching from $0.99/image. Dust removal, glare reduction, label correction, and surface defect repair for electronics, furniture, hardware, and consumer goods.',
    description: '<p>Manufacturing is imperfect. Studio lighting reveals everything a QC pass missed — dust on the lens, a fingerprint on the surface, a faint scratch, glare from a strobe sitting in the wrong place. On a product page, those imperfections read as cheap. They cost conversions before the price is even visible.</p><p>We clean up product images at the micro level: dust and scratches removed, metallic and glass glare rebuilt as smooth gradients, labels straightened and sharpened, surface defects cloned out. For high-volume catalogs with consistent problems — the same glare in the same position across 500 images — we standardize the fix as a batch process. From basic cleanup at $0.99 to complex reflective goods at $8.00+, delivered in 12–24 hours.</p>',
    priceStarting: 0.99,
    priceUnit: 'image',
    turnaround: '12-24 hours',
    features: ['Dust, fingerprints & scratch removal at macro resolution', 'Metal and glass glare rebuilt as smooth gradients', 'Label realignment and text sharpening', 'Batch defect standardization across high-volume catalogs'],
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
    h2Title: 'What Product Retouching Fixes — And Why It Affects Sales',
    schemaDescription: 'Product photo retouching for electronics, furniture, hardware, and consumer goods. Defect removal, glare reduction, and label correction from $0.99/image. 12–24 hour delivery.',
    beforeImage: '/Product-Retouch-Service-Page.jpg',
    afterImage: '/Product-Retouch-Service-Page-Done.jpg',
    order: 9,
    status: 'PUBLISHED'
  },
  {
    id: 's10',
    title: 'High-End Jewelry Retouching',
    slug: 'jewelry-retouching-service',
    shortDescription: 'Jewelry photo retouching from $2.00/image. Diamond facet enhancement, metal polish, camera reflection removal, and focus stacking. 24–48 hour delivery.',
    description: '<p>Macro photography catches everything — the camera reflected in the band, the dust speck on the prong, the fingerprint on the stone. What looks passable on a light table is disqualifying on a product page. Jewelry buyers are making high-consideration decisions from a screen; the image has to be flawless. Our retouchers rebuild smooth metallic gradients across gold, platinum, and silver, individually dodge and burn each diamond facet to restore brilliance, and remove every studio reflection without leaving visible cloning artifacts.</p><p>For multi-stone pieces and watches, we handle focus stacking — combining 10–20 exposures shot at different focal depths into a single image where the front stone and the back clasp are both pin-sharp. We also do metal recoloring: shoot yellow gold once, and we deliver yellow, rose, and white gold variants from that single master — no reshoots needed. From simple pendants to complex high-end watches, the result is product imagery that matches the price point.</p>',
    priceStarting: 2.00,
    priceUnit: 'image',
    turnaround: '24-48 hours',
    features: ['Diamond & gemstone facet dodge-and-burn', 'Metal gradient rebuild — reflections removed', 'Focus stacking for fully sharp macro shots', 'Gold recoloring: yellow → rose → white, one shoot'],
    pricingData: [
      { type: 'Simple Metal & Stones', price: '$2.00/image', desc: 'Basic sterling bands, simple pendants, basic dust removal' },
      { type: 'Diamond Rings', price: '$4.50/image', desc: 'Multi-facet dodge & burn, prong cleanup, band polishing' },
      { type: 'Complex Bracelets', price: '$8.00/image', desc: 'Intricate chains, massive multi-stone necklaces' },
      { type: 'High-End Watches', price: '$15.00+/image', desc: 'Dial cleanup, bezel reflection removal, strict focus stacking' }
    ],
    targetAudience: [
      'Luxury Jewelry Boutiques',
      'High-End Watch Manufacturers',
      'Bridal & Engagement Retailers',
      'Artisan Silversmiths',
      'Catalogue & Print Publishers',
      'Macro Product Photographers'
    ],
    customFaqs: [
      { q: "What is Focus Stacking for jewelry?", a: "When shooting extreme macro photography, it is physically impossible to get the entire ring in focus at once due to shallow depth-of-field. Photographers shoot 10+ different photos, focusing on different 'slices' of the ring. We digitally 'stack' these images together into one single masterpiece where the front diamond and the back of the band are both 100% razor-sharp." },
      { q: "How do you make diamonds look brighter?", a: "Raw photos of diamonds often look dark, dull, and grey because they reflect the dark studio ceiling. We meticulously dodge and burn individual diamond facets and manipulate the contrast curves to manually inject brilliant white light and sharp micro-contrast back into the stone." },
      { q: "Can you change yellow gold into rose gold or white gold?", a: "Yes. Rather than shooting a ring 3 times, shoot it once. We can mathematically recolor the master image from Yellow Gold to Rose Gold, Platinum, or Sterling Silver with 100% realistic accuracy, saving you massive photography costs." },
      { q: "Do you remove the camera reflection from the shiny metal?", a: "Always. The biggest issue with jewelry photography is seeing the black camera lens reflected in the highly polished ring band. We aggressively clone this out and rebuild a smooth, perfect metallic gradient across the surface so it looks pristine." }
    ],
    h2Title: 'What Jewelry Retouching Actually Fixes — And Why It Matters',
    schemaDescription: 'Professional jewelry photo retouching for luxury e-commerce and print. Diamond facet enhancement, metal polishing, studio reflection removal, and focus stacking from $2.00/image. 24–48 hour delivery.',
    beforeImage: '/Jewlery-Retouch-5.jpg',
    afterImage: '/Jewlery-Retouch-5-Done.jpg',
    order: 10,
    status: 'PUBLISHED'
  },
  {
    id: 's11',
    title: 'Color Correction & Recoloring',
    slug: 'color-correction-service',
    shortDescription: 'Color correction and digital recoloring from $0.50/image. Pantone-accurate matching for e-commerce and print. Shoot one colorway — we generate the rest.',
    description: '<p>Color is the single biggest driver of e-commerce returns. A buyer orders based on what they see on screen; if the delivered product is even slightly off, that\'s a return. The problem starts in photography — studio strobes shift white balance, different cameras interpret color differently, and screens that haven\'t been calibrated show one thing while print renders another.</p><p>We correct to the actual physical product. If you provide a Pantone reference, Hex code, or physical sample description, we match to it on calibrated monitors and deliver in the right color profile — sRGB for digital marketplaces, CMYK for print. The bigger cost-saver: shoot one master SKU once. We digitally generate every other colorway in your range from that single image, preserving texture, shadows, and material character. $2.00 per color variant is significantly cheaper than scheduling a new shoot.</p>',
    priceStarting: 0.50,
    priceUnit: 'image',
    turnaround: '12-24 hours',
    features: ['Pantone, Hex, and RGB-accurate color matching', 'Multi-SKU colorway generation from one master image', 'sRGB for digital, CMYK for print — correct profile every time', 'Texture, shadow, and material character preserved on recolors'],
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
    h2Title: 'Color Correction, Calibration, and SKU Generation — How It Works',
    schemaDescription: 'Color correction and digital recoloring for e-commerce and print. Pantone-accurate matching, sRGB/CMYK profiling, and multi-SKU colorway generation from $0.50/image. 24-hour delivery.',
    beforeImage: '/Color-Change.jpg',
    afterImage: '/Color-Change-Done.jpg',
    order: 11,
    status: 'PUBLISHED'
  },
  {
    id: 's12',
    title: 'Image Manipulation & Compositing',
    slug: 'image-manipulation-service',
    shortDescription: 'Image compositing and manipulation from $5.00/image. Product placement into lifestyle scenes, background replacement, and multi-image composites for advertising and creative campaigns.',
    description: '<p>Not every image can be captured in a single shot. A product needs to appear in a context you can\'t physically set up. A background needs to change to fit a regional campaign. A person needs to be removed from an otherwise perfect team photo. These are compositing problems — and they require a different skill set than standard retouching.</p><p>We build multi-image composites for advertising, place products into lifestyle environments with matched lighting and shadows, swap backgrounds while preserving the subject\'s edge lighting, and remove objects or people from scenes convincingly. The measure of good compositing is that no one notices it happened. Turnaround is 48–72 hours for complex work; simpler background replacements and object removals are typically 24 hours.</p>',
    priceStarting: 5.00,
    priceUnit: 'image',
    turnaround: '48-72 hours',
    features: ['Multi-image compositing with matched light sources', 'Product placement into lifestyle environments', 'Background replacement with edge lighting preserved', 'Object and person removal with background reconstruction'],
    pricingData: [
      { type: 'Complex Removal', price: '$5.00/image', desc: 'Removing large foreground objects or people' },
      { type: 'Background Replacement', price: '$12.00/image', desc: 'Swapping backgrounds, matching ambient edge lighting' },
      { type: 'Product Insertion', price: '$25.00/image', desc: 'Placing 3D/2D products into lifestyle environments' },
      { type: 'Concept Compositing', price: '$50.00+/image', desc: 'Building entire cinematic scenes from multiple raw assets' }
    ],
    targetAudience: [
      'Advertising & Marketing Agencies',
      'Commercial Print Publishers',
      'Creative Directors & Art Buyers',
      'Movie Poster & Key-Art Designers',
      'Automotive Advertising Boards',
      'High-End Fashion Editorials'
    ],
    customFaqs: [
      { q: "What exactly is Image Compositing?", a: "Compositing is the highly advanced technique of taking multiple different photographs—often shot in totally different lighting or locations—and seamlessly blending them together into one single, realistic image without looking 'photoshopped' or artificially placed." },
      { q: "Can you insert my product photo into a luxury lifestyle background?", a: "Yes. If you shoot your product on a white studio background, we can digitally extract it, map the 3D perspective, and implant it onto a luxury marble kitchen counter or a tropical beach, completely manually painting the environmental lighting and shadows to make it look 100% native." },
      { q: "How do you make lighting match if the photos are from different sources?", a: "This is the hardest part of compositing. Our art directors manually recreate shadows, adjust exposure curves, and force directional light casting to visually unify all the disparate elements so they look naturally lit by the exact same sun or studio strobe." },
      { q: "Can you remove a specific person from a group corporate photo?", a: "Absolutely. We routinely remove ex-employees from expensive corporate team photographs. We carefully reconstruct the background (walls, furniture, or other people) where the removed person was originally standing so the photo looks completely untouched and whole." }
    ],
    h2Title: 'When Retouching Isn\'t Enough — What Compositing Solves',
    schemaDescription: 'Image manipulation and compositing for advertising, product placement, and creative campaigns. Background replacement, lifestyle environment insertion, and object removal from $5.00/image.',
    beforeImage: '/Image-Manipulation.jpg',
    afterImage: '/Image-Manipulation-Done.jpg',
    order: 12,
    status: 'PUBLISHED'
  },
  {
    id: 's13',
    title: 'Flatlay Retouch',
    slug: 'flatlay-photo-editing-service',
    shortDescription: 'Flatlay photo editing from $1.50/image. Grid alignment, wrinkle removal, and background replacement for fashion, lifestyle, and Instagram campaigns.',
    description: '<p>Flatlay photography is popular because it\'s versatile — but it\'s harder to execute cleanly than it looks. Wide-angle lens distortion makes straight grids curve at the edges. Fabric bunches and creases even after careful styling. Shadows from overhead lighting fall inconsistently across multiple items. What looked balanced in the studio looks off on screen.</p><p>We fix the geometry — realigning items to a true grid, correcting lens distortion, balancing the negative space. We digitally iron fabric without flattening the texture. We clean up shadows and consolidate the overhead light to feel unified. If you need the background replaced entirely — wood grain swapped for marble, white paper swapped for a brand color — we handle that too. From $1.50 for a single-item layout, delivered in 24 hours.</p>',
    priceStarting: 1.50,
    priceUnit: 'image',
    turnaround: '24 hours',
    features: ['Lens distortion correction and true grid alignment', 'Fabric digital ironing — texture preserved, creases removed', 'Overhead shadow consolidation for unified lighting', 'Background replacement: marble, wood, brand colors, white'],
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
    h2Title: 'What Makes a Flatlay Look Polished — And How We Get There',
    schemaDescription: 'Flatlay photo editing for fashion, lifestyle, and Instagram. Grid alignment, lens distortion correction, fabric wrinkle removal, and background replacement from $1.50/image. 24-hour delivery.',
    beforeImage: '/Flatlay-1.jpg',
    afterImage: '/Flatlay-1-Done.jpg',
    order: 13,
    status: 'PUBLISHED'
  },
  {
    id: 's14',
    title: 'Multi-Clipping Path & Masking',
    slug: 'multi-clipping-path-service',
    shortDescription: 'Multi-clipping path from $1.50/image. Separate component isolation for colorway SKU generation — shoot once, generate every variant in Photoshop.',
    description: '<p>A clipping path removes the background. A multi-clipping path goes further — it isolates every individual component of the product into its own named layer. The laces. The sole. The leather body. The logo. Each one on a separate path, so your design team can fill each component with a different color independently, in Photoshop, without touching the others.</p><p>This is how high-volume footwear and apparel brands generate 20 colorway variants from a single master shoot. Instead of booking studio time 20 times, you shoot once. We draw the multi-paths, organize the PSD with clearly labeled layer groups (Left_Sleeve, Right_Lace, Rubber_Sole), and your team drops in the color fills. Files delivered in full-resolution PSD or TIFF, ready to work without sorting through unnamed layers.</p>',
    priceStarting: 1.50,
    priceUnit: 'image',
    turnaround: '12-24 hours',
    features: ['Every component isolated on its own named vector path', 'Organized PSD with labeled layer groups, ready to work', 'Generate 20+ colorways from a single master shoot', 'Works on apparel, footwear, furniture, and multi-part products'],
    pricingData: [
      { type: 'Basic Multipath', price: '$1.50/image', desc: 'Isolating 2-3 simple parts (e.g. shirt + single logo)' },
      { type: 'Standard Apparel', price: '$2.50/image', desc: 'Isolating 4-6 parts (jackets, multi-colored fabrics)' },
      { type: 'Complex Footwear', price: '$5.00/image', desc: 'Isolating 7-12 parts (sneaker soles, laces, mesh, leather)' },
      { type: 'Heavy Machinery', price: '$10.00+/image', desc: 'Isolating 15+ intricate mechanical parts (engines, bicycles)' }
    ],
    targetAudience: [
      'Athletic Sneaker & Footwear Brands',
      'Fast-Fashion E-Commerce Labels',
      'Apparel & Garment Manufacturers',
      'Furniture & Interior Design Studios',
      'High-Volume Product Photographers',
      'Custom Promotional Goods Suppliers'
    ],
    customFaqs: [
      { q: "What is the exact difference between a basic Clipping Path and a Multi-Clipping Path?", a: "A basic clipping path is just a single outline around the exterior of a product solely to remove it from the background. A Multi-Clipping Path isolates the background, AND ALSO draws completely separate paths around the sleeves, the collar, the buttons, and the logo, so that every piece can be edited individually." },
      { q: "Why do e-commerce brands use this for colorways?", a: "It saves thousands in photography. If you sell a shoe in 20 different color variations, you only need to photograph the shoe once. We draw a multi-path isolating the laces, suede, and rubber. Your team can then drop 20 different color fills into those exact paths in Photoshop to mathematically generate your entire catalog." },
      { q: "How are the raw files delivered?", a: "We deliver full-resolution PSD (Photoshop) or high-res TIFF files. Inside the file, you will find perfectly organized, labeled layer folders (e.g., 'Left_Sleeve_Path', 'Right_Lace_Path') so your internal retouchers can immediately begin working without sorting through chaotic, un-named data." },
      { q: "Can you do multi-paths for invisible ghost mannequins?", a: "Yes. This is a very common dual-service request. We first mathematically stitch the neck joint to create the 3D hollow ghost mannequin, and then run a rigorous multi-path over that final 3D garment so you can generate 15 differently colored variations of that specific shirt." }
    ],
    h2Title: 'Multi-Clipping Path Explained — One Shoot, Every Colorway',
    schemaDescription: 'Multi-clipping path service for apparel, footwear, and furniture e-commerce. Component isolation for colorway SKU generation from $1.50/image. Organized layered PSD delivery. Next-day turnaround.',
    beforeImage: '/bg-removal.jpg',
    afterImage: '/bg-removal-done.jpg',
    order: 14,
    status: 'PUBLISHED'
  },
  {
    id: 's15',
    title: 'Real Estate Photo Editing',
    slug: 'real-estate-photo-editing',
    shortDescription: 'Real estate photo editing from $1.50/image. HDR blending, sky replacement, twilight conversion, and virtual decluttering for agents, MLS listings, and Airbnb. 12–24 hour delivery.',
    description: '<p>Properties sell on first impression, and first impressions happen on screen. A dark room, a blown-out window, a warped exterior wall from wide-angle distortion — any of these can make a premium property look like it\'s worth less than it is. Buyers scroll past listing photos in seconds; the image has to do the selling before they read a single word.</p><p>We edit real estate images for agents, photographers, and platforms. HDR bracket blending for window detail, vertical lens correction for straight walls, sky replacement for grey overcast exteriors, lawn greening, and room decluttering. Day-to-dusk twilight conversion turns a flat afternoon shot into an inviting evening scene for luxury listings. We turn around standard edits in 12–24 hours, twilight conversions in 24 hours.</p>',
    priceStarting: 1.50,
    priceUnit: 'image',
    turnaround: '12-24 hours',
    features: ['HDR bracket blending — room and window both properly exposed', 'Vertical lens correction — straight walls, no barrel distortion', 'Sky replacement and lawn greening for exterior shots', 'Day-to-dusk twilight conversion for luxury listings'],
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
    h2Title: 'How Real Estate Photo Editing Changes What a Property Looks Like',
    schemaDescription: 'Real estate photo editing for agents, MLS listings, and Airbnb. HDR blending, sky replacement, twilight conversion, and virtual decluttering from $1.50/image. 12–24 hour delivery.',
    beforeImage: '/Real-Estate-Before.png',
    afterImage: '/Real-Estate-After.png',
    order: 15,
    status: 'PUBLISHED'
  },
  {
    id: 's16',
    title: 'Automotive & Car Photo Editing',
    slug: 'car-photo-editing-service',
    shortDescription: 'Automotive photo editing from $3.00/image. Reflection removal, parking lot extraction, and digital showroom placement for dealerships, auctions, and automotive advertising.',
    description: '<p>Cars are giant mirrors. Every curved panel reflects the sky, the photographer, the parking lot, the power lines overhead. What a car looks like in a lot is essentially useless for selling it — the context is wrong and the reflections are distracting. Automotive photography needs post-production to deliver the image the vehicle actually deserves.</p><p>We extract vehicles from lots and place them on clean digital showroom backgrounds or branded environments. We rebuild metallic gradients across panels to remove photographer reflections cleanly, deepen tyre blacks, polish rim detail, and apply contrast to bring out paintwork character. For dealership networks processing hundreds of vehicles weekly, we build FTP-based batch workflows with consistent output standards. From basic lot extraction to editorial-grade magazine composites.</p>',
    priceStarting: 3.00,
    priceUnit: 'image',
    turnaround: '24-48 hours',
    features: ['Photographer and sky reflections removed from paintwork', 'Parking lot background extracted and replaced', 'Digital showroom or branded environment placement', 'Tyre depth, rim polish, and headlight illumination'],
    pricingData: [
      { type: 'Dealership Extraction', price: '$3.00/image', desc: 'Background removal, simple drop shadow, basic color pop' },
      { type: 'Digital Showroom', price: '$5.00/image', desc: 'Placing car in custom 3D environment, window reflection sync' },
      { type: 'Paint & Body Polishing', price: '$8.00/image', desc: 'Rebuilding metallic gradients, removing photographer reflections' },
      { type: 'Editorial Supercar', price: '$20.00+/image', desc: 'High-end magazine cover workflows, cinematic lighting composites' }
    ],
    targetAudience: [
      'Automotive Dealerships & Networks',
      'Custom Fabrication & Tuning Shops',
      'Motorsports Advertising Agencies',
      'High-End Auto Auction Houses',
      'Car Rental & Peer-to-Peer Apps',
      'Automotive Magazine Publishers'
    ],
    customFaqs: [
      { q: "How do you handle transparent car windows when changing the background?", a: "This is a critical factor. When we extract a car from a messy parking lot, we don't just leave the old background visible through the windows. We use complex Alpha-channel masking to maintain the glass reflections while subtly blending the new showroom background into the vehicle's interior view." },
      { q: "Can you remove the photographer's reflection from the bumper or paint?", a: "Absolutely. We aggressively clone out any trace of the photographer, tripods, or lighting umbrellas reflected in the car's body. We then mathematically rebuild the metallic paint gradient across that exact area so it looks flawlessly smooth and completely untouched." },
      { q: "Can you digitally add my dealership logo to the background wall?", a: "Yes. Many high-volume dealerships use our 'Digital Showroom' tier. They send us raw photos of cars shot in a parking lot, and we extract the vehicle and drop it into a branded 3D studio enclosure complete with their dealership logo mounted on the digital wall." },
      { q: "Do you offer bulk discounts for massive dealership inventories?", a: "Yes. For dealership networks constantly processing hundreds of vehicles per week across multiple lots, we build custom, automated FTP pipelines with heavily discounted, contract-based volume pricing." }
    ],
    h2Title: 'Why Automotive Photography Always Needs Post-Production',
    schemaDescription: 'Automotive photo editing for dealerships, auctions, and advertising. Reflection removal, parking lot extraction, and digital showroom placement from $3.00/image. 24–48 hour delivery.',
    beforeImage: '/Car-Before.png',
    afterImage: '/Car-After.png',
    order: 16,
    status: 'PUBLISHED'
  },
  {
    id: 's17',
    title: '360° Product Frame Editing',
    slug: '360-degree-product-photo-editing',
    shortDescription: '360° product frame editing from $0.50/frame. Anti-flicker processing, rotational alignment, and rig removal across all frames. Interactive spinners that look smooth, not glitchy.',
    description: '<p>A 360-degree product spinner is 36 to 72 individual images played in sequence. If the product shifts even a few pixels off-center between frames, the spin wobbles. If the exposure drifts slightly between shots — which happens with auto-exposure or inconsistent strobes — the spin flickers. Either problem makes an otherwise premium product look cheap in the viewer.</p><p>We process 360 sequences as a batch: sub-pixel alignment correction across all frames, exposure locking to eliminate flicker, consistent background removal or white-background extraction, and turntable rig removal where physical stands or wires are visible. Output is compressed and web-ready for fast loading in any 360 viewer. From $0.50/frame for clean sequences to $3.00+/frame for rig-heavy or reflective products.</p>',
    priceStarting: 0.50,
    priceUnit: 'frame',
    turnaround: '48-72 hours',
    features: ['Sub-pixel alignment correction — no wobble in the spin', 'Exposure locking across all frames — no flicker', 'Consistent background removal across every frame', 'Rig and turntable wire removal, frame by frame'],
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
    h2Title: 'Why 360° Spins Wobble and Flicker — And How We Fix It',
    schemaDescription: '360-degree product frame editing for interactive spinners. Sub-pixel alignment, flicker removal, rig extraction, and web-ready compression from $0.50/frame. 48–72 hour delivery.',
    beforeImage: '/ECommerce.jpg',
    afterImage: '/ECommerce-Done.jpg',
    order: 17,
    status: 'PUBLISHED'
  },
  {
    id: 's18',
    title: 'Commercial Packshot Retouching',
    slug: 'packshot-retouching-service',
    shortDescription: 'Packshot retouching from $1.00/image. Label realignment, carton correction, and Pantone color calibration for FMCG, cosmetics, supplements, and beverages. 24-hour turnaround.',
    description: '<p>A packshot is the product on the digital shelf. The label is crooked. The carton corner is slightly dented. The color is off by enough that it doesn\'t match the brand guideline. The camera reflected in the gloss. These are small details, but on a retail platform where your product sits next to competitors, they signal manufacturing quality before the buyer consciously processes anything.</p><p>We retouch packshots for FMCG brands, cosmetics lines, supplement companies, and beverage brands. Label realignment on curved bottles, carton reconstruction, gloss gradient rebuilding, Pantone-accurate color calibration, and printing defect removal. We also wrap flat 2D label artwork onto blank product shots — useful if you\'re launching a new SKU or regional variant without a new shoot. Delivered in 12–24 hours.</p>',
    priceStarting: 1.00,
    priceUnit: 'image',
    turnaround: '12-24 hours',
    features: ['Crooked label realignment on curved bottles and jars', 'Pantone-accurate color calibration to brand guidelines', 'Carton reconstruction — corners, creases, printing defects', 'Flat 2D label artwork wrapped onto blank product shots'],
    pricingData: [
      { type: 'Basic Cartons', price: '$1.00/image', desc: 'Dust removal, basic geometrical squaring, color pop' },
      { type: 'Curved Labels', price: '$2.50/image', desc: 'Realigning crooked sticker labels on cylindrical bottles' },
      { type: 'Complex Gloss & Glass', price: '$4.50/image', desc: 'Cosmetic jars, rebuilding reflective gradients, glare removal' },
      { type: 'Digital Packaging Generation', price: '$8.00+/image', desc: 'Wrapping flat 2D art files onto blank 3D product boxes' }
    ],
    targetAudience: [
      'Global FMCG (Fast Moving Consumer Goods)',
      'Cosmetic & Skincare Manufacturers',
      'Beverage & Alcohol Brands',
      'Pharmaceutical & Supplement Companies',
      'Supermarket E-Commerce Platforms',
      'Industrial Packaging Suppliers'
    ],
    customFaqs: [
      { q: "The label was placed slightly crooked on the bottle during manufacturing. Can you fix it?", a: "Yes. This is incredibly common. We use advanced cylindrical-warping techniques to mathematically rotate, stretch, and perfectly level the label so it reads flawlessly straight across the curve of the bottle or jar." },
      { q: "Our cardboard product boxes look slightly crushed or bent on the corners. Can you make them look perfect?", a: "Absolutely. We digitally reconstruct the physical cardboard, sharpening soft corners and drawing rigid, mathematically perfect 90-degree geometrical lines so the box looks like it just came off a pristine assembly line." },
      { q: "Can you take our flat 2D label design (PDF/AI) and warp it onto a blank bottle?", a: "Yes. For many clients, we shoot a 'blank' master bottle or box once. We then take their flat 2D Adobe Illustrator graphic packaging files and seamlessly wrap them mechanically around the 3D product photo, complete with matching simulated lighting and shadows." },
      { q: "How do you ensure the product color perfectly matches our brand guidelines?", a: "Raw photography often shifts colors slightly under strobe lights. We request your exact corporate Pantone or Hex codes, and we meticulously gradient-map the final image to lock those exact literal color values perfectly into the digital file." }
    ],
    h2Title: 'What Packshot Retouching Fixes — And Why It Matters on the Digital Shelf',
    schemaDescription: 'Packshot retouching for FMCG, cosmetics, supplements, and beverages. Label realignment, carton correction, Pantone color calibration, and label artwork wrapping from $1.00/image. 24-hour delivery.',
    beforeImage: '/ECommerce.jpg',
    afterImage: '/ECommerce-Done.jpg',
    order: 18,
    status: 'PUBLISHED'
  },
  {
    id: 's19',
    title: 'Image Web Optimization',
    slug: 'image-web-optimization-service',
    shortDescription: 'Image web optimization from $0.25/image. Lossless compression, WebP/AVIF conversion, and responsive sizing for faster load times and better Core Web Vitals.',
    description: '<p>Slow-loading images are invisible to the person who built the site and immediately obvious to everyone else. Google PageSpeed flags them. Core Web Vitals fail on them. Buyers on mobile connections bounce before the product even appears. If your e-commerce store is losing conversions you can\'t attribute to anything obvious, image file size is a common culprit — especially on large catalogs that were never optimized for web delivery.</p><p>We compress your entire image library using lossless algorithms — up to 80% file size reduction with zero visible quality loss. We convert JPEG and PNG to WebP or AVIF for modern browsers. We generate responsive size arrays (1x, 2x, 3x) so mobile and desktop each get the right resolution. For clients who want SEO value, we manually write keyword-accurate Alt-Text and inject it directly into file metadata. Bulk catalog processing available via FTP or cloud storage handoff.</p>',
    priceStarting: 0.25,
    priceUnit: 'image',
    turnaround: '12-24 hours',
    features: ['Up to 80% file size reduction — zero visible quality loss', 'WebP and AVIF conversion for modern browser performance', 'Responsive arrays: 1x, 2x, 3x for mobile and desktop', 'Manual SEO Alt-Text written and injected into file metadata'],
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
    h2Title: 'How Unoptimized Images Hurt Conversions — And How We Fix It',
    schemaDescription: 'Image web optimization for e-commerce and high-traffic sites. Lossless compression, WebP/AVIF conversion, responsive sizing, and SEO Alt-Text injection from $0.25/image. 24-hour turnaround.',
    beforeImage: '/bg-removal.jpg',
    afterImage: '/bg-removal-done.jpg',
    order: 19,
    status: 'PUBLISHED'
  },
  {
    id: 's20',
    title: 'Vintage Photo Restoration',
    slug: 'photo-restoration-service',
    shortDescription: 'Photo restoration from $7.00/image. Tear repair, water damage removal, missing detail reconstruction, and colorization for damaged prints, family archives, and museum collections.',
    description: '<p>Old photographs degrade. UV exposure fades them, moisture warps and stains them, physical handling tears them, and acidic paper causes chemical breakdown over decades. A scan of a damaged print captures all of that damage at full resolution — and restoration means working with what survives to recover as much as possible.</p><p>We restore damaged prints for families, photographers, museums, libraries, and genealogical researchers. Tears and creases cloned out, water and mold stains removed using frequency separation to preserve underlying detail, missing facial features and structural elements reconstructed where enough reference survives. For black and white archives, we offer colorization based on historical referencing — military uniforms, period clothing, documented skin tones. From minor dust and scratch cleanup at $7.00 to full reconstruction of severely damaged images. Each piece is quoted individually; send us your scan and we\'ll assess it for free.</p>',
    priceStarting: 7.00,
    priceUnit: 'image',
    turnaround: '48-72 hours',
    features: ['Tear and crease repair — fragments digitally pieced together', 'Water damage and mold stain removal preserving underlying detail', 'Missing faces and structural elements reconstructed', 'Black & white colorization based on historical referencing'],
    pricingData: [
      { type: 'Basic Preservation', price: '$7.00/image', desc: 'Minor dust/scratch removal, basic contrast recovery' },
      { type: 'Standard Restoration', price: '$15.00/image', desc: 'Repairing heavy creases, removing localized stains' },
      { type: 'Extreme Reconstruction', price: '$35.00/image', desc: 'Rebuilding missing faces, fixing photos torn in half' },
      { type: 'B&W Colorization', price: '$20.00+/image', desc: 'Hand-mapping authentic color onto monochrome images' }
    ],
    targetAudience: [
      'Museums & Historical Societies',
      'Genealogical Research Archives',
      'Professional Print Studios',
      'University & Municipal Libraries',
      'Private Vintage Art Collectors',
      'Family Heirloom Archivists'
    ],
    customFaqs: [
      { q: "How should I scan my damaged photo before sending it to you?", a: "For the absolute best results, please use a flatbed scanner and scan the original print in full color (even if it is black and white) at a minimum of 600 DPI. Save the file as an uncompressed TIFF or maximum quality JPEG." },
      { q: "My photograph is literally torn into multiple pieces. Can you fix it?", a: "Yes. Scan all the pieces together on the flatbed scanner as flat as possible. We will digitally piece the fragments back together, seamlessly clone over the torn gap lines, and mathematically reconstruct any missing structural data caught in the tear." },
      { q: "Can you fix photos that have severe water damage or mold spots?", a: "Absolutely. Water damage often warps the contrast and creates heavy blooming stains. We utilize frequency separation to remove the dark mold/water stains without destroying the underlying photographic texture of the subject." },
      { q: "How do you know what colors to use when colorizing an old black and white photo?", a: "If you know the exact colors (e.g., 'Grandpa's uniform was navy blue'), let us know in the instructions! Otherwise, our editors rely on deep historical referencing for military uniforms, period clothing, and standard biometric skin tones to create a highly accurate, believable palette." }
    ],
    h2Title: 'What Photo Restoration Can Recover — And What to Expect',
    schemaDescription: 'Photo restoration for damaged vintage prints. Tear repair, water and mold damage removal, missing detail reconstruction, and historical colorization from $7.00/image. 48–72 hour delivery.',
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
  siteName: "BLACKFOX DIGITAL",
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

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
    heroImage: '/ecommerce-hero-watch.png',
    order: 1,
    status: 'PUBLISHED'
  },
  {
    id: 's2',
    title: 'Background Removal',
    slug: 'background-removal-service',
    shortDescription: 'Surgical background removal from $0.29/image. 100% manual Pen Tool paths and advanced alpha masking for complex hair and edges.',
    description: '<p>AI background removal is fast, but it leaves ragged, "plastic" edges on anything complex. For high-end e-commerce and advertising, "good enough" isn\'t an option. Whether it\'s the fine strands of a model\'s hair, the intricate spokes of a bicycle, or the refraction through a glass bottle, the isolation must be flawless.</p><p>Our editors use 100% hand-drawn Pen Tool paths and advanced alpha-channel masking. We don\'t rely on automation; each subject is traced edge-by-edge to ensure razor-sharp silhouettes. We deliver pure white (RGB 255,255,255) JPEGs for Amazon compliance, transparent PNGs for web, or layered PSDs for total creative control. Bulk processing available for catalogs of any size.</p>',
    priceStarting: 0.29,
    priceUnit: 'image',
    turnaround: '12-24 hours',
    features: ['100% Manual Pen Tool Paths', 'Advanced Alpha Masking for Hair & Fur', 'Surgical Precision on Complex Edges', 'Amazon & Marketplace Compliant White', 'Layered PSD & Transparent PNG Delivery'],
    pricingData: [
      { type: 'Simple Path', price: '$0.29/image', desc: 'Geometric objects, straight edges, hard surfaces' },
      { type: 'Medium Detail', price: '$0.75/image', desc: 'Apparel on hangers, shoes, basic hardware' },
      { type: 'Complex Masking', price: '$1.50/image', desc: 'Jewelry, curly hair, semi-transparent objects' },
      { type: 'Super Complex', price: '$3.50+/image', desc: 'Bicycles, machinery, netting, intricate lattices' }
    ],
    targetAudience: [
      'Amazon FBA & Power Sellers',
      'Shopify E-Commerce Stores',
      'High-Volume Product Photographers',
      'Advertising & Print Agencies',
      'Jewelry & Luxury Boutiques',
      'Car Dealerships & Auto Auctions'
    ],
    customFaqs: [
      { q: "Why avoid AI background removal?", a: "AI struggles with thin lines and translucency, often blurring edges. We use hand-drawn vector paths for razor-sharp, commercial perfection that scales." },
      { q: "How do you handle hair or fur?", a: "We use advanced Alpha Channel mapping to isolate individual hair strands, preserving 100% of the fine detail without any 'helmet' effect." },
      { q: "Can you provide Amazon-compliant white?", a: "Yes. We deliver JPEGs clamped strictly to RGB 255,255,255, ensuring immediate compliance with strict marketplace standards." },
      { q: "Do you keep natural shadows?", a: "Absolutely. We can isolate and retain the original shadow or render a new, perfectly unified drop-shadow for a consistent look." }
    ],
    h2Title: 'Precision Masking for Complex Silhouettes',
    schemaDescription: 'Professional manual background removal. Hand-drawn clipping paths and alpha channel masking for Amazon, Shopify, and print. Prices from $0.29/image.',
    beforeImage: '/bg-removal-hero-before.png',
    afterImage: '/bg-removal-hero-after.png',
    heroImage: '/bg-removal-hero-after.png',
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
    beforeImage: '/clipping-path-espresso-before.png',
    afterImage: '/clipping-path-espresso-after.png',
    heroImage: '/clipping-path-hero.png',
    order: 3,
    status: 'PUBLISHED'
  },
  {
    id: 's4',
    title: 'Ghost Mannequin & Neck Joint',
    slug: 'ghost-mannequin-service',
    shortDescription: 'High-end 3D ghost mannequin & neck joint from $0.75/image. Surgical stitching, wrinkle removal, and perfect structural symmetry.',
    description: '<p>Standard flat lays look lifeless, and hiring live models is a major expense. Ghost mannequin—also called invisible mannequin or neck joint—is the high-end solution for fashion e-commerce. We digitally remove the physical mannequin and stitch the internal collar, lining, and brand tags to create a perfectly structured 3D visual that shows fit and cut exactly as the customer would see it.</p><p>Our process includes advanced "digital ironing" to remove harsh packing creases, and liquid-warping to ensure left/right symmetry across sleeves and hems. We preserve the authentic texture of the fabric while creating a "floating" 3D silhouette that commands attention. From basic tees to structured suits and intricate lingerie, we provide the dimensionality that converts browsers into buyers.</p>',
    priceStarting: 0.75,
    priceUnit: 'image',
    turnaround: '12-24 hours',
    features: ['3D Hollow "Invisible" Mannequin Effect', 'Surgical Neck-Joint & Brand Tag Stitching', 'Digital Ironing & Advanced Wrinkle Removal', 'Symmetry Correction & Natural Shape Retention', 'Colorway Duplication for Full SKU Ranges'],
    pricingData: [
      { type: 'Basic Apparel', price: '$0.75/image', desc: 'T-shirts, tanks, simple front & neck joint' },
      { type: 'Standard Product', price: '$1.50/image', desc: 'Hoodies, button-downs, sweaters, basic trousers' },
      { type: 'Complex Outerwear', price: '$3.00/image', desc: 'Suits, structured blazers, multi-layer jackets' },
      { type: 'Intricate & Sheer', price: '$4.50+/image', desc: 'Lingerie, swimwear, sheer lace, complex stitching' }
    ],
    targetAudience: [
      'Boutique Fashion Labels',
      'Activewear & Athleisure Brands',
      'Lingerie & Swimwear Retailers',
      'High-Volume Apparel Manufacturers',
      'Catalogue & Print Agencies',
      'Commercial Fashion Photographers'
    ],
    customFaqs: [
      { q: "What photos do I need to send?", a: "We need a primary shot of the garment on a mannequin and a secondary shot of the interior collar/neck (often shot inside-out). We digitally stitch these to create the 3D effect." },
      { q: "Do you fix wrinkles and symmetry?", a: "Yes. Every image includes digital ironing to remove creases and warping to ensure the garment looks perfectly balanced and symmetrical." },
      { q: "Can you do this for pants and activewear?", a: "Absolutely. We stitch the interior waistband for jeans and leggings, and handle complex elastic fabrics that typically collapse without a mannequin." },
      { q: "Can you digitally recolor the garments?", a: "Yes. Many clients shoot one 'master' colorway, and we digitally recolor it into 5 or 10 different SKUs, saving massive photography costs." }
    ],
    h2Title: '3D Structural Realism for Fashion E-Commerce',
    schemaDescription: 'Professional ghost mannequin and neck joint service. 3D hollow apparel visuals, wrinkle removal, and symmetry correction starting at $0.75/image. 24-hour delivery.',
    beforeImage: '/ghost-mannequin-hero-before.png',
    afterImage: '/ghost-mannequin-hero-after.png',
    heroImage: '/ghost-mannequin-hero-after.png',
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
    beforeImage: '/image-masking-hair-before.png',
    afterImage: '/image-masking-hair-after.png',
    heroImage: '/image-masking-hero.png',
    order: 5,
    status: 'PUBLISHED'
  },
  {
    id: 's6',
    title: 'Shadow & Reflection',
    slug: 'shadow-reflection-service',
    shortDescription: 'Luxury shadow & reflection services from $0.45/image. Drop shadows, natural grounding, and mirror reflections for high-end product presentation.',
    description: '<p>A product without a shadow is a product that doesn\'t exist in reality. It looks "stuck on" and disconnected from the page, which subtly erodes buyer trust. We ground your products in reality by digitally constructing shadows and reflections that respect the object\'s geometry, lighting angle, and surface texture.</p><p>From soft, multi-layered drop shadows that give weight to electronics, to natural "found" shadows that preserve the authentic feel of apparel, and mirror reflections that add a luxury finish to cosmetics and jewelry—we ensure your products look physically present. Our process uses sophisticated gradient mapping and opacity falloff to ensure that every shadow looks like it was captured in-camera, not created in a computer.</p>',
    priceStarting: 0.45,
    priceUnit: 'image',
    turnaround: '24 hours',
    features: ['Luxury Mirror Reflections (Mirror Finish)', 'Grounded Natural & Drop Shadows', 'Geometry-Aware Gradient Falloff', 'Surface Texture & Lighting Matching', 'Sophisticated Ambient Occlusion Shadows'],
    pricingData: [
      { type: 'Basic Drop Shadow', price: '$0.45/image', desc: 'Simple grounding for electronics & toys' },
      { type: 'Natural Shadow', price: '$0.75/image', desc: 'Preserving authentic shadows for apparel/bags' },
      { type: 'Mirror Reflection', price: '$1.50/image', desc: 'Luxury mirror effect for cosmetics & jewelry' },
      { type: 'Custom Lighting', price: '$3.00+/image', desc: 'Complex multi-source shadow construction' }
    ],
    targetAudience: [
      'Luxury Cosmetic Brands',
      'High-End Watch & Jewelry Retailers',
      'Electronics & Gadget Manufacturers',
      'Apparel & Accessories E-Commerce',
      'Commercial Product Photographers'
    ],
    customFaqs: [
      { q: "What is the difference between Natural and Drop shadows?", a: "A Drop Shadow is digitally constructed to create a consistent 'hover' or grounding effect. A Natural Shadow is the authentic shadow captured during the shoot, which we surgically extract and enhance while removing the original background." },
      { q: "Can you create reflections on any surface?", a: "Yes. While glossy black and pure white are most common, we can digitally construct reflections for wood, marble, or metallic surfaces to match your brand's aesthetic." },
      { q: "Do you match the shadow to my existing product photos?", a: "Absolutely. We analyze the light source direction and intensity of your existing catalog to ensure new shadows blend seamlessly with your current imagery." },
      { q: "Is Shadow & Reflection included in Background Removal?", a: "Basic grounding is often included, but advanced Mirror Reflections and multi-layered Natural Shadow extractions are specialized services with their own dedicated workflows." }
    ],
    h2Title: 'Grounding Your Products in High-End Reality',
    schemaDescription: 'Professional product shadow and reflection services. Drop shadows, natural shadows, and luxury mirror reflections starting at $0.45/image. 24-hour delivery.',
    beforeImage: '/shadow-reflection-hero-before.png',
    afterImage: '/shadow-reflection-hero-after.png',
    heroImage: '/shadow-reflection-hero-after.png',
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
    beforeImage: '/beauty-skin-retouch-before.png',
    afterImage: '/beauty-skin-retouch-after.png',
    heroImage: '/beauty-skin-retouch-hero.png',
    order: 7,
    status: 'PUBLISHED'
  },
  {
    id: 's8',
    title: 'Fashion Model Retouching',
    slug: 'model-retouching-service',
    shortDescription: 'Editorial-grade model retouching from $2.50/image. High-end skin polish, garment ironing, and stray hair cleanup for fashion & lifestyle brands.',
    description: '<p>Standard retouching often leads to a "plastic" look where skin texture is blurred into oblivion. We provide the opposite: Editorial-grade retouching that preserves every pore while surgically removing blemishes, redness, and stray hairs. Our workflow is built around Frequency Separation and manual Dodge & Burn, ensuring that the model looks like they had a perfect day — not like they were edited in a computer.</p><p>We specialize in full-body fashion retouching, including digital garment ironing to remove distracting wrinkles from silk, linen, and structured fabrics. From stray hair removal against complex backgrounds to sophisticated color grading and lighting enhancement, we ensure your fashion and lifestyle imagery meets the highest standards of premium commercial advertising.</p>',
    priceStarting: 2.50,
    priceUnit: 'image',
    turnaround: '24-48 hours',
    features: ['High-End Frequency Separation (Skin Texture Preserved)', 'Surgical Stray Hair & Flyaway Removal', 'Digital Garment Ironing & Wrinkle Removal', 'Manual Dodge & Burn Lighting Correction', 'Editorial Color Grading & Mood Matching'],
    pricingData: [
      { type: 'Basic Retouch', price: '$2.50/image', desc: 'Blemish removal, simple stray hairs' },
      { type: 'Standard Fashion', price: '$5.00/image', desc: 'Garment ironing, skin tone normalization' },
      { type: 'High-End Editorial', price: '$10.00/image', desc: 'Macro detail frequency separation, flawless pores' },
      { type: 'Campaign Grade', price: '$25.00+/image', desc: 'Pixel-level manipulation for billboard/print' }
    ],
    targetAudience: [
      'High-End Fashion Brands',
      'Editorial Magazines',
      'Model & Talent Agencies',
      'Commercial Fashion Photographers',
      'Lifestyle E-Commerce Catalogs'
    ],
    customFaqs: [
      { q: "Do you use AI or automated skin smoothing?", a: "Never. Automated tools destroy physical skin texture. We use Frequency Separation and manual Dodge & Burn by hand to ensure every pore is preserved while tone is perfected." },
      { q: "Can you remove wrinkles from clothing?", a: "Yes. Our 'Digital Ironing' service surgically removes distracting wrinkles from garments while maintaining the natural flow and drape of the fabric." },
      { q: "How do you handle stray hairs?", a: "We surgically remove flyaway hairs even against complex, textured backgrounds, ensuring the model's silhouette is clean and professional." },
      { q: "Can you match a specific editorial color grade?", a: "Absolutely. If you have a reference mood board or existing campaign style, we can calibrate our color grading to match your brand's aesthetic exactly." }
    ],
    h2Title: 'Editorial Excellence in Every Frame',
    schemaDescription: 'Professional fashion model retouching services. High-end skin polish, stray hair removal, and garment ironing starting at $2.50/image. 24-48 hour delivery.',
    beforeImage: '/Model-Retouch-1.jpg',
    afterImage: '/Model-Retouch-1-Done.jpg',
    heroImage: '/model-retouch-hero.png',
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
    heroImage: '/product-retouch-hero.png',
    beforeImage: '/product-retouch-electronics-before.png',
    afterImage: '/product-retouch-electronics-after.png',
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
    heroImage: '/color-correction-hero.png',
    beforeImage: '/color-recolor-before.png',
    afterImage: '/color-recolor-after.png',
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
    shortDescription: 'Professional apparel flatlay editing from $1.50/image. Precision alignment, digital ironing, and background replacement for fashion houses and e-commerce brands.',
    description: '<p>Flatlay apparel photography is the gold standard for fashion e-commerce — but it requires surgical precision to look high-end. Wide-angle lens distortion makes clothing grids curve at the edges. Fabric bunches and creases even after careful styling. Shadows from overhead lighting fall inconsistently across multiple garments.</p><p>We specialize exclusively in clothing flatlays. We fix the geometry — realigning garments to a true grid, correcting lens distortion, and balancing the negative space. We digitally "iron" fabric to remove distracting wrinkles while explicitly preserving the natural weave and texture. We clean up shadows to ensure a unified, editorial look across your entire collection. From $1.50 for a single-item layout, delivered in 24 hours.</p>',
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
    h2Title: 'Precision Apparel Flatlays — Digital Ironing and Grid Correction',
    schemaDescription: 'Professional apparel flatlay photo editing for fashion brands. Digital ironing, symmetry correction, and high-end background replacement from $1.50/image. 24-hour delivery.',
    beforeImage: '/flatlay-hero-before.png',
    afterImage: '/flatlay-hero.png',
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
    shortDescription: 'Premium architectural post-production from $1.50/image. HDR blending, sky replacement, day-to-twilight conversion, and virtual staging for high-ticket listings.',
    description: '<p>Real estate is a visual-first industry where the quality of the listing photos directly impacts the sale price. A dark room, a blown-out window, or a grey sky can make a luxury property look uninviting. Buyers scroll past listing photos in seconds; your imagery has to do the selling before they read a single word.</p><p>We specialize in premium real estate enhancement. We use advanced HDR blending to balance interior shadows with crisp, visible window views. We perform high-end sky replacements and Day-to-Twilight conversions to give your listings a "Million Dollar" look. If a room is empty, we virtually stage it with designer furniture. From $1.50 per image, we help you sell properties faster with editorial-grade visuals delivered in 24 hours.</p>',
    priceStarting: 1.50,
    priceUnit: 'image',
    turnaround: '24 hours',
    features: ['HDR Bracketing & Blending', 'Sky Replacement & Day-to-Twilight', 'Virtual Staging & Furniture Addition', 'Object Removal & Lawn Repair', 'Vertical & Horizontal Straightening'],
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
      { q: "What is Day-to-Twilight conversion?", a: "It's a high-end technique where we digitally transform a photo taken during the day into a beautiful sunset or twilight shot, complete with glowing windows and warm exterior lighting. It's proven to increase listing engagement by up to 300%." },
      { q: "Do you offer virtual staging?", a: "Yes. We can take an empty, cold room and digitally add high-quality, realistic furniture and decor. This helps buyers visualize the space's potential without the cost of physical staging." },
      { q: "What does HDR blending mean?", a: "To show both a bright room AND what is outside the window simultaneously, we manually blend 3-5 bracketed exposures. This results in a perfect shot where both the dark corners and the bright windows are flawlessly exposed." },
      { q: "Can you remove distracting objects?", a: "Absolutely. We routinely remove power lines, parked cars, trash cans, and family photos to make the property look its absolute best for the market." }
    ],
    h2Title: 'High-Ticket Real Estate Visuals — From HDR to Virtual Staging',
    schemaDescription: 'Professional real estate photo editing services. HDR blending, sky replacement, twilight conversion, and virtual staging from $1.50/image. 24-hour turnaround.',
    beforeImage: '/real-estate-before.png',
    afterImage: '/real-estate-after.png',
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
    shortDescription: 'Surgical sequence alignment and flicker-free 360° editing from $0.50/frame. Batch background removal and rig extraction for seamless interactive spinners.',
    description: '<p>A 360-degree product spinner is 24 to 72 individual images played in sequence. If the product shifts even a few pixels off-center between frames, the spin "wobbles." If the exposure drifts slightly between shots, the spin "flickers." Both issues break the immersion and make a premium product look cheap.</p><p>We process 360 sequences as a surgical batch. We perform sub-pixel alignment to eliminate wobble, lock exposures to remove flicker, and provide consistent background removal across every single frame. From $0.50 per frame, we deliver optimized, web-ready sequences that turn simple rotations into high-conversion interactive experiences.</p>',
    priceStarting: 0.50,
    priceUnit: 'frame',
    turnaround: '48-72 hours',
    features: ['Sub-Pixel Alignment (No Wobble)', 'Exposure Locking (No Flicker)', 'Batch Background Removal', 'Turntable & Rig Extraction', 'Web-Ready Sequence Optimization'],
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
      { q: "Why does my 360 spinner look like it's wobbling?", a: "Wobble occurs when the product wasn't perfectly centered on the turntable. We fix this by mathematically aligning the center-axis across all frames so it spins perfectly in place." },
      { q: "Why is exposure flickering happening?", a: "Flicker happens when lighting or exposure changes slightly between shots. We use strict batch color-locking to force the exact same luminance value onto every frame." },
      { q: "Can you remove the turntable rig or wires?", a: "Yes. Many products (like floating shoes) require physical rigs. We meticulously clone out these wires frame-by-frame for a flawless floating effect." },
      { q: "Are the frames optimized for web?", a: "Absolutely. We compress final frames for fast loading in any 360 viewer without sacrificing the sharp product detail." }
    ],
    h2Title: 'Surgical Precision for Interactive 360° Product Spinners',
    schemaDescription: 'Professional 360-degree product frame editing. Sub-pixel alignment, flicker removal, rig extraction, and web-ready compression from $0.50/frame. 48–72 hour delivery.',
    beforeImage: '/product-360-before.png',
    afterImage: '/product-360-after.png',
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
    shortDescription: 'Technical image optimization to crush PageSpeed scores from $0.25/image. Lossless compression, WebP/AVIF conversion, and SEO metadata injection.',
    description: '<p>Slow-loading images are invisible to the developer but immediately obvious to your customers. Google PageSpeed flags them, Core Web Vitals fail on them, and mobile users bounce before the product even appears. If your e-commerce store is losing conversions, image payload is often the silent killer.</p><p>We optimize your entire library with technical precision. We perform lossless compression for up to 80% file size reduction, convert assets to next-gen formats like WebP and AVIF, and generate responsive arrays for mobile/desktop delivery. For SEO-focused brands, we manually inject keyword-rich Alt-Text and metadata to ensure your images rank. Bulk processing available via FTP or cloud storage.</p>',
    priceStarting: 0.25,
    priceUnit: 'image',
    turnaround: '12-24 hours',
    features: ['Lossless Compression (80% Reduction)', 'WebP & AVIF Format Conversion', 'Responsive Size Arrays (1x, 2x, 3x)', 'Manual SEO Alt-Text & Metadata Injection', 'PageSpeed & Core Web Vitals Optimization'],
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
      { q: "What is the difference between lossless and lossy?", a: "Lossless compression mathematically reorganizes file data to save massive space without deleting a single pixel. Lossy compression deletes data, which can cause 'blocky' artifacts." },
      { q: "Why convert to WebP or AVIF?", a: "These are next-gen formats. A WebP image is often 30% smaller than an optimized JPG while maintaining identical visual quality and supporting transparency." },
      { q: "Do you write SEO Alt-Tags?", a: "Yes. In our premium tier, we manually review each image and inject descriptive, keyword-rich Alt-text directly into the metadata for better search indexing." },
      { q: "Can you process a 10,000+ image catalog?", a: "Absolutely. We are built for massive bulk tasks. We can pull from your server via FTP, optimize the entire catalog, and re-upload it overnight." }
    ],
    h2Title: 'Crush PageSpeed Scores with Technical Image Optimization',
    schemaDescription: 'Professional image web optimization. Lossless compression, WebP/AVIF conversion, responsive sizing, and SEO Alt-Text injection from $0.25/image. 24-hour turnaround.',
    beforeImage: '/web-opt-before.png',
    afterImage: '/web-opt-after.png',
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
  { id: 'p1', title: 'Luxury Watch Retouch', category: 'ecommerce-photo-editing', serviceName: 'E-Commerce', beforeImage: '/ecommerce-watch-before.png', afterImage: '/ecommerce-watch-after.png', featured: true },
  { id: 'p1b', title: 'Ghost Mannequin Jacket', category: 'ecommerce-photo-editing', serviceName: 'E-Commerce', beforeImage: '/ecommerce-jacket-before.png', afterImage: '/ecommerce-jacket-after.png', featured: true },
  { id: 'p1c', title: 'Studio Headphones Batch', category: 'ecommerce-photo-editing', serviceName: 'E-Commerce', beforeImage: '/ecommerce-headphones-before.png', afterImage: '/ecommerce-headphones-after.png', featured: true },
  { id: 'p1d', title: 'Cosmetic Product Polish', category: 'ecommerce-photo-editing', serviceName: 'E-Commerce', beforeImage: '/ecommerce-cosmetic-before.png', afterImage: '/ecommerce-cosmetic-after.png', featured: true },
  { id: 'p2', title: 'The Hair Masking Challenge', category: 'background-removal-service', serviceName: 'Background Removal', beforeImage: '/bg-removal-hair-before.png', afterImage: '/bg-removal-hair-after.png', featured: true },
  { id: 'p2b', title: 'Intricate Wire Precision', category: 'background-removal-service', serviceName: 'Background Removal', beforeImage: '/bg-removal-whisk-before.png', afterImage: '/bg-removal-whisk-after.png', featured: true },
  { id: 'p2c', title: 'Soft Fur & Texture Isolation', category: 'background-removal-service', serviceName: 'Background Removal', beforeImage: '/bg-removal-fur-before.png', afterImage: '/bg-removal-fur-after.png', featured: true },
  { id: 'p2d', title: 'Transparency & Glass Extraction', category: 'background-removal-service', serviceName: 'Background Removal', beforeImage: '/bg-removal-glass-before.png', afterImage: '/bg-removal-glass-after.png', featured: true },
  { id: 'p3', title: 'Espresso Machine Isolation', category: 'clipping-path-service', serviceName: 'Clipping Path', beforeImage: '/clipping-path-espresso-before.png', afterImage: '/clipping-path-espresso-after.png', featured: true },
  { id: 'p3e', title: 'Luxury Handbag Path', category: 'clipping-path-service', serviceName: 'Clipping Path', beforeImage: '/clipping-path-bag-before.png', afterImage: '/clipping-path-bag-after.png', featured: true },
  { id: 'p3h', title: 'Pro Lens Extraction', category: 'clipping-path-service', serviceName: 'Clipping Path', beforeImage: '/clipping-path-lens-before.png', afterImage: '/clipping-path-lens-after.png', featured: true },
  { id: 'p3i', title: 'Stainless Whisk Path', category: 'clipping-path-service', serviceName: 'Clipping Path', beforeImage: '/clipping-path-whisk-before.png', afterImage: '/clipping-path-whisk-after.png', featured: true },
  { id: 'p4', title: 'Luxury Leather Structure', category: 'ghost-mannequin-service', serviceName: 'Ghost Mannequin', beforeImage: '/ghost-mannequin-leather-before.png', afterImage: '/ghost-mannequin-leather-after.png', featured: true },
  { id: 'p4b', title: 'Neck Joint Masterclass', category: 'ghost-mannequin-service', serviceName: 'Ghost Mannequin', beforeImage: '/ghost-mannequin-blazer-before.png', afterImage: '/ghost-mannequin-blazer-after.png', featured: true },
  { id: 'p4c', title: 'Activewear Precision', category: 'ghost-mannequin-service', serviceName: 'Ghost Mannequin', beforeImage: '/ghost-mannequin-activewear-before.png', afterImage: '/ghost-mannequin-activewear-after.png', featured: true },
  { id: 'p4d', title: 'Full-Body 3D Structure', category: 'ghost-mannequin-service', serviceName: 'Ghost Mannequin', beforeImage: '/ghost-mannequin-gown-before.png', afterImage: '/ghost-mannequin-gown-after.png', featured: true },
  { id: 'p8', title: 'Editorial Fashion Retouch', category: 'model-retouching-service', serviceName: 'Model Retouching', beforeImage: '/Model-Retouch-1.jpg', afterImage: '/Model-Retouch-1-Done.jpg', featured: true },
  { id: 'p8b', title: 'High-End Portrait Polish', category: 'model-retouching-service', serviceName: 'Model Retouching', beforeImage: '/model-retouch-portrait-before.png', afterImage: '/model-retouch-portrait-after.png', featured: true },
  { id: 'p8c', title: 'Lifestyle Color Grade', category: 'model-retouching-service', serviceName: 'Model Retouching', beforeImage: '/model-retouch-lifestyle-before.png', afterImage: '/model-retouch-lifestyle-after.png', featured: true },
  { id: 'p8d', title: 'Ghost Mannequin Fashion', category: 'model-retouching-service', serviceName: 'Model Retouching', beforeImage: '/model-retouch-ghost-before.png', afterImage: '/model-retouch-ghost-after.png', featured: true },
  { id: 'p5', title: 'Fine Hair Masking Precision', category: 'image-masking-service', serviceName: 'Image Masking', beforeImage: '/image-masking-hair-before.png', afterImage: '/image-masking-hair-after.png', featured: true },
  { id: 'p5b', title: 'Soft Fur Texture Masking', category: 'image-masking-service', serviceName: 'Image Masking', beforeImage: '/image-masking-fur-before.png', afterImage: '/image-masking-fur-after.png', featured: true },
  { id: 'p5c', title: 'Sheer Transparency Masking', category: 'image-masking-service', serviceName: 'Image Masking', beforeImage: '/image-masking-veil-before.png', afterImage: '/image-masking-veil-after.png', featured: true },
  { id: 'p5d', title: 'Intricate Woven Masking', category: 'image-masking-service', serviceName: 'Image Masking', beforeImage: '/image-masking-woven-before.png', afterImage: '/image-masking-woven-after.png', featured: true },
  { id: 'p6', title: 'Drop Shadow Precision', category: 'shadow-reflection-service', serviceName: 'Shadow & Reflection', beforeImage: '/shadow-reflection-speaker-before.png', afterImage: '/shadow-reflection-speaker-after.png', featured: true },
  { id: 'p6b', title: 'Natural Shadow Realism', category: 'shadow-reflection-service', serviceName: 'Shadow & Reflection', beforeImage: '/shadow-reflection-bag-before.png', afterImage: '/shadow-reflection-bag-after.png', featured: true },
  { id: 'p6c', title: 'Mirror Reflection Luxury', category: 'shadow-reflection-service', serviceName: 'Shadow & Reflection', beforeImage: '/shadow-reflection-watch-before.png', afterImage: '/shadow-reflection-watch-after.png', featured: true },
  { id: 'p6d', title: 'Floating Grounded Shadow', category: 'shadow-reflection-service', serviceName: 'Shadow & Reflection', beforeImage: '/shadow-reflection-sunglasses-before.png', afterImage: '/shadow-reflection-sunglasses-after.png', featured: true },
  { id: 'p9', title: 'Electronic Item Clean', category: 'product-retouching-service', serviceName: 'Product Retouch', beforeImage: '/product-retouch-electronics-before.png', afterImage: '/product-retouch-electronics-after.png', featured: true },
  { id: 'p9b', title: 'Leather Texture Polish', category: 'product-retouching-service', serviceName: 'Product Retouch', beforeImage: '/product-retouch-leather-before.png', afterImage: '/product-retouch-leather-after.png', featured: true },
  { id: 'p9c', title: 'Industrial Detail Clean', category: 'product-retouching-service', serviceName: 'Product Retouch', beforeImage: '/product-retouch-powertool-before.png', afterImage: '/product-retouch-powertool-after.png', featured: true },
  { id: 'p9d', title: 'Luxury Reflection Control', category: 'product-retouching-service', serviceName: 'Product Retouch', beforeImage: '/product-retouch-perfume-before.png', afterImage: '/product-retouch-perfume-after.png', featured: true },
  { id: 'p10', title: 'Jewelry Diamond Luster', category: 'jewelry-retouching-service', serviceName: 'Jewelry Retouch', beforeImage: '/Jewlery-Retouch-5.jpg', afterImage: '/Jewlery-Retouch-5-Done.jpg', featured: true },
  { id: 'p11', title: 'Product Color Correction', category: 'color-correction-service', serviceName: 'Color Correction', beforeImage: '/color-recolor-before.png', afterImage: '/color-recolor-after.png', featured: true },
  { id: 'p11b', title: 'Luminous Fabric Recolor', category: 'color-correction-service', serviceName: 'Color Correction', beforeImage: '/color-silk-before.png', afterImage: '/color-silk-after.png', featured: true },
  { id: 'p11c', title: 'Organic Material Swap', category: 'color-correction-service', serviceName: 'Color Correction', beforeImage: '/color-boot-before.png', afterImage: '/color-boot-after.png', featured: true },
  { id: 'p11d', title: 'Automotive Color Grade', category: 'color-correction-service', serviceName: 'Color Correction', beforeImage: '/color-suv-before.png', afterImage: '/color-suv-after.png', featured: true },
  { id: 'p12', title: 'Creative Background Swap', category: 'image-manipulation-service', serviceName: 'Image Manipulation', beforeImage: '/Image-Manipulation.jpg', afterImage: '/Image-Manipulation-Done.jpg', featured: true },
  { id: 'p13', title: 'Technical Sportswear Symmetry', category: 'flatlay-photo-editing-service', serviceName: 'Flatlay Retouch', beforeImage: '/flatlay-sport-before.png', afterImage: '/flatlay-sport-after.png', featured: true },
  { id: 'p13b', title: 'Heavy Outerwear Balancing', category: 'flatlay-photo-editing-service', serviceName: 'Flatlay Retouch', beforeImage: '/flatlay-puffer-before.png', afterImage: '/flatlay-puffer-after.png', featured: true },
  { id: 'p13c', title: 'High-Fashion Silk Ironing', category: 'flatlay-photo-editing-service', serviceName: 'Flatlay Retouch', beforeImage: '/flatlay-silk-before.png', afterImage: '/flatlay-silk-after.png', featured: true },
  { id: 'p13d', title: 'Textured Knitwear Reshaping', category: 'flatlay-photo-editing-service', serviceName: 'Flatlay Retouch', beforeImage: '/flatlay-knit-before.png', afterImage: '/flatlay-knit-after.png', featured: true },
  { id: 'p15', title: 'Million-Dollar Twilight Conversion', category: 'real-estate-photo-editing', serviceName: 'Real Estate', beforeImage: '/real-estate-twilight-before.png', afterImage: '/real-estate-twilight-after.png', featured: true },
  { id: 'p15b', title: 'Technical HDR Interior Blend', category: 'real-estate-photo-editing', serviceName: 'Real Estate', beforeImage: '/real-estate-hdr-before.png', afterImage: '/real-estate-hdr-after.png', featured: true },
  { id: 'p15c', title: 'Designer Virtual Staging', category: 'real-estate-photo-editing', serviceName: 'Real Estate', beforeImage: '/real-estate-staging-before.png', afterImage: '/real-estate-staging-after.png', featured: true },
  { id: 'p15d', title: 'Curb Appeal Cleanup & Repair', category: 'real-estate-photo-editing', serviceName: 'Real Estate', beforeImage: '/real-estate-cleanup-before.png', afterImage: '/real-estate-cleanup-after.png', featured: true },
  { id: 'p17', title: '360° Sequence Axis Alignment', category: '360-degree-product-photo-editing', serviceName: '360 Product', beforeImage: '/product-360-align-before.png', afterImage: '/product-360-align-after.png', featured: true },
  { id: 'p17b', title: 'Surgical 360° Rig & Wire Removal', category: '360-degree-product-photo-editing', serviceName: '360 Product', beforeImage: '/product-360-rig-before.png', afterImage: '/product-360-rig-after.png', featured: true },
  { id: 'p17c', title: 'Consistent 360° Reflection Control', category: '360-degree-product-photo-editing', serviceName: '360 Product', beforeImage: '/product-360-reflect-before.png', afterImage: '/product-360-reflect-after.png', featured: true },
  { id: 'p17d', title: 'Batch 360° Color Synchronization', category: '360-degree-product-photo-editing', serviceName: '360 Product', beforeImage: '/product-360-color-before.png', afterImage: '/product-360-color-after.png', featured: true },
  { id: 'p19', title: 'Lossless Visual Compression', category: 'image-web-optimization-service', serviceName: 'Web Optimization', beforeImage: '/web-opt-compress-before.png', afterImage: '/web-opt-compress-after.png', featured: true },
  { id: 'p19b', title: 'Intelligent Responsive Scaling', category: 'image-web-optimization-service', serviceName: 'Web Optimization', beforeImage: '/web-opt-scale-before.png', afterImage: '/web-opt-scale-after.png', featured: true },
  { id: 'p19c', title: 'Manual SEO Metadata Injection', category: 'image-web-optimization-service', serviceName: 'Web Optimization', beforeImage: '/web-opt-seo-before.png', afterImage: '/web-opt-seo-after.png', featured: true },
  { id: 'p19d', title: 'Next-Gen Format Conversion', category: 'image-web-optimization-service', serviceName: 'Web Optimization', beforeImage: '/web-opt-format-before.png', afterImage: '/web-opt-format-after.png', featured: true },
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

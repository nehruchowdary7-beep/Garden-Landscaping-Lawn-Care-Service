(function () {
  'use strict';

  const SERVICES_DATA = {
    mowing: {
      id: 'mowing',
      name: 'Precision Lawn Mowing & Razor Edging',
      eyebrow: 'Weekly & Bi-Weekly Turf Perfection',
      category: 'Turf Maintenance',
      heroImage: 'commercial-mowers-fleet.jpg',
      featuredImage: 'precision-mowing-stripes.jpg',
      heroLead: 'Engineered turf care for discerning residential estates. We utilize commercial electric walk and stand-on mowers with daily-sharpened mulching blades, delivering a surgical 90-degree edge, uniform stripe patterns, and zero turf fiber tearing.',
      startingRate: '$45',
      rateUnit: '/ cut',
      badges: [
        'Daily-Sharpened Razor Blades',
        'Laser-Straight Sidewalk Edging',
        '100% High-Velocity Debris Clearing',
        'Zero Turn Turf-Tear Protection'
      ],
      scope: [
        {
          title: 'Turf Height & Density Calibration',
          image: 'precision-mowing-stripes.jpg',
          icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
          desc: 'We inspect turf variety and soil moisture before cutting, setting deck heights between 3.0" and 4.2" to shade root zones and choke weed germination naturally.',
          checks: ['Species-calibrated cutting deck heights', 'Anti-scalp deck leveling rollers', 'Drought-adjusted seasonal height adaptation']
        },
        {
          title: '90-Degree Sidewalk & Driveway Edging',
          image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=700&q=80',
          icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>',
          desc: 'Mechanical vertical trench edging creates razor-sharp, trench-free perimeters along all concrete walkways, curbs, driveways, and garden retaining borders.',
          checks: ['Vertical blade precision edging', 'Clean delineation without turf scalp', 'Trench-free hardscape preservation']
        },
        {
          title: 'Detail String Trimming',
          image: 'https://images.unsplash.com/photo-1592595896551-12b371d546d5?auto=format&fit=crop&w=700&q=80',
          icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>',
          desc: 'Gentle line trimming around delicate obstacles including fence posts, foundation walls, irrigation heads, and specimen trees without bark damage.',
          checks: ['Bark-protective line buffers', 'Flush trimming around mailbox posts & fences', 'Zero damage to landscape lighting fixtures']
        },
        {
          title: 'Nutrient-Rich Clippings Mulching',
          image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=700&q=80',
          icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>',
          desc: 'Micro-shredded grass clippings return up to 25% of necessary nitrogen and moisture directly back into the root rhizosphere without unsightly thatch buildup.',
          checks: ['Double-pass micro-shredding baffles', 'Eliminates chemical fertilizer dependency', 'Bagging available upon customer request']
        },
        {
          title: 'High-Velocity Air Polishing',
          image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=700&q=80',
          icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/></svg>',
          desc: 'Commercial 200+ MPH blowers scour all patios, driveways, porches, pool decks, and flowerbeds clean of all stray debris, leaving surfaces spotless.',
          checks: ['Clears driveways, steps, and patios', 'Blows debris away from bed mulch', 'Ensures pristine zero-clipping hardscapes']
        },
        {
          title: 'Gate Security & Pet Safety Check',
          image: 'estate-hero.jpg',
          icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
          desc: 'Before departure, technicians latch all backyard gates securely, inspect pet boundaries, and upload photographic verification to your client portal.',
          checks: ['Double-checked self-closing latches', 'Photo verification logged on departure', 'Pet safe guarantee on all property visits']
        }
      ],
      steps: [
        {
          num: '01',
          image: 'commercial-mowers-fleet.jpg',
          title: 'Perimeter Sweep & Debris Clear',
          desc: 'We clear sticks, fallen toys, and hoses, then inspect turf conditions and moisture saturation levels.'
        },
        {
          num: '02',
          image: 'precision-mowing-stripes.jpg',
          title: 'Surgical Dual-Blade Mowing',
          desc: 'We alternate cutting directions each visit (45°, horizontal, vertical) to prevent wheel rutting and encourage upright turf growth.'
        },
        {
          num: '03',
          image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=600&q=80',
          title: 'Perimeter Trimming & Edging',
          desc: 'Every hard surface perimeter is edged to a surgical 90° angle, and all obstacles are trimmed with line guards.'
        },
        {
          num: '04',
          image: 'https://images.unsplash.com/photo-1592595896551-12b371d546d5?auto=format&fit=crop&w=600&q=80',
          title: 'Hardscape Sweep & Gate Latch',
          desc: 'Complete high-velocity air sweep of hard surfaces, gate latch verification, and automated departure SMS.'
        }
      ],
      gallery: [
        { src: 'precision-mowing-stripes.jpg', title: 'Fairway Green Striping Pattern' },
        { src: 'commercial-mowers-fleet.jpg', title: 'Commercial Precision Fleet on Acreage' },
        { src: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=700&q=80', title: 'Surgical Sidewalk Trench Edging' },
        { src: 'https://images.unsplash.com/photo-1592595896551-12b371d546d5?auto=format&fit=crop&w=700&q=80', title: 'Meticulous Garden Border Detailing' }
      ],
      transformation: {
        beforeImg: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=800&q=80',
        afterImg: 'precision-mowing-stripes.jpg',
        property: 'Highland Park Estate (0.65 Acre)',
        duration: 'Weekly recurring (45 mins/visit)',
        deliverables: 'Precision cut, perimeter trench edge, bed detailing',
        quote: '"VerdantCraft transformed our scruffy suburban turf into a golf-course green fairway. The stripe patterns and spotless edging are remarkable."'
      },
      pricing: [
        {
          title: 'Standard Mowing',
          badge: '',
          price: '$45',
          period: '/ visit',
          featured: false,
          desc: 'Ideal for suburban yards seeking pristine weekly grooming and clean sidewalks.',
          features: [
            'Up to 1/4 acre lot coverage',
            'Weekly cutting & weed whacking',
            'Sidewalk & driveway edging',
            'Full blower clean-sweep',
            'Gate latch guarantee'
          ],
          cta: 'Select Standard Plan',
          btnClass: 'btn-secondary'
        },
        {
          title: 'Premier Lawn Care',
          badge: 'Most Popular',
          price: '$75',
          period: '/ visit',
          featured: true,
          desc: 'Our full-service maintenance plan including turf mowing and garden bed weeding.',
          features: [
            'Up to 1/2 acre lot coverage',
            'Weekly precision cut & striping',
            'Bi-weekly flowerbed weed pulling',
            'Shrub top-trimming as needed',
            'Organic spot weed control',
            'Priority rain reschedule slot'
          ],
          cta: 'Select Premier Plan',
          btnClass: 'btn-primary'
        },
        {
          title: 'Master Estate Grounds',
          badge: '',
          price: '$140',
          period: '/ visit',
          featured: false,
          desc: 'White-glove groundskeeping for large multi-zone residential estates.',
          features: [
            'Up to 1.5 acre comprehensive care',
            'Rotational stripe pattern sculpting',
            'Full bed edging & hand weeding',
            'Monthly soil moisture testing',
            'Dedicated crew captain',
            '24/7 direct client portal dispatch'
          ],
          cta: 'Select Estate Plan',
          btnClass: 'btn-secondary'
        }
      ],
      faqs: [
        {
          q: 'What mowing height do your crews maintain?',
          a: 'We calibrate blade heights between 3.2 and 4.0 inches depending on your turf species (Kentucky Bluegrass, Tall Fescue, Bermuda, or Zoysia). Taller cutting develops deeper root systems, suppresses weeds naturally, and retains essential ground moisture during summer heat.'
        },
        {
          q: 'What happens if it rains on my scheduled service day?',
          a: 'We never mow soggy or saturated turf to avoid soil compaction and wheel rutting. In the event of heavy rain, our dispatch engine immediately reschedules your visit for the next dry morning, sending an automated SMS alert with your updated window.'
        },
        {
          q: 'Do you bag the lawn clippings or mulch them?',
          a: 'We utilize high-grade commercial mulching decks that pulverize grass blades into micro-particles. These quickly decompose and return clean organic nitrogen directly to the soil. If you prefer bagging for pool or patio protection, bagging is available upon request.'
        },
        {
          q: 'How do you ensure backyard gates are locked after service?',
          a: 'Our crew captains adhere to a strict 2-step verification protocol: after exiting the backyard, the gate is latched, tested with a push-pull check, and photographed. The timestamped photo is instantly logged into your client portal.'
        },
        {
          q: 'Can I skip a week or pause service while on vacation?',
          a: 'Yes, absolutely. You can manage, pause, or reschedule visits at any time with 24 hours advance notice via our client dashboard or by calling our service desk.'
        }
      ]
    },

    design: {
      id: 'design',
      name: 'Architectural 3D Landscape & Garden Design',
      eyebrow: 'Architectural Master Planning & Visualization',
      category: 'Landscape Architecture',
      heroImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=85',
      featuredImage: 'estate-hero.jpg',
      heroLead: 'Elevate your outdoor living with master architectural planning. Our licensed landscape designers utilize drone topography surveying and cinematic 3D rendering to visualize your custom terraces, outdoor kitchens, specimen gardens, and evening illumination before groundbreaking.',
      startingRate: '$350',
      rateUnit: ' consultation',
      badges: [
        'Photorealistic 3D VR Walkthroughs',
        'Drone Topography & Slope Modeling',
        'Micro-Climate Botanical Selection',
        'Turnkey Construction Management'
      ],
      scope: [
        {
          title: 'LiDAR & Drone Elevation Survey',
          image: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=700&q=80',
          icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
          desc: 'High-precision aerial mapping establishes grade contours, existing utility easements, soil drainage flow paths, and structural sun angles across all four seasons.',
          checks: ['Exact millimeter boundary contours', 'Sunlight exposure heatmapping', 'Hydrological flow analysis']
        },
        {
          title: 'Photorealistic 3D Spatial Modeling',
          image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=700&q=80',
          icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>',
          desc: 'Experience your prospective outdoor oasis in interactive 4K video walkthroughs showing day-to-night lighting transitions and mature 5-year plant canopy growth.',
          checks: ['Day & night lighting simulations', '5-year botanical maturity modeling', 'Custom hardscape texture rendering']
        },
        {
          title: 'Botanical Plant & Tree Palette',
          image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=700&q=80',
          icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
          desc: 'Carefully curated native and drought-tolerant perennial plants, specimen evergreens, ornamental flowering trees, and pollinator-friendly garden borders.',
          checks: ['Native micro-climate resilience', 'Four-season continuous bloom cycles', 'Deer and pest resistant varieties']
        },
        {
          title: 'Outdoor Living Structural Blueprints',
          image: 'hero-patio-sanctuary.jpg',
          icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
          desc: 'Architectural drawings including cross-sections, excavation base depths, paver laying patterns, fire feature gas lines, and retaining wall engineering.',
          checks: ['Municipal permit-ready schematic drawings', 'Gas, water & electrical stub plans', 'Structural load & soil compaction specs']
        },
        {
          title: 'Architectural Lighting & Audio Layout',
          image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=700&q=80',
          icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/></svg>',
          desc: 'Strategic placement of low-voltage brass uplights, path illumination, step lights, and hidden weatherproof soundscapes for nighttime ambiance.',
          checks: ['Zoned Wi-Fi smart lighting controllers', 'Solid brass fixture specifications', 'Subsurface Sonance audio placement']
        },
        {
          title: 'Transparent Phase Cost Breakdown',
          image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=700&q=80',
          icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
          desc: 'A line-by-line itemized budget identifying materials, excavation, masonry, plant sourcing, and phased rollout options for flexible budgeting.',
          checks: ['Itemized material quantity guarantees', 'Phased installation roadmap', 'Zero surprise change-order policy']
        }
      ],
      steps: [
        {
          num: '01',
          image: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=600&q=80',
          title: 'On-Site Architectural Audit',
          desc: 'We tour your property, interview your family on lifestyle needs, and map out elevation changes and sunlight patterns.'
        },
        {
          num: '02',
          image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600&q=80',
          title: 'Concept Ideation & Moodboard',
          desc: 'Our design team prepares 2 distinct creative master directions with material swatches and preliminary plant palettes.'
        },
        {
          num: '03',
          image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80',
          title: 'Photorealistic 3D Renderings',
          desc: 'We present fully rendered 3D visual environments, fine-tuning hardscapes, lighting, and plantings until 100% approved.'
        },
        {
          num: '04',
          image: 'estate-hero.jpg',
          title: 'Permit Blueprints & Build Handover',
          desc: 'Receive final permit blueprints, material schedules, and direct priority scheduling with our master construction crew.'
        }
      ],
      gallery: [
        { src: 'estate-hero.jpg', title: 'Grand Estate Master Architecture' },
        { src: 'hero-patio-sanctuary.jpg', title: 'Covered Flagstone Terrace & Living Space' },
        { src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=700&q=80', title: '3D Render to Real Life Estate Pool Deck' },
        { src: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=700&q=80', title: 'Architectural Night Illumination' }
      ],
      transformation: {
        beforeImg: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=800&q=80',
        afterImg: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
        property: 'Meadowood Modern Farmhouse (1.2 Acres)',
        duration: '3-Week Design & Blueprint Phase',
        deliverables: '3D master plan, flagstone fire terrace, pergola, native beds',
        quote: '"Seeing our barren backyard come alive in interactive 3D before committing build dollars gave us total confidence. The final construction matched the render down to the millimeter."'
      },
      pricing: [
        {
          title: 'Concept Vision Package',
          badge: '',
          price: '$350',
          period: ' flat rate',
          featured: false,
          desc: 'Ideal for homeowners needing design clarity, layout concepts, and plant ideas.',
          features: [
            'On-site 90-minute design consultation',
            '2D schematic landscape concept plan',
            'Curated botanical specimen list',
            'High-level preliminary budget estimates',
            'Full digital design dossier'
          ],
          cta: 'Book Concept Session',
          btnClass: 'btn-secondary'
        },
        {
          title: 'Architectural 3D Master Plan',
          badge: 'Most Popular',
          price: '$1,250',
          period: ' complete plan',
          featured: true,
          desc: 'Complete end-to-end design blueprint with cinematic 3D renders and material specs.',
          features: [
            'Full property LiDAR topography survey',
            'Cinematic 4K 3D day/night video renders',
            'Complete botanical & hardscape specifications',
            'Municipal permit-ready engineering set',
            'Itemized construction bill of materials',
            '100% design fee credit toward build contract'
          ],
          cta: 'Book 3D Master Plan',
          btnClass: 'btn-primary'
        },
        {
          title: 'Grand Estate Master Planning',
          badge: '',
          price: '$2,800',
          period: ' complete suite',
          featured: false,
          desc: 'Comprehensive multi-acre estate master planning with phased build rollouts.',
          features: [
            'Multi-acre drone topographical mapping',
            'Interactive VR walk-through experience',
            'Outdoor kitchen, pool & pool house integration',
            'Drainage, grading & retaining wall engineering',
            'Landscape lighting & sound system schematic',
            'Dedicated Principal Landscape Architect'
          ],
          cta: 'Book Estate Master Suite',
          btnClass: 'btn-secondary'
        }
      ],
      faqs: [
        {
          q: 'Is the design fee credited toward the construction cost?',
          a: 'Yes! When you hire VerdantCraft to build your designed project, 100% of your 3D Master Plan design fee is credited directly toward your construction contract.'
        },
        {
          q: 'How long does the design process take from start to finish?',
          a: 'For our Concept Vision package, delivery takes 7-10 business days. For the full Architectural 3D Master Plan, the complete cycle (initial survey, concept review, 3D modeling, and final blueprints) typically takes 2 to 3 weeks.'
        },
        {
          q: 'What if I want changes to the initial 3D renderings?',
          a: 'Our 3D Master Plan packages include two full rounds of design revisions. We meet via interactive screen share or in-person to tweak patio shapes, plant species, lighting fixtures, and dimensions until you are completely thrilled.'
        },
        {
          q: 'Do you help with municipal permits and HOA approval?',
          a: 'Yes. Our architectural blueprints include all necessary setbacks, lot coverage calculations, and engineering specs required by local city building departments and strict Homeowners Associations (HOAs).'
        },
        {
          q: 'Can we build the project in phases over multiple years?',
          a: 'Absolutely. A great master plan allows you to execute Phase 1 (e.g., hardscape patio & drainage) today, and Phase 2 (outdoor kitchen, specimen gardens, pergola) next season while maintaining a cohesive aesthetic.'
        }
      ]
    },

    hardscapes: {
      id: 'hardscapes',
      name: 'Artisan Flagstone Patios & Retaining Walls',
      eyebrow: 'Structural Masonry & Outdoor Living',
      category: 'Hardscaping & Masonry',
      heroImage: 'stone-retaining-wall.jpg',
      featuredImage: 'master-stonework-wall.jpg',
      heroLead: 'Engineered for generations. Our certified ICPI hardscape craftsmen build natural stone terraces, durable interlocking paver patios, engineered retaining walls, and custom fire features with crushed aggregate bases that defy ground settling and freeze-thaw cracking.',
      startingRate: '$2,400',
      rateUnit: ' starting project',
      badges: [
        'ICPI Certified Master Paver Installers',
        'Laser-Graded Geotextile Base Foundation',
        'Polymeric Sand Zero-Weed Joint Locking',
        '10-Year Structural Guarantee'
      ],
      scope: [
        {
          title: 'Engineered Crushed Aggregate Foundation',
          image: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=700&q=80',
          icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
          desc: 'Every patio begins with deep 8" to 12" excavation, woven geotextile ground stabilization fabric, and hydraulic compaction of crushed stone in 2" lifts.',
          checks: ['Zero-settling geotextile membrane', 'Laser-leveled aggregate road base', 'Plate vibratory compaction to 98% Proctor']
        },
        {
          title: 'Natural Flagstone & Architectural Pavers',
          image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=700&q=80',
          icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',
          desc: 'Premium selection of Bluestone, Tennessee Flagstone, travertine, and high-density Belgard/Unilock pavers laid with artistic pattern harmony.',
          checks: ['Hand-chiseled natural stone edges', 'Non-slip outdoor surface textures', 'Tight tolerance joint alignment']
        },
        {
          title: 'Structural Retaining & Free-Standing Walls',
          image: 'stone-retaining-wall.jpg',
          icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="21" x2="21" y2="21"/><line x1="3" y1="10" x2="21" y2="10"/><polyline points="5 6 12 3 19 6"/><line x1="4" y1="10" x2="4" y2="21"/><line x1="20" y1="10" x2="20" y2="21"/></svg>',
          desc: 'Prevent hillside erosion and carve out usable flat yard space with retaining walls featuring buried baseline blocks, geogrid reinforcement, and gravel backfill.',
          checks: ['Geogrid structural anchoring mesh', 'Perforated drain pipes behind walls', 'Dry-stack or wet-mortar finishing']
        },
        {
          title: 'Artisan Stone Fire Pits & Seating Benches',
          image: 'hero-patio-sanctuary.jpg',
          icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>',
          desc: 'Wood-burning or gas-line integrated fire pits bordered by custom bullnose stone sitting walls that turn chilly evenings into inviting gatherings.',
          checks: ['Heavy-gauge steel burner fire rings', 'Refractory fire-brick inner liners', 'Integrated low-voltage under-cap LEDs']
        },
        {
          title: 'Advanced Drainage Integration',
          image: 'water-conservation.jpg',
          icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20"/><path d="m19 15-7 7-7-7"/></svg>',
          desc: 'Hidden channel drains, positive 2% slopes away from home foundations, and piped downspout diversions prevent puddling and water intrusion.',
          checks: ['Continuous pitch gradient away from home', 'Discreet channel & slot drain grates', 'Direct piped stormwater discharge']
        },
        {
          title: 'Polymeric Sand Zero-Weed Sealant',
          image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=700&q=80',
          icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
          desc: 'Activated polymeric sand bonds paver joints into a flexible rubberized shield, preventing ant tunneling, erosion, and weed sprouting.',
          checks: ['Weather-activated polymer binding', 'Resists rain washout and power washing', 'Enhances stone coloration and texture']
        }
      ],
      steps: [
        {
          num: '01',
          image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80',
          title: 'Excavation & Laser Grading',
          desc: 'We dig down 8-12 inches, verify proper slope gradients away from your foundation, and lay heavy-duty stabilization geotextile.'
        },
        {
          num: '02',
          image: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=600&q=80',
          title: 'Vibratory Base Compaction',
          desc: 'We install crushed dense aggregate in layered increments, compacting with industrial plate vibrators to create an unyielding foundation.'
        },
        {
          num: '03',
          image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80',
          title: 'Hand-Laid Stone & Edge Restraints',
          desc: 'Master masons hand-set pavers or flagstone, install heavy-duty edge restraints with steel spikes, and cut precision perimeter borders.'
        },
        {
          num: '04',
          image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=600&q=80',
          title: 'Polymer Lock & Final Seal',
          desc: 'We sweep polymeric sand into all joints, vibrate to eliminate voids, mist activate, and apply breathable protective stone sealant.'
        }
      ],
      gallery: [
        { src: 'stone-retaining-wall.jpg', title: 'Tiered Structural Retaining Wall' },
        { src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80', title: 'Natural Flagstone Living Terrace' },
        { src: 'hero-patio-sanctuary.jpg', title: 'Luxury Outdoor Flagstone Living' },
        { src: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80', title: 'Interlocking Paver Driveway Border' }
      ],
      transformation: {
        beforeImg: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=800&q=80',
        afterImg: 'hero-patio-sanctuary.jpg',
        property: 'Oakridge Hilltop Residence (450 Sq Ft Patio)',
        duration: '6 Business Days',
        deliverables: 'Tiered flagstone terrace, 42" fire pit, LED step lights',
        quote: '"The craftsmanship on our retaining wall and patio is unbelievable. After heavy spring downpours, the drainage performed flawlessly with zero standing water."'
      },
      pricing: [
        {
          title: 'Patio Extension & Walkway',
          badge: '',
          price: '$2,400',
          period: ' starting',
          featured: false,
          desc: 'Perfect for front walkways, side paths, or expanding an existing patio space.',
          features: [
            'Up to 150 sq ft paver installation',
            'Full 8" compacted aggregate base',
            'Commercial edge restraint system',
            'Polymeric sand joint seal',
            '5-year workmanship warranty'
          ],
          cta: 'Book Walkway Project',
          btnClass: 'btn-secondary'
        },
        {
          title: 'Artisan Living Terrace',
          badge: 'Most Popular',
          price: '$6,800',
          period: ' starting',
          featured: true,
          desc: 'Our signature outdoor living flagstone or paver patio with seating space.',
          features: [
            'Up to 400 sq ft natural flagstone/paver',
            '10" heavy-duty aggregate road base',
            'Integrated surface drainage channels',
            'Built-in natural stone fire pit',
            'Low-voltage step & path lighting wiring',
            '10-year structural warranty'
          ],
          cta: 'Book Artisan Terrace',
          btnClass: 'btn-primary'
        },
        {
          title: 'Grand Outdoor Living Suite',
          badge: '',
          price: '$14,500',
          period: ' starting',
          featured: false,
          desc: 'Full-scale luxury patio, tiered retaining walls, and custom outdoor kitchen.',
          features: [
            '700+ sq ft multi-level stone hardscape',
            'Engineered structural retaining walls',
            'Gas fire table & stone seat wall system',
            'Integrated conduit for audio & power',
            'Dedicated hardscape project superintendent',
            'Lifetime structural warranty'
          ],
          cta: 'Book Luxury Suite',
          btnClass: 'btn-secondary'
        }
      ],
      faqs: [
        {
          q: 'How do you prevent pavers from shifting or sinking over time?',
          a: '95% of patio failures occur beneath the surface. We prevent settling by excavating down to virgin subsoil, lining with high-tensile geotextile fabric, and compacting graded 21A crushed stone in 2-inch lifts with heavy vibratory rollers, capped with industrial edge restraints.'
        },
        {
          q: 'What is the difference between natural flagstone and concrete pavers?',
          a: 'Natural flagstone (like Bluestone or Quartzite) offers unique organic textures, earth tones, and timeless character. Concrete architectural pavers (like Belgard or Techo-Bloc) provide dimensional uniformity, modern aesthetic lines, and factory-tested compressive strengths exceeding 8,000 PSI.'
        },
        {
          q: 'Do retaining walls require special drainage pipes?',
          a: 'Yes, mandatory. Water pressure behind a retaining wall is the #1 cause of wall blowouts. We line the back of every retaining wall with clean drainage gravel and install perforated drain pipes wrapped in sock fabric to direct water safely away.'
        },
        {
          q: 'How long does a typical patio installation take?',
          a: 'A standard 300 to 500 sq ft patio is completed in 4 to 6 business days from initial excavation to final polymeric sealing, weather permitting.'
        },
        {
          q: 'Do you offer a warranty on hardscape construction?',
          a: 'Yes, we provide a 10-Year Transferable Structural Warranty on all hardscape installations covering base integrity, joint stability, and stone settling.'
        }
      ]
    },

    aeration: {
      id: 'aeration',
      name: 'Core Aeration, Soil Biology & Hybrid Overseeding',
      eyebrow: 'Turf Biology & Root Health',
      category: 'Turf Biology',
      heroImage: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1800&q=85',
      featuredImage: 'living-soil-first.jpg',
      heroLead: 'Breathe life into tired, compacted soil. Our commercial mechanical core aerators extract thousands of 3-inch soil plugs, breaking clay compaction, while our drought-resistant hybrid seed blends and organic microbial amendments turn thinning lawns into dense, weed-resistant carpets.',
      startingRate: '$140',
      rateUnit: ' / treatment',
      badges: [
        'Commercial Hollow-Tine Aeration',
        'Certified Weed-Free Hybrid Seed',
        'Microbial Organic Bio-Nutrition',
        'Guaranteed Seed Germination'
      ],
      scope: [
        {
          title: 'Heavy-Duty Hollow-Tine Core Extraction',
          image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=700&q=80',
          icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
          desc: 'We extract 8-12 soil cores per square foot at 2.5" to 3.5" depths, creating open conduits for root oxygenation, moisture absorption, and deep rooting.',
          checks: ['Commercial hydraulic down-pressure aerators', 'Decompresses rock-hard clay strata', 'Relieves thatch choking root crowns']
        },
        {
          title: 'Certified High-Germination Overseeding',
          image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=700&q=80',
          icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/></svg>',
          desc: 'Premium Blue Tag certified turf-type tall fescue and Kentucky Bluegrass blends bred for drought tolerance, dark emerald color, and disease resistance.',
          checks: ['0.0% weed seed purity guarantee', 'Calibrated slit and broadcast seeding', 'Deep root development genetics']
        },
        {
          title: 'Organic Humic & Kelp Soil Amendments',
          image: 'living-soil-first.jpg',
          icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
          desc: 'We inject concentrated organic humates, kelp meal, and beneficial mycorrhizae fungi directly into aeration holes to unlock tied-up soil minerals.',
          checks: ['Restores beneficial soil microbiome', 'Increases moisture retention by 30%', 'Eco-friendly and pet-safe immediately']
        },
        {
          title: 'Starter Nutrition & pH Balancing',
          image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=700&q=80',
          icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>',
          desc: 'High-phosphorus starter nutrition accelerates seed sprout, while pelletized limestone balances acidic soil to optimal 6.5-6.8 pH levels.',
          checks: ['Rapid 10-14 day seedling emergence', 'Corrects acidic clay soil imbalance', 'Non-burning slow-release pellets']
        },
        {
          title: 'Sprinkler Head & Boundary Flagging',
          image: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=700&q=80',
          icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/></svg>',
          desc: 'Prior to running aerators, our crew flags all subterranean sprinkler heads, shallow landscape lighting wires, and invisible dog fences to ensure zero damage.',
          checks: ['Complete irrigation head location flagging', 'Invisible pet fence safeguarding', 'Zero property damage guarantee']
        },
        {
          title: 'Custom Post-Care Watering Protocol',
          image: 'water-conservation.jpg',
          icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>',
          desc: 'We leave a personalized watering schedule calibrated to your soil type and sprinkler output, monitoring your progress until first mow.',
          checks: ['Day-by-day watering guidelines', 'Smart sprinkler schedule reprogramming', 'Free 30-day germination checkup']
        }
      ],
      steps: [
        {
          num: '01',
          image: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=600&q=80',
          title: 'Sprinkler & Utility Flagging',
          desc: 'We mark all in-ground sprinkler heads, valve boxes, and low-voltage cables with high-visibility flags to avoid damage.'
        },
        {
          num: '02',
          image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=600&q=80',
          title: 'Double-Pass Core Aeration',
          desc: 'We pull thousands of hollow-tine soil plugs across the entire lawn, making overlapping passes over high-traffic areas.'
        },
        {
          num: '03',
          image: 'living-soil-first.jpg',
          title: 'Precision Slit Overseeding',
          desc: 'We distribute certified hybrid grass seed with calibrated spreaders, dropping seeds directly into the aerated core holes.'
        },
        {
          num: '04',
          image: 'precision-mowing-stripes.jpg',
          title: 'Organic Food & Water Guidance',
          desc: 'We apply humic soil conditioner and starter food, followed by reprogramming your sprinkler timer for peak germination.'
        }
      ],
      gallery: [
        { src: 'living-soil-first.jpg', title: 'Microbial Soil Biology Enhancement' },
        { src: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=700&q=80', title: 'Hollow-Tine Deep Core Extraction' },
        { src: 'precision-mowing-stripes.jpg', title: 'Dense Emerald Lawn Maturation' },
        { src: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=700&q=80', title: 'Certified Hybrid Seed Germination' }
      ],
      transformation: {
        beforeImg: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=800&q=80',
        afterImg: 'precision-mowing-stripes.jpg',
        property: 'Sycamore Ridge Estate (0.5 Acre)',
        duration: '1 Day Service (21 Days to Lush Growth)',
        deliverables: 'Double core aeration, Kentucky Bluegrass overseed, humic feed',
        quote: '"Our lawn had bare patches and dry clay where nothing would grow. VerdantCraft aerated and seeded in late September—by spring it was so thick weeds couldn’t even take root."'
      },
      pricing: [
        {
          title: 'Essential Core Aeration',
          badge: '',
          price: '$140',
          period: ' / treatment',
          featured: false,
          desc: 'Basic mechanical hollow-tine aeration to decompact hard residential soil.',
          features: [
            'Up to 1/4 acre property coverage',
            'Full hollow-tine core extraction',
            'Sprinkler head inspection & flagging',
            'Thatch reduction and drainage boost',
            'Pet & child safe immediately'
          ],
          cta: 'Book Essential Aeration',
          btnClass: 'btn-secondary'
        },
        {
          title: 'Complete Turf Revival Suite',
          badge: 'Most Popular',
          price: '$260',
          period: ' / treatment',
          featured: true,
          desc: 'Our complete double-pass aeration, hybrid overseeding, and bio-nutrient boost.',
          features: [
            'Up to 1/2 acre property coverage',
            'Double-pass high-density core extraction',
            'Premium Blue Tag certified grass seed',
            'Organic humate & kelp root stimulant',
            'Pelletized soil pH balancing lime',
            '30-Day germination guarantee'
          ],
          cta: 'Book Turf Revival',
          btnClass: 'btn-primary'
        },
        {
          title: 'Master Estate Turf Restoration',
          badge: '',
          price: '$480',
          period: ' / treatment',
          featured: false,
          desc: 'Intensive restoration for large properties suffering from thinning or disease.',
          features: [
            'Up to 1.2 acre complete coverage',
            'Mechanical slit-seeding into soil trenches',
            'Custom hybrid seed species tailoring',
            'Slow-release mycorrhizal inoculation',
            'Sprinkler controller reprogramming',
            'Complimentary 45-day follow-up inspection'
          ],
          cta: 'Book Estate Restoration',
          btnClass: 'btn-secondary'
        }
      ],
      faqs: [
        {
          q: 'When is the best time of year to aerate and overseed?',
          a: 'Early to mid-autumn (late August through October) is the optimal window for cool-season grasses (Fescue, Bluegrass). Warm soil temperatures combined with cool evening air foster rapid root development with zero crabgrass competition. Spring aeration is also available for warm-season lawns.'
        },
        {
          q: 'What should I do with the soil plugs left on the lawn?',
          a: 'Leave them on the lawn! The soil plugs will naturally dissolve and break down within 1 to 2 weeks with regular watering or rainfall, releasing rich microbes and minerals back into the turf.'
        },
        {
          q: 'How often should I water my newly overseeded lawn?',
          a: 'Keep the top inch of soil consistently moist until seeds germinate. We recommend watering 2 to 3 times per day for 8 to 12 minutes each for the first 14 days, transitioning to deeper, less frequent watering once grass reaches 2 inches.'
        },
        {
          q: 'Will your aeration machines damage my underground sprinkler heads?',
          a: 'No. Our crew inspects your yard and flags every sprinkler head, valve cap, and underground cable before unloading equipment. We maintain a safe buffer around all flagged items.'
        },
        {
          q: 'What makes your grass seed blend superior to store-bought bags?',
          a: 'Big-box retail seed bags often contain weed seeds, filler coatings, and outdated cultivars. VerdantCraft uses 100% Certified Blue Tag seed with 0.0% weed seeds, scientifically proven for drought resilience, pest resistance, and deep emerald coloration.'
        }
      ]
    },

    irrigation: {
      id: 'irrigation',
      name: 'Smart Telemetry Sprinklers & French Drainage',
      eyebrow: 'Precision Water Conservation & Drainage',
      category: 'Water & Drainage',
      heroImage: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=1800&q=85',
      featuredImage: 'water-conservation.jpg',
      heroLead: 'Zero waste watering and permanent drainage mastery. We install smart weather-connected Rachio/Hunter Wi-Fi controllers, high-efficiency MP Rotator nozzles, and sub-surface French drainage systems that protect your home foundation and keep lawns lush with up to 40% less water.',
      startingRate: '$120',
      rateUnit: ' inspection',
      badges: [
        'Live Weather-Telemetry Wi-Fi Controllers',
        'High-Efficiency MP Rotator Nozzles',
        'Subsurface French Drainage Mastery',
        'Up to 40% Water Utility Savings'
      ],
      scope: [
        {
          title: 'Wi-Fi Smart Controller Telemetry',
          image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=700&q=80',
          icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01"/></svg>',
          desc: 'Upgrade to Rachio 3 or Hunter Hydrawise systems that automatically skip watering when rain or freeze is in the forecast, saving thousands of gallons.',
          checks: ['Hyper-local weather station syncing', 'Smartphone app control from anywhere', 'EPA WaterSense certified hardware']
        },
        {
          title: 'Precision Rotary Nozzle Audit & Retrofit',
          image: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=700&q=80',
          icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24"/><path d="m14.83 9.17 4.24-4.24"/><path d="m14.83 14.83 4.24 4.24"/><path d="m9.17 14.83-4.24 4.24"/></svg>',
          desc: 'We replace misty, inefficient spray heads with multi-trajectory rotating nozzles that resist wind drift and deposit water gently into root zones.',
          checks: ['Hunter MP Rotator multi-stream technology', 'Eliminates misting, overspray, and runoff', '30% higher water absorption efficiency']
        },
        {
          title: 'Subsurface Perforated French Drainage',
          image: 'water-conservation.jpg',
          icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20"/><path d="m19 15-7 7-7-7"/></svg>',
          desc: 'Solve swampy lawns, flooded flowerbeds, and pooling water around foundations with trench-excavated gravel-packed French drain networks.',
          checks: ['Non-woven geotextile silt filter wraps', 'Rigid schedule 40 smooth PVC pipes', 'Discreet pop-up daylight discharge valves']
        },
        {
          title: 'Spring Startup & Head Calibration',
          image: 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&w=700&q=80',
          icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>',
          desc: 'We repressurize lines slowly to prevent water hammer, inspect every zone valve for leaks, adjust spray arcs, and test moisture sensors.',
          checks: ['Slow repressurization pipe check', 'Arc alignment off sidewalks & house siding', 'Backflow preventer certification check']
        },
        {
          title: 'Fall Winterization & High-CFM Blowout',
          image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=700&q=80',
          icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
          desc: 'Using high-volume commercial air compressors, we purge 100% of residual water from underground lines and manifolds to prevent winter freeze cracking.',
          checks: ['High-CFM regulated air expulsion', 'Guarantees zero pipe burst damage', 'Full winterization certificate issued']
        },
        {
          title: 'Low-Flow Drip Irrigation for Plant Beds',
          image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=700&q=80',
          icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
          desc: 'Targeted sub-mulch drip tubing deposits moisture directly to specimen shrubs and perennials, preventing leaf fungal diseases and water evaporation.',
          checks: ['Pressure-compensating inline emitters', 'Sub-mulch concealment', 'Zero water waste on unplanted soil']
        }
      ],
      steps: [
        {
          num: '01',
          image: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=600&q=80',
          title: 'Zone Audit & Hydraulic Testing',
          desc: 'We test pressure levels, audit head coverage across all zones, check backflow preventers, and identify underground leaks.'
        },
        {
          num: '02',
          image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=600&q=80',
          title: 'Smart Controller & Nozzle Upgrades',
          desc: 'We replace outdated timer clocks with Wi-Fi smart controllers and retrofit inefficient heads with rotating nozzles.'
        },
        {
          num: '03',
          image: 'water-conservation.jpg',
          title: 'Drainage Trenching & Pipe Laying',
          desc: 'For drainage projects, we trench with laser slopes, line with geotextile fabric, lay perforated piping, and backfill with washed stone.'
        },
        {
          num: '04',
          image: 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&w=600&q=80',
          title: 'Flow Calibration & Mobile App Demo',
          desc: 'We calibrate cycle-and-soak runtimes, test daylight popup valves, and walk you through your smartphone dashboard.'
        }
      ],
      gallery: [
        { src: 'water-conservation.jpg', title: 'Precision Agricultural & Estate Flow Telemetry' },
        { src: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=700&q=80', title: 'Multi-Trajectory Rotary Sprinkler Calibration' },
        { src: 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&w=700&q=80', title: 'Zoned Plant Bed Hydration Systems' },
        { src: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=700&q=80', title: 'Smart App-Enabled Weather Controller' }
      ],
      transformation: {
        beforeImg: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=800&q=80',
        afterImg: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=800&q=80',
        property: 'Clearwater Creek Residence (6 Zones)',
        duration: '1 Day Retrofit & Calibration',
        deliverables: 'Smart Wi-Fi controller, 24 MP rotator heads, French drain',
        quote: '"Our monthly water bill dropped by $95 immediately after VerdantCraft tuned our zones and installed the smart controller. No more soggy backyard either!"'
      },
      pricing: [
        {
          title: 'Irrigation Inspection & Tune-Up',
          badge: '',
          price: '$120',
          period: ' / inspection',
          featured: false,
          desc: 'Comprehensive checkup of all sprinkler zones, pressure testing, and head alignment.',
          features: [
            'Up to 8 irrigation zones inspected',
            'Spray arc and radius adjustments',
            'Minor head clog clearing & cleaning',
            'Leak detection and pressure check',
            'Efficiency improvement report'
          ],
          cta: 'Book System Inspection',
          btnClass: 'btn-secondary'
        },
        {
          title: 'Smart Water-Saver Retrofit',
          badge: 'Most Popular',
          price: '$380',
          period: ' complete retrofit',
          featured: true,
          desc: 'Transform your legacy system into an automated smart Wi-Fi eco-system.',
          features: [
            'Rachio 3 Smart Wi-Fi Controller installation',
            'Full mobile app setup on your phone',
            'Weather-telemetry live rain skip sync',
            'Retrofit of up to 12 high-efficiency heads',
            'Spring startup & fall blowout included (Year 1)',
            'Guaranteed water utility reduction'
          ],
          cta: 'Book Smart Retrofit',
          btnClass: 'btn-primary'
        },
        {
          title: 'French Drainage Installation',
          badge: '',
          price: '$1,800',
          period: ' starting',
          featured: false,
          desc: 'Permanent underground drainage solution for soggy yards and downspouts.',
          features: [
            '50 linear feet French drainage trenching',
            'Heavy-gauge perforated schedule 40 pipe',
            'Non-woven geotextile silt fabric barrier',
            'Washed clean drainage gravel backfill',
            'Discreet pop-up emitter daylight exit',
            'Lifetime anti-clog drainage guarantee'
          ],
          cta: 'Book Drainage Project',
          btnClass: 'btn-secondary'
        }
      ],
      faqs: [
        {
          q: 'How much water does a smart Wi-Fi irrigation controller really save?',
          a: 'EPA WaterSense studies demonstrate that upgrading to a weather-predictive controller saves the average home between 7,600 and 15,000 gallons of water per year—reducing outdoor water utility costs by 30% to 50%.'
        },
        {
          q: 'What causes standing water and soggy puddles in my lawn?',
          a: 'Standing water is usually caused by heavy clay subsoil that prevents absorption, negative grading toward the home, or compacted soil layers. Our French drainage systems collect subsurface water and channel it safely away via gravity.'
        },
        {
          q: 'When should irrigation winterization blowout be done?',
          a: 'Winterization should be completed in October or November before the first sustained ground freeze. Leaving water inside pipes or valves can cause ice expansion, fracturing manifolds, heads, and copper backflows.'
        },
        {
          q: 'Can I control my irrigation system from my phone while away?',
          a: 'Yes! With our smart controller upgrades, you can turn zones on or off, adjust runtimes, and view water usage reports anywhere in the world from your iPhone or Android app.'
        },
        {
          q: 'Do you repair broken underground sprinkler pipes and valves?',
          a: 'Yes, our certified technicians carry electronic wire tracers and full replacement stock on our service trucks to quickly pinpoint and repair severed lines, failed solenoids, and leaking valves.'
        }
      ]
    },

    cleanups: {
      id: 'cleanups',
      name: 'Seasonal Property Cleanups & Shrub Pruning',
      eyebrow: 'Spring Awakening & Autumn Estate Prep',
      category: 'Seasonal Care',
      heroImage: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=1800&q=85',
      featuredImage: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=800&q=80',
      heroLead: 'Restore vitality and curb appeal. Whether clearing winter debris or preparing for the autumn chill, our comprehensive cleanups combine horticultural shrub pruning, flowerbed edging, organic cedar mulching, and high-velocity leaf clearing to make your estate shine.',
      startingRate: '$180',
      rateUnit: ' starting visit',
      badges: [
        'Horticultural Ornamental Pruning',
        'Deep Trench Flowerbed Edging',
        'Double-Shredded Organic Cedar Mulch',
        '100% Debris Haul & Eco-Composting'
      ],
      scope: [
        {
          title: 'Horticultural Shrub & Hedge Sculpting',
          image: 'hedge-shrub-trimming.jpg',
          icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
          desc: 'Pruning performed with bypass shears and hedge trimmers to remove deadwood, open interior air circulation, and promote vigorous seasonal blooms.',
          checks: ['Species-correct seasonal pruning timing', 'Deadwood and cross-branch removal', 'Sculpted aesthetic form with plant vitality']
        },
        {
          title: 'Deep Trench Flowerbed Edging',
          image: 'https://images.unsplash.com/photo-1592595896551-12b371d546d5?auto=format&fit=crop&w=700&q=80',
          icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>',
          desc: 'We cut clean, 3-inch deep curved spade trenches between lawn and garden beds, keeping mulch contained and stopping grass roots from invading.',
          checks: ['3-inch vertical landscape trenching', 'Smooth curving architectural contours', 'Prevents grass runners into perennial beds']
        },
        {
          title: 'Double-Shredded Hardwood / Cedar Mulch',
          image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=700&q=80',
          icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/></svg>',
          desc: 'Premium natural cedar or dark chocolate bark mulch installed at optimal 2-3" depths to retain moisture, suppress weeds, and insulate roots.',
          checks: ['Dye-free natural organic bark mulch', 'Root flare buffer to prevent tree rot', 'Natural cedar aromatic pest repellent']
        },
        {
          title: 'Total Fallen Leaf & Branch Evacuation',
          image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=700&q=80',
          icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/></svg>',
          desc: 'Complete extraction of wet matted leaves from under bushes, window wells, deck perimeters, and turf to stop snow mold and fungus.',
          checks: ['Clears window wells, fences & shrubs', 'Vacuum shredding and off-site hauling', '100% green-waste eco-composted']
        },
        {
          title: 'Perennial Cutback & Ornamental Grass Care',
          image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=700&q=80',
          icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>',
          desc: 'Trimming back spent flowering stalks, dead hostas, daylilies, and ornamental maiden grasses to ground level for clean winter emergence.',
          checks: ['Prevents disease overwintering in stems', 'Tidies beds for crisp winter architecture', 'Encourages dense spring re-growth']
        },
        {
          title: 'Pre-Emergent Weed Shield Application',
          image: 'living-soil-first.jpg',
          icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
          desc: 'We apply an organic, pet-safe pre-emergent barrier over freshly weeded soil before mulching, preventing weed seeds from sprouting all season.',
          checks: ['Suppresses crabgrass & broadleaf seeds', 'Safe around established perennials', 'Reduces summer hand-weeding by 85%']
        }
      ],
      steps: [
        {
          num: '01',
          image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=600&q=80',
          title: 'Bed Weeding & Leaf Evacuation',
          desc: 'We clear all fallen leaves, sticks, and existing weeds from garden beds, bushes, and turf zones.'
        },
        {
          num: '02',
          image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600&q=80',
          title: 'Shrub Trimming & Perennial Cutback',
          desc: 'Horticulturists sculpt hedges, prune deadwood, and trim spent perennials to promote vigorous seasonal health.'
        },
        {
          num: '03',
          image: 'https://images.unsplash.com/photo-1592595896551-12b371d546d5?auto=format&fit=crop&w=600&q=80',
          title: 'Spade Trench Bed Edging',
          desc: 'We carve 3-inch deep trench borders along all flowerbeds to create a crisp separation and contain mulch.'
        },
        {
          num: '04',
          image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=600&q=80',
          title: 'Mulch Installation & Hardscape Polishing',
          desc: 'We spread fresh double-shredded cedar mulch, apply pre-emergent weed shield, and blow clean all walkways.'
        }
      ],
      gallery: [
        { src: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=700&q=80', title: 'Estate Seasonal Spring Revival' },
        { src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=700&q=80', title: 'Ornamental Shrub Shearing & Health' },
        { src: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=700&q=80', title: 'Dark Organic Cedar Mulch Spreading' },
        { src: 'https://images.unsplash.com/photo-1592595896551-12b371d546d5?auto=format&fit=crop&w=700&q=80', title: 'Clean Curved Spade Trench Edge' }
      ],
      transformation: {
        beforeImg: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80',
        afterImg: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=800&q=80',
        property: 'Whispering Pines Estate (0.4 Acre)',
        duration: '1 Full Day Service',
        deliverables: 'Complete leaf cleanup, 14 cubic yards cedar mulch, shrub pruning',
        quote: '"The transformation after our spring cleanup was jaw-dropping. The trench edges look like art and the fresh cedar mulch made the whole front yard look like an upscale botanical garden."'
      },
      pricing: [
        {
          title: 'Essential Yard Refresh',
          badge: '',
          price: '$180',
          period: ' / visit',
          featured: false,
          desc: 'Targeted cleanup for small yards needing seasonal leaf removal and bed tidy.',
          features: [
            'Up to 1/4 acre leaf and stick clearing',
            'Light shrub hedge trimming (up to 6 shrubs)',
            'Perennial cutback and bed clearing',
            'All green debris hauled away',
            'Full blower surface clean-sweep'
          ],
          cta: 'Book Essential Refresh',
          btnClass: 'btn-secondary'
        },
        {
          title: 'Signature Spring / Fall Overhaul',
          badge: 'Most Popular',
          price: '$450',
          period: ' starting',
          featured: true,
          desc: 'Comprehensive seasonal overhaul with crisp spade edging and fresh cedar mulch.',
          features: [
            'Up to 1/2 acre complete property cleanup',
            'Horticultural pruning of all shrubs & hedges',
            'Deep 3" trench edging along all garden beds',
            'Pre-emergent weed shield barrier application',
            'Up to 5 cubic yards premium cedar mulch installed',
            'Complete off-site debris disposal included'
          ],
          cta: 'Book Signature Overhaul',
          btnClass: 'btn-primary'
        },
        {
          title: 'Grand Estate Seasonal Stewardship',
          badge: '',
          price: '$920',
          period: ' starting',
          featured: false,
          desc: 'Turnkey seasonal prep and deep restoration for large properties and estates.',
          features: [
            'Comprehensive multi-acre estate coverage',
            'Large tree deadwood thinning (up to 15 ft)',
            '10+ cubic yards premium bark mulch installed',
            'Flowerbed soil conditioning & fertilizer',
            'Winter wrap protection for delicate specimens',
            'Full day dedicated 4-person artisan crew'
          ],
          cta: 'Book Estate Stewardship',
          btnClass: 'btn-secondary'
        }
      ],
      faqs: [
        {
          q: 'How thick should mulch be applied in garden beds?',
          a: 'We install mulch at a depth of 2 to 3 inches. This is the optimal thickness to suppress weeds and retain soil moisture. We always keep mulch 2-3 inches away from tree trunks and shrub bases ("no mulch volcanoes") to prevent bark rot and rodent damage.'
        },
        {
          q: 'When is the best time for spring cleanup and mulching?',
          a: 'Early spring (March through May) once the ground has thawed is ideal. Applying pre-emergent barrier and fresh mulch before soil hits 55°F stops summer weeds before their seeds can germinate.'
        },
        {
          q: 'Do you take all the trimmed branches and leaves with you?',
          a: 'Yes, 100%. We shred and haul away all green waste in our commercial trailers, delivering it to certified local green-waste facilities for organic composting.'
        },
        {
          q: 'Can you trim overgrown hedges into formal geometric shapes?',
          a: 'Yes. Our crews are trained in formal boxwood hedging, topiary shearing, and natural hand-pruning of flowering shrubs like Hydrangeas, Rhododendrons, and Lilacs.'
        },
        {
          q: 'What type of mulch options do you offer?',
          a: 'We offer triple-shredded natural dark brown hardwood, aromatic natural cedar, rich black dyed mulch, and golden pine straw, allowing you to choose the exact hue that compliments your home architecture.'
        }
      ]
    },
    trimming: {
      id: 'trimming',
      name: 'Tree Shaping, Shrub Pruning & Hedging',
      eyebrow: 'Horticultural Precision & Crown Sculpting',
      category: 'Arboriculture & Pruning',
      heroImage: 'hedge-shrub-trimming.jpg',
      featuredImage: 'hedge-shrub-trimming.jpg',
      heroLead: 'Protect tree vitality and elevate estate aesthetics. Our ISA-trained arborists perform anatomical crown thinning, structural deadwood extraction, and surgical hedge sculpting for boxwoods, privets, arborvitaes, and ornamental fruit trees.',
      startingRate: '$120',
      rateUnit: ' starting rate',
      badges: [
        'Anatomical Branch Thinning',
        'Formal Geometric Hedge Shearing',
        'Deadwood & Blight Extraction',
        '100% Green Waste Chipping & Hauling'
      ],
      scope: [
        {
          title: 'Formal Architectural Hedge Shearing',
          image: 'hedge-shrub-trimming.jpg',
          icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
          desc: 'Precision laser-guided and handheld shearing of boxwoods, yews, and privets into symmetrical, flat-topped or rounded living walls.',
          checks: ['Crisp 90-degree corner geometry', 'Graduated taper ensuring sunlight to lower stems', 'Clean disinfectant blade sanitization']
        },
        {
          title: 'Ornamental Tree Crown Thinning',
          image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=700&q=80',
          icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>',
          desc: 'Strategic interior branch thinning allows wind penetration during storm events and increases canopy sunlight penetration by up to 40%.',
          checks: ['Selective cross-branch removal', 'Storm-wind resistance load reduction', 'Promotes inner leaf photosynthesis']
        },
        {
          title: 'Deadwood & Decay Extraction',
          image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=700&q=80',
          icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
          desc: 'We identify diseased, pest-infested, or dying limbs, executing clean collar cuts that seal naturally without leaving bark tears.',
          checks: ['Branch collar protection cuts', 'Pathogen and fungus suppression', 'Hazard limb prevention over roofs & cars']
        },
        {
          title: 'Fruit & Flowering Tree Pruning',
          image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=700&q=80',
          icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
          desc: 'Species-timed dormant pruning of apple, cherry, crepe myrtle, and hydrangea trees to maximize flower bud set and heavy fruit production.',
          checks: ['Dormant winter timing calibration', 'Spur protection for maximum fruit yield', 'Structural central leader training']
        },
        {
          title: 'Foundation & Gutter Clearance',
          image: 'https://images.unsplash.com/photo-1508873696983-2df5703bc20d?auto=format&fit=crop&w=700&q=80',
          icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>',
          desc: 'Cutting back overreaching branches maintaining a minimum 3-foot clearance from siding, gutters, rooflines, and overhead electrical feeds.',
          checks: ['3-foot structural perimeter buffer', 'Prevents rodent roof access routes', 'Prevents dampness & siding moss staining']
        },
        {
          title: 'On-Site Wood Chipping & Haul-Away',
          image: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=700&q=80',
          icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/></svg>',
          desc: 'High-speed commercial chippers process all trimmings on site into organic mulch or haul all branches away leaving grounds spotless.',
          checks: ['Zero debris left on turf or pavement', 'High-velocity blower cleanup', '100% eco-chipped and repurposed']
        }
      ],
      steps: [
        {
          num: '01',
          image: 'hedge-shrub-trimming.jpg',
          title: 'Canopy Health & Architecture Audit',
          desc: 'Our arborist inspects plant genetics, disease symptoms, structural balance, and proximity to buildings.'
        },
        {
          num: '02',
          image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80',
          title: 'Sanitized Cut Execution',
          desc: 'All tools are sterilized with isopropyl alcohol between trees before making precise anatomical branch cuts.'
        },
        {
          num: '03',
          image: 'hedge-shrub-trimming.jpg',
          title: 'Formal Architectural Shearing',
          desc: 'Crews string guide lines and shear formal hedges with razor-sharp motorized trimmers for flawless symmetry.'
        },
        {
          num: '04',
          image: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=600&q=80',
          title: 'Chipper Hauling & Surface Blow',
          desc: 'All cut branches are shredded into mulch or hauled away, followed by perimeter air-sweeping.'
        }
      ],
      gallery: [
        { src: 'hedge-shrub-trimming.jpg', title: 'Formal Boxwood Sculpting' },
        { src: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=700&q=80', title: 'Canopy Thinning & Sunlight Opening' },
        { src: 'https://images.unsplash.com/photo-1508873696983-2df5703bc20d?auto=format&fit=crop&w=700&q=80', title: 'Perennial Border & Shrub Pruning' },
        { src: 'estate-hero.jpg', title: 'Estate Boundary Hedge Architecture' }
      ],
      transformation: {
        beforeImg: 'https://images.unsplash.com/photo-1558904541-efa8c4a08931?auto=format&fit=crop&w=800&q=80',
        afterImg: 'hedge-shrub-trimming.jpg',
        property: 'Highland Oaks Residence (0.8 Acres)',
        duration: '1-Day Pruning & Sculpting Intensive',
        deliverables: 'Sculpted 350ft privet hedge, thinned 14 ornamental trees, cleared roofline',
        quote: '"Our ancient overgrown boxwoods were blocking all light to the living room. VerdantCraft transformed them into pristine geometric sculptures."'
      },
      pricing: [
        {
          title: 'Ornamental Shrub Maintenance',
          badge: '',
          price: '$120',
          unit: '/ session',
          desc: 'Ideal for standard residential homes with up to 15 ornamental shrubs and perimeter hedges.',
          features: [
            'Up to 15 shrubs trimmed & shaped',
            'Maximum 8ft height reach',
            'Hand-pruning of interior deadwood',
            'Full clipping cleanup & composting',
            'Annual shape maintenance warranty'
          ],
          cta: 'Schedule Shrub Session'
        },
        {
          title: 'Estate Hedge & Tree Pruning',
          badge: 'Most Popular',
          price: '$240',
          unit: '/ visit',
          desc: 'Comprehensive arborist care for large properties with specimen trees and extensive formal hedgerows.',
          features: [
            'Up to 35 shrubs & 5 small specimen trees',
            'Height reach up to 14ft with pole saws',
            'Canopy thinning & deadwood extraction',
            'Laser-guided formal hedge leveling',
            'Chipper truck on-site haul-away'
          ],
          cta: 'Book Estate Pruning'
        },
        {
          title: 'Total Canopy & Orchard Overhaul',
          badge: 'White-Glove',
          price: '$450',
          unit: '/ full day',
          desc: 'Full-day dedicated arborist crew for historic gardens, overgrown estates, and fruit orchards.',
          features: [
            'Full day with 3-person certified arborist crew',
            'All shrubs, privacy hedges, and trees up to 20ft',
            'Dormant fruit tree pruning & sanitation',
            'Deep root organic liquid fertilization',
            'Complete green waste recycling hauling'
          ],
          cta: 'Reserve Arborist Crew'
        }
      ],
      faqs: [
        {
          q: 'When is the best time of year to prune trees and hedges?',
          a: 'For deciduous trees and fruit trees, late winter or early spring (while dormant) is ideal. Formal evergreen hedges like boxwoods can be trimmed throughout the active growing season (late spring through early autumn).'
        },
        {
          q: 'Will pruning cause shock to my shrubs?',
          a: 'No, because our arborists adhere strictly to the "one-third rule," never removing more than 25-30% of living canopy in a single season. This stimulates healthy root energy without triggering stress shock.'
        },
        {
          q: 'Do you take all the trimmed branches and leaves with you?',
          a: 'Yes, 100%. We shred and haul away all green waste in our commercial trailers, delivering it to certified local green-waste facilities for organic composting.'
        },
        {
          q: 'Can you trim overgrown hedges into formal geometric shapes?',
          a: 'Yes. Our crews are trained in formal boxwood hedging, topiary shearing, and natural hand-pruning of flowering shrubs like Hydrangeas, Rhododendrons, and Lilacs.'
        }
      ]
    }
  };

  let activeServiceId = 'mowing';

  const elBreadcrumbTitle = document.getElementById('sd-crumb-title');
  const elHeroEyebrow = document.getElementById('sd-hero-eyebrow');
  const elHeroTitle = document.getElementById('sd-hero-title');
  const elHeroLead = document.getElementById('sd-hero-lead');
  const elHeroBgImg = document.getElementById('sd-hero-bg-img');
  const elHeroFeaturedImg = document.getElementById('sd-hero-featured-img');
  const elHeroPhotoTitle = document.getElementById('sd-hero-photo-title');
  const elHeroPhotoRate = document.getElementById('sd-hero-photo-rate');
  const elHeroBadges = document.getElementById('sd-hero-badges');
  const elScopeTitle = document.getElementById('sd-scope-title');
  const elScopeGrid = document.getElementById('sd-scope-grid');
  const elProcessGrid = document.getElementById('sd-process-grid');
  const elGalleryTitle = document.getElementById('sd-gallery-title');
  const elGalleryGrid = document.getElementById('sd-gallery-grid');
  const elPricingGrid = document.getElementById('sd-pricing-grid');
  const elFaqAccordion = document.getElementById('sd-faq-accordion');
  const elTransformationWrap = document.getElementById('sd-transformation-wrap');

  const elEstimatorServiceSelect = document.getElementById('sd-est-service');
  const elEstimatorYardSize = document.getElementById('sd-est-size');
  const elEstimatorFrequency = document.getElementById('sd-est-freq');
  const elEstimatorMulch = document.getElementById('sd-est-addon-mulch');
  const elEstimatorAeration = document.getElementById('sd-est-addon-aeration');
  const elEstimatorFertilizer = document.getElementById('sd-est-addon-fertilizer');
  const elEstimatorDisplay = document.getElementById('sd-dynamic-price');
  const elEstimatorForm = document.getElementById('sd-quick-book-form');
  const elEstimatorSuccess = document.getElementById('sd-booking-success');

  function renderService(serviceKey) {
    const data = SERVICES_DATA[serviceKey] || SERVICES_DATA.mowing;
    activeServiceId = data.id;

    document.title = `${data.name} | VerdantCraft Landscaping`;

    if (elBreadcrumbTitle) elBreadcrumbTitle.textContent = data.name;
    if (elHeroEyebrow) elHeroEyebrow.textContent = data.eyebrow;
    if (elHeroTitle) elHeroTitle.textContent = data.name;
    if (elHeroLead) elHeroLead.textContent = data.heroLead;
    if (elHeroBgImg) {
      elHeroBgImg.style.opacity = '0.3';
      setTimeout(() => {
        elHeroBgImg.src = data.heroImage;
        elHeroBgImg.alt = data.name;
        elHeroBgImg.style.opacity = '1';
      }, 150);
    }

    if (elHeroFeaturedImg) {
      elHeroFeaturedImg.src = data.featuredImage || data.heroImage;
      elHeroFeaturedImg.alt = `${data.name} in action`;
    }
    if (elHeroPhotoTitle) {
      elHeroPhotoTitle.textContent = data.name;
    }
    if (elHeroPhotoRate) {
      elHeroPhotoRate.textContent = `Starts at ${data.startingRate}`;
    }

    if (elHeroBadges) {
      elHeroBadges.innerHTML = data.badges.map(badge => `
        <span class="sd-hero-badge">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          <span>${badge}</span>
        </span>
      `).join('');
    }

    document.querySelectorAll('.sd-switcher-btn').forEach(btn => {
      const match = btn.getAttribute('data-service') === activeServiceId;
      btn.classList.toggle('active', match);
      btn.setAttribute('aria-selected', String(match));
    });

    if (elScopeTitle) elScopeTitle.textContent = `Full Technical Deliverables: ${data.name}`;
    if (elScopeGrid) {
      elScopeGrid.innerHTML = data.scope.map(item => `
        <div class="sd-scope-card">
          <div class="sd-scope-img-wrap">
            <img src="${item.image}" alt="${item.title}" loading="lazy">
            <div class="sd-scope-icon-badge">
              ${item.icon}
            </div>
          </div>
          <div class="sd-scope-content">
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
            <ul class="sd-scope-list">
              ${item.checks.map(chk => `
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>${chk}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        </div>
      `).join('');
    }

    if (elProcessGrid) {
      elProcessGrid.innerHTML = data.steps.map(step => `
        <div class="sd-process-card">
          <div class="sd-process-img-wrap">
            <img src="${step.image}" alt="${step.title}" loading="lazy">
            <div class="sd-process-step-num">${step.num}</div>
          </div>
          <div class="sd-process-body">
            <h3>${step.title}</h3>
            <p>${step.desc}</p>
          </div>
        </div>
      `).join('');
    }

    if (elGalleryTitle) elGalleryTitle.textContent = `${data.name} Real Project Showcase`;
    if (elGalleryGrid && data.gallery) {
      elGalleryGrid.innerHTML = data.gallery.map(g => `
        <div class="sd-gallery-card">
          <img src="${g.src}" alt="${g.title}" loading="lazy">
          <div class="sd-gallery-caption">
            <span>${g.title}</span>
          </div>
        </div>
      `).join('');
    }

    if (elTransformationWrap) {
      elTransformationWrap.innerHTML = `
        <div class="row g-0 align-items-center">
          <div class="col-lg-7">
            <div class="ba-slider-container" style="height:440px; position:relative; overflow:hidden;">
              <img src="${data.transformation.afterImg}" alt="${data.name} After Transformation" class="ba-img-after" style="width:100%; height:100%; object-fit:cover;">
              <div class="ba-img-before" style="position:absolute; inset:0; width:50%; overflow:hidden;">
                <img src="${data.transformation.beforeImg}" alt="${data.name} Before Service" style="width:100%; height:100%; object-fit:cover; position:absolute; top:0; left:0; width:100%; height:100%;">
                <span class="ba-tag ba-tag-before" style="position:absolute; top:18px; left:18px; background:rgba(0,0,0,0.7); color:#fff; padding:4px 10px; border-radius:4px; font-size:0.78rem; font-weight:700; text-transform:uppercase;">Before</span>
              </div>
              <span class="ba-tag ba-tag-after" style="position:absolute; top:18px; right:18px; background:var(--primary); color:#fff; padding:4px 10px; border-radius:4px; font-size:0.78rem; font-weight:700; text-transform:uppercase;">After</span>
              <div class="ba-slider-handle" style="position:absolute; top:0; bottom:0; left:50%; width:4px; background:#fff; transform:translateX(-50%); pointer-events:none; box-shadow:0 0 10px rgba(0,0,0,0.5);">
                <div class="ba-handle-circle" style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); width:38px; height:38px; border-radius:50%; background:#fff; display:flex; align-items:center; justify-content:center; box-shadow:0 4px 12px rgba(0,0,0,0.3); color:var(--primary);">
                  <svg style="width:18px;height:18px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
                  <svg style="width:18px;height:18px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                </div>
              </div>
              <input type="range" min="0" max="100" value="50" class="ba-range-input" aria-label="Slide to compare before and after" style="position:absolute; inset:0; opacity:0; cursor:ew-resize; width:100%; height:100%; margin:0; z-index:10;">
            </div>
          </div>
          <div class="col-lg-5">
            <div class="sd-transform-meta">
              <span class="eyebrow" style="margin-bottom:8px;">Proven Transformation</span>
              <h3 style="font-size:1.35rem; margin-bottom:14px;">Real Estate Results</h3>
              <p style="font-size:0.92rem; color:var(--text-secondary); margin-bottom:18px; font-style:italic;">
                ${data.transformation.quote}
              </p>
              <ul class="sd-transform-meta-list">
                <li><strong>Property Profile:</strong> <span>${data.transformation.property}</span></li>
                <li><strong>Turnaround:</strong> <span>${data.transformation.duration}</span></li>
                <li><strong>Deliverables:</strong> <span>${data.transformation.deliverables}</span></li>
              </ul>
              <div class="d-flex align-items-center gap-2 mt-2">
                <div class="d-flex text-warning">
                  <svg style="width:18px;height:18px;fill:#eab308;" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  <svg style="width:18px;height:18px;fill:#eab308;" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  <svg style="width:18px;height:18px;fill:#eab308;" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  <svg style="width:18px;height:18px;fill:#eab308;" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  <svg style="width:18px;height:18px;fill:#eab308;" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                </div>
                <strong style="font-size:0.92rem;">100% Client Satisfaction Guarantee</strong>
              </div>
            </div>
          </div>
        </div>
      `;

      initSlider(elTransformationWrap.querySelector('.ba-slider-container'));
    }

    if (elPricingGrid) {
      elPricingGrid.innerHTML = data.pricing.map(plan => `
        <div class="sd-pricing-card ${plan.featured ? 'featured' : ''}">
          ${plan.badge ? `<div class="sd-pricing-badge">${plan.badge}</div>` : ''}
          <div class="sd-pricing-title">${plan.title}</div>
          <div class="sd-pricing-desc">${plan.desc}</div>
          <div class="sd-pricing-rate">
            ${plan.price}<span style="font-size:0.95rem; font-weight:600; color:var(--text-muted);">${plan.period}</span>
          </div>
          <ul class="sd-pricing-features">
            ${plan.features.map(f => `
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>${f}</span>
              </li>
            `).join('')}
          </ul>
          <a href="#instant-estimator" class="btn ${plan.btnClass} w-100 mt-auto" onclick="window.VerdantServiceDetail.selectPlanForBooking('${data.id}', '${plan.title}')">
            ${plan.cta}
          </a>
        </div>
      `).join('');
    }

    if (elFaqAccordion) {
      elFaqAccordion.innerHTML = data.faqs.map((faq, index) => `
        <div class="faq-item ${index === 0 ? 'is-open' : ''}">
          <button type="button" class="faq-trigger" aria-expanded="${index === 0 ? 'true' : 'false'}">
            <span>${faq.q}</span>
            <svg class="icon faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
          <div class="faq-content">
            <p>${faq.a}</p>
          </div>
        </div>
      `).join('');
      initFaqs();
    }

    if (elEstimatorServiceSelect) {
      elEstimatorServiceSelect.value = data.id;
      calculateEstimate();
    }
  }

  function initSlider(container) {
    if (!container) return;
    const rangeInput = container.querySelector('.ba-range-input');
    const beforeImgWrap = container.querySelector('.ba-img-before');
    const handle = container.querySelector('.ba-slider-handle');

    if (rangeInput && beforeImgWrap && handle) {
      const update = () => {
        const val = rangeInput.value;
        const isRtl = document.documentElement.dir === 'rtl';
        if (isRtl) {
          beforeImgWrap.style.width = `${100 - val}%`;
          handle.style.left = `${100 - val}%`;
        } else {
          beforeImgWrap.style.width = `${val}%`;
          handle.style.left = `${val}%`;
        }
      };
      rangeInput.addEventListener('input', update);
      window.addEventListener('directionchange', update);
      update();
    }
  }

  function initFaqs() {
    const faqItems = document.querySelectorAll('#sd-faq-accordion .faq-item');
    faqItems.forEach(item => {
      const trigger = item.querySelector('.faq-trigger');
      if (trigger) {
        trigger.addEventListener('click', () => {
          const isOpen = item.classList.contains('is-open');
          faqItems.forEach(i => {
            i.classList.remove('is-open');
            const t = i.querySelector('.faq-trigger');
            if (t) t.setAttribute('aria-expanded', 'false');
          });
          if (!isOpen) {
            item.classList.add('is-open');
            trigger.setAttribute('aria-expanded', 'true');
          }
        });
      }
    });
  }

  function calculateEstimate() {
    if (!elEstimatorDisplay) return;

    const service = elEstimatorServiceSelect ? elEstimatorServiceSelect.value : activeServiceId;
    const yardSize = elEstimatorYardSize ? elEstimatorYardSize.value : 'small';
    const frequency = elEstimatorFrequency ? elEstimatorFrequency.value : 'biweekly';

    let baseRate = 65;
    switch (service) {
      case 'design':
        baseRate = 350;
        break;
      case 'hardscapes':
        baseRate = 1800;
        break;
      case 'cleanups':
        baseRate = 180;
        break;
      case 'aeration':
        baseRate = 140;
        break;
      case 'irrigation':
        baseRate = 120;
        break;
      case 'mowing':
      default:
        baseRate = 45;
        break;
    }

    let multiplier = 1.0;
    if (yardSize === 'medium') multiplier = 1.45;
    else if (yardSize === 'large') multiplier = 2.1;
    else if (yardSize === 'estate') multiplier = 3.2;

    let subtotal = baseRate * multiplier;

    if (elEstimatorMulch && elEstimatorMulch.checked) subtotal += 75;
    if (elEstimatorAeration && elEstimatorAeration.checked) subtotal += 60;
    if (elEstimatorFertilizer && elEstimatorFertilizer.checked) subtotal += 45;

    if (service === 'mowing') {
      if (frequency === 'weekly') subtotal *= 0.85;
      else if (frequency === 'biweekly') subtotal *= 0.90;
    }

    const lowRange = Math.round(subtotal * 0.95);
    const highRange = Math.round(subtotal * 1.15);

    if (service === 'hardscapes') {
      elEstimatorDisplay.textContent = `$${Math.round(subtotal * 0.9).toLocaleString()} - $${Math.round(subtotal * 1.25).toLocaleString()}`;
    } else {
      elEstimatorDisplay.textContent = `$${lowRange} - $${highRange}`;
    }
  }

  function selectPlanForBooking(serviceId, planTitle) {
    if (elEstimatorServiceSelect) {
      elEstimatorServiceSelect.value = serviceId;
      calculateEstimate();
    }
    const notesInput = document.getElementById('sd-est-notes');
    if (notesInput) {
      notesInput.value = `Selected Package: ${planTitle}`;
    }
  }

  window.VerdantServiceDetail = {
    switchService: function (serviceKey) {
      if (!SERVICES_DATA[serviceKey]) return;

      const newUrl = `${window.location.pathname}?service=${serviceKey}`;
      window.history.pushState({ service: serviceKey }, '', newUrl);
      renderService(serviceKey);

      const targetEl = document.querySelector('#service-scope') || document.querySelector('.sd-hero');
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    },
    selectPlanForBooking: selectPlanForBooking
  };

  document.addEventListener('DOMContentLoaded', () => {

    const params = new URLSearchParams(window.location.search);
    let initialService = window.DEFAULT_SERVICE || params.get('service');

    if (!initialService) {
      const page = (document.body.getAttribute('data-page') || window.location.pathname).toLowerCase();
      if (page.includes('mowing')) initialService = 'mowing';
      else if (page.includes('hardscaping') || page.includes('hardscape')) initialService = 'hardscapes';
      else if (page.includes('aeration')) initialService = 'aeration';
      else if (page.includes('irrigation')) initialService = 'irrigation';
      else if (page.includes('trimming')) initialService = 'trimming';
      else if (page.includes('cleanup')) initialService = 'cleanups';
      else if (page.includes('design')) initialService = 'design';
    }

    if (initialService) {
      initialService = initialService.toLowerCase().trim();
      if (initialService === 'aeration-seeding') initialService = 'aeration';
      if (initialService === 'cleanup') initialService = 'cleanups';
      if (initialService === 'hardscaping' || initialService === 'hardscape') initialService = 'hardscapes';
    }

    if (!SERVICES_DATA[initialService]) {
      initialService = 'mowing';
    }

    renderService(initialService);

    document.querySelectorAll('.sd-switcher-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const serviceKey = btn.getAttribute('data-service');
        window.VerdantServiceDetail.switchService(serviceKey);
      });
    });

    window.addEventListener('popstate', (e) => {
      const popParams = new URLSearchParams(window.location.search);
      const popService = popParams.get('service') || 'mowing';
      renderService(popService);
    });

    [elEstimatorServiceSelect, elEstimatorYardSize, elEstimatorFrequency, elEstimatorMulch, elEstimatorAeration, elEstimatorFertilizer].forEach(el => {
      if (el) el.addEventListener('change', calculateEstimate);
    });

    if (elEstimatorServiceSelect) {
      elEstimatorServiceSelect.addEventListener('change', () => {
        const selected = elEstimatorServiceSelect.value;
        if (SERVICES_DATA[selected] && selected !== activeServiceId) {
          window.VerdantServiceDetail.switchService(selected);
        }
      });
    }

    if (elEstimatorForm) {
      elEstimatorForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let hasError = false;

        const nameInput = document.getElementById('sd-est-name');
        const phoneInput = document.getElementById('sd-est-phone');
        const emailInput = document.getElementById('sd-est-email');
        const dateInput = document.getElementById('sd-est-date');

        if (nameInput && !nameInput.value.trim()) {
          if (window.FormValidator) window.FormValidator.showError(nameInput, 'Please enter your full name.');
          hasError = true;
        } else if (nameInput && window.FormValidator) {
          window.FormValidator.clearError(nameInput);
        }

        if (phoneInput && window.FormValidator && !window.FormValidator.validatePhone(phoneInput.value)) {
          window.FormValidator.showError(phoneInput, 'Please provide a valid phone number.');
          hasError = true;
        } else if (phoneInput && window.FormValidator) {
          window.FormValidator.clearError(phoneInput);
        }

        if (emailInput && window.FormValidator && !window.FormValidator.validateEmail(emailInput.value)) {
          window.FormValidator.showError(emailInput, 'Please provide a valid email address.');
          hasError = true;
        } else if (emailInput && window.FormValidator) {
          window.FormValidator.clearError(emailInput);
        }

        if (dateInput && !dateInput.value) {
          if (window.FormValidator) window.FormValidator.showError(dateInput, 'Please choose a preferred start date.');
          hasError = true;
        } else if (dateInput && window.FormValidator) {
          window.FormValidator.clearError(dateInput);
        }

        if (hasError) return;

        const bookingData = {
          service: elEstimatorServiceSelect ? elEstimatorServiceSelect.value : activeServiceId,
          name: nameInput ? nameInput.value : '',
          phone: phoneInput ? phoneInput.value : '',
          email: emailInput ? emailInput.value : '',
          date: dateInput ? dateInput.value : '',
          estimatedPrice: elEstimatorDisplay ? elEstimatorDisplay.textContent : '$65 - $85',
          submittedAt: new Date().toISOString()
        };

        try {
          localStorage.setItem('verdant-last-booking', JSON.stringify(bookingData));
        } catch (err) {}

        elEstimatorForm.style.display = 'none';
        if (elEstimatorSuccess) {
          elEstimatorSuccess.style.display = 'block';
          elEstimatorSuccess.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  });
})();

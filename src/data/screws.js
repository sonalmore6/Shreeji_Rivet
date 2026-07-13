export const screwProducts = [

  // 1
  {
    id: 'chipboard-screw',
    name: 'Chipboard Screw',
    code: 'CS',
    group: 'Chipboard & Wood',
    img: '/images/SCREWS/c-product251201180311_1579_109.png',
    desc: 'Yellow zinc-plated coarse-thread screw engineered for chipboard, particleboard, MDF, and timber furniture assembly.',
    badge: 'CS Type · Chipboard · Coarse Thread',
    heroDesc: 'Chipboard Screws feature a sharp, coarse thread and hardened point designed to cut directly into chipboard, particleboard, and MDF without splitting — the industry standard for flat-pack furniture, cabinet carcasses, and shelving assembly.',
    chips: ['Chipboard', 'MDF', 'Coarse Thread', 'Yellow Zinc'],
    overview: [
      'The Chipboard Screw has a narrow shank with a wide, deep coarse thread that bites aggressively into manufactured wood panels. The reduced-diameter shank minimises panel splitting during installation while the coarse pitch provides exceptional pull-out resistance in particleboard and MDF.',
      'Yellow zinc plating offers a bright, corrosion-resistant finish suited to interior furniture applications. The countersunk head sits flush with the panel surface, making it ideal for cabinet carcasses, shelf units, drawer construction, and general flat-pack furniture assembly.',
    ],
    specs: [
      { icon: 'bi-rulers',       title: 'Size Range',    value: '3.0×16 to 6.0×100',   sub: 'Metric sizes to DIN standards'  },
      { icon: 'bi-gem',          title: 'Material',       value: 'Case-Hardened Steel',   sub: 'Yellow zinc plated finish'      },
      { icon: 'bi-layers-fill',  title: 'Head & Drive',   value: 'Countersunk / Pozi',    sub: 'Coarse thread, sharp point'     },
    ],
    features: [
      { title: 'Coarse Thread Design',       desc: 'Wide, deep thread bites firmly into chipboard and MDF for high pull-out resistance.'  },
      { title: 'Split-Resistant Entry',      desc: 'Narrow shank and sharp point penetrate manufactured panels without splitting the edge.' },
      { title: 'Yellow Zinc Finish',         desc: 'Bright corrosion-resistant plating for long-lasting performance in indoor furniture.'   },
    ],
  },

  // 2
  {
    id: 'drywall-screw',
    name: 'Drywall Screw',
    code: 'DS',
    group: 'Chipboard & Wood',
    img: '/images/SCREWS/c-product251201181551_6655_109.png',
    desc: 'Black phosphate bugle-head screw for attaching gypsum drywall to metal or timber studs. Fine thread for metal, coarse thread for wood.',
    badge: 'DS Type · Drywall · Bugle Head',
    heroDesc: 'Drywall Screws are the primary fastener for gypsum board installation — the black phosphate coating prevents rust in humid environments, and the bugle head countersinks smoothly without tearing the paper face of the drywall.',
    chips: ['Drywall', 'Bugle Head', 'Black Phosphate', 'Metal & Wood Studs'],
    overview: [
      'Drywall Screws are available in two thread forms: fine thread (W type) for wood studs and coarse thread (S type) for light-gauge steel studs. The bugle underhead profile tapers gradually, allowing the screw to set precisely flush with the drywall surface without punching through or tearing the paper face.',
      'Black phosphate coating provides corrosion resistance in humid interior environments and prevents rust bleed-through on finished plasterboard surfaces. Phillips drive ensures fast, consistent installation with a drywall screwgun.',
    ],
    specs: [
      { icon: 'bi-rulers',       title: 'Size Range',    value: '3.5×25 to 4.2×100',   sub: 'Standard drywall lengths'       },
      { icon: 'bi-gem',          title: 'Material',       value: 'Carbon Steel',          sub: 'Black phosphate coating'        },
      { icon: 'bi-layers-fill',  title: 'Head & Drive',   value: 'Bugle / Phillips',      sub: 'Fine (S) or Coarse (W) thread'  },
    ],
    features: [
      { title: 'Bugle Head Profile',         desc: 'Tapered underhead countersinks flush without tearing the drywall paper face.'         },
      { title: 'Black Phosphate Coating',    desc: 'Rust prevention in humid environments — no bleed-through on plastered surfaces.'       },
      { title: 'Fine & Coarse Thread',       desc: 'S-type for metal studs; W-type for wood studs — correct thread for every substrate.'   },
    ],
  },

  // 3
  {
    id: 'twinfast-drywall-screw',
    name: 'Twinfast Drywall Screw',
    code: 'TDS',
    group: 'Chipboard & Wood',
    img: '/images/SCREWS/c-product251103144258_2481_18.png',
    desc: 'Double-thread drywall screw that installs twice as fast as standard single-thread variants, reducing drive time on high-volume boarding jobs.',
    badge: 'TDS Type · Twin Thread · Fast Install',
    heroDesc: 'The Twinfast Drywall Screw uses a double-thread helix to advance twice as fast per revolution compared to a standard drywall screw — dramatically cutting installation time on large boarding projects without sacrificing holding power.',
    chips: ['Twin Thread', 'Fast Install', 'Drywall', 'High Volume'],
    overview: [
      'Twinfast screws carry two parallel threads wound around the same shank. Each rotation of the driver advances the screw by two thread pitches simultaneously, halving the drive time needed to fully seat the screw in timber or light-gauge metal studs.',
      'Particularly valuable on large-scale commercial boarding projects where thousands of screws are installed each day. The reduced drive time directly lowers labour cost and operator fatigue while maintaining full pull-out resistance in the substrate.',
    ],
    specs: [
      { icon: 'bi-rulers',       title: 'Size Range',    value: '3.5×32 to 4.2×90',    sub: 'Standard boarding lengths'      },
      { icon: 'bi-gem',          title: 'Material',       value: 'Carbon Steel',          sub: 'Black phosphate coating'        },
      { icon: 'bi-layers-fill',  title: 'Head & Drive',   value: 'Bugle / Phillips',      sub: 'Dual thread helix shank'        },
    ],
    features: [
      { title: 'Dual Thread Helix',          desc: 'Two threads advance the screw twice as far per revolution — half the drive time.'       },
      { title: 'High-Volume Efficiency',     desc: 'Significantly reduces labour cost on large boarding and drylining projects.'             },
      { title: 'Full Hold Strength',         desc: 'Double thread maintains the same pull-out resistance as a standard drywall screw.'       },
    ],
  },

  // 4
  {
    id: 'hex-washer-head-screw',
    name: 'Hex Washer Head Screw',
    code: 'HWS',
    group: 'Sheet Metal',
    img: '/images/SCREWS/c-product251202162428_4832_116.png',
    desc: 'Self-tapping hex washer head screw for sheet metal. Integrated washer distributes clamping load; hex drive allows socket installation for high torque.',
    badge: 'HWS Type · Hex Washer · Sheet Metal',
    heroDesc: 'The Hex Washer Head Screw is a self-tapping sheet metal screw with an integrated washer beneath the hex head — allowing socket or nut-runner installation at high torque while the built-in washer distributes the clamping force across a larger surface area.',
    chips: ['Hex Washer', 'Sheet Metal', 'Self-Tapping', 'Socket Drive'],
    overview: [
      'Hex Washer Head Screws use a self-tapping thread to cut into pre-drilled or punched holes in sheet metal, providing a robust threaded connection without requiring a nut on the reverse side. The hex head allows fast installation with a nut-runner or impact driver socket.',
      'The integrated washer beneath the head eliminates loose washer handling, ensures consistent seating pressure, and prevents the head from pulling through or distorting thin sheet panels during installation.',
    ],
    specs: [
      { icon: 'bi-rulers',       title: 'Size Range',    value: '4.2×13 to 6.3×50',    sub: 'Sheet metal sizes'              },
      { icon: 'bi-gem',          title: 'Material',       value: 'Carbon Steel',          sub: 'Zinc plated / bichromate'       },
      { icon: 'bi-layers-fill',  title: 'Drive Type',     value: 'Hex Socket (5/16")',    sub: 'Self-tapping thread, Type AB'   },
    ],
    features: [
      { title: 'Integrated Washer',          desc: 'Built-in washer distributes clamping load and removes the need for separate washers.'   },
      { title: 'High-Torque Socket Drive',   desc: 'Hex head allows nut-runner installation for fast, consistent assembly line use.'         },
      { title: 'Self-Tapping Thread',        desc: 'Cuts its own thread in pre-drilled sheet metal — no nut or back-side access required.'   },
    ],
  },

  // 5
  {
    id: 'pan-head-din7981',
    name: 'Pan Head Screw',
    code: 'PH-7981',
    group: 'Sheet Metal',
    img: '/images/SCREWS/c-product251202163025_5356_116.png',
    desc: 'Rounded pan head self-tapping sheet metal screw to DIN 7981. Phillips/Pozidriv drive for general sheet metal, HVAC, and panel fastening.',
    badge: 'PH-7981 · DIN 7981 · Pan Head Sheet Metal',
    heroDesc: 'The Pan Head Sheet Metal Screw to DIN 7981 is the most common self-tapping screw for general sheet metal fabrication — a rounded pan head with Phillips or Pozidriv drive that taps its own thread in pre-drilled thin sheet steel.',
    chips: ['DIN 7981', 'Pan Head', 'Sheet Metal', 'Self-Tapping'],
    overview: [
      'DIN 7981 defines the pan head form for sheet metal screws — a rounded, slightly domed head with a flat underside that bears evenly on the sheet surface without distorting it. The Type AB self-tapping thread cuts into the thin sheet with precision.',
      'Used across HVAC ductwork, electrical enclosures, automotive bodywork, and general sheet metal fabrication wherever a standard visible, low-profile fastener head is required.',
    ],
    specs: [
      { icon: 'bi-rulers',       title: 'Size Range',    value: '2.2×6.5 to 6.3×50',   sub: 'To DIN 7981 standard'           },
      { icon: 'bi-gem',          title: 'Material',       value: 'Carbon Steel',          sub: 'Zinc / bright / stainless'      },
      { icon: 'bi-layers-fill',  title: 'Head & Drive',   value: 'Pan Head / Phillips',   sub: 'Self-tapping thread, Type AB'   },
    ],
    features: [
      { title: 'DIN 7981 Specification',     desc: 'Meets the DIN 7981 standard for pan head self-tapping sheet metal screws.'             },
      { title: 'Rounded Pan Profile',        desc: 'Domed head with flat underside — clean appearance with even load distribution.'          },
      { title: 'HVAC & Enclosure Rated',     desc: 'Standard choice for ductwork, switchboards, automotive, and panel fabrication.'          },
    ],
  },

  // 6
  {
    id: 'flat-head-din7982',
    name: 'Flat Head Screw',
    code: 'FH-7982',
    group: 'Sheet Metal',
    img: '/images/SCREWS/c-product251202163511_4689_116.png',
    desc: 'Countersunk flat-head self-tapping sheet metal screw to DIN 7982. Sits flush after installation for a clean, snag-free surface on sheet metal panels.',
    badge: 'FH-7982 · DIN 7982 · Flat Head Sheet Metal',
    heroDesc: 'The DIN 7982 Flat Head Sheet Metal Screw seats flush with the material surface after installation — the countersunk sheet metal screw for applications where a protruding head would obstruct adjacent components or present a snag hazard.',
    chips: ['DIN 7982', 'Countersunk', 'Flush Finish', 'Sheet Metal'],
    overview: [
      'DIN 7982 specifies the countersunk (flat) head form for self-tapping sheet metal screws. The angled underhead seats into a countersunk hole in the sheet, producing a completely flat surface after installation.',
      'Required in any sheet metal assembly where a protruding head would foul an adjacent sliding or rotating part, create a snag point in a safety-critical location, or simply where a flush aesthetic is required on a visible panel face.',
    ],
    specs: [
      { icon: 'bi-rulers',       title: 'Size Range',    value: '2.9×9.5 to 6.3×50',   sub: 'To DIN 7982 standard'           },
      { icon: 'bi-gem',          title: 'Material',       value: 'Carbon Steel',          sub: 'Zinc plated / stainless'        },
      { icon: 'bi-layers-fill',  title: 'Head & Drive',   value: 'Countersunk / Phillips', sub: 'Self-tapping thread, Type AB'  },
    ],
    features: [
      { title: 'DIN 7982 Specification',     desc: 'Fully compliant with DIN 7982 countersunk self-tapping sheet metal screw standard.'     },
      { title: 'Flush Surface Finish',       desc: 'Head seats level with the sheet surface — no protrusion after full installation.'         },
      { title: 'Safety & Aesthetic Use',     desc: 'Eliminates snag points on safety-critical panels and visible finished surfaces.'          },
    ],
  },

  // 7
  {
    id: 'oval-head-din7983',
    name: 'Oval Head Screw',
    code: 'OH-7983',
    group: 'Sheet Metal',
    img: '/images/SCREWS/c-product251202163828_3179_116.png',
    desc: 'Raised countersunk / oval head self-tapping sheet metal screw to DIN 7983. Decorative low dome above the panel surface for a finished appearance.',
    badge: 'OH-7983 · DIN 7983 · Oval Head Sheet Metal',
    heroDesc: 'The DIN 7983 Oval Head Sheet Metal Screw features a raised countersunk profile — partially countersinking into the panel while leaving a low, decorative dome above the surface for a refined, finished appearance.',
    chips: ['DIN 7983', 'Oval Head', 'Decorative', 'Sheet Metal'],
    overview: [
      'DIN 7983 defines the raised countersunk (oval) head form — a hybrid between the fully flush flat head and the fully proud pan head. The angled underhead partially seats into the panel, while the shallow dome sits neatly above the surface.',
      'Provides a decorative finish on visible panel faces where a completely flush head is not required but a prominent pan head would look too industrial. Common in consumer electronics housings, decorative enclosures, and automotive interior panels.',
    ],
    specs: [
      { icon: 'bi-rulers',       title: 'Size Range',    value: '2.9×9.5 to 5.5×32',   sub: 'To DIN 7983 standard'           },
      { icon: 'bi-gem',          title: 'Material',       value: 'Carbon Steel',          sub: 'Zinc / stainless / chrome'      },
      { icon: 'bi-layers-fill',  title: 'Head & Drive',   value: 'Oval (Raised CSK) / Phillips', sub: 'Self-tapping, Type AB'   },
    ],
    features: [
      { title: 'DIN 7983 Specification',     desc: 'Meets DIN 7983 raised countersunk head self-tapping sheet metal screw standard.'        },
      { title: 'Decorative Dome Profile',    desc: 'Low dome above the panel gives a clean, finished appearance on visible faces.'            },
      { title: 'Consumer & Auto Interior',   desc: 'Used in electronics housings, decorative enclosures, and automotive interior panels.'     },
    ],
  },

  // 8
  {
    id: 'flat-head-wood-din7997',
    name: 'Flat Head Wood Screw',
    code: 'FW-7997',
    group: 'Chipboard & Wood',
    img: '/images/SCREWS/c-product251202165051_1751_116.png',
    desc: 'Phillips/Pozidriv countersunk head wood screw to DIN 7997 for modern timber joinery and furniture production. Sharp point, no pre-drilling needed.',
    badge: 'FW-7997 · DIN 7997 · Phillips Countersunk',
    heroDesc: 'The DIN 7997 Flat Head Wood Screw is the modern Phillips/Pozidriv version of the countersunk wood screw — designed for faster power-tool installation in timber joinery, furniture, carcass construction, and general woodwork applications.',
    chips: ['DIN 7997', 'Phillips / Pozi', 'Countersunk', 'Timber Joinery'],
    overview: [
      'DIN 7997 wood screws replace the traditional slotted DIN 97 with a Pozidriv recess, allowing high-speed power-tool installation without cam-out. The sharp point self-starts in timber without pre-drilling for most applications.',
      'The countersunk head provides a clean flush finish in visible timber surfaces. Available in zinc, bright, and hot-dip galvanised finishes for both interior and exterior timber applications.',
    ],
    specs: [
      { icon: 'bi-rulers',       title: 'Size Range',    value: '3.0×16 to 6.0×100',   sub: 'To DIN 7997 standard'           },
      { icon: 'bi-gem',          title: 'Material',       value: 'Carbon Steel',          sub: 'Zinc / bright / HDG coating'    },
      { icon: 'bi-layers-fill',  title: 'Head & Drive',   value: 'Countersunk / Pozidriv', sub: 'Self-starting sharp point'     },
    ],
    features: [
      { title: 'DIN 7997 Specification',     desc: 'Fully compliant with DIN 7997 for countersunk Pozidriv wood screws.'                    },
      { title: 'Power Tool Optimised',       desc: 'Pozidriv recess prevents cam-out at high drive speeds for production use.'               },
      { title: 'Self-Starting Point',        desc: 'Sharp hardened tip starts in timber without a pilot hole in most applications.'          },
    ],
  },

  // 9
  {
    id: 'truss-head-screw',
    name: 'Truss Head Screw',
    code: 'THS',
    group: 'Sheet Metal',
    img: '/images/SCREWS/c-product251202165518_3634_116.png',
    desc: 'Extra-wide, low-profile truss head self-tapping screw for sheet metal panels. Large bearing area prevents pull-through in thin or soft sheet materials.',
    badge: 'THS Type · Truss Head · Wide Bearing',
    heroDesc: 'The Truss Head Sheet Metal Screw carries an extra-wide diameter head with a low dome profile — distributing clamping force across a larger bearing area than a standard pan or hex head to prevent pull-through in thin or relatively soft sheet materials.',
    chips: ['Truss Head', 'Wide Bearing', 'Sheet Metal', 'Panel Fastening'],
    overview: [
      'The truss head has a wider diameter than any other standard screw head type, giving it the largest underhead bearing area. In thin sheet metal, this prevents the head from sinking into or pulling through the panel under load or vibration.',
      'Widely specified for sheet metal assemblies where thinner gauge material is used, or where the holding medium (such as a painted or pre-coated steel panel) has reduced surface hardness compared to raw sheet.',
    ],
    specs: [
      { icon: 'bi-rulers',       title: 'Size Range',    value: '3.5×9.5 to 5.5×38',   sub: 'Sheet metal sizes'              },
      { icon: 'bi-gem',          title: 'Material',       value: 'Carbon Steel',          sub: 'Zinc plated finish'             },
      { icon: 'bi-layers-fill',  title: 'Head & Drive',   value: 'Truss / Phillips',      sub: 'Self-tapping thread, Type AB'   },
    ],
    features: [
      { title: 'Extra-Wide Head Diameter',   desc: 'Largest bearing area of any standard head type — resists pull-through in thin sheet.'    },
      { title: 'Low Profile Dome',           desc: 'Wide but low head minimises protrusion above the panel surface.'                         },
      { title: 'Thin Gauge Sheet Rated',     desc: 'Prevents head sinking on coated, painted, or thin-gauge steel panels under load.'         },
    ],
  },

  // 10
  {
    id: 'hex-head-wood-din571',
    name: 'Hexagon Head Wood Screw',
    code: 'HW-571',
    group: 'Chipboard & Wood',
    img: '/images/SCREWS/c-product251202165903_6222_116.png',
    desc: 'Coach screw / lag bolt to DIN 571 with a hexagonal head for wrench or socket drive. For heavy timber connections, structural joints, and beam fastening.',
    badge: 'HW-571 · DIN 571 · Coach Screw / Lag Bolt',
    heroDesc: 'The Hexagon Head Wood Screw to DIN 571 — commonly called a coach screw or lag bolt — provides extremely high pull-out and shear resistance for heavy timber structural connections that exceed the capacity of standard wood screws.',
    chips: ['DIN 571', 'Coach Screw', 'Lag Bolt', 'Structural Timber'],
    overview: [
      'DIN 571 coach screws combine a hexagonal head (for wrench or impact socket drive) with a coarse wood screw thread and a tapered point. The large diameter shank delivers very high pull-out resistance in solid timber, glulam, and LVL structural members.',
      'Standard for heavy timber frame construction, post and beam joinery, joist hangers, purlin connections, and any structural timber joint where the load exceeds the capacity of a conventional wood screw or requires a wrench rather than a screwdriver for installation.',
    ],
    specs: [
      { icon: 'bi-rulers',       title: 'Size Range',    value: 'M6×30 to M16×200',    sub: 'Metric to DIN 571 standard'     },
      { icon: 'bi-gem',          title: 'Material',       value: 'Carbon Steel',          sub: 'Hot-dip galvanised / zinc'      },
      { icon: 'bi-layers-fill',  title: 'Drive Type',     value: 'Hexagon Head (Wrench)', sub: 'Coarse wood thread, taper point' },
    ],
    features: [
      { title: 'DIN 571 Structural Grade',   desc: 'Meets DIN 571 for hexagon head coach screws in structural timber applications.'          },
      { title: 'Wrench / Impact Drive',       desc: 'Hexagonal head allows high-torque installation with wrench or impact gun socket.'         },
      { title: 'Heavy Structural Load',       desc: 'Large diameter shank provides very high pull-out resistance in solid and engineered timber.' },
    ],
  },

  // 11
  {
    id: 'break-machine-screws',
    name: 'Break Machine Screws',
    code: 'BMS',
    group: 'Machine & Specialty',
    img: '/images/SCREWS/c-product251202170651_7025_116.png',
    desc: 'Breakaway shank machine screw designed to fracture at a controlled torque point, ensuring consistent clamp load and tamper-resistance in critical assemblies.',
    badge: 'BMS Type · Breakaway · Controlled Torque',
    heroDesc: 'Break Machine Screws feature a weakened breakaway shank that fractures cleanly at a precisely calibrated torque — guaranteeing controlled clamp load in safety-critical assemblies and providing inherent tamper-resistance once the breakaway cap has separated.',
    chips: ['Breakaway Shank', 'Controlled Torque', 'Tamper Resistant', 'Safety Critical'],
    overview: [
      'The breakaway section of the shank is machined to a calculated cross-section that fractures at a defined installation torque. When the screw reaches the correct clamp load, the drive portion breaks away cleanly, leaving the engaged thread at the precise intended torque with no protruding drive head to allow removal.',
      'Used in safety-critical, tamper-evident, and utility infrastructure applications — meter boxes, public access panels, railway track hardware, and any installation where over-tightening must be prevented or where unauthorised removal must be detectable.',
    ],
    specs: [
      { icon: 'bi-rulers',       title: 'Size Range',    value: 'M5×20 to M12×60',     sub: 'Calibrated to torque spec'      },
      { icon: 'bi-gem',          title: 'Material',       value: 'Medium Carbon Steel',   sub: 'Zinc / stainless option'        },
      { icon: 'bi-layers-fill',  title: 'Drive Type',     value: 'Breakaway Hex / Phillips', sub: 'Fracture at set torque'      },
    ],
    features: [
      { title: 'Calibrated Break Torque',    desc: 'Shank fractures at a defined torque, guaranteeing correct and consistent clamp load.'     },
      { title: 'Tamper Resistant',           desc: 'No drive recess remains after break — the fastener cannot be removed without cutting.'      },
      { title: 'Safety-Critical Rated',      desc: 'Specified for utility boxes, railway hardware, and over-torque-sensitive assemblies.'        },
    ],
  },

  // 12
  {
    id: 'concrete-screw',
    name: 'Concrete Screw',
    code: 'CCS',
    group: 'Machine & Specialty',
    img: '/images/SCREWS/c-product251202171139_8973_116.png',
    desc: 'Hardened concrete anchor screw that threads directly into pre-bored masonry without plugs. Fast, clean fixing for fixtures, brackets, and channels to concrete.',
    badge: 'CCS Type · Masonry Anchor · Direct Fix',
    heroDesc: 'The Concrete Screw is a hardened anchor fastener that cuts its own thread directly into a pre-bored concrete or masonry hole — eliminating plastic plugs, expansion bolts, and chemical anchors for light and medium-duty masonry fixings.',
    chips: ['Concrete', 'Masonry', 'Direct Thread', 'No Plug Anchor'],
    overview: [
      'Concrete Screws are case-hardened to a Rockwell surface hardness sufficient to cut threads into concrete, brick, block, and aerated lightweight concrete. A hammer drill is used to bore the clearance hole to the specified diameter and depth, then the screw is driven with a standard cordless drill driver.',
      'Faster to install than traditional plug-and-screw or expansion anchor methods, and fully removable if required. Used for fixing conduit clips, pipe brackets, cable trays, suspended ceiling channels, and lightweight machinery bases to concrete slabs and masonry walls.',
    ],
    specs: [
      { icon: 'bi-rulers',       title: 'Size Range',    value: '5.0×40 to 7.5×120',   sub: 'Masonry anchor sizes'           },
      { icon: 'bi-gem',          title: 'Material',       value: 'Case-Hardened Steel',   sub: 'Zinc / ceramic blue coating'    },
      { icon: 'bi-layers-fill',  title: 'Drive Type',     value: 'Hex / Phillips',        sub: 'Requires hammer drill bore first' },
    ],
    features: [
      { title: 'Direct Masonry Thread',      desc: 'Cuts its own thread in concrete and masonry — no plastic anchor plug required.'           },
      { title: 'Case-Hardened Shank',        desc: 'Hardened surface resists thread wear and fracture when driven into masonry.'               },
      { title: 'Removable & Reusable',       desc: 'Fully removable and reusable (same or new hole) — unlike expansion anchors.'               },
    ],
  },

  // 13
  {
    id: 'machine-screw-flat-head',
    name: 'Machine Screw Flat Head',
    code: 'MSF',
    group: 'Machine & Specialty',
    img: '/images/SCREWS/c-product251202172127_9027_116.png',
    desc: 'Metric countersunk machine screw with precise machine-cut thread for fastening into threaded metal components, nuts, or tapped holes.',
    badge: 'MSF Type · Machine Screw · Metric Thread',
    heroDesc: 'The Flat Head Machine Screw carries a precisely cut metric thread for fastening into threaded holes or with a nut — available in a full metric range for engineering, electronics, machinery, and precision metal assembly applications.',
    chips: ['Machine Screw', 'Flat Head', 'Metric Thread', 'Engineering'],
    overview: [
      'Machine Screws have precision-cut V-threads that engage with a tapped hole or nut — unlike wood or sheet metal screws which cut their own thread. The flat (countersunk) head seats flush with the component surface for a clean, professional finish in assembled machinery.',
      'Available in Phillips, Pozidriv, slotted, and combination drives across full metric ranges from M2 to M10. Common in electronics, precision instruments, machinery covers, electrical panels, and any metal component assembly requiring a removable fastener.',
    ],
    specs: [
      { icon: 'bi-rulers',       title: 'Size Range',    value: 'M2×4 to M10×50',      sub: 'Metric machine thread'          },
      { icon: 'bi-gem',          title: 'Material',       value: 'Carbon Steel / SS',     sub: 'Zinc / plain / black oxide'     },
      { icon: 'bi-layers-fill',  title: 'Head & Drive',   value: 'Countersunk / Phillips', sub: 'Metric V-thread, Class 4.8'    },
    ],
    features: [
      { title: 'Precision Metric Thread',    desc: 'Machine-cut V-thread engages tapped holes and nuts with precision for reliable removal.'  },
      { title: 'Flush Countersunk Head',     desc: 'Flat head seats level with the component surface for a clean, professional assembly.'       },
      { title: 'Engineering Grade',          desc: 'Suited to electronics, machinery, instruments, and all precision metal assembly.'           },
    ],
  },

  // 14
  {
    id: 'flat-head-wood-din97',
    name: 'Flat Head Wood Screw',
    code: 'FH-97',
    group: 'Chipboard & Wood',
    img: '/images/SCREWS/c-product251202164530_8427_116.png',
    desc: 'Traditional slotted countersunk head wood screw to DIN 97. Used in joinery, furniture, and light woodwork where a flush finish is required.',
    badge: 'FH-97 · DIN 97 · Slotted Countersunk',
    heroDesc: 'The Flat Head Wood Screw to DIN 97 is a traditional slotted countersunk screw in bright zinc finish — used in classic joinery, furniture making, and light woodwork applications where a flush head seating is required.',
    chips: ['DIN 97', 'Slotted Drive', 'Countersunk', 'Joinery'],
    overview: [
      'DIN 97 wood screws follow the traditional countersunk head with a single slot drive profile that has been standard in European joinery for decades. The flat, 90° countersunk head seats flush with the timber surface after installation.',
      'While Phillips and Pozidriv drives have largely replaced slot drives in production environments, DIN 97 screws remain the correct specification for restoration, heritage joinery, and applications where the period-appropriate fastener appearance is required.',
    ],
    specs: [
      { icon: 'bi-rulers',       title: 'Size Range',    value: '2.5×16 to 6.0×70',    sub: 'To DIN 97 standard'             },
      { icon: 'bi-gem',          title: 'Material',       value: 'Carbon Steel',          sub: 'Bright zinc / plain steel'      },
      { icon: 'bi-layers-fill',  title: 'Head & Drive',   value: 'Countersunk / Slot',    sub: 'Wood thread, sharp point'       },
    ],
    features: [
      { title: 'DIN 97 Standard',            desc: 'Meets the DIN 97 specification for countersunk slotted wood screws.'                    },
      { title: 'Flush Finish',               desc: 'Flat head seats perfectly flush with the timber surface when fully driven.'             },
      { title: 'Heritage & Restoration',     desc: 'Correct fastener for period furniture, heritage joinery, and restoration projects.'      },
    ],
  },
];

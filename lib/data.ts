import { Activity, Zap, Sparkles, Dna, Microscope, HeartPulse, Shield, User } from 'lucide-react';

export const services = [
    {
        slug: 'cellular-recovery',
        title: 'Cellular Optimization',
        shortDescription: 'Advanced protocols including Red Light Therapy and HBOT primarily to recharge at the cellular level.',
        fullDescription: 'Our Cellular Optimization protocols are designed to enhance mitochondrial function, reduce systemic inflammation, and accelerate tissue repair. By targeting the fundamental unit of life—the cell—we improve energy production and resilience. This is the foundation of all longevity medicine.',
        icon: Zap,
        features: ['Red Light Therapy (PBM)', 'Hyperbaric Oxygen (HBOT)', 'Cryotherapy', 'PEMF Therapy'],
        benefits: ['Increased Energy Production (ATP)', 'Reduced Systemic Inflammation', 'Accelerated Injury Recovery', 'Deep, Restorative Sleep'],
        scientificMechanism: 'Mitochondria are the power plants of your cells. As we age, their efficiency declines. Our protocols utilize specific wavelengths of light (660nm & 850nm) and pressurized oxygen to stimulate cytochrome c oxidase, increasing ATP production and reducing oxidative stress.',
        processSteps: [
            'Initial biometrics and hydration check.',
            'Selection of specific wavelength or pressure protocol.',
            '30-60 minute immersive session in private suite.',
            'Post-session vitals and electrolyte replenishment.'
        ],
        idealCandidate: 'Individuals suffering from chronic fatigue, athletes seeking faster recovery, or executives needing a cognitive reset.',
        contraindications: 'Active fever, certain light-sensitive medications, or untreated pneumothorax (for HBOT).',
        faqs: [
            {
                question: 'How often should I do this?',
                answer: 'For acute recovery, 2-3 sessions per week. For maintenance, 1 session per week is optimal.'
            },
            {
                question: 'Is it claustrophobic?',
                answer: 'Our hard-shell HBOT chambers are spacious and glass-walled, allowing you to watch TV or work comfortably.'
            }
        ]
    },
    {
        slug: 'hormone-optimization',
        title: 'Hormone Intelligence',
        shortDescription: 'Precision BHRT programs designed to restore peak biological performance.',
        fullDescription: 'Hormones are the chemical messengers that drive vitality. Our data-driven approach allows us to precisely balance testosterone, estrogen, thyroid, and cortisol levels to their optimal youthful ranges, using bio-identical sources.',
        icon: Activity,
        features: ['Bio-Identical Hormones (BHRT)', 'Advanced Pellet Therapy', 'Peptide Support', 'Comprehensive 50+ Marker Labs'],
        benefits: ['Muscle Mass Retention', 'Sharper Cognitive Clarity', 'Libido & Sexual Function', 'Emotional Stability'],
        scientificMechanism: 'We do not simply aim for "normal" ranges, which are averages of a sick population. We aim for "optimal" ranges associated with peak performance. We use bio-identical hormones that are molecularly identical to what your body produces.',
        processSteps: [
            'Comprehensive blood panel (8am fasting).',
            '60-minute consultation with Medical Director.',
            'Creation of custom compounding or pellet insertion.',
            'Follow-up labs at 6 weeks to dial in dosing.'
        ],
        idealCandidate: 'Men and women over 35 experiencing fatigue, brain fog, weight gain, or low libido.',
        contraindications: 'Active hormone-sensitive cancers or unmanaged cardiovascular disease.',
        faqs: [
            {
                question: 'Will this shut down my natural production?',
                answer: 'We use protocols (like hCG or Clomid for men) to maintain fertility and testicular function alongside TRT.'
            },
            {
                question: 'Are pellets better than injections?',
                answer: 'Pellets offer consistent steady-state levels for 4-5 months, avoiding the rollercoaster effect of weekly injections.'
            }
        ]
    },
    {
        slug: 'aesthetics',
        title: 'Regenerative Aesthetics',
        shortDescription: 'Subtle, impactful enhancements using neurotoxins, fillers, and collagen stimulators.',
        fullDescription: 'True beauty is a reflection of health. We use regenerative biostimulators and precision aesthetics to restore volume and structure without an "overdone" look. The goal is you, refreshed—never different.',
        icon: Sparkles,
        features: ['Precision Neurotoxins', 'Dermal Fillers', 'Microneedling w/ Exosomes', 'Laser Skin Resurfacing'],
        benefits: ['Youthful Facial Contour', 'Improved Skin Texture', 'Natural Collagen Production', 'Refreshed Appearance'],
        scientificMechanism: 'We prioritize biostimulators (like Sculptra and Radiesse) and exosomes which recruit your own body\'s fibroblasts to produce new collagen and elastin, rather than just filling space with gel.',
        processSteps: [
            'Facial mapping and aesthetic goal setting.',
            'Application of medical-grade numbing agents.',
            'Precision injection or treatment application.',
            'LED light therapy to reduce inflammation.'
        ],
        idealCandidate: 'Anyone noticing volume loss, fine lines, or dull skin texture who wants a natural result.',
        contraindications: 'Active skin infections or autoimmune neuromuscular disorders.',
        faqs: [
            {
                question: 'Will I look frozen?',
                answer: 'Never. Our providers specialize in "micro-dosing" to maintain expression while smoothing static lines.'
            },
            {
                question: 'How long is the downtime?',
                answer: 'Minimal. Most patients return to social activities within 24 hours.'
            }
        ]
    },
    {
        slug: 'longevity-science',
        title: 'Longevity Science',
        shortDescription: 'Everything from peptide therapies to genetic analysis for proactive health management.',
        fullDescription: 'We move beyond standard care to deploy cutting-edge longevity interventions. From checking your biological age to analyzing your genome, we build a roadmap for your future health based on hard data.',
        icon: Dna,
        features: ['Biological Age Testing (Epigenetic)', 'Whole Genome Sequencing', 'Telomere Analysis', 'Early Cancer Detection (Galleri)'],
        benefits: ['Actionable Risk Mitigation', 'Personalized Health Roadmap', 'Extended Healthspan', 'Proactive vs Reactive Care'],
        scientificMechanism: 'By analyzing methylation patterns on your DNA, we can determine your rate of aging. We then use this data to prescribe lifestyle and pharmacological interventions (like Rapamycin or Metformin) to slow that rate.',
        processSteps: [
            'Saliva or blood sample collection.',
            '4-week analysis period for sequencing.',
            '90-minute deep-dive review of results.',
            'Implementation of genetic-based protocol.'
        ],
        idealCandidate: 'Proactive individuals who want to know their risks before they manifest as disease.',
        contraindications: 'None. Knowledge is power.',
        faqs: [
            {
                question: 'Can I change my genes?',
                answer: 'You cannot change your DNA sequence, but you CAN change which genes are turned on or off (epigenetics) through lifestyle.'
            },
            {
                question: 'Is my data private?',
                answer: '100%. We use de-identified labs and do not sell data to third parties.'
            }
        ]
    },
    {
        slug: 'peptide-therapy',
        title: 'Peptide Protocols',
        shortDescription: 'Targeted signaling molecules (BPC-157, Tesamorelin) to accelerate repair and growth.',
        fullDescription: 'Peptides are the future of medicine. These targeted signaling molecules instruct your body to perform specific functions, from burning fat to healing injuries and improving cognitive function, with minimal side effects.',
        icon: Microscope,
        features: ['BPC-157 (Repair)', 'CJC-1295 / Ipamorelin (Growth)', 'Tesamorelin (Fat Loss)', 'Thymosin Beta-4 (Immunity)'],
        benefits: ['Accelerated Fat Loss', 'Rapid Injury Repair', 'Immune System Support', 'Cognitive Boost'],
        scientificMechanism: 'Peptides are short chains of amino acids that act as keys to specific cellular locks. They signal your body to do what it did naturally when you were younger, like releasing growth hormone or reducing inflammation.',
        processSteps: [
            'Symptom review and goal alignment.',
            'Instruction on subcutaneous self-administration.',
            '3-month cycle initiation.',
            'Progress monitoring and cycle cycling.'
        ],
        idealCandidate: 'Patients looking for specific functional improvements like quicker recovery from surgery or stubborn fat loss.',
        contraindications: 'Active cancer is a contraindication for certain growth factor peptides.',
        faqs: [
            {
                question: 'Are these steroids?',
                answer: 'No. Peptides signal your body\'s natural production mechanisms rather than replacing them with synthetic steroids.'
            },
            {
                question: 'Do I have to inject them?',
                answer: 'Most effective peptides are subcutaneous injections (tiny insulin needle), but some are available as creams or nasal sprays.'
            }
        ]
    },
    {
        slug: 'concierge',
        title: 'Concierge Medicine',
        shortDescription: '24/7 access, global travel support, and comprehensive care management.',
        fullDescription: 'Healthcare on your terms. Direct access to your physician via text or video, coordinated specialist care, and support wherever you are in the world. We handle the logistics so you can focus on living.',
        icon: HeartPulse,
        features: ['24/7 Physician Access', 'Home & Office Visits', 'Travel Medical Kits', 'Specialist Coordination'],
        benefits: ['Ultimate Peace of Mind', 'Immediate Care Access', 'Global Support', 'Massive Time Savings'],
        scientificMechanism: 'The mechanism here is access. By removing barriers to care and establishing a continuous relationship, we catch issues early and intervene immediately, leading to vastly superior long-term outcomes.',
        processSteps: [
            'Onboarding and medical history deep dive.',
            'Direct line setup (HIPAA compliant app).',
            'Coordination with all existing specialists.',
            'Quarterly proactive check-ins.'
        ],
        idealCandidate: 'Busy executives, frequent travelers, and families who demand immediate, high-quality attention.',
        contraindications: 'None.',
        faqs: [
            {
                question: 'Do you take insurance?',
                answer: 'We are a cash-pay practice to ensure our loyalty is to you, not an insurance adjuster. We can provide super-bills for reimbursement.'
            },
            {
                question: 'Can you treat my children?',
                answer: 'Yes, our family membership options cover children for acute care and urgent needs.'
            }
        ]
    },
    {
        slug: 'body-contouring',
        title: 'Body Contouring',
        shortDescription: 'Non-invasive fat reduction and muscle building with Emsculpt Neo.',
        fullDescription: 'Sculpt your physique with advanced technology. We use high-intensity focused electromagnetic energy to build muscle and burn fat simultaneously, refining your hard-earned results without surgery.',
        icon: User,
        features: ['Emsculpt Neo (Muscle/Fat)', 'Emsella (Pelvic Floor)', 'Lymphatic Drainage', 'Targeted Fat Reduction'],
        benefits: ['Core Strength & Stability', 'Visible Muscle Definition', 'Permanent Fat Loss', 'Non-Invasive / No Downtime'],
        scientificMechanism: 'HIFEM+ energy contacts muscles 20,000 times in 30 minutes (supramaximal contractions), building fiber. Simultaneously, Radiofrequency heats fat cells to 43°C, causing apoptosis (cell death) and permanent removal.',
        processSteps: [
            'Body composition analysis.',
            'Custom applicator placement.',
            '30-minute treatment session (feels like intense workout).',
            'Series of 4 sessions over 2 weeks.'
        ],
        idealCandidate: 'Those close to their ideal weight who want extra definition or core strength.',
        contraindications: 'Metal implants, pacemaker, or pregnancy.',
        faqs: [
            {
                question: 'Does it hurt?',
                answer: 'No. It feels like an intense workout, but you are laying down. There is no pain.'
            },
            {
                question: 'Is the fat loss permanent?',
                answer: 'Yes. The fat cells destroyed by RF energy are permanently eliminated by the body.'
            }
        ]
    },
    {
        slug: 'diagnostics',
        title: 'Advanced Diagnostics',
        shortDescription: 'Deep-dive lab panels, genetic testing, and body composition analysis.',
        fullDescription: 'You cannot optimize what you do not measure. Our diagnostic capabilities go far beyond the standard annual physical, looking at inflammation, metabolic health, nutrient status, and toxin burden.',
        icon: Shield,
        features: ['In-Depth Blood Panels (100+ markers)', 'DEXA Body Composition', 'VO2 Max Testing', 'Gut Microbiome Analysis'],
        benefits: ['Complete Baseline Data', 'Root Cause Identification', 'Objective Progress Tracking', 'Precision Dosing'],
        scientificMechanism: 'We use gold-standard assays and functional medicine testing to see the "upstream" drivers of disease, such as insulin resistance, chronic inflammation, and cortisol dysregulation, before they become "downstream" diagnoses.',
        processSteps: [
            'Fasting blood draw (mobile phlebotomist available).',
            'In-office physical testing (DEXA/VO2).',
            'Stool/Urine collection for functional labs.',
            'Data integration into your health dashboard.'
        ],
        idealCandidate: 'Everyone. This is the starting point for every ADARE member.',
        contraindications: 'None.',
        faqs: [
            {
                question: 'Why do I need this if my annual physical was "normal"?',
                answer: '"Normal" is often just "average for a sick population." We look for optimal.'
            },
            {
                question: 'How often do we re-test?',
                answer: 'We re-test key markers every 3-6 months to verify the efficacy of our protocols.'
            }
        ]
    }
];

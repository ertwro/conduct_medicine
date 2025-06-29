const sitePages = [
    {
        "title": "Conduct Based Medicine - Home",
        "url": "/",
        "description": "Advanced medical education platform with evidence-based clinical decision support for healthcare professionals.",
        "keywords": "medical education, clinical decision support, conduct based medicine, neurology, dermatology, cardiology, internal medicine"
    },
    {
        "title": "Allergy & Immunology Specialty",
        "url": "/specialty/allergy_immunology",
        "description": "Allergic diseases and primary immunodeficiency disorders.",
        "keywords": "allergy & immunology, allergy_immunology, medical specialty"
    },
    {
        "title": "Cardiology Specialty",
        "url": "/specialty/cardiology",
        "description": "Cardiovascular diseases and heart conditions with evidence-based frequency and mortality indicators.",
        "keywords": "cardiology, cardiology, medical specialty"
    },
    {
        "title": "Dermatology Specialty",
        "url": "/specialty/dermatology",
        "description": "Dermatological conditions with diagnostic and treatment guidelines organized by clinical setting.",
        "keywords": "dermatology, dermatology, medical specialty"
    },
    {
        "title": "Endocrinology Specialty",
        "url": "/specialty/endocrinology",
        "description": "Hormone-related disorders including diabetes, thyroid, and metabolic conditions.",
        "keywords": "endocrinology, endocrinology, medical specialty"
    },
    {
        "title": "Gastroenterology Specialty",
        "url": "/specialty/gastroenterology",
        "description": "Digestive system disorders and hepatology with evidence-based management approaches.",
        "keywords": "gastroenterology, gastroenterology, medical specialty"
    },
    {
        "title": "Gynecology Specialty",
        "url": "/specialty/gynecology",
        "description": "Women's reproductive health and gynecologic conditions.",
        "keywords": "gynecology, gynecology, medical specialty"
    },
    {
        "title": "Hematology Specialty",
        "url": "/specialty/hematology",
        "description": "Blood disorders, hematologic malignancies, and coagulation management.",
        "keywords": "hematology, hematology, medical specialty"
    },
    {
        "title": "Infectious Disease Specialty",
        "url": "/specialty/infectious_disease",
        "description": "Comprehensive infectious disease management and antimicrobial stewardship.",
        "keywords": "infectious disease, infectious_disease, medical specialty"
    },
    {
        "title": "Internal Medicine Specialty",
        "url": "/specialty/internal_medicine",
        "description": "Comprehensive adult medical care covering a wide range of internal medicine conditions.",
        "keywords": "internal medicine, internal_medicine, medical specialty"
    },
    {
        "title": "Nephrology Specialty",
        "url": "/specialty/nephrology",
        "description": "Kidney diseases, dialysis, and renal replacement therapy management.",
        "keywords": "nephrology, nephrology, medical specialty"
    },
    {
        "title": "Neurology Specialty",
        "url": "/specialty/neurology",
        "description": "Comprehensive neurological conditions organized by clinical setting and frequency of consultation.",
        "keywords": "neurology, neurology, medical specialty"
    },
    {
        "title": "Pediatrics Specialty",
        "url": "/specialty/pediatrics",
        "description": "Comprehensive pediatric care across all age groups and clinical settings.",
        "keywords": "pediatrics, pediatrics, medical specialty"
    },
    {
        "title": "Physical Medicine & Rehabilitation Specialty",
        "url": "/specialty/physical_medicine",
        "description": "Rehabilitation medicine and functional restoration.",
        "keywords": "physical medicine & rehabilitation, physical_medicine, medical specialty"
    },
    {
        "title": "Psychiatry Specialty",
        "url": "/specialty/psychiatry",
        "description": "Mental health disorders with evidence-based psychiatric treatment approaches.",
        "keywords": "psychiatry, psychiatry, medical specialty"
    },
    {
        "title": "Pulmonology Specialty",
        "url": "/specialty/pulmonology",
        "description": "Respiratory medicine focusing on lung diseases and critical care pulmonology.",
        "keywords": "pulmonology, pulmonology, medical specialty"
    },
    {
        "title": "Rheumatology Specialty",
        "url": "/specialty/rheumatology",
        "description": "Autoimmune and inflammatory joint diseases with systemic manifestations.",
        "keywords": "rheumatology, rheumatology, medical specialty"
    },
    {
        "title": "Urology Specialty",
        "url": "/specialty/urology",
        "description": "Urologic conditions and male reproductive health management.",
        "keywords": "urology, urology, medical specialty"
    },
    {
        "title": "Atopic dermatitis (Adult and Pediatric)",
        "url": "/specialty/dermatology/atopic-dermatitis-adult-and-pediatric",
        "description": "Atopic dermatitis (Adult and Pediatric) - Dermatology clinical information, diagnosis, and management guidelines.",
        "keywords": "dermatology, dermatitis, and, pediatric, atopic dermatitis (adult and pediatric), adult, atopic, outpatient setting"
    },
    {
        "title": "Contact dermatitis and occupational dermatoses",
        "url": "/specialty/dermatology/contact-dermatitis-and-occupational-dermatoses",
        "description": "Contact dermatitis and occupational dermatoses - Dermatology clinical information, diagnosis, and management guidelines.",
        "keywords": "dermatology, dermatitis, and, occupational, contact dermatitis and occupational dermatoses, outpatient setting, dermatoses, contact"
    },
    {
        "title": "Acne, rosacea, hidradenitis suppurativa",
        "url": "/specialty/dermatology/acne-rosacea-hidradenitis-suppurativa",
        "description": "Acne, rosacea, hidradenitis suppurativa - Dermatology clinical information, diagnosis, and management guidelines.",
        "keywords": "dermatology, acne, rosacea, hidradenitis suppurativa, hidradenitis, rosacea, acne, suppurativa, outpatient setting"
    },
    {
        "title": "Benign melanocytic tumors (Nevi)",
        "url": "/specialty/dermatology/benign-melanocytic-tumors-nevi",
        "description": "Benign melanocytic tumors (Nevi) - Dermatology clinical information, diagnosis, and management guidelines.",
        "keywords": "dermatology, tumors, nevi, melanocytic, benign, benign melanocytic tumors (nevi), outpatient setting"
    },
    {
        "title": "Epidermal proliferations and cysts",
        "url": "/specialty/dermatology/epidermal-proliferations-and-cysts",
        "description": "Epidermal proliferations and cysts - Dermatology clinical information, diagnosis, and management guidelines.",
        "keywords": "epidermal, dermatology, and, cysts, proliferations, epidermal proliferations and cysts, outpatient setting"
    },
    {
        "title": "Malignant melanoma and other melanocytic tumors",
        "url": "/specialty/dermatology/malignant-melanoma-and-other-melanocytic-tumors",
        "description": "Malignant melanoma and other melanocytic tumors - Dermatology clinical information, diagnosis, and management guidelines.",
        "keywords": "dermatology, tumors, malignant melanoma and other melanocytic tumors, and, other, melanocytic, malignant, melanoma, outpatient setting"
    },
    {
        "title": "Fungal infections - dermatophytosis",
        "url": "/specialty/dermatology/fungal-infections-dermatophytosis",
        "description": "Fungal infections - dermatophytosis - Dermatology clinical information, diagnosis, and management guidelines.",
        "keywords": "dermatology, infections, dermatophytosis, outpatient setting, fungal infections - dermatophytosis, fungal"
    },
    {
        "title": "Psoriasis and psoriasiform dermatoses",
        "url": "/specialty/dermatology/psoriasis-and-psoriasiform-dermatoses",
        "description": "Psoriasis and psoriasiform dermatoses - Dermatology clinical information, diagnosis, and management guidelines.",
        "keywords": "dermatology, psoriasis, and, psoriasis and psoriasiform dermatoses, dermatoses, outpatient setting, psoriasiform"
    },
    {
        "title": "Hair biology and disorders (Alopecia)",
        "url": "/specialty/dermatology/hair-biology-and-disorders-alopecia",
        "description": "Hair biology and disorders (Alopecia) - Dermatology clinical information, diagnosis, and management guidelines.",
        "keywords": "dermatology, and, biology, hair, hair biology and disorders (alopecia), disorders, alopecia, outpatient setting"
    },
    {
        "title": "Nail biology and disease",
        "url": "/specialty/dermatology/nail-biology-and-disease",
        "description": "Nail biology and disease - Dermatology clinical information, diagnosis, and management guidelines.",
        "keywords": "dermatology, and, biology, disease, nail biology and disease, nail, outpatient setting"
    },
    {
        "title": "Dermatologic surgery (Biopsies, excisions)",
        "url": "/specialty/dermatology/dermatologic-surgery-biopsies-excisions",
        "description": "Dermatologic surgery (Biopsies, excisions) - Dermatology clinical information, diagnosis, and management guidelines.",
        "keywords": "dermatology, surgery, biopsies, dermatologic surgery (biopsies, excisions), excisions, dermatologic, outpatient setting"
    },
    {
        "title": "Lichen planus and lichenoid dermatoses",
        "url": "/specialty/dermatology/lichen-planus-and-lichenoid-dermatoses",
        "description": "Lichen planus and lichenoid dermatoses - Dermatology clinical information, diagnosis, and management guidelines.",
        "keywords": "planus, dermatology, lichen planus and lichenoid dermatoses, and, lichenoid, lichen, dermatoses, outpatient setting"
    },
    {
        "title": "Disorders of genitalia and oral cavity",
        "url": "/specialty/dermatology/disorders-of-genitalia-and-oral-cavity",
        "description": "Disorders of genitalia and oral cavity - Dermatology clinical information, diagnosis, and management guidelines.",
        "keywords": "dermatology, disorders of genitalia and oral cavity, and, cavity, disorders, genitalia, outpatient setting, oral"
    },
    {
        "title": "STIs and cutaneous manifestations of HIV",
        "url": "/specialty/dermatology/stis-and-cutaneous-manifestations-of-hiv",
        "description": "STIs and cutaneous manifestations of HIV - Dermatology clinical information, diagnosis, and management guidelines.",
        "keywords": "cutaneous, dermatology, and, manifestations, stis and cutaneous manifestations of hiv, hiv, stis, outpatient setting"
    },
    {
        "title": "Dermatologic signs of systemic disease",
        "url": "/specialty/dermatology/dermatologic-signs-of-systemic-disease",
        "description": "Dermatologic signs of systemic disease - Dermatology clinical information, diagnosis, and management guidelines.",
        "keywords": "dermatology, dermatologic signs of systemic disease, systemic, disease, dermatologic, outpatient setting, signs"
    },
    {
        "title": "Pediatric collagen vascular disease",
        "url": "/specialty/dermatology/pediatric-collagen-vascular-disease",
        "description": "Pediatric collagen vascular disease - Dermatology clinical information, diagnosis, and management guidelines.",
        "keywords": "dermatology, pediatric, collagen, vascular, pediatric collagen vascular disease, disease, outpatient setting"
    },
    {
        "title": "Cutaneous T cell lymphoma (Mycosis Fungoides)",
        "url": "/specialty/dermatology/cutaneous-t-cell-lymphoma-mycosis-fungoides",
        "description": "Cutaneous T cell lymphoma (Mycosis Fungoides) - Dermatology clinical information, diagnosis, and management guidelines.",
        "keywords": "cutaneous, dermatology, fungoides, mycosis, cutaneous t cell lymphoma (mycosis fungoides), cell, lymphoma, outpatient setting"
    },
    {
        "title": "Congenital and acquired blistering disorders (stable)",
        "url": "/specialty/dermatology/congenital-and-acquired-blistering-disorders-stable",
        "description": "Congenital and acquired blistering disorders (stable) - Dermatology clinical information, diagnosis, and management guidelines.",
        "keywords": "dermatology, and, acquired, congenital, congenital and acquired blistering disorders (stable), disorders, blistering, outpatient setting, stable"
    },
    {
        "title": "Emergency Room",
        "url": "/specialty/dermatology/emergency-room",
        "description": "Emergency Room - Dermatology clinical information, diagnosis, and management guidelines.",
        "keywords": "dermatology, emergency, emergency room, room"
    },
    {
        "title": "Acute Bacterial Skin Infections (Cellulitis, Abscess)",
        "url": "/specialty/dermatology/acute-bacterial-skin-infections-cellulitis-abscess",
        "description": "Acute Bacterial Skin Infections (Cellulitis, Abscess) - Dermatology clinical information, diagnosis, and management guidelines.",
        "keywords": "dermatology, infections, acute bacterial skin infections (cellulitis, abscess), cellulitis, skin, bacterial, abscess, emergency room, acute"
    },
    {
        "title": "Urticaria and Angioedema (Acute)",
        "url": "/specialty/dermatology/urticaria-and-angioedema-acute",
        "description": "Urticaria and Angioedema (Acute) - Dermatology clinical information, diagnosis, and management guidelines.",
        "keywords": "dermatology, and, urticaria and angioedema (acute), acute, angioedema, emergency room, urticaria"
    },
    {
        "title": "Severe Flares of Chronic Disease (Atopic Dermatitis)",
        "url": "/specialty/dermatology/severe-flares-of-chronic-disease-atopic-dermatitis",
        "description": "Severe Flares of Chronic Disease (Atopic Dermatitis) - Dermatology clinical information, diagnosis, and management guidelines.",
        "keywords": "dermatology, dermatitis, chronic, severe, atopic, flares, severe flares of chronic disease (atopic dermatitis), disease, emergency room"
    },
    {
        "title": "Herpes Zoster (Shingles)",
        "url": "/specialty/dermatology/herpes-zoster-shingles",
        "description": "Herpes Zoster (Shingles) - Dermatology clinical information, diagnosis, and management guidelines.",
        "keywords": "dermatology, zoster, herpes, herpes zoster (shingles), emergency room, shingles"
    },
    {
        "title": "Dermatologic Emergencies (Concern for SJS/TEN)",
        "url": "/specialty/dermatology/dermatologic-emergencies-concern-for-sjsten",
        "description": "Dermatologic Emergencies (Concern for SJS/TEN) - Dermatology clinical information, diagnosis, and management guidelines.",
        "keywords": "dermatology, emergencies, ten, for, sjs, dermatologic emergencies (concern for sjs/ten), concern, dermatologic, emergency room"
    },
    {
        "title": "Purpura & Vasculitis (Acute Systemic Signs)",
        "url": "/specialty/dermatology/purpura-vasculitis-acute-systemic-signs",
        "description": "Purpura & Vasculitis (Acute Systemic Signs) - Dermatology clinical information, diagnosis, and management guidelines.",
        "keywords": "dermatology, vasculitis, purpura & vasculitis (acute systemic signs), systemic, purpura, emergency room, acute, signs"
    },
    {
        "title": "Hospitalization",
        "url": "/specialty/dermatology/hospitalization",
        "description": "Hospitalization - Dermatology clinical information, diagnosis, and management guidelines.",
        "keywords": "hospitalization, dermatology"
    },
    {
        "title": "Severe Infections (Cellulitis, Necrotizing Fasciitis)",
        "url": "/specialty/dermatology/severe-infections-cellulitis-necrotizing-fasciitis",
        "description": "Severe Infections (Cellulitis, Necrotizing Fasciitis) - Dermatology clinical information, diagnosis, and management guidelines.",
        "keywords": "dermatology, infections, severe, cellulitis, necrotizing, hospitalization, fasciitis, severe infections (cellulitis, necrotizing fasciitis)"
    },
    {
        "title": "Severe Cutaneous Adverse Drug Reactions (SJS/TEN, DRESS)",
        "url": "/specialty/dermatology/severe-cutaneous-adverse-drug-reactions-sjsten-dress",
        "description": "Severe Cutaneous Adverse Drug Reactions (SJS/TEN, DRESS) - Dermatology clinical information, diagnosis, and management guidelines.",
        "keywords": "cutaneous, dermatology, adverse, severe, ten, severe cutaneous adverse drug reactions (sjs/ten, dress), dress, reactions, sjs, drug, hospitalization"
    },
    {
        "title": "Erythroderma (Exfoliative Dermatitis)",
        "url": "/specialty/dermatology/erythroderma-exfoliative-dermatitis",
        "description": "Erythroderma (Exfoliative Dermatitis) - Dermatology clinical information, diagnosis, and management guidelines.",
        "keywords": "dermatology, dermatitis, erythroderma (exfoliative dermatitis), erythroderma, exfoliative, hospitalization"
    },
    {
        "title": "Severe Autoimmune Blistering Diseases (Pemphigus)",
        "url": "/specialty/dermatology/severe-autoimmune-blistering-diseases-pemphigus",
        "description": "Severe Autoimmune Blistering Diseases (Pemphigus) - Dermatology clinical information, diagnosis, and management guidelines.",
        "keywords": "dermatology, diseases, severe, autoimmune, pemphigus, hospitalization, blistering, severe autoimmune blistering diseases (pemphigus)"
    },
    {
        "title": "Systemic Vasculitis or Connective Tissue Disease",
        "url": "/specialty/dermatology/systemic-vasculitis-or-connective-tissue-disease",
        "description": "Systemic Vasculitis or Connective Tissue Disease - Dermatology clinical information, diagnosis, and management guidelines.",
        "keywords": "dermatology, tissue, vasculitis, connective, systemic, disease, hospitalization, systemic vasculitis or connective tissue disease"
    },
    {
        "title": "Complications of Cutaneous Malignancy",
        "url": "/specialty/dermatology/complications-of-cutaneous-malignancy",
        "description": "Complications of Cutaneous Malignancy - Dermatology clinical information, diagnosis, and management guidelines.",
        "keywords": "cutaneous, dermatology, complications, hospitalization, malignancy, complications of cutaneous malignancy"
    },
    {
        "title": "Calciphylaxis",
        "url": "/specialty/dermatology/calciphylaxis",
        "description": "Calciphylaxis - Dermatology clinical information, diagnosis, and management guidelines.",
        "keywords": "hospitalization, dermatology, calciphylaxis"
    },
    {
        "title": "Invite me a coffee",
        "url": "/specialty/dermatology/invite-me-a-coffee",
        "description": "Invite me a coffee - Dermatology clinical information, diagnosis, and management guidelines.",
        "keywords": "dermatology, coffee, invite me a coffee, invite"
    },
    {
        "title": "Hyperlipidemia",
        "url": "/specialty/internal_medicine/hyperlipidemia",
        "description": "Hyperlipidemia - Internal Medicine clinical information, diagnosis, and management guidelines.",
        "keywords": "hyperlipidemia, internal medicine, outpatient setting, internal_medicine"
    },
    {
        "title": "Obesity",
        "url": "/specialty/internal_medicine/obesity",
        "description": "Obesity - Internal Medicine clinical information, diagnosis, and management guidelines.",
        "keywords": "internal medicine, outpatient setting, obesity, internal_medicine"
    },
    {
        "title": "Chronic cough",
        "url": "/specialty/internal_medicine/chronic-cough",
        "description": "Chronic cough - Internal Medicine clinical information, diagnosis, and management guidelines.",
        "keywords": "chronic, internal medicine, internal_medicine, outpatient setting, chronic cough, cough"
    },
    {
        "title": "Evaluation of unexplained dyspnea",
        "url": "/specialty/internal_medicine/evaluation-of-unexplained-dyspnea",
        "description": "Evaluation of unexplained dyspnea - Internal Medicine clinical information, diagnosis, and management guidelines.",
        "keywords": "unexplained, internal medicine, evaluation of unexplained dyspnea, evaluation, internal_medicine, outpatient setting, dyspnea"
    },
    {
        "title": "Geriatrics",
        "url": "/specialty/internal_medicine/geriatrics",
        "description": "Geriatrics - Internal Medicine clinical information, diagnosis, and management guidelines.",
        "keywords": "geriatrics, internal medicine, outpatient setting, internal_medicine"
    },
    {
        "title": "Cardiovascular prevention",
        "url": "/specialty/internal_medicine/cardiovascular-prevention",
        "description": "Cardiovascular prevention - Internal Medicine clinical information, diagnosis, and management guidelines.",
        "keywords": "prevention, internal medicine, cardiovascular prevention, internal_medicine, cardiovascular, outpatient setting"
    },
    {
        "title": "Hypercoagulable states and new anticoagulants",
        "url": "/specialty/internal_medicine/hypercoagulable-states-and-new-anticoagulants",
        "description": "Hypercoagulable states and new anticoagulants - Internal Medicine clinical information, diagnosis, and management guidelines.",
        "keywords": "and, new, internal medicine, internal_medicine, hypercoagulable, states, anticoagulants, outpatient setting, hypercoagulable states and new anticoagulants"
    },
    {
        "title": "Soft tissue syndromes",
        "url": "/specialty/internal_medicine/soft-tissue-syndromes",
        "description": "Soft tissue syndromes - Internal Medicine clinical information, diagnosis, and management guidelines.",
        "keywords": "syndromes, tissue, internal medicine, internal_medicine, soft tissue syndromes, soft, outpatient setting"
    },
    {
        "title": "Evaluation of the patient with menstrual irregularities",
        "url": "/specialty/internal_medicine/evaluation-of-the-patient-with-menstrual-irregularities",
        "description": "Evaluation of the patient with menstrual irregularities - Internal Medicine clinical information, diagnosis, and management guidelines.",
        "keywords": "menstrual, irregularities, internal medicine, patient, the, evaluation, internal_medicine, evaluation of the patient with menstrual irregularities, outpatient setting, with"
    },
    {
        "title": "Contraception",
        "url": "/specialty/internal_medicine/contraception",
        "description": "Contraception - Internal Medicine clinical information, diagnosis, and management guidelines.",
        "keywords": "internal medicine, outpatient setting, internal_medicine, contraception"
    },
    {
        "title": "Screening for HPV and preventing cervical CA",
        "url": "/specialty/internal_medicine/screening-for-hpv-and-preventing-cervical-ca",
        "description": "Screening for HPV and preventing cervical CA - Internal Medicine clinical information, diagnosis, and management guidelines.",
        "keywords": "and, preventing, hpv, cervical, internal medicine, for, internal_medicine, screening, screening for hpv and preventing cervical ca, outpatient setting"
    },
    {
        "title": "Chest x-ray refresher",
        "url": "/specialty/internal_medicine/chest-xray-refresher",
        "description": "Chest x-ray refresher - Internal Medicine clinical information, diagnosis, and management guidelines.",
        "keywords": "chest x-ray refresher, refresher, internal medicine, internal_medicine, ray, chest, outpatient setting"
    },
    {
        "title": "POCUS",
        "url": "/specialty/internal_medicine/pocus",
        "description": "POCUS - Internal Medicine clinical information, diagnosis, and management guidelines.",
        "keywords": "pocus, internal medicine, outpatient setting, internal_medicine"
    },
    {
        "title": "Bleeding disorders",
        "url": "/specialty/internal_medicine/bleeding-disorders",
        "description": "Bleeding disorders - Internal Medicine clinical information, diagnosis, and management guidelines.",
        "keywords": "bleeding disorders, bleeding, internal medicine, disorders, internal_medicine, outpatient setting"
    },
    {
        "title": "Autonomic neuropathy",
        "url": "/specialty/internal_medicine/autonomic-neuropathy",
        "description": "Autonomic neuropathy - Internal Medicine clinical information, diagnosis, and management guidelines.",
        "keywords": "autonomic neuropathy, internal medicine, autonomic, neuropathy, internal_medicine, outpatient setting"
    },
    {
        "title": "Medical complications of pregnancy",
        "url": "/specialty/internal_medicine/medical-complications-of-pregnancy",
        "description": "Medical complications of pregnancy - Internal Medicine clinical information, diagnosis, and management guidelines.",
        "keywords": "complications, internal medicine, pregnancy, internal_medicine, medical, medical complications of pregnancy, outpatient setting"
    },
    {
        "title": "Venous thromboembolism",
        "url": "/specialty/internal_medicine/venous-thromboembolism",
        "description": "Venous thromboembolism - Internal Medicine clinical information, diagnosis, and management guidelines.",
        "keywords": "thromboembolism, internal medicine, venous thromboembolism, venous, internal_medicine, outpatient setting"
    },
    {
        "title": "Peripheral artery disease (including carotid and aortic disease)",
        "url": "/specialty/internal_medicine/peripheral-artery-disease-including-carotid-and-aortic-disease",
        "description": "Peripheral artery disease (including carotid and aortic disease) - Internal Medicine clinical information, diagnosis, and management guidelines.",
        "keywords": "peripheral artery disease (including carotid and aortic disease), and, internal medicine, including, artery, disease, peripheral, internal_medicine, outpatient setting, aortic, carotid"
    },
    {
        "title": "Biostatistics Board review",
        "url": "/specialty/internal_medicine/biostatistics-board-review",
        "description": "Biostatistics Board review - Internal Medicine clinical information, diagnosis, and management guidelines.",
        "keywords": "biostatistics, board, internal medicine, review, internal_medicine, biostatistics board review, outpatient setting"
    },
    {
        "title": "Board Review Practice",
        "url": "/specialty/internal_medicine/board-review-practice",
        "description": "Board Review Practice - Internal Medicine clinical information, diagnosis, and management guidelines.",
        "keywords": "board, internal medicine, review, board review practice, internal_medicine, practice, outpatient setting"
    },
    {
        "title": "Physician wellness and burnout",
        "url": "/specialty/internal_medicine/physician-wellness-and-burnout",
        "description": "Physician wellness and burnout - Internal Medicine clinical information, diagnosis, and management guidelines.",
        "keywords": "physician wellness and burnout, and, physician, burnout, internal medicine, internal_medicine, wellness, outpatient setting"
    },
    {
        "title": "Health equity into clinical practice",
        "url": "/specialty/internal_medicine/health-equity-into-clinical-practice",
        "description": "Health equity into clinical practice - Internal Medicine clinical information, diagnosis, and management guidelines.",
        "keywords": "health, internal medicine, health equity into clinical practice, equity, internal_medicine, practice, clinical, into, outpatient setting"
    },
    {
        "title": "Diagnostic errors in medicine",
        "url": "/specialty/internal_medicine/diagnostic-errors-in-medicine",
        "description": "Diagnostic errors in medicine - Internal Medicine clinical information, diagnosis, and management guidelines.",
        "keywords": "errors, internal medicine, diagnostic, internal_medicine, medicine, diagnostic errors in medicine, outpatient setting"
    },
    {
        "title": "Granulomatous lung disease",
        "url": "/specialty/internal_medicine/granulomatous-lung-disease",
        "description": "Granulomatous lung disease - Internal Medicine clinical information, diagnosis, and management guidelines.",
        "keywords": "lung, internal medicine, granulomatous lung disease, disease, internal_medicine, granulomatous, outpatient setting"
    },
    {
        "title": "Cystic lung disease",
        "url": "/specialty/internal_medicine/cystic-lung-disease",
        "description": "Cystic lung disease - Internal Medicine clinical information, diagnosis, and management guidelines.",
        "keywords": "cystic, lung, internal medicine, cystic lung disease, disease, internal_medicine, outpatient setting"
    },
    {
        "title": "Calcium cases",
        "url": "/specialty/internal_medicine/calcium-cases",
        "description": "Calcium cases - Internal Medicine clinical information, diagnosis, and management guidelines.",
        "keywords": "cases, internal medicine, calcium, calcium cases, internal_medicine, outpatient setting"
    },
    {
        "title": "Transgender care",
        "url": "/specialty/internal_medicine/transgender-care",
        "description": "Transgender care - Internal Medicine clinical information, diagnosis, and management guidelines.",
        "keywords": "transgender care, care, internal medicine, internal_medicine, transgender, outpatient setting"
    },
    {
        "title": "Adrenal disorders",
        "url": "/specialty/internal_medicine/adrenal-disorders",
        "description": "Adrenal disorders - Internal Medicine clinical information, diagnosis, and management guidelines.",
        "keywords": "adrenal, adrenal disorders, internal medicine, disorders, internal_medicine, outpatient setting"
    },
    {
        "title": "Pituitary disorders",
        "url": "/specialty/internal_medicine/pituitary-disorders",
        "description": "Pituitary disorders - Internal Medicine clinical information, diagnosis, and management guidelines.",
        "keywords": "pituitary disorders, internal medicine, disorders, internal_medicine, pituitary, outpatient setting"
    },
    {
        "title": "Testosterone therapy in men",
        "url": "/specialty/internal_medicine/testosterone-therapy-in-men",
        "description": "Testosterone therapy in men - Internal Medicine clinical information, diagnosis, and management guidelines.",
        "keywords": "testosterone, internal medicine, therapy, testosterone therapy in men, men, internal_medicine, outpatient setting"
    },
    {
        "title": "Vaccines - promise and pearls",
        "url": "/specialty/internal_medicine/vaccines-promise-and-pearls",
        "description": "Vaccines - promise and pearls - Internal Medicine clinical information, diagnosis, and management guidelines.",
        "keywords": "and, pearls, promise, internal medicine, vaccines, vaccines - promise and pearls, internal_medicine, outpatient setting"
    },
    {
        "title": "Tropical medicine and parasitology",
        "url": "/specialty/internal_medicine/tropical-medicine-and-parasitology",
        "description": "Tropical medicine and parasitology - Internal Medicine clinical information, diagnosis, and management guidelines.",
        "keywords": "and, internal medicine, tropical, internal_medicine, medicine, parasitology, outpatient setting, tropical medicine and parasitology"
    },
    {
        "title": "Interpersonal violence and trauma",
        "url": "/specialty/internal_medicine/interpersonal-violence-and-trauma",
        "description": "Interpersonal violence and trauma - Internal Medicine clinical information, diagnosis, and management guidelines.",
        "keywords": "and, trauma, internal medicine, violence, internal_medicine, interpersonal violence and trauma, interpersonal, outpatient setting"
    },
    {
        "title": "Evaluation of cardiac and pulmonary risk",
        "url": "/specialty/internal_medicine/evaluation-of-cardiac-and-pulmonary-risk",
        "description": "Evaluation of cardiac and pulmonary risk - Internal Medicine clinical information, diagnosis, and management guidelines.",
        "keywords": "risk, and, pulmonary, internal medicine, evaluation of cardiac and pulmonary risk, evaluation, internal_medicine, cardiac, outpatient setting"
    },
    {
        "title": "Emergency Room",
        "url": "/specialty/internal_medicine/emergency-room",
        "description": "Emergency Room - Internal Medicine clinical information, diagnosis, and management guidelines.",
        "keywords": "emergency, internal medicine, internal_medicine, emergency room, room"
    },
    {
        "title": "Sepsis and septic shock",
        "url": "/specialty/internal_medicine/sepsis-and-septic-shock",
        "description": "Sepsis and septic shock - Internal Medicine clinical information, diagnosis, and management guidelines.",
        "keywords": "and, sepsis and septic shock, sepsis, internal medicine, shock, septic, internal_medicine, emergency room"
    },
    {
        "title": "Must not miss ECG diagnoses",
        "url": "/specialty/internal_medicine/must-not-miss-ecg-diagnoses",
        "description": "Must not miss ECG diagnoses - Internal Medicine clinical information, diagnosis, and management guidelines.",
        "keywords": "must, ecg, diagnoses, internal medicine, must not miss ecg diagnoses, miss, not, internal_medicine, emergency room"
    },
    {
        "title": "Pneumonia and other respiratory tract infections",
        "url": "/specialty/internal_medicine/pneumonia-and-other-respiratory-tract-infections",
        "description": "Pneumonia and other respiratory tract infections - Internal Medicine clinical information, diagnosis, and management guidelines.",
        "keywords": "infections, and, tract, internal medicine, pneumonia and other respiratory tract infections, respiratory, other, internal_medicine, pneumonia, emergency room"
    },
    {
        "title": "Bradycardia, syncope and sudden death",
        "url": "/specialty/internal_medicine/bradycardia-syncope-and-sudden-death",
        "description": "Bradycardia, syncope and sudden death - Internal Medicine clinical information, diagnosis, and management guidelines.",
        "keywords": "and, syncope, internal medicine, sudden, internal_medicine, bradycardia, emergency room, death, bradycardia, syncope and sudden death"
    },
    {
        "title": "Infection in the immunocompromised host",
        "url": "/specialty/internal_medicine/infection-in-the-immunocompromised-host",
        "description": "Infection in the immunocompromised host - Internal Medicine clinical information, diagnosis, and management guidelines.",
        "keywords": "host, infection in the immunocompromised host, internal medicine, immunocompromised, the, internal_medicine, infection, emergency room"
    },
    {
        "title": "Acute bleeding disorders",
        "url": "/specialty/internal_medicine/acute-bleeding-disorders",
        "description": "Acute bleeding disorders - Internal Medicine clinical information, diagnosis, and management guidelines.",
        "keywords": "bleeding, acute bleeding disorders, internal medicine, disorders, internal_medicine, emergency room, acute"
    },
    {
        "title": "Emergency room's front line",
        "url": "/specialty/internal_medicine/emergency-rooms-front-line",
        "description": "Emergency room's front line - Internal Medicine clinical information, diagnosis, and management guidelines.",
        "keywords": "emergency, internal medicine, front, internal_medicine, emergency room's front line, line, emergency room, room"
    },
    {
        "title": "Hospitalization",
        "url": "/specialty/internal_medicine/hospitalization",
        "description": "Hospitalization - Internal Medicine clinical information, diagnosis, and management guidelines.",
        "keywords": "hospitalization, internal medicine, internal_medicine"
    },
    {
        "title": "Mechanical ventilation - Basics to advanced",
        "url": "/specialty/internal_medicine/mechanical-ventilation-basics-to-advanced",
        "description": "Mechanical ventilation - Basics to advanced - Internal Medicine clinical information, diagnosis, and management guidelines.",
        "keywords": "internal medicine, ventilation, basics, hospitalization, advanced, internal_medicine, mechanical ventilation - basics to advanced, mechanical"
    },
    {
        "title": "Cardiogenic shock, CHF and malignant arrhythmias",
        "url": "/specialty/internal_medicine/cardiogenic-shock-chf-and-malignant-arrhythmias",
        "description": "Cardiogenic shock, CHF and malignant arrhythmias - Internal Medicine clinical information, diagnosis, and management guidelines.",
        "keywords": "and, cardiogenic shock, chf and malignant arrhythmias, shock, internal medicine, cardiogenic, chf, arrhythmias, internal_medicine, hospitalization, malignant"
    },
    {
        "title": "Mechanical ventilation for respiratory failure",
        "url": "/specialty/internal_medicine/mechanical-ventilation-for-respiratory-failure",
        "description": "Mechanical ventilation for respiratory failure - Internal Medicine clinical information, diagnosis, and management guidelines.",
        "keywords": "mechanical ventilation for respiratory failure, internal medicine, failure, for, respiratory, ventilation, internal_medicine, hospitalization, mechanical"
    },
    {
        "title": "Hospital medicine",
        "url": "/specialty/internal_medicine/hospital-medicine",
        "description": "Hospital medicine - Internal Medicine clinical information, diagnosis, and management guidelines.",
        "keywords": "internal medicine, hospital, hospital medicine, internal_medicine, hospitalization, medicine"
    },
    {
        "title": "Mechanical circulatory support devices",
        "url": "/specialty/internal_medicine/mechanical-circulatory-support-devices",
        "description": "Mechanical circulatory support devices - Internal Medicine clinical information, diagnosis, and management guidelines.",
        "keywords": "mechanical circulatory support devices, internal medicine, circulatory, devices, internal_medicine, support, hospitalization, mechanical"
    },
    {
        "title": "Evidence based preventive care in the ICU",
        "url": "/specialty/internal_medicine/evidence-based-preventive-care-in-the-icu",
        "description": "Evidence based preventive care in the ICU - Internal Medicine clinical information, diagnosis, and management guidelines.",
        "keywords": "evidence based preventive care in the icu, preventive, evidence, icu, care, internal medicine, the, internal_medicine, hospitalization, based"
    },
    {
        "title": "Optimizing the ABCDEF bundle",
        "url": "/specialty/internal_medicine/optimizing-the-abcdef-bundle",
        "description": "Optimizing the ABCDEF bundle - Internal Medicine clinical information, diagnosis, and management guidelines.",
        "keywords": "bundle, optimizing, internal medicine, abcdef, optimizing the abcdef bundle, the, internal_medicine, hospitalization"
    },
    {
        "title": "Proteinuria, Hematuria and Glomerular disease",
        "url": "/specialty/internal_medicine/proteinuria-hematuria-and-glomerular-disease",
        "description": "Proteinuria, Hematuria and Glomerular disease - Internal Medicine clinical information, diagnosis, and management guidelines.",
        "keywords": "and, proteinuria, glomerular, internal medicine, disease, internal_medicine, hospitalization, hematuria, proteinuria, hematuria and glomerular disease"
    },
    {
        "title": "Revisiting electrolytes",
        "url": "/specialty/internal_medicine/revisiting-electrolytes",
        "description": "Revisiting electrolytes - Internal Medicine clinical information, diagnosis, and management guidelines.",
        "keywords": "internal medicine, revisiting, revisiting electrolytes, internal_medicine, hospitalization, electrolytes"
    },
    {
        "title": "Acid based basics",
        "url": "/specialty/internal_medicine/acid-based-basics",
        "description": "Acid based basics - Internal Medicine clinical information, diagnosis, and management guidelines.",
        "keywords": "internal medicine, acid based basics, basics, acid, internal_medicine, hospitalization, based"
    },
    {
        "title": "Electrolyte and acid base",
        "url": "/specialty/internal_medicine/electrolyte-and-acid-base",
        "description": "Electrolyte and acid base - Internal Medicine clinical information, diagnosis, and management guidelines.",
        "keywords": "and, internal medicine, electrolyte, acid, internal_medicine, electrolyte and acid base, hospitalization, base"
    },
    {
        "title": "End of life",
        "url": "/specialty/internal_medicine/end-of-life",
        "description": "End of life - Internal Medicine clinical information, diagnosis, and management guidelines.",
        "keywords": "internal medicine, end, life, end of life, internal_medicine, hospitalization"
    },
    {
        "title": "Managing opioid use",
        "url": "/specialty/internal_medicine/managing-opioid-use",
        "description": "Managing opioid use - Internal Medicine clinical information, diagnosis, and management guidelines.",
        "keywords": "internal medicine, managing, use, opioid, internal_medicine, hospitalization, managing opioid use"
    },
    {
        "title": "Invite me a coffee",
        "url": "/specialty/internal_medicine/invite-me-a-coffee",
        "description": "Invite me a coffee - Internal Medicine clinical information, diagnosis, and management guidelines.",
        "keywords": "internal medicine, invite, coffee, invite me a coffee, internal_medicine"
    },
    {
        "title": "Asthma - Pathology and assessment",
        "url": "/specialty/pulmonology/asthma-pathology-and-assessment",
        "description": "Asthma - Pathology and assessment - Pulmonology clinical information, diagnosis, and management guidelines.",
        "keywords": "asthma - pathology and assessment, pulmonology, and, assessment, asthma, pathology, outpatient setting"
    },
    {
        "title": "Asthma - Treatment, including acute exacerbations",
        "url": "/specialty/pulmonology/asthma-treatment-including-acute-exacerbations",
        "description": "Asthma - Treatment, including acute exacerbations - Pulmonology clinical information, diagnosis, and management guidelines.",
        "keywords": "treatment, pulmonology, asthma, asthma - treatment, including acute exacerbations, including, exacerbations, outpatient setting, acute"
    },
    {
        "title": "COPD - Pathobiology and assessment",
        "url": "/specialty/pulmonology/copd-pathobiology-and-assessment",
        "description": "COPD - Pathobiology and assessment - Pulmonology clinical information, diagnosis, and management guidelines.",
        "keywords": "pulmonology, and, assessment, copd - pathobiology and assessment, copd, pathobiology, outpatient setting"
    },
    {
        "title": "COPD - Treatment, including of exacerbations",
        "url": "/specialty/pulmonology/copd-treatment-including-of-exacerbations",
        "description": "COPD - Treatment, including of exacerbations - Pulmonology clinical information, diagnosis, and management guidelines.",
        "keywords": "treatment, pulmonology, copd, including, exacerbations, outpatient setting, copd - treatment, including of exacerbations"
    },
    {
        "title": "Cough and hemoptysis",
        "url": "/specialty/pulmonology/cough-and-hemoptysis",
        "description": "Cough and hemoptysis - Pulmonology clinical information, diagnosis, and management guidelines.",
        "keywords": "and, pulmonology, hemoptysis, cough and hemoptysis, outpatient setting, cough"
    },
    {
        "title": "Obstructive sleep apnea",
        "url": "/specialty/pulmonology/obstructive-sleep-apnea",
        "description": "Obstructive sleep apnea - Pulmonology clinical information, diagnosis, and management guidelines.",
        "keywords": "obstructive, pulmonology, obstructive sleep apnea, sleep, apnea, outpatient setting"
    },
    {
        "title": "Pre-operative pulmonary assessment",
        "url": "/specialty/pulmonology/preoperative-pulmonary-assessment",
        "description": "Pre-operative pulmonary assessment - Pulmonology clinical information, diagnosis, and management guidelines.",
        "keywords": "pulmonology, pulmonary, assessment, pre, operative, pre-operative pulmonary assessment, outpatient setting"
    },
    {
        "title": "Pneumonia - community and hospital acquired",
        "url": "/specialty/pulmonology/pneumonia-community-and-hospital-acquired",
        "description": "Pneumonia - community and hospital acquired - Pulmonology clinical information, diagnosis, and management guidelines.",
        "keywords": "pneumonia - community and hospital acquired, pulmonology, and, acquired, hospital, community, pneumonia, outpatient setting"
    },
    {
        "title": "Pulmonary function testing",
        "url": "/specialty/pulmonology/pulmonary-function-testing",
        "description": "Pulmonary function testing - Pulmonology clinical information, diagnosis, and management guidelines.",
        "keywords": "pulmonology, pulmonary, pulmonary function testing, function, testing, outpatient setting"
    },
    {
        "title": "Sleep disordered breathing, chronic hypoventilation and non-invasive ventilation",
        "url": "/specialty/pulmonology/sleep-disordered-breathing-chronic-hypoventilation-and-noninvasive-ventilation",
        "description": "Sleep disordered breathing, chronic hypoventilation and non-invasive ventilation - Pulmonology clinical information, diagnosis, and management guidelines.",
        "keywords": "sleep disordered breathing, chronic hypoventilation and non-invasive ventilation, breathing, hypoventilation, pulmonology, disordered, chronic, and, sleep, ventilation, invasive, non, outpatient setting"
    },
    {
        "title": "Bronchiolitis and non-cystic fibrosis bronchiectasis",
        "url": "/specialty/pulmonology/bronchiolitis-and-noncystic-fibrosis-bronchiectasis",
        "description": "Bronchiolitis and non-cystic fibrosis bronchiectasis - Pulmonology clinical information, diagnosis, and management guidelines.",
        "keywords": "cystic, and, pulmonology, bronchiolitis and non-cystic fibrosis bronchiectasis, bronchiolitis, bronchiectasis, non, outpatient setting, fibrosis"
    },
    {
        "title": "Fundamentals of pulmonary imaging",
        "url": "/specialty/pulmonology/fundamentals-of-pulmonary-imaging",
        "description": "Fundamentals of pulmonary imaging - Pulmonology clinical information, diagnosis, and management guidelines.",
        "keywords": "pulmonology, pulmonary, fundamentals, fundamentals of pulmonary imaging, imaging, outpatient setting"
    },
    {
        "title": "Cardiopulmonary exercise testing",
        "url": "/specialty/pulmonology/cardiopulmonary-exercise-testing",
        "description": "Cardiopulmonary exercise testing - Pulmonology clinical information, diagnosis, and management guidelines.",
        "keywords": "cardiopulmonary exercise testing, pulmonology, cardiopulmonary, exercise, testing, outpatient setting"
    },
    {
        "title": "Interdisciplinary approach to interstitial lung disease",
        "url": "/specialty/pulmonology/interdisciplinary-approach-to-interstitial-lung-disease",
        "description": "Interdisciplinary approach to interstitial lung disease - Pulmonology clinical information, diagnosis, and management guidelines.",
        "keywords": "interdisciplinary approach to interstitial lung disease, interstitial, pulmonology, lung, interdisciplinary, approach, disease, outpatient setting"
    },
    {
        "title": "Sarcoidosis and hypersensitivity pneumonitis",
        "url": "/specialty/pulmonology/sarcoidosis-and-hypersensitivity-pneumonitis",
        "description": "Sarcoidosis and hypersensitivity pneumonitis - Pulmonology clinical information, diagnosis, and management guidelines.",
        "keywords": "and, pulmonology, sarcoidosis and hypersensitivity pneumonitis, sarcoidosis, pneumonitis, hypersensitivity, outpatient setting"
    },
    {
        "title": "Pleural disease",
        "url": "/specialty/pulmonology/pleural-disease",
        "description": "Pleural disease - Pulmonology clinical information, diagnosis, and management guidelines.",
        "keywords": "pulmonology, pleural, pleural disease, disease, outpatient setting"
    },
    {
        "title": "Lung cancer screening, diagnosis and staging",
        "url": "/specialty/pulmonology/lung-cancer-screening-diagnosis-and-staging",
        "description": "Lung cancer screening, diagnosis and staging - Pulmonology clinical information, diagnosis, and management guidelines.",
        "keywords": "pulmonology, and, lung, staging, cancer, diagnosis, lung cancer screening, diagnosis and staging, screening, outpatient setting"
    },
    {
        "title": "Pulmonary embolism",
        "url": "/specialty/pulmonology/pulmonary-embolism",
        "description": "Pulmonary embolism - Pulmonology clinical information, diagnosis, and management guidelines.",
        "keywords": "pulmonology, pulmonary, embolism, pulmonary embolism, outpatient setting"
    },
    {
        "title": "Review of respiratory physiology",
        "url": "/specialty/pulmonology/review-of-respiratory-physiology",
        "description": "Review of respiratory physiology - Pulmonology clinical information, diagnosis, and management guidelines.",
        "keywords": "review of respiratory physiology, physiology, pulmonology, respiratory, review, outpatient setting"
    },
    {
        "title": "Genetics and genomics",
        "url": "/specialty/pulmonology/genetics-and-genomics",
        "description": "Genetics and genomics - Pulmonology clinical information, diagnosis, and management guidelines.",
        "keywords": "and, pulmonology, genetics and genomics, genetics, genomics, outpatient setting"
    },
    {
        "title": "Cell and molecular biology",
        "url": "/specialty/pulmonology/cell-and-molecular-biology",
        "description": "Cell and molecular biology - Pulmonology clinical information, diagnosis, and management guidelines.",
        "keywords": "and, pulmonology, biology, molecular, cell and molecular biology, cell, outpatient setting"
    },
    {
        "title": "Pulmonary pathology",
        "url": "/specialty/pulmonology/pulmonary-pathology",
        "description": "Pulmonary pathology - Pulmonology clinical information, diagnosis, and management guidelines.",
        "keywords": "pulmonology, pulmonary, pulmonary pathology, pathology, outpatient setting"
    },
    {
        "title": "Ethical issues of pulmonary medicine",
        "url": "/specialty/pulmonology/ethical-issues-of-pulmonary-medicine",
        "description": "Ethical issues of pulmonary medicine - Pulmonology clinical information, diagnosis, and management guidelines.",
        "keywords": "pulmonology, pulmonary, ethical, ethical issues of pulmonary medicine, issues, medicine, outpatient setting"
    },
    {
        "title": "Pulmonary pearls",
        "url": "/specialty/pulmonology/pulmonary-pearls",
        "description": "Pulmonary pearls - Pulmonology clinical information, diagnosis, and management guidelines.",
        "keywords": "pulmonology, pulmonary, pearls, pulmonary pearls, outpatient setting"
    },
    {
        "title": "Pulmonary board review questions",
        "url": "/specialty/pulmonology/pulmonary-board-review-questions",
        "description": "Pulmonary board review questions - Pulmonology clinical information, diagnosis, and management guidelines.",
        "keywords": "pulmonology, pulmonary, questions, board, review, pulmonary board review questions, outpatient setting"
    },
    {
        "title": "Occupational lung disease",
        "url": "/specialty/pulmonology/occupational-lung-disease",
        "description": "Occupational lung disease - Pulmonology clinical information, diagnosis, and management guidelines.",
        "keywords": "occupational lung disease, pulmonology, lung, occupational, disease, outpatient setting"
    },
    {
        "title": "Cystic fibrosis",
        "url": "/specialty/pulmonology/cystic-fibrosis",
        "description": "Cystic fibrosis - Pulmonology clinical information, diagnosis, and management guidelines.",
        "keywords": "cystic, pulmonology, cystic fibrosis, outpatient setting, fibrosis"
    },
    {
        "title": "Eosinophilic lung disease, including Churg-strauss and ABPA",
        "url": "/specialty/pulmonology/eosinophilic-lung-disease-including-churgstrauss-and-abpa",
        "description": "Eosinophilic lung disease, including Churg-strauss and ABPA - Pulmonology clinical information, diagnosis, and management guidelines.",
        "keywords": "pulmonology, and, abpa, lung, eosinophilic, churg, including, disease, eosinophilic lung disease, including churg-strauss and abpa, strauss, outpatient setting"
    },
    {
        "title": "Pulmonary involvement in rheumatic disease",
        "url": "/specialty/pulmonology/pulmonary-involvement-in-rheumatic-disease",
        "description": "Pulmonary involvement in rheumatic disease - Pulmonology clinical information, diagnosis, and management guidelines.",
        "keywords": "pulmonology, pulmonary, rheumatic, pulmonary involvement in rheumatic disease, outpatient setting, disease, involvement"
    },
    {
        "title": "Lymphangioleiomyomatosis (LAM)",
        "url": "/specialty/pulmonology/lymphangioleiomyomatosis-lam",
        "description": "Lymphangioleiomyomatosis (LAM) - Pulmonology clinical information, diagnosis, and management guidelines.",
        "keywords": "pulmonology, lymphangioleiomyomatosis, lam, outpatient setting, lymphangioleiomyomatosis (lam)"
    },
    {
        "title": "Cystic lung disease",
        "url": "/specialty/pulmonology/cystic-lung-disease",
        "description": "Cystic lung disease - Pulmonology clinical information, diagnosis, and management guidelines.",
        "keywords": "cystic, pulmonology, lung, cystic lung disease, disease, outpatient setting"
    },
    {
        "title": "Respiratory complications of neuromuscular weakness",
        "url": "/specialty/pulmonology/respiratory-complications-of-neuromuscular-weakness",
        "description": "Respiratory complications of neuromuscular weakness - Pulmonology clinical information, diagnosis, and management guidelines.",
        "keywords": "pulmonology, complications, respiratory complications of neuromuscular weakness, neuromuscular, respiratory, weakness, outpatient setting"
    },
    {
        "title": "Dyspnea and venous thromboembolism in pregnancy",
        "url": "/specialty/pulmonology/dyspnea-and-venous-thromboembolism-in-pregnancy",
        "description": "Dyspnea and venous thromboembolism in pregnancy - Pulmonology clinical information, diagnosis, and management guidelines.",
        "keywords": "and, pulmonology, thromboembolism, dyspnea and venous thromboembolism in pregnancy, pregnancy, venous, outpatient setting, dyspnea"
    },
    {
        "title": "Tuberculosis and non-tuberculosis mycobacterial infections",
        "url": "/specialty/pulmonology/tuberculosis-and-nontuberculosis-mycobacterial-infections",
        "description": "Tuberculosis and non-tuberculosis mycobacterial infections - Pulmonology clinical information, diagnosis, and management guidelines.",
        "keywords": "infections, and, pulmonology, tuberculosis, mycobacterial, non, outpatient setting, tuberculosis and non-tuberculosis mycobacterial infections"
    },
    {
        "title": "Fungal and parasitic infections",
        "url": "/specialty/pulmonology/fungal-and-parasitic-infections",
        "description": "Fungal and parasitic infections - Pulmonology clinical information, diagnosis, and management guidelines.",
        "keywords": "infections, and, fungal and parasitic infections, pulmonology, parasitic, outpatient setting, fungal"
    },
    {
        "title": "Pulmonary infection in immunocompromised hosts",
        "url": "/specialty/pulmonology/pulmonary-infection-in-immunocompromised-hosts",
        "description": "Pulmonary infection in immunocompromised hosts - Pulmonology clinical information, diagnosis, and management guidelines.",
        "keywords": "pulmonology, pulmonary, immunocompromised, hosts, infection, outpatient setting, pulmonary infection in immunocompromised hosts"
    },
    {
        "title": "Pulmonary hypertension",
        "url": "/specialty/pulmonology/pulmonary-hypertension",
        "description": "Pulmonary hypertension - Pulmonology clinical information, diagnosis, and management guidelines.",
        "keywords": "pulmonology, pulmonary, pulmonary hypertension, hypertension, outpatient setting"
    },
    {
        "title": "Pulmonary vasculitides",
        "url": "/specialty/pulmonology/pulmonary-vasculitides",
        "description": "Pulmonary vasculitides - Pulmonology clinical information, diagnosis, and management guidelines.",
        "keywords": "pulmonology, pulmonary, pulmonary vasculitides, outpatient setting, vasculitides"
    },
    {
        "title": "Pleural mesothelioma",
        "url": "/specialty/pulmonology/pleural-mesothelioma",
        "description": "Pleural mesothelioma - Pulmonology clinical information, diagnosis, and management guidelines.",
        "keywords": "mesothelioma, pulmonology, pleural, pleural mesothelioma, outpatient setting"
    },
    {
        "title": "Non-infectious pulmonary infiltrates in the immunocompromised host",
        "url": "/specialty/pulmonology/noninfectious-pulmonary-infiltrates-in-the-immunocompromised-host",
        "description": "Non-infectious pulmonary infiltrates in the immunocompromised host - Pulmonology clinical information, diagnosis, and management guidelines.",
        "keywords": "host, pulmonology, pulmonary, non-infectious pulmonary infiltrates in the immunocompromised host, infiltrates, the, immunocompromised, non, outpatient setting, infectious"
    },
    {
        "title": "Lung transplantation",
        "url": "/specialty/pulmonology/lung-transplantation",
        "description": "Lung transplantation - Pulmonology clinical information, diagnosis, and management guidelines.",
        "keywords": "pulmonology, lung, transplantation, lung transplantation, outpatient setting"
    },
    {
        "title": "Emergency Room",
        "url": "/specialty/pulmonology/emergency-room",
        "description": "Emergency Room - Pulmonology clinical information, diagnosis, and management guidelines.",
        "keywords": "room, emergency, emergency room, pulmonology"
    },
    {
        "title": "Severe pneumonia with sepsis risk",
        "url": "/specialty/pulmonology/severe-pneumonia-with-sepsis-risk",
        "description": "Severe pneumonia with sepsis risk - Pulmonology clinical information, diagnosis, and management guidelines.",
        "keywords": "risk, pulmonology, severe, sepsis, pneumonia, with, emergency room, severe pneumonia with sepsis risk"
    },
    {
        "title": "Acute pulmonary embolism",
        "url": "/specialty/pulmonology/acute-pulmonary-embolism",
        "description": "Acute pulmonary embolism - Pulmonology clinical information, diagnosis, and management guidelines.",
        "keywords": "pulmonology, pulmonary, embolism, acute pulmonary embolism, emergency room, acute"
    },
    {
        "title": "Severe asthma exacerbation",
        "url": "/specialty/pulmonology/severe-asthma-exacerbation",
        "description": "Severe asthma exacerbation - Pulmonology clinical information, diagnosis, and management guidelines.",
        "keywords": "pulmonology, exacerbation, severe, severe asthma exacerbation, asthma, emergency room"
    },
    {
        "title": "COPD exacerbation",
        "url": "/specialty/pulmonology/copd-exacerbation",
        "description": "COPD exacerbation - Pulmonology clinical information, diagnosis, and management guidelines.",
        "keywords": "pulmonology, exacerbation, copd, copd exacerbation, emergency room"
    },
    {
        "title": "Acute respiratory failure",
        "url": "/specialty/pulmonology/acute-respiratory-failure",
        "description": "Acute respiratory failure - Pulmonology clinical information, diagnosis, and management guidelines.",
        "keywords": "pulmonology, acute respiratory failure, failure, respiratory, emergency room, acute"
    },
    {
        "title": "Pneumothorax",
        "url": "/specialty/pulmonology/pneumothorax",
        "description": "Pneumothorax - Pulmonology clinical information, diagnosis, and management guidelines.",
        "keywords": "emergency room, pulmonology, pneumothorax"
    },
    {
        "title": "Acute chest pain",
        "url": "/specialty/pulmonology/acute-chest-pain",
        "description": "Acute chest pain - Pulmonology clinical information, diagnosis, and management guidelines.",
        "keywords": "pulmonology, acute chest pain, pain, chest, emergency room, acute"
    },
    {
        "title": "Acute dyspnea",
        "url": "/specialty/pulmonology/acute-dyspnea",
        "description": "Acute dyspnea - Pulmonology clinical information, diagnosis, and management guidelines.",
        "keywords": "acute dyspnea, pulmonology, emergency room, acute, dyspnea"
    },
    {
        "title": "Status asthmaticus",
        "url": "/specialty/pulmonology/status-asthmaticus",
        "description": "Status asthmaticus - Pulmonology clinical information, diagnosis, and management guidelines.",
        "keywords": "pulmonology, status, status asthmaticus, asthmaticus, emergency room"
    },
    {
        "title": "Massive hemoptysis",
        "url": "/specialty/pulmonology/massive-hemoptysis",
        "description": "Massive hemoptysis - Pulmonology clinical information, diagnosis, and management guidelines.",
        "keywords": "pulmonology, massive, hemoptysis, massive hemoptysis, emergency room"
    },
    {
        "title": "Acute pleural effusion",
        "url": "/specialty/pulmonology/acute-pleural-effusion",
        "description": "Acute pleural effusion - Pulmonology clinical information, diagnosis, and management guidelines.",
        "keywords": "pulmonology, pleural, acute pleural effusion, emergency room, effusion, acute"
    },
    {
        "title": "Acute respiratory infections",
        "url": "/specialty/pulmonology/acute-respiratory-infections",
        "description": "Acute respiratory infections - Pulmonology clinical information, diagnosis, and management guidelines.",
        "keywords": "infections, pulmonology, acute respiratory infections, respiratory, emergency room, acute"
    },
    {
        "title": "Hospitalization",
        "url": "/specialty/pulmonology/hospitalization",
        "description": "Hospitalization - Pulmonology clinical information, diagnosis, and management guidelines.",
        "keywords": "hospitalization, pulmonology"
    },
    {
        "title": "Severe respiratory failure requiring ventilation",
        "url": "/specialty/pulmonology/severe-respiratory-failure-requiring-ventilation",
        "description": "Severe respiratory failure requiring ventilation - Pulmonology clinical information, diagnosis, and management guidelines.",
        "keywords": "pulmonology, severe, failure, respiratory, ventilation, severe respiratory failure requiring ventilation, requiring, hospitalization"
    },
    {
        "title": "Complicated pneumonia",
        "url": "/specialty/pulmonology/complicated-pneumonia",
        "description": "Complicated pneumonia - Pulmonology clinical information, diagnosis, and management guidelines.",
        "keywords": "pulmonology, pneumonia, complicated pneumonia, complicated, hospitalization"
    },
    {
        "title": "Interventional pulmonology procedures",
        "url": "/specialty/pulmonology/interventional-pulmonology-procedures",
        "description": "Interventional pulmonology procedures - Pulmonology clinical information, diagnosis, and management guidelines.",
        "keywords": "interventional, pulmonology, procedures, hospitalization, interventional pulmonology procedures"
    },
    {
        "title": "Complex pulmonary disease management",
        "url": "/specialty/pulmonology/complex-pulmonary-disease-management",
        "description": "Complex pulmonary disease management - Pulmonology clinical information, diagnosis, and management guidelines.",
        "keywords": "complex pulmonary disease management, pulmonology, pulmonary, management, disease, complex, hospitalization"
    },
    {
        "title": "Acute interstitial lung disease",
        "url": "/specialty/pulmonology/acute-interstitial-lung-disease",
        "description": "Acute interstitial lung disease - Pulmonology clinical information, diagnosis, and management guidelines.",
        "keywords": "interstitial, pulmonology, lung, disease, acute interstitial lung disease, hospitalization, acute"
    },
    {
        "title": "Complex pleural procedures",
        "url": "/specialty/pulmonology/complex-pleural-procedures",
        "description": "Complex pleural procedures - Pulmonology clinical information, diagnosis, and management guidelines.",
        "keywords": "pulmonology, pleural, procedures, complex, hospitalization, complex pleural procedures"
    },
    {
        "title": "Lung transplant evaluation and complications",
        "url": "/specialty/pulmonology/lung-transplant-evaluation-and-complications",
        "description": "Lung transplant evaluation and complications - Pulmonology clinical information, diagnosis, and management guidelines.",
        "keywords": "pulmonology, and, complications, lung, lung transplant evaluation and complications, transplant, evaluation, hospitalization"
    },
    {
        "title": "Severe pulmonary hypertension crisis",
        "url": "/specialty/pulmonology/severe-pulmonary-hypertension-crisis",
        "description": "Severe pulmonary hypertension crisis - Pulmonology clinical information, diagnosis, and management guidelines.",
        "keywords": "pulmonology, pulmonary, severe, hypertension, hospitalization, crisis, severe pulmonary hypertension crisis"
    },
    {
        "title": "Complex diagnostic procedures",
        "url": "/specialty/pulmonology/complex-diagnostic-procedures",
        "description": "Complex diagnostic procedures - Pulmonology clinical information, diagnosis, and management guidelines.",
        "keywords": "pulmonology, procedures, diagnostic, complex diagnostic procedures, complex, hospitalization"
    },
    {
        "title": "Specialized pulmonary rehabilitation",
        "url": "/specialty/pulmonology/specialized-pulmonary-rehabilitation",
        "description": "Specialized pulmonary rehabilitation - Pulmonology clinical information, diagnosis, and management guidelines.",
        "keywords": "pulmonology, pulmonary, specialized, rehabilitation, hospitalization, specialized pulmonary rehabilitation"
    },
    {
        "title": "Invite me a coffee",
        "url": "/specialty/pulmonology/invite-me-a-coffee",
        "description": "Invite me a coffee - Pulmonology clinical information, diagnosis, and management guidelines.",
        "keywords": "coffee, pulmonology, invite me a coffee, invite"
    },
    {
        "title": "Low Back Pain / Lumbago",
        "url": "/specialty/neurology/low-back-pain-lumbago",
        "description": "Low Back Pain / Lumbago - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "neurology, low, pain, low back pain / lumbago, outpatient setting, lumbago, back"
    },
    {
        "title": "Primary Headaches",
        "url": "/specialty/neurology/primary-headaches",
        "description": "Primary Headaches - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "primary headaches, primary, neurology, headaches, outpatient setting"
    },
    {
        "title": "Headache and Pain Management",
        "url": "/specialty/neurology/headache-and-pain-management",
        "description": "Headache and Pain Management - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "and, headache and pain management, headache, neurology, management, pain, outpatient setting"
    },
    {
        "title": "Neck and Arm Pain / Cervicobrachialgia",
        "url": "/specialty/neurology/neck-and-arm-pain-cervicobrachialgia",
        "description": "Neck and Arm Pain / Cervicobrachialgia - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "and, arm, cervicobrachialgia, neurology, neck, neck and arm pain / cervicobrachialgia, pain, outpatient setting"
    },
    {
        "title": "Approach to Dizziness/Vertigo (Outpatient)",
        "url": "/specialty/neurology/approach-to-dizzinessvertigo-outpatient",
        "description": "Approach to Dizziness/Vertigo (Outpatient) - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "vertigo, neurology, approach, outpatient, dizziness, approach to dizziness/vertigo (outpatient), outpatient setting"
    },
    {
        "title": "Numbness and Neurological Episodes",
        "url": "/specialty/neurology/numbness-and-neurological-episodes",
        "description": "Numbness and Neurological Episodes - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "and, episodes, neurology, neurological, numbness and neurological episodes, outpatient setting, numbness"
    },
    {
        "title": "Cognitive Complaints / Concerns",
        "url": "/specialty/neurology/cognitive-complaints-concerns",
        "description": "Cognitive Complaints / Concerns - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "cognitive, complaints, cognitive complaints / concerns, neurology, concerns, outpatient setting"
    },
    {
        "title": "Gait Disorders",
        "url": "/specialty/neurology/gait-disorders",
        "description": "Gait Disorders - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "gait, neurology, gait disorders, disorders, outpatient setting"
    },
    {
        "title": "Tremors",
        "url": "/specialty/neurology/tremors",
        "description": "Tremors - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "neurology, outpatient setting, tremors"
    },
    {
        "title": "Neuropathy",
        "url": "/specialty/neurology/neuropathy",
        "description": "Neuropathy - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "neurology, outpatient setting, neuropathy"
    },
    {
        "title": "Diagnosis of Sleep Disorders",
        "url": "/specialty/neurology/diagnosis-of-sleep-disorders",
        "description": "Diagnosis of Sleep Disorders - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "neurology, sleep, diagnosis, disorders, outpatient setting, diagnosis of sleep disorders"
    },
    {
        "title": "Treatment of Sleep Disorders",
        "url": "/specialty/neurology/treatment-of-sleep-disorders",
        "description": "Treatment of Sleep Disorders - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "treatment, neurology, sleep, disorders, treatment of sleep disorders, outpatient setting"
    },
    {
        "title": "Epilepsy (Chronic Management)",
        "url": "/specialty/neurology/epilepsy-chronic-management",
        "description": "Epilepsy (Chronic Management) - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "chronic, neurology, epilepsy, management, epilepsy (chronic management), outpatient setting"
    },
    {
        "title": "Parkinsonism",
        "url": "/specialty/neurology/parkinsonism",
        "description": "Parkinsonism - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "neurology, outpatient setting, parkinsonism"
    },
    {
        "title": "Hypokinetic Movement Disorders",
        "url": "/specialty/neurology/hypokinetic-movement-disorders",
        "description": "Hypokinetic Movement Disorders - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "neurology, movement, hypokinetic movement disorders, disorders, outpatient setting, hypokinetic"
    },
    {
        "title": "Functional Neurological Disorders",
        "url": "/specialty/neurology/functional-neurological-disorders",
        "description": "Functional Neurological Disorders - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "functional, neurology, functional neurological disorders, neurological, disorders, outpatient setting"
    },
    {
        "title": "ADHD Management",
        "url": "/specialty/neurology/adhd-management",
        "description": "ADHD Management - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "adhd management, neurology, adhd, management, outpatient setting"
    },
    {
        "title": "Chronic Pain Management",
        "url": "/specialty/neurology/chronic-pain-management",
        "description": "Chronic Pain Management - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "chronic, neurology, management, chronic pain management, pain, outpatient setting"
    },
    {
        "title": "Choosing Initial Antiepileptic Drug",
        "url": "/specialty/neurology/choosing-initial-antiepileptic-drug",
        "description": "Choosing Initial Antiepileptic Drug - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "choosing initial antiepileptic drug, choosing, neurology, antiepileptic, drug, outpatient setting, initial"
    },
    {
        "title": "Non-pharmacological Epilepsy Treatment",
        "url": "/specialty/neurology/nonpharmacological-epilepsy-treatment",
        "description": "Non-pharmacological Epilepsy Treatment - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "treatment, neurology, epilepsy, pharmacological, non, outpatient setting, non-pharmacological epilepsy treatment"
    },
    {
        "title": "Injections for Pain Syndromes",
        "url": "/specialty/neurology/injections-for-pain-syndromes",
        "description": "Injections for Pain Syndromes - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "syndromes, injections, neurology, for, injections for pain syndromes, pain, outpatient setting"
    },
    {
        "title": "Behavioral Disturbances",
        "url": "/specialty/neurology/behavioral-disturbances",
        "description": "Behavioral Disturbances - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "neurology, disturbances, behavioral, behavioral disturbances, outpatient setting"
    },
    {
        "title": "Attention & Executive Function Disorders",
        "url": "/specialty/neurology/attention-executive-function-disorders",
        "description": "Attention & Executive Function Disorders - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "attention & executive function disorders, neurology, function, attention, disorders, executive, outpatient setting"
    },
    {
        "title": "Multiple Sclerosis (Management)",
        "url": "/specialty/neurology/multiple-sclerosis-management",
        "description": "Multiple Sclerosis (Management) - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "multiple sclerosis (management), neurology, multiple, management, sclerosis, outpatient setting"
    },
    {
        "title": "Myopathy (Outpatient)",
        "url": "/specialty/neurology/myopathy-outpatient",
        "description": "Myopathy (Outpatient) - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "neurology, myopathy (outpatient), myopathy, outpatient, outpatient setting"
    },
    {
        "title": "Hyperkinetic Movement Disorders",
        "url": "/specialty/neurology/hyperkinetic-movement-disorders",
        "description": "Hyperkinetic Movement Disorders - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "neurology, movement, disorders, outpatient setting, hyperkinetic, hyperkinetic movement disorders"
    },
    {
        "title": "Autoimmune Neurology (Outpatient)",
        "url": "/specialty/neurology/autoimmune-neurology-outpatient",
        "description": "Autoimmune Neurology (Outpatient) - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "neurology, autoimmune, outpatient, autoimmune neurology (outpatient), outpatient setting"
    },
    {
        "title": "Neurogenic Bladder & Uroneurology",
        "url": "/specialty/neurology/neurogenic-bladder-uroneurology",
        "description": "Neurogenic Bladder & Uroneurology - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "uroneurology, neurogenic bladder & uroneurology, neurology, neurogenic, bladder, outpatient setting"
    },
    {
        "title": "Sexual Dysfunction in Neurological Diseases",
        "url": "/specialty/neurology/sexual-dysfunction-in-neurological-diseases",
        "description": "Sexual Dysfunction in Neurological Diseases - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "diseases, neurology, dysfunction, neurological, sexual dysfunction in neurological diseases, outpatient setting, sexual"
    },
    {
        "title": "Women's Neurology",
        "url": "/specialty/neurology/womens-neurology",
        "description": "Women's Neurology - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "neurology, outpatient setting, women, women's neurology"
    },
    {
        "title": "HIV Neurology (Outpatient)",
        "url": "/specialty/neurology/hiv-neurology-outpatient",
        "description": "HIV Neurology (Outpatient) - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "hiv neurology (outpatient), neurology, outpatient, hiv, outpatient setting"
    },
    {
        "title": "Vitamin Deficiency Neurology (Outpatient)",
        "url": "/specialty/neurology/vitamin-deficiency-neurology-outpatient",
        "description": "Vitamin Deficiency Neurology (Outpatient) - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "vitamin deficiency neurology (outpatient), neurology, outpatient, vitamin, deficiency, outpatient setting"
    },
    {
        "title": "Incidental Brain MRI Findings",
        "url": "/specialty/neurology/incidental-brain-mri-findings",
        "description": "Incidental Brain MRI Findings - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "findings, incidental brain mri findings, neurology, incidental, brain, outpatient setting, mri"
    },
    {
        "title": "Neuropsychological Assessment ()",
        "url": "/specialty/neurology/neuropsychological-assessment",
        "description": "Neuropsychological Assessment () - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "neuropsychological assessment (), assessment, neurology, neuropsychological, outpatient setting"
    },
    {
        "title": "Principles of Autonomic Testing ()",
        "url": "/specialty/neurology/principles-of-autonomic-testing",
        "description": "Principles of Autonomic Testing () - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "neurology, principles of autonomic testing (), autonomic, principles, testing, outpatient setting"
    },
    {
        "title": "Emergency Room",
        "url": "/specialty/neurology/emergency-room",
        "description": "Emergency Room - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "neurology, emergency, emergency room, room"
    },
    {
        "title": "Concussion / Mild TBI",
        "url": "/specialty/neurology/concussion-mild-tbi",
        "description": "Concussion / Mild TBI - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "neurology, concussion, mild, tbi, concussion / mild tbi, emergency room"
    },
    {
        "title": "Headache (Acute/Severe)",
        "url": "/specialty/neurology/headache-acutesevere",
        "description": "Headache (Acute/Severe) - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "headache, neurology, severe, headache (acute/severe), emergency room, acute"
    },
    {
        "title": "Approach to Dizziness/Vertigo (Acute)",
        "url": "/specialty/neurology/approach-to-dizzinessvertigo-acute",
        "description": "Approach to Dizziness/Vertigo (Acute) - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "vertigo, approach to dizziness/vertigo (acute), neurology, dizziness, emergency room, approach, acute"
    },
    {
        "title": "Stroke / CVA (Acute Management)",
        "url": "/specialty/neurology/stroke-cva-acute-management",
        "description": "Stroke / CVA (Acute Management) - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "stroke, cva, acute, neurology, management, emergency room, stroke / cva (acute management)"
    },
    {
        "title": "Acute Ischemic Stroke",
        "url": "/specialty/neurology/acute-ischemic-stroke",
        "description": "Acute Ischemic Stroke - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "stroke, neurology, acute ischemic stroke, ischemic, emergency room, acute"
    },
    {
        "title": "Hemorrhagic Stroke",
        "url": "/specialty/neurology/hemorrhagic-stroke",
        "description": "Hemorrhagic Stroke - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "stroke, hemorrhagic, neurology, hemorrhagic stroke, emergency room"
    },
    {
        "title": "Seizures / First Seizure / Status Epilepticus",
        "url": "/specialty/neurology/seizures-first-seizure-status-epilepticus",
        "description": "Seizures / First Seizure / Status Epilepticus - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "neurology, status, seizure, first, seizures / first seizure / status epilepticus, seizures, epilepticus, emergency room"
    },
    {
        "title": "Delirium and Confusion (Acute)",
        "url": "/specialty/neurology/delirium-and-confusion-acute",
        "description": "Delirium and Confusion (Acute) - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "and, neurology, delirium and confusion (acute), confusion, delirium, emergency room, acute"
    },
    {
        "title": "Neurological Complications of Substance Use (Acute)",
        "url": "/specialty/neurology/neurological-complications-of-substance-use-acute",
        "description": "Neurological Complications of Substance Use (Acute) - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "complications, neurology, neurological, neurological complications of substance use (acute), use, substance, emergency room, acute"
    },
    {
        "title": "Alcohol Neurology (Acute/Withdrawal)",
        "url": "/specialty/neurology/alcohol-neurology-acutewithdrawal",
        "description": "Alcohol Neurology (Acute/Withdrawal) - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "alcohol neurology (acute/withdrawal), neurology, withdrawal, emergency room, alcohol, acute"
    },
    {
        "title": "Spinal Cord Disorders (Acute)",
        "url": "/specialty/neurology/spinal-cord-disorders-acute",
        "description": "Spinal Cord Disorders (Acute) - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "spinal, neurology, spinal cord disorders (acute), disorders, cord, emergency room, acute"
    },
    {
        "title": "Bacterial Meningitis (Acute)",
        "url": "/specialty/neurology/bacterial-meningitis-acute",
        "description": "Bacterial Meningitis (Acute) - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "neurology, bacterial meningitis (acute), bacterial, emergency room, meningitis, acute"
    },
    {
        "title": "Infectious Encephalitis (Acute)",
        "url": "/specialty/neurology/infectious-encephalitis-acute",
        "description": "Infectious Encephalitis (Acute) - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "acute, neurology, infectious encephalitis (acute), emergency room, encephalitis, infectious"
    },
    {
        "title": "Headache as Symptom of Systemic Disease",
        "url": "/specialty/neurology/headache-as-symptom-of-systemic-disease",
        "description": "Headache as Symptom of Systemic Disease - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "headache, neurology, symptom, headache as symptom of systemic disease, systemic, disease, emergency room"
    },
    {
        "title": "Seizures as Symptom of Systemic Disease",
        "url": "/specialty/neurology/seizures-as-symptom-of-systemic-disease",
        "description": "Seizures as Symptom of Systemic Disease - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "neurology, symptom, seizures as symptom of systemic disease, systemic, disease, seizures, emergency room"
    },
    {
        "title": "Ocular Movement Abnormalities (Acute)",
        "url": "/specialty/neurology/ocular-movement-abnormalities-acute",
        "description": "Ocular Movement Abnormalities (Acute) - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "neurology, ocular, movement, abnormalities, ocular movement abnormalities (acute), emergency room, acute"
    },
    {
        "title": "Hospitalization",
        "url": "/specialty/neurology/hospitalization",
        "description": "Hospitalization - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "hospitalization, neurology"
    },
    {
        "title": "Stroke / CVA (Inpatient Management/Recovery)",
        "url": "/specialty/neurology/stroke-cva-inpatient-managementrecovery",
        "description": "Stroke / CVA (Inpatient Management/Recovery) - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "stroke, cva, inpatient, neurology, recovery, management, stroke / cva (inpatient management/recovery), hospitalization"
    },
    {
        "title": "Delirium and Confusion (Inpatient)",
        "url": "/specialty/neurology/delirium-and-confusion-inpatient",
        "description": "Delirium and Confusion (Inpatient) - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "and, inpatient, neurology, confusion, hospitalization, delirium, delirium and confusion (inpatient)"
    },
    {
        "title": "Bacterial Meningitis (Inpatient)",
        "url": "/specialty/neurology/bacterial-meningitis-inpatient",
        "description": "Bacterial Meningitis (Inpatient) - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "bacterial meningitis (inpatient), inpatient, neurology, hospitalization, bacterial, meningitis"
    },
    {
        "title": "Infectious Encephalitis (Inpatient)",
        "url": "/specialty/neurology/infectious-encephalitis-inpatient",
        "description": "Infectious Encephalitis (Inpatient) - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "inpatient, neurology, infectious encephalitis (inpatient), hospitalization, encephalitis, infectious"
    },
    {
        "title": "Seizures (Inpatient: Status/Workup/Adjustment)",
        "url": "/specialty/neurology/seizures-inpatient-statusworkupadjustment",
        "description": "Seizures (Inpatient: Status/Workup/Adjustment) - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "inpatient, neurology, status, adjustment, hospitalization, seizures, workup, seizures (inpatient: status/workup/adjustment)"
    },
    {
        "title": "Spinal Cord Disorders (Inpatient)",
        "url": "/specialty/neurology/spinal-cord-disorders-inpatient",
        "description": "Spinal Cord Disorders (Inpatient) - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "spinal cord disorders (inpatient), spinal, inpatient, neurology, disorders, cord, hospitalization"
    },
    {
        "title": "Neurological Complications of Substance Use / Alcohol (Inpatient)",
        "url": "/specialty/neurology/neurological-complications-of-substance-use-alcohol-inpatient",
        "description": "Neurological Complications of Substance Use / Alcohol (Inpatient) - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "complications, neurological complications of substance use / alcohol (inpatient), inpatient, neurology, neurological, use, hospitalization, alcohol, substance"
    },
    {
        "title": "Primary Brain Tumors (Inpatient)",
        "url": "/specialty/neurology/primary-brain-tumors-inpatient",
        "description": "Primary Brain Tumors (Inpatient) - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "tumors, inpatient, primary, neurology, brain, primary brain tumors (inpatient), hospitalization"
    },
    {
        "title": "Nervous System Metastases (Inpatient)",
        "url": "/specialty/neurology/nervous-system-metastases-inpatient",
        "description": "Nervous System Metastases (Inpatient) - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "metastases, nervous, inpatient, neurology, system, nervous system metastases (inpatient), hospitalization"
    },
    {
        "title": "Neurological Issues in Brain Cancer (Inpatient)",
        "url": "/specialty/neurology/neurological-issues-in-brain-cancer-inpatient",
        "description": "Neurological Issues in Brain Cancer (Inpatient) - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "inpatient, neurology, neurological, issues, brain, hospitalization, cancer, neurological issues in brain cancer (inpatient)"
    },
    {
        "title": "Primary CNS Lymphoma (Inpatient)",
        "url": "/specialty/neurology/primary-cns-lymphoma-inpatient",
        "description": "Primary CNS Lymphoma (Inpatient) - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "inpatient, primary, neurology, primary cns lymphoma (inpatient), cns, hospitalization, lymphoma"
    },
    {
        "title": "Multiple Sclerosis (Severe Relapses/Inpatient)",
        "url": "/specialty/neurology/multiple-sclerosis-severe-relapsesinpatient",
        "description": "Multiple Sclerosis (Severe Relapses/Inpatient) - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "inpatient, multiple sclerosis (severe relapses/inpatient), neurology, severe, multiple, sclerosis, relapses, hospitalization"
    },
    {
        "title": "Autoimmune Neurology (Crisis/Onset/Inpatient)",
        "url": "/specialty/neurology/autoimmune-neurology-crisisonsetinpatient",
        "description": "Autoimmune Neurology (Crisis/Onset/Inpatient) - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "autoimmune neurology (crisis/onset/inpatient), inpatient, neurology, autoimmune, onset, hospitalization, crisis"
    },
    {
        "title": "Hospital Neurology Principles",
        "url": "/specialty/neurology/hospital-neurology-principles",
        "description": "Hospital Neurology Principles - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "neurology, hospital, principles, hospital neurology principles, hospitalization"
    },
    {
        "title": "HIV Neurology (Acute Complications/Inpatient)",
        "url": "/specialty/neurology/hiv-neurology-acute-complicationsinpatient",
        "description": "HIV Neurology (Acute Complications/Inpatient) - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "complications, inpatient, neurology, hiv neurology (acute complications/inpatient), hiv, hospitalization, acute"
    },
    {
        "title": "Myopathy (Acute/Severe/Inpatient)",
        "url": "/specialty/neurology/myopathy-acutesevereinpatient",
        "description": "Myopathy (Acute/Severe/Inpatient) - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "inpatient, neurology, severe, myopathy, hospitalization, myopathy (acute/severe/inpatient), acute"
    },
    {
        "title": "Vitamin Deficiency Neurology (Severe/Inpatient)",
        "url": "/specialty/neurology/vitamin-deficiency-neurology-severeinpatient",
        "description": "Vitamin Deficiency Neurology (Severe/Inpatient) - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "vitamin deficiency neurology (severe/inpatient), inpatient, neurology, severe, vitamin, hospitalization, deficiency"
    },
    {
        "title": "Invite me a coffee",
        "url": "/specialty/neurology/invite-me-a-coffee",
        "description": "Invite me a coffee - Neurology clinical information, diagnosis, and management guidelines.",
        "keywords": "neurology, coffee, invite me a coffee, invite"
    },
    {
        "title": "Hypertension",
        "url": "/specialty/cardiology/hypertension",
        "description": "Hypertension - Cardiology clinical information, diagnosis, and management guidelines.",
        "keywords": "cardiology, hypertension, outpatient setting"
    },
    {
        "title": "Life style recommendations and prevention",
        "url": "/specialty/cardiology/life-style-recommendations-and-prevention",
        "description": "Life style recommendations and prevention - Cardiology clinical information, diagnosis, and management guidelines.",
        "keywords": "prevention, and, life style recommendations and prevention, cardiology, life, style, outpatient setting, recommendations"
    },
    {
        "title": "Lipids",
        "url": "/specialty/cardiology/lipids",
        "description": "Lipids - Cardiology clinical information, diagnosis, and management guidelines.",
        "keywords": "cardiology, outpatient setting, lipids"
    },
    {
        "title": "Management of ischemic heart disease",
        "url": "/specialty/cardiology/management-of-ischemic-heart-disease",
        "description": "Management of ischemic heart disease - Cardiology clinical information, diagnosis, and management guidelines.",
        "keywords": "cardiology, management of ischemic heart disease, management, ischemic, disease, heart, outpatient setting"
    },
    {
        "title": "Treatment of HFrEF",
        "url": "/specialty/cardiology/treatment-of-hfref",
        "description": "Treatment of HFrEF - Cardiology clinical information, diagnosis, and management guidelines.",
        "keywords": "treatment, cardiology, hfref, treatment of hfref, outpatient setting"
    },
    {
        "title": "Treatment of HFpEF",
        "url": "/specialty/cardiology/treatment-of-hfpef",
        "description": "Treatment of HFpEF - Cardiology clinical information, diagnosis, and management guidelines.",
        "keywords": "treatment, hfpef, cardiology, treatment of hfpef, outpatient setting"
    },
    {
        "title": "Atrial fibrillation and atrial flutter",
        "url": "/specialty/cardiology/atrial-fibrillation-and-atrial-flutter",
        "description": "Atrial fibrillation and atrial flutter - Cardiology clinical information, diagnosis, and management guidelines.",
        "keywords": "and, fibrillation, cardiology, atrial fibrillation and atrial flutter, atrial, outpatient setting, flutter"
    },
    {
        "title": "Syncope",
        "url": "/specialty/cardiology/syncope",
        "description": "Syncope - Cardiology clinical information, diagnosis, and management guidelines.",
        "keywords": "syncope, cardiology, outpatient setting"
    },
    {
        "title": "Diabetes",
        "url": "/specialty/cardiology/diabetes",
        "description": "Diabetes - Cardiology clinical information, diagnosis, and management guidelines.",
        "keywords": "cardiology, outpatient setting, diabetes"
    },
    {
        "title": "Medical management of obesity",
        "url": "/specialty/cardiology/medical-management-of-obesity",
        "description": "Medical management of obesity - Cardiology clinical information, diagnosis, and management guidelines.",
        "keywords": "cardiology, obesity, management, medical management of obesity, medical, outpatient setting"
    },
    {
        "title": "Echocardiography",
        "url": "/specialty/cardiology/echocardiography",
        "description": "Echocardiography - Cardiology clinical information, diagnosis, and management guidelines.",
        "keywords": "cardiology, outpatient setting, echocardiography"
    },
    {
        "title": "Nuclear cardiology and PET imaging",
        "url": "/specialty/cardiology/nuclear-cardiology-and-pet-imaging",
        "description": "Nuclear cardiology and PET imaging - Cardiology clinical information, diagnosis, and management guidelines.",
        "keywords": "and, cardiology, imaging, pet, outpatient setting, nuclear, nuclear cardiology and pet imaging"
    },
    {
        "title": "Perioperative risk stratification",
        "url": "/specialty/cardiology/perioperative-risk-stratification",
        "description": "Perioperative risk stratification - Cardiology clinical information, diagnosis, and management guidelines.",
        "keywords": "risk, cardiology, perioperative risk stratification, perioperative, stratification, outpatient setting"
    },
    {
        "title": "Hypertrophic cardiomyopathy",
        "url": "/specialty/cardiology/hypertrophic-cardiomyopathy",
        "description": "Hypertrophic cardiomyopathy - Cardiology clinical information, diagnosis, and management guidelines.",
        "keywords": "cardiomyopathy, hypertrophic, cardiology, hypertrophic cardiomyopathy, outpatient setting"
    },
    {
        "title": "Adult congenital Heart disease",
        "url": "/specialty/cardiology/adult-congenital-heart-disease",
        "description": "Adult congenital Heart disease - Cardiology clinical information, diagnosis, and management guidelines.",
        "keywords": "adult, cardiology, congenital, disease, heart, outpatient setting, adult congenital heart disease"
    },
    {
        "title": "Pregnancy and cardiovascular disease",
        "url": "/specialty/cardiology/pregnancy-and-cardiovascular-disease",
        "description": "Pregnancy and cardiovascular disease - Cardiology clinical information, diagnosis, and management guidelines.",
        "keywords": "and, cardiology, pregnancy and cardiovascular disease, disease, pregnancy, cardiovascular, outpatient setting"
    },
    {
        "title": "Common supraventricular tachycardias",
        "url": "/specialty/cardiology/common-supraventricular-tachycardias",
        "description": "Common supraventricular tachycardias - Cardiology clinical information, diagnosis, and management guidelines.",
        "keywords": "cardiology, supraventricular, common supraventricular tachycardias, tachycardias, common, outpatient setting"
    },
    {
        "title": "Bradycardia and AV block",
        "url": "/specialty/cardiology/bradycardia-and-av-block",
        "description": "Bradycardia and AV block - Cardiology clinical information, diagnosis, and management guidelines.",
        "keywords": "bradycardia and av block, block, and, cardiology, bradycardia, outpatient setting"
    },
    {
        "title": "Cardiac CT imaging",
        "url": "/specialty/cardiology/cardiac-ct-imaging",
        "description": "Cardiac CT imaging - Cardiology clinical information, diagnosis, and management guidelines.",
        "keywords": "cardiology, imaging, cardiac ct imaging, cardiac, outpatient setting"
    },
    {
        "title": "Cardiac magnetic resonance",
        "url": "/specialty/cardiology/cardiac-magnetic-resonance",
        "description": "Cardiac magnetic resonance - Cardiology clinical information, diagnosis, and management guidelines.",
        "keywords": "cardiology, cardiac magnetic resonance, resonance, magnetic, cardiac, outpatient setting"
    },
    {
        "title": "Other cardiomyopathies",
        "url": "/specialty/cardiology/other-cardiomyopathies",
        "description": "Other cardiomyopathies - Cardiology clinical information, diagnosis, and management guidelines.",
        "keywords": "cardiology, cardiomyopathies, other, other cardiomyopathies, outpatient setting"
    },
    {
        "title": "Cardiac amyloidosis",
        "url": "/specialty/cardiology/cardiac-amyloidosis",
        "description": "Cardiac amyloidosis - Cardiology clinical information, diagnosis, and management guidelines.",
        "keywords": "cardiology, cardiac amyloidosis, amyloidosis, cardiac, outpatient setting"
    },
    {
        "title": "Cardiac sarcoidosis",
        "url": "/specialty/cardiology/cardiac-sarcoidosis",
        "description": "Cardiac sarcoidosis - Cardiology clinical information, diagnosis, and management guidelines.",
        "keywords": "cardiology, sarcoidosis, cardiac sarcoidosis, cardiac, outpatient setting"
    },
    {
        "title": "Cardio-oncology",
        "url": "/specialty/cardiology/cardiooncology",
        "description": "Cardio-oncology - Cardiology clinical information, diagnosis, and management guidelines.",
        "keywords": "oncology, cardiology, cardio, outpatient setting, cardio-oncology"
    },
    {
        "title": "Pace makers (including CRT)",
        "url": "/specialty/cardiology/pace-makers-including-crt",
        "description": "Pace makers (including CRT) - Cardiology clinical information, diagnosis, and management guidelines.",
        "keywords": "crt, cardiology, makers, including, pace makers (including crt), pace, outpatient setting"
    },
    {
        "title": "ICD therapy",
        "url": "/specialty/cardiology/icd-therapy",
        "description": "ICD therapy - Cardiology clinical information, diagnosis, and management guidelines.",
        "keywords": "cardiology, therapy, icd therapy, outpatient setting, icd"
    },
    {
        "title": "Assessment and Treatment of pulmonary hypertension",
        "url": "/specialty/cardiology/assessment-and-treatment-of-pulmonary-hypertension",
        "description": "Assessment and Treatment of pulmonary hypertension - Cardiology clinical information, diagnosis, and management guidelines.",
        "keywords": "and, assessment, treatment, pulmonary, cardiology, assessment and treatment of pulmonary hypertension, hypertension, outpatient setting"
    },
    {
        "title": "Heart transplantation",
        "url": "/specialty/cardiology/heart-transplantation",
        "description": "Heart transplantation - Cardiology clinical information, diagnosis, and management guidelines.",
        "keywords": "cardiology, transplantation, heart transplantation, heart, outpatient setting"
    },
    {
        "title": "Emergency Room",
        "url": "/specialty/cardiology/emergency-room",
        "description": "Emergency Room - Cardiology clinical information, diagnosis, and management guidelines.",
        "keywords": "cardiology, emergency, emergency room, room"
    },
    {
        "title": "Management of ST elevation MI patients",
        "url": "/specialty/cardiology/management-of-st-elevation-mi-patients",
        "description": "Management of ST elevation MI patients - Cardiology clinical information, diagnosis, and management guidelines.",
        "keywords": "management of st elevation mi patients, cardiology, management, elevation, patients, emergency room"
    },
    {
        "title": "Non-ST Elevation acute syndromes",
        "url": "/specialty/cardiology/nonst-elevation-acute-syndromes",
        "description": "Non-ST Elevation acute syndromes - Cardiology clinical information, diagnosis, and management guidelines.",
        "keywords": "syndromes, cardiology, non-st elevation acute syndromes, elevation, non, emergency room, acute"
    },
    {
        "title": "Acute aortic syndromes",
        "url": "/specialty/cardiology/acute-aortic-syndromes",
        "description": "Acute aortic syndromes - Cardiology clinical information, diagnosis, and management guidelines.",
        "keywords": "syndromes, cardiology, acute aortic syndromes, emergency room, aortic, acute"
    },
    {
        "title": "Pulmonary embolism",
        "url": "/specialty/cardiology/pulmonary-embolism",
        "description": "Pulmonary embolism - Cardiology clinical information, diagnosis, and management guidelines.",
        "keywords": "pulmonary, cardiology, embolism, pulmonary embolism, emergency room"
    },
    {
        "title": "Ventricular tachycardia",
        "url": "/specialty/cardiology/ventricular-tachycardia",
        "description": "Ventricular tachycardia - Cardiology clinical information, diagnosis, and management guidelines.",
        "keywords": "ventricular, cardiology, ventricular tachycardia, tachycardia, emergency room"
    },
    {
        "title": "Deep venous thrombosis",
        "url": "/specialty/cardiology/deep-venous-thrombosis",
        "description": "Deep venous thrombosis - Cardiology clinical information, diagnosis, and management guidelines.",
        "keywords": "thrombosis, cardiology, deep, deep venous thrombosis, venous, emergency room"
    },
    {
        "title": "Pericardial disease",
        "url": "/specialty/cardiology/pericardial-disease",
        "description": "Pericardial disease - Cardiology clinical information, diagnosis, and management guidelines.",
        "keywords": "pericardial, cardiology, pericardial disease, disease, emergency room"
    },
    {
        "title": "Hospitalization",
        "url": "/specialty/cardiology/hospitalization",
        "description": "Hospitalization - Cardiology clinical information, diagnosis, and management guidelines.",
        "keywords": "hospitalization, cardiology"
    },
    {
        "title": "Critical care cardiology",
        "url": "/specialty/cardiology/critical-care-cardiology",
        "description": "Critical care cardiology - Cardiology clinical information, diagnosis, and management guidelines.",
        "keywords": "care, critical care cardiology, cardiology, critical, hospitalization"
    },
    {
        "title": "Mechanical circulatory support",
        "url": "/specialty/cardiology/mechanical-circulatory-support",
        "description": "Mechanical circulatory support - Cardiology clinical information, diagnosis, and management guidelines.",
        "keywords": "cardiology, circulatory, mechanical circulatory support, support, hospitalization, mechanical"
    },
    {
        "title": "Infective endocarditis",
        "url": "/specialty/cardiology/infective-endocarditis",
        "description": "Infective endocarditis - Cardiology clinical information, diagnosis, and management guidelines.",
        "keywords": "cardiology, endocarditis, infective, hospitalization, infective endocarditis"
    },
    {
        "title": "Aortic aneurysms and Aortitis",
        "url": "/specialty/cardiology/aortic-aneurysms-and-aortitis",
        "description": "Aortic aneurysms and Aortitis - Cardiology clinical information, diagnosis, and management guidelines.",
        "keywords": "aneurysms, and, cardiology, aortitis, hospitalization, aortic aneurysms and aortitis, aortic"
    },
    {
        "title": "Management of aortic valve disease",
        "url": "/specialty/cardiology/management-of-aortic-valve-disease",
        "description": "Management of aortic valve disease - Cardiology clinical information, diagnosis, and management guidelines.",
        "keywords": "cardiology, management of aortic valve disease, management, disease, hospitalization, aortic, valve"
    },
    {
        "title": "Management of tricuspid and pulmonic valve disease for the boards",
        "url": "/specialty/cardiology/management-of-tricuspid-and-pulmonic-valve-disease-for-the-boards",
        "description": "Management of tricuspid and pulmonic valve disease for the boards - Cardiology clinical information, diagnosis, and management guidelines.",
        "keywords": "and, pulmonic, tricuspid, cardiology, for, management, management of tricuspid and pulmonic valve disease for the boards, the, disease, boards, hospitalization, valve"
    },
    {
        "title": "Management considerations for prosthetic heart valves",
        "url": "/specialty/cardiology/management-considerations-for-prosthetic-heart-valves",
        "description": "Management considerations for prosthetic heart valves - Cardiology clinical information, diagnosis, and management guidelines.",
        "keywords": "prosthetic, cardiology, valves, for, management, considerations, hospitalization, management considerations for prosthetic heart valves, heart"
    },
    {
        "title": "Peripheral heart disease",
        "url": "/specialty/cardiology/peripheral-heart-disease",
        "description": "Peripheral heart disease - Cardiology clinical information, diagnosis, and management guidelines.",
        "keywords": "cardiology, disease, hospitalization, peripheral, peripheral heart disease, heart"
    },
    {
        "title": "Carotid artery disease",
        "url": "/specialty/cardiology/carotid-artery-disease",
        "description": "Carotid artery disease - Cardiology clinical information, diagnosis, and management guidelines.",
        "keywords": "cardiology, carotid artery disease, artery, disease, hospitalization, carotid"
    },
    {
        "title": "Renovascular and mesenteric heart disease",
        "url": "/specialty/cardiology/renovascular-and-mesenteric-heart-disease",
        "description": "Renovascular and mesenteric heart disease - Cardiology clinical information, diagnosis, and management guidelines.",
        "keywords": "and, mesenteric, cardiology, renovascular and mesenteric heart disease, renovascular, disease, hospitalization, heart"
    },
    {
        "title": "Invite me a coffee",
        "url": "/specialty/cardiology/invite-me-a-coffee",
        "description": "Invite me a coffee - Cardiology clinical information, diagnosis, and management guidelines.",
        "keywords": "cardiology, coffee, invite me a coffee, invite"
    },
    {
        "title": "Low back pain examination and therapeutic management](",
        "url": "/specialty/physical_medicine/low-back-pain-examination-and-therapeutic-management",
        "description": "Low back pain examination and therapeutic management]( - Physical Medicine & Rehabilitation clinical information, diagnosis, and management guidelines.",
        "keywords": "physical_medicine, and, examination, low back pain examination and therapeutic management](, physical medicine & rehabilitation, low, management, therapeutic, pain, outpatient setting, back"
    },
    {
        "title": "Management of cervical pain syndrome](",
        "url": "/specialty/physical_medicine/management-of-cervical-pain-syndrome",
        "description": "Management of cervical pain syndrome]( - Physical Medicine & Rehabilitation clinical information, diagnosis, and management guidelines.",
        "keywords": "physical_medicine, cervical, physical medicine & rehabilitation, pain, management, management of cervical pain syndrome](, syndrome, outpatient setting"
    },
    {
        "title": "Chronic pain and its rational pharmacotherapy](",
        "url": "/specialty/physical_medicine/chronic-pain-and-its-rational-pharmacotherapy",
        "description": "Chronic pain and its rational pharmacotherapy]( - Physical Medicine & Rehabilitation clinical information, diagnosis, and management guidelines.",
        "keywords": "physical_medicine, and, chronic, physical medicine & rehabilitation, its, rational, pain, pharmacotherapy, outpatient setting, chronic pain and its rational pharmacotherapy]("
    },
    {
        "title": "Arthritis](",
        "url": "/specialty/physical_medicine/arthritis",
        "description": "Arthritis]( - Physical Medicine & Rehabilitation clinical information, diagnosis, and management guidelines.",
        "keywords": "physical_medicine, arthritis](, physical medicine & rehabilitation, arthritis, outpatient setting"
    },
    {
        "title": "Physical modalities](",
        "url": "/specialty/physical_medicine/physical-modalities",
        "description": "Physical modalities]( - Physical Medicine & Rehabilitation clinical information, diagnosis, and management guidelines.",
        "keywords": "physical_medicine, physical medicine & rehabilitation, physical modalities](, modalities, physical, outpatient setting"
    },
    {
        "title": "Physiology of exercise for strength](",
        "url": "/specialty/physical_medicine/physiology-of-exercise-for-strength",
        "description": "Physiology of exercise for strength]( - Physical Medicine & Rehabilitation clinical information, diagnosis, and management guidelines.",
        "keywords": "physical_medicine, physiology, physiology of exercise for strength](, physical medicine & rehabilitation, for, exercise, outpatient setting, strength"
    },
    {
        "title": "Rehabilitation after total joint arthroplasty](",
        "url": "/specialty/physical_medicine/rehabilitation-after-total-joint-arthroplasty",
        "description": "Rehabilitation after total joint arthroplasty]( - Physical Medicine & Rehabilitation clinical information, diagnosis, and management guidelines.",
        "keywords": "physical_medicine, after, physical medicine & rehabilitation, joint, rehabilitation, total, arthroplasty, rehabilitation after total joint arthroplasty](, outpatient setting"
    },
    {
        "title": "Osteoporosis](",
        "url": "/specialty/physical_medicine/osteoporosis",
        "description": "Osteoporosis]( - Physical Medicine & Rehabilitation clinical information, diagnosis, and management guidelines.",
        "keywords": "physical_medicine, physical medicine & rehabilitation, osteoporosis](, osteoporosis, outpatient setting"
    },
    {
        "title": "Upper extremity compressive neuropathies](",
        "url": "/specialty/physical_medicine/upper-extremity-compressive-neuropathies",
        "description": "Upper extremity compressive neuropathies]( - Physical Medicine & Rehabilitation clinical information, diagnosis, and management guidelines.",
        "keywords": "physical_medicine, upper extremity compressive neuropathies](, physical medicine & rehabilitation, neuropathies, extremity, compressive, upper, outpatient setting"
    },
    {
        "title": "Lower extremity compressive neuropathies](",
        "url": "/specialty/physical_medicine/lower-extremity-compressive-neuropathies",
        "description": "Lower extremity compressive neuropathies]( - Physical Medicine & Rehabilitation clinical information, diagnosis, and management guidelines.",
        "keywords": "physical_medicine, physical medicine & rehabilitation, lower, neuropathies, extremity, lower extremity compressive neuropathies](, compressive, outpatient setting"
    },
    {
        "title": "Sports injuries](",
        "url": "/specialty/physical_medicine/sports-injuries",
        "description": "Sports injuries]( - Physical Medicine & Rehabilitation clinical information, diagnosis, and management guidelines.",
        "keywords": "physical_medicine, sports injuries](, physical medicine & rehabilitation, sports, outpatient setting, injuries"
    },
    {
        "title": "Cumulative trauma disorders](",
        "url": "/specialty/physical_medicine/cumulative-trauma-disorders",
        "description": "Cumulative trauma disorders]( - Physical Medicine & Rehabilitation clinical information, diagnosis, and management guidelines.",
        "keywords": "physical_medicine, cumulative trauma disorders](, physical medicine & rehabilitation, trauma, disorders, outpatient setting, cumulative"
    },
    {
        "title": "Principles in hand rehabilitation](",
        "url": "/specialty/physical_medicine/principles-in-hand-rehabilitation",
        "description": "Principles in hand rehabilitation]( - Physical Medicine & Rehabilitation clinical information, diagnosis, and management guidelines.",
        "keywords": "physical_medicine, principles in hand rehabilitation](, hand, physical medicine & rehabilitation, principles, rehabilitation, outpatient setting"
    },
    {
        "title": "Geriatric rehabilitation](",
        "url": "/specialty/physical_medicine/geriatric-rehabilitation",
        "description": "Geriatric rehabilitation]( - Physical Medicine & Rehabilitation clinical information, diagnosis, and management guidelines.",
        "keywords": "physical_medicine, geriatric rehabilitation](, physical medicine & rehabilitation, rehabilitation, geriatric, outpatient setting"
    },
    {
        "title": "Rehabilitation of patients with stroke](",
        "url": "/specialty/physical_medicine/rehabilitation-of-patients-with-stroke",
        "description": "Rehabilitation of patients with stroke]( - Physical Medicine & Rehabilitation clinical information, diagnosis, and management guidelines.",
        "keywords": "physical_medicine, stroke, rehabilitation of patients with stroke](, physical medicine & rehabilitation, rehabilitation, patients, outpatient setting, with"
    },
    {
        "title": "Spasticity management](",
        "url": "/specialty/physical_medicine/spasticity-management",
        "description": "Spasticity management]( - Physical Medicine & Rehabilitation clinical information, diagnosis, and management guidelines.",
        "keywords": "physical_medicine, physical medicine & rehabilitation, management, spasticity, outpatient setting, spasticity management]("
    },
    {
        "title": "Cardiac rehabilitation](",
        "url": "/specialty/physical_medicine/cardiac-rehabilitation",
        "description": "Cardiac rehabilitation]( - Physical Medicine & Rehabilitation clinical information, diagnosis, and management guidelines.",
        "keywords": "physical_medicine, physical medicine & rehabilitation, rehabilitation, cardiac, cardiac rehabilitation](, outpatient setting"
    },
    {
        "title": "Pulmonary rehabilitation](",
        "url": "/specialty/physical_medicine/pulmonary-rehabilitation",
        "description": "Pulmonary rehabilitation]( - Physical Medicine & Rehabilitation clinical information, diagnosis, and management guidelines.",
        "keywords": "physical_medicine, pulmonary, physical medicine & rehabilitation, pulmonary rehabilitation](, rehabilitation, outpatient setting"
    },
    {
        "title": "Normal gait](",
        "url": "/specialty/physical_medicine/normal-gait",
        "description": "Normal gait]( - Physical Medicine & Rehabilitation clinical information, diagnosis, and management guidelines.",
        "keywords": "physical_medicine, normal, gait, physical medicine & rehabilitation, normal gait](, outpatient setting"
    },
    {
        "title": "Pathological gait](",
        "url": "/specialty/physical_medicine/pathological-gait",
        "description": "Pathological gait]( - Physical Medicine & Rehabilitation clinical information, diagnosis, and management guidelines.",
        "keywords": "physical_medicine, gait, physical medicine & rehabilitation, pathological gait](, pathological, outpatient setting"
    },
    {
        "title": "Electrodiagnostic examination of radiculopathies](",
        "url": "/specialty/physical_medicine/electrodiagnostic-examination-of-radiculopathies",
        "description": "Electrodiagnostic examination of radiculopathies]( - Physical Medicine & Rehabilitation clinical information, diagnosis, and management guidelines.",
        "keywords": "physical_medicine, examination, physical medicine & rehabilitation, radiculopathies, electrodiagnostic examination of radiculopathies](, electrodiagnostic, outpatient setting"
    },
    {
        "title": "H-reflex and F-response](",
        "url": "/specialty/physical_medicine/hreflex-and-fresponse",
        "description": "H-reflex and F-response]( - Physical Medicine & Rehabilitation clinical information, diagnosis, and management guidelines.",
        "keywords": "physical_medicine, reflex, and, physical medicine & rehabilitation, response, h-reflex and f-response](, outpatient setting"
    },
    {
        "title": "Polyneuropathy](",
        "url": "/specialty/physical_medicine/polyneuropathy",
        "description": "Polyneuropathy]( - Physical Medicine & Rehabilitation clinical information, diagnosis, and management guidelines.",
        "keywords": "polyneuropathy](, physical_medicine, physical medicine & rehabilitation, polyneuropathy, outpatient setting"
    },
    {
        "title": "Magnetic resonance imaging of the degenerative lumbar spine](",
        "url": "/specialty/physical_medicine/magnetic-resonance-imaging-of-the-degenerative-lumbar-spine",
        "description": "Magnetic resonance imaging of the degenerative lumbar spine]( - Physical Medicine & Rehabilitation clinical information, diagnosis, and management guidelines.",
        "keywords": "physical_medicine, degenerative, physical medicine & rehabilitation, imaging, spine, resonance, magnetic, the, lumbar, magnetic resonance imaging of the degenerative lumbar spine](, outpatient setting"
    },
    {
        "title": "Regulatory challenges in PM&R](",
        "url": "/specialty/physical_medicine/regulatory-challenges-in-pmr",
        "description": "Regulatory challenges in PM&R]( - Physical Medicine & Rehabilitation clinical information, diagnosis, and management guidelines.",
        "keywords": "physical_medicine, regulatory challenges in pm&r](, challenges, physical medicine & rehabilitation, regulatory, outpatient setting"
    },
    {
        "title": "Lower extremity amputation](",
        "url": "/specialty/physical_medicine/lower-extremity-amputation",
        "description": "Lower extremity amputation]( - Physical Medicine & Rehabilitation clinical information, diagnosis, and management guidelines.",
        "keywords": "physical_medicine, physical medicine & rehabilitation, lower, extremity, amputation, lower extremity amputation](, outpatient setting"
    },
    {
        "title": "Upper limb amputation and prosthetic rehab](",
        "url": "/specialty/physical_medicine/upper-limb-amputation-and-prosthetic-rehab",
        "description": "Upper limb amputation and prosthetic rehab]( - Physical Medicine & Rehabilitation clinical information, diagnosis, and management guidelines.",
        "keywords": "physical_medicine, rehab, prosthetic, and, physical medicine & rehabilitation, limb, upper limb amputation and prosthetic rehab](, amputation, upper, outpatient setting"
    },
    {
        "title": "Evaluation of the lower limb amputee and prosthetic rehab](",
        "url": "/specialty/physical_medicine/evaluation-of-the-lower-limb-amputee-and-prosthetic-rehab",
        "description": "Evaluation of the lower limb amputee and prosthetic rehab]( - Physical Medicine & Rehabilitation clinical information, diagnosis, and management guidelines.",
        "keywords": "physical_medicine, rehab, amputee, and, prosthetic, physical medicine & rehabilitation, lower, limb, evaluation of the lower limb amputee and prosthetic rehab](, the, evaluation, outpatient setting"
    },
    {
        "title": "Lower and upper limb orthotic devices](",
        "url": "/specialty/physical_medicine/lower-and-upper-limb-orthotic-devices",
        "description": "Lower and upper limb orthotic devices]( - Physical Medicine & Rehabilitation clinical information, diagnosis, and management guidelines.",
        "keywords": "physical_medicine, and, lower and upper limb orthotic devices](, physical medicine & rehabilitation, lower, limb, devices, orthotic, upper, outpatient setting"
    },
    {
        "title": "Amputee gait-energy](",
        "url": "/specialty/physical_medicine/amputee-gaitenergy",
        "description": "Amputee gait-energy]( - Physical Medicine & Rehabilitation clinical information, diagnosis, and management guidelines.",
        "keywords": "physical_medicine, amputee, gait, physical medicine & rehabilitation, amputee gait-energy](, energy, outpatient setting"
    },
    {
        "title": "Rehabilitation in patients with multiple sclerosis](",
        "url": "/specialty/physical_medicine/rehabilitation-in-patients-with-multiple-sclerosis",
        "description": "Rehabilitation in patients with multiple sclerosis]( - Physical Medicine & Rehabilitation clinical information, diagnosis, and management guidelines.",
        "keywords": "physical_medicine, physical medicine & rehabilitation, multiple, rehabilitation, sclerosis, patients, rehabilitation in patients with multiple sclerosis](, outpatient setting, with"
    },
    {
        "title": "Complex regional pain syndrome](",
        "url": "/specialty/physical_medicine/complex-regional-pain-syndrome",
        "description": "Complex regional pain syndrome]( - Physical Medicine & Rehabilitation clinical information, diagnosis, and management guidelines.",
        "keywords": "physical_medicine, complex regional pain syndrome](, physical medicine & rehabilitation, complex, pain, syndrome, regional, outpatient setting"
    },
    {
        "title": "Myopathies and their electrodiagnosis](",
        "url": "/specialty/physical_medicine/myopathies-and-their-electrodiagnosis",
        "description": "Myopathies and their electrodiagnosis]( - Physical Medicine & Rehabilitation clinical information, diagnosis, and management guidelines.",
        "keywords": "physical_medicine, and, physical medicine & rehabilitation, their, myopathies, myopathies and their electrodiagnosis](, electrodiagnosis, outpatient setting"
    },
    {
        "title": "EMG in motor neuron disease](",
        "url": "/specialty/physical_medicine/emg-in-motor-neuron-disease",
        "description": "EMG in motor neuron disease]( - Physical Medicine & Rehabilitation clinical information, diagnosis, and management guidelines.",
        "keywords": "physical_medicine, emg in motor neuron disease](, physical medicine & rehabilitation, neuron, disease, emg, outpatient setting, motor"
    },
    {
        "title": "Mild traumatic brain injury in sports](",
        "url": "/specialty/physical_medicine/mild-traumatic-brain-injury-in-sports",
        "description": "Mild traumatic brain injury in sports]( - Physical Medicine & Rehabilitation clinical information, diagnosis, and management guidelines.",
        "keywords": "physical_medicine, physical medicine & rehabilitation, sports, injury, traumatic, mild, brain, mild traumatic brain injury in sports](, outpatient setting"
    },
    {
        "title": "Oncological rehabilitation](",
        "url": "/specialty/physical_medicine/oncological-rehabilitation",
        "description": "Oncological rehabilitation]( - Physical Medicine & Rehabilitation clinical information, diagnosis, and management guidelines.",
        "keywords": "oncological rehabilitation](, physical_medicine, oncological, physical medicine & rehabilitation, rehabilitation, outpatient setting"
    },
    {
        "title": "Emergency Room",
        "url": "/specialty/physical_medicine/emergency-room",
        "description": "Emergency Room - Physical Medicine & Rehabilitation clinical information, diagnosis, and management guidelines.",
        "keywords": "physical_medicine, emergency, physical medicine & rehabilitation, emergency room, room"
    },
    {
        "title": "Traumatic brain injury](",
        "url": "/specialty/physical_medicine/traumatic-brain-injury",
        "description": "Traumatic brain injury]( - Physical Medicine & Rehabilitation clinical information, diagnosis, and management guidelines.",
        "keywords": "physical_medicine, traumatic brain injury](, physical medicine & rehabilitation, injury, traumatic, brain, emergency room"
    },
    {
        "title": "Classification and epidemiology of traumatic spinal chord injury](",
        "url": "/specialty/physical_medicine/classification-and-epidemiology-of-traumatic-spinal-chord-injury",
        "description": "Classification and epidemiology of traumatic spinal chord injury]( - Physical Medicine & Rehabilitation clinical information, diagnosis, and management guidelines.",
        "keywords": "physical_medicine, classification, and, epidemiology, spinal, physical medicine & rehabilitation, chord, classification and epidemiology of traumatic spinal chord injury](, injury, traumatic, emergency room"
    },
    {
        "title": "Interventional pain procedures](",
        "url": "/specialty/physical_medicine/interventional-pain-procedures",
        "description": "Interventional pain procedures]( - Physical Medicine & Rehabilitation clinical information, diagnosis, and management guidelines.",
        "keywords": "physical_medicine, interventional, physical medicine & rehabilitation, procedures, interventional pain procedures](, pain, emergency room"
    },
    {
        "title": "Hospitalization",
        "url": "/specialty/physical_medicine/hospitalization",
        "description": "Hospitalization - Physical Medicine & Rehabilitation clinical information, diagnosis, and management guidelines.",
        "keywords": "hospitalization, physical medicine & rehabilitation, physical_medicine"
    },
    {
        "title": "Pharmacological treatment of cognitive problems post traumatic brain injury](",
        "url": "/specialty/physical_medicine/pharmacological-treatment-of-cognitive-problems-post-traumatic-brain-injury",
        "description": "Pharmacological treatment of cognitive problems post traumatic brain injury]( - Physical Medicine & Rehabilitation clinical information, diagnosis, and management guidelines.",
        "keywords": "physical_medicine, cognitive, treatment, problems, pharmacological treatment of cognitive problems post traumatic brain injury](, physical medicine & rehabilitation, pharmacological, injury, traumatic, brain, hospitalization, post"
    },
    {
        "title": "Neurological and functional outcomes](",
        "url": "/specialty/physical_medicine/neurological-and-functional-outcomes",
        "description": "Neurological and functional outcomes]( - Physical Medicine & Rehabilitation clinical information, diagnosis, and management guidelines.",
        "keywords": "physical_medicine, functional, and, physical medicine & rehabilitation, neurological, outcomes, hospitalization, neurological and functional outcomes]("
    },
    {
        "title": "Neurogenic bladder and other medical issues](",
        "url": "/specialty/physical_medicine/neurogenic-bladder-and-other-medical-issues",
        "description": "Neurogenic bladder and other medical issues]( - Physical Medicine & Rehabilitation clinical information, diagnosis, and management guidelines.",
        "keywords": "physical_medicine, and, neurogenic bladder and other medical issues](, physical medicine & rehabilitation, neurogenic, bladder, other, issues, medical, hospitalization"
    },
    {
        "title": "Swallowing disorders](",
        "url": "/specialty/physical_medicine/swallowing-disorders",
        "description": "Swallowing disorders]( - Physical Medicine & Rehabilitation clinical information, diagnosis, and management guidelines.",
        "keywords": "physical_medicine, swallowing disorders](, physical medicine & rehabilitation, swallowing, disorders, hospitalization"
    },
    {
        "title": "Neurogenic communication disorders](",
        "url": "/specialty/physical_medicine/neurogenic-communication-disorders",
        "description": "Neurogenic communication disorders]( - Physical Medicine & Rehabilitation clinical information, diagnosis, and management guidelines.",
        "keywords": "physical_medicine, physical medicine & rehabilitation, neurogenic, neurogenic communication disorders](, communication, disorders, hospitalization"
    },
    {
        "title": "Rehabilitation in children: Spina bifida and cereral palsy](",
        "url": "/specialty/physical_medicine/rehabilitation-in-children-spina-bifida-and-cereral-palsy",
        "description": "Rehabilitation in children: Spina bifida and cereral palsy]( - Physical Medicine & Rehabilitation clinical information, diagnosis, and management guidelines.",
        "keywords": "physical_medicine, spina, and, children, rehabilitation in children: spina bifida and cereral palsy](, physical medicine & rehabilitation, rehabilitation, palsy, cereral, bifida, hospitalization"
    },
    {
        "title": "Invite me a coffee",
        "url": "/specialty/physical_medicine/invite-me-a-coffee",
        "description": "Invite me a coffee - Physical Medicine & Rehabilitation clinical information, diagnosis, and management guidelines.",
        "keywords": "physical_medicine, physical medicine & rehabilitation, invite, coffee, invite me a coffee"
    },
    {
        "title": "Benign Prostatic Hyperplasia (BPH)",
        "url": "/specialty/urology/benign-prostatic-hyperplasia-bph",
        "description": "Benign Prostatic Hyperplasia (BPH) - Urology clinical information, diagnosis, and management guidelines.",
        "keywords": "hyperplasia, bph, prostatic, urology, benign, outpatient setting, benign prostatic hyperplasia (bph)"
    },
    {
        "title": "Hematuria",
        "url": "/specialty/urology/hematuria",
        "description": "Hematuria - Urology clinical information, diagnosis, and management guidelines.",
        "keywords": "outpatient setting, hematuria, urology"
    },
    {
        "title": "Incontinence",
        "url": "/specialty/urology/incontinence",
        "description": "Incontinence - Urology clinical information, diagnosis, and management guidelines.",
        "keywords": "incontinence, outpatient setting, urology"
    },
    {
        "title": "Asymptomatic bacteriuria and recurrent UTI",
        "url": "/specialty/urology/asymptomatic-bacteriuria-and-recurrent-uti",
        "description": "Asymptomatic bacteriuria and recurrent UTI - Urology clinical information, diagnosis, and management guidelines.",
        "keywords": "bacteriuria, and, recurrent, asymptomatic bacteriuria and recurrent uti, urology, uti, asymptomatic, outpatient setting"
    },
    {
        "title": "Stress incontinence",
        "url": "/specialty/urology/stress-incontinence",
        "description": "Stress incontinence - Urology clinical information, diagnosis, and management guidelines.",
        "keywords": "stress, urology, incontinence, outpatient setting, stress incontinence"
    },
    {
        "title": "Erectile dysfunction",
        "url": "/specialty/urology/erectile-dysfunction",
        "description": "Erectile dysfunction - Urology clinical information, diagnosis, and management guidelines.",
        "keywords": "dysfunction, erectile dysfunction, urology, erectile, outpatient setting"
    },
    {
        "title": "Prostate cancer diagnosis",
        "url": "/specialty/urology/prostate-cancer-diagnosis",
        "description": "Prostate cancer diagnosis - Urology clinical information, diagnosis, and management guidelines.",
        "keywords": "prostate cancer diagnosis, cancer, diagnosis, urology, prostate, outpatient setting"
    },
    {
        "title": "Prostate cancer therapy",
        "url": "/specialty/urology/prostate-cancer-therapy",
        "description": "Prostate cancer therapy - Urology clinical information, diagnosis, and management guidelines.",
        "keywords": "therapy, cancer, prostate, urology, outpatient setting, prostate cancer therapy"
    },
    {
        "title": "AUA guidelines LUTS associated with BPH - Surgical therapy",
        "url": "/specialty/urology/aua-guidelines-luts-associated-with-bph-surgical-therapy",
        "description": "AUA guidelines LUTS associated with BPH - Surgical therapy - Urology clinical information, diagnosis, and management guidelines.",
        "keywords": "guidelines, luts, surgical, aua, therapy, bph, urology, associated, aua guidelines luts associated with bph - surgical therapy, outpatient setting, with"
    },
    {
        "title": "Urinary lithiasis - Medical management",
        "url": "/specialty/urology/urinary-lithiasis-medical-management",
        "description": "Urinary lithiasis - Medical management - Urology clinical information, diagnosis, and management guidelines.",
        "keywords": "urinary lithiasis - medical management, urinary, management, urology, lithiasis, medical, outpatient setting"
    },
    {
        "title": "Chronic pelvic pain in men",
        "url": "/specialty/urology/chronic-pelvic-pain-in-men",
        "description": "Chronic pelvic pain in men - Urology clinical information, diagnosis, and management guidelines.",
        "keywords": "chronic, pelvic, men, urology, pain, outpatient setting, chronic pelvic pain in men"
    },
    {
        "title": "Interstitial cystitis/bladder pain syndrome",
        "url": "/specialty/urology/interstitial-cystitisbladder-pain-syndrome",
        "description": "Interstitial cystitis/bladder pain syndrome - Urology clinical information, diagnosis, and management guidelines.",
        "keywords": "interstitial, cystitis, bladder, urology, pain, syndrome, interstitial cystitis/bladder pain syndrome, outpatient setting"
    },
    {
        "title": "Management of hypogonadism",
        "url": "/specialty/urology/management-of-hypogonadism",
        "description": "Management of hypogonadism - Urology clinical information, diagnosis, and management guidelines.",
        "keywords": "management of hypogonadism, management, urology, hypogonadism, outpatient setting"
    },
    {
        "title": "Male infertility",
        "url": "/specialty/urology/male-infertility",
        "description": "Male infertility - Urology clinical information, diagnosis, and management guidelines.",
        "keywords": "infertility, urology, male infertility, outpatient setting, male"
    },
    {
        "title": "Pelvic organ prolapse",
        "url": "/specialty/urology/pelvic-organ-prolapse",
        "description": "Pelvic organ prolapse - Urology clinical information, diagnosis, and management guidelines.",
        "keywords": "pelvic, pelvic organ prolapse, urology, organ, outpatient setting, prolapse"
    },
    {
        "title": "Urodynamics - indications and interpretations",
        "url": "/specialty/urology/urodynamics-indications-and-interpretations",
        "description": "Urodynamics - indications and interpretations - Urology clinical information, diagnosis, and management guidelines.",
        "keywords": "urodynamics, and, interpretations, urology, urodynamics - indications and interpretations, indications, outpatient setting"
    },
    {
        "title": "Non-muscle invasive bladder cancer",
        "url": "/specialty/urology/nonmuscle-invasive-bladder-cancer",
        "description": "Non-muscle invasive bladder cancer - Urology clinical information, diagnosis, and management guidelines.",
        "keywords": "muscle, non-muscle invasive bladder cancer, cancer, bladder, urology, invasive, non, outpatient setting"
    },
    {
        "title": "Urinary lithiasis - Surgical management",
        "url": "/specialty/urology/urinary-lithiasis-surgical-management",
        "description": "Urinary lithiasis - Surgical management - Urology clinical information, diagnosis, and management guidelines.",
        "keywords": "urinary lithiasis - surgical management, urinary, surgical, management, urology, lithiasis, outpatient setting"
    },
    {
        "title": "Sphinteric urinary tract incontinence",
        "url": "/specialty/urology/sphinteric-urinary-tract-incontinence",
        "description": "Sphinteric urinary tract incontinence - Urology clinical information, diagnosis, and management guidelines.",
        "keywords": "sphinteric, urinary, sphinteric urinary tract incontinence, urology, tract, incontinence, outpatient setting"
    },
    {
        "title": "Kidney cancer",
        "url": "/specialty/urology/kidney-cancer",
        "description": "Kidney cancer - Urology clinical information, diagnosis, and management guidelines.",
        "keywords": "kidney cancer, cancer, urology, kidney, outpatient setting"
    },
    {
        "title": "Undescended testes",
        "url": "/specialty/urology/undescended-testes",
        "description": "Undescended testes - Urology clinical information, diagnosis, and management guidelines.",
        "keywords": "undescended, urology, testes, undescended testes, outpatient setting"
    },
    {
        "title": "Hypospadias",
        "url": "/specialty/urology/hypospadias",
        "description": "Hypospadias - Urology clinical information, diagnosis, and management guidelines.",
        "keywords": "hypospadias, outpatient setting, urology"
    },
    {
        "title": "Pediatric urinary tract infections",
        "url": "/specialty/urology/pediatric-urinary-tract-infections",
        "description": "Pediatric urinary tract infections - Urology clinical information, diagnosis, and management guidelines.",
        "keywords": "infections, pediatric, urinary, pediatric urinary tract infections, urology, tract, outpatient setting"
    },
    {
        "title": "Urethral strictures",
        "url": "/specialty/urology/urethral-strictures",
        "description": "Urethral strictures - Urology clinical information, diagnosis, and management guidelines.",
        "keywords": "urethral, urethral strictures, urology, strictures, outpatient setting"
    },
    {
        "title": "Peyronie disease and priapism",
        "url": "/specialty/urology/peyronie-disease-and-priapism",
        "description": "Peyronie disease and priapism - Urology clinical information, diagnosis, and management guidelines.",
        "keywords": "peyronie disease and priapism, and, priapism, peyronie, disease, urology, outpatient setting"
    },
    {
        "title": "Upper tract urothelial cancer",
        "url": "/specialty/urology/upper-tract-urothelial-cancer",
        "description": "Upper tract urothelial cancer - Urology clinical information, diagnosis, and management guidelines.",
        "keywords": "urothelial, cancer, urology, upper tract urothelial cancer, tract, upper, outpatient setting"
    },
    {
        "title": "Disorders of the scrotum and seminal vesicles",
        "url": "/specialty/urology/disorders-of-the-scrotum-and-seminal-vesicles",
        "description": "Disorders of the scrotum and seminal vesicles - Urology clinical information, diagnosis, and management guidelines.",
        "keywords": "and, scrotum, the, seminal, urology, disorders, vesicles, outpatient setting, disorders of the scrotum and seminal vesicles"
    },
    {
        "title": "Bladder and urethral diverticula",
        "url": "/specialty/urology/bladder-and-urethral-diverticula",
        "description": "Bladder and urethral diverticula - Urology clinical information, diagnosis, and management guidelines.",
        "keywords": "and, urethral, bladder and urethral diverticula, bladder, urology, diverticula, outpatient setting"
    },
    {
        "title": "Adrenal disorders",
        "url": "/specialty/urology/adrenal-disorders",
        "description": "Adrenal disorders - Urology clinical information, diagnosis, and management guidelines.",
        "keywords": "adrenal, adrenal disorders, urology, disorders, outpatient setting"
    },
    {
        "title": "Chronic Kidney disorders",
        "url": "/specialty/urology/chronic-kidney-disorders",
        "description": "Chronic Kidney disorders - Urology clinical information, diagnosis, and management guidelines.",
        "keywords": "chronic kidney disorders, chronic, urology, disorders, kidney, outpatient setting"
    },
    {
        "title": "Vesicouretrhal reflux",
        "url": "/specialty/urology/vesicouretrhal-reflux",
        "description": "Vesicouretrhal reflux - Urology clinical information, diagnosis, and management guidelines.",
        "keywords": "vesicouretrhal reflux, reflux, urology, vesicouretrhal, outpatient setting"
    },
    {
        "title": "Nephrolithiasis in children and adolescents",
        "url": "/specialty/urology/nephrolithiasis-in-children-and-adolescents",
        "description": "Nephrolithiasis in children and adolescents - Urology clinical information, diagnosis, and management guidelines.",
        "keywords": "and, children, nephrolithiasis in children and adolescents, urology, adolescents, nephrolithiasis, outpatient setting"
    },
    {
        "title": "Spina bifida and neurogenic bladder",
        "url": "/specialty/urology/spina-bifida-and-neurogenic-bladder",
        "description": "Spina bifida and neurogenic bladder - Urology clinical information, diagnosis, and management guidelines.",
        "keywords": "and, neurogenic, bladder, spina bifida and neurogenic bladder, urology, bifida, spina, outpatient setting"
    },
    {
        "title": "Early stage testicular cancer",
        "url": "/specialty/urology/early-stage-testicular-cancer",
        "description": "Early stage testicular cancer - Urology clinical information, diagnosis, and management guidelines.",
        "keywords": "testicular, cancer, early, early stage testicular cancer, urology, outpatient setting, stage"
    },
    {
        "title": "Penile cancer",
        "url": "/specialty/urology/penile-cancer",
        "description": "Penile cancer - Urology clinical information, diagnosis, and management guidelines.",
        "keywords": "penile cancer, cancer, urology, penile, outpatient setting"
    },
    {
        "title": "Urethral carcinoma",
        "url": "/specialty/urology/urethral-carcinoma",
        "description": "Urethral carcinoma - Urology clinical information, diagnosis, and management guidelines.",
        "keywords": "urethral, carcinoma, urethral carcinoma, urology, outpatient setting"
    },
    {
        "title": "Uropathology {prostate, kidney, adrenals, bladder, testis, penis}",
        "url": "/specialty/urology/uropathology-prostate-kidney-adrenals-bladder-testis-penis",
        "description": "Uropathology {prostate, kidney, adrenals, bladder, testis, penis} - Urology clinical information, diagnosis, and management guidelines.",
        "keywords": "uropathology, testis, bladder, urology, prostate, kidney, adrenals, uropathology {prostate, kidney, adrenals, bladder, testis, penis}, penis, outpatient setting"
    },
    {
        "title": "Obstructive uropathy - Pediatrics",
        "url": "/specialty/urology/obstructive-uropathy-pediatrics",
        "description": "Obstructive uropathy - Pediatrics - Urology clinical information, diagnosis, and management guidelines.",
        "keywords": "obstructive, urology, pediatrics, obstructive uropathy - pediatrics, uropathy, outpatient setting"
    },
    {
        "title": "Disorders of sex development",
        "url": "/specialty/urology/disorders-of-sex-development",
        "description": "Disorders of sex development - Urology clinical information, diagnosis, and management guidelines.",
        "keywords": "disorders of sex development, urology, disorders, sex, development, outpatient setting"
    },
    {
        "title": "Exstrophy",
        "url": "/specialty/urology/exstrophy",
        "description": "Exstrophy - Urology clinical information, diagnosis, and management guidelines.",
        "keywords": "outpatient setting, urology, exstrophy"
    },
    {
        "title": "Pre and Postnatal management of posterior urethral valves",
        "url": "/specialty/urology/pre-and-postnatal-management-of-posterior-urethral-valves",
        "description": "Pre and Postnatal management of posterior urethral valves - Urology clinical information, diagnosis, and management guidelines.",
        "keywords": "postnatal, and, posterior, urethral, pre and postnatal management of posterior urethral valves, valves, management, urology, pre, outpatient setting"
    },
    {
        "title": "Emergency Room",
        "url": "/specialty/urology/emergency-room",
        "description": "Emergency Room - Urology clinical information, diagnosis, and management guidelines.",
        "keywords": "emergency, emergency room, urology, room"
    },
    {
        "title": "Urologic Emergencies",
        "url": "/specialty/urology/urologic-emergencies",
        "description": "Urologic Emergencies - Urology clinical information, diagnosis, and management guidelines.",
        "keywords": "emergencies, urologic emergencies, urology, emergency room, urologic"
    },
    {
        "title": "UTI obstruction",
        "url": "/specialty/urology/uti-obstruction",
        "description": "UTI obstruction - Urology clinical information, diagnosis, and management guidelines.",
        "keywords": "uti obstruction, uti, urology, obstruction, emergency room"
    },
    {
        "title": "Renal and upper urinary tract trauma",
        "url": "/specialty/urology/renal-and-upper-urinary-tract-trauma",
        "description": "Renal and upper urinary tract trauma - Urology clinical information, diagnosis, and management guidelines.",
        "keywords": "and, urinary, trauma, renal, urology, renal and upper urinary tract trauma, tract, upper, emergency room"
    },
    {
        "title": "Acute kidney disorders",
        "url": "/specialty/urology/acute-kidney-disorders",
        "description": "Acute kidney disorders - Urology clinical information, diagnosis, and management guidelines.",
        "keywords": "acute kidney disorders, urology, disorders, kidney, emergency room, acute"
    },
    {
        "title": "Bladder and prostate trauma",
        "url": "/specialty/urology/bladder-and-prostate-trauma",
        "description": "Bladder and prostate trauma - Urology clinical information, diagnosis, and management guidelines.",
        "keywords": "and, trauma, bladder and prostate trauma, bladder, urology, prostate, emergency room"
    },
    {
        "title": "Urethral trauma",
        "url": "/specialty/urology/urethral-trauma",
        "description": "Urethral trauma - Urology clinical information, diagnosis, and management guidelines.",
        "keywords": "urethral, trauma, urology, emergency room, urethral trauma"
    },
    {
        "title": "Genital trauma",
        "url": "/specialty/urology/genital-trauma",
        "description": "Genital trauma - Urology clinical information, diagnosis, and management guidelines.",
        "keywords": "trauma, genital trauma, genital, urology, emergency room"
    },
    {
        "title": "Severe priapism",
        "url": "/specialty/urology/severe-priapism",
        "description": "Severe priapism - Urology clinical information, diagnosis, and management guidelines.",
        "keywords": "severe priapism, severe, priapism, urology, emergency room"
    },
    {
        "title": "Acute urinary retention",
        "url": "/specialty/urology/acute-urinary-retention",
        "description": "Acute urinary retention - Urology clinical information, diagnosis, and management guidelines.",
        "keywords": "acute urinary retention, urinary, retention, urology, emergency room, acute"
    },
    {
        "title": "Acute stone disease",
        "url": "/specialty/urology/acute-stone-disease",
        "description": "Acute stone disease - Urology clinical information, diagnosis, and management guidelines.",
        "keywords": "acute stone disease, stone, disease, urology, emergency room, acute"
    },
    {
        "title": "Hospitalization",
        "url": "/specialty/urology/hospitalization",
        "description": "Hospitalization - Urology clinical information, diagnosis, and management guidelines.",
        "keywords": "hospitalization, urology"
    },
    {
        "title": "Complex urologic surgery",
        "url": "/specialty/urology/complex-urologic-surgery",
        "description": "Complex urologic surgery - Urology clinical information, diagnosis, and management guidelines.",
        "keywords": "surgery, urology, complex, complex urologic surgery, hospitalization, urologic"
    },
    {
        "title": "Major trauma management",
        "url": "/specialty/urology/major-trauma-management",
        "description": "Major trauma management - Urology clinical information, diagnosis, and management guidelines.",
        "keywords": "trauma, major, major trauma management, management, urology, hospitalization"
    },
    {
        "title": "Urinary Diversion",
        "url": "/specialty/urology/urinary-diversion",
        "description": "Urinary Diversion - Urology clinical information, diagnosis, and management guidelines.",
        "keywords": "urinary, diversion, urology, hospitalization, urinary diversion"
    },
    {
        "title": "Complex oncologic procedures",
        "url": "/specialty/urology/complex-oncologic-procedures",
        "description": "Complex oncologic procedures - Urology clinical information, diagnosis, and management guidelines.",
        "keywords": "complex oncologic procedures, procedures, urology, complex, oncologic, hospitalization"
    },
    {
        "title": "Complex reconstructive procedures",
        "url": "/specialty/urology/complex-reconstructive-procedures",
        "description": "Complex reconstructive procedures - Urology clinical information, diagnosis, and management guidelines.",
        "keywords": "reconstructive, procedures, complex reconstructive procedures, urology, complex, hospitalization"
    },
    {
        "title": "Urinary tract fistula",
        "url": "/specialty/urology/urinary-tract-fistula",
        "description": "Urinary tract fistula - Urology clinical information, diagnosis, and management guidelines.",
        "keywords": "urinary tract fistula, urinary, tract, urology, hospitalization, fistula"
    },
    {
        "title": "Complex pediatric urologic surgery",
        "url": "/specialty/urology/complex-pediatric-urologic-surgery",
        "description": "Complex pediatric urologic surgery - Urology clinical information, diagnosis, and management guidelines.",
        "keywords": "surgery, pediatric, complex pediatric urologic surgery, urology, complex, hospitalization, urologic"
    },
    {
        "title": "Major genitourinary reconstruction",
        "url": "/specialty/urology/major-genitourinary-reconstruction",
        "description": "Major genitourinary reconstruction - Urology clinical information, diagnosis, and management guidelines.",
        "keywords": "genitourinary, major, urology, hospitalization, reconstruction, major genitourinary reconstruction"
    },
    {
        "title": "Post-operative complications",
        "url": "/specialty/urology/postoperative-complications",
        "description": "Post-operative complications - Urology clinical information, diagnosis, and management guidelines.",
        "keywords": "complications, urology, post-operative complications, hospitalization, operative, post"
    },
    {
        "title": "Complex stone procedures",
        "url": "/specialty/urology/complex-stone-procedures",
        "description": "Complex stone procedures - Urology clinical information, diagnosis, and management guidelines.",
        "keywords": "procedures, complex stone procedures, stone, urology, complex, hospitalization"
    },
    {
        "title": "Invite me a coffee",
        "url": "/specialty/urology/invite-me-a-coffee",
        "description": "Invite me a coffee - Urology clinical information, diagnosis, and management guidelines.",
        "keywords": "coffee, urology, invite me a coffee, invite"
    },
    {
        "title": "Immunizations](",
        "url": "/specialty/pediatrics/immunizations",
        "description": "Immunizations]( - Pediatrics clinical information, diagnosis, and management guidelines.",
        "keywords": "outpatient setting, immunizations](, pediatrics, immunizations"
    },
    {
        "title": "Typical child development](",
        "url": "/specialty/pediatrics/typical-child-development",
        "description": "Typical child development]( - Pediatrics clinical information, diagnosis, and management guidelines.",
        "keywords": "child, typical, typical child development](, pediatrics, development, outpatient setting"
    },
    {
        "title": "Child development](",
        "url": "/specialty/pediatrics/child-development",
        "description": "Child development]( - Pediatrics clinical information, diagnosis, and management guidelines.",
        "keywords": "child, pediatrics, development, outpatient setting, child development]("
    },
    {
        "title": "General pediatrics/Sports medicine](",
        "url": "/specialty/pediatrics/general-pediatricssports-medicine",
        "description": "General pediatrics/Sports medicine]( - Pediatrics clinical information, diagnosis, and management guidelines.",
        "keywords": "sports, pediatrics, medicine, general, outpatient setting, general pediatrics/sports medicine]("
    },
    {
        "title": "Pediatric dermatology](",
        "url": "/specialty/pediatrics/pediatric-dermatology",
        "description": "Pediatric dermatology]( - Pediatrics clinical information, diagnosis, and management guidelines.",
        "keywords": "pediatric dermatology](, dermatology, pediatric, pediatrics, outpatient setting"
    },
    {
        "title": "Growth disorders](",
        "url": "/specialty/pediatrics/growth-disorders",
        "description": "Growth disorders]( - Pediatrics clinical information, diagnosis, and management guidelines.",
        "keywords": "growth, disorders, pediatrics, growth disorders](, outpatient setting"
    },
    {
        "title": "Allergic disorders](",
        "url": "/specialty/pediatrics/allergic-disorders",
        "description": "Allergic disorders]( - Pediatrics clinical information, diagnosis, and management guidelines.",
        "keywords": "disorders, pediatrics, allergic disorders](, allergic, outpatient setting"
    },
    {
        "title": "Pulmonary and Airway disease](",
        "url": "/specialty/pediatrics/pulmonary-and-airway-disease",
        "description": "Pulmonary and Airway disease]( - Pediatrics clinical information, diagnosis, and management guidelines.",
        "keywords": "airway, and, pulmonary, disease, pulmonary and airway disease](, pediatrics, outpatient setting"
    },
    {
        "title": "Anemia](",
        "url": "/specialty/pediatrics/anemia",
        "description": "Anemia]( - Pediatrics clinical information, diagnosis, and management guidelines.",
        "keywords": "anemia, outpatient setting, pediatrics, anemia]("
    },
    {
        "title": "Thyroid disorders](",
        "url": "/specialty/pediatrics/thyroid-disorders",
        "description": "Thyroid disorders]( - Pediatrics clinical information, diagnosis, and management guidelines.",
        "keywords": "thyroid, disorders, thyroid disorders](, pediatrics, outpatient setting"
    },
    {
        "title": "Hematuria and proteinuria](",
        "url": "/specialty/pediatrics/hematuria-and-proteinuria",
        "description": "Hematuria and proteinuria]( - Pediatrics clinical information, diagnosis, and management guidelines.",
        "keywords": "and, hematuria and proteinuria](, pediatrics, proteinuria, hematuria, outpatient setting"
    },
    {
        "title": "Abdominal pain and inflammatory bowel disease](",
        "url": "/specialty/pediatrics/abdominal-pain-and-inflammatory-bowel-disease",
        "description": "Abdominal pain and inflammatory bowel disease]( - Pediatrics clinical information, diagnosis, and management guidelines.",
        "keywords": "and, abdominal pain and inflammatory bowel disease](, bowel, disease, inflammatory, pediatrics, pain, abdominal, outpatient setting"
    },
    {
        "title": "Adolescent medicine](",
        "url": "/specialty/pediatrics/adolescent-medicine",
        "description": "Adolescent medicine]( - Pediatrics clinical information, diagnosis, and management guidelines.",
        "keywords": "adolescent, outpatient setting, pediatrics, adolescent medicine](, medicine"
    },
    {
        "title": "Sexually transmitted infections](",
        "url": "/specialty/pediatrics/sexually-transmitted-infections",
        "description": "Sexually transmitted infections]( - Pediatrics clinical information, diagnosis, and management guidelines.",
        "keywords": "sexually, infections, transmitted, pediatrics, sexually transmitted infections](, outpatient setting"
    },
    {
        "title": "Amenorrhea](",
        "url": "/specialty/pediatrics/amenorrhea",
        "description": "Amenorrhea]( - Pediatrics clinical information, diagnosis, and management guidelines.",
        "keywords": "amenorrhea, outpatient setting, amenorrhea](, pediatrics"
    },
    {
        "title": "Orthopedics and sports medicine](",
        "url": "/specialty/pediatrics/orthopedics-and-sports-medicine",
        "description": "Orthopedics and sports medicine]( - Pediatrics clinical information, diagnosis, and management guidelines.",
        "keywords": "and, orthopedics, sports, pediatrics, medicine, orthopedics and sports medicine](, outpatient setting"
    },
    {
        "title": "Recognition of cardiovascular disorders](",
        "url": "/specialty/pediatrics/recognition-of-cardiovascular-disorders",
        "description": "Recognition of cardiovascular disorders]( - Pediatrics clinical information, diagnosis, and management guidelines.",
        "keywords": "recognition of cardiovascular disorders](, recognition, pediatrics, disorders, cardiovascular, outpatient setting"
    },
    {
        "title": "Epilepsy and anti-convulsant therapy](",
        "url": "/specialty/pediatrics/epilepsy-and-anticonvulsant-therapy",
        "description": "Epilepsy and anti-convulsant therapy]( - Pediatrics clinical information, diagnosis, and management guidelines.",
        "keywords": "and, epilepsy, therapy, epilepsy and anti-convulsant therapy](, pediatrics, convulsant, anti, outpatient setting"
    },
    {
        "title": "Hypertension](",
        "url": "/specialty/pediatrics/hypertension",
        "description": "Hypertension]( - Pediatrics clinical information, diagnosis, and management guidelines.",
        "keywords": "hypertension, hypertension](, outpatient setting, pediatrics"
    },
    {
        "title": "Pediatric infectious disease](",
        "url": "/specialty/pediatrics/pediatric-infectious-disease",
        "description": "Pediatric infectious disease]( - Pediatrics clinical information, diagnosis, and management guidelines.",
        "keywords": "pediatric, disease, pediatrics, pediatric infectious disease](, outpatient setting, infectious"
    },
    {
        "title": "Hepatitis](",
        "url": "/specialty/pediatrics/hepatitis",
        "description": "Hepatitis]( - Pediatrics clinical information, diagnosis, and management guidelines.",
        "keywords": "hepatitis](, hepatitis, outpatient setting, pediatrics"
    },
    {
        "title": "Bleeding disorders](",
        "url": "/specialty/pediatrics/bleeding-disorders",
        "description": "Bleeding disorders]( - Pediatrics clinical information, diagnosis, and management guidelines.",
        "keywords": "bleeding, disorders, pediatrics, bleeding disorders](, outpatient setting"
    },
    {
        "title": "Developmental disorders](",
        "url": "/specialty/pediatrics/developmental-disorders",
        "description": "Developmental disorders]( - Pediatrics clinical information, diagnosis, and management guidelines.",
        "keywords": "developmental, disorders, pediatrics, developmental disorders](, outpatient setting"
    },
    {
        "title": "Pediatric urology](",
        "url": "/specialty/pediatrics/pediatric-urology",
        "description": "Pediatric urology]( - Pediatrics clinical information, diagnosis, and management guidelines.",
        "keywords": "pediatric, pediatric urology](, urology, pediatrics, outpatient setting"
    },
    {
        "title": "Endocrinology](",
        "url": "/specialty/pediatrics/endocrinology",
        "description": "Endocrinology]( - Pediatrics clinical information, diagnosis, and management guidelines.",
        "keywords": "endocrinology, outpatient setting, endocrinology](, pediatrics"
    },
    {
        "title": "Adrenal disorders](",
        "url": "/specialty/pediatrics/adrenal-disorders",
        "description": "Adrenal disorders]( - Pediatrics clinical information, diagnosis, and management guidelines.",
        "keywords": "adrenal, adrenal disorders](, disorders, pediatrics, outpatient setting"
    },
    {
        "title": "Congenital heart disease](",
        "url": "/specialty/pediatrics/congenital-heart-disease",
        "description": "Congenital heart disease]( - Pediatrics clinical information, diagnosis, and management guidelines.",
        "keywords": "congenital, disease, pediatrics, heart, congenital heart disease](, outpatient setting"
    },
    {
        "title": "Disorders of cardiac rate and rhythm](",
        "url": "/specialty/pediatrics/disorders-of-cardiac-rate-and-rhythm",
        "description": "Disorders of cardiac rate and rhythm]( - Pediatrics clinical information, diagnosis, and management guidelines.",
        "keywords": "rhythm, and, rate, disorders, pediatrics, cardiac, disorders of cardiac rate and rhythm](, outpatient setting"
    },
    {
        "title": "Dysmorphic syndromes](",
        "url": "/specialty/pediatrics/dysmorphic-syndromes",
        "description": "Dysmorphic syndromes]( - Pediatrics clinical information, diagnosis, and management guidelines.",
        "keywords": "syndromes, dysmorphic syndromes](, pediatrics, outpatient setting, dysmorphic"
    },
    {
        "title": "Chromosomal abnormalities](",
        "url": "/specialty/pediatrics/chromosomal-abnormalities",
        "description": "Chromosomal abnormalities]( - Pediatrics clinical information, diagnosis, and management guidelines.",
        "keywords": "chromosomal abnormalities](, chromosomal, abnormalities, pediatrics, outpatient setting"
    },
    {
        "title": "Inborn errors of metabolism](",
        "url": "/specialty/pediatrics/inborn-errors-of-metabolism",
        "description": "Inborn errors of metabolism]( - Pediatrics clinical information, diagnosis, and management guidelines.",
        "keywords": "errors, inborn errors of metabolism](, metabolism, pediatrics, inborn, outpatient setting"
    },
    {
        "title": "Neurocutaneous syndromes](",
        "url": "/specialty/pediatrics/neurocutaneous-syndromes",
        "description": "Neurocutaneous syndromes]( - Pediatrics clinical information, diagnosis, and management guidelines.",
        "keywords": "syndromes, neurocutaneous, pediatrics, neurocutaneous syndromes](, outpatient setting"
    },
    {
        "title": "Calcium and phosphorus metabolism](",
        "url": "/specialty/pediatrics/calcium-and-phosphorus-metabolism",
        "description": "Calcium and phosphorus metabolism]( - Pediatrics clinical information, diagnosis, and management guidelines.",
        "keywords": "and, calcium, metabolism, calcium and phosphorus metabolism](, pediatrics, phosphorus, outpatient setting"
    },
    {
        "title": "Hemoglobinopathies](",
        "url": "/specialty/pediatrics/hemoglobinopathies",
        "description": "Hemoglobinopathies]( - Pediatrics clinical information, diagnosis, and management guidelines.",
        "keywords": "hemoglobinopathies, hemoglobinopathies](, outpatient setting, pediatrics"
    },
    {
        "title": "Congenital immunodeficiencies](",
        "url": "/specialty/pediatrics/congenital-immunodeficiencies",
        "description": "Congenital immunodeficiencies]( - Pediatrics clinical information, diagnosis, and management guidelines.",
        "keywords": "immunodeficiencies, congenital, congenital immunodeficiencies](, pediatrics, outpatient setting"
    },
    {
        "title": "Presenting signs and prognostic factors of common pediatric tumors](",
        "url": "/specialty/pediatrics/presenting-signs-and-prognostic-factors-of-common-pediatric-tumors",
        "description": "Presenting signs and prognostic factors of common pediatric tumors]( - Pediatrics clinical information, diagnosis, and management guidelines.",
        "keywords": "tumors, and, pediatric, prognostic, presenting signs and prognostic factors of common pediatric tumors](, common, factors, pediatrics, presenting, outpatient setting, signs"
    },
    {
        "title": "Hematology/oncology](",
        "url": "/specialty/pediatrics/hematologyoncology",
        "description": "Hematology/oncology]( - Pediatrics clinical information, diagnosis, and management guidelines.",
        "keywords": "oncology, hematology, pediatrics, hematology/oncology](, outpatient setting"
    },
    {
        "title": "Emergency Room",
        "url": "/specialty/pediatrics/emergency-room",
        "description": "Emergency Room - Pediatrics clinical information, diagnosis, and management guidelines.",
        "keywords": "room, emergency, emergency room, pediatrics"
    },
    {
        "title": "Pediatric trauma](",
        "url": "/specialty/pediatrics/pediatric-trauma",
        "description": "Pediatric trauma]( - Pediatrics clinical information, diagnosis, and management guidelines.",
        "keywords": "pediatric, trauma, pediatric trauma](, pediatrics, emergency room"
    },
    {
        "title": "Critical care and emergency medicine](",
        "url": "/specialty/pediatrics/critical-care-and-emergency-medicine",
        "description": "Critical care and emergency medicine]( - Pediatrics clinical information, diagnosis, and management guidelines.",
        "keywords": "emergency, and, care, critical, critical care and emergency medicine](, pediatrics, emergency room, medicine"
    },
    {
        "title": "Ingestions](",
        "url": "/specialty/pediatrics/ingestions",
        "description": "Ingestions]( - Pediatrics clinical information, diagnosis, and management guidelines.",
        "keywords": "ingestions](, emergency room, ingestions, pediatrics"
    },
    {
        "title": "Dehydration and Na disorders](",
        "url": "/specialty/pediatrics/dehydration-and-na-disorders",
        "description": "Dehydration and Na disorders]( - Pediatrics clinical information, diagnosis, and management guidelines.",
        "keywords": "emergency room, and, dehydration and na disorders](, disorders, pediatrics, dehydration"
    },
    {
        "title": "Foreign bodies and caustic ingestions](",
        "url": "/specialty/pediatrics/foreign-bodies-and-caustic-ingestions",
        "description": "Foreign bodies and caustic ingestions]( - Pediatrics clinical information, diagnosis, and management guidelines.",
        "keywords": "foreign bodies and caustic ingestions](, and, bodies, ingestions, caustic, pediatrics, foreign, emergency room"
    },
    {
        "title": "Acid base and K problems](",
        "url": "/specialty/pediatrics/acid-base-and-k-problems",
        "description": "Acid base and K problems]( - Pediatrics clinical information, diagnosis, and management guidelines.",
        "keywords": "and, problems, acid, pediatrics, acid base and k problems](, emergency room, base"
    },
    {
        "title": "Allergy and immunology](",
        "url": "/specialty/pediatrics/allergy-and-immunology",
        "description": "Allergy and immunology]( - Pediatrics clinical information, diagnosis, and management guidelines.",
        "keywords": "and, immunology, allergy, allergy and immunology](, pediatrics, emergency room"
    },
    {
        "title": "Hospitalization",
        "url": "/specialty/pediatrics/hospitalization",
        "description": "Hospitalization - Pediatrics clinical information, diagnosis, and management guidelines.",
        "keywords": "hospitalization, pediatrics"
    },
    {
        "title": "Neonatology](",
        "url": "/specialty/pediatrics/neonatology",
        "description": "Neonatology]( - Pediatrics clinical information, diagnosis, and management guidelines.",
        "keywords": "hospitalization, neonatology, pediatrics, neonatology]("
    },
    {
        "title": "Respiratory disease of the newborn](",
        "url": "/specialty/pediatrics/respiratory-disease-of-the-newborn",
        "description": "Respiratory disease of the newborn]( - Pediatrics clinical information, diagnosis, and management guidelines.",
        "keywords": "respiratory, respiratory disease of the newborn](, the, disease, newborn, pediatrics, hospitalization"
    },
    {
        "title": "Perinatal and congenital infections](",
        "url": "/specialty/pediatrics/perinatal-and-congenital-infections",
        "description": "Perinatal and congenital infections]( - Pediatrics clinical information, diagnosis, and management guidelines.",
        "keywords": "infections, and, perinatal, congenital, perinatal and congenital infections](, pediatrics, hospitalization"
    },
    {
        "title": "Neonatal jaundice and liver disease](",
        "url": "/specialty/pediatrics/neonatal-jaundice-and-liver-disease",
        "description": "Neonatal jaundice and liver disease]( - Pediatrics clinical information, diagnosis, and management guidelines.",
        "keywords": "and, jaundice, disease, pediatrics, liver, hospitalization, neonatal jaundice and liver disease](, neonatal"
    },
    {
        "title": "Pediatric surgery](",
        "url": "/specialty/pediatrics/pediatric-surgery",
        "description": "Pediatric surgery]( - Pediatrics clinical information, diagnosis, and management guidelines.",
        "keywords": "surgery, pediatric, pediatrics, hospitalization, pediatric surgery]("
    },
    {
        "title": "Gastrointestinal mucosal disorders](",
        "url": "/specialty/pediatrics/gastrointestinal-mucosal-disorders",
        "description": "Gastrointestinal mucosal disorders]( - Pediatrics clinical information, diagnosis, and management guidelines.",
        "keywords": "gastrointestinal, mucosal, disorders, pediatrics, gastrointestinal mucosal disorders](, hospitalization"
    },
    {
        "title": "Gastroenterology](",
        "url": "/specialty/pediatrics/gastroenterology",
        "description": "Gastroenterology]( - Pediatrics clinical information, diagnosis, and management guidelines.",
        "keywords": "hospitalization, gastroenterology](, gastroenterology, pediatrics"
    },
    {
        "title": "Neurology](",
        "url": "/specialty/pediatrics/neurology",
        "description": "Neurology]( - Pediatrics clinical information, diagnosis, and management guidelines.",
        "keywords": "neurology](, neurology, hospitalization, pediatrics"
    },
    {
        "title": "Cardiology](",
        "url": "/specialty/pediatrics/cardiology",
        "description": "Cardiology]( - Pediatrics clinical information, diagnosis, and management guidelines.",
        "keywords": "hospitalization, cardiology, cardiology](, pediatrics"
    },
    {
        "title": "Patient safety](",
        "url": "/specialty/pediatrics/patient-safety",
        "description": "Patient safety]( - Pediatrics clinical information, diagnosis, and management guidelines.",
        "keywords": "safety, patient safety](, patient, pediatrics, hospitalization"
    },
    {
        "title": "Statistics and research](",
        "url": "/specialty/pediatrics/statistics-and-research",
        "description": "Statistics and research]( - Pediatrics clinical information, diagnosis, and management guidelines.",
        "keywords": "and, research, statistics, pediatrics, hospitalization, statistics and research]("
    },
    {
        "title": "Board simulation](",
        "url": "/specialty/pediatrics/board-simulation",
        "description": "Board simulation]( - Pediatrics clinical information, diagnosis, and management guidelines.",
        "keywords": "board, pediatrics, simulation, hospitalization, board simulation]("
    },
    {
        "title": "Potpurri](",
        "url": "/specialty/pediatrics/potpurri",
        "description": "Potpurri]( - Pediatrics clinical information, diagnosis, and management guidelines.",
        "keywords": "hospitalization, potpurri](, potpurri, pediatrics"
    },
    {
        "title": "Invite me a coffee",
        "url": "/specialty/pediatrics/invite-me-a-coffee",
        "description": "Invite me a coffee - Pediatrics clinical information, diagnosis, and management guidelines.",
        "keywords": "coffee, invite me a coffee, pediatrics, invite"
    },
    {
        "title": "Abnormal Uterine bleeding",
        "url": "/specialty/gynecology/abnormal-uterine-bleeding",
        "description": "Abnormal Uterine bleeding - Gynecology clinical information, diagnosis, and management guidelines.",
        "keywords": "bleeding, abnormal, abnormal uterine bleeding, uterine, outpatient setting, gynecology"
    },
    {
        "title": "Contraception",
        "url": "/specialty/gynecology/contraception",
        "description": "Contraception - Gynecology clinical information, diagnosis, and management guidelines.",
        "keywords": "outpatient setting, gynecology, contraception"
    },
    {
        "title": "Well woman visit",
        "url": "/specialty/gynecology/well-woman-visit",
        "description": "Well woman visit - Gynecology clinical information, diagnosis, and management guidelines.",
        "keywords": "visit, well woman visit, well, woman, outpatient setting, gynecology"
    },
    {
        "title": "Pap Smear Guidelines",
        "url": "/specialty/gynecology/pap-smear-guidelines",
        "description": "Pap Smear Guidelines - Gynecology clinical information, diagnosis, and management guidelines.",
        "keywords": "pap, guidelines, pap smear guidelines, smear, outpatient setting, gynecology"
    },
    {
        "title": "Menopause and osteoporosis",
        "url": "/specialty/gynecology/menopause-and-osteoporosis",
        "description": "Menopause and osteoporosis - Gynecology clinical information, diagnosis, and management guidelines.",
        "keywords": "and, menopause and osteoporosis, menopause, osteoporosis, outpatient setting, gynecology"
    },
    {
        "title": "Amenorrhea",
        "url": "/specialty/gynecology/amenorrhea",
        "description": "Amenorrhea - Gynecology clinical information, diagnosis, and management guidelines.",
        "keywords": "outpatient setting, amenorrhea, gynecology"
    },
    {
        "title": "Urinary incontinence - Evaluation and Treatment",
        "url": "/specialty/gynecology/urinary-incontinence-evaluation-and-treatment",
        "description": "Urinary incontinence - Evaluation and Treatment - Gynecology clinical information, diagnosis, and management guidelines.",
        "keywords": "urinary incontinence - evaluation and treatment, urinary, and, treatment, evaluation, incontinence, outpatient setting, gynecology"
    },
    {
        "title": "Antenatal testing/Fetal surveillance",
        "url": "/specialty/gynecology/antenatal-testingfetal-surveillance",
        "description": "Antenatal testing/Fetal surveillance - Gynecology clinical information, diagnosis, and management guidelines.",
        "keywords": "surveillance, antenatal testing/fetal surveillance, testing, fetal, outpatient setting, gynecology, antenatal"
    },
    {
        "title": "GDM/DM",
        "url": "/specialty/gynecology/gdmdm",
        "description": "GDM/DM - Gynecology clinical information, diagnosis, and management guidelines.",
        "keywords": "outpatient setting, gdm/dm, gdm, gynecology"
    },
    {
        "title": "Uterine Leiomyoma",
        "url": "/specialty/gynecology/uterine-leiomyoma",
        "description": "Uterine Leiomyoma - Gynecology clinical information, diagnosis, and management guidelines.",
        "keywords": "uterine leiomyoma, uterine, leiomyoma, outpatient setting, gynecology"
    },
    {
        "title": "Vulvar disorders",
        "url": "/specialty/gynecology/vulvar-disorders",
        "description": "Vulvar disorders - Gynecology clinical information, diagnosis, and management guidelines.",
        "keywords": "vulvar disorders, vulvar, disorders, outpatient setting, gynecology"
    },
    {
        "title": "Sexual dysfunction",
        "url": "/specialty/gynecology/sexual-dysfunction",
        "description": "Sexual dysfunction - Gynecology clinical information, diagnosis, and management guidelines.",
        "keywords": "dysfunction, sexual dysfunction, outpatient setting, sexual, gynecology"
    },
    {
        "title": "Pediatric adolescent gynecology",
        "url": "/specialty/gynecology/pediatric-adolescent-gynecology",
        "description": "Pediatric adolescent gynecology - Gynecology clinical information, diagnosis, and management guidelines.",
        "keywords": "pediatric, pediatric adolescent gynecology, adolescent, outpatient setting, gynecology"
    },
    {
        "title": "Management of breast problems",
        "url": "/specialty/gynecology/management-of-breast-problems",
        "description": "Management of breast problems - Gynecology clinical information, diagnosis, and management guidelines.",
        "keywords": "problems, management, breast, outpatient setting, gynecology, management of breast problems"
    },
    {
        "title": "Evaluation and treatment of pelvic organ prolapse",
        "url": "/specialty/gynecology/evaluation-and-treatment-of-pelvic-organ-prolapse",
        "description": "Evaluation and treatment of pelvic organ prolapse - Gynecology clinical information, diagnosis, and management guidelines.",
        "keywords": "and, treatment, evaluation and treatment of pelvic organ prolapse, pelvic, evaluation, organ, outpatient setting, gynecology, prolapse"
    },
    {
        "title": "CPP endometriosis",
        "url": "/specialty/gynecology/cpp-endometriosis",
        "description": "CPP endometriosis - Gynecology clinical information, diagnosis, and management guidelines.",
        "keywords": "cpp, cpp endometriosis, endometriosis, outpatient setting, gynecology"
    },
    {
        "title": "Infertility",
        "url": "/specialty/gynecology/infertility",
        "description": "Infertility - Gynecology clinical information, diagnosis, and management guidelines.",
        "keywords": "outpatient setting, infertility, gynecology"
    },
    {
        "title": "Reproductive endocrinology and infertility",
        "url": "/specialty/gynecology/reproductive-endocrinology-and-infertility",
        "description": "Reproductive endocrinology and infertility - Gynecology clinical information, diagnosis, and management guidelines.",
        "keywords": "and, reproductive endocrinology and infertility, reproductive, infertility, endocrinology, outpatient setting, gynecology"
    },
    {
        "title": "Recurrent pregnancy Loss",
        "url": "/specialty/gynecology/recurrent-pregnancy-loss",
        "description": "Recurrent pregnancy Loss - Gynecology clinical information, diagnosis, and management guidelines.",
        "keywords": "recurrent, recurrent pregnancy loss, pregnancy, loss, outpatient setting, gynecology"
    },
    {
        "title": "IUGR",
        "url": "/specialty/gynecology/iugr",
        "description": "IUGR - Gynecology clinical information, diagnosis, and management guidelines.",
        "keywords": "outpatient setting, gynecology, iugr"
    },
    {
        "title": "Breast Cancer screening",
        "url": "/specialty/gynecology/breast-cancer-screening",
        "description": "Breast Cancer screening - Gynecology clinical information, diagnosis, and management guidelines.",
        "keywords": "cancer, breast, breast cancer screening, screening, outpatient setting, gynecology"
    },
    {
        "title": "Complications of laparoscopy and hysteroscopy",
        "url": "/specialty/gynecology/complications-of-laparoscopy-and-hysteroscopy",
        "description": "Complications of laparoscopy and hysteroscopy - Gynecology clinical information, diagnosis, and management guidelines.",
        "keywords": "and, complications, gynecology, complications of laparoscopy and hysteroscopy, hysteroscopy, outpatient setting, laparoscopy"
    },
    {
        "title": "Medical/Surgical Abortion",
        "url": "/specialty/gynecology/medicalsurgical-abortion",
        "description": "Medical/Surgical Abortion - Gynecology clinical information, diagnosis, and management guidelines.",
        "keywords": "abortion, surgical, medical/surgical abortion, medical, outpatient setting, gynecology"
    },
    {
        "title": "Approach to the adnexal mass",
        "url": "/specialty/gynecology/approach-to-the-adnexal-mass",
        "description": "Approach to the adnexal mass - Gynecology clinical information, diagnosis, and management guidelines.",
        "keywords": "mass, approach, the, approach to the adnexal mass, adnexal, outpatient setting, gynecology"
    },
    {
        "title": "Gyn Infectious Disease",
        "url": "/specialty/gynecology/gyn-infectious-disease",
        "description": "Gyn Infectious Disease - Gynecology clinical information, diagnosis, and management guidelines.",
        "keywords": "gyn, disease, gyn infectious disease, outpatient setting, gynecology, infectious"
    },
    {
        "title": "Antiphospholipid syndrome",
        "url": "/specialty/gynecology/antiphospholipid-syndrome",
        "description": "Antiphospholipid syndrome - Gynecology clinical information, diagnosis, and management guidelines.",
        "keywords": "antiphospholipid, antiphospholipid syndrome, syndrome, outpatient setting, gynecology"
    },
    {
        "title": "Alloimmunization",
        "url": "/specialty/gynecology/alloimmunization",
        "description": "Alloimmunization - Gynecology clinical information, diagnosis, and management guidelines.",
        "keywords": "outpatient setting, gynecology, alloimmunization"
    },
    {
        "title": "CV Heme/Coagulopathies",
        "url": "/specialty/gynecology/cv-hemecoagulopathies",
        "description": "CV Heme/Coagulopathies - Gynecology clinical information, diagnosis, and management guidelines.",
        "keywords": "cv heme/coagulopathies, heme, coagulopathies, outpatient setting, gynecology"
    },
    {
        "title": "Genetics: prenatal and cancer",
        "url": "/specialty/gynecology/genetics-prenatal-and-cancer",
        "description": "Genetics: prenatal and cancer - Gynecology clinical information, diagnosis, and management guidelines.",
        "keywords": "and, genetics, cancer, prenatal, genetics: prenatal and cancer, outpatient setting, gynecology"
    },
    {
        "title": "Ovarian cancer",
        "url": "/specialty/gynecology/ovarian-cancer",
        "description": "Ovarian cancer - Gynecology clinical information, diagnosis, and management guidelines.",
        "keywords": "cancer, ovarian cancer, outpatient setting, ovarian, gynecology"
    },
    {
        "title": "Cervix and vulva cancer",
        "url": "/specialty/gynecology/cervix-and-vulva-cancer",
        "description": "Cervix and vulva cancer - Gynecology clinical information, diagnosis, and management guidelines.",
        "keywords": "vulva, cervix, and, cancer, cervix and vulva cancer, outpatient setting, gynecology"
    },
    {
        "title": "Uterine Cancer",
        "url": "/specialty/gynecology/uterine-cancer",
        "description": "Uterine Cancer - Gynecology clinical information, diagnosis, and management guidelines.",
        "keywords": "uterine cancer, cancer, uterine, outpatient setting, gynecology"
    },
    {
        "title": "Gestational Trophoblastic disease",
        "url": "/specialty/gynecology/gestational-trophoblastic-disease",
        "description": "Gestational Trophoblastic disease - Gynecology clinical information, diagnosis, and management guidelines.",
        "keywords": "trophoblastic, disease, gestational, outpatient setting, gynecology, gestational trophoblastic disease"
    },
    {
        "title": "Emergency Room",
        "url": "/specialty/gynecology/emergency-room",
        "description": "Emergency Room - Gynecology clinical information, diagnosis, and management guidelines.",
        "keywords": "room, emergency, emergency room, gynecology"
    },
    {
        "title": "Hemorrhage Antepartum",
        "url": "/specialty/gynecology/hemorrhage-antepartum",
        "description": "Hemorrhage Antepartum - Gynecology clinical information, diagnosis, and management guidelines.",
        "keywords": "hemorrhage, hemorrhage antepartum, antepartum, emergency room, gynecology"
    },
    {
        "title": "Hemorrhage Postpartum",
        "url": "/specialty/gynecology/hemorrhage-postpartum",
        "description": "Hemorrhage Postpartum - Gynecology clinical information, diagnosis, and management guidelines.",
        "keywords": "hemorrhage postpartum, hemorrhage, postpartum, emergency room, gynecology"
    },
    {
        "title": "Preeclampsia and hypertension",
        "url": "/specialty/gynecology/preeclampsia-and-hypertension",
        "description": "Preeclampsia and hypertension - Gynecology clinical information, diagnosis, and management guidelines.",
        "keywords": "and, preeclampsia, preeclampsia and hypertension, hypertension, emergency room, gynecology"
    },
    {
        "title": "Preterm birth",
        "url": "/specialty/gynecology/preterm-birth",
        "description": "Preterm birth - Gynecology clinical information, diagnosis, and management guidelines.",
        "keywords": "birth, preterm, preterm birth, emergency room, gynecology"
    },
    {
        "title": "Obstetric Infectious disease",
        "url": "/specialty/gynecology/obstetric-infectious-disease",
        "description": "Obstetric Infectious disease - Gynecology clinical information, diagnosis, and management guidelines.",
        "keywords": "obstetric, disease, obstetric infectious disease, emergency room, gynecology, infectious"
    },
    {
        "title": "Severe gynecologic emergencies",
        "url": "/specialty/gynecology/severe-gynecologic-emergencies",
        "description": "Severe gynecologic emergencies - Gynecology clinical information, diagnosis, and management guidelines.",
        "keywords": "emergencies, gynecologic, severe, severe gynecologic emergencies, emergency room, gynecology"
    },
    {
        "title": "Acute pelvic pain",
        "url": "/specialty/gynecology/acute-pelvic-pain",
        "description": "Acute pelvic pain - Gynecology clinical information, diagnosis, and management guidelines.",
        "keywords": "pelvic, acute pelvic pain, pain, emergency room, gynecology, acute"
    },
    {
        "title": "Gynecologic infection emergencies",
        "url": "/specialty/gynecology/gynecologic-infection-emergencies",
        "description": "Gynecologic infection emergencies - Gynecology clinical information, diagnosis, and management guidelines.",
        "keywords": "emergencies, gynecologic, infection, emergency room, gynecologic infection emergencies, gynecology"
    },
    {
        "title": "Hospitalization",
        "url": "/specialty/gynecology/hospitalization",
        "description": "Hospitalization - Gynecology clinical information, diagnosis, and management guidelines.",
        "keywords": "hospitalization, gynecology"
    },
    {
        "title": "Prevention of C-section/How to Do a cesarean section",
        "url": "/specialty/gynecology/prevention-of-csectionhow-to-do-a-cesarean-section",
        "description": "Prevention of C-section/How to Do a cesarean section - Gynecology clinical information, diagnosis, and management guidelines.",
        "keywords": "prevention, prevention of c-section/how to do a cesarean section, cesarean, hospitalization, section, gynecology, how"
    },
    {
        "title": "Operative obstetrics",
        "url": "/specialty/gynecology/operative-obstetrics",
        "description": "Operative obstetrics - Gynecology clinical information, diagnosis, and management guidelines.",
        "keywords": "operative obstetrics, hospitalization, operative, obstetrics, gynecology"
    },
    {
        "title": "Vaginal Birth After C-section/Postdates/Induction Of Labor",
        "url": "/specialty/gynecology/vaginal-birth-after-csectionpostdatesinduction-of-labor",
        "description": "Vaginal Birth After C-section/Postdates/Induction Of Labor - Gynecology clinical information, diagnosis, and management guidelines.",
        "keywords": "after, labor, birth, induction, postdates, vaginal birth after c-section/postdates/induction of labor, vaginal, hospitalization, section, gynecology"
    },
    {
        "title": "Severe obstetric complications",
        "url": "/specialty/gynecology/severe-obstetric-complications",
        "description": "Severe obstetric complications - Gynecology clinical information, diagnosis, and management guidelines.",
        "keywords": "severe obstetric complications, complications, severe, obstetric, hospitalization, gynecology"
    },
    {
        "title": "Complex gynecologic surgery",
        "url": "/specialty/gynecology/complex-gynecologic-surgery",
        "description": "Complex gynecologic surgery - Gynecology clinical information, diagnosis, and management guidelines.",
        "keywords": "surgery, complex gynecologic surgery, gynecologic, complex, hospitalization, gynecology"
    },
    {
        "title": "High-risk pregnancy management",
        "url": "/specialty/gynecology/highrisk-pregnancy-management",
        "description": "High-risk pregnancy management - Gynecology clinical information, diagnosis, and management guidelines.",
        "keywords": "risk, high-risk pregnancy management, management, pregnancy, hospitalization, high, gynecology"
    },
    {
        "title": "Gynecologic cancer surgery",
        "url": "/specialty/gynecology/gynecologic-cancer-surgery",
        "description": "Gynecologic cancer surgery - Gynecology clinical information, diagnosis, and management guidelines.",
        "keywords": "surgery, gynecologic, gynecologic cancer surgery, hospitalization, cancer, gynecology"
    },
    {
        "title": "Complex obstetric procedures",
        "url": "/specialty/gynecology/complex-obstetric-procedures",
        "description": "Complex obstetric procedures - Gynecology clinical information, diagnosis, and management guidelines.",
        "keywords": "complex obstetric procedures, obstetric, procedures, complex, hospitalization, gynecology"
    },
    {
        "title": "Postoperative complications",
        "url": "/specialty/gynecology/postoperative-complications",
        "description": "Postoperative complications - Gynecology clinical information, diagnosis, and management guidelines.",
        "keywords": "complications, postoperative complications, postoperative, hospitalization, gynecology"
    },
    {
        "title": "Complex reproductive procedures",
        "url": "/specialty/gynecology/complex-reproductive-procedures",
        "description": "Complex reproductive procedures - Gynecology clinical information, diagnosis, and management guidelines.",
        "keywords": "reproductive, procedures, complex reproductive procedures, complex, hospitalization, gynecology"
    },
    {
        "title": "Invite me a coffee",
        "url": "/specialty/gynecology/invite-me-a-coffee",
        "description": "Invite me a coffee - Gynecology clinical information, diagnosis, and management guidelines.",
        "keywords": "coffee, invite me a coffee, gynecology, invite"
    },
    {
        "title": "Chronic Kidney disease",
        "url": "/specialty/nephrology/chronic-kidney-disease",
        "description": "Chronic Kidney disease - Nephrology clinical information, diagnosis, and management guidelines.",
        "keywords": "chronic, nephrology, chronic kidney disease, disease, kidney, outpatient setting"
    },
    {
        "title": "Management of CKD-intensive or standard regimes",
        "url": "/specialty/nephrology/management-of-ckdintensive-or-standard-regimes",
        "description": "Management of CKD-intensive or standard regimes - Nephrology clinical information, diagnosis, and management guidelines.",
        "keywords": "standard, management of ckd-intensive or standard regimes, nephrology, management, intensive, regimes, ckd, outpatient setting"
    },
    {
        "title": "Diabetic kidney disease",
        "url": "/specialty/nephrology/diabetic-kidney-disease",
        "description": "Diabetic kidney disease - Nephrology clinical information, diagnosis, and management guidelines.",
        "keywords": "nephrology, diabetic, diabetic kidney disease, disease, kidney, outpatient setting"
    },
    {
        "title": "Urinary sediment",
        "url": "/specialty/nephrology/urinary-sediment",
        "description": "Urinary sediment - Nephrology clinical information, diagnosis, and management guidelines.",
        "keywords": "urinary, nephrology, sediment, outpatient setting, urinary sediment"
    },
    {
        "title": "Kidney stones",
        "url": "/specialty/nephrology/kidney-stones",
        "description": "Kidney stones - Nephrology clinical information, diagnosis, and management guidelines.",
        "keywords": "nephrology, kidney stones, stones, kidney, outpatient setting"
    },
    {
        "title": "Dialysis dosing",
        "url": "/specialty/nephrology/dialysis-dosing",
        "description": "Dialysis dosing - Nephrology clinical information, diagnosis, and management guidelines.",
        "keywords": "nephrology, dialysis dosing, dialysis, outpatient setting, dosing"
    },
    {
        "title": "Peritoneal dialysis",
        "url": "/specialty/nephrology/peritoneal-dialysis",
        "description": "Peritoneal dialysis - Nephrology clinical information, diagnosis, and management guidelines.",
        "keywords": "nephrology, peritoneal dialysis, peritoneal, dialysis, outpatient setting"
    },
    {
        "title": "Anemia management",
        "url": "/specialty/nephrology/anemia-management",
        "description": "Anemia management - Nephrology clinical information, diagnosis, and management guidelines.",
        "keywords": "nephrology, anemia, management, outpatient setting, anemia management"
    },
    {
        "title": "Sodium disorders",
        "url": "/specialty/nephrology/sodium-disorders",
        "description": "Sodium disorders - Nephrology clinical information, diagnosis, and management guidelines.",
        "keywords": "sodium disorders, nephrology, sodium, disorders, outpatient setting"
    },
    {
        "title": "Potassium disorders",
        "url": "/specialty/nephrology/potassium-disorders",
        "description": "Potassium disorders - Nephrology clinical information, diagnosis, and management guidelines.",
        "keywords": "nephrology, potassium, potassium disorders, disorders, outpatient setting"
    },
    {
        "title": "Acid base disorders",
        "url": "/specialty/nephrology/acid-base-disorders",
        "description": "Acid base disorders - Nephrology clinical information, diagnosis, and management guidelines.",
        "keywords": "nephrology, acid base disorders, acid, disorders, outpatient setting, base"
    },
    {
        "title": "Chronic Kidney disease - Mineral and bone disease",
        "url": "/specialty/nephrology/chronic-kidney-disease-mineral-and-bone-disease",
        "description": "Chronic Kidney disease - Mineral and bone disease - Nephrology clinical information, diagnosis, and management guidelines.",
        "keywords": "and, chronic, chronic kidney disease - mineral and bone disease, nephrology, mineral, disease, kidney, bone, outpatient setting"
    },
    {
        "title": "Ultrasound in nephrology",
        "url": "/specialty/nephrology/ultrasound-in-nephrology",
        "description": "Ultrasound in nephrology - Nephrology clinical information, diagnosis, and management guidelines.",
        "keywords": "ultrasound in nephrology, outpatient setting, ultrasound, nephrology"
    },
    {
        "title": "IgA nephropathy",
        "url": "/specialty/nephrology/iga-nephropathy",
        "description": "IgA nephropathy - Nephrology clinical information, diagnosis, and management guidelines.",
        "keywords": "iga nephropathy, nephrology, iga, nephropathy, outpatient setting"
    },
    {
        "title": "Membranous nephropathy",
        "url": "/specialty/nephrology/membranous-nephropathy",
        "description": "Membranous nephropathy - Nephrology clinical information, diagnosis, and management guidelines.",
        "keywords": "nephrology, membranous nephropathy, nephropathy, membranous, outpatient setting"
    },
    {
        "title": "Glomerulonephritis",
        "url": "/specialty/nephrology/glomerulonephritis",
        "description": "Glomerulonephritis - Nephrology clinical information, diagnosis, and management guidelines.",
        "keywords": "glomerulonephritis, outpatient setting, nephrology"
    },
    {
        "title": "Polycystic kidney disease",
        "url": "/specialty/nephrology/polycystic-kidney-disease",
        "description": "Polycystic kidney disease - Nephrology clinical information, diagnosis, and management guidelines.",
        "keywords": "polycystic kidney disease, nephrology, polycystic, disease, kidney, outpatient setting"
    },
    {
        "title": "Primary aldosteronism",
        "url": "/specialty/nephrology/primary-aldosteronism",
        "description": "Primary aldosteronism - Nephrology clinical information, diagnosis, and management guidelines.",
        "keywords": "aldosteronism, primary, nephrology, primary aldosteronism, outpatient setting"
    },
    {
        "title": "Renovascular disease",
        "url": "/specialty/nephrology/renovascular-disease",
        "description": "Renovascular disease - Nephrology clinical information, diagnosis, and management guidelines.",
        "keywords": "nephrology, renovascular, disease, renovascular disease, outpatient setting"
    },
    {
        "title": "Transplant",
        "url": "/specialty/nephrology/transplant",
        "description": "Transplant - Nephrology clinical information, diagnosis, and management guidelines.",
        "keywords": "transplant, outpatient setting, nephrology"
    },
    {
        "title": "Monitoring kidney transplant patients",
        "url": "/specialty/nephrology/monitoring-kidney-transplant-patients",
        "description": "Monitoring kidney transplant patients - Nephrology clinical information, diagnosis, and management guidelines.",
        "keywords": "monitoring kidney transplant patients, monitoring, nephrology, transplant, kidney, patients, outpatient setting"
    },
    {
        "title": "Nephropathology",
        "url": "/specialty/nephrology/nephropathology",
        "description": "Nephropathology - Nephrology clinical information, diagnosis, and management guidelines.",
        "keywords": "nephrology, outpatient setting, nephropathology"
    },
    {
        "title": "Pediatric Nephrology",
        "url": "/specialty/nephrology/pediatric-nephrology",
        "description": "Pediatric Nephrology - Nephrology clinical information, diagnosis, and management guidelines.",
        "keywords": "pediatric, nephrology, outpatient setting, pediatric nephrology"
    },
    {
        "title": "Genetics",
        "url": "/specialty/nephrology/genetics",
        "description": "Genetics - Nephrology clinical information, diagnosis, and management guidelines.",
        "keywords": "genetics, outpatient setting, nephrology"
    },
    {
        "title": "Geriatric nephrology",
        "url": "/specialty/nephrology/geriatric-nephrology",
        "description": "Geriatric nephrology - Nephrology clinical information, diagnosis, and management guidelines.",
        "keywords": "geriatric nephrology, geriatric, outpatient setting, nephrology"
    },
    {
        "title": "Interstitial Nephritis",
        "url": "/specialty/nephrology/interstitial-nephritis",
        "description": "Interstitial Nephritis - Nephrology clinical information, diagnosis, and management guidelines.",
        "keywords": "interstitial, nephrology, interstitial nephritis, outpatient setting, nephritis"
    },
    {
        "title": "Dysproteinemia",
        "url": "/specialty/nephrology/dysproteinemia",
        "description": "Dysproteinemia - Nephrology clinical information, diagnosis, and management guidelines.",
        "keywords": "nephrology, outpatient setting, dysproteinemia"
    },
    {
        "title": "Liver and the kidney",
        "url": "/specialty/nephrology/liver-and-the-kidney",
        "description": "Liver and the kidney - Nephrology clinical information, diagnosis, and management guidelines.",
        "keywords": "liver and the kidney, and, nephrology, the, kidney, liver, outpatient setting"
    },
    {
        "title": "Lupus Nephritis",
        "url": "/specialty/nephrology/lupus-nephritis",
        "description": "Lupus Nephritis - Nephrology clinical information, diagnosis, and management guidelines.",
        "keywords": "nephrology, outpatient setting, lupus, nephritis, lupus nephritis"
    },
    {
        "title": "Vasculitis and ANCA",
        "url": "/specialty/nephrology/vasculitis-and-anca",
        "description": "Vasculitis and ANCA - Nephrology clinical information, diagnosis, and management guidelines.",
        "keywords": "and, vasculitis, nephrology, vasculitis and anca, anca, outpatient setting"
    },
    {
        "title": "Rejection and early post Transplant management",
        "url": "/specialty/nephrology/rejection-and-early-post-transplant-management",
        "description": "Rejection and early post Transplant management - Nephrology clinical information, diagnosis, and management guidelines.",
        "keywords": "and, nephrology, rejection and early post transplant management, early, management, rejection, transplant, post, outpatient setting"
    },
    {
        "title": "Late loss of kidney transplant",
        "url": "/specialty/nephrology/late-loss-of-kidney-transplant",
        "description": "Late loss of kidney transplant - Nephrology clinical information, diagnosis, and management guidelines.",
        "keywords": "nephrology, late, transplant, kidney, late loss of kidney transplant, outpatient setting, loss"
    },
    {
        "title": "Infections in transplant recipients",
        "url": "/specialty/nephrology/infections-in-transplant-recipients",
        "description": "Infections in transplant recipients - Nephrology clinical information, diagnosis, and management guidelines.",
        "keywords": "infections, nephrology, recipients, transplant, infections in transplant recipients, outpatient setting"
    },
    {
        "title": "Emergency Room",
        "url": "/specialty/nephrology/emergency-room",
        "description": "Emergency Room - Nephrology clinical information, diagnosis, and management guidelines.",
        "keywords": "emergency, emergency room, room, nephrology"
    },
    {
        "title": "Acute kidney injury",
        "url": "/specialty/nephrology/acute-kidney-injury",
        "description": "Acute kidney injury - Nephrology clinical information, diagnosis, and management guidelines.",
        "keywords": "nephrology, acute kidney injury, injury, kidney, emergency room, acute"
    },
    {
        "title": "Hemolytic Uremic syndrome and Thrombotic thrombocytopenic purpura",
        "url": "/specialty/nephrology/hemolytic-uremic-syndrome-and-thrombotic-thrombocytopenic-purpura",
        "description": "Hemolytic Uremic syndrome and Thrombotic thrombocytopenic purpura - Nephrology clinical information, diagnosis, and management guidelines.",
        "keywords": "and, nephrology, thrombotic, thrombocytopenic, hemolytic uremic syndrome and thrombotic thrombocytopenic purpura, uremic, purpura, syndrome, emergency room, hemolytic"
    },
    {
        "title": "Severe electrolyte disorders",
        "url": "/specialty/nephrology/severe-electrolyte-disorders",
        "description": "Severe electrolyte disorders - Nephrology clinical information, diagnosis, and management guidelines.",
        "keywords": "nephrology, severe, electrolyte, disorders, severe electrolyte disorders, emergency room"
    },
    {
        "title": "Cardiorenal Syndrome",
        "url": "/specialty/nephrology/cardiorenal-syndrome",
        "description": "Cardiorenal Syndrome - Nephrology clinical information, diagnosis, and management guidelines.",
        "keywords": "cardiorenal, nephrology, cardiorenal syndrome, syndrome, emergency room"
    },
    {
        "title": "Acute glomerulonephritis",
        "url": "/specialty/nephrology/acute-glomerulonephritis",
        "description": "Acute glomerulonephritis - Nephrology clinical information, diagnosis, and management guidelines.",
        "keywords": "glomerulonephritis, nephrology, acute glomerulonephritis, emergency room, acute"
    },
    {
        "title": "Poisoning and intoxications",
        "url": "/specialty/nephrology/poisoning-and-intoxications",
        "description": "Poisoning and intoxications - Nephrology clinical information, diagnosis, and management guidelines.",
        "keywords": "intoxications, and, nephrology, poisoning, poisoning and intoxications, emergency room"
    },
    {
        "title": "Severe acute nephritis",
        "url": "/specialty/nephrology/severe-acute-nephritis",
        "description": "Severe acute nephritis - Nephrology clinical information, diagnosis, and management guidelines.",
        "keywords": "nephrology, severe, severe acute nephritis, emergency room, nephritis, acute"
    },
    {
        "title": "Acute transplant complications",
        "url": "/specialty/nephrology/acute-transplant-complications",
        "description": "Acute transplant complications - Nephrology clinical information, diagnosis, and management guidelines.",
        "keywords": "complications, nephrology, acute transplant complications, transplant, emergency room, acute"
    },
    {
        "title": "Severe acid-base emergencies",
        "url": "/specialty/nephrology/severe-acidbase-emergencies",
        "description": "Severe acid-base emergencies - Nephrology clinical information, diagnosis, and management guidelines.",
        "keywords": "severe acid-base emergencies, emergencies, nephrology, severe, acid, emergency room, base"
    },
    {
        "title": "Hospitalization",
        "url": "/specialty/nephrology/hospitalization",
        "description": "Hospitalization - Nephrology clinical information, diagnosis, and management guidelines.",
        "keywords": "hospitalization, nephrology"
    },
    {
        "title": "ICU and continuous renal replacement",
        "url": "/specialty/nephrology/icu-and-continuous-renal-replacement",
        "description": "ICU and continuous renal replacement - Nephrology clinical information, diagnosis, and management guidelines.",
        "keywords": "icu, and, icu and continuous renal replacement, nephrology, continuous, replacement, renal, hospitalization"
    },
    {
        "title": "Severe acute kidney injury",
        "url": "/specialty/nephrology/severe-acute-kidney-injury",
        "description": "Severe acute kidney injury - Nephrology clinical information, diagnosis, and management guidelines.",
        "keywords": "nephrology, severe, severe acute kidney injury, injury, kidney, hospitalization, acute"
    },
    {
        "title": "Complex transplant management",
        "url": "/specialty/nephrology/complex-transplant-management",
        "description": "Complex transplant management - Nephrology clinical information, diagnosis, and management guidelines.",
        "keywords": "nephrology, management, complex transplant management, transplant, complex, hospitalization"
    },
    {
        "title": "Severe glomerulonephritis",
        "url": "/specialty/nephrology/severe-glomerulonephritis",
        "description": "Severe glomerulonephritis - Nephrology clinical information, diagnosis, and management guidelines.",
        "keywords": "glomerulonephritis, nephrology, severe, severe glomerulonephritis, hospitalization"
    },
    {
        "title": "Complex dialysis management",
        "url": "/specialty/nephrology/complex-dialysis-management",
        "description": "Complex dialysis management - Nephrology clinical information, diagnosis, and management guidelines.",
        "keywords": "nephrology, management, complex, complex dialysis management, hospitalization, dialysis"
    },
    {
        "title": "Severe electrolyte imbalances",
        "url": "/specialty/nephrology/severe-electrolyte-imbalances",
        "description": "Severe electrolyte imbalances - Nephrology clinical information, diagnosis, and management guidelines.",
        "keywords": "imbalances, nephrology, severe, electrolyte, severe electrolyte imbalances, hospitalization"
    },
    {
        "title": "Transplant rejection crisis",
        "url": "/specialty/nephrology/transplant-rejection-crisis",
        "description": "Transplant rejection crisis - Nephrology clinical information, diagnosis, and management guidelines.",
        "keywords": "nephrology, rejection, transplant, transplant rejection crisis, hospitalization, crisis"
    },
    {
        "title": "Complex nephrology procedures",
        "url": "/specialty/nephrology/complex-nephrology-procedures",
        "description": "Complex nephrology procedures - Nephrology clinical information, diagnosis, and management guidelines.",
        "keywords": "nephrology, procedures, complex, hospitalization, complex nephrology procedures"
    },
    {
        "title": "Complex acid-base disorders",
        "url": "/specialty/nephrology/complex-acidbase-disorders",
        "description": "Complex acid-base disorders - Nephrology clinical information, diagnosis, and management guidelines.",
        "keywords": "nephrology, base, acid, complex, disorders, hospitalization, complex acid-base disorders"
    },
    {
        "title": "Severe CKD complications",
        "url": "/specialty/nephrology/severe-ckd-complications",
        "description": "Severe CKD complications - Nephrology clinical information, diagnosis, and management guidelines.",
        "keywords": "complications, nephrology, severe, hospitalization, ckd, severe ckd complications"
    },
    {
        "title": "Invite me a coffee",
        "url": "/specialty/nephrology/invite-me-a-coffee",
        "description": "Invite me a coffee - Nephrology clinical information, diagnosis, and management guidelines.",
        "keywords": "coffee, invite me a coffee, invite, nephrology"
    },
    {
        "title": "Anemia",
        "url": "/specialty/hematology/anemia",
        "description": "Anemia - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "hematology, outpatient setting, anemia"
    },
    {
        "title": "Iron deficiency and iron overload",
        "url": "/specialty/hematology/iron-deficiency-and-iron-overload",
        "description": "Iron deficiency and iron overload - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "overload, and, hematology, iron, deficiency, outpatient setting, iron deficiency and iron overload"
    },
    {
        "title": "Transfusion medicine",
        "url": "/specialty/hematology/transfusion-medicine",
        "description": "Transfusion medicine - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "transfusion, hematology, medicine, transfusion medicine, outpatient setting"
    },
    {
        "title": "Breast cancer",
        "url": "/specialty/hematology/breast-cancer",
        "description": "Breast cancer - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "hematology, cancer, breast, breast cancer, outpatient setting"
    },
    {
        "title": "Colorectal cancers",
        "url": "/specialty/hematology/colorectal-cancers",
        "description": "Colorectal cancers - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "cancers, hematology, colorectal cancers, colorectal, outpatient setting"
    },
    {
        "title": "Prostate cancer",
        "url": "/specialty/hematology/prostate-cancer",
        "description": "Prostate cancer - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "hematology, cancer, prostate cancer, prostate, outpatient setting"
    },
    {
        "title": "Hematopoiesis and cytokines",
        "url": "/specialty/hematology/hematopoiesis-and-cytokines",
        "description": "Hematopoiesis and cytokines - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "hematopoiesis, and, hematology, hematopoiesis and cytokines, cytokines, outpatient setting"
    },
    {
        "title": "Disorders of neutrophils",
        "url": "/specialty/hematology/disorders-of-neutrophils",
        "description": "Disorders of neutrophils - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "hematology, neutrophils, disorders, disorders of neutrophils, outpatient setting"
    },
    {
        "title": "Acquired thrombocytopenias",
        "url": "/specialty/hematology/acquired-thrombocytopenias",
        "description": "Acquired thrombocytopenias - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "acquired thrombocytopenias, hematology, acquired, thrombocytopenias, outpatient setting"
    },
    {
        "title": "Uses of direct oral anticoagulants",
        "url": "/specialty/hematology/uses-of-direct-oral-anticoagulants",
        "description": "Uses of direct oral anticoagulants - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "uses, direct, hematology, uses of direct oral anticoagulants, anticoagulants, outpatient setting, oral"
    },
    {
        "title": "Thyroid cancer",
        "url": "/specialty/hematology/thyroid-cancer",
        "description": "Thyroid cancer - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "thyroid cancer, hematology, cancer, thyroid, outpatient setting"
    },
    {
        "title": "Sickle cell disease",
        "url": "/specialty/hematology/sickle-cell-disease",
        "description": "Sickle cell disease - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "sickle, hematology, sickle cell disease, disease, cell, outpatient setting"
    },
    {
        "title": "Thalassemia and other hemoglobinopathies",
        "url": "/specialty/hematology/thalassemia-and-other-hemoglobinopathies",
        "description": "Thalassemia and other hemoglobinopathies - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "thalassemia, and, thalassemia and other hemoglobinopathies, hematology, hemoglobinopathies, other, outpatient setting"
    },
    {
        "title": "Hemophilia",
        "url": "/specialty/hematology/hemophilia",
        "description": "Hemophilia - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "hemophilia, hematology, outpatient setting"
    },
    {
        "title": "Von willebrand disease and congenital platelet disorders",
        "url": "/specialty/hematology/von-willebrand-disease-and-congenital-platelet-disorders",
        "description": "Von willebrand disease and congenital platelet disorders - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "and, von willebrand disease and congenital platelet disorders, hematology, congenital, willebrand, disease, disorders, platelet, outpatient setting, von"
    },
    {
        "title": "Congenital and Acquired thrombophilia",
        "url": "/specialty/hematology/congenital-and-acquired-thrombophilia",
        "description": "Congenital and Acquired thrombophilia - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "and, hematology, acquired, thrombophilia, congenital and acquired thrombophilia, congenital, outpatient setting"
    },
    {
        "title": "Low grade lymphomas",
        "url": "/specialty/hematology/low-grade-lymphomas",
        "description": "Low grade lymphomas - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "grade, hematology, low, lymphomas, low grade lymphomas, outpatient setting"
    },
    {
        "title": "Diagnosis and treatment of CLL and related B cell malignancies",
        "url": "/specialty/hematology/diagnosis-and-treatment-of-cll-and-related-b-cell-malignancies",
        "description": "Diagnosis and treatment of CLL and related B cell malignancies - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "related, and, treatment, malignancies, hematology, cll, diagnosis, diagnosis and treatment of cll and related b cell malignancies, cell, outpatient setting"
    },
    {
        "title": "Multiple Myeloma",
        "url": "/specialty/hematology/multiple-myeloma",
        "description": "Multiple Myeloma - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "hematology, multiple, multiple myeloma, myeloma, outpatient setting"
    },
    {
        "title": "Non small cell lung cancer",
        "url": "/specialty/hematology/non-small-cell-lung-cancer",
        "description": "Non small cell lung cancer - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "non small cell lung cancer, lung, hematology, cancer, small, cell, non, outpatient setting"
    },
    {
        "title": "Renal and bladder cancer",
        "url": "/specialty/hematology/renal-and-bladder-cancer",
        "description": "Renal and bladder cancer - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "and, renal and bladder cancer, hematology, renal, cancer, bladder, outpatient setting"
    },
    {
        "title": "Ovarian cancer",
        "url": "/specialty/hematology/ovarian-cancer",
        "description": "Ovarian cancer - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "hematology, cancer, ovarian cancer, outpatient setting, ovarian"
    },
    {
        "title": "Molecular genetics of cancer",
        "url": "/specialty/hematology/molecular-genetics-of-cancer",
        "description": "Molecular genetics of cancer - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "hematology, genetics, molecular, cancer, molecular genetics of cancer, outpatient setting"
    },
    {
        "title": "Breast cancer survivorship",
        "url": "/specialty/hematology/breast-cancer-survivorship",
        "description": "Breast cancer survivorship - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "breast cancer survivorship, hematology, cancer, survivorship, breast, outpatient setting"
    },
    {
        "title": "Congenital bone marrow failure",
        "url": "/specialty/hematology/congenital-bone-marrow-failure",
        "description": "Congenital bone marrow failure - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "marrow, hematology, failure, congenital, congenital bone marrow failure, bone, outpatient setting"
    },
    {
        "title": "Immune hemolytic anemia",
        "url": "/specialty/hematology/immune-hemolytic-anemia",
        "description": "Immune hemolytic anemia - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "hematology, anemia, immune hemolytic anemia, immune, outpatient setting, hemolytic"
    },
    {
        "title": "Non-immune hemolytic anemia",
        "url": "/specialty/hematology/nonimmune-hemolytic-anemia",
        "description": "Non-immune hemolytic anemia - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "immune, hematology, anemia, non-immune hemolytic anemia, non, outpatient setting, hemolytic"
    },
    {
        "title": "Waldenstrom macroglobulemia and amyloidosis",
        "url": "/specialty/hematology/waldenstrom-macroglobulemia-and-amyloidosis",
        "description": "Waldenstrom macroglobulemia and amyloidosis - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "macroglobulemia, and, waldenstrom, waldenstrom macroglobulemia and amyloidosis, hematology, amyloidosis, outpatient setting"
    },
    {
        "title": "Head and neck cancer",
        "url": "/specialty/hematology/head-and-neck-cancer",
        "description": "Head and neck cancer - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "and, hematology, neck, cancer, head, head and neck cancer, outpatient setting"
    },
    {
        "title": "Carcinoid and pancreatic neuroendocrine tumors",
        "url": "/specialty/hematology/carcinoid-and-pancreatic-neuroendocrine-tumors",
        "description": "Carcinoid and pancreatic neuroendocrine tumors - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "tumors, and, hematology, carcinoid and pancreatic neuroendocrine tumors, neuroendocrine, pancreatic, carcinoid, outpatient setting"
    },
    {
        "title": "Anal cancers",
        "url": "/specialty/hematology/anal-cancers",
        "description": "Anal cancers - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "cancers, hematology, anal cancers, outpatient setting, anal"
    },
    {
        "title": "Gastrointestinal cancer: genetic syndromes",
        "url": "/specialty/hematology/gastrointestinal-cancer-genetic-syndromes",
        "description": "Gastrointestinal cancer: genetic syndromes - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "syndromes, gastrointestinal, hematology, genetic, outpatient setting, cancer, gastrointestinal cancer: genetic syndromes"
    },
    {
        "title": "Germ cell tumor",
        "url": "/specialty/hematology/germ-cell-tumor",
        "description": "Germ cell tumor - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "germ cell tumor, germ, hematology, cell, outpatient setting, tumor"
    },
    {
        "title": "Cervical and endometrial cancer",
        "url": "/specialty/hematology/cervical-and-endometrial-cancer",
        "description": "Cervical and endometrial cancer - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "and, cervical, endometrial, hematology, cancer, cervical and endometrial cancer, outpatient setting"
    },
    {
        "title": "Melanoma",
        "url": "/specialty/hematology/melanoma",
        "description": "Melanoma - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "hematology, melanoma, outpatient setting"
    },
    {
        "title": "Myeloproliferative syndromes",
        "url": "/specialty/hematology/myeloproliferative-syndromes",
        "description": "Myeloproliferative syndromes - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "syndromes, hematology, myeloproliferative syndromes, outpatient setting, myeloproliferative"
    },
    {
        "title": "Chronic myelogenous leukemia",
        "url": "/specialty/hematology/chronic-myelogenous-leukemia",
        "description": "Chronic myelogenous leukemia - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "chronic, hematology, leukemia, chronic myelogenous leukemia, myelogenous, outpatient setting"
    },
    {
        "title": "Hodking's lymphoma",
        "url": "/specialty/hematology/hodkings-lymphoma",
        "description": "Hodking's lymphoma - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "hodking, hematology, lymphoma, hodking's lymphoma, outpatient setting"
    },
    {
        "title": "Natural history, screening, surgery and small cell lung cancer",
        "url": "/specialty/hematology/natural-history-screening-surgery-and-small-cell-lung-cancer",
        "description": "Natural history, screening, surgery and small cell lung cancer - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "history, surgery, and, lung, hematology, cancer, natural, screening, small, cell, natural history, screening, surgery and small cell lung cancer, outpatient setting"
    },
    {
        "title": "Mesothelioma and thymoma",
        "url": "/specialty/hematology/mesothelioma-and-thymoma",
        "description": "Mesothelioma and thymoma - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "mesothelioma, and, hematology, thymoma, mesothelioma and thymoma, outpatient setting"
    },
    {
        "title": "Esophageal and gastric cancer",
        "url": "/specialty/hematology/esophageal-and-gastric-cancer",
        "description": "Esophageal and gastric cancer - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "and, hematology, esophageal, cancer, gastric, esophageal and gastric cancer, outpatient setting"
    },
    {
        "title": "Pancreatic and hepatobiliary cancer",
        "url": "/specialty/hematology/pancreatic-and-hepatobiliary-cancer",
        "description": "Pancreatic and hepatobiliary cancer - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "and, hematology, hepatobiliary, pancreatic and hepatobiliary cancer, cancer, pancreatic, outpatient setting"
    },
    {
        "title": "Sarcomas and gastrointestinal stromal tumors",
        "url": "/specialty/hematology/sarcomas-and-gastrointestinal-stromal-tumors",
        "description": "Sarcomas and gastrointestinal stromal tumors - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "stromal, tumors, and, gastrointestinal, hematology, sarcomas and gastrointestinal stromal tumors, sarcomas, outpatient setting"
    },
    {
        "title": "Neuro-oncology",
        "url": "/specialty/hematology/neurooncology",
        "description": "Neuro-oncology - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "oncology, neuro, hematology, neuro-oncology, outpatient setting"
    },
    {
        "title": "Emergency Room",
        "url": "/specialty/hematology/emergency-room",
        "description": "Emergency Room - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "hematology, emergency, emergency room, room"
    },
    {
        "title": "Acute leukemias",
        "url": "/specialty/hematology/acute-leukemias",
        "description": "Acute leukemias - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "acute leukemias, hematology, leukemias, emergency room, acute"
    },
    {
        "title": "High grade lymphomas",
        "url": "/specialty/hematology/high-grade-lymphomas",
        "description": "High grade lymphomas - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "grade, high grade lymphomas, hematology, lymphomas, emergency room, high"
    },
    {
        "title": "Infections in cancer patients",
        "url": "/specialty/hematology/infections-in-cancer-patients",
        "description": "Infections in cancer patients - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "infections in cancer patients, infections, hematology, patients, emergency room, cancer"
    },
    {
        "title": "Acquired bone marrow failure",
        "url": "/specialty/hematology/acquired-bone-marrow-failure",
        "description": "Acquired bone marrow failure - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "acquired bone marrow failure, marrow, hematology, acquired, bone, failure, emergency room"
    },
    {
        "title": "Hemophagocytic syndromes and related immunodeficiencies",
        "url": "/specialty/hematology/hemophagocytic-syndromes-and-related-immunodeficiencies",
        "description": "Hemophagocytic syndromes and related immunodeficiencies - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "syndromes, and, related, hemophagocytic, hematology, immunodeficiencies, emergency room, hemophagocytic syndromes and related immunodeficiencies"
    },
    {
        "title": "Severe anemia complications",
        "url": "/specialty/hematology/severe-anemia-complications",
        "description": "Severe anemia complications - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "complications, hematology, severe, severe anemia complications, anemia, emergency room"
    },
    {
        "title": "Bleeding emergencies",
        "url": "/specialty/hematology/bleeding-emergencies",
        "description": "Bleeding emergencies - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "bleeding, emergencies, hematology, bleeding emergencies, emergency room"
    },
    {
        "title": "myelodysplastic syndrome (acute complications)",
        "url": "/specialty/hematology/myelodysplastic-syndrome-acute-complications",
        "description": "myelodysplastic syndrome (acute complications) - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "complications, hematology, myelodysplastic syndrome (acute complications), myelodysplastic, syndrome, emergency room, acute"
    },
    {
        "title": "Severe sickle cell crisis",
        "url": "/specialty/hematology/severe-sickle-cell-crisis",
        "description": "Severe sickle cell crisis - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "sickle, hematology, severe, severe sickle cell crisis, crisis, cell, emergency room"
    },
    {
        "title": "Transfusion reactions",
        "url": "/specialty/hematology/transfusion-reactions",
        "description": "Transfusion reactions - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "hematology, reactions, emergency room, transfusion, transfusion reactions"
    },
    {
        "title": "Cancer-related emergencies",
        "url": "/specialty/hematology/cancerrelated-emergencies",
        "description": "Cancer-related emergencies - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "cancer-related emergencies, related, emergencies, hematology, emergency room, cancer"
    },
    {
        "title": "Hospitalization",
        "url": "/specialty/hematology/hospitalization",
        "description": "Hospitalization - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "hospitalization, hematology"
    },
    {
        "title": "Biology of acute leukemia and myelodysplastic syndromes",
        "url": "/specialty/hematology/biology-of-acute-leukemia-and-myelodysplastic-syndromes",
        "description": "Biology of acute leukemia and myelodysplastic syndromes - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "syndromes, and, biology of acute leukemia and myelodysplastic syndromes, biology, hematology, leukemia, myelodysplastic, hospitalization, acute"
    },
    {
        "title": "Biology of hematopoietic stem cell transplantation",
        "url": "/specialty/hematology/biology-of-hematopoietic-stem-cell-transplantation",
        "description": "Biology of hematopoietic stem cell transplantation - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "biology, hematology, transplantation, biology of hematopoietic stem cell transplantation, hematopoietic, hospitalization, cell, stem"
    },
    {
        "title": "Multimodal therapy for early stage breast cancer",
        "url": "/specialty/hematology/multimodal-therapy-for-early-stage-breast-cancer",
        "description": "Multimodal therapy for early stage breast cancer - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "multimodal, hematology, multimodal therapy for early stage breast cancer, therapy, for, early, breast, hospitalization, cancer, stage"
    },
    {
        "title": "Management of metastatic breast cancer",
        "url": "/specialty/hematology/management-of-metastatic-breast-cancer",
        "description": "Management of metastatic breast cancer - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "management of metastatic breast cancer, hematology, metastatic, management, breast, hospitalization, cancer"
    },
    {
        "title": "Advances in cancer drug development",
        "url": "/specialty/hematology/advances-in-cancer-drug-development",
        "description": "Advances in cancer drug development - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "hematology, drug, advances, advances in cancer drug development, hospitalization, development, cancer"
    },
    {
        "title": "Severe complications of blood disorders",
        "url": "/specialty/hematology/severe-complications-of-blood-disorders",
        "description": "Severe complications of blood disorders - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "complications, hematology, severe, severe complications of blood disorders, disorders, hospitalization, blood"
    },
    {
        "title": "Symptom management in patients with cancer",
        "url": "/specialty/hematology/symptom-management-in-patients-with-cancer",
        "description": "Symptom management in patients with cancer - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "hematology, symptom, management, symptom management in patients with cancer, hospitalization, patients, cancer, with"
    },
    {
        "title": "Complex hematologic malignancies",
        "url": "/specialty/hematology/complex-hematologic-malignancies",
        "description": "Complex hematologic malignancies - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "malignancies, complex hematologic malignancies, hematology, complex, hospitalization, hematologic"
    },
    {
        "title": "Stem cell transplant complications",
        "url": "/specialty/hematology/stem-cell-transplant-complications",
        "description": "Stem cell transplant complications - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "complications, stem cell transplant complications, hematology, transplant, hospitalization, cell, stem"
    },
    {
        "title": "Communication: Excellence in End-of-life-care",
        "url": "/specialty/hematology/communication-excellence-in-endoflifecare",
        "description": "Communication: Excellence in End-of-life-care - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "excellence, care, hematology, end, life, communication: excellence in end-of-life-care, communication, hospitalization"
    },
    {
        "title": "Complex transfusion management",
        "url": "/specialty/hematology/complex-transfusion-management",
        "description": "Complex transfusion management - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "hematology, complex transfusion management, management, complex, hospitalization, transfusion"
    },
    {
        "title": "Invite me a coffee",
        "url": "/specialty/hematology/invite-me-a-coffee",
        "description": "Invite me a coffee - Hematology clinical information, diagnosis, and management guidelines.",
        "keywords": "hematology, coffee, invite me a coffee, invite"
    },
    {
        "title": "Anxiety spectrum disorders - generalized anxiety, OCD and Panic",
        "url": "/specialty/psychiatry/anxiety-spectrum-disorders-generalized-anxiety-ocd-and-panic",
        "description": "Anxiety spectrum disorders - generalized anxiety, OCD and Panic - Psychiatry clinical information, diagnosis, and management guidelines.",
        "keywords": "spectrum, and, psychiatry, generalized, disorders, anxiety spectrum disorders - generalized anxiety, ocd and panic, ocd, outpatient setting, panic, anxiety"
    },
    {
        "title": "Diagnosis and Treatment of depression",
        "url": "/specialty/psychiatry/diagnosis-and-treatment-of-depression",
        "description": "Diagnosis and Treatment of depression - Psychiatry clinical information, diagnosis, and management guidelines.",
        "keywords": "and, treatment, psychiatry, diagnosis and treatment of depression, diagnosis, depression, outpatient setting"
    },
    {
        "title": "Child and adolescent - ADHD, depression and anxiety",
        "url": "/specialty/psychiatry/child-and-adolescent-adhd-depression-and-anxiety",
        "description": "Child and adolescent - ADHD, depression and anxiety - Psychiatry clinical information, diagnosis, and management guidelines.",
        "keywords": "child, and, psychiatry, adhd, adolescent, child and adolescent - adhd, depression and anxiety, depression, outpatient setting, anxiety"
    },
    {
        "title": "Psychopharmacology for Primary Care",
        "url": "/specialty/psychiatry/psychopharmacology-for-primary-care",
        "description": "Psychopharmacology for Primary Care - Psychiatry clinical information, diagnosis, and management guidelines.",
        "keywords": "care, primary, psychiatry, for, psychopharmacology for primary care, outpatient setting, psychopharmacology"
    },
    {
        "title": "Substance use disorders",
        "url": "/specialty/psychiatry/substance-use-disorders",
        "description": "Substance use disorders - Psychiatry clinical information, diagnosis, and management guidelines.",
        "keywords": "psychiatry, use, substance use disorders, disorders, substance, outpatient setting"
    },
    {
        "title": "Bipolar disorders",
        "url": "/specialty/psychiatry/bipolar-disorders",
        "description": "Bipolar disorders - Psychiatry clinical information, diagnosis, and management guidelines.",
        "keywords": "psychiatry, disorders, bipolar, bipolar disorders, outpatient setting"
    },
    {
        "title": "Integrating medical and psychiatric care",
        "url": "/specialty/psychiatry/integrating-medical-and-psychiatric-care",
        "description": "Integrating medical and psychiatric care - Psychiatry clinical information, diagnosis, and management guidelines.",
        "keywords": "and, care, integrating, psychiatry, integrating medical and psychiatric care, medical, psychiatric, outpatient setting"
    },
    {
        "title": "Mood disorders in pregnancy and postpartum",
        "url": "/specialty/psychiatry/mood-disorders-in-pregnancy-and-postpartum",
        "description": "Mood disorders in pregnancy and postpartum - Psychiatry clinical information, diagnosis, and management guidelines.",
        "keywords": "and, psychiatry, mood, pregnancy, disorders, postpartum, outpatient setting, mood disorders in pregnancy and postpartum"
    },
    {
        "title": "Premenstrual syndrome and premenstrual dyshphoric syndrome",
        "url": "/specialty/psychiatry/premenstrual-syndrome-and-premenstrual-dyshphoric-syndrome",
        "description": "Premenstrual syndrome and premenstrual dyshphoric syndrome - Psychiatry clinical information, diagnosis, and management guidelines.",
        "keywords": "premenstrual, and, psychiatry, dyshphoric, premenstrual syndrome and premenstrual dyshphoric syndrome, syndrome, outpatient setting"
    },
    {
        "title": "When, why, how to consult psychiatry",
        "url": "/specialty/psychiatry/when-why-how-to-consult-psychiatry",
        "description": "When, why, how to consult psychiatry - Psychiatry clinical information, diagnosis, and management guidelines.",
        "keywords": "psychiatry, when, why, how to consult psychiatry, consult, when, why, outpatient setting, how"
    },
    {
        "title": "Interface of psychiatry and medicine - Cancer and heart disease",
        "url": "/specialty/psychiatry/interface-of-psychiatry-and-medicine-cancer-and-heart-disease",
        "description": "Interface of psychiatry and medicine - Cancer and heart disease - Psychiatry clinical information, diagnosis, and management guidelines.",
        "keywords": "and, psychiatry, medicine, cancer, disease, interface of psychiatry and medicine - cancer and heart disease, heart, interface, outpatient setting"
    },
    {
        "title": "Alzheimer's disease and neurocognitive disorders",
        "url": "/specialty/psychiatry/alzheimers-disease-and-neurocognitive-disorders",
        "description": "Alzheimer's disease and neurocognitive disorders - Psychiatry clinical information, diagnosis, and management guidelines.",
        "keywords": "alzheimer, and, psychiatry, neurocognitive, disease, disorders, outpatient setting, alzheimer's disease and neurocognitive disorders"
    },
    {
        "title": "Historical perspectives in Psychopharmacology",
        "url": "/specialty/psychiatry/historical-perspectives-in-psychopharmacology",
        "description": "Historical perspectives in Psychopharmacology - Psychiatry clinical information, diagnosis, and management guidelines.",
        "keywords": "perspectives, historical, psychiatry, historical perspectives in psychopharmacology, outpatient setting, psychopharmacology"
    },
    {
        "title": "Emergency Room",
        "url": "/specialty/psychiatry/emergency-room",
        "description": "Emergency Room - Psychiatry clinical information, diagnosis, and management guidelines.",
        "keywords": "psychiatry, emergency, emergency room, room"
    },
    {
        "title": "Acute suicidal ideation and behavior",
        "url": "/specialty/psychiatry/acute-suicidal-ideation-and-behavior",
        "description": "Acute suicidal ideation and behavior - Psychiatry clinical information, diagnosis, and management guidelines.",
        "keywords": "and, suicidal, ideation, psychiatry, behavior, acute suicidal ideation and behavior, emergency room, acute"
    },
    {
        "title": "Severe substance intoxication and withdrawal",
        "url": "/specialty/psychiatry/severe-substance-intoxication-and-withdrawal",
        "description": "Severe substance intoxication and withdrawal - Psychiatry clinical information, diagnosis, and management guidelines.",
        "keywords": "and, psychiatry, severe, severe substance intoxication and withdrawal, withdrawal, substance, emergency room, intoxication"
    },
    {
        "title": "Severe agitation and violent behavior",
        "url": "/specialty/psychiatry/severe-agitation-and-violent-behavior",
        "description": "Severe agitation and violent behavior - Psychiatry clinical information, diagnosis, and management guidelines.",
        "keywords": "and, violent, psychiatry, severe, behavior, severe agitation and violent behavior, emergency room, agitation"
    },
    {
        "title": "Acute psychosis and psychiatric crisis",
        "url": "/specialty/psychiatry/acute-psychosis-and-psychiatric-crisis",
        "description": "Acute psychosis and psychiatric crisis - Psychiatry clinical information, diagnosis, and management guidelines.",
        "keywords": "psychosis, and, acute psychosis and psychiatric crisis, psychiatry, psychiatric, crisis, emergency room, acute"
    },
    {
        "title": "Severe depression with psychotic features",
        "url": "/specialty/psychiatry/severe-depression-with-psychotic-features",
        "description": "Severe depression with psychotic features - Psychiatry clinical information, diagnosis, and management guidelines.",
        "keywords": "psychotic, psychiatry, severe, features, severe depression with psychotic features, depression, emergency room, with"
    },
    {
        "title": "Substance withdrawal with medical complications",
        "url": "/specialty/psychiatry/substance-withdrawal-with-medical-complications",
        "description": "Substance withdrawal with medical complications - Psychiatry clinical information, diagnosis, and management guidelines.",
        "keywords": "complications, psychiatry, substance withdrawal with medical complications, withdrawal, medical, substance, emergency room, with"
    },
    {
        "title": "Acute manic episodes",
        "url": "/specialty/psychiatry/acute-manic-episodes",
        "description": "Acute manic episodes - Psychiatry clinical information, diagnosis, and management guidelines.",
        "keywords": "acute manic episodes, episodes, psychiatry, manic, emergency room, acute"
    },
    {
        "title": "Severe anxiety and panic attacks",
        "url": "/specialty/psychiatry/severe-anxiety-and-panic-attacks",
        "description": "Severe anxiety and panic attacks - Psychiatry clinical information, diagnosis, and management guidelines.",
        "keywords": "and, panic, attacks, psychiatry, severe, emergency room, severe anxiety and panic attacks, anxiety"
    },
    {
        "title": "Catatonia and neuroleptic malignant syndrome",
        "url": "/specialty/psychiatry/catatonia-and-neuroleptic-malignant-syndrome",
        "description": "Catatonia and neuroleptic malignant syndrome - Psychiatry clinical information, diagnosis, and management guidelines.",
        "keywords": "and, psychiatry, catatonia, neuroleptic, syndrome, malignant, emergency room, catatonia and neuroleptic malignant syndrome"
    },
    {
        "title": "Severe eating disorders with medical complications",
        "url": "/specialty/psychiatry/severe-eating-disorders-with-medical-complications",
        "description": "Severe eating disorders with medical complications - Psychiatry clinical information, diagnosis, and management guidelines.",
        "keywords": "complications, psychiatry, severe, disorders, eating, medical, emergency room, with, severe eating disorders with medical complications"
    },
    {
        "title": "Hospitalization",
        "url": "/specialty/psychiatry/hospitalization",
        "description": "Hospitalization - Psychiatry clinical information, diagnosis, and management guidelines.",
        "keywords": "hospitalization, psychiatry"
    },
    {
        "title": "Severe suicidal behavior requiring inpatient stabilization",
        "url": "/specialty/psychiatry/severe-suicidal-behavior-requiring-inpatient-stabilization",
        "description": "Severe suicidal behavior requiring inpatient stabilization - Psychiatry clinical information, diagnosis, and management guidelines.",
        "keywords": "severe suicidal behavior requiring inpatient stabilization, suicidal, inpatient, psychiatry, severe, behavior, stabilization, requiring, hospitalization"
    },
    {
        "title": "Complicated substance withdrawal requiring medical management",
        "url": "/specialty/psychiatry/complicated-substance-withdrawal-requiring-medical-management",
        "description": "Complicated substance withdrawal requiring medical management - Psychiatry clinical information, diagnosis, and management guidelines.",
        "keywords": "complicated substance withdrawal requiring medical management, psychiatry, complicated, withdrawal, management, hospitalization, requiring, medical, substance"
    },
    {
        "title": "Treatment-resistant severe depression",
        "url": "/specialty/psychiatry/treatmentresistant-severe-depression",
        "description": "Treatment-resistant severe depression - Psychiatry clinical information, diagnosis, and management guidelines.",
        "keywords": "treatment, treatment-resistant severe depression, psychiatry, severe, resistant, hospitalization, depression"
    },
    {
        "title": "Severe bipolar disorder with psychotic features",
        "url": "/specialty/psychiatry/severe-bipolar-disorder-with-psychotic-features",
        "description": "Severe bipolar disorder with psychotic features - Psychiatry clinical information, diagnosis, and management guidelines.",
        "keywords": "severe bipolar disorder with psychotic features, psychotic, disorder, psychiatry, severe, features, hospitalization, bipolar, with"
    },
    {
        "title": "Severe psychotic disorders requiring stabilization",
        "url": "/specialty/psychiatry/severe-psychotic-disorders-requiring-stabilization",
        "description": "Severe psychotic disorders requiring stabilization - Psychiatry clinical information, diagnosis, and management guidelines.",
        "keywords": "psychotic, severe psychotic disorders requiring stabilization, psychiatry, severe, stabilization, requiring, disorders, hospitalization"
    },
    {
        "title": "Severe eating disorders requiring medical stabilization",
        "url": "/specialty/psychiatry/severe-eating-disorders-requiring-medical-stabilization",
        "description": "Severe eating disorders requiring medical stabilization - Psychiatry clinical information, diagnosis, and management guidelines.",
        "keywords": "severe eating disorders requiring medical stabilization, psychiatry, severe, stabilization, requiring, disorders, eating, medical, hospitalization"
    },
    {
        "title": "Psychiatric complications requiring ECT",
        "url": "/specialty/psychiatry/psychiatric-complications-requiring-ect",
        "description": "Psychiatric complications requiring ECT - Psychiatry clinical information, diagnosis, and management guidelines.",
        "keywords": "complications, psychiatry, ect, requiring, psychiatric complications requiring ect, hospitalization, psychiatric"
    },
    {
        "title": "Severe delirium with psychiatric manifestations",
        "url": "/specialty/psychiatry/severe-delirium-with-psychiatric-manifestations",
        "description": "Severe delirium with psychiatric manifestations - Psychiatry clinical information, diagnosis, and management guidelines.",
        "keywords": "manifestations, psychiatry, severe delirium with psychiatric manifestations, severe, hospitalization, delirium, psychiatric, with"
    },
    {
        "title": "Complex psychiatric medication management",
        "url": "/specialty/psychiatry/complex-psychiatric-medication-management",
        "description": "Complex psychiatric medication management - Psychiatry clinical information, diagnosis, and management guidelines.",
        "keywords": "psychiatry, medication, management, complex psychiatric medication management, complex, hospitalization, psychiatric"
    },
    {
        "title": "Comorbid medical-psychiatric conditions",
        "url": "/specialty/psychiatry/comorbid-medicalpsychiatric-conditions",
        "description": "Comorbid medical-psychiatric conditions - Psychiatry clinical information, diagnosis, and management guidelines.",
        "keywords": "psychiatry, conditions, medical, hospitalization, comorbid medical-psychiatric conditions, psychiatric, comorbid"
    },
    {
        "title": "Invite me a coffee",
        "url": "/specialty/psychiatry/invite-me-a-coffee",
        "description": "Invite me a coffee - Psychiatry clinical information, diagnosis, and management guidelines.",
        "keywords": "psychiatry, coffee, invite me a coffee, invite"
    },
    {
        "title": "Type 2 diabetes",
        "url": "/specialty/endocrinology/type-2-diabetes",
        "description": "Type 2 diabetes - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "type, outpatient setting, type 2 diabetes, endocrinology, diabetes"
    },
    {
        "title": "Screening and diagnosis",
        "url": "/specialty/endocrinology/screening-and-diagnosis",
        "description": "Screening and diagnosis - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "and, diagnosis, screening, screening and diagnosis, endocrinology, outpatient setting"
    },
    {
        "title": "Prevention",
        "url": "/specialty/endocrinology/prevention",
        "description": "Prevention - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "prevention, endocrinology, outpatient setting"
    },
    {
        "title": "Lifestyle modifications in diabetes management",
        "url": "/specialty/endocrinology/lifestyle-modifications-in-diabetes-management",
        "description": "Lifestyle modifications in diabetes management - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "management, diabetes, modifications, lifestyle modifications in diabetes management, endocrinology, outpatient setting, lifestyle"
    },
    {
        "title": "Antidiabetic Agents",
        "url": "/specialty/endocrinology/antidiabetic-agents",
        "description": "Antidiabetic Agents - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "agents, antidiabetic, endocrinology, antidiabetic agents, outpatient setting"
    },
    {
        "title": "Metformin, sulfonylureas, meglitinides and thiazolidinediones",
        "url": "/specialty/endocrinology/metformin-sulfonylureas-meglitinides-and-thiazolidinediones",
        "description": "Metformin, sulfonylureas, meglitinides and thiazolidinediones - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "meglitinides, and, thiazolidinediones, sulfonylureas, metformin, endocrinology, outpatient setting, metformin, sulfonylureas, meglitinides and thiazolidinediones"
    },
    {
        "title": "Incretins, SGLT-2",
        "url": "/specialty/endocrinology/incretins-sglt2",
        "description": "Incretins, SGLT-2 - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "incretins, sglt-2, incretins, sglt, endocrinology, outpatient setting"
    },
    {
        "title": "Selecting antidiabetic therapy",
        "url": "/specialty/endocrinology/selecting-antidiabetic-therapy",
        "description": "Selecting antidiabetic therapy - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "therapy, selecting antidiabetic therapy, antidiabetic, endocrinology, outpatient setting, selecting"
    },
    {
        "title": "Assessing glycemic control",
        "url": "/specialty/endocrinology/assessing-glycemic-control",
        "description": "Assessing glycemic control - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "control, assessing glycemic control, assessing, glycemic, endocrinology, outpatient setting"
    },
    {
        "title": "Hypothyroidism",
        "url": "/specialty/endocrinology/hypothyroidism",
        "description": "Hypothyroidism - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "outpatient setting, hypothyroidism, endocrinology"
    },
    {
        "title": "Medical management of obesity",
        "url": "/specialty/endocrinology/medical-management-of-obesity",
        "description": "Medical management of obesity - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "obesity, management, medical management of obesity, medical, endocrinology, outpatient setting"
    },
    {
        "title": "Type 1 diabetes",
        "url": "/specialty/endocrinology/type-1-diabetes",
        "description": "Type 1 diabetes - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "type, outpatient setting, type 1 diabetes, endocrinology, diabetes"
    },
    {
        "title": "Insulin, insulin pump therapy",
        "url": "/specialty/endocrinology/insulin-insulin-pump-therapy",
        "description": "Insulin, insulin pump therapy - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "pump, therapy, endocrinology, outpatient setting, insulin, insulin pump therapy, insulin"
    },
    {
        "title": "Cardiovascular risk reduction in diabetes",
        "url": "/specialty/endocrinology/cardiovascular-risk-reduction-in-diabetes",
        "description": "Cardiovascular risk reduction in diabetes - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "reduction, risk, cardiovascular risk reduction in diabetes, diabetes, cardiovascular, endocrinology, outpatient setting"
    },
    {
        "title": "Thyroid nodules",
        "url": "/specialty/endocrinology/thyroid-nodules",
        "description": "Thyroid nodules - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "thyroid nodules, nodules, thyroid, endocrinology, outpatient setting"
    },
    {
        "title": "Assessment and treatment of dyslipidemia",
        "url": "/specialty/endocrinology/assessment-and-treatment-of-dyslipidemia",
        "description": "Assessment and treatment of dyslipidemia - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "dyslipidemia, and, assessment, treatment, assessment and treatment of dyslipidemia, endocrinology, outpatient setting"
    },
    {
        "title": "Evaluation of patient with low bone disease density",
        "url": "/specialty/endocrinology/evaluation-of-patient-with-low-bone-disease-density",
        "description": "Evaluation of patient with low bone disease density - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "evaluation of patient with low bone disease density, low, patient, disease, evaluation, endocrinology, bone, outpatient setting, with, density"
    },
    {
        "title": "Treatment of osteoporosis",
        "url": "/specialty/endocrinology/treatment-of-osteoporosis",
        "description": "Treatment of osteoporosis - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "treatment, treatment of osteoporosis, endocrinology, osteoporosis, outpatient setting"
    },
    {
        "title": "Menstrual irregularities",
        "url": "/specialty/endocrinology/menstrual-irregularities",
        "description": "Menstrual irregularities - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "menstrual, irregularities, menstrual irregularities, endocrinology, outpatient setting"
    },
    {
        "title": "Menopausal symptoms",
        "url": "/specialty/endocrinology/menopausal-symptoms",
        "description": "Menopausal symptoms - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "menopausal symptoms, symptoms, menopausal, endocrinology, outpatient setting"
    },
    {
        "title": "Contraception",
        "url": "/specialty/endocrinology/contraception",
        "description": "Contraception - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "endocrinology, outpatient setting, contraception"
    },
    {
        "title": "Polycystic ovarian syndrome and approach to female androgen excess",
        "url": "/specialty/endocrinology/polycystic-ovarian-syndrome-and-approach-to-female-androgen-excess",
        "description": "Polycystic ovarian syndrome and approach to female androgen excess - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "and, excess, polycystic, approach, androgen, outpatient setting, syndrome, endocrinology, ovarian, polycystic ovarian syndrome and approach to female androgen excess, female"
    },
    {
        "title": "Microvascular and dermatologic complications of diabetes",
        "url": "/specialty/endocrinology/microvascular-and-dermatologic-complications-of-diabetes",
        "description": "Microvascular and dermatologic complications of diabetes - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "and, complications, microvascular and dermatologic complications of diabetes, diabetes, microvascular, dermatologic, endocrinology, outpatient setting"
    },
    {
        "title": "Hypothyroidism and thyroiditis",
        "url": "/specialty/endocrinology/hypothyroidism-and-thyroiditis",
        "description": "Hypothyroidism and thyroiditis - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "and, hypothyroidism, thyroiditis, hypothyroidism and thyroiditis, endocrinology, outpatient setting"
    },
    {
        "title": "Hypercalcemia",
        "url": "/specialty/endocrinology/hypercalcemia",
        "description": "Hypercalcemia - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "endocrinology, outpatient setting, hypercalcemia"
    },
    {
        "title": "Hypocalcemia",
        "url": "/specialty/endocrinology/hypocalcemia",
        "description": "Hypocalcemia - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "outpatient setting, hypocalcemia, endocrinology"
    },
    {
        "title": "Primary hypertension",
        "url": "/specialty/endocrinology/primary-hypertension",
        "description": "Primary hypertension - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "primary, endocrinology, hypertension, primary hypertension, outpatient setting"
    },
    {
        "title": "Endocrine hypertension",
        "url": "/specialty/endocrinology/endocrine-hypertension",
        "description": "Endocrine hypertension - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "endocrinology, hypertension, endocrine, endocrine hypertension, outpatient setting"
    },
    {
        "title": "Molecular testing of thyroid nodules",
        "url": "/specialty/endocrinology/molecular-testing-of-thyroid-nodules",
        "description": "Molecular testing of thyroid nodules - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "nodules, molecular testing of thyroid nodules, molecular, thyroid, testing, endocrinology, outpatient setting"
    },
    {
        "title": "Topics in metabolic bone disease",
        "url": "/specialty/endocrinology/topics-in-metabolic-bone-disease",
        "description": "Topics in metabolic bone disease - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "topics in metabolic bone disease, topics, disease, metabolic, endocrinology, bone, outpatient setting"
    },
    {
        "title": "Infertility and assisted reproduction",
        "url": "/specialty/endocrinology/infertility-and-assisted-reproduction",
        "description": "Infertility and assisted reproduction - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "and, infertility, reproduction, infertility and assisted reproduction, assisted, endocrinology, outpatient setting"
    },
    {
        "title": "Complexities in the diagnosis and treatment of androgen deficiency syndrome in men",
        "url": "/specialty/endocrinology/complexities-in-the-diagnosis-and-treatment-of-androgen-deficiency-syndrome-in-men",
        "description": "Complexities in the diagnosis and treatment of androgen deficiency syndrome in men - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "and, treatment, complexities, syndrome, deficiency, diagnosis, the, complexities in the diagnosis and treatment of androgen deficiency syndrome in men, men, androgen, endocrinology, outpatient setting"
    },
    {
        "title": "Evaluation and management of erectile dysfunction",
        "url": "/specialty/endocrinology/evaluation-and-management-of-erectile-dysfunction",
        "description": "Evaluation and management of erectile dysfunction - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "and, dysfunction, evaluation and management of erectile dysfunction, erectile, management, evaluation, endocrinology, outpatient setting"
    },
    {
        "title": "Hormonal treatment of transgenders and gender diverse individuals",
        "url": "/specialty/endocrinology/hormonal-treatment-of-transgenders-and-gender-diverse-individuals",
        "description": "Hormonal treatment of transgenders and gender diverse individuals - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "treatment, and, individuals, gender, transgenders, endocrinology, hormonal, diverse, hormonal treatment of transgenders and gender diverse individuals, outpatient setting"
    },
    {
        "title": "Bariatric surgery",
        "url": "/specialty/endocrinology/bariatric-surgery",
        "description": "Bariatric surgery - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "surgery, bariatric surgery, bariatric, endocrinology, outpatient setting"
    },
    {
        "title": "Pathophysiology Weight regulation and obesity",
        "url": "/specialty/endocrinology/pathophysiology-weight-regulation-and-obesity",
        "description": "Pathophysiology Weight regulation and obesity - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "and, pathophysiology, pathophysiology weight regulation and obesity, obesity, regulation, endocrinology, weight, outpatient setting"
    },
    {
        "title": "Anterior and posterior pituitary insufficiency",
        "url": "/specialty/endocrinology/anterior-and-posterior-pituitary-insufficiency",
        "description": "Anterior and posterior pituitary insufficiency - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "and, posterior, anterior, insufficiency, anterior and posterior pituitary insufficiency, pituitary, endocrinology, outpatient setting"
    },
    {
        "title": "Pituitary masses",
        "url": "/specialty/endocrinology/pituitary-masses",
        "description": "Pituitary masses - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "pituitary, pituitary masses, endocrinology, outpatient setting, masses"
    },
    {
        "title": "Prolactin and growth hormone excess",
        "url": "/specialty/endocrinology/prolactin-and-growth-hormone-excess",
        "description": "Prolactin and growth hormone excess - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "growth, and, excess, hormone, prolactin and growth hormone excess, prolactin, endocrinology, outpatient setting"
    },
    {
        "title": "Primary and secondary adrenal insufficiency",
        "url": "/specialty/endocrinology/primary-and-secondary-adrenal-insufficiency",
        "description": "Primary and secondary adrenal insufficiency - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "adrenal, and, secondary, primary, insufficiency, endocrinology, outpatient setting, primary and secondary adrenal insufficiency"
    },
    {
        "title": "Diagnosis and treatment of cushing's disease",
        "url": "/specialty/endocrinology/diagnosis-and-treatment-of-cushings-disease",
        "description": "Diagnosis and treatment of cushing's disease - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "and, treatment, diagnosis and treatment of cushing's disease, diagnosis, disease, endocrinology, outpatient setting, cushing"
    },
    {
        "title": "Thyroid cancers",
        "url": "/specialty/endocrinology/thyroid-cancers",
        "description": "Thyroid cancers - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "cancers, thyroid, thyroid cancers, endocrinology, outpatient setting"
    },
    {
        "title": "Adrenal tumors and cancer",
        "url": "/specialty/endocrinology/adrenal-tumors-and-cancer",
        "description": "Adrenal tumors and cancer - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "tumors, adrenal, and, cancer, adrenal tumors and cancer, endocrinology, outpatient setting"
    },
    {
        "title": "Pheochromocytomas and paragangliomas",
        "url": "/specialty/endocrinology/pheochromocytomas-and-paragangliomas",
        "description": "Pheochromocytomas and paragangliomas - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "pheochromocytomas and paragangliomas, and, pheochromocytomas, paragangliomas, endocrinology, outpatient setting"
    },
    {
        "title": "Emergency Room",
        "url": "/specialty/endocrinology/emergency-room",
        "description": "Emergency Room - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "endocrinology, emergency room, room, emergency"
    },
    {
        "title": "Hyperglycemic crisis",
        "url": "/specialty/endocrinology/hyperglycemic-crisis",
        "description": "Hyperglycemic crisis - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "emergency room, hyperglycemic, crisis, endocrinology, hyperglycemic crisis"
    },
    {
        "title": "Severe hypoglycemia",
        "url": "/specialty/endocrinology/severe-hypoglycemia",
        "description": "Severe hypoglycemia - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "severe, hypoglycemia, endocrinology, emergency room, severe hypoglycemia"
    },
    {
        "title": "Diabetic ketoacidosis",
        "url": "/specialty/endocrinology/diabetic-ketoacidosis",
        "description": "Diabetic ketoacidosis - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "diabetic, ketoacidosis, diabetic ketoacidosis, endocrinology, emergency room"
    },
    {
        "title": "Hyperosmolar hyperglycemic state",
        "url": "/specialty/endocrinology/hyperosmolar-hyperglycemic-state",
        "description": "Hyperosmolar hyperglycemic state - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "hyperosmolar hyperglycemic state, hyperosmolar, hyperglycemic, state, endocrinology, emergency room"
    },
    {
        "title": "Acute adrenal insufficiency",
        "url": "/specialty/endocrinology/acute-adrenal-insufficiency",
        "description": "Acute adrenal insufficiency - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "acute adrenal insufficiency, adrenal, insufficiency, endocrinology, emergency room, acute"
    },
    {
        "title": "Severe hypoglycemia in non-diabetic patients",
        "url": "/specialty/endocrinology/severe-hypoglycemia-in-nondiabetic-patients",
        "description": "Severe hypoglycemia in non-diabetic patients - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "severe, diabetic, non, severe hypoglycemia in non-diabetic patients, hypoglycemia, patients, endocrinology, emergency room"
    },
    {
        "title": "Thyroid storm",
        "url": "/specialty/endocrinology/thyroid-storm",
        "description": "Thyroid storm - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "storm, thyroid storm, thyroid, endocrinology, emergency room"
    },
    {
        "title": "Myxedema coma",
        "url": "/specialty/endocrinology/myxedema-coma",
        "description": "Myxedema coma - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "myxedema, myxedema coma, endocrinology, emergency room, coma"
    },
    {
        "title": "Severe hypercalcemia",
        "url": "/specialty/endocrinology/severe-hypercalcemia",
        "description": "Severe hypercalcemia - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "severe hypercalcemia, severe, hypercalcemia, endocrinology, emergency room"
    },
    {
        "title": "Hypoglycemia in non-diabetic patients",
        "url": "/specialty/endocrinology/hypoglycemia-in-nondiabetic-patients",
        "description": "Hypoglycemia in non-diabetic patients - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "diabetic, hypoglycemia in non-diabetic patients, endocrinology, hypoglycemia, patients, non, emergency room"
    },
    {
        "title": "Acute complications of pheochromocytoma",
        "url": "/specialty/endocrinology/acute-complications-of-pheochromocytoma",
        "description": "Acute complications of pheochromocytoma - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "complications, acute complications of pheochromocytoma, pheochromocytoma, endocrinology, emergency room, acute"
    },
    {
        "title": "Hospitalization",
        "url": "/specialty/endocrinology/hospitalization",
        "description": "Hospitalization - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "hospitalization, endocrinology"
    },
    {
        "title": "Inpatient hyperglycemia",
        "url": "/specialty/endocrinology/inpatient-hyperglycemia",
        "description": "Inpatient hyperglycemia - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "inpatient, hyperglycemia, hospitalization, endocrinology, inpatient hyperglycemia"
    },
    {
        "title": "Severe diabetic complications",
        "url": "/specialty/endocrinology/severe-diabetic-complications",
        "description": "Severe diabetic complications - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "severe diabetic complications, complications, severe, diabetic, hospitalization, endocrinology"
    },
    {
        "title": "Complex diabetes management",
        "url": "/specialty/endocrinology/complex-diabetes-management",
        "description": "Complex diabetes management - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "complex diabetes management, management, complex, hospitalization, endocrinology, diabetes"
    },
    {
        "title": "Severe endocrine emergencies",
        "url": "/specialty/endocrinology/severe-endocrine-emergencies",
        "description": "Severe endocrine emergencies - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "emergencies, severe, severe endocrine emergencies, endocrine, hospitalization, endocrinology"
    },
    {
        "title": "Diabetes in pregnancy",
        "url": "/specialty/endocrinology/diabetes-in-pregnancy",
        "description": "Diabetes in pregnancy - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "diabetes in pregnancy, pregnancy, hospitalization, endocrinology, diabetes"
    },
    {
        "title": "Endocrine disorders in pregnancy",
        "url": "/specialty/endocrinology/endocrine-disorders-in-pregnancy",
        "description": "Endocrine disorders in pregnancy - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "endocrine disorders in pregnancy, pregnancy, disorders, endocrine, hospitalization, endocrinology"
    },
    {
        "title": "Post-operative endocrine complications",
        "url": "/specialty/endocrinology/postoperative-endocrine-complications",
        "description": "Post-operative endocrine complications - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "complications, endocrine, hospitalization, operative, endocrinology, post, post-operative endocrine complications"
    },
    {
        "title": "Severe pituitary emergencies",
        "url": "/specialty/endocrinology/severe-pituitary-emergencies",
        "description": "Severe pituitary emergencies - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "emergencies, severe pituitary emergencies, severe, pituitary, hospitalization, endocrinology"
    },
    {
        "title": "Complex thyroid cancer management",
        "url": "/specialty/endocrinology/complex-thyroid-cancer-management",
        "description": "Complex thyroid cancer management - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "complex thyroid cancer management, thyroid, management, complex, hospitalization, endocrinology, cancer"
    },
    {
        "title": "Severe bone disease complications",
        "url": "/specialty/endocrinology/severe-bone-disease-complications",
        "description": "Severe bone disease complications - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "complications, severe bone disease complications, severe, disease, hospitalization, endocrinology, bone"
    },
    {
        "title": "Invite me a coffee",
        "url": "/specialty/endocrinology/invite-me-a-coffee",
        "description": "Invite me a coffee - Endocrinology clinical information, diagnosis, and management guidelines.",
        "keywords": "coffee, endocrinology, invite me a coffee, invite"
    },
    {
        "title": "GERD",
        "url": "/specialty/gastroenterology/gerd",
        "description": "GERD - Gastroenterology clinical information, diagnosis, and management guidelines.",
        "keywords": "gerd, outpatient setting, gastroenterology"
    },
    {
        "title": "Peptic ulcer",
        "url": "/specialty/gastroenterology/peptic-ulcer",
        "description": "Peptic ulcer - Gastroenterology clinical information, diagnosis, and management guidelines.",
        "keywords": "peptic, peptic ulcer, ulcer, outpatient setting, gastroenterology"
    },
    {
        "title": "Constipation and diarrhea",
        "url": "/specialty/gastroenterology/constipation-and-diarrhea",
        "description": "Constipation and diarrhea - Gastroenterology clinical information, diagnosis, and management guidelines.",
        "keywords": "and, constipation, diarrhea, constipation and diarrhea, outpatient setting, gastroenterology"
    },
    {
        "title": "Irritable bowel disease",
        "url": "/specialty/gastroenterology/irritable-bowel-disease",
        "description": "Irritable bowel disease - Gastroenterology clinical information, diagnosis, and management guidelines.",
        "keywords": "irritable bowel disease, irritable, bowel, disease, outpatient setting, gastroenterology"
    },
    {
        "title": "Functional dyspepsia, gastroparesis, ileus",
        "url": "/specialty/gastroenterology/functional-dyspepsia-gastroparesis-ileus",
        "description": "Functional dyspepsia, gastroparesis, ileus - Gastroenterology clinical information, diagnosis, and management guidelines.",
        "keywords": "functional, ileus, functional dyspepsia, gastroparesis, ileus, dyspepsia, gastroparesis, outpatient setting, gastroenterology"
    },
    {
        "title": "Inflammatory bowel Disease",
        "url": "/specialty/gastroenterology/inflammatory-bowel-disease",
        "description": "Inflammatory bowel Disease - Gastroenterology clinical information, diagnosis, and management guidelines.",
        "keywords": "inflammatory bowel disease, bowel, disease, inflammatory, outpatient setting, gastroenterology"
    },
    {
        "title": "NAFLD",
        "url": "/specialty/gastroenterology/nafld",
        "description": "NAFLD - Gastroenterology clinical information, diagnosis, and management guidelines.",
        "keywords": "gastroenterology, outpatient setting, nafld"
    },
    {
        "title": "Celiac Disease",
        "url": "/specialty/gastroenterology/celiac-disease",
        "description": "Celiac Disease - Gastroenterology clinical information, diagnosis, and management guidelines.",
        "keywords": "celiac disease, disease, celiac, outpatient setting, gastroenterology"
    },
    {
        "title": "Malabsorption and nutrition",
        "url": "/specialty/gastroenterology/malabsorption-and-nutrition",
        "description": "Malabsorption and nutrition - Gastroenterology clinical information, diagnosis, and management guidelines.",
        "keywords": "and, malabsorption, malabsorption and nutrition, nutrition, outpatient setting, gastroenterology"
    },
    {
        "title": "Colorectal cancer screening",
        "url": "/specialty/gastroenterology/colorectal-cancer-screening",
        "description": "Colorectal cancer screening - Gastroenterology clinical information, diagnosis, and management guidelines.",
        "keywords": "colorectal cancer screening, cancer, colorectal, screening, outpatient setting, gastroenterology"
    },
    {
        "title": "Liver fibrosis",
        "url": "/specialty/gastroenterology/liver-fibrosis",
        "description": "Liver fibrosis - Gastroenterology clinical information, diagnosis, and management guidelines.",
        "keywords": "gastroenterology, liver fibrosis, liver, outpatient setting, fibrosis"
    },
    {
        "title": "Viral Hepatitis",
        "url": "/specialty/gastroenterology/viral-hepatitis",
        "description": "Viral Hepatitis - Gastroenterology clinical information, diagnosis, and management guidelines.",
        "keywords": "viral hepatitis, hepatitis, viral, outpatient setting, gastroenterology"
    },
    {
        "title": "Hepatitis B",
        "url": "/specialty/gastroenterology/hepatitis-b",
        "description": "Hepatitis B - Gastroenterology clinical information, diagnosis, and management guidelines.",
        "keywords": "gastroenterology, outpatient setting, hepatitis b, hepatitis"
    },
    {
        "title": "Hepatitis C",
        "url": "/specialty/gastroenterology/hepatitis-c",
        "description": "Hepatitis C - Gastroenterology clinical information, diagnosis, and management guidelines.",
        "keywords": "gastroenterology, outpatient setting, hepatitis c, hepatitis"
    },
    {
        "title": "Autoimmune Liver disease",
        "url": "/specialty/gastroenterology/autoimmune-liver-disease",
        "description": "Autoimmune Liver disease - Gastroenterology clinical information, diagnosis, and management guidelines.",
        "keywords": "autoimmune liver disease, autoimmune, disease, liver, outpatient setting, gastroenterology"
    },
    {
        "title": "Recurrent and chronic pancreatitis",
        "url": "/specialty/gastroenterology/recurrent-and-chronic-pancreatitis",
        "description": "Recurrent and chronic pancreatitis - Gastroenterology clinical information, diagnosis, and management guidelines.",
        "keywords": "and, recurrent, chronic, pancreatitis, recurrent and chronic pancreatitis, outpatient setting, gastroenterology"
    },
    {
        "title": "Esophageal motility and structural disorders",
        "url": "/specialty/gastroenterology/esophageal-motility-and-structural-disorders",
        "description": "Esophageal motility and structural disorders - Gastroenterology clinical information, diagnosis, and management guidelines.",
        "keywords": "motility, and, structural, esophageal, esophageal motility and structural disorders, disorders, outpatient setting, gastroenterology"
    },
    {
        "title": "Hereditary Gastrointestinal polyposis",
        "url": "/specialty/gastroenterology/hereditary-gastrointestinal-polyposis",
        "description": "Hereditary Gastrointestinal polyposis - Gastroenterology clinical information, diagnosis, and management guidelines.",
        "keywords": "polyposis, gastrointestinal, hereditary gastrointestinal polyposis, hereditary, outpatient setting, gastroenterology"
    },
    {
        "title": "Eosinophilic gastritis and esophagitis",
        "url": "/specialty/gastroenterology/eosinophilic-gastritis-and-esophagitis",
        "description": "Eosinophilic gastritis and esophagitis - Gastroenterology clinical information, diagnosis, and management guidelines.",
        "keywords": "and, eosinophilic, eosinophilic gastritis and esophagitis, outpatient setting, esophagitis, gastritis, gastroenterology"
    },
    {
        "title": "Alcohol associated Hepatitis",
        "url": "/specialty/gastroenterology/alcohol-associated-hepatitis",
        "description": "Alcohol associated Hepatitis - Gastroenterology clinical information, diagnosis, and management guidelines.",
        "keywords": "alcohol, hepatitis, alcohol associated hepatitis, associated, outpatient setting, gastroenterology"
    },
    {
        "title": "HIV",
        "url": "/specialty/gastroenterology/hiv",
        "description": "HIV - Gastroenterology clinical information, diagnosis, and management guidelines.",
        "keywords": "outpatient setting, gastroenterology, hiv"
    },
    {
        "title": "Esophageal Cancer",
        "url": "/specialty/gastroenterology/esophageal-cancer",
        "description": "Esophageal Cancer - Gastroenterology clinical information, diagnosis, and management guidelines.",
        "keywords": "esophageal, cancer, esophageal cancer, outpatient setting, gastroenterology"
    },
    {
        "title": "Pancreatic cancer",
        "url": "/specialty/gastroenterology/pancreatic-cancer",
        "description": "Pancreatic cancer - Gastroenterology clinical information, diagnosis, and management guidelines.",
        "keywords": "pancreatic cancer, cancer, pancreatic, outpatient setting, gastroenterology"
    },
    {
        "title": "Hepatocellular carcinoma",
        "url": "/specialty/gastroenterology/hepatocellular-carcinoma",
        "description": "Hepatocellular carcinoma - Gastroenterology clinical information, diagnosis, and management guidelines.",
        "keywords": "carcinoma, hepatocellular, hepatocellular carcinoma, outpatient setting, gastroenterology"
    },
    {
        "title": "Cholangiocarciona",
        "url": "/specialty/gastroenterology/cholangiocarciona",
        "description": "Cholangiocarciona - Gastroenterology clinical information, diagnosis, and management guidelines.",
        "keywords": "outpatient setting, gastroenterology, cholangiocarciona"
    },
    {
        "title": "Liver transplant",
        "url": "/specialty/gastroenterology/liver-transplant",
        "description": "Liver transplant - Gastroenterology clinical information, diagnosis, and management guidelines.",
        "keywords": "liver transplant, transplant, liver, outpatient setting, gastroenterology"
    },
    {
        "title": "Emergency Room",
        "url": "/specialty/gastroenterology/emergency-room",
        "description": "Emergency Room - Gastroenterology clinical information, diagnosis, and management guidelines.",
        "keywords": "emergency, emergency room, gastroenterology, room"
    },
    {
        "title": "GI Hemorrahage",
        "url": "/specialty/gastroenterology/gi-hemorrahage",
        "description": "GI Hemorrahage - Gastroenterology clinical information, diagnosis, and management guidelines.",
        "keywords": "hemorrahage, gi hemorrahage, emergency room, gastroenterology"
    },
    {
        "title": "Acute pancreatitis",
        "url": "/specialty/gastroenterology/acute-pancreatitis",
        "description": "Acute pancreatitis - Gastroenterology clinical information, diagnosis, and management guidelines.",
        "keywords": "pancreatitis, acute pancreatitis, emergency room, gastroenterology, acute"
    },
    {
        "title": "Infective gastroenteritis",
        "url": "/specialty/gastroenterology/infective-gastroenteritis",
        "description": "Infective gastroenteritis - Gastroenterology clinical information, diagnosis, and management guidelines.",
        "keywords": "infective gastroenteritis, infective, gastroenteritis, emergency room, gastroenterology"
    },
    {
        "title": "Clostridioides dificile",
        "url": "/specialty/gastroenterology/clostridioides-dificile",
        "description": "Clostridioides dificile - Gastroenterology clinical information, diagnosis, and management guidelines.",
        "keywords": "dificile, clostridioides, clostridioides dificile, emergency room, gastroenterology"
    },
    {
        "title": "Ischaemic bowel disease",
        "url": "/specialty/gastroenterology/ischaemic-bowel-disease",
        "description": "Ischaemic bowel disease - Gastroenterology clinical information, diagnosis, and management guidelines.",
        "keywords": "ischaemic, bowel, disease, ischaemic bowel disease, emergency room, gastroenterology"
    },
    {
        "title": "Hepatic decompensation",
        "url": "/specialty/gastroenterology/hepatic-decompensation",
        "description": "Hepatic decompensation - Gastroenterology clinical information, diagnosis, and management guidelines.",
        "keywords": "hepatic decompensation, decompensation, emergency room, gastroenterology, hepatic"
    },
    {
        "title": "GI and Hepatic toxicity",
        "url": "/specialty/gastroenterology/gi-and-hepatic-toxicity",
        "description": "GI and Hepatic toxicity - Gastroenterology clinical information, diagnosis, and management guidelines.",
        "keywords": "and, toxicity, gi and hepatic toxicity, emergency room, gastroenterology, hepatic"
    },
    {
        "title": "Hospitalization",
        "url": "/specialty/gastroenterology/hospitalization",
        "description": "Hospitalization - Gastroenterology clinical information, diagnosis, and management guidelines.",
        "keywords": "hospitalization, gastroenterology"
    },
    {
        "title": "Severe GI bleeding requiring intervention",
        "url": "/specialty/gastroenterology/severe-gi-bleeding-requiring-intervention",
        "description": "Severe GI bleeding requiring intervention - Gastroenterology clinical information, diagnosis, and management guidelines.",
        "keywords": "bleeding, severe, severe gi bleeding requiring intervention, intervention, requiring, hospitalization, gastroenterology"
    },
    {
        "title": "Acute liver failure",
        "url": "/specialty/gastroenterology/acute-liver-failure",
        "description": "Acute liver failure - Gastroenterology clinical information, diagnosis, and management guidelines.",
        "keywords": "acute liver failure, failure, liver, hospitalization, gastroenterology, acute"
    },
    {
        "title": "Severe acute pancreatitis with complications",
        "url": "/specialty/gastroenterology/severe-acute-pancreatitis-with-complications",
        "description": "Severe acute pancreatitis with complications - Gastroenterology clinical information, diagnosis, and management guidelines.",
        "keywords": "severe acute pancreatitis with complications, complications, severe, pancreatitis, hospitalization, with, gastroenterology, acute"
    },
    {
        "title": "Advanced liver disease with decompensation",
        "url": "/specialty/gastroenterology/advanced-liver-disease-with-decompensation",
        "description": "Advanced liver disease with decompensation - Gastroenterology clinical information, diagnosis, and management guidelines.",
        "keywords": "advanced liver disease with decompensation, disease, advanced, decompensation, liver, hospitalization, with, gastroenterology"
    },
    {
        "title": "Liver transplant complications",
        "url": "/specialty/gastroenterology/liver-transplant-complications",
        "description": "Liver transplant complications - Gastroenterology clinical information, diagnosis, and management guidelines.",
        "keywords": "liver transplant complications, complications, transplant, liver, hospitalization, gastroenterology"
    },
    {
        "title": "GI malignancy complications",
        "url": "/specialty/gastroenterology/gi-malignancy-complications",
        "description": "GI malignancy complications - Gastroenterology clinical information, diagnosis, and management guidelines.",
        "keywords": "complications, hospitalization, gi malignancy complications, malignancy, gastroenterology"
    },
    {
        "title": "Complicated inflammatory bowel disease",
        "url": "/specialty/gastroenterology/complicated-inflammatory-bowel-disease",
        "description": "Complicated inflammatory bowel disease - Gastroenterology clinical information, diagnosis, and management guidelines.",
        "keywords": "complicated, bowel, disease, complicated inflammatory bowel disease, inflammatory, hospitalization, gastroenterology"
    },
    {
        "title": "Severe Clostridioides difficile colitis",
        "url": "/specialty/gastroenterology/severe-clostridioides-difficile-colitis",
        "description": "Severe Clostridioides difficile colitis - Gastroenterology clinical information, diagnosis, and management guidelines.",
        "keywords": "severe, clostridioides, colitis, severe clostridioides difficile colitis, hospitalization, difficile, gastroenterology"
    },
    {
        "title": "Invite me a coffee",
        "url": "/specialty/gastroenterology/invite-me-a-coffee",
        "description": "Invite me a coffee - Gastroenterology clinical information, diagnosis, and management guidelines.",
        "keywords": "gastroenterology, coffee, invite me a coffee, invite"
    },
    {
        "title": "Upper respiratory tract infections](",
        "url": "/specialty/infectious_disease/upper-respiratory-tract-infections",
        "description": "Upper respiratory tract infections]( - Infectious Disease clinical information, diagnosis, and management guidelines.",
        "keywords": "infections, respiratory, upper respiratory tract infections](, tract, upper, infectious disease, outpatient setting, infectious_disease"
    },
    {
        "title": "UTIs](",
        "url": "/specialty/infectious_disease/utis",
        "description": "UTIs]( - Infectious Disease clinical information, diagnosis, and management guidelines.",
        "keywords": "utis, utis](, infectious disease, outpatient setting, infectious_disease"
    },
    {
        "title": "Skin infections](",
        "url": "/specialty/infectious_disease/skin-infections",
        "description": "Skin infections]( - Infectious Disease clinical information, diagnosis, and management guidelines.",
        "keywords": "infections, skin infections](, skin, infectious disease, outpatient setting, infectious_disease"
    },
    {
        "title": "Outpatient infectious disease](",
        "url": "/specialty/infectious_disease/outpatient-infectious-disease",
        "description": "Outpatient infectious disease]( - Infectious Disease clinical information, diagnosis, and management guidelines.",
        "keywords": "outpatient infectious disease](, outpatient, disease, infectious disease, outpatient setting, infectious_disease, infectious"
    },
    {
        "title": "Adult immunizations](",
        "url": "/specialty/infectious_disease/adult-immunizations",
        "description": "Adult immunizations]( - Infectious Disease clinical information, diagnosis, and management guidelines.",
        "keywords": "immunizations, adult immunizations](, adult, infectious disease, outpatient setting, infectious_disease"
    },
    {
        "title": "Antibiotics](",
        "url": "/specialty/infectious_disease/antibiotics",
        "description": "Antibiotics]( - Infectious Disease clinical information, diagnosis, and management guidelines.",
        "keywords": "antibiotics, antibiotics](, infectious disease, outpatient setting, infectious_disease"
    },
    {
        "title": "Lower respiratory infections](",
        "url": "/specialty/infectious_disease/lower-respiratory-infections",
        "description": "Lower respiratory infections]( - Infectious Disease clinical information, diagnosis, and management guidelines.",
        "keywords": "infections, lower respiratory infections](, lower, respiratory, infectious disease, outpatient setting, infectious_disease"
    },
    {
        "title": "Sexually transmitted infections](",
        "url": "/specialty/infectious_disease/sexually-transmitted-infections",
        "description": "Sexually transmitted infections]( - Infectious Disease clinical information, diagnosis, and management guidelines.",
        "keywords": "sexually, infections, transmitted, sexually transmitted infections](, infectious disease, outpatient setting, infectious_disease"
    },
    {
        "title": "Infectious diarrhea](",
        "url": "/specialty/infectious_disease/infectious-diarrhea",
        "description": "Infectious diarrhea]( - Infectious Disease clinical information, diagnosis, and management guidelines.",
        "keywords": "infectious diarrhea](, diarrhea, infectious disease, outpatient setting, infectious_disease, infectious"
    },
    {
        "title": "Travel medicine](",
        "url": "/specialty/infectious_disease/travel-medicine",
        "description": "Travel medicine]( - Infectious Disease clinical information, diagnosis, and management guidelines.",
        "keywords": "travel medicine](, medicine, travel, infectious disease, outpatient setting, infectious_disease"
    },
    {
        "title": "Eye infections](",
        "url": "/specialty/infectious_disease/eye-infections",
        "description": "Eye infections]( - Infectious Disease clinical information, diagnosis, and management guidelines.",
        "keywords": "infections, eye, eye infections](, infectious disease, outpatient setting, infectious_disease"
    },
    {
        "title": "Head and neck infections](",
        "url": "/specialty/infectious_disease/head-and-neck-infections",
        "description": "Head and neck infections]( - Infectious Disease clinical information, diagnosis, and management guidelines.",
        "keywords": "infections, and, neck, head, head and neck infections](, infectious disease, outpatient setting, infectious_disease"
    },
    {
        "title": "Herpes and influenza therapy](",
        "url": "/specialty/infectious_disease/herpes-and-influenza-therapy",
        "description": "Herpes and influenza therapy]( - Infectious Disease clinical information, diagnosis, and management guidelines.",
        "keywords": "herpes and influenza therapy](, influenza, and, herpes, therapy, infectious disease, outpatient setting, infectious_disease"
    },
    {
        "title": "Tuberculosis](",
        "url": "/specialty/infectious_disease/tuberculosis",
        "description": "Tuberculosis]( - Infectious Disease clinical information, diagnosis, and management guidelines.",
        "keywords": "tuberculosis, tuberculosis](, infectious disease, outpatient setting, infectious_disease"
    },
    {
        "title": "Viral Hepatitis](",
        "url": "/specialty/infectious_disease/viral-hepatitis",
        "description": "Viral Hepatitis]( - Infectious Disease clinical information, diagnosis, and management guidelines.",
        "keywords": "hepatitis, viral, infectious disease, outpatient setting, viral hepatitis](, infectious_disease"
    },
    {
        "title": "Bone and Joint infections](",
        "url": "/specialty/infectious_disease/bone-and-joint-infections",
        "description": "Bone and Joint infections]( - Infectious Disease clinical information, diagnosis, and management guidelines.",
        "keywords": "infections, and, joint, infectious disease, bone and joint infections](, bone, outpatient setting, infectious_disease"
    },
    {
        "title": "Management of non-tuberculous mycobacteria](",
        "url": "/specialty/infectious_disease/management-of-nontuberculous-mycobacteria",
        "description": "Management of non-tuberculous mycobacteria]( - Infectious Disease clinical information, diagnosis, and management guidelines.",
        "keywords": "mycobacteria, management of non-tuberculous mycobacteria](, management, tuberculous, non, infectious disease, outpatient setting, infectious_disease"
    },
    {
        "title": "Antifungal Therapy](",
        "url": "/specialty/infectious_disease/antifungal-therapy",
        "description": "Antifungal Therapy]( - Infectious Disease clinical information, diagnosis, and management guidelines.",
        "keywords": "antifungal therapy](, therapy, antifungal, infectious disease, outpatient setting, infectious_disease"
    },
    {
        "title": "parasitology](",
        "url": "/specialty/infectious_disease/parasitology",
        "description": "parasitology]( - Infectious Disease clinical information, diagnosis, and management guidelines.",
        "keywords": "parasitology](, parasitology, infectious disease, outpatient setting, infectious_disease"
    },
    {
        "title": "Healthcare epidemiology and infection control](",
        "url": "/specialty/infectious_disease/healthcare-epidemiology-and-infection-control",
        "description": "Healthcare epidemiology and infection control]( - Infectious Disease clinical information, diagnosis, and management guidelines.",
        "keywords": "healthcare, epidemiology, and, control, infection, healthcare epidemiology and infection control](, infectious disease, outpatient setting, infectious_disease"
    },
    {
        "title": "HIV resistance testing](",
        "url": "/specialty/infectious_disease/hiv-resistance-testing",
        "description": "HIV resistance testing]( - Infectious Disease clinical information, diagnosis, and management guidelines.",
        "keywords": "testing, hiv, infectious disease, outpatient setting, hiv resistance testing](, infectious_disease, resistance"
    },
    {
        "title": "Thick borne diseases](",
        "url": "/specialty/infectious_disease/thick-borne-diseases",
        "description": "Thick borne diseases]( - Infectious Disease clinical information, diagnosis, and management guidelines.",
        "keywords": "borne, diseases, thick, thick borne diseases](, infectious disease, outpatient setting, infectious_disease"
    },
    {
        "title": "Emerging zoonoses](",
        "url": "/specialty/infectious_disease/emerging-zoonoses",
        "description": "Emerging zoonoses]( - Infectious Disease clinical information, diagnosis, and management guidelines.",
        "keywords": "zoonoses, emerging, emerging zoonoses](, infectious disease, outpatient setting, infectious_disease"
    },
    {
        "title": "congenital immunodeficiencies in adults](",
        "url": "/specialty/infectious_disease/congenital-immunodeficiencies-in-adults",
        "description": "congenital immunodeficiencies in adults]( - Infectious Disease clinical information, diagnosis, and management guidelines.",
        "keywords": "immunodeficiencies, congenital, adults, congenital immunodeficiencies in adults](, infectious disease, outpatient setting, infectious_disease"
    },
    {
        "title": "CMV, EBV and HHV 6-8 infections](",
        "url": "/specialty/infectious_disease/cmv-ebv-and-hhv-68-infections",
        "description": "CMV, EBV and HHV 6-8 infections]( - Infectious Disease clinical information, diagnosis, and management guidelines.",
        "keywords": "infections, cmv, ebv and hhv 6-8 infections](, and, ebv, hhv, infectious disease, outpatient setting, infectious_disease, cmv"
    },
    {
        "title": "HTLV-1, prion diseases](",
        "url": "/specialty/infectious_disease/htlv1-prion-diseases",
        "description": "HTLV-1, prion diseases]( - Infectious Disease clinical information, diagnosis, and management guidelines.",
        "keywords": "prion, diseases, htlv, htlv-1, prion diseases](, infectious disease, outpatient setting, infectious_disease"
    },
    {
        "title": "Hiv diagnosis and initial evaluation](",
        "url": "/specialty/infectious_disease/hiv-diagnosis-and-initial-evaluation",
        "description": "Hiv diagnosis and initial evaluation]( - Infectious Disease clinical information, diagnosis, and management guidelines.",
        "keywords": "and, initial, diagnosis, evaluation, hiv, hiv diagnosis and initial evaluation](, infectious disease, outpatient setting, infectious_disease"
    },
    {
        "title": "treatment and prevention of HIV](",
        "url": "/specialty/infectious_disease/treatment-and-prevention-of-hiv",
        "description": "treatment and prevention of HIV]( - Infectious Disease clinical information, diagnosis, and management guidelines.",
        "keywords": "prevention, treatment, and, hiv, infectious disease, outpatient setting, treatment and prevention of hiv](, infectious_disease"
    },
    {
        "title": "Viral hemorrhagic fevers](",
        "url": "/specialty/infectious_disease/viral-hemorrhagic-fevers",
        "description": "Viral hemorrhagic fevers]( - Infectious Disease clinical information, diagnosis, and management guidelines.",
        "keywords": "hemorrhagic, viral, fevers, viral hemorrhagic fevers](, infectious disease, outpatient setting, infectious_disease"
    },
    {
        "title": "Emergency Room",
        "url": "/specialty/infectious_disease/emergency-room",
        "description": "Emergency Room - Infectious Disease clinical information, diagnosis, and management guidelines.",
        "keywords": "infectious_disease, emergency, emergency room, infectious disease, room"
    },
    {
        "title": "Meningitis and encephalitis](",
        "url": "/specialty/infectious_disease/meningitis-and-encephalitis",
        "description": "Meningitis and encephalitis]( - Infectious Disease clinical information, diagnosis, and management guidelines.",
        "keywords": "and, encephalitis, meningitis and encephalitis](, infectious disease, emergency room, meningitis, infectious_disease"
    },
    {
        "title": "Central neruvous system infections](",
        "url": "/specialty/infectious_disease/central-neruvous-system-infections",
        "description": "Central neruvous system infections]( - Infectious Disease clinical information, diagnosis, and management guidelines.",
        "keywords": "infections, central, system, neruvous, central neruvous system infections](, infectious disease, emergency room, infectious_disease"
    },
    {
        "title": "Endocarditis](",
        "url": "/specialty/infectious_disease/endocarditis",
        "description": "Endocarditis]( - Infectious Disease clinical information, diagnosis, and management guidelines.",
        "keywords": "endocarditis, endocarditis](, infectious disease, emergency room, infectious_disease"
    },
    {
        "title": "Fever of unknown origin](",
        "url": "/specialty/infectious_disease/fever-of-unknown-origin",
        "description": "Fever of unknown origin]( - Infectious Disease clinical information, diagnosis, and management guidelines.",
        "keywords": "unknown, origin, fever of unknown origin](, infectious disease, emergency room, fever, infectious_disease"
    },
    {
        "title": "Staph aureus infection treatment](",
        "url": "/specialty/infectious_disease/staph-aureus-infection-treatment",
        "description": "Staph aureus infection treatment]( - Infectious Disease clinical information, diagnosis, and management guidelines.",
        "keywords": "emergency room, treatment, aureus, staph, infection, infectious disease, staph aureus infection treatment](, infectious_disease"
    },
    {
        "title": "Hospitalization",
        "url": "/specialty/infectious_disease/hospitalization",
        "description": "Hospitalization - Infectious Disease clinical information, diagnosis, and management guidelines.",
        "keywords": "hospitalization, infectious disease, infectious_disease"
    },
    {
        "title": "Miscellaneous infections in immunocompromised hosts](",
        "url": "/specialty/infectious_disease/miscellaneous-infections-in-immunocompromised-hosts",
        "description": "Miscellaneous infections in immunocompromised hosts]( - Infectious Disease clinical information, diagnosis, and management guidelines.",
        "keywords": "miscellaneous infections in immunocompromised hosts](, infections, hosts, hospitalization, immunocompromised, infectious disease, miscellaneous, infectious_disease"
    },
    {
        "title": "Transplant infectious diseases](",
        "url": "/specialty/infectious_disease/transplant-infectious-diseases",
        "description": "Transplant infectious diseases]( - Infectious Disease clinical information, diagnosis, and management guidelines.",
        "keywords": "transplant infectious diseases](, diseases, transplant, hospitalization, infectious disease, infectious_disease, infectious"
    },
    {
        "title": "Infectious complications of immunomodulators](",
        "url": "/specialty/infectious_disease/infectious-complications-of-immunomodulators",
        "description": "Infectious complications of immunomodulators]( - Infectious Disease clinical information, diagnosis, and management guidelines.",
        "keywords": "complications, immunomodulators, hospitalization, infectious disease, infectious complications of immunomodulators](, infectious_disease, infectious"
    },
    {
        "title": "Invite me a coffee",
        "url": "/specialty/infectious_disease/invite-me-a-coffee",
        "description": "Invite me a coffee - Infectious Disease clinical information, diagnosis, and management guidelines.",
        "keywords": "invite, coffee, invite me a coffee, infectious disease, infectious_disease"
    },
    {
        "title": "Osteoarthritis",
        "url": "/specialty/rheumatology/osteoarthritis",
        "description": "Osteoarthritis - Rheumatology clinical information, diagnosis, and management guidelines.",
        "keywords": "osteoarthritis, outpatient setting, rheumatology"
    },
    {
        "title": "Low back pain and leg pain",
        "url": "/specialty/rheumatology/low-back-pain-and-leg-pain",
        "description": "Low back pain and leg pain - Rheumatology clinical information, diagnosis, and management guidelines.",
        "keywords": "leg, and, rheumatology, low, low back pain and leg pain, pain, outpatient setting, back"
    },
    {
        "title": "Common clinical conditions in the elbow, wrist and Hand",
        "url": "/specialty/rheumatology/common-clinical-conditions-in-the-elbow-wrist-and-hand",
        "description": "Common clinical conditions in the elbow, wrist and Hand - Rheumatology clinical information, diagnosis, and management guidelines.",
        "keywords": "and, hand, wrist, rheumatology, elbow, conditions, the, common, clinical, outpatient setting, common clinical conditions in the elbow, wrist and hand"
    },
    {
        "title": "The knee and shoulder",
        "url": "/specialty/rheumatology/the-knee-and-shoulder",
        "description": "The knee and shoulder - Rheumatology clinical information, diagnosis, and management guidelines.",
        "keywords": "and, knee, the knee and shoulder, rheumatology, shoulder, the, outpatient setting"
    },
    {
        "title": "Common foot and ankle disorders",
        "url": "/specialty/rheumatology/common-foot-and-ankle-disorders",
        "description": "Common foot and ankle disorders - Rheumatology clinical information, diagnosis, and management guidelines.",
        "keywords": "and, ankle, rheumatology, common, foot, disorders, common foot and ankle disorders, outpatient setting"
    },
    {
        "title": "Osteoporosis",
        "url": "/specialty/rheumatology/osteoporosis",
        "description": "Osteoporosis - Rheumatology clinical information, diagnosis, and management guidelines.",
        "keywords": "rheumatology, osteoporosis, outpatient setting"
    },
    {
        "title": "Rheumatoid arthritis",
        "url": "/specialty/rheumatology/rheumatoid-arthritis",
        "description": "Rheumatoid arthritis - Rheumatology clinical information, diagnosis, and management guidelines.",
        "keywords": "rheumatoid, rheumatology, rheumatoid arthritis, arthritis, outpatient setting"
    },
    {
        "title": "Pathogenesis",
        "url": "/specialty/rheumatology/pathogenesis",
        "description": "Pathogenesis - Rheumatology clinical information, diagnosis, and management guidelines.",
        "keywords": "rheumatology, pathogenesis, outpatient setting"
    },
    {
        "title": "Treatment",
        "url": "/specialty/rheumatology/treatment",
        "description": "Treatment - Rheumatology clinical information, diagnosis, and management guidelines.",
        "keywords": "rheumatology, treatment, outpatient setting"
    },
    {
        "title": "Imaging of arthritis",
        "url": "/specialty/rheumatology/imaging-of-arthritis",
        "description": "Imaging of arthritis - Rheumatology clinical information, diagnosis, and management guidelines.",
        "keywords": "rheumatology, imaging, imaging of arthritis, arthritis, outpatient setting"
    },
    {
        "title": "Crystal-related pain management",
        "url": "/specialty/rheumatology/crystalrelated-pain-management",
        "description": "Crystal-related pain management - Rheumatology clinical information, diagnosis, and management guidelines.",
        "keywords": "related, crystal-related pain management, rheumatology, management, pain, outpatient setting, crystal"
    },
    {
        "title": "Interventional pain management",
        "url": "/specialty/rheumatology/interventional-pain-management",
        "description": "Interventional pain management - Rheumatology clinical information, diagnosis, and management guidelines.",
        "keywords": "interventional, rheumatology, interventional pain management, management, pain, outpatient setting"
    },
    {
        "title": "Preventing infections",
        "url": "/specialty/rheumatology/preventing-infections",
        "description": "Preventing infections - Rheumatology clinical information, diagnosis, and management guidelines.",
        "keywords": "infections, preventing, preventing infections, rheumatology, outpatient setting"
    },
    {
        "title": "Psoriatic arthritis",
        "url": "/specialty/rheumatology/psoriatic-arthritis",
        "description": "Psoriatic arthritis - Rheumatology clinical information, diagnosis, and management guidelines.",
        "keywords": "rheumatology, arthritis, psoriatic arthritis, outpatient setting, psoriatic"
    },
    {
        "title": "Axial Spondyloarthritis",
        "url": "/specialty/rheumatology/axial-spondyloarthritis",
        "description": "Axial Spondyloarthritis - Rheumatology clinical information, diagnosis, and management guidelines.",
        "keywords": "axial, rheumatology, spondyloarthritis, outpatient setting, axial spondyloarthritis"
    },
    {
        "title": "Sjogren disease",
        "url": "/specialty/rheumatology/sjogren-disease",
        "description": "Sjogren disease - Rheumatology clinical information, diagnosis, and management guidelines.",
        "keywords": "sjogren disease, rheumatology, sjogren, disease, outpatient setting"
    },
    {
        "title": "Lyme disease",
        "url": "/specialty/rheumatology/lyme-disease",
        "description": "Lyme disease - Rheumatology clinical information, diagnosis, and management guidelines.",
        "keywords": "rheumatology, lyme, lyme disease, disease, outpatient setting"
    },
    {
        "title": "Systemic Lupus erythematosus",
        "url": "/specialty/rheumatology/systemic-lupus-erythematosus",
        "description": "Systemic Lupus erythematosus - Rheumatology clinical information, diagnosis, and management guidelines.",
        "keywords": "rheumatology, systemic lupus erythematosus, systemic, lupus, outpatient setting, erythematosus"
    },
    {
        "title": "Scleroderma",
        "url": "/specialty/rheumatology/scleroderma",
        "description": "Scleroderma - Rheumatology clinical information, diagnosis, and management guidelines.",
        "keywords": "scleroderma, outpatient setting, rheumatology"
    },
    {
        "title": "Basic science for the Rheumatologist",
        "url": "/specialty/rheumatology/basic-science-for-the-rheumatologist",
        "description": "Basic science for the Rheumatologist - Rheumatology clinical information, diagnosis, and management guidelines.",
        "keywords": "basic, rheumatologist, rheumatology, science, for, the, outpatient setting, basic science for the rheumatologist"
    },
    {
        "title": "Pediatric Rheumatology",
        "url": "/specialty/rheumatology/pediatric-rheumatology",
        "description": "Pediatric Rheumatology - Rheumatology clinical information, diagnosis, and management guidelines.",
        "keywords": "rheumatology, pediatric, outpatient setting, pediatric rheumatology"
    },
    {
        "title": "Brief encounters with unusual rheumatic diseases",
        "url": "/specialty/rheumatology/brief-encounters-with-unusual-rheumatic-diseases",
        "description": "Brief encounters with unusual rheumatic diseases - Rheumatology clinical information, diagnosis, and management guidelines.",
        "keywords": "diseases, rheumatic, rheumatology, encounters, brief encounters with unusual rheumatic diseases, brief, outpatient setting, with, unusual"
    },
    {
        "title": "Antiphospholipid Syndrome",
        "url": "/specialty/rheumatology/antiphospholipid-syndrome",
        "description": "Antiphospholipid Syndrome - Rheumatology clinical information, diagnosis, and management guidelines.",
        "keywords": "antiphospholipid, rheumatology, antiphospholipid syndrome, syndrome, outpatient setting"
    },
    {
        "title": "Pregnancy in rheumatic disease",
        "url": "/specialty/rheumatology/pregnancy-in-rheumatic-disease",
        "description": "Pregnancy in rheumatic disease - Rheumatology clinical information, diagnosis, and management guidelines.",
        "keywords": "rheumatic, rheumatology, disease, pregnancy, pregnancy in rheumatic disease, outpatient setting"
    },
    {
        "title": "Idiopathic inflammatory myopathies",
        "url": "/specialty/rheumatology/idiopathic-inflammatory-myopathies",
        "description": "Idiopathic inflammatory myopathies - Rheumatology clinical information, diagnosis, and management guidelines.",
        "keywords": "idiopathic, rheumatology, idiopathic inflammatory myopathies, myopathies, inflammatory, outpatient setting"
    },
    {
        "title": "Autoinflammatory diseases",
        "url": "/specialty/rheumatology/autoinflammatory-diseases",
        "description": "Autoinflammatory diseases - Rheumatology clinical information, diagnosis, and management guidelines.",
        "keywords": "diseases, rheumatology, autoinflammatory diseases, autoinflammatory, outpatient setting"
    },
    {
        "title": "Challenges in dermato-rheumatology",
        "url": "/specialty/rheumatology/challenges-in-dermatorheumatology",
        "description": "Challenges in dermato-rheumatology - Rheumatology clinical information, diagnosis, and management guidelines.",
        "keywords": "challenges, rheumatology, challenges in dermato-rheumatology, dermato, outpatient setting"
    },
    {
        "title": "Sarcoidosis",
        "url": "/specialty/rheumatology/sarcoidosis",
        "description": "Sarcoidosis - Rheumatology clinical information, diagnosis, and management guidelines.",
        "keywords": "rheumatology, outpatient setting, sarcoidosis"
    },
    {
        "title": "Systemic rheumatic syndromes",
        "url": "/specialty/rheumatology/systemic-rheumatic-syndromes",
        "description": "Systemic rheumatic syndromes - Rheumatology clinical information, diagnosis, and management guidelines.",
        "keywords": "syndromes, rheumatic, rheumatology, systemic, systemic rheumatic syndromes, outpatient setting"
    },
    {
        "title": "Rheumatic syndromes with cancer immunotherapy",
        "url": "/specialty/rheumatology/rheumatic-syndromes-with-cancer-immunotherapy",
        "description": "Rheumatic syndromes with cancer immunotherapy - Rheumatology clinical information, diagnosis, and management guidelines.",
        "keywords": "syndromes, rheumatic, rheumatic syndromes with cancer immunotherapy, rheumatology, cancer, immunotherapy, outpatient setting, with"
    },
    {
        "title": "Pulmonary involvement in rheumatic diseases",
        "url": "/specialty/rheumatology/pulmonary-involvement-in-rheumatic-diseases",
        "description": "Pulmonary involvement in rheumatic diseases - Rheumatology clinical information, diagnosis, and management guidelines.",
        "keywords": "diseases, pulmonary, rheumatic, pulmonary involvement in rheumatic diseases, rheumatology, outpatient setting, involvement"
    },
    {
        "title": "Large vessel vasculitis",
        "url": "/specialty/rheumatology/large-vessel-vasculitis",
        "description": "Large vessel vasculitis - Rheumatology clinical information, diagnosis, and management guidelines.",
        "keywords": "vasculitis, rheumatology, vessel, large, outpatient setting, large vessel vasculitis"
    },
    {
        "title": "ANCA-associated vasculitis",
        "url": "/specialty/rheumatology/ancaassociated-vasculitis",
        "description": "ANCA-associated vasculitis - Rheumatology clinical information, diagnosis, and management guidelines.",
        "keywords": "vasculitis, rheumatology, anca, anca-associated vasculitis, associated, outpatient setting"
    },
    {
        "title": "Vasculitic syndromes",
        "url": "/specialty/rheumatology/vasculitic-syndromes",
        "description": "Vasculitic syndromes - Rheumatology clinical information, diagnosis, and management guidelines.",
        "keywords": "syndromes, rheumatology, vasculitic, vasculitic syndromes, outpatient setting"
    },
    {
        "title": "Emergency Room",
        "url": "/specialty/rheumatology/emergency-room",
        "description": "Emergency Room - Rheumatology clinical information, diagnosis, and management guidelines.",
        "keywords": "rheumatology, emergency, emergency room, room"
    },
    {
        "title": "Septic arthritis",
        "url": "/specialty/rheumatology/septic-arthritis",
        "description": "Septic arthritis - Rheumatology clinical information, diagnosis, and management guidelines.",
        "keywords": "rheumatology, septic, septic arthritis, arthritis, emergency room"
    },
    {
        "title": "Acute lupus flare",
        "url": "/specialty/rheumatology/acute-lupus-flare",
        "description": "Acute lupus flare - Rheumatology clinical information, diagnosis, and management guidelines.",
        "keywords": "rheumatology, flare, lupus, emergency room, acute lupus flare, acute"
    },
    {
        "title": "Acute vasculitis",
        "url": "/specialty/rheumatology/acute-vasculitis",
        "description": "Acute vasculitis - Rheumatology clinical information, diagnosis, and management guidelines.",
        "keywords": "vasculitis, rheumatology, acute vasculitis, emergency room, acute"
    },
    {
        "title": "Acute joint swelling",
        "url": "/specialty/rheumatology/acute-joint-swelling",
        "description": "Acute joint swelling - Rheumatology clinical information, diagnosis, and management guidelines.",
        "keywords": "rheumatology, joint, swelling, acute joint swelling, emergency room, acute"
    },
    {
        "title": "Acute crystal arthropathy",
        "url": "/specialty/rheumatology/acute-crystal-arthropathy",
        "description": "Acute crystal arthropathy - Rheumatology clinical information, diagnosis, and management guidelines.",
        "keywords": "rheumatology, arthropathy, acute crystal arthropathy, emergency room, crystal, acute"
    },
    {
        "title": "Severe systemic lupus complications",
        "url": "/specialty/rheumatology/severe-systemic-lupus-complications",
        "description": "Severe systemic lupus complications - Rheumatology clinical information, diagnosis, and management guidelines.",
        "keywords": "severe systemic lupus complications, complications, severe, rheumatology, systemic, lupus, emergency room"
    },
    {
        "title": "Acute scleroderma crisis",
        "url": "/specialty/rheumatology/acute-scleroderma-crisis",
        "description": "Acute scleroderma crisis - Rheumatology clinical information, diagnosis, and management guidelines.",
        "keywords": "rheumatology, acute scleroderma crisis, crisis, scleroderma, emergency room, acute"
    },
    {
        "title": "Acute inflammatory arthritis",
        "url": "/specialty/rheumatology/acute-inflammatory-arthritis",
        "description": "Acute inflammatory arthritis - Rheumatology clinical information, diagnosis, and management guidelines.",
        "keywords": "rheumatology, inflammatory, arthritis, acute inflammatory arthritis, emergency room, acute"
    },
    {
        "title": "Drug-induced lupus",
        "url": "/specialty/rheumatology/druginduced-lupus",
        "description": "Drug-induced lupus - Rheumatology clinical information, diagnosis, and management guidelines.",
        "keywords": "rheumatology, induced, drug, drug-induced lupus, lupus, emergency room"
    },
    {
        "title": "Hospitalization",
        "url": "/specialty/rheumatology/hospitalization",
        "description": "Hospitalization - Rheumatology clinical information, diagnosis, and management guidelines.",
        "keywords": "hospitalization, rheumatology"
    },
    {
        "title": "Severe lupus nephritis",
        "url": "/specialty/rheumatology/severe-lupus-nephritis",
        "description": "Severe lupus nephritis - Rheumatology clinical information, diagnosis, and management guidelines.",
        "keywords": "lupus, severe, rheumatology, hospitalization, severe lupus nephritis, nephritis"
    },
    {
        "title": "Severe vasculitis complications",
        "url": "/specialty/rheumatology/severe-vasculitis-complications",
        "description": "Severe vasculitis complications - Rheumatology clinical information, diagnosis, and management guidelines.",
        "keywords": "severe vasculitis complications, complications, vasculitis, severe, rheumatology, hospitalization"
    },
    {
        "title": "Complicated septic arthritis",
        "url": "/specialty/rheumatology/complicated-septic-arthritis",
        "description": "Complicated septic arthritis - Rheumatology clinical information, diagnosis, and management guidelines.",
        "keywords": "rheumatology, complicated, septic, complicated septic arthritis, hospitalization, arthritis"
    },
    {
        "title": "Severe autoimmune complications",
        "url": "/specialty/rheumatology/severe-autoimmune-complications",
        "description": "Severe autoimmune complications - Rheumatology clinical information, diagnosis, and management guidelines.",
        "keywords": "complications, severe, rheumatology, autoimmune, hospitalization, severe autoimmune complications"
    },
    {
        "title": "Complex rheumatoid arthritis management",
        "url": "/specialty/rheumatology/complex-rheumatoid-arthritis-management",
        "description": "Complex rheumatoid arthritis management - Rheumatology clinical information, diagnosis, and management guidelines.",
        "keywords": "rheumatoid, rheumatology, management, complex, hospitalization, arthritis, complex rheumatoid arthritis management"
    },
    {
        "title": "Severe scleroderma manifestations",
        "url": "/specialty/rheumatology/severe-scleroderma-manifestations",
        "description": "Severe scleroderma manifestations - Rheumatology clinical information, diagnosis, and management guidelines.",
        "keywords": "severe scleroderma manifestations, manifestations, severe, rheumatology, hospitalization, scleroderma"
    },
    {
        "title": "Life-threatening vasculitis",
        "url": "/specialty/rheumatology/lifethreatening-vasculitis",
        "description": "Life-threatening vasculitis - Rheumatology clinical information, diagnosis, and management guidelines.",
        "keywords": "vasculitis, rheumatology, life-threatening vasculitis, life, hospitalization, threatening"
    },
    {
        "title": "Severe myositis",
        "url": "/specialty/rheumatology/severe-myositis",
        "description": "Severe myositis - Rheumatology clinical information, diagnosis, and management guidelines.",
        "keywords": "myositis, rheumatology, severe, hospitalization, severe myositis"
    },
    {
        "title": "Complex autoimmune disease management",
        "url": "/specialty/rheumatology/complex-autoimmune-disease-management",
        "description": "Complex autoimmune disease management - Rheumatology clinical information, diagnosis, and management guidelines.",
        "keywords": "complex autoimmune disease management, rheumatology, autoimmune, management, disease, complex, hospitalization"
    },
    {
        "title": "Severe inflammatory arthritis",
        "url": "/specialty/rheumatology/severe-inflammatory-arthritis",
        "description": "Severe inflammatory arthritis - Rheumatology clinical information, diagnosis, and management guidelines.",
        "keywords": "severe inflammatory arthritis, severe, rheumatology, inflammatory, hospitalization, arthritis"
    },
    {
        "title": "Invite me a coffee",
        "url": "/specialty/rheumatology/invite-me-a-coffee",
        "description": "Invite me a coffee - Rheumatology clinical information, diagnosis, and management guidelines.",
        "keywords": "rheumatology, coffee, invite me a coffee, invite"
    },
    {
        "title": "Diagnosis and Management of Asthma",
        "url": "/specialty/allergy_immunology/diagnosis-and-management-of-asthma",
        "description": "Diagnosis and Management of Asthma - Allergy & Immunology clinical information, diagnosis, and management guidelines.",
        "keywords": "and, asthma, diagnosis, management, allergy & immunology, allergy_immunology, outpatient setting, diagnosis and management of asthma"
    },
    {
        "title": "Rhinitis and (rhino)sinusitis",
        "url": "/specialty/allergy_immunology/rhinitis-and-rhinosinusitis",
        "description": "Rhinitis and (rhino)sinusitis - Allergy & Immunology clinical information, diagnosis, and management guidelines.",
        "keywords": "and, sinusitis, rhino, rhinitis and (rhino)sinusitis, allergy & immunology, allergy_immunology, outpatient setting, rhinitis"
    },
    {
        "title": "Environmental allergens",
        "url": "/specialty/allergy_immunology/environmental-allergens",
        "description": "Environmental allergens - Allergy & Immunology clinical information, diagnosis, and management guidelines.",
        "keywords": "environmental allergens, environmental, allergens, allergy & immunology, allergy_immunology, outpatient setting"
    },
    {
        "title": "Asthma testing and evaluation",
        "url": "/specialty/allergy_immunology/asthma-testing-and-evaluation",
        "description": "Asthma testing and evaluation - Allergy & Immunology clinical information, diagnosis, and management guidelines.",
        "keywords": "and, asthma, evaluation, asthma testing and evaluation, testing, allergy & immunology, allergy_immunology, outpatient setting"
    },
    {
        "title": "Treatment of asthma in children",
        "url": "/specialty/allergy_immunology/treatment-of-asthma-in-children",
        "description": "Treatment of asthma in children - Allergy & Immunology clinical information, diagnosis, and management guidelines.",
        "keywords": "treatment, treatment of asthma in children, children, asthma, allergy & immunology, allergy_immunology, outpatient setting"
    },
    {
        "title": "Food allergy",
        "url": "/specialty/allergy_immunology/food-allergy",
        "description": "Food allergy - Allergy & Immunology clinical information, diagnosis, and management guidelines.",
        "keywords": "food, allergy, allergy & immunology, allergy_immunology, outpatient setting, food allergy"
    },
    {
        "title": "Urticaria",
        "url": "/specialty/allergy_immunology/urticaria",
        "description": "Urticaria - Allergy & Immunology clinical information, diagnosis, and management guidelines.",
        "keywords": "allergy & immunology, allergy_immunology, outpatient setting, urticaria"
    },
    {
        "title": "Contact dermatitis and patch testing",
        "url": "/specialty/allergy_immunology/contact-dermatitis-and-patch-testing",
        "description": "Contact dermatitis and patch testing - Allergy & Immunology clinical information, diagnosis, and management guidelines.",
        "keywords": "dermatitis, and, contact dermatitis and patch testing, patch, outpatient setting, testing, allergy & immunology, allergy_immunology, contact"
    },
    {
        "title": "Ocular allergies",
        "url": "/specialty/allergy_immunology/ocular-allergies",
        "description": "Ocular allergies - Allergy & Immunology clinical information, diagnosis, and management guidelines.",
        "keywords": "ocular, allergies, ocular allergies, allergy & immunology, allergy_immunology, outpatient setting"
    },
    {
        "title": "Beta-lactam allergy",
        "url": "/specialty/allergy_immunology/betalactam-allergy",
        "description": "Beta-lactam allergy - Allergy & Immunology clinical information, diagnosis, and management guidelines.",
        "keywords": "beta, lactam, allergy, allergy & immunology, allergy_immunology, outpatient setting, beta-lactam allergy"
    },
    {
        "title": "In vivo and in vitro testing for hypersensitivity",
        "url": "/specialty/allergy_immunology/in-vivo-and-in-vitro-testing-for-hypersensitivity",
        "description": "In vivo and in vitro testing for hypersensitivity - Allergy & Immunology clinical information, diagnosis, and management guidelines.",
        "keywords": "vitro, and, for, in vivo and in vitro testing for hypersensitivity, hypersensitivity, testing, vivo, allergy & immunology, allergy_immunology, outpatient setting"
    },
    {
        "title": "Dermatology for the Immunologist",
        "url": "/specialty/allergy_immunology/dermatology-for-the-immunologist",
        "description": "Dermatology for the Immunologist - Allergy & Immunology clinical information, diagnosis, and management guidelines.",
        "keywords": "dermatology, dermatology for the immunologist, immunologist, for, the, allergy & immunology, allergy_immunology, outpatient setting"
    },
    {
        "title": "Eosinophilic GI disorders",
        "url": "/specialty/allergy_immunology/eosinophilic-gi-disorders",
        "description": "Eosinophilic GI disorders - Allergy & Immunology clinical information, diagnosis, and management guidelines.",
        "keywords": "eosinophilic, eosinophilic gi disorders, disorders, allergy & immunology, allergy_immunology, outpatient setting"
    },
    {
        "title": "Immunotherapy",
        "url": "/specialty/allergy_immunology/immunotherapy",
        "description": "Immunotherapy - Allergy & Immunology clinical information, diagnosis, and management guidelines.",
        "keywords": "allergy & immunology, allergy_immunology, outpatient setting, immunotherapy"
    },
    {
        "title": "T cells and innate lymphoid cells",
        "url": "/specialty/allergy_immunology/t-cells-and-innate-lymphoid-cells",
        "description": "T cells and innate lymphoid cells - Allergy & Immunology clinical information, diagnosis, and management guidelines.",
        "keywords": "and, lymphoid, t cells and innate lymphoid cells, innate, allergy & immunology, allergy_immunology, outpatient setting, cells"
    },
    {
        "title": "An introduction to B cells and antibodies",
        "url": "/specialty/allergy_immunology/an-introduction-to-b-cells-and-antibodies",
        "description": "An introduction to B cells and antibodies - Allergy & Immunology clinical information, diagnosis, and management guidelines.",
        "keywords": "introduction, and, antibodies, an introduction to b cells and antibodies, allergy & immunology, allergy_immunology, outpatient setting, cells"
    },
    {
        "title": "Regulatory T cells",
        "url": "/specialty/allergy_immunology/regulatory-t-cells",
        "description": "Regulatory T cells - Allergy & Immunology clinical information, diagnosis, and management guidelines.",
        "keywords": "regulatory, allergy & immunology, allergy_immunology, outpatient setting, cells, regulatory t cells"
    },
    {
        "title": "Dendritic cells",
        "url": "/specialty/allergy_immunology/dendritic-cells",
        "description": "Dendritic cells - Allergy & Immunology clinical information, diagnosis, and management guidelines.",
        "keywords": "dendritic cells, dendritic, allergy & immunology, allergy_immunology, outpatient setting, cells"
    },
    {
        "title": "Mucosal immunity and the microbiome",
        "url": "/specialty/allergy_immunology/mucosal-immunity-and-the-microbiome",
        "description": "Mucosal immunity and the microbiome - Allergy & Immunology clinical information, diagnosis, and management guidelines.",
        "keywords": "and, microbiome, mucosal, the, mucosal immunity and the microbiome, allergy & immunology, allergy_immunology, outpatient setting, immunity"
    },
    {
        "title": "Neutrophil Biology",
        "url": "/specialty/allergy_immunology/neutrophil-biology",
        "description": "Neutrophil Biology - Allergy & Immunology clinical information, diagnosis, and management guidelines.",
        "keywords": "biology, neutrophil, neutrophil biology, allergy & immunology, allergy_immunology, outpatient setting"
    },
    {
        "title": "Basophils",
        "url": "/specialty/allergy_immunology/basophils",
        "description": "Basophils - Allergy & Immunology clinical information, diagnosis, and management guidelines.",
        "keywords": "outpatient setting, allergy & immunology, allergy_immunology, basophils"
    },
    {
        "title": "Mast cell biology",
        "url": "/specialty/allergy_immunology/mast-cell-biology",
        "description": "Mast cell biology - Allergy & Immunology clinical information, diagnosis, and management guidelines.",
        "keywords": "biology, mast, cell, mast cell biology, allergy & immunology, allergy_immunology, outpatient setting"
    },
    {
        "title": "Immunobiology of IgE antibodies",
        "url": "/specialty/allergy_immunology/immunobiology-of-ige-antibodies",
        "description": "Immunobiology of IgE antibodies - Allergy & Immunology clinical information, diagnosis, and management guidelines.",
        "keywords": "antibodies, immunobiology of ige antibodies, immunobiology, allergy & immunology, allergy_immunology, outpatient setting, ige"
    },
    {
        "title": "The epithelium in allergic disease",
        "url": "/specialty/allergy_immunology/the-epithelium-in-allergic-disease",
        "description": "The epithelium in allergic disease - Allergy & Immunology clinical information, diagnosis, and management guidelines.",
        "keywords": "the epithelium in allergic disease, the, disease, allergy & immunology, allergy_immunology, allergic, outpatient setting, epithelium"
    },
    {
        "title": "Introduction to biostatistics",
        "url": "/specialty/allergy_immunology/introduction-to-biostatistics",
        "description": "Introduction to biostatistics - Allergy & Immunology clinical information, diagnosis, and management guidelines.",
        "keywords": "introduction to biostatistics, introduction, biostatistics, allergy & immunology, allergy_immunology, outpatient setting"
    },
    {
        "title": "Eosinophilia: worms, wheezes and weird diseases",
        "url": "/specialty/allergy_immunology/eosinophilia-worms-wheezes-and-weird-diseases",
        "description": "Eosinophilia: worms, wheezes and weird diseases - Allergy & Immunology clinical information, diagnosis, and management guidelines.",
        "keywords": "and, eosinophilia, worms, diseases, weird, wheezes, eosinophilia: worms, wheezes and weird diseases, allergy & immunology, allergy_immunology, outpatient setting"
    },
    {
        "title": "Hereditary angioedema",
        "url": "/specialty/allergy_immunology/hereditary-angioedema",
        "description": "Hereditary angioedema - Allergy & Immunology clinical information, diagnosis, and management guidelines.",
        "keywords": "hereditary angioedema, angioedema, hereditary, allergy & immunology, allergy_immunology, outpatient setting"
    },
    {
        "title": "Mastocytosis and mast cell activation syndrome",
        "url": "/specialty/allergy_immunology/mastocytosis-and-mast-cell-activation-syndrome",
        "description": "Mastocytosis and mast cell activation syndrome - Allergy & Immunology clinical information, diagnosis, and management guidelines.",
        "keywords": "and, mast, mastocytosis, syndrome, mastocytosis and mast cell activation syndrome, activation, cell, allergy & immunology, allergy_immunology, outpatient setting"
    },
    {
        "title": "Autoinflammatory disease",
        "url": "/specialty/allergy_immunology/autoinflammatory-disease",
        "description": "Autoinflammatory disease - Allergy & Immunology clinical information, diagnosis, and management guidelines.",
        "keywords": "disease, autoinflammatory disease, allergy & immunology, allergy_immunology, autoinflammatory, outpatient setting"
    },
    {
        "title": "Lipid mediators in Asthma and Allergy",
        "url": "/specialty/allergy_immunology/lipid-mediators-in-asthma-and-allergy",
        "description": "Lipid mediators in Asthma and Allergy - Allergy & Immunology clinical information, diagnosis, and management guidelines.",
        "keywords": "and, lipid mediators in asthma and allergy, asthma, allergy, mediators, lipid, allergy & immunology, allergy_immunology, outpatient setting"
    },
    {
        "title": "Primary immunodeficiencies T-cells",
        "url": "/specialty/allergy_immunology/primary-immunodeficiencies-tcells",
        "description": "Primary immunodeficiencies T-cells - Allergy & Immunology clinical information, diagnosis, and management guidelines.",
        "keywords": "primary, immunodeficiencies, allergy & immunology, allergy_immunology, outpatient setting, cells, primary immunodeficiencies t-cells"
    },
    {
        "title": "Primary immunodeficiencies B-cells",
        "url": "/specialty/allergy_immunology/primary-immunodeficiencies-bcells",
        "description": "Primary immunodeficiencies B-cells - Allergy & Immunology clinical information, diagnosis, and management guidelines.",
        "keywords": "primary immunodeficiencies b-cells, primary, immunodeficiencies, allergy & immunology, allergy_immunology, outpatient setting, cells"
    },
    {
        "title": "Autoimmunity in adult immunodeficiencies",
        "url": "/specialty/allergy_immunology/autoimmunity-in-adult-immunodeficiencies",
        "description": "Autoimmunity in adult immunodeficiencies - Allergy & Immunology clinical information, diagnosis, and management guidelines.",
        "keywords": "autoimmunity in adult immunodeficiencies, adult, immunodeficiencies, autoimmunity, allergy & immunology, allergy_immunology, outpatient setting"
    },
    {
        "title": "Genomic diagnostics and discovery for immunodeficiency",
        "url": "/specialty/allergy_immunology/genomic-diagnostics-and-discovery-for-immunodeficiency",
        "description": "Genomic diagnostics and discovery for immunodeficiency - Allergy & Immunology clinical information, diagnosis, and management guidelines.",
        "keywords": "and, discovery, immunodeficiency, for, genomic diagnostics and discovery for immunodeficiency, genomic, allergy & immunology, allergy_immunology, outpatient setting, diagnostics"
    },
    {
        "title": "Emergency Room",
        "url": "/specialty/allergy_immunology/emergency-room",
        "description": "Emergency Room - Allergy & Immunology clinical information, diagnosis, and management guidelines.",
        "keywords": "emergency, allergy & immunology, allergy_immunology, emergency room, room"
    },
    {
        "title": "Anaphylaxis",
        "url": "/specialty/allergy_immunology/anaphylaxis",
        "description": "Anaphylaxis - Allergy & Immunology clinical information, diagnosis, and management guidelines.",
        "keywords": "anaphylaxis, allergy_immunology, emergency room, allergy & immunology"
    },
    {
        "title": "Severe asthma exacerbation",
        "url": "/specialty/allergy_immunology/severe-asthma-exacerbation",
        "description": "Severe asthma exacerbation - Allergy & Immunology clinical information, diagnosis, and management guidelines.",
        "keywords": "exacerbation, severe, severe asthma exacerbation, asthma, allergy & immunology, allergy_immunology, emergency room"
    },
    {
        "title": "Acute allergic reactions",
        "url": "/specialty/allergy_immunology/acute-allergic-reactions",
        "description": "Acute allergic reactions - Allergy & Immunology clinical information, diagnosis, and management guidelines.",
        "keywords": "acute allergic reactions, reactions, allergic, allergy & immunology, allergy_immunology, emergency room, acute"
    },
    {
        "title": "Angioedema (acute)",
        "url": "/specialty/allergy_immunology/angioedema-acute",
        "description": "Angioedema (acute) - Allergy & Immunology clinical information, diagnosis, and management guidelines.",
        "keywords": "angioedema, angioedema (acute), allergy & immunology, allergy_immunology, emergency room, acute"
    },
    {
        "title": "Acute urticaria",
        "url": "/specialty/allergy_immunology/acute-urticaria",
        "description": "Acute urticaria - Allergy & Immunology clinical information, diagnosis, and management guidelines.",
        "keywords": "allergy & immunology, allergy_immunology, emergency room, acute urticaria, acute, urticaria"
    },
    {
        "title": "Complement and cryoproteins (emergency complications)",
        "url": "/specialty/allergy_immunology/complement-and-cryoproteins-emergency-complications",
        "description": "Complement and cryoproteins (emergency complications) - Allergy & Immunology clinical information, diagnosis, and management guidelines.",
        "keywords": "emergency, and, complications, cryoproteins, complement, allergy & immunology, allergy_immunology, emergency room, complement and cryoproteins (emergency complications)"
    },
    {
        "title": "Severe food allergic reactions",
        "url": "/specialty/allergy_immunology/severe-food-allergic-reactions",
        "description": "Severe food allergic reactions - Allergy & Immunology clinical information, diagnosis, and management guidelines.",
        "keywords": "food, severe, reactions, allergic, allergy & immunology, allergy_immunology, emergency room, severe food allergic reactions"
    },
    {
        "title": "Hospitalization",
        "url": "/specialty/allergy_immunology/hospitalization",
        "description": "Hospitalization - Allergy & Immunology clinical information, diagnosis, and management guidelines.",
        "keywords": "hospitalization, allergy & immunology, allergy_immunology"
    },
    {
        "title": "Severe anaphylaxis requiring intensive care",
        "url": "/specialty/allergy_immunology/severe-anaphylaxis-requiring-intensive-care",
        "description": "Severe anaphylaxis requiring intensive care - Allergy & Immunology clinical information, diagnosis, and management guidelines.",
        "keywords": "anaphylaxis, care, severe, severe anaphylaxis requiring intensive care, intensive, requiring, hospitalization, allergy & immunology, allergy_immunology"
    },
    {
        "title": "Status asthmaticus",
        "url": "/specialty/allergy_immunology/status-asthmaticus",
        "description": "Status asthmaticus - Allergy & Immunology clinical information, diagnosis, and management guidelines.",
        "keywords": "status asthmaticus, status, asthmaticus, hospitalization, allergy & immunology, allergy_immunology"
    },
    {
        "title": "Allogenic hematopoietic stem cell transplantation",
        "url": "/specialty/allergy_immunology/allogenic-hematopoietic-stem-cell-transplantation",
        "description": "Allogenic hematopoietic stem cell transplantation - Allergy & Immunology clinical information, diagnosis, and management guidelines.",
        "keywords": "transplantation, cell, allogenic, hematopoietic, hospitalization, allergy & immunology, allergy_immunology, allogenic hematopoietic stem cell transplantation, stem"
    },
    {
        "title": "Severe immunodeficiency complications",
        "url": "/specialty/allergy_immunology/severe-immunodeficiency-complications",
        "description": "Severe immunodeficiency complications - Allergy & Immunology clinical information, diagnosis, and management guidelines.",
        "keywords": "complications, severe, immunodeficiency, severe immunodeficiency complications, hospitalization, allergy & immunology, allergy_immunology"
    },
    {
        "title": "Complex immunotherapy reactions",
        "url": "/specialty/allergy_immunology/complex-immunotherapy-reactions",
        "description": "Complex immunotherapy reactions - Allergy & Immunology clinical information, diagnosis, and management guidelines.",
        "keywords": "complex immunotherapy reactions, reactions, complex, immunotherapy, hospitalization, allergy & immunology, allergy_immunology"
    },
    {
        "title": "Severe mastocytosis complications",
        "url": "/specialty/allergy_immunology/severe-mastocytosis-complications",
        "description": "Severe mastocytosis complications - Allergy & Immunology clinical information, diagnosis, and management guidelines.",
        "keywords": "complications, severe, mastocytosis, hospitalization, severe mastocytosis complications, allergy & immunology, allergy_immunology"
    },
    {
        "title": "Invite me a coffee",
        "url": "/specialty/allergy_immunology/invite-me-a-coffee",
        "description": "Invite me a coffee - Allergy & Immunology clinical information, diagnosis, and management guidelines.",
        "keywords": "invite, coffee, invite me a coffee, allergy & immunology, allergy_immunology"
    }
];

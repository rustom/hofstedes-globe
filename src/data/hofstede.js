const data = [
    {
        "Country Code": "AFE",
        "Country": "Africa East",
        "Power Distance": "64",
        "Individualism": "27",
        "Masculinity": "41",
        "Uncertainty Avoidance": "52",
        "Long Term Orientation": "32",
        "Indulgence": "40"
    },
    {
        "Country Code": "AFW",
        "Country": "Africa West",
        "Power Distance": "77",
        "Individualism": "20",
        "Masculinity": "46",
        "Uncertainty Avoidance": "54",
        "Long Term Orientation": "9",
        "Indulgence": "78"
    },
    {
        "Country Code": "ALB",
        "Country": "Albania",
        "Power Distance": null,
        "Individualism": null,
        "Masculinity": null,
        "Uncertainty Avoidance": null,
        "Long Term Orientation": "61",
        "Indulgence": "15"
    },
    {
        "Country Code": "ALG",
        "Country": "Algeria",
        "Power Distance": null,
        "Individualism": null,
        "Masculinity": null,
        "Uncertainty Avoidance": null,
        "Long Term Orientation": "26",
        "Indulgence": "32"
    },
    {
        "Country Code": "AND",
        "Country": "Andorra",
        "Power Distance": null,
        "Individualism": null,
        "Masculinity": null,
        "Uncertainty Avoidance": null,
        "Long Term Orientation": null,
        "Indulgence": "65"
    },
    {
        "Country Code": "ARA",
        "Country": "Arab countries",
        "Power Distance": "80",
        "Individualism": "38",
        "Masculinity": "53",
        "Uncertainty Avoidance": "68",
        "Long Term Orientation": "23",
        "Indulgence": "34"
    },
    {
        "Country Code": "ARG",
        "Country": "Argentina",
        "Power Distance": "49",
        "Individualism": "46",
        "Masculinity": "56",
        "Uncertainty Avoidance": "86",
        "Long Term Orientation": "20",
        "Indulgence": "62"
    },
    {
        "Country Code": "ARM",
        "Country": "Armenia",
        "Power Distance": null,
        "Individualism": null,
        "Masculinity": null,
        "Uncertainty Avoidance": null,
        "Long Term Orientation": "61",
        "Indulgence": null
    },
    {
        "Country Code": "AUL",
        "Country": "Australia",
        "Power Distance": "38",
        "Individualism": "90",
        "Masculinity": "61",
        "Uncertainty Avoidance": "51",
        "Long Term Orientation": "21",
        "Indulgence": "71"
    },
    {
        "Country Code": "AUT",
        "Country": "Austria",
        "Power Distance": "11",
        "Individualism": "55",
        "Masculinity": "79",
        "Uncertainty Avoidance": "70",
        "Long Term Orientation": "60",
        "Indulgence": "63"
    },
    {
        "Country Code": "AZE",
        "Country": "Azerbaijan",
        "Power Distance": null,
        "Individualism": null,
        "Masculinity": null,
        "Uncertainty Avoidance": null,
        "Long Term Orientation": "61",
        "Indulgence": "22"
    },
    {
        "Country Code": "BAN",
        "Country": "Bangladesh",
        "Power Distance": "80",
        "Individualism": "20",
        "Masculinity": "55",
        "Uncertainty Avoidance": "60",
        "Long Term Orientation": "47",
        "Indulgence": "20"
    },
    {
        "Country Code": "BLR",
        "Country": "Belarus",
        "Power Distance": null,
        "Individualism": null,
        "Masculinity": null,
        "Uncertainty Avoidance": null,
        "Long Term Orientation": "81",
        "Indulgence": "15"
    },
    {
        "Country Code": "BEL",
        "Country": "Belgium",
        "Power Distance": "65",
        "Individualism": "75",
        "Masculinity": "54",
        "Uncertainty Avoidance": "94",
        "Long Term Orientation": "82",
        "Indulgence": "57"
    },
    {
        "Country Code": "BEF",
        "Country": "Belgium French",
        "Power Distance": "67",
        "Individualism": "72",
        "Masculinity": "60",
        "Uncertainty Avoidance": "93",
        "Long Term Orientation": null,
        "Indulgence": null
    },
    {
        "Country Code": "BEN",
        "Country": "Belgium Netherl",
        "Power Distance": "61",
        "Individualism": "78",
        "Masculinity": "43",
        "Uncertainty Avoidance": "97",
        "Long Term Orientation": null,
        "Indulgence": null
    },
    {
        "Country Code": "BOS",
        "Country": "Bosnia",
        "Power Distance": null,
        "Individualism": null,
        "Masculinity": null,
        "Uncertainty Avoidance": null,
        "Long Term Orientation": "70",
        "Indulgence": "44"
    },
    {
        "Country Code": "BRA",
        "Country": "Brazil",
        "Power Distance": "69",
        "Individualism": "38",
        "Masculinity": "49",
        "Uncertainty Avoidance": "76",
        "Long Term Orientation": "44",
        "Indulgence": "59"
    },
    {
        "Country Code": "BUL",
        "Country": "Bulgaria",
        "Power Distance": "70",
        "Individualism": "30",
        "Masculinity": "40",
        "Uncertainty Avoidance": "85",
        "Long Term Orientation": "69",
        "Indulgence": "16"
    },
    {
        "Country Code": "BUF",
        "Country": "Burkina Faso",
        "Power Distance": null,
        "Individualism": null,
        "Masculinity": null,
        "Uncertainty Avoidance": null,
        "Long Term Orientation": "27",
        "Indulgence": "18"
    },
    {
        "Country Code": "CAN",
        "Country": "Canada",
        "Power Distance": "39",
        "Individualism": "80",
        "Masculinity": "52",
        "Uncertainty Avoidance": "48",
        "Long Term Orientation": "36",
        "Indulgence": "68"
    },
    {
        "Country Code": "CAF",
        "Country": "Canada French",
        "Power Distance": "54",
        "Individualism": "73",
        "Masculinity": "45",
        "Uncertainty Avoidance": "60",
        "Long Term Orientation": null,
        "Indulgence": null
    },
    {
        "Country Code": "CHL",
        "Country": "Chile",
        "Power Distance": "63",
        "Individualism": "23",
        "Masculinity": "28",
        "Uncertainty Avoidance": "86",
        "Long Term Orientation": "31",
        "Indulgence": "68"
    },
    {
        "Country Code": "CHI",
        "Country": "China",
        "Power Distance": "80",
        "Individualism": "20",
        "Masculinity": "66",
        "Uncertainty Avoidance": "30",
        "Long Term Orientation": "87",
        "Indulgence": "24"
    },
    {
        "Country Code": "COL",
        "Country": "Colombia",
        "Power Distance": "67",
        "Individualism": "13",
        "Masculinity": "64",
        "Uncertainty Avoidance": "80",
        "Long Term Orientation": "13",
        "Indulgence": "83"
    },
    {
        "Country Code": "COS",
        "Country": "Costa Rica",
        "Power Distance": "35",
        "Individualism": "15",
        "Masculinity": "21",
        "Uncertainty Avoidance": "86",
        "Long Term Orientation": null,
        "Indulgence": null
    },
    {
        "Country Code": "CRO",
        "Country": "Croatia",
        "Power Distance": "73",
        "Individualism": "33",
        "Masculinity": "40",
        "Uncertainty Avoidance": "80",
        "Long Term Orientation": "58",
        "Indulgence": "33"
    },
    {
        "Country Code": "CYP",
        "Country": "Cyprus",
        "Power Distance": null,
        "Individualism": null,
        "Masculinity": null,
        "Uncertainty Avoidance": null,
        "Long Term Orientation": null,
        "Indulgence": "70"
    },
    {
        "Country Code": "CZE",
        "Country": "Czech Rep",
        "Power Distance": "57",
        "Individualism": "58",
        "Masculinity": "57",
        "Uncertainty Avoidance": "74",
        "Long Term Orientation": "70",
        "Indulgence": "29"
    },
    {
        "Country Code": "DEN",
        "Country": "Denmark",
        "Power Distance": "18",
        "Individualism": "74",
        "Masculinity": "16",
        "Uncertainty Avoidance": "23",
        "Long Term Orientation": "35",
        "Indulgence": "70"
    },
    {
        "Country Code": "DOM",
        "Country": "Dominican Rep",
        "Power Distance": null,
        "Individualism": null,
        "Masculinity": null,
        "Uncertainty Avoidance": null,
        "Long Term Orientation": "13",
        "Indulgence": "54"
    },
    {
        "Country Code": "ECA",
        "Country": "Ecuador",
        "Power Distance": "78",
        "Individualism": "8",
        "Masculinity": "63",
        "Uncertainty Avoidance": "67",
        "Long Term Orientation": null,
        "Indulgence": null
    },
    {
        "Country Code": "EGY",
        "Country": "Egypt",
        "Power Distance": null,
        "Individualism": null,
        "Masculinity": null,
        "Uncertainty Avoidance": null,
        "Long Term Orientation": "7",
        "Indulgence": "4"
    },
    {
        "Country Code": "SAL",
        "Country": "El Salvador",
        "Power Distance": "66",
        "Individualism": "19",
        "Masculinity": "40",
        "Uncertainty Avoidance": "94",
        "Long Term Orientation": "20",
        "Indulgence": "89"
    },
    {
        "Country Code": "EST",
        "Country": "Estonia",
        "Power Distance": "40",
        "Individualism": "60",
        "Masculinity": "30",
        "Uncertainty Avoidance": "60",
        "Long Term Orientation": "82",
        "Indulgence": "16"
    },
    {
        "Country Code": "ETH",
        "Country": "Ethiopia",
        "Power Distance": null,
        "Individualism": null,
        "Masculinity": null,
        "Uncertainty Avoidance": null,
        "Long Term Orientation": null,
        "Indulgence": "46"
    },
    {
        "Country Code": "FIN",
        "Country": "Finland",
        "Power Distance": "33",
        "Individualism": "63",
        "Masculinity": "26",
        "Uncertainty Avoidance": "59",
        "Long Term Orientation": "38",
        "Indulgence": "57"
    },
    {
        "Country Code": "FRA",
        "Country": "France",
        "Power Distance": "68",
        "Individualism": "71",
        "Masculinity": "43",
        "Uncertainty Avoidance": "86",
        "Long Term Orientation": "63",
        "Indulgence": "48"
    },
    {
        "Country Code": "GEO",
        "Country": "Georgia",
        "Power Distance": null,
        "Individualism": null,
        "Masculinity": null,
        "Uncertainty Avoidance": null,
        "Long Term Orientation": "38",
        "Indulgence": "32"
    },
    {
        "Country Code": "GER",
        "Country": "Germany",
        "Power Distance": "35",
        "Individualism": "67",
        "Masculinity": "66",
        "Uncertainty Avoidance": "65",
        "Long Term Orientation": "83",
        "Indulgence": "40"
    },
    {
        "Country Code": "GEE",
        "Country": "Germany East",
        "Power Distance": null,
        "Individualism": null,
        "Masculinity": null,
        "Uncertainty Avoidance": null,
        "Long Term Orientation": "78",
        "Indulgence": "34"
    },
    {
        "Country Code": "GHA",
        "Country": "Ghana",
        "Power Distance": null,
        "Individualism": null,
        "Masculinity": null,
        "Uncertainty Avoidance": null,
        "Long Term Orientation": "4",
        "Indulgence": "72"
    },
    {
        "Country Code": "GBR",
        "Country": "Great Britain",
        "Power Distance": "35",
        "Individualism": "89",
        "Masculinity": "66",
        "Uncertainty Avoidance": "35",
        "Long Term Orientation": "51",
        "Indulgence": "69"
    },
    {
        "Country Code": "GRE",
        "Country": "Greece",
        "Power Distance": "60",
        "Individualism": "35",
        "Masculinity": "57",
        "Uncertainty Avoidance": "100",
        "Long Term Orientation": "45",
        "Indulgence": "50"
    },
    {
        "Country Code": "GUA",
        "Country": "Guatemala",
        "Power Distance": "95",
        "Individualism": "6",
        "Masculinity": "37",
        "Uncertainty Avoidance": "98",
        "Long Term Orientation": null,
        "Indulgence": null
    },
    {
        "Country Code": "HOK",
        "Country": "Hong Kong",
        "Power Distance": "68",
        "Individualism": "25",
        "Masculinity": "57",
        "Uncertainty Avoidance": "29",
        "Long Term Orientation": "61",
        "Indulgence": "17"
    },
    {
        "Country Code": "HUN",
        "Country": "Hungary",
        "Power Distance": "46",
        "Individualism": "80",
        "Masculinity": "88",
        "Uncertainty Avoidance": "82",
        "Long Term Orientation": "58",
        "Indulgence": "31"
    },
    {
        "Country Code": "ICE",
        "Country": "Iceland",
        "Power Distance": null,
        "Individualism": null,
        "Masculinity": null,
        "Uncertainty Avoidance": null,
        "Long Term Orientation": "28",
        "Indulgence": "67"
    },
    {
        "Country Code": "IND",
        "Country": "India",
        "Power Distance": "77",
        "Individualism": "48",
        "Masculinity": "56",
        "Uncertainty Avoidance": "40",
        "Long Term Orientation": "51",
        "Indulgence": "26"
    },
    {
        "Country Code": "IDO",
        "Country": "Indonesia",
        "Power Distance": "78",
        "Individualism": "14",
        "Masculinity": "46",
        "Uncertainty Avoidance": "48",
        "Long Term Orientation": "62",
        "Indulgence": "38"
    },
    {
        "Country Code": "IRA",
        "Country": "Iran",
        "Power Distance": "58",
        "Individualism": "41",
        "Masculinity": "43",
        "Uncertainty Avoidance": "59",
        "Long Term Orientation": "14",
        "Indulgence": "40"
    },
    {
        "Country Code": "IRQ",
        "Country": "Iraq",
        "Power Distance": null,
        "Individualism": null,
        "Masculinity": null,
        "Uncertainty Avoidance": null,
        "Long Term Orientation": "25",
        "Indulgence": "17"
    },
    {
        "Country Code": "IRE",
        "Country": "Ireland",
        "Power Distance": "28",
        "Individualism": "70",
        "Masculinity": "68",
        "Uncertainty Avoidance": "35",
        "Long Term Orientation": "24",
        "Indulgence": "65"
    },
    {
        "Country Code": "ISR",
        "Country": "Israel",
        "Power Distance": "13",
        "Individualism": "54",
        "Masculinity": "47",
        "Uncertainty Avoidance": "81",
        "Long Term Orientation": "38",
        "Indulgence": null
    },
    {
        "Country Code": "ITA",
        "Country": "Italy",
        "Power Distance": "50",
        "Individualism": "76",
        "Masculinity": "70",
        "Uncertainty Avoidance": "75",
        "Long Term Orientation": "61",
        "Indulgence": "30"
    },
    {
        "Country Code": "JAM",
        "Country": "Jamaica",
        "Power Distance": "45",
        "Individualism": "39",
        "Masculinity": "68",
        "Uncertainty Avoidance": "13",
        "Long Term Orientation": null,
        "Indulgence": null
    },
    {
        "Country Code": "JPN",
        "Country": "Japan",
        "Power Distance": "54",
        "Individualism": "46",
        "Masculinity": "95",
        "Uncertainty Avoidance": "92",
        "Long Term Orientation": "88",
        "Indulgence": "42"
    },
    {
        "Country Code": "JOR",
        "Country": "Jordan",
        "Power Distance": null,
        "Individualism": null,
        "Masculinity": null,
        "Uncertainty Avoidance": null,
        "Long Term Orientation": "16",
        "Indulgence": "43"
    },
    {
        "Country Code": "KOR",
        "Country": "Korea South",
        "Power Distance": "60",
        "Individualism": "18",
        "Masculinity": "39",
        "Uncertainty Avoidance": "85",
        "Long Term Orientation": "100",
        "Indulgence": "29"
    },
    {
        "Country Code": "KYR",
        "Country": "Kyrgyz Rep",
        "Power Distance": null,
        "Individualism": null,
        "Masculinity": null,
        "Uncertainty Avoidance": null,
        "Long Term Orientation": "66",
        "Indulgence": "39"
    },
    {
        "Country Code": "LAT",
        "Country": "Latvia",
        "Power Distance": "44",
        "Individualism": "70",
        "Masculinity": "9",
        "Uncertainty Avoidance": "63",
        "Long Term Orientation": "69",
        "Indulgence": "13"
    },
    {
        "Country Code": "LIT",
        "Country": "Lithuania",
        "Power Distance": "42",
        "Individualism": "60",
        "Masculinity": "19",
        "Uncertainty Avoidance": "65",
        "Long Term Orientation": "82",
        "Indulgence": "16"
    },
    {
        "Country Code": "LUX",
        "Country": "Luxembourg",
        "Power Distance": "40",
        "Individualism": "60",
        "Masculinity": "50",
        "Uncertainty Avoidance": "70",
        "Long Term Orientation": "64",
        "Indulgence": "56"
    },
    {
        "Country Code": "MAC",
        "Country": "Macedonia Rep",
        "Power Distance": null,
        "Individualism": null,
        "Masculinity": null,
        "Uncertainty Avoidance": null,
        "Long Term Orientation": "62",
        "Indulgence": "35"
    },
    {
        "Country Code": "MAL",
        "Country": "Malaysia",
        "Power Distance": "100",
        "Individualism": "26",
        "Masculinity": "50",
        "Uncertainty Avoidance": "36",
        "Long Term Orientation": "41",
        "Indulgence": "57"
    },
    {
        "Country Code": "MLI",
        "Country": "Mali",
        "Power Distance": null,
        "Individualism": null,
        "Masculinity": null,
        "Uncertainty Avoidance": null,
        "Long Term Orientation": "20",
        "Indulgence": "43"
    },
    {
        "Country Code": "MLT",
        "Country": "Malta",
        "Power Distance": "56",
        "Individualism": "59",
        "Masculinity": "47",
        "Uncertainty Avoidance": "96",
        "Long Term Orientation": "47",
        "Indulgence": "66"
    },
    {
        "Country Code": "MEX",
        "Country": "Mexico",
        "Power Distance": "81",
        "Individualism": "30",
        "Masculinity": "69",
        "Uncertainty Avoidance": "82",
        "Long Term Orientation": "24",
        "Indulgence": "97"
    },
    {
        "Country Code": "MOL",
        "Country": "Moldova",
        "Power Distance": null,
        "Individualism": null,
        "Masculinity": null,
        "Uncertainty Avoidance": null,
        "Long Term Orientation": "71",
        "Indulgence": "19"
    },
    {
        "Country Code": "MNG",
        "Country": "Montenegro",
        "Power Distance": null,
        "Individualism": null,
        "Masculinity": null,
        "Uncertainty Avoidance": null,
        "Long Term Orientation": "75",
        "Indulgence": "20"
    },
    {
        "Country Code": "MOR",
        "Country": "Morocco",
        "Power Distance": "70",
        "Individualism": "46",
        "Masculinity": "53",
        "Uncertainty Avoidance": "68",
        "Long Term Orientation": "14",
        "Indulgence": "25"
    },
    {
        "Country Code": "NET",
        "Country": "Netherlands",
        "Power Distance": "38",
        "Individualism": "80",
        "Masculinity": "14",
        "Uncertainty Avoidance": "53",
        "Long Term Orientation": "67",
        "Indulgence": "68"
    },
    {
        "Country Code": "NZL",
        "Country": "New Zealand",
        "Power Distance": "22",
        "Individualism": "79",
        "Masculinity": "58",
        "Uncertainty Avoidance": "49",
        "Long Term Orientation": "33",
        "Indulgence": "75"
    },
    {
        "Country Code": "NIG",
        "Country": "Nigeria",
        "Power Distance": null,
        "Individualism": null,
        "Masculinity": null,
        "Uncertainty Avoidance": null,
        "Long Term Orientation": "13",
        "Indulgence": "84"
    },
    {
        "Country Code": "NOR",
        "Country": "Norway",
        "Power Distance": "31",
        "Individualism": "69",
        "Masculinity": "8",
        "Uncertainty Avoidance": "50",
        "Long Term Orientation": "35",
        "Indulgence": "55"
    },
    {
        "Country Code": "PAK",
        "Country": "Pakistan",
        "Power Distance": "55",
        "Individualism": "14",
        "Masculinity": "50",
        "Uncertainty Avoidance": "70",
        "Long Term Orientation": "50",
        "Indulgence": "0"
    },
    {
        "Country Code": "PAN",
        "Country": "Panama",
        "Power Distance": "95",
        "Individualism": "11",
        "Masculinity": "44",
        "Uncertainty Avoidance": "86",
        "Long Term Orientation": null,
        "Indulgence": null
    },
    {
        "Country Code": "PER",
        "Country": "Peru",
        "Power Distance": "64",
        "Individualism": "16",
        "Masculinity": "42",
        "Uncertainty Avoidance": "87",
        "Long Term Orientation": "25",
        "Indulgence": "46"
    },
    {
        "Country Code": "PHI",
        "Country": "Philippines",
        "Power Distance": "94",
        "Individualism": "32",
        "Masculinity": "64",
        "Uncertainty Avoidance": "44",
        "Long Term Orientation": "27",
        "Indulgence": "42"
    },
    {
        "Country Code": "POL",
        "Country": "Poland",
        "Power Distance": "68",
        "Individualism": "60",
        "Masculinity": "64",
        "Uncertainty Avoidance": "93",
        "Long Term Orientation": "38",
        "Indulgence": "29"
    },
    {
        "Country Code": "POR",
        "Country": "Portugal",
        "Power Distance": "63",
        "Individualism": "27",
        "Masculinity": "31",
        "Uncertainty Avoidance": "99",
        "Long Term Orientation": "28",
        "Indulgence": "33"
    },
    {
        "Country Code": "PUE",
        "Country": "Puerto Rico",
        "Power Distance": null,
        "Individualism": null,
        "Masculinity": null,
        "Uncertainty Avoidance": null,
        "Long Term Orientation": "0",
        "Indulgence": "90"
    },
    {
        "Country Code": "ROM",
        "Country": "Romania",
        "Power Distance": "90",
        "Individualism": "30",
        "Masculinity": "42",
        "Uncertainty Avoidance": "90",
        "Long Term Orientation": "52",
        "Indulgence": "20"
    },
    {
        "Country Code": "RUS",
        "Country": "Russia",
        "Power Distance": "93",
        "Individualism": "39",
        "Masculinity": "36",
        "Uncertainty Avoidance": "95",
        "Long Term Orientation": "81",
        "Indulgence": "20"
    },
    {
        "Country Code": "RWA",
        "Country": "Rwanda",
        "Power Distance": null,
        "Individualism": null,
        "Masculinity": null,
        "Uncertainty Avoidance": null,
        "Long Term Orientation": "18",
        "Indulgence": "37"
    },
    {
        "Country Code": "SAU",
        "Country": "Saudi Arabia",
        "Power Distance": null,
        "Individualism": null,
        "Masculinity": null,
        "Uncertainty Avoidance": null,
        "Long Term Orientation": "36",
        "Indulgence": "52"
    },
    {
        "Country Code": "SER",
        "Country": "Serbia",
        "Power Distance": "86",
        "Individualism": "25",
        "Masculinity": "43",
        "Uncertainty Avoidance": "92",
        "Long Term Orientation": "52",
        "Indulgence": "28"
    },
    {
        "Country Code": "SIN",
        "Country": "Singapore",
        "Power Distance": "74",
        "Individualism": "20",
        "Masculinity": "48",
        "Uncertainty Avoidance": "8",
        "Long Term Orientation": "72",
        "Indulgence": "46"
    },
    {
        "Country Code": "SLK",
        "Country": "Slovak Rep",
        "Power Distance": "100",
        "Individualism": "52",
        "Masculinity": "100",
        "Uncertainty Avoidance": "51",
        "Long Term Orientation": "77",
        "Indulgence": "28"
    },
    {
        "Country Code": "SLV",
        "Country": "Slovenia",
        "Power Distance": "71",
        "Individualism": "27",
        "Masculinity": "19",
        "Uncertainty Avoidance": "88",
        "Long Term Orientation": "49",
        "Indulgence": "48"
    },
    {
        "Country Code": "SAF",
        "Country": "South Africa",
        "Power Distance": null,
        "Individualism": null,
        "Masculinity": null,
        "Uncertainty Avoidance": null,
        "Long Term Orientation": "34",
        "Indulgence": "63"
    },
    {
        "Country Code": "SAW",
        "Country": "South Africa white",
        "Power Distance": "49",
        "Individualism": "65",
        "Masculinity": "63",
        "Uncertainty Avoidance": "49",
        "Long Term Orientation": null,
        "Indulgence": null
    },
    {
        "Country Code": "SPA",
        "Country": "Spain",
        "Power Distance": "57",
        "Individualism": "51",
        "Masculinity": "42",
        "Uncertainty Avoidance": "86",
        "Long Term Orientation": "48",
        "Indulgence": "44"
    },
    {
        "Country Code": "SUR",
        "Country": "Suriname",
        "Power Distance": "85",
        "Individualism": "47",
        "Masculinity": "37",
        "Uncertainty Avoidance": "92",
        "Long Term Orientation": null,
        "Indulgence": null
    },
    {
        "Country Code": "SWE",
        "Country": "Sweden",
        "Power Distance": "31",
        "Individualism": "71",
        "Masculinity": "5",
        "Uncertainty Avoidance": "29",
        "Long Term Orientation": "53",
        "Indulgence": "78"
    },
    {
        "Country Code": "SWI",
        "Country": "Switzerland",
        "Power Distance": "34",
        "Individualism": "68",
        "Masculinity": "70",
        "Uncertainty Avoidance": "58",
        "Long Term Orientation": "74",
        "Indulgence": "66"
    },
    {
        "Country Code": "SWF",
        "Country": "Switzerland French",
        "Power Distance": "70",
        "Individualism": "64",
        "Masculinity": "58",
        "Uncertainty Avoidance": "70",
        "Long Term Orientation": null,
        "Indulgence": null
    },
    {
        "Country Code": "SWG",
        "Country": "Switzerland German",
        "Power Distance": "26",
        "Individualism": "69",
        "Masculinity": "72",
        "Uncertainty Avoidance": "56",
        "Long Term Orientation": null,
        "Indulgence": null
    },
    {
        "Country Code": "TAI",
        "Country": "Taiwan",
        "Power Distance": "58",
        "Individualism": "17",
        "Masculinity": "45",
        "Uncertainty Avoidance": "69",
        "Long Term Orientation": "93",
        "Indulgence": "49"
    },
    {
        "Country Code": "TAN",
        "Country": "Tanzania",
        "Power Distance": null,
        "Individualism": null,
        "Masculinity": null,
        "Uncertainty Avoidance": null,
        "Long Term Orientation": "34",
        "Indulgence": "38"
    },
    {
        "Country Code": "THA",
        "Country": "Thailand",
        "Power Distance": "64",
        "Individualism": "20",
        "Masculinity": "34",
        "Uncertainty Avoidance": "64",
        "Long Term Orientation": "32",
        "Indulgence": "45"
    },
    {
        "Country Code": "TRI",
        "Country": "Trinidad and Tobago",
        "Power Distance": "47",
        "Individualism": "16",
        "Masculinity": "58",
        "Uncertainty Avoidance": "55",
        "Long Term Orientation": "13",
        "Indulgence": "80"
    },
    {
        "Country Code": "TUR",
        "Country": "Turkey",
        "Power Distance": "66",
        "Individualism": "37",
        "Masculinity": "45",
        "Uncertainty Avoidance": "85",
        "Long Term Orientation": "46",
        "Indulgence": "49"
    },
    {
        "Country Code": "USA",
        "Country": "U.S.A.",
        "Power Distance": "40",
        "Individualism": "91",
        "Masculinity": "62",
        "Uncertainty Avoidance": "46",
        "Long Term Orientation": "26",
        "Indulgence": "68"
    },
    {
        "Country Code": "UGA",
        "Country": "Uganda",
        "Power Distance": null,
        "Individualism": null,
        "Masculinity": null,
        "Uncertainty Avoidance": null,
        "Long Term Orientation": "24",
        "Indulgence": "52"
    },
    {
        "Country Code": "UKR",
        "Country": "Ukraine",
        "Power Distance": null,
        "Individualism": null,
        "Masculinity": null,
        "Uncertainty Avoidance": null,
        "Long Term Orientation": "86",
        "Indulgence": "14"
    },
    {
        "Country Code": "URU",
        "Country": "Uruguay",
        "Power Distance": "61",
        "Individualism": "36",
        "Masculinity": "38",
        "Uncertainty Avoidance": "98",
        "Long Term Orientation": "26",
        "Indulgence": "53"
    },
    {
        "Country Code": "VEN",
        "Country": "Venezuela",
        "Power Distance": "81",
        "Individualism": "12",
        "Masculinity": "73",
        "Uncertainty Avoidance": "76",
        "Long Term Orientation": "16",
        "Indulgence": "100"
    },
    {
        "Country Code": "VIE",
        "Country": "Vietnam",
        "Power Distance": "70",
        "Individualism": "20",
        "Masculinity": "40",
        "Uncertainty Avoidance": "30",
        "Long Term Orientation": "57",
        "Indulgence": "35"
    },
    {
        "Country Code": "ZAM",
        "Country": "Zambia",
        "Power Distance": null,
        "Individualism": null,
        "Masculinity": null,
        "Uncertainty Avoidance": null,
        "Long Term Orientation": "30",
        "Indulgence": "42"
    },
    {
        "Country Code": "ZIM",
        "Country": "Zimbabwe",
        "Power Distance": null,
        "Individualism": null,
        "Masculinity": null,
        "Uncertainty Avoidance": null,
        "Long Term Orientation": "15",
        "Indulgence": "28"
    }
]

export default data;
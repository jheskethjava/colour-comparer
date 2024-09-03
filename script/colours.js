var greet = "hi";
// Export colours.numbers to colours.csv then use https://csvjson.com/csv2json
var coloursList;
coloursList = [
  {
    "idx": 214,
    "link": "https://earthbornpaints.co.uk/colour/bobble-hat/",
    "colour": "#418288",
    "name": "(Bobble Hat)",
    "number": "",
    "vendor": "earthborn",
    "lrv": 19,
    "shortlist": 3
  },
  {
    "idx": 215,
    "link": "https://earthbornpaints.co.uk/colour/polka-dot/",
    "colour": "#739dad",
    "name": "(Polka Dot)",
    "number": "",
    "vendor": "earthborn",
    "lrv": 31,
    "shortlist": 3
  },
  {
    "idx": 213,
    "link": "https://earthbornpaints.co.uk/colour/toy-soldier/",
    "colour": "#254761",
    "name": "(Toy Soldier)",
    "number": "",
    "vendor": "earthborn",
    "lrv": 6,
    "shortlist": 3
  },
  {
    "idx": 200,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/50s-magnolia-no-28",
    "colour": "#f4ebdc",
    "name": "50s Magnolia (28)",
    "number": 28,
    "vendor": "littlegreene",
    "lrv": 74,
    "shortlist": ""
  },
  {
    "idx": 55,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/acorn",
    "colour": "#e0e3c4",
    "name": "Acorn (87)",
    "number": 87,
    "vendor": "littlegreene",
    "lrv": 65,
    "shortlist": ""
  },
  {
    "idx": 48,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/acre",
    "colour": "#e6e4cd",
    "name": "Acre (76)",
    "number": 76,
    "vendor": "littlegreene",
    "lrv": 63,
    "shortlist": ""
  },
  {
    "idx": 174,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/adventurer",
    "colour": "#5d3a40",
    "name": "Adventurer (7)",
    "number": 7,
    "vendor": "littlegreene",
    "lrv": 10,
    "shortlist": ""
  },
  {
    "idx": 75,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/aged-ivory",
    "colour": "#e1d1ad",
    "name": "Aged Ivory (131)",
    "number": 131,
    "vendor": "littlegreene",
    "lrv": 57,
    "shortlist": ""
  },
  {
    "idx": 207,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/airfo",
    "colour": "#558799",
    "name": "Air Force Blue (260)",
    "number": 260,
    "vendor": "littlegreene",
    "lrv": 21,
    "shortlist": 2
  },
  {
    "idx": 224,
    "link": "https://www.littlegreene.com/al-fresco",
    "colour": "#a79ca4",
    "name": "Al Fresco",
    "number": -1,
    "vendor": "littlegreene",
    "lrv": 0,
    "shortlist": ""
  },
  {
    "idx": 53,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/angie",
    "colour": "#f8c1af",
    "name": "Angie (185)",
    "number": 185,
    "vendor": "littlegreene",
    "lrv": 64,
    "shortlist": ""
  },
  {
    "idx": 119,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/apple",
    "colour": "#cbc687",
    "name": "Apple (137)",
    "number": 137,
    "vendor": "littlegreene",
    "lrv": 47,
    "shortlist": ""
  },
  {
    "idx": 112,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/aquamarine",
    "colour": "#a8bba0",
    "name": "Aquamarine (138)",
    "number": 138,
    "vendor": "littlegreene",
    "lrv": 43,
    "shortlist": ""
  },
  {
    "idx": 134,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/aquamarine-deep",
    "colour": "#85a486",
    "name": "Aquamarine Deep (198)",
    "number": 198,
    "vendor": "littlegreene",
    "lrv": 38,
    "shortlist": ""
  },
  {
    "idx": 31,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/aquamarinelight",
    "colour": "#DBE9DF",
    "name": "Aquamarine Light (283)",
    "number": 283,
    "vendor": "littlegreene",
    "lrv": 69,
    "shortlist": ""
  },
  {
    "idx": 64,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/aquamarine-mid",
    "colour": "#C6D6CA",
    "name": "Aquamarine Mid (284)",
    "number": 284,
    "vendor": "littlegreene",
    "lrv": 57,
    "shortlist": ""
  },
  {
    "idx": 4,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/aquamarine-pale-282",
    "colour": "#E9F4ED",
    "name": "Aquamarine Pale (282)",
    "number": 282,
    "vendor": "littlegreene",
    "lrv": 77,
    "shortlist": ""
  },
  {
    "idx": 197,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/arque",
    "colour": "#8c8c91",
    "name": "Arquerite (250)",
    "number": 250,
    "vendor": "littlegreene",
    "lrv": 25,
    "shortlist": 1
  },
  {
    "idx": 155,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/ashes-of-roses",
    "colour": "#945e5c",
    "name": "Ashes of Roses (6)",
    "number": 6,
    "vendor": "littlegreene",
    "lrv": 18,
    "shortlist": ""
  },
  {
    "idx": 158,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/atomic-red",
    "colour": "#bd2520",
    "name": "Atomic Red (190)",
    "number": 190,
    "vendor": "littlegreene",
    "lrv": 15,
    "shortlist": ""
  },
  {
    "idx": 172,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/attic-ii",
    "colour": "#5a5247",
    "name": "Attic II (144)",
    "number": 144,
    "vendor": "littlegreene",
    "lrv": 15,
    "shortlist": ""
  },
  {
    "idx": 179,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/baked-cherry",
    "colour": "#611117",
    "name": "Baked Cherry (14)",
    "number": 14,
    "vendor": "littlegreene",
    "lrv": 9,
    "shortlist": ""
  },
  {
    "idx": 186,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/basalt",
    "colour": "#0c1b24",
    "name": "Basalt (221)",
    "number": 221,
    "vendor": "littlegreene",
    "lrv": 5,
    "shortlist": ""
  },
  {
    "idx": 231,
    "link": "https://www.littlegreene.com/basque",
    "colour": "#8e555c",
    "name": "Basque",
    "number": -1,
    "vendor": "littlegreene",
    "lrv": 0,
    "shortlist": ""
  },
  {
    "idx": 120,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/bath-stone",
    "colour": "#cdb684",
    "name": "Bath Stone (64)",
    "number": 64,
    "vendor": "littlegreene",
    "lrv": 43,
    "shortlist": ""
  },
  {
    "idx": 50,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/beauvais-lilac",
    "colour": "#e9dac3",
    "name": "Beauvais Lilac (29)",
    "number": 29,
    "vendor": "littlegreene",
    "lrv": 59,
    "shortlist": ""
  },
  {
    "idx": 229,
    "link": "https://www.littlegreene.com/bertie-s-best",
    "colour": "#e09599",
    "name": "Bertie’s Best",
    "number": -1,
    "vendor": "littlegreene",
    "lrv": 0,
    "shortlist": ""
  },
  {
    "idx": 140,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/blue-verditer",
    "colour": "#659ab2",
    "name": "Blue Verditer (104)",
    "number": 104,
    "vendor": "littlegreene",
    "lrv": 34,
    "shortlist": 2
  },
  {
    "idx": 216,
    "link": "https://www.littlegreene.com/paint/colour/red-and-pink-paint/blush",
    "colour": "#AE8A82",
    "name": "Blush",
    "number": 267,
    "vendor": "littlegreene",
    "lrv": 24,
    "shortlist": ""
  },
  {
    "idx": 126,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/bone-china-blue",
    "colour": "#a1a7a4",
    "name": "Bone China Blue (107)",
    "number": 107,
    "vendor": "littlegreene",
    "lrv": 39,
    "shortlist": ""
  },
  {
    "idx": 107,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/bone-china-blue-deep",
    "colour": "#b0b5b2",
    "name": "Bone China Blue Deep (184)",
    "number": 184,
    "vendor": "littlegreene",
    "lrv": 52,
    "shortlist": 1
  },
  {
    "idx": 60,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/bone-china-blue-mid",
    "colour": "#d0d4d0",
    "name": "Bone China Blue Mid (183)",
    "number": 183,
    "vendor": "littlegreene",
    "lrv": 66,
    "shortlist": ""
  },
  {
    "idx": 32,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/bone-china-blue-pale",
    "colour": "#e2e6e2",
    "name": "Bone China Blue Pale (182)",
    "number": 182,
    "vendor": "littlegreene",
    "lrv": 73,
    "shortlist": ""
  },
  {
    "idx": 226,
    "link": "https://www.littlegreene.com/boo",
    "colour": "#b16b8d",
    "name": "Boo",
    "number": -1,
    "vendor": "littlegreene",
    "lrv": 0,
    "shortlist": ""
  },
  {
    "idx": 147,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/boxington",
    "colour": "#a8af61",
    "name": "Boxington (84)",
    "number": 84,
    "vendor": "littlegreene",
    "lrv": 38,
    "shortlist": ""
  },
  {
    "idx": 70,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/brighton",
    "colour": "#bfd5cb",
    "name": "Brighton (203)",
    "number": 203,
    "vendor": "littlegreene",
    "lrv": 56,
    "shortlist": ""
  },
  {
    "idx": 176,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/bronze-red",
    "colour": "#6c2322",
    "name": "Bronze Red (15)",
    "number": 15,
    "vendor": "littlegreene",
    "lrv": 9,
    "shortlist": ""
  },
  {
    "idx": 173,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/callaghan",
    "colour": "#6d3d33",
    "name": "Callaghan (214)",
    "number": 214,
    "vendor": "littlegreene",
    "lrv": 12,
    "shortlist": ""
  },
  {
    "idx": 175,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/canton",
    "colour": "#236d6f",
    "name": "Canton (94)",
    "number": 94,
    "vendor": "littlegreene",
    "lrv": 21,
    "shortlist": ""
  },
  {
    "idx": 220,
    "link": "https://www.littlegreene.com/cape-red",
    "colour": "#A6393E",
    "name": "Cape Red",
    "number": 279,
    "vendor": "littlegreene",
    "lrv": 12,
    "shortlist": ""
  },
  {
    "idx": 129,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/carmine",
    "colour": "#d5666c",
    "name": "Carmine (189)",
    "number": 189,
    "vendor": "littlegreene",
    "lrv": 24,
    "shortlist": ""
  },
  {
    "idx": 94,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/carys",
    "colour": "#ffe57b",
    "name": "Carys (148)",
    "number": 148,
    "vendor": "littlegreene",
    "lrv": 70,
    "shortlist": ""
  },
  {
    "idx": 115,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/celestial-blue",
    "colour": "#a4b4af",
    "name": "Celestial Blue (101)",
    "number": 101,
    "vendor": "littlegreene",
    "lrv": 46,
    "shortlist": ""
  },
  {
    "idx": 204,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/celew",
    "colour": "#e2f1ef",
    "name": "Celestial White (262)",
    "number": 262,
    "vendor": "littlegreene",
    "lrv": 74,
    "shortlist": ""
  },
  {
    "idx": 45,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/ceviche-230",
    "colour": "#e0dbcf",
    "name": "Ceviche (230)",
    "number": 230,
    "vendor": "littlegreene",
    "lrv": 70,
    "shortlist": ""
  },
  {
    "idx": 92,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/chamois",
    "colour": "#e2d39a",
    "name": "Chamois (132)",
    "number": 132,
    "vendor": "littlegreene",
    "lrv": 54,
    "shortlist": ""
  },
  {
    "idx": 11,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/chemise",
    "colour": "#f5e8e6",
    "name": "Chemise (139)",
    "number": 139,
    "vendor": "littlegreene",
    "lrv": 74,
    "shortlist": ""
  },
  {
    "idx": 183,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/chimney-brick-247",
    "colour": "#3a2a23",
    "name": "Chimney Brick (247)",
    "number": 247,
    "vendor": "littlegreene",
    "lrv": 7,
    "shortlist": ""
  },
  {
    "idx": 21,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/china-clay",
    "colour": "#f7ede0",
    "name": "China Clay (1)",
    "number": 1,
    "vendor": "littlegreene",
    "lrv": 78,
    "shortlist": ""
  },
  {
    "idx": 104,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/china-clay-dark",
    "colour": "#cbb1a2",
    "name": "China Clay Dark (178)",
    "number": 178,
    "vendor": "littlegreene",
    "lrv": 52,
    "shortlist": ""
  },
  {
    "idx": 74,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/china-clay-deep",
    "colour": "#dac2b4",
    "name": "China Clay Deep (177)",
    "number": 177,
    "vendor": "littlegreene",
    "lrv": 61,
    "shortlist": ""
  },
  {
    "idx": 41,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/china-clay-mid",
    "colour": "#ecd9cb",
    "name": "China Clay Mid (176)",
    "number": 176,
    "vendor": "littlegreene",
    "lrv": 69,
    "shortlist": ""
  },
  {
    "idx": 188,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/chocolate-colour",
    "colour": "#1e160e",
    "name": "Chocolate Colour (124)",
    "number": 124,
    "vendor": "littlegreene",
    "lrv": 6,
    "shortlist": ""
  },
  {
    "idx": 170,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/citrine",
    "colour": "#777f2d",
    "name": "Citrine (71)",
    "number": 71,
    "vendor": "littlegreene",
    "lrv": 24,
    "shortlist": ""
  },
  {
    "idx": 101,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/clay",
    "colour": "#d4c59c",
    "name": "Clay (39)",
    "number": 39,
    "vendor": "littlegreene",
    "lrv": 52,
    "shortlist": ""
  },
  {
    "idx": 71,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/clay-deep",
    "colour": "#dfd3b4",
    "name": "Clay Deep (154)",
    "number": 154,
    "vendor": "littlegreene",
    "lrv": 61,
    "shortlist": ""
  },
  {
    "idx": 52,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/clay-mid",
    "colour": "#e7ddc7",
    "name": "Clay Mid (153)",
    "number": 153,
    "vendor": "littlegreene",
    "lrv": 69,
    "shortlist": ""
  },
  {
    "idx": 33,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/clay-pale",
    "colour": "#eee8d8",
    "name": "Clay Pale (152)",
    "number": 152,
    "vendor": "littlegreene",
    "lrv": 78,
    "shortlist": ""
  },
  {
    "idx": 19,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/clockface",
    "colour": "#eeede8",
    "name": "Clockface (81)",
    "number": 81,
    "vendor": "littlegreene",
    "lrv": 79,
    "shortlist": ""
  },
  {
    "idx": 232,
    "link": "https://www.littlegreene.com/clockwise",
    "colour": "#9fa2cf",
    "name": "Clockwise",
    "number": -1,
    "vendor": "littlegreene",
    "lrv": 0,
    "shortlist": ""
  },
  {
    "idx": 217,
    "link": "https://www.littlegreene.com/paint/colour/red-and-pink-paint/confetti",
    "colour": "#e9d0cf",
    "name": "Confetti",
    "number": 274,
    "vendor": "littlegreene",
    "lrv": 60,
    "shortlist": ""
  },
  {
    "idx": 125,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/cool-arbour-232",
    "colour": "#b1ab9b",
    "name": "Cool Arbour (232)",
    "number": 232,
    "vendor": "littlegreene",
    "lrv": 56,
    "shortlist": ""
  },
  {
    "idx": 29,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/creamerie",
    "colour": "#fbf2c9",
    "name": "Creamerie (42)",
    "number": 42,
    "vendor": "littlegreene",
    "lrv": 78,
    "shortlist": ""
  },
  {
    "idx": 72,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/cupboard-green",
    "colour": "#c4dbb8",
    "name": "Cupboard Green (201)",
    "number": 201,
    "vendor": "littlegreene",
    "lrv": 65,
    "shortlist": ""
  },
  {
    "idx": 67,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/custard",
    "colour": "#f8e8a6",
    "name": "Custard (133)",
    "number": 133,
    "vendor": "littlegreene",
    "lrv": 75,
    "shortlist": ""
  },
  {
    "idx": 160,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/dark-lead-colour",
    "colour": "#6d6a65",
    "name": "Dark Lead Colour (118)",
    "number": 118,
    "vendor": "littlegreene",
    "lrv": 18,
    "shortlist": ""
  },
  {
    "idx": 81,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/dash-of-soot-244",
    "colour": "#c9c0ba",
    "name": "Dash of Soot (244)",
    "number": 244,
    "vendor": "littlegreene",
    "lrv": 53,
    "shortlist": ""
  },
  {
    "idx": 227,
    "link": "https://www.littlegreene.com/debutant",
    "colour": "#cda1b2",
    "name": "Debutant",
    "number": -1,
    "vendor": "littlegreene",
    "lrv": 0,
    "shortlist": ""
  },
  {
    "idx": 185,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/deep-space-blue",
    "colour": "#003b59",
    "name": "Deep Space Blue (207)",
    "number": 207,
    "vendor": "littlegreene",
    "lrv": 7,
    "shortlist": 2
  },
  {
    "idx": 194,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/delic",
    "colour": "#dcedf1",
    "name": "Delicate Blue (248)",
    "number": 248,
    "vendor": "littlegreene",
    "lrv": 72,
    "shortlist": ""
  },
  {
    "idx": 201,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/dockb",
    "colour": "#2e3742",
    "name": "Dock Blue (252)",
    "number": 252,
    "vendor": "littlegreene",
    "lrv": 5,
    "shortlist": ""
  },
  {
    "idx": 152,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/dolphin-246",
    "colour": "#877970",
    "name": "Dolphin (246)",
    "number": 246,
    "vendor": "littlegreene",
    "lrv": 31,
    "shortlist": ""
  },
  {
    "idx": 218,
    "link": "https://www.littlegreene.com/paint/colour/red-and-pink-paint/dorchester-pink",
    "colour": "#dcc6ba",
    "name": "Dorchester Pink",
    "number": 213,
    "vendor": "littlegreene",
    "lrv": 53,
    "shortlist": ""
  },
  {
    "idx": 69,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/dorchester-pink",
    "colour": "#dcc6ba",
    "name": "Dorchester Pink (213)",
    "number": 213,
    "vendor": "littlegreene",
    "lrv": 53,
    "shortlist": ""
  },
  {
    "idx": 25,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/down-242",
    "colour": "#eee6dd",
    "name": "Down (242)",
    "number": 242,
    "vendor": "littlegreene",
    "lrv": 75,
    "shortlist": ""
  },
  {
    "idx": 42,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/drizzle",
    "colour": "#D7E7E7",
    "name": "Drizzle (217)",
    "number": 217,
    "vendor": "littlegreene",
    "lrv": 68,
    "shortlist": ""
  },
  {
    "idx": 166,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/drummond",
    "colour": "#8f3626",
    "name": "Drummond (16)",
    "number": 16,
    "vendor": "littlegreene",
    "lrv": 12,
    "shortlist": ""
  },
  {
    "idx": 110,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/eau-de-nil",
    "colour": "#c8d295",
    "name": "Eau-de-Nil (90)",
    "number": 90,
    "vendor": "littlegreene",
    "lrv": 53,
    "shortlist": ""
  },
  {
    "idx": 15,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/echo",
    "colour": "#e8f1ee",
    "name": "Echo (98)",
    "number": 98,
    "vendor": "littlegreene",
    "lrv": 77,
    "shortlist": ""
  },
  {
    "idx": 223,
    "link": "https://www.littlegreene.com/far-atoll",
    "colour": "#cbbeca",
    "name": "Far Atoll",
    "number": -1,
    "vendor": "littlegreene",
    "lrv": 0,
    "shortlist": ""
  },
  {
    "idx": 177,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/felt",
    "colour": "#524138",
    "name": "Felt (145)",
    "number": 145,
    "vendor": "littlegreene",
    "lrv": 14,
    "shortlist": ""
  },
  {
    "idx": 82,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/fescue-231",
    "colour": "#ccc7b9",
    "name": "Fescue (231)",
    "number": 231,
    "vendor": "littlegreene",
    "lrv": 61,
    "shortlist": ""
  },
  {
    "idx": 230,
    "link": "https://www.littlegreene.com/firefly",
    "colour": "#af2426",
    "name": "Firefly",
    "number": -1,
    "vendor": "littlegreene",
    "lrv": 0,
    "shortlist": ""
  },
  {
    "idx": 18,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/first-light",
    "colour": "#fcf6d8",
    "name": "First Light (49)",
    "number": 49,
    "vendor": "littlegreene",
    "lrv": 88,
    "shortlist": ""
  },
  {
    "idx": 3,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/flint-236",
    "colour": "#f9f7f2",
    "name": "Flint (236)",
    "number": 236,
    "vendor": "littlegreene",
    "lrv": 86,
    "shortlist": ""
  },
  {
    "idx": 86,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/french-grey",
    "colour": "#c8c5b7",
    "name": "French Grey (113)",
    "number": 113,
    "vendor": "littlegreene",
    "lrv": 55,
    "shortlist": ""
  },
  {
    "idx": 114,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/french-grey-dark",
    "colour": "#b4b1a0",
    "name": "French Grey Dark (163)",
    "number": 163,
    "vendor": "littlegreene",
    "lrv": 41,
    "shortlist": ""
  },
  {
    "idx": 63,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/french-grey-mid",
    "colour": "#d6d6ca",
    "name": "French Grey Mid (162)",
    "number": 162,
    "vendor": "littlegreene",
    "lrv": 66,
    "shortlist": ""
  },
  {
    "idx": 35,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/french-grey-pale",
    "colour": "#e7e7db",
    "name": "French Grey Pale (161)",
    "number": 161,
    "vendor": "littlegreene",
    "lrv": 73,
    "shortlist": ""
  },
  {
    "idx": 171,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/furrow-241",
    "colour": "#605241",
    "name": "Furrow (241)",
    "number": 241,
    "vendor": "littlegreene",
    "lrv": 14,
    "shortlist": ""
  },
  {
    "idx": 157,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/garden",
    "colour": "#739153",
    "name": "Garden (86)",
    "number": 86,
    "vendor": "littlegreene",
    "lrv": 29,
    "shortlist": ""
  },
  {
    "idx": 5,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/gauze",
    "colour": "#eef0f1",
    "name": "Gauze (106)",
    "number": 106,
    "vendor": "littlegreene",
    "lrv": 75,
    "shortlist": ""
  },
  {
    "idx": 68,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/gauze-dark",
    "colour": "#c7cccf",
    "name": "Gauze Dark (166)",
    "number": 166,
    "vendor": "littlegreene",
    "lrv": 56,
    "shortlist": 1
  },
  {
    "idx": 51,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/gauze-deep",
    "colour": "#d2d6d9",
    "name": "Gauze Deep (165)",
    "number": 165,
    "vendor": "littlegreene",
    "lrv": 64,
    "shortlist": 1
  },
  {
    "idx": 28,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/gauze-mid",
    "colour": "#e4e6e8",
    "name": "Gauze Mid (164)",
    "number": 164,
    "vendor": "littlegreene",
    "lrv": 69,
    "shortlist": ""
  },
  {
    "idx": 59,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/gentle-sky",
    "colour": "#c6e1e0",
    "name": "Gentle Sky (102)",
    "number": 102,
    "vendor": "littlegreene",
    "lrv": 71,
    "shortlist": ""
  },
  {
    "idx": 131,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/green-verditer",
    "colour": "#6ac59c",
    "name": "Green Verditer (92)",
    "number": 92,
    "vendor": "littlegreene",
    "lrv": 46,
    "shortlist": ""
  },
  {
    "idx": 168,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/grey-moss-234",
    "colour": "#645d51",
    "name": "Grey Moss (234)",
    "number": 234,
    "vendor": "littlegreene",
    "lrv": 20,
    "shortlist": ""
  },
  {
    "idx": 211,
    "link": "https://www.littlegreene.com/paint/colour/blue-paint/grey-stone",
    "colour": "#8aa0ad",
    "name": "Grey Stone (276)",
    "number": 276,
    "vendor": "littlegreene",
    "lrv": 35,
    "shortlist": 2
  },
  {
    "idx": 146,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/grey-teal-226",
    "colour": "#898983",
    "name": "Grey Teal (226)",
    "number": 226,
    "vendor": "littlegreene",
    "lrv": 29,
    "shortlist": ""
  },
  {
    "idx": 79,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/hammock",
    "colour": "#ddc8ac",
    "name": "Hammock (38)",
    "number": 38,
    "vendor": "littlegreene",
    "lrv": 60,
    "shortlist": ""
  },
  {
    "idx": 165,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/heat",
    "colour": "#9f3c19",
    "name": "Heat (24)",
    "number": 24,
    "vendor": "littlegreene",
    "lrv": 15,
    "shortlist": ""
  },
  {
    "idx": 212,
    "link": "https://www.littlegreene.com/paint/colour/show-all/hellebore",
    "colour": "#C8A5A3",
    "name": "Hellebore (275)",
    "number": 275,
    "vendor": "littlegreene",
    "lrv": 39,
    "shortlist": ""
  },
  {
    "idx": 191,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/hicks-blue",
    "colour": "#223849",
    "name": "Hicks' Blue (208)",
    "number": 208,
    "vendor": "littlegreene",
    "lrv": 10,
    "shortlist": 2
  },
  {
    "idx": 14,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/hollyhock",
    "colour": "#f3eee8",
    "name": "Hollyhock (25)",
    "number": 25,
    "vendor": "littlegreene",
    "lrv": 76,
    "shortlist": ""
  },
  {
    "idx": 219,
    "link": "https://www.littlegreene.com/paint/colour/red-and-pink-paint/hortense",
    "colour": "#D4CBD5",
    "name": "Hortense",
    "number": 266,
    "vendor": "littlegreene",
    "lrv": 55,
    "shortlist": ""
  },
  {
    "idx": 54,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/indian-sand",
    "colour": "#ffe5aa",
    "name": "Indian Sand (54)",
    "number": 54,
    "vendor": "littlegreene",
    "lrv": 72,
    "shortlist": ""
  },
  {
    "idx": 47,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/inox-224",
    "colour": "#dbdbd8",
    "name": "Inox (224)",
    "number": 224,
    "vendor": "littlegreene",
    "lrv": 67,
    "shortlist": 1
  },
  {
    "idx": 190,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/invisible-green",
    "colour": "#2e2b14",
    "name": "Invisible Green (56)",
    "number": 56,
    "vendor": "littlegreene",
    "lrv": 9,
    "shortlist": ""
  },
  {
    "idx": 77,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/ivory",
    "colour": "#f6dc96",
    "name": "Ivory (62)",
    "number": 62,
    "vendor": "littlegreene",
    "lrv": 67,
    "shortlist": ""
  },
  {
    "idx": 161,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/jack-black",
    "colour": "#040e0f",
    "name": "Jack Black (119)",
    "number": 119,
    "vendor": "littlegreene",
    "lrv": 4,
    "shortlist": ""
  },
  {
    "idx": 133,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/james",
    "colour": "#8597a3",
    "name": "James (108)",
    "number": 108,
    "vendor": "littlegreene",
    "lrv": 37,
    "shortlist": 2
  },
  {
    "idx": 49,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/joanna",
    "colour": "#ede8e2",
    "name": "Joanna (130)",
    "number": 130,
    "vendor": "littlegreene",
    "lrv": 68,
    "shortlist": ""
  },
  {
    "idx": 23,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/julie-s-dream",
    "colour": "#f1e7dd",
    "name": "Julie's Dream (26)",
    "number": 26,
    "vendor": "littlegreene",
    "lrv": 73,
    "shortlist": ""
  },
  {
    "idx": 164,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/juniper-ash",
    "colour": "#525969",
    "name": "Juniper Ash (115)",
    "number": 115,
    "vendor": "littlegreene",
    "lrv": 17,
    "shortlist": 2
  },
  {
    "idx": 109,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/kitchen-green",
    "colour": "#c9cb9a",
    "name": "Kitchen Green (85)",
    "number": 85,
    "vendor": "littlegreene",
    "lrv": 50,
    "shortlist": ""
  },
  {
    "idx": 169,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/knightsbridge",
    "colour": "#65564e",
    "name": "Knightsbridge (215)",
    "number": 215,
    "vendor": "littlegreene",
    "lrv": 15,
    "shortlist": ""
  },
  {
    "idx": 181,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/lamp-black-228",
    "colour": "#2e2d2e",
    "name": "Lamp Black (228)",
    "number": 228,
    "vendor": "littlegreene",
    "lrv": 7,
    "shortlist": ""
  },
  {
    "idx": 141,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/lead-colour",
    "colour": "#969183",
    "name": "Lead Colour (117)",
    "number": 117,
    "vendor": "littlegreene",
    "lrv": 33,
    "shortlist": ""
  },
  {
    "idx": 148,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/leather",
    "colour": "#cc3852",
    "name": "Leather (191)",
    "number": 191,
    "vendor": "littlegreene",
    "lrv": 19,
    "shortlist": ""
  },
  {
    "idx": 103,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/lemon-mivvi",
    "colour": "#fff371",
    "name": "Lemon Mivvi",
    "number": -1,
    "vendor": "littlegreene",
    "lrv": 101,
    "shortlist": ""
  },
  {
    "idx": 96,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/lemon-tree",
    "colour": "#ecdd87",
    "name": "Lemon Tree (69)",
    "number": 69,
    "vendor": "littlegreene",
    "lrv": 64,
    "shortlist": ""
  },
  {
    "idx": 102,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/light-peachblossom",
    "colour": "#c6b2a7",
    "name": "Light Peachblossom (3)",
    "number": 3,
    "vendor": "littlegreene",
    "lrv": 43,
    "shortlist": ""
  },
  {
    "idx": 61,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/limestone-238",
    "colour": "#ddd4c3",
    "name": "Limestone (238)",
    "number": 238,
    "vendor": "littlegreene",
    "lrv": 61,
    "shortlist": ""
  },
  {
    "idx": 20,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/linen-wash",
    "colour": "#f8f2de",
    "name": "Linen Wash (33)",
    "number": 33,
    "vendor": "littlegreene",
    "lrv": 79,
    "shortlist": ""
  },
  {
    "idx": 27,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/linnet",
    "colour": "#f6f2d7",
    "name": "Linnet (89)",
    "number": 89,
    "vendor": "littlegreene",
    "lrv": 80,
    "shortlist": ""
  },
  {
    "idx": 208,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/livid",
    "colour": "#6d7d78",
    "name": "Livid (263)",
    "number": 263,
    "vendor": "littlegreene",
    "lrv": 19,
    "shortlist": ""
  },
  {
    "idx": 1,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/loft-white-222",
    "colour": "#fdfdfa",
    "name": "Loft White (222)",
    "number": 222,
    "vendor": "littlegreene",
    "lrv": 92,
    "shortlist": ""
  },
  {
    "idx": 162,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/mambo",
    "colour": "#5371B8",
    "name": "Mambo (112)",
    "number": 112,
    "vendor": "littlegreene",
    "lrv": 17,
    "shortlist": ""
  },
  {
    "idx": 145,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/marigold",
    "colour": "#f0841f",
    "name": "Marigold (209)",
    "number": 209,
    "vendor": "littlegreene",
    "lrv": 36,
    "shortlist": ""
  },
  {
    "idx": 187,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/marine-blue",
    "colour": "#03414e",
    "name": "Marine Blue (95)",
    "number": 95,
    "vendor": "littlegreene",
    "lrv": 13,
    "shortlist": ""
  },
  {
    "idx": 198,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/mazar",
    "colour": "#235580",
    "name": "Mazarine (256)",
    "number": 256,
    "vendor": "littlegreene",
    "lrv": 9,
    "shortlist": 2
  },
  {
    "idx": 142,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/mid-lead-colour",
    "colour": "#8c8c8c",
    "name": "Mid Lead Colour (114)",
    "number": 114,
    "vendor": "littlegreene",
    "lrv": 29,
    "shortlist": ""
  },
  {
    "idx": 97,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/milk-thistle",
    "colour": "#c4b1b9",
    "name": "Milk Thistle (187)",
    "number": 187,
    "vendor": "littlegreene",
    "lrv": 49,
    "shortlist": ""
  },
  {
    "idx": 84,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/mirage-ii",
    "colour": "#d1c0b2",
    "name": "Mirage II (4)",
    "number": 4,
    "vendor": "littlegreene",
    "lrv": 57,
    "shortlist": ""
  },
  {
    "idx": 40,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/mirror",
    "colour": "#e5e4d0",
    "name": "Mirror (219)",
    "number": 219,
    "vendor": "littlegreene",
    "lrv": 71,
    "shortlist": ""
  },
  {
    "idx": 156,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/mischief",
    "colour": "#ae385d",
    "name": "Mischief (13)",
    "number": 13,
    "vendor": "littlegreene",
    "lrv": 16,
    "shortlist": ""
  },
  {
    "idx": 153,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/mister-david",
    "colour": "#dead14",
    "name": "Mister David (47)",
    "number": 47,
    "vendor": "littlegreene",
    "lrv": 52,
    "shortlist": ""
  },
  {
    "idx": 93,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/mono",
    "colour": "#c3c2b9",
    "name": "Mono (218)",
    "number": 218,
    "vendor": "littlegreene",
    "lrv": 52,
    "shortlist": 1
  },
  {
    "idx": 205,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/moons",
    "colour": "#156584",
    "name": "Moon Shadow (261)",
    "number": 261,
    "vendor": "littlegreene",
    "lrv": 11,
    "shortlist": 2
  },
  {
    "idx": 95,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/mortar-239",
    "colour": "#ccc1ab",
    "name": "Mortar (239)",
    "number": 239,
    "vendor": "littlegreene",
    "lrv": 52,
    "shortlist": ""
  },
  {
    "idx": 88,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/mushroom",
    "colour": "#d3c3ae",
    "name": "Mushroom (142)",
    "number": 142,
    "vendor": "littlegreene",
    "lrv": 51,
    "shortlist": ""
  },
  {
    "idx": 136,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/normandy-grey",
    "colour": "#a0a07d",
    "name": "Normandy Grey (79)",
    "number": 79,
    "vendor": "littlegreene",
    "lrv": 39,
    "shortlist": ""
  },
  {
    "idx": 117,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/oak-apple",
    "colour": "#cdc185",
    "name": "Oak Apple (63)",
    "number": 63,
    "vendor": "littlegreene",
    "lrv": 49,
    "shortlist": ""
  },
  {
    "idx": 193,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/obsidian-green",
    "colour": "#132019",
    "name": "Obsidian Green (216)",
    "number": 216,
    "vendor": "littlegreene",
    "lrv": 6,
    "shortlist": ""
  },
  {
    "idx": 17,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/old-paper-ii",
    "colour": "#ffefdd",
    "name": "Old Paper II (146)",
    "number": 146,
    "vendor": "littlegreene",
    "lrv": 79,
    "shortlist": ""
  },
  {
    "idx": 195,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/oldsc",
    "colour": "#4999ae",
    "name": "Old School Blue (259)",
    "number": 259,
    "vendor": "littlegreene",
    "lrv": 25,
    "shortlist": 2
  },
  {
    "idx": 180,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/olive-colour",
    "colour": "#42431f",
    "name": "Olive Colour (72)",
    "number": 72,
    "vendor": "littlegreene",
    "lrv": 11,
    "shortlist": ""
  },
  {
    "idx": 85,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/olive-oil",
    "colour": "#dbd7a7",
    "name": "Olive Oil (83)",
    "number": 83,
    "vendor": "littlegreene",
    "lrv": 60,
    "shortlist": 0
  },
  {
    "idx": 132,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/orange-aurora",
    "colour": "#e3634b",
    "name": "Orange Aurora (21)",
    "number": 21,
    "vendor": "littlegreene",
    "lrv": 29,
    "shortlist": ""
  },
  {
    "idx": 202,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/paleb",
    "colour": "#bbe9ed",
    "name": "Pale Berlin (258)",
    "number": 258,
    "vendor": "littlegreene",
    "lrv": 66,
    "shortlist": ""
  },
  {
    "idx": 139,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/pale-lime",
    "colour": "#c5c951",
    "name": "Pale Lime (70)",
    "number": 70,
    "vendor": "littlegreene",
    "lrv": 48,
    "shortlist": ""
  },
  {
    "idx": 209,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/palew",
    "colour": "#b7ccda",
    "name": "Pale Wedgwood (249)",
    "number": 249,
    "vendor": "littlegreene",
    "lrv": 52,
    "shortlist": 1
  },
  {
    "idx": 121,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/pea-green",
    "colour": "#a9c093",
    "name": "Pea Green (91)",
    "number": 91,
    "vendor": "littlegreene",
    "lrv": 45,
    "shortlist": ""
  },
  {
    "idx": 57,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/pearl-colour",
    "colour": "#d4dacc",
    "name": "Pearl Colour (100)",
    "number": 100,
    "vendor": "littlegreene",
    "lrv": 62,
    "shortlist": ""
  },
  {
    "idx": 89,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/pearl-colour-dark",
    "colour": "#bec5b8",
    "name": "Pearl Colour Dark (169)",
    "number": 169,
    "vendor": "littlegreene",
    "lrv": 50,
    "shortlist": ""
  },
  {
    "idx": 43,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/pearl-colour-mid",
    "colour": "#dde3d6",
    "name": "Pearl Colour Mid (168)",
    "number": 168,
    "vendor": "littlegreene",
    "lrv": 73,
    "shortlist": ""
  },
  {
    "idx": 26,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/pearl-colour-pale",
    "colour": "#e6ebe1",
    "name": "Pearl Colour Pale (167)",
    "number": 167,
    "vendor": "littlegreene",
    "lrv": 79,
    "shortlist": ""
  },
  {
    "idx": 225,
    "link": "https://www.littlegreene.com/penelope",
    "colour": "#efcedf",
    "name": "Penelope",
    "number": -1,
    "vendor": "littlegreene",
    "lrv": 0,
    "shortlist": ""
  },
  {
    "idx": 123,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/perennial-grey-245",
    "colour": "#afa49c",
    "name": "Perennial Grey (245)",
    "number": 245,
    "vendor": "littlegreene",
    "lrv": 44,
    "shortlist": ""
  },
  {
    "idx": 144,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/phthalo-green",
    "colour": "#74c84c",
    "name": "Phthalo Green (199)",
    "number": 199,
    "vendor": "littlegreene",
    "lrv": 49,
    "shortlist": ""
  },
  {
    "idx": 39,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/pink-slip",
    "colour": "#ecd2cb",
    "name": "Pink Slip (220)",
    "number": 220,
    "vendor": "littlegreene",
    "lrv": 63,
    "shortlist": ""
  },
  {
    "idx": 228,
    "link": "https://www.littlegreene.com/pipedream",
    "colour": "#c3919d",
    "name": "Pipedream",
    "number": -1,
    "vendor": "littlegreene",
    "lrv": 0,
    "shortlist": ""
  },
  {
    "idx": 99,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/portland-stone",
    "colour": "#c9c5a8",
    "name": "Portland Stone (77)",
    "number": 77,
    "vendor": "littlegreene",
    "lrv": 57,
    "shortlist": ""
  },
  {
    "idx": 137,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/portland-stone-dark",
    "colour": "#a29c7c",
    "name": "Portland Stone Dark (157)",
    "number": 157,
    "vendor": "littlegreene",
    "lrv": 45,
    "shortlist": ""
  },
  {
    "idx": 122,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/portland-stone-deep",
    "colour": "#bab492",
    "name": "Portland Stone Deep (156)",
    "number": 156,
    "vendor": "littlegreene",
    "lrv": 52,
    "shortlist": ""
  },
  {
    "idx": 37,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/portland-stone-pale",
    "colour": "#e9e6d5",
    "name": "Portland Stone Pale (155)",
    "number": 155,
    "vendor": "littlegreene",
    "lrv": 75,
    "shortlist": ""
  },
  {
    "idx": 192,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/purple-brown",
    "colour": "#271410",
    "name": "Purple Brown (8)",
    "number": 8,
    "vendor": "littlegreene",
    "lrv": 6,
    "shortlist": ""
  },
  {
    "idx": 199,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/rege1",
    "colour": "#92cade",
    "name": "Regency Blue (253)",
    "number": 253,
    "vendor": "littlegreene",
    "lrv": 48,
    "shortlist": ""
  },
  {
    "idx": 100,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/rolling-fog",
    "colour": "#c5bba8",
    "name": "Rolling Fog (143)",
    "number": 143,
    "vendor": "littlegreene",
    "lrv": 49,
    "shortlist": ""
  },
  {
    "idx": 130,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/rolling-fog-dark",
    "colour": "#b1a48a",
    "name": "Rolling Fog Dark (160)",
    "number": 160,
    "vendor": "littlegreene",
    "lrv": 36,
    "shortlist": ""
  },
  {
    "idx": 65,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/rolling-fog-mid",
    "colour": "#dbd5c4",
    "name": "Rolling Fog Mid (159)",
    "number": 159,
    "vendor": "littlegreene",
    "lrv": 68,
    "shortlist": ""
  },
  {
    "idx": 30,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/rolling-fog-pale",
    "colour": "#eee8d7",
    "name": "Rolling Fog Pale (158)",
    "number": 158,
    "vendor": "littlegreene",
    "lrv": 76,
    "shortlist": ""
  },
  {
    "idx": 124,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/roman-plaster",
    "colour": "#bfb08f",
    "name": "Roman Plaster (31)",
    "number": 31,
    "vendor": "littlegreene",
    "lrv": 38,
    "shortlist": ""
  },
  {
    "idx": 206,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/route",
    "colour": "#50a2c2",
    "name": "Route One (254)",
    "number": 254,
    "vendor": "littlegreene",
    "lrv": 29,
    "shortlist": 2
  },
  {
    "idx": 196,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/royal",
    "colour": "#294356",
    "name": "Royal Navy (257)",
    "number": 257,
    "vendor": "littlegreene",
    "lrv": 6,
    "shortlist": ""
  },
  {
    "idx": 66,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/rubine-ashes-243",
    "colour": "#d5cec8",
    "name": "Rubine Ashes (243)",
    "number": 243,
    "vendor": "littlegreene",
    "lrv": 62,
    "shortlist": ""
  },
  {
    "idx": 8,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/rusling",
    "colour": "#fff0e0",
    "name": "Rusling (9)",
    "number": 9,
    "vendor": "littlegreene",
    "lrv": 82,
    "shortlist": ""
  },
  {
    "idx": 159,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/sage-green",
    "colour": "#77815c",
    "name": "Sage Green (80)",
    "number": 80,
    "vendor": "littlegreene",
    "lrv": 23,
    "shortlist": ""
  },
  {
    "idx": 73,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/salix",
    "colour": "#c2d2c0",
    "name": "Salix (99)",
    "number": 99,
    "vendor": "littlegreene",
    "lrv": 58,
    "shortlist": ""
  },
  {
    "idx": 167,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/scree-227",
    "colour": "#595a57",
    "name": "Scree (227)",
    "number": 227,
    "vendor": "littlegreene",
    "lrv": 15,
    "shortlist": ""
  },
  {
    "idx": 221,
    "link": "https://www.littlegreene.com/sea-heather",
    "colour": "#b4a1b4",
    "name": "Sea Heather",
    "number": -1,
    "vendor": "littlegreene",
    "lrv": 0,
    "shortlist": ""
  },
  {
    "idx": 138,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/serpentine-233",
    "colour": "#989180",
    "name": "Serpentine (233)",
    "number": 233,
    "vendor": "littlegreene",
    "lrv": 37,
    "shortlist": ""
  },
  {
    "idx": 9,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/shallows-223",
    "colour": "#f1f1ef",
    "name": "Shallows (223)",
    "number": 223,
    "vendor": "littlegreene",
    "lrv": 76,
    "shortlist": ""
  },
  {
    "idx": 2,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/shirting",
    "colour": "#f8f8f8",
    "name": "Shirting (129)",
    "number": 129,
    "vendor": "littlegreene",
    "lrv": 88,
    "shortlist": ""
  },
  {
    "idx": 154,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/silt",
    "colour": "#857e6c",
    "name": "Silt (40)",
    "number": 40,
    "vendor": "littlegreene",
    "lrv": 27,
    "shortlist": ""
  },
  {
    "idx": 80,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/sky-blue",
    "colour": "#add4de",
    "name": "Sky Blue (103)",
    "number": 103,
    "vendor": "littlegreene",
    "lrv": 47,
    "shortlist": 1
  },
  {
    "idx": 6,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/slaked-lime",
    "colour": "#f7f3ea",
    "name": "Slaked Lime (105)",
    "number": 105,
    "vendor": "littlegreene",
    "lrv": 82,
    "shortlist": 1
  },
  {
    "idx": 113,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/slaked-lime-dark",
    "colour": "#bdb29a",
    "name": "Slaked Lime Dark (151)",
    "number": 151,
    "vendor": "littlegreene",
    "lrv": 52,
    "shortlist": ""
  },
  {
    "idx": 91,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/slaked-lime-deep",
    "colour": "#d2c7ae",
    "name": "Slaked Lime Deep (150)",
    "number": 150,
    "vendor": "littlegreene",
    "lrv": 61,
    "shortlist": ""
  },
  {
    "idx": 46,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/slaked-lime-mid",
    "colour": "#e7decd",
    "name": "Slaked Lime Mid (149)",
    "number": 149,
    "vendor": "littlegreene",
    "lrv": 74,
    "shortlist": 1
  },
  {
    "idx": 203,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/smalt",
    "colour": "#29467B",
    "name": "Smalt (255)",
    "number": 255,
    "vendor": "littlegreene",
    "lrv": 7,
    "shortlist": 2
  },
  {
    "idx": 184,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/spanish-brown",
    "colour": "#3f2b1f",
    "name": "Spanish Brown (32)",
    "number": 32,
    "vendor": "littlegreene",
    "lrv": 7,
    "shortlist": ""
  },
  {
    "idx": 108,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/spearmint",
    "colour": "#a3c89b",
    "name": "Spearmint (202)",
    "number": 202,
    "vendor": "littlegreene",
    "lrv": 47,
    "shortlist": ""
  },
  {
    "idx": 7,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/starling-s-egg",
    "colour": "#edf4ed",
    "name": "Starling's Egg (97)",
    "number": 97,
    "vendor": "littlegreene",
    "lrv": 83,
    "shortlist": ""
  },
  {
    "idx": 12,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/stock",
    "colour": "#f8f4e3",
    "name": "Stock (37)",
    "number": 37,
    "vendor": "littlegreene",
    "lrv": 76,
    "shortlist": ""
  },
  {
    "idx": 87,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/stock-dark",
    "colour": "#e0ce9d",
    "name": "Stock Dark (175)",
    "number": 175,
    "vendor": "littlegreene",
    "lrv": 60,
    "shortlist": ""
  },
  {
    "idx": 44,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/stock-mid",
    "colour": "#efe4c9",
    "name": "Stock Mid (173)",
    "number": 173,
    "vendor": "littlegreene",
    "lrv": 74,
    "shortlist": ""
  },
  {
    "idx": 56,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/stock-deep",
    "colour": "#e9ddbc",
    "name": "Stock-Deep (174)",
    "number": 174,
    "vendor": "littlegreene",
    "lrv": 68,
    "shortlist": ""
  },
  {
    "idx": 111,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/stone-dark-cool",
    "colour": "#c7be9c",
    "name": "Stone-Dark-Cool (67)",
    "number": 67,
    "vendor": "littlegreene",
    "lrv": 46,
    "shortlist": ""
  },
  {
    "idx": 151,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/stone-dark-warm",
    "colour": "#a28555",
    "name": "Stone-Dark-Warm (36)",
    "number": 36,
    "vendor": "littlegreene",
    "lrv": 31,
    "shortlist": ""
  },
  {
    "idx": 83,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/stone-mid-cool",
    "colour": "#d9cfab",
    "name": "Stone-Mid-Cool (66)",
    "number": 66,
    "vendor": "littlegreene",
    "lrv": 54,
    "shortlist": ""
  },
  {
    "idx": 105,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/stone-mid-warm",
    "colour": "#dec58f",
    "name": "Stone-Mid-Warm (35)",
    "number": 35,
    "vendor": "littlegreene",
    "lrv": 51,
    "shortlist": ""
  },
  {
    "idx": 90,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/stone-pale-cool",
    "colour": "#e2d29b",
    "name": "Stone-Pale-Cool (65)",
    "number": 65,
    "vendor": "littlegreene",
    "lrv": 63,
    "shortlist": ""
  },
  {
    "idx": 62,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/stone-pale-warm",
    "colour": "#f3d5af",
    "name": "Stone-Pale-Warm (34)",
    "number": 34,
    "vendor": "littlegreene",
    "lrv": 67,
    "shortlist": ""
  },
  {
    "idx": 222,
    "link": "https://www.littlegreene.com/strappy",
    "colour": "#796a81",
    "name": "Strappy",
    "number": -1,
    "vendor": "littlegreene",
    "lrv": 0,
    "shortlist": ""
  },
  {
    "idx": 118,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/sunlight",
    "colour": "#dfc774",
    "name": "Sunlight (135)",
    "number": 135,
    "vendor": "littlegreene",
    "lrv": 53,
    "shortlist": ""
  },
  {
    "idx": 189,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/thai-sapphire",
    "colour": "#12042a",
    "name": "Thai Sapphire (116)",
    "number": 116,
    "vendor": "littlegreene",
    "lrv": 5,
    "shortlist": ""
  },
  {
    "idx": 178,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/theatre-red",
    "colour": "#711324",
    "name": "Theatre Red (192)",
    "number": 192,
    "vendor": "littlegreene",
    "lrv": 9,
    "shortlist": ""
  },
  {
    "idx": 149,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/tivoli",
    "colour": "#5c8ea9",
    "name": "Tivoli (206)",
    "number": 206,
    "vendor": "littlegreene",
    "lrv": 31,
    "shortlist": 2
  },
  {
    "idx": 182,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/toad-235",
    "colour": "#382f24",
    "name": "Toad (235)",
    "number": 235,
    "vendor": "littlegreene",
    "lrv": 8,
    "shortlist": ""
  },
  {
    "idx": 116,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/tracery-ii",
    "colour": "#b7b79f",
    "name": "Tracery II (78)",
    "number": 78,
    "vendor": "littlegreene",
    "lrv": 52,
    "shortlist": ""
  },
  {
    "idx": 127,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/true-taupe-240",
    "colour": "#b5a791",
    "name": "True Taupe (240)",
    "number": 240,
    "vendor": "littlegreene",
    "lrv": 33,
    "shortlist": ""
  },
  {
    "idx": 150,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/trumpet",
    "colour": "#fbe601",
    "name": "Trumpet (196)",
    "number": 196,
    "vendor": "littlegreene",
    "lrv": 65,
    "shortlist": ""
  },
  {
    "idx": 135,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/turquoise-blue",
    "colour": "#6eb399",
    "name": "Turquoise Blue (93)",
    "number": 93,
    "vendor": "littlegreene",
    "lrv": 38,
    "shortlist": ""
  },
  {
    "idx": 163,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/tuscan-red",
    "colour": "#874535",
    "name": "Tuscan Red (140)",
    "number": 140,
    "vendor": "littlegreene",
    "lrv": 17,
    "shortlist": ""
  },
  {
    "idx": 22,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/tusk-237",
    "colour": "#f1ebe1",
    "name": "Tusk (237)",
    "number": 237,
    "vendor": "littlegreene",
    "lrv": 78,
    "shortlist": ""
  },
  {
    "idx": 128,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/urbane-grey-225",
    "colour": "#a1a19c",
    "name": "Urbane Grey (225)",
    "number": 225,
    "vendor": "littlegreene",
    "lrv": 42,
    "shortlist": ""
  },
  {
    "idx": 38,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/welcome",
    "colour": "#e3dcd8",
    "name": "Welcome (109)",
    "number": 109,
    "vendor": "littlegreene",
    "lrv": 68,
    "shortlist": ""
  },
  {
    "idx": 106,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/welcome-dark",
    "colour": "#bab0b0",
    "name": "Welcome Dark (181)",
    "number": 181,
    "vendor": "littlegreene",
    "lrv": 49,
    "shortlist": ""
  },
  {
    "idx": 76,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/welcome-deep",
    "colour": "#cdc6c3",
    "name": "Welcome Deep (180)",
    "number": 180,
    "vendor": "littlegreene",
    "lrv": 61,
    "shortlist": ""
  },
  {
    "idx": 10,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/welcome-pale",
    "colour": "#f1edeb",
    "name": "Welcome Pale (179)",
    "number": 179,
    "vendor": "littlegreene",
    "lrv": 77,
    "shortlist": ""
  },
  {
    "idx": 36,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/whisper",
    "colour": "#e2dade",
    "name": "Whisper (5)",
    "number": 5,
    "vendor": "littlegreene",
    "lrv": 65,
    "shortlist": ""
  },
  {
    "idx": 13,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/white-lead",
    "colour": "#f9f8e3",
    "name": "White Lead (74)",
    "number": 74,
    "vendor": "littlegreene",
    "lrv": 82,
    "shortlist": ""
  },
  {
    "idx": 78,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/white-lead-dark",
    "colour": "#eadf9d",
    "name": "White Lead Dark (172)",
    "number": 172,
    "vendor": "littlegreene",
    "lrv": 66,
    "shortlist": 0
  },
  {
    "idx": 58,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/white-lead-deep",
    "colour": "#f0e8b9",
    "name": "White Lead Deep (171)",
    "number": 171,
    "vendor": "littlegreene",
    "lrv": 75,
    "shortlist": ""
  },
  {
    "idx": 34,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/white-lead-mid",
    "colour": "#f5f1ce",
    "name": "White Lead Mid (170)",
    "number": 170,
    "vendor": "littlegreene",
    "lrv": 80,
    "shortlist": ""
  },
  {
    "idx": 16,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/whitening",
    "colour": "#f4f2e5",
    "name": "Whitening (41)",
    "number": 41,
    "vendor": "littlegreene",
    "lrv": 80,
    "shortlist": ""
  },
  {
    "idx": 210,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/woadz",
    "colour": "#436382",
    "name": "Woad (251)",
    "number": 251,
    "vendor": "littlegreene",
    "lrv": 12,
    "shortlist": 2
  },
  {
    "idx": 24,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/wood-ash-229",
    "colour": "#eeeae1",
    "name": "Wood Ash (229)",
    "number": 229,
    "vendor": "littlegreene",
    "lrv": 79,
    "shortlist": ""
  },
  {
    "idx": 98,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/woodbine",
    "colour": "#e4d292",
    "name": "Woodbine (134)",
    "number": 134,
    "vendor": "littlegreene",
    "lrv": 65,
    "shortlist": ""
  },
  {
    "idx": 143,
    "link": "https://www.littlegreene.com/paint/finish/intelligent-eggshell/yellow-pink",
    "colour": "#d0a946",
    "name": "Yellow-Pink (46)",
    "number": 46,
    "vendor": "littlegreene",
    "lrv": 41,
    "shortlist": ""
  }
];
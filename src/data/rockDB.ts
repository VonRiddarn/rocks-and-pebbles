type Category = "Igneous" |
  "Sedimentary" |
  "Metamorphic" |
  "Granite" |
  "Limestone" |
  "Marble" |
  "Special";

type Rock = {
  name: string;
  description: string;
  category: Category;
  color: string[];
  price: number;
  hardness: number;
  filters: string[];
};

const rockDB: Rock[] = [
	{ name: "Basalt", description: "A dark, fine-grained volcanic rock formed from rapidly cooling lava.", category: "Igneous", color: ["black"], price: 50, hardness: 6, filters: ["small", "medium", "hard"] },
	{ name: "Andesite", description: "A grayish volcanic rock with a fine to intermediate grain size.", category: "Igneous", color: ["gray"], price: 60, hardness: 6, filters: ["medium", "rough", "hard"] },
	{ name: "Rhyolite", description: "A light-colored volcanic rock, often pink or gray, with a high silica content.", category: "Igneous", color: ["pink", "gray"], price: 75, hardness: 6, filters: ["medium", "rough", "brittle"] },
	{ name: "Obsidian", description: "A natural volcanic glass, smooth and sharp-edged.", category: "Igneous", color: ["black"], price: 120, hardness: 5, filters: ["glassy", "sharp", "fragile"] },
	{ name: "Pumice", description: "A lightweight, porous volcanic rock that can float on water.", category: "Igneous", color: ["white", "gray"], price: 40, hardness: 4, filters: ["porous", "light", "soft"] },
	{ name: "Granite", description: "A tough, speckled rock often used for countertops and monuments.", category: "Granite", color: ["gray", "pink", "white"], price: 110, hardness: 7, filters: ["speckled", "very hard"] },
	{ name: "Limestone", description: "A calcium-rich rock often containing fossilized shells.", category: "Limestone", color: ["beige", "gray"], price: 55, hardness: 4, filters: ["smooth", "medium-hard"] },
	{ name: "Marble", description: "A beautiful, polished stone used in sculptures and buildings.", category: "Marble", color: ["white", "pink"], price: 140, hardness: 4, filters: ["polished", "hard"] },
	{ name: "Quartzite", description: "A super-hard rock made from metamorphosed sandstone.", category: "Metamorphic", color: ["white", "gray"], price: 100, hardness: 7, filters: ["rough", "very hard"] },
	{ name: "Kimberlite", description: "The rock where diamonds are born—feeling lucky?", category: "Special", color: ["dark gray"], price: 250, hardness: 6, filters: ["rare", "valuable"] },
	{ name: "Lapis Lazuli", description: "A deep blue rock once used for royal jewelry and paintings.", category: "Special", color: ["blue"], price: 300, hardness: 5, filters: ["polished", "rare", "valuable"] },
	{ name: "Geodes", description: "A boring rock on the outside, but a crystal wonderland inside.", category: "Special", color: ["gray"], price: 220, hardness: 6, filters: ["rough outside", "crystal inside", "magical"] },
	{ name: "Fulgurite", description: "A tube-like rock formed by lightning striking sand.", category: "Special", color: ["tan"], price: 275, hardness: 5, filters: ["tube-shaped", "fragile", "rare"] },
	{ name: "Scoria", description: "A dark, vesicular volcanic rock, often reddish-brown.", category: "Igneous", color: ["red", "black"], price: 55, hardness: 5, filters: ["porous", "rough", "light"] },
	{ name: "Gabbro", description: "A coarse-grained, dark-colored igneous rock formed deep underground.", category: "Igneous", color: ["black", "greenish"], price: 85, hardness: 7, filters: ["rough", "hard"] },
	{ name: "Diorite", description: "A speckled black-and-white rock, often mistaken for granite.", category: "Igneous", color: ["black", "white"], price: 90, hardness: 7, filters: ["speckled", "rough", "hard"] },
	{ name: "Pegmatite", description: "A coarse-grained igneous rock with giant mineral crystals.", category: "Igneous", color: ["pink", "white"], price: 130, hardness: 7, filters: ["large crystals", "rough", "very hard"] },
	{ name: "Sandstone", description: "A soft, grainy rock formed from compacted sand particles.", category: "Sedimentary", color: ["beige", "brown"], price: 45, hardness: 3, filters: ["layered", "soft", "porous"] },
	{ name: "Shale", description: "A fine-grained rock that easily splits into thin sheets.", category: "Sedimentary", color: ["gray", "brown"], price: 35, hardness: 3, filters: ["layered", "fragile"] },
	{ name: "Conglomerate", description: "A rock made of pebbles cemented together by natural minerals.", category: "Sedimentary", color: ["mixed colors"], price: 65, hardness: 4, filters: ["rough", "chunky", "medium-hard"] },
	{ name: "Breccia", description: "Like conglomerate, but with angular rock fragments.", category: "Sedimentary", color: ["mixed colors"], price: 70, hardness: 4, filters: ["jagged", "rough", "medium-hard"] },
	{ name: "Chalk", description: "A soft, white rock that leaves a mark on surfaces.", category: "Sedimentary", color: ["white"], price: 25, hardness: 1, filters: ["soft", "dusty", "brittle"] },
	{ name: "Coal", description: "A black, lightweight rock made from ancient plant matter.", category: "Sedimentary", color: ["black"], price: 50, hardness: 2, filters: ["dusty", "brittle", "light"] },
	{ name: "Travertine", description: "A banded rock formed from mineral-rich hot springs.", category: "Sedimentary", color: ["beige"], price: 90, hardness: 4, filters: ["banded", "porous", "medium-hard"] },
	{ name: "Schist", description: "A shiny, flaky rock with visible mica crystals.", category: "Metamorphic", color: ["gray", "silver"], price: 85, hardness: 4, filters: ["flaky", "brittle"] },
	{ name: "Gneiss", description: "A striped, high-grade metamorphic rock formed under pressure.", category: "Metamorphic", color: ["gray", "black"], price: 95, hardness: 6, filters: ["striped", "rough", "hard"] },
	{ name: "Slate", description: "A fine-grained rock that splits into thin, smooth sheets.", category: "Metamorphic", color: ["gray", "black"], price: 80, hardness: 5, filters: ["flat", "smooth", "medium-hard"] },
	{ name: "Eclogite", description: "A rare, high-pressure rock with striking red and green minerals.", category: "Metamorphic", color: ["red", "green"], price: 150, hardness: 7, filters: ["rare", "very hard"] },
	{ name: "Tektite", description: "A natural glass rock formed by meteor impacts—space rock!", category: "Special", color: ["black"], price: 200, hardness: 6, filters: ["glassy", "rare", "hard"] },
	{ name: "Moqui Marbles", description: "Small, round iron oxide stones, also called 'Shaman Stones.'", category: "Special", color: ["brown"], price: 180, hardness: 5, filters: ["round", "smooth", "mystical"] }
];

export default rockDB;

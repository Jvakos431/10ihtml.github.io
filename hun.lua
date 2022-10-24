--[[
Hungrian base language translation for qb-inventory
Translation done by The_Sc0rp1on (Jv.akos#9098 on Discord)
]]--
local Translations = {
    progress = {
        ["crafting"] = "Craftolás...",
        ["snowballs"] = "hógolyó gyűjtése..",
    },
    notify = {
        ["failed"] = "Sikertelen",
        ["canceled"] = "Megszakítva",
        ["vlocked"] = "Jármű zárva",
        ["notowned"] = "Nem birtoklod a tárgyat",
        ["missitem"] = "Nincs ilyen tárgyad",
        ["nonb"] = "Nincs senki a közelben!",
        ["noaccess"] = "Nem elérhető",
        ["nosell"] = "Nem adhatod el ezt a tárgyat..",
        ["itemexist"] = "Nem létezik ilyen tárgy??",
        ["notencash"] = "Nincs elég pénzed..",
        ["noitem"] = "Nincs megfeleő tárgyad..",
        ["gsitem"] = "Nem adhatsz magadnak tárgyakat..",
        ["tftgitem"] = "Túl messze vagy a játékostól!",
        ["infound"] = "Nem tudsz adni mert nincs ilyen!",
        ["iifound"] = "Próbáld újra!",
        ["gitemrec"] = "Sikeresen megkaptad ",
        ["gitemfrom"] = " -tól/-től ",
        ["gitemyg"] = "Átadtad ",
        ["gitinvfull"] = "A másik játékos inventory-a tele van!",
        ["giymif"] = "Tele van az inventory-d!",
        ["gitydhei"] = "Nincs elég az adott tárgyból",
        ["gitydhitt"] = "Nincs elég tárgyad az átadáshoz",
        ["navt"] = "Nem valós tipus..",
        ["anfoc"] = "Rosszul van kitőltve..",
        ["yhg"] = "Átadtad ",
        ["cgitem"] = "Ezt a tárgyat nem adhatodát!",
        ["idne"] = "A tárgy nem létezik",
        ["pdne"] = "A játékos nincs a városban",
    },
    inf_mapping = {
        ["opn_inv"] = "Inventory Megnyitása",
        ["tog_slots"] = "Gyorsgomb beállítása",
        ["use_item"] = "Gyors gomb használata ",
    },
    menu = {
        ["vending"] = "Kaja autómata",
        ["craft"] = "Craft",
        ["o_bag"] = "Táska megnyitása",
    },
    interaction = {
        ["craft"] = "~g~E~w~ - Craft",
    },
    label = {
        ["craft"] = "Craftolás",
        ["a_craft"] = "Kiegészítő Craftolása",
    },
}

Lang = Lang or Locale:new({
    phrases = Translations,
    warnOnMissing = true
})

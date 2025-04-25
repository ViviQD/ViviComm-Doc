# PCI DSS – Kártyaipari Adatvédelmi Szabványok – Megfelelés

Ez a dokumentum bemutatja, hogyan biztosítja a **ViviComm** a **ViviQD** platform részeként a kártyaipari adatvédelmi szabványoknak való megfelelést, különös figyelmet fordítva a bankkártyás tranzakciók biztonságára. Mivel a **ViviComm** a **Stripe**-ot használja az internetes fizetések kezelésére, biztosítani kell, hogy a platform megfeleljen a PCI DSS (Payment Card Industry Data Security Standard) előírásainak.

## 1. Mi a PCI DSS?

A **PCI DSS** egy nemzetközi szabvány, amelyet a bankkártyás tranzakciók biztonságos kezelésére alakítottak ki. A szabvány célja, hogy biztosítsa a kártyabirtokosok adatainak védelmét és megakadályozza a visszaéléseket a fizetési rendszerekben.

A **PCI DSS** szabvány előírja, hogy a vállalatok, amelyek bankkártyás adatokat kezelnek, biztosítsák az adatok védelmét, beleértve a kártyaszámokat, a lejárati dátumokat és a biztonsági kódokat. A szabályozás célja a kártyaipari tranzakciók adatainak védelme, és az adatok titkosítása, tárolásuk és továbbításuk biztonságának garantálása.

## 2. Miért fontos a PCI DSS megfelelés a **ViviComm** számára?

A **ViviComm** a **ViviQD** platform részeként bankkártyás tranzakciókat végez a **Stripe** szolgáltatás használatával, így a platformnak teljes mértékben meg kell felelnie a **PCI DSS** előírásainak. A szabályozás biztosítja, hogy minden kártyás tranzakció biztonságosan történik, és megvédi a felhasználók személyes adatokat a visszaélésektől.

A **ViviComm** garantálja, hogy minden kártyabirtokos adatot megfelelően kezelnek és védelmeznek, a legmagasabb biztonsági előírásoknak megfelelően. Ez biztosítja, hogy az online fizetési folyamatok során a felhasználók adatai védve legyenek, és megelőzhetők legyenek az adatszivárgások és csalások.

## 3. A **ViviComm** és a PCI DSS megfelelés

A **ViviComm** a következő intézkedésekkel biztosítja, hogy megfeleljen a **PCI DSS** előírásainak:

### **3.1. Bankkártyás adatok védelme**

A **ViviComm** minden bankkártyás adatot titkosítva tárol és titkosítva továbbít, biztosítva ezzel a kártyaadatok védelmét és megakadályozva a jogosulatlan hozzáférést.

### **3.2. Biztonsági intézkedések**

A **ViviComm** folyamatosan ellenőrzi a rendszer biztonságát, és biztosítja, hogy minden bankkártyás tranzakcióhoz szükséges adat titkosítva legyen. Minden tranzakció biztonságos csatornákon keresztül történik, hogy megakadályozzuk az adatlopást.

### **3.3. Rendszeres biztonsági ellenőrzések**

A **ViviComm** rendszeres időközönként végzi el a biztonsági auditokat, hogy megbizonyosodjon arról, hogy a kártyás tranzakciók védelme minden szükséges előírásnak megfelel.

### **3.4. Stripe és PCI DSS**

A **ViviComm** a **Stripe**-ot használja az online fizetések lebonyolítására, amely teljes mértékben megfelel a **PCI DSS** előírásainak. A **Stripe** minden kártyás adatot biztonságosan kezel, titkosítva tárolja és a tranzakciók biztonságos feldolgozását garantálja.

## 4. További információ

A **ViviComm** folyamatosan biztosítja, hogy minden bankkártyás tranzakció megfeleljen a **PCI DSS** előírásainak. A platform használatával a felhasználók biztosak lehetnek abban, hogy kártyaadataik védelme a legmagasabb szintű biztonsági intézkedések mellett történik.

- [További információ a PCI DSS szabványról](https://www.pcisecuritystandards.org/pci_security/)

---

Ez a dokumentum biztosítja, hogy a **ViviComm** platform teljes mértékben megfeleljen a **PCI DSS** előírásainak, és minden bankkártyás tranzakció biztonságos módon történik a felhasználók védelme érdekében.

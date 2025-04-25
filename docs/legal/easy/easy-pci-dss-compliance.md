# PCI DSS – Bankkártyás Adatvédelem (Gyerekeknek)

Ez a dokumentum bemutatja, hogyan védjük a bankkártyás adatokat a **ViviComm** rendszerében, és hogyan tartjuk be a **PCI DSS** szabályokat, hogy az adataid biztonságban legyenek.

## 1. Mi az a PCI DSS?

A **PCI DSS** (Payment Card Industry Data Security Standard) egy szabályrendszer, amely a bankkártyás tranzakciók adatvédelmét biztosítja. A célja, hogy megvédje a bankkártyás adatokat, mint például a kártyaszámot, a lejárati dátumot és a biztonsági kódot (CVV), hogy azok ne kerüljenek illetéktelen kezekbe.

## 2. Miért fontos a PCI DSS a **ViviComm** számára?

A **ViviComm** használja a **Stripe** szolgáltatást az internetes fizetések kezelésére, és ezért biztosítania kell, hogy az összes bankkártyás adat védve legyen a **PCI DSS** előírásai szerint. Ez segít megvédeni a felhasználók bankkártyás adatait, és biztosítja, hogy azok biztonságban legyenek.

### **2.1. Miért jó a felhasználóknak?**

- **Adatvédelem**: A **ViviComm** biztosítja, hogy a bankkártyás adatokat biztonságosan kezeljük és tároljuk.
- **Biztonságos fizetés**: A felhasználók biztonságban érzik magukat, mert a **PCI DSS** szabályok előírják, hogy csak megbízható, titkosított módon kezelhetők a bankkártyás adatok.

## 3. Hogyan védi a **ViviComm** a bankkártyás adatokat?

A **ViviComm** a **PCI DSS** szabályainak megfelelően biztosítja, hogy a bankkártyás adatokat titkosított módon kezeljük, és kizárólag azok a személyek férhetnek hozzá, akiknek erre szükségük van. Az adatok tárolása, feldolgozása és továbbítása mind biztonságos módon történik, hogy megakadályozzuk az illetéktelen hozzáférést.

- **Titkosítás**: A bankkártyás adatokat titkosítva tároljuk, hogy azok ne kerülhessenek illetéktelen kezekbe.
- **Biztonságos fizetés**: A **ViviComm** és a **Stripe** biztosítják, hogy a fizetések során minden bankkártyás adat biztonságban legyen.

## 4. További információ

A **ViviComm** a **PCI DSS** szabályai szerint dolgozik, hogy biztosítsa a bankkártyás adatok védelmét, és mindig tájékoztatni fogunk, ha adatokat gyűjtünk rólad.

- [További információ a PCI DSS-ről](https://www.pcisecuritystandards.org/)

---

Ez a dokumentum segít megérteni, hogyan biztosítjuk a bankkártyás adatok védelmét a **ViviComm** rendszerén belül a **PCI DSS** előírásainak megfelelően, és hogy miért fontos az adatvédelem.
<br/>
<br/>
Felnőtteknek számára készült, nehezebben érthető, hivatalos változat,<br/> de jogi szempontból csak ez figyelembe vehető, elérhető itt:  
[**Felnőtteknek szóló változat**](../adult/pci-dss-compliance.md)

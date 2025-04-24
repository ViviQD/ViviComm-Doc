@echo off
:: Set the base directory to the current script's directory
set BASE_DIR=%~dp0

:: Create the full directory structure
echo Creating directories...

:: Legal folder
mkdir "%BASE_DIR%\legal\terms\easy" >nul 2>&1
mkdir "%BASE_DIR%\legal\terms\adult" >nul 2>&1
mkdir "%BASE_DIR%\legal\privacy-policy\easy" >nul 2>&1
mkdir "%BASE_DIR%\legal\privacy-policy\adult" >nul 2>&1
mkdir "%BASE_DIR%\legal\privacy-policy\usa\easy" >nul 2>&1
mkdir "%BASE_DIR%\legal\privacy-policy\usa\adult" >nul 2>&1
mkdir "%BASE_DIR%\legal\privacy-policy\europe\easy" >nul 2>&1
mkdir "%BASE_DIR%\legal\privacy-policy\europe\adult" >nul 2>&1
mkdir "%BASE_DIR%\legal\compliance\common" >nul 2>&1
mkdir "%BASE_DIR%\legal\compliance\common\easy" >nul 2>&1
mkdir "%BASE_DIR%\legal\compliance\common\adult" >nul 2>&1
mkdir "%BASE_DIR%\legal\compliance\international" >nul 2>&1
mkdir "%BASE_DIR%\legal\compliance\international\easy" >nul 2>&1
mkdir "%BASE_DIR%\legal\compliance\international\adult" >nul 2>&1
mkdir "%BASE_DIR%\legal\compliance\hungary" >nul 2>&1
mkdir "%BASE_DIR%\legal\compliance\hungary\easy" >nul 2>&1
mkdir "%BASE_DIR%\legal\compliance\hungary\adult" >nul 2>&1
mkdir "%BASE_DIR%\legal\compliance\usa" >nul 2>&1
mkdir "%BASE_DIR%\legal\compliance\usa\easy" >nul 2>&1
mkdir "%BASE_DIR%\legal\compliance\usa\adult" >nul 2>&1
mkdir "%BASE_DIR%\legal\compliance\europe" >nul 2>&1
mkdir "%BASE_DIR%\legal\compliance\europe\easy" >nul 2>&1
mkdir "%BASE_DIR%\legal\compliance\europe\adult" >nul 2>&1

:: Wait for a moment to ensure that directories are created
timeout /t 2 /nobreak >nul

:: Create placeholder files

:: Create index.md files in each directory
echo Jogi dokumentumok áttekintése > "%BASE_DIR%\legal\terms\index.md"
echo Adatvédelmi irányelvek áttekintése > "%BASE_DIR%\legal\privacy-policy\index.md"
echo Megfelelőségi dokumentumok áttekintése > "%BASE_DIR%\legal\compliance\common\index.md"
echo Nemzetközi megfelelőségi áttekintés > "%BASE_DIR%\legal\compliance\international\index.md"
echo Hungary megfelelőségi áttekintés > "%BASE_DIR%\legal\compliance\hungary\index.md"
echo USA megfelelőségi áttekintés > "%BASE_DIR%\legal\compliance\usa\index.md"
echo Europe megfelelőségi áttekintés > "%BASE_DIR%\legal\compliance\europe\index.md"


:: Adding index.md to additional directories
echo Feltételek áttekintése az egyszerű szakaszhoz > "%BASE_DIR%\legal\terms\easy\index.md"
echo Feltételek áttekintése a felnőtt részhez > "%BASE_DIR%\legal\terms\adult\index.md"
echo Adatvédelmi szabályzat áttekintése az egyszerű szakaszhoz > "%BASE_DIR%\legal\privacy-policy\easy\index.md"
echo Adatvédelmi irányelvek áttekintése felnőtteknek szóló részhez > "%BASE_DIR%\legal\privacy-policy\adult\index.md"
echo USA Adatvédelmi szabályzat az egyszerű szakaszhoz > "%BASE_DIR%\legal\privacy-policy\usa\easy\index.md"
echo USA Felnőtteknek szóló adatvédelmi szabályzat > "%BASE_DIR%\legal\privacy-policy\usa\adult\index.md"
echo Europe Adatvédelmi szabályzat az egyszerű szakaszért > "%BASE_DIR%\legal\privacy-policy\europe\easy\index.md"
echo Europe Adatvédelmi szabályzat felnőtteknek > "%BASE_DIR%\legal\privacy-policy\europe\adult\index.md"
echo Megfelelőségi áttekintés a közös egyszerű szakaszhoz > "%BASE_DIR%\legal\compliance\common\easy\index.md"
echo Megfelelőségi áttekintés a közös felnőtteknek szóló részhez > "%BASE_DIR%\legal\compliance\common\adult\index.md"
echo Nemzetközi megfelelőségi áttekintés az egyszerű szakaszhoz > "%BASE_DIR%\legal\compliance\international\easy\index.md"
echo Nemzetközi megfelelőségi áttekintés a felnőtt részhez > "%BASE_DIR%\legal\compliance\international\adult\index.md"
echo Compliance overview for hungary easy section > "%BASE_DIR%\legal\compliance\hungary\easy\index.md"
echo Megfelelőségi áttekintés a magyar felnőtt részhez > "%BASE_DIR%\legal\compliance\hungary\adult\index.md"
echo Megfelelőségi áttekintés az usa easy szakaszhoz > "%BASE_DIR%\legal\compliance\usa\easy\index.md"
echo Megfelelőségi áttekintés az usa felnőtt részhez > "%BASE_DIR%\legal\compliance\usa\adult\index.md"
echo Megfelelőségi áttekintés az europe easy szakaszhoz > "%BASE_DIR%\legal\compliance\europe\easy\index.md"
echo Megfelelőségi áttekintés az európai felnőtt részhez > "%BASE_DIR%\legal\compliance\europe\adult\index.md"

:: Terms of Service folder files
echo Egyszerűsített feltételek (gyerekeknek) > "%BASE_DIR%\legal\terms\easy\easy-terms.md"
echo Részletes felhasználási feltételek (felnőtteknek) > "%BASE_DIR%\legal\terms\adult\terms-of-service.md"

:: Privacy Policy folder files
echo Adatvédelmi szabályok összefoglalója > "%BASE_DIR%\legal\privacy-policy\index.md"
echo Egyszerűsített adatvédelmi szabályok (globális) > "%BASE_DIR%\legal\privacy-policy\easy\easy-privacy-policy-global.md"
echo Részletes adatvédelmi szabályok (globális) > "%BASE_DIR%\legal\privacy-policy\adult\privacy-policy-global.md"
echo USA adatvédelmi szabályok összefoglalója > "%BASE_DIR%\legal\privacy-policy\usa\index.md"
echo USA egyszerűsített adatvédelmi szabályok > "%BASE_DIR%\legal\privacy-policy\usa\easy\easy-privacy-policy-usa.md"
echo USA részletes adatvédelmi szabályzat > "%BASE_DIR%\legal\privacy-policy\usa\adult\privacy-policy-usa.md"
echo Európai adatvédelmi szabályok összefoglalója > "%BASE_DIR%\legal\privacy-policy\europe\index.md"
echo Európai egyszerűsített adatvédelmi szabályok > "%BASE_DIR%\legal\privacy-policy\europe\easy\easy-privacy-policy-eu.md"
echo Európai részletes adatvédelmi szabályzat > "%BASE_DIR%\legal\privacy-policy\europe\adult\privacy-policy-eu.md"

:: Compliance folder files for common section
echo Központi jogi szabályok összefoglalója > "%BASE_DIR%\legal\compliance\common\index.md"

:: Compliance folder files for common easy section
echo Egyszerűsített AI szabályozás > "%BASE_DIR%\legal\compliance\common\easy\easy-ai.md"
echo Egyéb nemzetközi szabályok > "%BASE_DIR%\legal\compliance\common\easy\easy-other.md"

:: Compliance folder files for common adult section
echo Részletes AI szabályozás > "%BASE_DIR%\legal\compliance\common\adult\ai-compliance.md"
echo ISO 27799 részletes szabályok > "%BASE_DIR%\legal\compliance\common\adult\iso-27799-compliance.md"
echo IEEE AI Ethics részletes szabályok > "%BASE_DIR%\legal\compliance\common\adult\ieee-ai-ethics.md"
echo OECD AI Ethics részletes szabályok > "%BASE_DIR%\legal\compliance\common\adult\oecd-ai-ethics.md"

:: Compliance folder files for common easy section
echo Egyszerűsített AI szabályozás > "%BASE_DIR%\legal\compliance\common\easy\easy-ai.md"
echo Egyszerűsített ISO szabályozás > "%BASE_DIR%\legal\compliance\common\easy\easy-iso.md"
echo Egyszerűsített IEEE AI Ethics szabályok > "%BASE_DIR%\legal\compliance\common\easy\easy-ieee-ai-ethics.md"
echo Egyszerűsített OECD AI Ethics szabályok > "%BASE_DIR%\legal\compliance\common\easy\easy-oecd-ai-ethics.md"
echo Egyszerűsített AI Act szabályozás > "%BASE_DIR%\legal\compliance\common\easy\easy-ai-act.md"

:: Compliance folder files for adult section
echo ISO 27799 részletes szabályok > "%BASE_DIR%\legal\compliance\international\adult\iso-27799-compliance.md"
echo IEEE AI Ethics szabályok > "%BASE_DIR%\legal\compliance\international\adult\ieee-ai-ethics.md"
echo OECD AI Ethics szabályok > "%BASE_DIR%\legal\compliance\international\adult\oecd-ai-ethics.md"
echo AI Act részletes szabályozás > "%BASE_DIR%\legal\compliance\international\adult\ai-act.md"
echo USA adatvédelmi szabályok (CPRA) > "%BASE_DIR%\legal\compliance\usa\adult\cpra-compliance.md"
echo Európai adatvédelmi szabályok (GDPR) > "%BASE_DIR%\legal\compliance\europe\adult\gdpr-compliance.md"

:: Compliance folder files for international easy section
echo Egyszerűsített ISO szabályozás > "%BASE_DIR%\legal\compliance\international\easy\easy-iso-international.md"
echo Egyszerűsített IEEE AI Ethics szabályok > "%BASE_DIR%\legal\compliance\international\easy\easy-ieee-ai-ethics.md"
echo Egyszerűsített OECD AI Ethics szabályok > "%BASE_DIR%\legal\compliance\international\easy\easy-oecd-ai-ethics.md"
echo Egyszerűsített AI Act szabályozás > "%BASE_DIR%\legal\compliance\international\easy\easy-ai-act.md"

:: Compliance folder files for hungary section
echo Magyar jogszabályok összefoglalója > "%BASE_DIR%\legal\compliance\hungary\index.md"
echo Egészségügyi jogszabályok > "%BASE_DIR%\legal\compliance\hungary\easy\healthcare-privacy.md"
echo Infotv. jogszabályok > "%BASE_DIR%\legal\compliance\hungary\easy\infotv-compliance.md"

:: Compliance folder files for hungary adult section
echo Egészségügyi adatvédelmi szabályok > "%BASE_DIR%\legal\compliance\hungary\adult\healthcare-compliance-hungary.md"
echo Infotv. adatvédelmi szabályok > "%BASE_DIR%\legal\compliance\hungary\adult\infotv-compliance-hungary.md"

:: Compliance folder files for usa section
echo USA adatvédelmi szabályok > "%BASE_DIR%\legal\compliance\usa\easy\ccpa-compliance.md"
echo USA részletes adatvédelmi szabályok > "%BASE_DIR%\legal\compliance\usa\adult\cpra-compliance.md"

:: Compliance folder files for europe section
echo Európai adatvédelmi szabályok > "%BASE_DIR%\legal\compliance\europe\easy\gdpr-compliance.md"
echo Európai részletes adatvédelmi szabályok > "%BASE_DIR%\legal\compliance\europe\adult\gdpr-compliance.md"

:: Finish
echo Project structure has been created.
pause

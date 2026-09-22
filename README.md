# Portfolio Wiktora Szczepaniaka — nowa wersja

## Aktualizacja działającej strony

Użyj `Portfolio_Wiktor_Aktualizacja.zip`. Ta mniejsza paczka korzysta z filmów, które masz już w repozytorium w folderze `assets/video`.

1. Rozpakuj ZIP.
2. Otwórz na GitHubie to samo repozytorium, z którego działa obecne portfolio.
3. Wybierz **Add file → Upload files**.
4. Przeciągnij zawartość paczki: `index.html`, `style.css`, `script.js`, `content.json`, `README.md` oraz cały folder `assets`.
5. Poczekaj na przesłanie plików i zatwierdź **Commit changes** na dotychczasowej gałęzi, zwykle `main`.
6. Po zakończeniu publikacji odśwież stronę. Jeśli widzisz stary wygląd, użyj **Ctrl + F5**.

Wgrywaj zawartość paczki bez nadrzędnego folderu. `index.html` musi zastąpić dotychczasowy plik w katalogu głównym. Zastąp jednocześnie HTML, CSS i JS — pracują razem.

**Nie usuwaj `assets/video`.** Stare foldery `assets/slides` i `assets/posters` mogą zostać; nowa wersja ich nie używa. Jeśli masz plik `CNAME` dla własnej domeny, zachowaj go. Adres strony i ustawienia Pages nie wymagają zmian.

## Pełna kopia

`Portfolio_Wiktor_GitHub_Pages.zip` zawiera także wszystkie 20 filmów. Wybierz ją, jeśli chcesz kompletną kopię na komputerze albo stawiasz stronę od nowa. Po rozpakowaniu otwórz `index.html`; nie trzeba nic instalować.

Dla nowego repozytorium, po wgraniu zawartości paczki: **Settings → Pages → Deploy from a branch → main → /(root) → Save**.

## Co się zmieniło

- Układ strony zamiast skalowanych slajdów, z osobnym układem mobilnym.
- Stałe menu: Projekty, O mnie, Specjalizacje, Social media, Wideo, Współprace, Koncepty, Moderacja, Kontakt.
- Wyróżnione projekty: Bobbie for Shell Eco-marathon, Smak Nostalgii i Netflix.
- Duży podgląd grafik i filmów. Kliknij materiał; zamknij przyciskiem, klawiszem Escape albo kliknięciem poza oknem.
- Filmy odtwarzają się po kliknięciu, z dźwiękiem, przewijaniem i pełnym ekranem. Zamknięcie podglądu zatrzymuje odtwarzanie.
- Oryginalne opisy i wyniki bez redakcji copy. Zmieniły się układ, nawigacja i etykiety przycisków.
- Wszystkie 66 grafik, wszystkie 20 filmów i wszystkie oryginalne adresy odnośników.
- Lokalna czcionka Rubik z prezentacji. Strona nie pobiera bibliotek ani fontów z zewnętrznych usług.
- Poprzednie kotwice, np. `#slajd-14`, nadal kierują do odpowiadającego projektu.

Bezpośrednie odnośniki do sekcji: dopisz do adresu `#bobbie`, `#smak-nostalgii`, `#netflix`, `#wideo` albo `#kontakt`.

Linki do postów prowadzą do oryginalnych adresów. Dostępność publikacji zależy od platformy i autora; część serwisów wymaga logowania. Film na YouTube pozostaje zewnętrznym odnośnikiem.

## Edycja

Treść i struktura są w `index.html`, wygląd w `style.css`, a obsługa menu i podglądu w `script.js`. `content.json` jest zapisem materiału źródłowego; jego zmiana sama nie przebudowuje strony.

Dokumentacja GitHub Pages:
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

# Portfolio Wiktora Szczepaniaka — GitHub Pages

## Publikacja bez terminala

1. Rozpakuj paczkę ZIP. Otwórz `index.html`, aby zobaczyć stronę na swoim komputerze. Zachowaj wszystkie foldery obok tego pliku.
2. Zaloguj się na https://github.com. Kliknij **+ → New repository**, nazwij je `portfolio`, wybierz **Public**, zaznacz dodanie README i kliknij **Create repository**.
3. W repozytorium wybierz **Add file → Upload files**. Przeciągnij **zawartość rozpakowanego folderu**: `index.html`, `style.css`, `script.js`, `content.json` i cały folder `assets`. `index.html` ma być bezpośrednio w repozytorium. Nie wgrywaj ZIP-a ani nadrzędnego folderu `portfolio`.
4. Poczekaj, aż wszystkie pliki się wgrają. Kliknij **Commit changes**, zapisując je na gałęzi `main`.
5. Otwórz **Settings → Pages**. W części **Build and deployment** ustaw **Source: Deploy from a branch**, **Branch: main**, folder **/(root)** i kliknij **Save**.
6. Po zakończeniu publikacji w tym samym miejscu pojawi się link **Visit site**. Twój adres będzie miał postać `https://TWOJ-LOGIN.github.io/portfolio/`. Tego linku używaj w CV i wiadomościach.

Jeśli wgrywanie całego folderu przerwie się, dodawaj jego podfoldery osobno, zachowując strukturę `assets/slides`, `assets/posters`, `assets/video`. Wszystkie pojedyncze pliki w tej paczce mieszczą się w limicie 25 MiB dla wgrywania przez przeglądarkę. Łącznie jest mniej niż 100 plików.

## Co zawiera strona

- Wszystkie 22 slajdy, w oryginalnej kolejności, z zachowaną treścią i kompozycją.
- Warstwę graficzną w SVG, z oryginalną czcionką zapisaną jako kształty. Wygląd nie zależy od fontów na komputerze odbiorcy.
- Wszystkie 20 filmów z prezentacji jako lokalne pliki MP4. Filmy uruchamiają się po kliknięciu, mają dźwięk, przewijanie i pełny ekran. Przy uruchomieniu kolejnego filmu poprzedni zatrzymuje się.
- Wszystkie adresy odnośników z prezentacji, w tym film na YouTube. Adres e-mail i telefon też są klikalne.
- Nawigację O mnie / Projekty / Kontakt oraz przycisk Powiększ. Na telefonie zachowana jest kompozycja slajdów; do czytania drobnych treści użyj powiększenia albo obróć telefon.

Linki do serwisów społecznościowych prowadzą do oryginalnych adresów. Ich dostępność zależy od autora publikacji i platformy; część platform może wymagać logowania. Film z YouTube otwiera się przez oryginalny link, tak jak w prezentacji. Pozostałe filmy odtwarzają się z plików strony, bez logowania do social mediów.

## Aktualizacja i najczęstsze problemy

- Aby zmienić stronę, wgraj zmienione pliki do tego samego repozytorium i zatwierdź **Commit changes**. Adres pozostaje ten sam.
- Błąd 404: sprawdź, czy `index.html` znajduje się w katalogu głównym, a Pages wskazuje `main` i `/(root)`. Stan publikacji sprawdzisz w zakładce **Actions**.
- Brak filmów lub grafik: sprawdź, czy cały folder `assets` został przesłany i czy nie zmieniły się jego nazwy.
- Bezpośredni link do projektu: dopisz np. `#slajd-14` na końcu adresu portfolio.
- Edycja `content.json` nie przebudowuje widoku automatycznie. Układ slajdów znajduje się w `assets/slides`, a aktywne filmy i linki w `index.html`.

Dokumentacja GitHuba:
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository

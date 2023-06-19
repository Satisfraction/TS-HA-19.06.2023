# TS-HA-19.06.2023

## Installation

1. Klone das Repository:

```git clone [<repository-url>](https://github.com/Satisfraction/TS-HA-19.06.2023)https://github.com/Satisfraction/TS-HA-19.06.2023```


2. Installiere die Abhängigkeiten:

``npm install``


3. Richte die MongoDB-Verbindung ein:

- Öffne die Datei `app.js`.
- Ersetze `<password>` in der MongoDB-Verbindungszeichenkette durch das tatsächliche Passwort.

## Verwendung

Um die Anwendung auszuführen, verwende folgenden Befehl:

``node app.js``


Der Server wird auf Port 3000 gestartet.

### Endpunkte

- **GET /sales/:id**

  Gibt die Verkaufsinformationen für eine bestimmte Schraube mit der angegebenen ID zurück.

- **GET /sales**

  Gibt die Verkaufsinformationen für alle Schrauben zurück.

## Lizenz

Dieses Projekt ist unter der MIT-Lizenz lizenziert. Details findest du in der Datei [LICENSE](LICENSE).


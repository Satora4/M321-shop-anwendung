# Shop Anwendung

## Beschreibung
Dieses Projekt ist eine kleine Shopping-App, die es Nutzern ermöglicht, Artikel auszuwählen und den Bestellvorgang durchzulaufen.
Ausserdem kann man ein Feedback geben zu der Seite.

## Features
- Artikel auswählen
- Warenkorb ansehen
- Produktkatalog ansehen
- Bestellung anschicken (Mock)

## Installation
1. Klone das Repository:
   git clone https://github.com/Satora4/M321-shop-anwendung.git

## Entwickler
- Simon Stark
- Joel Vontobel

## Projekt Dokumentation - M321 Shop Anwendung

### Projektbeschreibung
Das folgende Dokument beschreibt die Umsetzung des Abschlussprojekts M321. Das Projekt umfasst die Entwicklung einer Shop-Anwendung, die in diesem Git-Repository gespeichert ist.

### Wöchentliche Dokumentation

#### Woche 1
- **Ziel**: Initialisierung des Projekts und Festlegung der Projektstruktur.
- **Arbeiten**:
  - Git-Repository erstellt und initialisiert.
  - Projektbeschreibung verfasst.
  - Erste Planungssitzung abgehalten.
- **Ergebnisse**:
  - Struktur des Repositories festgelegt.
  - Arbeitsplan für die nächsten Wochen erstellt.

#### Woche 2
- **Ziel**: Implementierung der grundlegenden Funktionen der Shop-Anwendung.
- **Arbeiten**:
  - Erstellung der Grundgerüste für Backend und Frontend.
  - Implementierung der ersten API-Endpunkte.
  - Design der grundlegenden Benutzeroberfläche.
- **Ergebnisse**:
  - Erste Version der API funktionsfähig.
  - Benutzeroberfläche zeigt grundlegende Informationen an.

#### Woche 3
- **Ziel**: Erweiterung der bestehenden Funktionen und Implementierung neuer Features.
- **Arbeiten**:
  - Hinzufügen von Benutzerregistrierung und -anmeldung.
  - Erweiterung der Produktverwaltung.
  - Verbesserung des UI-Designs.
- **Ergebnisse**:
  - Benutzer können sich registrieren und anmelden.
  - Produkte können hinzugefügt, bearbeitet und gelöscht werden.

#### Woche 4
- **Ziel**: Testen der Anwendung und Behebung von Fehlern.
- **Arbeiten**:
  - Durchführung von Unit-Tests und Integrationstests.
  - Identifizierung und Behebung von Bugs.
  - Optimierung der Performance.
- **Ergebnisse**:
  - Anwendung stabil und fehlerfrei.
  - Performance-Verbesserungen implementiert.

#### Woche 5
- **Ziel**: Hinzufügen neuer Funktionalitäten zur Verbesserung der Anwendung.
- **Arbeiten**:
  - Implementierung des Review-Services.
  - Hinzufügen von Controller-Endpunkten für Bestellungen.
  - Fix für bootRun in der Bestellungsfunktion.
- **Ergebnisse**:
  - Review-Service hinzugefügt.
  - Bestellungsendpunkte funktionsfähig.
  - Bestellungsfunktion erfolgreich behoben.

#### Woche 6
- **Ziel**: Verbesserung des Frontend-Designs und Behebung von Fehlern.
- **Arbeiten**:
  - Neue Funktionen für den Produktkatalog hinzugefügt.
  - Neues Frontend-Design implementiert.
- **Ergebnisse**:
  - Verbesserte Benutzeroberfläche.
  - Neue Funktionen für den Produktkatalog verfügbar.

#### Woche 7
- **Ziel**: Behebung von Bugs und Optimierung der Anwendung.
- **Arbeiten**:
  - Behebung von Bewertungsproblemen.
  - Bestellungsfrontend überarbeitet.
- **Ergebnisse**:
  - Bewertungsfunktion fehlerfrei.
  - Bestellungsfrontend verbessert und optimiert.

### Fazit
Alle Arbeiten und Ergebnisse sind im Git-Repository dokumentiert und können dort eingesehen werden.

---


## Startanleitung

### Voraussetzungen
- Java JDK 11 oder höher
- Node.js und npm
- Docker (für die Datenbank)

### Frontend starten
1. Navigiere in das Frontend-Verzeichnis:
   cd frontend

2. Installiere die Abhängigkeiten:
   npm install

3. Starte die Applikation:
   npm start

   Die Applikation ist jetzt unter `http://localhost:3000` erreichbar.

### Datenbank starten
1. Stelle sicher, dass Docker installiert und gestartet ist.
2. Starte die Datenbank mit folgendem Befehl:
   docker-compose up -d

   Dies startet die Datenbank im Hintergrund.

### Microservices starten
1. Navigiere in das Verzeichnis jedes Microservices (z.B. `bestellung-service`, `produktkatalog-service`).
2. Baue und starte den jeweiligen Service:
   ./gradlew bootRun

   Stelle sicher, dass alle benötigten Microservices gestartet sind, um die volle Funktionalität der Anwendung zu gewährleisten.

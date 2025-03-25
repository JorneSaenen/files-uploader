# Multer and Cloudinary

### Multer:

1. **Installeer de benodigde pakketten**:
   - Gebruik `multer` voor het verwerken van bestandsuploads.
1. **Stel Multer in voor lokale opslag**:
   - Configureer Multer om bestanden op de lokale schijf op te slaan in de map `uploads/`.
   - Pas een bestandnaam toe die de huidige tijd en de originele bestandsextensie gebruikt, zodat de bestanden unieke namen krijgen.
1. **Voeg een bestandfilter toe**:
   - Gebruik Multer's `fileFilter` optie om ervoor te zorgen dat alleen afbeeldingsbestanden (zoals PNG, JPG en JPEG) kunnen worden geüpload.
   - Als een bestand geen afbeelding is, moet een foutmelding worden teruggestuurd naar de gebruiker.
1. **Maak een eenvoudige uploadroute**:
   - Stel een formulier in waarmee de gebruiker een bestand kan uploaden.
   - Na een succesvolle upload, toon de geüploade afbeelding en een link naar het bestand aan de gebruiker.
1. **Bonus**:
   - Voeg extra routes toe voor het beheren van geüploade bestanden, zoals het ophalen of verwijderen van bestanden.
   - Implementeer validatie voor bestandsgrootte (bijvoorbeeld limiet van 1 MB) om te voorkomen dat gebruikers te grote bestanden uploaden.

### Cloudinary API:

1. **Installeer de benodigde pakketten**:
   - Gebruik `multer` voor het verwerken van bestandsuploads.
   - Installeer de Cloudinary SDK en de CloudinaryStorage adapter voor Multer om eenvoudig bestanden naar Cloudinary te uploaden.
1. **Configureer Cloudinary**:
   - Haal de vereiste configuratiegegevens op uit een `.env` bestand (zoals API-sleutels en de cloudnaam).
   - Stel Cloudinary in met de juiste configuratieparameters zodat bestanden correct worden geüpload naar je Cloudinary-account.
1. **Stel Multer in voor Cloudinary**:
   - Gebruik de `CloudinaryStorage` adapter om Multer in te stellen, zodat de geüploade bestanden direct naar Cloudinary worden gestuurd.
   - Beperk het type bestandsformaten die geüpload mogen worden (bijvoorbeeld alleen afbeeldingen zoals JPG, PNG en JPEG).
   - Configureer afbeeldingstransformaties
1. **Maak een eenvoudige uploadroute**:
   - Stel een formulier in waarmee de gebruiker een bestand kan uploaden.
   - Verwerk de upload van dit bestand via een `POST`-route. Als er geen bestand wordt geüpload of het bestandstype onjuist is, geef dan een foutmelding weer.
   - Na een succesvolle upload, toon de geüploade afbeelding en de bijbehorende URL aan de gebruiker.

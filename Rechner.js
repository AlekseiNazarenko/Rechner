// Funktion zur Berechnung des Biegemoments für ein HEA-Profil
function berechneBiegemoment(F, L) {
    // Annahme: Die angewandte Kraft F und die Länge des Hebels L werden in Metern angegeben
    // Konstante für den Faktor 4
    const konstante = 4;
    // Biegemoment berechnen
    const biegemoment = (F * L) / konstante;
    return biegemoment;
}

// Beispielaufruf der Funktion mit einem angewandten Kraftwert von 500 Newton und einer Hebellänge von 2 Metern
const kraft = 500; // in Newton
const laenge = 2; // in Metern
const biegemomentErgebnis = berechneBiegemoment(kraft, laenge);

// Ausgabe des Ergebnisses
console.log("Das Biegemoment beträgt: " + biegemomentErgebnis + " Newtonmeter");
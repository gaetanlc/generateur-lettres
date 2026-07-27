// src/utils/exportPdf.js
import { jsPDF } from "jspdf";

export function exporterPdf(texteLettre, nomFichier = "lettre-resiliation") {
  // Format A4 en millimètres (210 x 297)
  const doc = new jsPDF({ unit: "mm", format: "a4" });

  const margeGauche = 25;
  const margeHaut = 30;
  const largeurUtile = 210 - margeGauche * 2; // 160mm de texte

  doc.setFont("times", "normal");
  doc.setFontSize(12);

  // Découpe le texte en lignes qui tiennent dans la largeur
  const lignes = doc.splitTextToSize(texteLettre, largeurUtile);

  // lineHeightFactor : espacement entre les lignes (1.5 = aéré comme un courrier)
  doc.text(lignes, margeGauche, margeHaut, { lineHeightFactor: 1.5 });

  doc.save(`${nomFichier}.pdf`);
}
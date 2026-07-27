// src/components/FormulaireDynamique.jsx

function FormulaireDynamique({ champs, valeurs, onChange }) {
  // Fonction appelée à chaque frappe / clic dans un champ
  const handleChange = (champ, event) => {
    const nouvelleValeur =
      champ.type === "checkbox" ? event.target.checked : event.target.value;

    // On remonte au parent : "le champ X vaut maintenant Y"
    onChange(champ.name, nouvelleValeur);
  };

  return (
    <form>
      {champs.map((champ) => (
        <div key={champ.name} className="champ-formulaire">
          <label htmlFor={champ.name}>
            {champ.label}
            {champ.required && " *"}
          </label>

          {champ.type === "select" ? (
            <select
              id={champ.name}
              value={valeurs[champ.name] ?? ""}
              onChange={(e) => handleChange(champ, e)}
            >
              <option value="">-- Choisir --</option>
              {champ.options.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          ) : (
            <input
              id={champ.name}
              type={champ.type}
              checked={champ.type === "checkbox" ? valeurs[champ.name] ?? false : undefined}
              value={champ.type !== "checkbox" ? valeurs[champ.name] ?? "" : undefined}
              onChange={(e) => handleChange(champ, e)}
            />
          )}
        </div>
      ))}
    </form>
  );
}

export default FormulaireDynamique;
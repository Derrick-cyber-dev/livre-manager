import { useState } from 'react';

const AjouterLivre = () => {
  const listLitteraire = ['Tragedie', 'Comedie'];
  const [num, setNum] = useState('');
  const [titre, setTitre] = useState('');
  const [dateEdition, setDateEdition] = useState('');
  const [genreLitteraire, setGenreLitteraire] = useState('');
  const [prix, setPrix] = useState('');
  const [livres, setLivres] = useState([]);

  const handlSubmit = (e) => {
    e.preventDefault();

    if (!num || !titre || !dateEdition || !genreLitteraire || !prix) {
      alert('Veuillez remplir tous les champs');
      return;
    }

    if (prix < 0 || prix > 200) {
      alert('Le prix doit etre entre 0 et 200');
      return;
    }

    const livre = {
      num,
      titre,
      dateEdition,
      genreLitteraire,
      prix,
    };
    setLivres([...livres, livre]);
  };

  return (
    <div className="div">
      <form onSubmit={handlSubmit}>
        <h1>Ajouter un Livre</h1>
        <div>
          <label>Num :</label>
          <input
            type="number"
            onChange={(e) => {
              setNum(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Titre :</label>
          <input
            type="text"
            onChange={(e) => {
              setTitre(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Date D'edition :</label>
          <input
            type="date"
            onChange={(e) => {
              setDateEdition(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Genre litteraire :</label>
          <select
            onChange={(e) => {
              setGenreLitteraire(e.target.value);
            }}
          >
            {listLitteraire.map((e) => (
              <option>{e}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Prix :</label>
          <input
            type="number"
            onChange={(e) => {
              setPrix(e.target.value);
            }}
          />
        </div>
        <div>
          <button type="submit">Ajouter</button>
          <button type="reset">Reisnitialiser</button>
        </div>
        {livres.length > 0 && (
          <div>
            <h2>Les informations du livre :</h2>
            <ul className="list">
              {livres.map((l) => (
                <li>
                  Num : {l.num} | Titre : {l.titre} | Date D'edition :{' '}
                  {l.dateEdition} | Genre litteraire : {l.genreLitteraire} |
                  Prix : {l.prix}
                </li>
              ))}
            </ul>
          </div>
        )}
      </form>
    </div>
  );
};
export default AjouterLivre;

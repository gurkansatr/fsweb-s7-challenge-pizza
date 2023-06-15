import React, { useEffect, useState } from "react";

const EkMalzemeler = ({ malzemeSayisi }) => {
    const [ekMalzeme, setEkMalzeme] = useState(0);
    const [malzemeler, setMalzemeler] = useState([]);

    const handleChange = (event) => {
        if (malzemeler.length < 10) {
            if (event.target.checked) {
                setEkMalzeme(ekMalzeme + 5);
                setMalzemeler([...malzemeler, event.target.name]);
                malzemeSayisi(ekMalzeme);
            } else {
                setEkMalzeme(ekMalzeme - 5);
                setMalzemeler(malzemeler.filter(a => a !== event.target.name));
                malzemeSayisi(ekMalzeme);
            }
        } else {
            event.target.checked = false;
        }
    }

    useEffect(() => {
        console.log(ekMalzeme)
        console.log(malzemeler)
    }, [ekMalzeme, malzemeler])
    
    const malzemeListFirstColumn = [
        {
            "adi": "Pepperoni",
            "name": "Pepperoni"
        },
        {
            "adi": "Sosis",
            "name": "Sosis"
        },
        {
            "adi": "Kanada Jambonu",
            "name": "Kanada-Jambonu"
        },
        {
            "adi": "Tavuk Izgara",
            "name": "Tavuk-Izgara"
        },
        {
            "adi": "Soğan",
            "name": "Sogan"
        }
    ]

    return (
        <div className="ekmalzemeler">
            <h4>Ek Malzemeler</h4>
            <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
            <div className="ekmalzemeler-inputs">
                <div className="ekmalzemeler-column">
                    {malzemeListFirstColumn.map((malzeme) =>
                        <div className="ekmalzemeler-input">
                            <input type="checkbox" id={malzeme.name} name={malzeme.name} onChange={handleChange}></input>
                            <label for={malzeme.name}>{malzeme.adi}</label>
                        </div>
                    )}
                </div>
                <div className="ekmalzemeler-column">
                    <div className="ekmalzemeler-input">
                        <input type="checkbox" id="Domates" name="Domates" onChange={handleChange}></input>
                        <label for="Domates">Domates</label>
                    </div>
                    <div className="ekmalzemeler-input">
                        <input type="checkbox" id="Misir" name="Misir" onChange={handleChange}></input>
                        <label for="Misir">Mısır</label>
                    </div>
                    <div className="ekmalzemeler-input">
                        <input type="checkbox" id="Sucuk" name="Sucuk" onChange={handleChange}></input>
                        <label for="Sucuk">Sucuk</label>
                    </div>
                    <div className="ekmalzemeler-input">
                        <input type="checkbox" id="Jalapeno" name="Jalapeno" onChange={handleChange}></input>
                        <label for="Jalapeno">Jalapeno</label>
                    </div>
                    <div className="ekmalzemeler-input">
                        <input type="checkbox" id="Sarimsak" name="Sarimsak" onChange={handleChange}></input>
                        <label for="Sarimsak">Sarımsak</label>
                    </div>
                </div>
                <div className="ekmalzemeler-column">
                    <div className="ekmalzemeler-input">
                        <input type="checkbox" id="Biber" name="Biber" onChange={handleChange}></input>
                        <label for="Biber">Biber</label>
                    </div>
                    <div className="ekmalzemeler-input">
                        <input type="checkbox" id="Sucuk2" name="Sucuk2" onChange={handleChange}></input>
                        <label for="Sucuk2">Sucuk</label>
                    </div>
                    <div className="ekmalzemeler-input">
                        <input type="checkbox" id="Ananas" name="Ananas" onChange={handleChange}></input>
                        <label for="Ananas">Ananas</label>
                    </div>
                    <div className="ekmalzemeler-input">
                        <input type="checkbox" id="Kabak" name="Kabak" onChange={handleChange}></input>
                        <label for="Kabak">Kabak</label>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EkMalzemeler
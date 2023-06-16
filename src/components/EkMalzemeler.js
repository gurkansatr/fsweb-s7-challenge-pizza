import React, { useEffect, useState } from "react";

const EkMalzemeler = (props) => {
    const [ekMalzeme, setEkMalzeme] = useState(0);
    const [malzemeler, setMalzemeler] = useState([]);

    const handleChange = (event) => {
        if (malzemeler.length < 10) {
            if (event.target.checked) {
                setEkMalzeme(ekMalzeme + 1);
                setMalzemeler([...malzemeler, event.target.name]);
                props.malzemeSayisi(ekMalzeme);
                props.secilenMalzemeler.push([...malzemeler, event.target.name]);
            } else {
                setEkMalzeme(ekMalzeme - 1);
                setMalzemeler(malzemeler.filter(a => a !== event.target.name));
                props.malzemeSayisi(ekMalzeme);
                props.secilenMalzemeler.pop([...malzemeler, event.target.name]);
            }
        } else {
            event.target.checked = false;
        }
    }

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
    const malzemeListSecondColumn = [
        {
            "adi": "Domates",
            "name": "Domates"
        },
        {
            "adi": "Mısır",
            "name": "Misir"
        },
        {
            "adi": "Sucuk",
            "name": "Sucuk"
        },
        {
            "adi": "Jalapeno",
            "name": "Jalapeno"
        },
        {
            "adi": "Sarımsak",
            "name": "Sarimsak"
        }
        
    ]
    const malzemeListThirdColumn = [
        {
            "adi": "Biber",
            "name": "Biber"
        },
        {
            "adi": "Sucuk",
            "name": "Sucuk"
        },
        {
            "adi": "Ananas",
            "name": "Ananas"
        },
        {
            "adi": "Kabak",
            "name": "Kabak"
        },
        
    ]
    useEffect(()=>{

    },[])

    return (
        <div className="ekmalzemeler">
            <h4>Ek Malzemeler</h4>
            <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
            <div className="ekmalzemeler-inputs">
                <div className="ekmalzemeler-column">
                    {malzemeListFirstColumn.map((malzeme) =>
                        <div className="ekmalzemeler-input">
                            <input type="checkbox" id={malzeme.name} name={malzeme.name} onChange={handleChange}></input>
                            <label htmlFor={malzeme.name}>{malzeme.adi}</label>
                        </div>
                    )}
                </div>
                <div className="ekmalzemeler-column">
                    {malzemeListSecondColumn.map((malzeme) =>
                        <div className="ekmalzemeler-input">
                            <input type="checkbox" id={malzeme.name} name={malzeme.name} onChange={handleChange}></input>
                            <label htmlFor={malzeme.name}>{malzeme.adi}</label>
                        </div>
                    )}
                </div>
                <div className="ekmalzemeler-column">
                    {malzemeListThirdColumn.map((malzeme) =>
                        <div className="ekmalzemeler-input">
                            <input type="checkbox" id={malzeme.name} name={malzeme.name} onChange={handleChange}></input>
                            <label htmlFor={malzeme.name}>{malzeme.adi}</label>
                        </div>
                    )}
                </div>
                
            </div>
        </div>
    )
}
export default EkMalzemeler
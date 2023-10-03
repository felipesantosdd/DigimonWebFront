import React, { useContext, useState, useEffect } from 'react'
import fire from '../../assets/icons/fire.png'
import holy from '../../assets/icons/holy.png'
import water from '../../assets/icons/water.png'
import wind from '../../assets/icons/wind.png'
import plant from '../../assets/icons/plant.png'
import heath from '../../assets/icons/heath.png'
import dark from '../../assets/icons/dark.png'
import machine from '../../assets/icons/machine.png'
import thunder from '../../assets/icons/spark.png'
import ice from '../../assets/icons/ice.png'
import Image, { StaticImageData } from 'next/image'
import { DigimonContext } from '@/contexts/digimonContext'

const Resistances = () => {

    const { digimon, relacoes } = useContext(DigimonContext)

    const [weknes, setWeknes] = useState<Relacao[]>([]);


    function getLowerCaseElement(input: string) {
        const parts = input?.split(', ');
        if (parts !== undefined) {
            const element = parts[0]?.toLowerCase();
            return element;
        }
    }

    const form = digimon.evolutions.find((digi) => digi.name === digimon.name)

    type Relacao = {
        element: string;
        value: number;
    };

    function calcularRelacoes(elemento: string): Relacao[] {

        if (!relacoes[elemento]) {
            return [];
        }

        const relacoesArray: Relacao[] = [];

        const resistencias = relacoes[elemento].resistencia;
        for (const elementoResistencia in resistencias) {
            relacoesArray.push({
                element: elementoResistencia,
                value: resistencias[elementoResistencia],
            });
        }

        const fraquezas = relacoes[elemento].fraqueza;
        for (const elementoFraqueza in fraquezas) {
            relacoesArray.push({
                element: elementoFraqueza,
                value: fraquezas[elementoFraqueza],
            });
        }

        return relacoesArray;
    }

    useEffect(() => {
        if (form?.element !== undefined) {
            const attributeValue = form.element.trim(); // Remove espaços em branco extras
            const ele: string = getLowerCaseElement(attributeValue) || '';
            const newWeknes = calcularRelacoes(ele);
            setWeknes(newWeknes);
        }
    }, [digimon, form]);

    const elementMap: { [key: string]: { imageSrc: StaticImageData; name: string } } = {
        fire: { imageSrc: fire, name: 'Fire' },
        water: { imageSrc: water, name: 'Water' },
        wind: { imageSrc: wind, name: 'Wind' },
        holy: { imageSrc: holy, name: 'Woly' },
        plant: { imageSrc: plant, name: 'Plant' },
        heath: { imageSrc: heath, name: 'Heath' },
        dark: { imageSrc: dark, name: 'Dark' },
        machine: { imageSrc: machine, name: 'Machine' },
        thunder: { imageSrc: thunder, name: 'Thunder' },
        ice: { imageSrc: ice, name: 'Ice' },
    };


    const renderElementRelations = () => {
        const allElements = Object.keys(elementMap);

        return allElements.map((element: any) => {
            const elementInfo: any = elementMap[element.toLowerCase()];

            const relation = weknes.find((rel) => rel.element.toLowerCase() === element.toLowerCase());

            const value = relation ? `${relation.value}%` : '0%';

            return (
                <div key={element} className='h-16 w-16 m-2 flex justify-around items-center flex-col'>
                    <Image className='w-10 h-10 ' src={elementInfo.imageSrc} alt={elementInfo.name} />
                    <span>{value}</span>
                </div>
            );
        });
    };


    return (
        <div className=' h-[auto] border bg-[rgba(37,37,37,0.8)] justify-around border-[#6A6566] mt-2 mb-2 text-white flex items-center flex-wrap flex-row'>

            {renderElementRelations()}
        </div>
    );
}

export default Resistances
import { NextResponse } from "next/server";

export const listaDeAeronaves = [
    {
        id: 1,
        image: "https://img.flightmarket.com.br/813x507/filters:format(webp)/filters:quality(70)/uploads/aeronaves/6572/cessna-172r-skyhawk-1997-monomotores-a-pistao-venda-flightmarket-1924.JPEG",
        modelo: "172R SKYHAWK",
        fabricante: "CESSNA",
        ano: 1997,
        categoria: "Monomotores a Pistão",
        preco: "R$ 1.180.000",
        horasTotais: "9.017h",
        assentos: "1 + 3",
        tipoNegocio: "Venda",
        condicaoDeUso: "Usado/seminovo",
        contato: "(18) 11223-1122",
        localizacao: "Brasil / Minas Gerais"
    },
    {
        id: 2,
        image: "https://img.flightmarket.com.br/813x507/filters:format(webp)/filters:quality(70)/uploads/aeronaves/6795/beechcraft-bonanza-a36-1984-flightmarket-id-6795-34110.webp",
        modelo: "BONANZA A36",
        fabricante: "BEECHCRAFT",
        ano: 1984,
        categoria: "Monomotores a Pistão",
        preco: "Consulte o vendedor",
        horasTotais: "2.900h",
        assentos: "1 + 5",
        tipoNegocio: "Venda",
        condicaoDeUso: "Usado/seminovo",
        contato: "(18) 11223-1122",
        localizacao: "Brasil / São Paulo"

    },
    {
        id: 3,
        image: "https://img.flightmarket.com.br/813x507/filters:format(webp)/filters:quality(70)/uploads/aeronaves/6829/piper-pa-34-220t-seneca-v-2013-flightmarket-id-6829-40120.webp",
        modelo: "PA-34-220T SENECA V",
        fabricante: "PIPER",
        ano: 2013,
        categoria: "Bimotores a Pistão",
        preco: "R$ 6.708.000",
        horasTotais: "1.260h",
        assentos: "1 + 5",
        tipoNegocio: "Venda",
        condicaoDeUso: "Usado/seminovo",
        contato: "(18) 11223-1122",
        localizacao: "Brasil"
    },
    {
        id: 4,
        image: "https://img.flightmarket.com.br/813x507/filters:format(webp)/filters:quality(70)/uploads/aeronaves/6631/beechcraft-baron-58-jaguar-1999-6-venda-flightmarket-2124.jpg",
        modelo: "BARON 58 JAGUAR",
        fabricante: "BEECHCRAFT",
        ano: 1999,
        categoria: "Bimotores a Pistão",
        preco: "Consulte o vendedor",
        horasTotais: "3.580h",
        assentos: "1 + 5",
        tipoNegocio: "Venda",
        condicaoDeUso: "Usado/seminovo",
        contato: "(18) 11223-1122",
        localizacao: "Brasil"
        
    },
    {
        id: 5,
        image: "https://img.flightmarket.com.br/813x507/filters:format(webp)/filters:quality(70)/uploads/aeronaves/6995/vans-aircraft-rv-10-2013-flightmarket-id-6995-12090.webp",
        modelo: "RV-10",
        fabricante: "VANS AIRCRAFT",
        ano: 2013,
        categoria: "Experimentais e Ultraleves",
        preco: "Consulte o vendedor",
        horasTotais: "1.180h",
        assentos: "2 + 3",
        tipoNegocio: "Venda",
        condicaoDeUso: "Usado/seminovo",
        contato: "(18) 11223-1122",
        localizacao: "Brasil"
          
    },
    {
        id: 6,
        image: "https://img.flightmarket.com.br/813x507/filters:format(webp)/filters:quality(70)/uploads/aeronaves/7014/rand-robinson-kr-2s-2023-flightmarket-id-7014-05341.webp",
        modelo: "KR-2S",
        fabricante: "RAND ROBINSON",
        ano: 2023,
        categoria: "Experimentais e Ultraleves",
        preco: "Consulte o vendedor",
        horasTotais: "9.017h",
        assentos: "1 + 3",
        tipoNegocio: "Venda",
        condicaoDeUso: "Usado/seminovo",
        contato: "(18) 11223-1122",
        localizacao: "Brasil - Igarapé / MG"
    },
    {
        id: 7,
        image: "https://img.flightmarket.com.br/813x507/filters:format(webp)/filters:quality(70)/uploads/aeronaves/6434/beechcraft-king-air-b200-2000-5-venda-flightmarket-4608.jpg",
        modelo: "KING AIR B200",
        fabricante: "BEECHCRAFT",
        ano: 2000,
        categoria: "Turboélices",
        preco: "Consulte o vendedor",
        horasTotais: "5.245h",
        assentos: "1 + 8",
        tipoNegocio: "Venda",
        condicaoDeUso: "Usado/seminovo",
        contato: "(18) 11223-1122",
        localizacao: "Brasil"
    },
    {
        id: 8,
        image: "https://img.flightmarket.com.br/813x507/filters:format(webp)/filters:quality(70)/uploads/aeronaves/7110/piper-m500-2020-flightmarket-id-7110-17370.webp",
        modelo: "M500",
        fabricante: "PIPER",
        ano: 2020,
        categoria: "Turboélices",
        preco: "R$ 17.568.000",
        horasTotais: "340h",
        assentos: "1 + 5",
        tipoNegocio: "Venda",
        condicaoDeUso: "Usado/seminovo",
        contato: "(18) 11223-1122",
        localizacao: "Brasil - Ribeirão Preto / SP"
    },
    {
        id: 9,
        image: "https://img.flightmarket.com.br/813x507/filters:format(webp)/filters:quality(70)/uploads/aeronaves/7153/dassault-falcon-2000-1999-flightmarket-id-7153-30540.webp",
        modelo: "FALCON 900EX",
        fabricante: "DASSAULT",
        ano: 1999,
        categoria: "Jatos Executivos",
        preco: "R$ 46.665.000",
        horasTotais: "14.588h",
        assentos: "2 + 12",
        tipoNegocio: "Venda",
        condicaoDeUso: "Usado/seminovo",
        contato: "(18) 11223-1122",
        localizacao: "Estados Unidos - DALLAS, TX / TEXAS"
    },
    {
        id: 10,
        image: "https://img.flightmarket.com.br/813x507/filters:format(webp)/filters:quality(70)/uploads/aeronaves/3905/embraer-phenom-300-2011-4-venda-flightmarket-0409.jpg",
        modelo: "PHENOM 300",
        fabricante: "EMBRAER",
        ano: 2011,
        categoria: "Jatos Executivos",
        preco: "R$ 9.607.500 * por cota",
        horasTotais: "10h",
        assentos: "2 + 7",
        tipoNegocio: "Propriedade Compartilhada",
        condicaoDeUso: "Usado/seminovo",
        contato: "(18) 11223-1122",
        localizacao: "Brasil - São Paulo / SP"
    }
];

export async function GET() {
    return NextResponse.json(listaDeAeronaves);
  }
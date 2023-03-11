import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { City, Country, CountryState } from 'src/app/models/models';
import { clone } from 'src/app/services';
import { InertiaService } from 'src/app/services/inertia.service';
import { UiService } from 'src/app/services/ui.service';

const venezuela: any = [
    {
        "id": 2044,
        "name": "Amazonas",
        "state_code": "Z",
        "latitude": "-3.41684270",
        "longitude": "-65.85606460",
        "type": "state",
        "cities": [
            {
                "id": 130106,
                "name": "Maroa",
                "latitude": "2.71880000",
                "longitude": "-67.56046000"
            },
            {
                "id": 130110,
                "name": "Municipio Autónomo Alto Orinoco",
                "latitude": "2.73456000",
                "longitude": "-64.83032000"
            },
            {
                "id": 130131,
                "name": "Puerto Ayacucho",
                "latitude": "5.66049000",
                "longitude": "-67.58343000"
            },
            {
                "id": 130142,
                "name": "San Carlos de Río Negro",
                "latitude": "1.92027000",
                "longitude": "-67.06089000"
            },
            {
                "id": 130146,
                "name": "San Fernando de Atabapo",
                "latitude": "4.04564000",
                "longitude": "-67.69934000"
            },
            {
                "id": 130149,
                "name": "San Juan de Manapiare",
                "latitude": "5.32665000",
                "longitude": "-66.05402000"
            }
        ]
    },
    {
        "id": 2050,
        "name": "Anzoátegui",
        "state_code": "B",
        "latitude": "8.59130730",
        "longitude": "-63.95861110",
        "type": "state",
        "cities": [
            {
                "id": 130041,
                "name": "Anaco",
                "latitude": "9.42958000",
                "longitude": "-64.46428000"
            },
            {
                "id": 130042,
                "name": "Aragua de Barcelona",
                "latitude": "9.45588000",
                "longitude": "-64.82928000"
            },
            {
                "id": 130044,
                "name": "Barcelona",
                "latitude": "10.13625000",
                "longitude": "-64.68618000"
            },
            {
                "id": 130054,
                "name": "Cantaura",
                "latitude": "9.30571000",
                "longitude": "-64.35841000"
            },
            {
                "id": 130078,
                "name": "El Tigre",
                "latitude": "8.88902000",
                "longitude": "-64.25270000"
            },
            {
                "id": 130113,
                "name": "Municipio José Gregorio Monagas",
                "latitude": "7.73874000",
                "longitude": "-64.71876000"
            },
            {
                "id": 130127,
                "name": "Onoto",
                "latitude": "9.59714000",
                "longitude": "-65.19350000"
            },
            {
                "id": 130133,
                "name": "Puerto La Cruz",
                "latitude": "10.21382000",
                "longitude": "-64.63280000"
            },
            {
                "id": 130134,
                "name": "Puerto Píritu",
                "latitude": "10.05896000",
                "longitude": "-65.03698000"
            },
            {
                "id": 130148,
                "name": "San José de Guanipa",
                "latitude": "8.88724000",
                "longitude": "-64.16512000"
            }
        ]
    },
    {
        "id": 4856,
        "name": "Apure",
        "state_code": "C",
        "latitude": "6.92694830",
        "longitude": "-68.52471490",
        "type": "state",
        "cities": []
    },
    {
        "id": 2047,
        "name": "Aragua",
        "state_code": "D",
        "latitude": "10.06357580",
        "longitude": "-67.28478750",
        "type": "state",
        "cities": [
            {
                "id": 130052,
                "name": "Cagua",
                "latitude": "10.18634000",
                "longitude": "-67.45935000"
            },
            {
                "id": 130077,
                "name": "El Limón",
                "latitude": "10.30589000",
                "longitude": "-67.63212000"
            },
            {
                "id": 130093,
                "name": "La Victoria",
                "latitude": "10.22677000",
                "longitude": "-67.33122000"
            },
            {
                "id": 130096,
                "name": "Las Tejerías",
                "latitude": "10.25416000",
                "longitude": "-67.17333000"
            },
            {
                "id": 130104,
                "name": "Maracay",
                "latitude": "10.23535000",
                "longitude": "-67.59113000"
            },
            {
                "id": 130128,
                "name": "Palo Negro",
                "latitude": "10.17389000",
                "longitude": "-67.54194000"
            },
            {
                "id": 130151,
                "name": "San Mateo",
                "latitude": "10.21302000",
                "longitude": "-67.42365000"
            },
            {
                "id": 130153,
                "name": "Santa Rita",
                "latitude": "10.20540000",
                "longitude": "-67.55948000"
            },
            {
                "id": 130162,
                "name": "Turmero",
                "latitude": "10.22856000",
                "longitude": "-67.47421000"
            },
            {
                "id": 130169,
                "name": "Villa de Cura",
                "latitude": "10.03863000",
                "longitude": "-67.48938000"
            }
        ]
    },
    {
        "id": 2049,
        "name": "Barinas",
        "state_code": "E",
        "latitude": "8.62314980",
        "longitude": "-70.23710450",
        "type": "state",
        "cities": [
            {
                "id": 130040,
                "name": "Alto Barinas",
                "latitude": "8.59310000",
                "longitude": "-70.22610000"
            },
            {
                "id": 130045,
                "name": "Barinas",
                "latitude": "8.62261000",
                "longitude": "-70.20749000"
            },
            {
                "id": 130046,
                "name": "Barinitas",
                "latitude": "8.76171000",
                "longitude": "-70.41199000"
            },
            {
                "id": 130111,
                "name": "Municipio Barinas",
                "latitude": "8.61497000",
                "longitude": "-70.19852000"
            }
        ]
    },
    {
        "id": 2039,
        "name": "Bolívar",
        "state_code": "F",
        "latitude": "37.61448380",
        "longitude": "-93.41047490",
        "type": "state",
        "cities": [
            {
                "id": 130067,
                "name": "Ciudad Bolívar",
                "latitude": "8.12923000",
                "longitude": "-63.54086000"
            },
            {
                "id": 130068,
                "name": "Ciudad Guayana",
                "latitude": "8.35122000",
                "longitude": "-62.64102000"
            },
            {
                "id": 130119,
                "name": "Municipio Padre Pedro Chien",
                "latitude": "8.02455000",
                "longitude": "-61.88187000"
            },
            {
                "id": 130152,
                "name": "Santa Elena de Uairén",
                "latitude": "4.60226000",
                "longitude": "-61.11025000"
            },
            {
                "id": 130164,
                "name": "Upata",
                "latitude": "8.01620000",
                "longitude": "-62.40561000"
            }
        ]
    },
    {
        "id": 2040,
        "name": "Carabobo",
        "state_code": "G",
        "latitude": "10.11764330",
        "longitude": "-68.04775090",
        "type": "state",
        "cities": [
            {
                "id": 130081,
                "name": "Guacara",
                "latitude": "10.22609000",
                "longitude": "-67.87700000"
            },
            {
                "id": 130085,
                "name": "Güigüe",
                "latitude": "10.08344000",
                "longitude": "-67.77799000"
            },
            {
                "id": 130098,
                "name": "Los Guayos",
                "latitude": "10.18932000",
                "longitude": "-67.93828000"
            },
            {
                "id": 130105,
                "name": "Mariara",
                "latitude": "10.29532000",
                "longitude": "-67.71770000"
            },
            {
                "id": 130108,
                "name": "Morón",
                "latitude": "10.48715000",
                "longitude": "-68.20078000"
            },
            {
                "id": 130132,
                "name": "Puerto Cabello",
                "latitude": "10.47306000",
                "longitude": "-68.01250000"
            },
            {
                "id": 130147,
                "name": "San Joaquín",
                "latitude": "10.26061000",
                "longitude": "-67.79348000"
            },
            {
                "id": 130156,
                "name": "Tacarigua",
                "latitude": "10.08621000",
                "longitude": "-67.91982000"
            },
            {
                "id": 130158,
                "name": "Tocuyito",
                "latitude": "10.11347000",
                "longitude": "-68.06783000"
            },
            {
                "id": 130165,
                "name": "Valencia",
                "latitude": "10.16202000",
                "longitude": "-68.00765000"
            }
        ]
    },
    {
        "id": 2034,
        "name": "Cojedes",
        "state_code": "H",
        "latitude": "9.38166820",
        "longitude": "-68.33392750",
        "type": "state",
        "cities": [
            {
                "id": 130141,
                "name": "San Carlos",
                "latitude": "9.66124000",
                "longitude": "-68.58268000"
            },
            {
                "id": 130157,
                "name": "Tinaquillo",
                "latitude": "9.91861000",
                "longitude": "-68.30472000"
            }
        ]
    },
    {
        "id": 2051,
        "name": "Delta Amacuro",
        "state_code": "Y",
        "latitude": "8.84993070",
        "longitude": "-61.14031960",
        "type": "state",
        "cities": [
            {
                "id": 130161,
                "name": "Tucupita",
                "latitude": "9.05806000",
                "longitude": "-62.05000000"
            }
        ]
    },
    {
        "id": 4855,
        "name": "Distrito Capital",
        "state_code": "A",
        "latitude": "41.26148460",
        "longitude": "-95.93108070",
        "type": "capital district",
        "cities": [
            {
                "id": 149261,
                "name": "Caracas",
                "latitude": "10.50000000",
                "longitude": "-66.93333333"
            }
        ]
    },
    {
        "id": 2035,
        "name": "Falcón",
        "state_code": "I",
        "latitude": "11.18106740",
        "longitude": "-69.85974060",
        "type": "state",
        "cities": [
            {
                "id": 130065,
                "name": "Chichiriviche",
                "latitude": "10.92872000",
                "longitude": "-68.27283000"
            },
            {
                "id": 130071,
                "name": "Coro",
                "latitude": "11.40450000",
                "longitude": "-69.67344000"
            },
            {
                "id": 130116,
                "name": "Municipio Los Taques",
                "latitude": "11.82308000",
                "longitude": "-70.25353000"
            },
            {
                "id": 130118,
                "name": "Municipio Miranda",
                "latitude": "11.31667000",
                "longitude": "-69.86667000"
            },
            {
                "id": 130135,
                "name": "Punta Cardón",
                "latitude": "11.65806000",
                "longitude": "-70.21500000"
            },
            {
                "id": 130136,
                "name": "Punto Fijo",
                "latitude": "11.69152000",
                "longitude": "-70.19918000"
            },
            {
                "id": 130160,
                "name": "Tucacas",
                "latitude": "10.79006000",
                "longitude": "-68.32564000"
            }
        ]
    },
    {
        "id": 2046,
        "name": "Federal Dependencies of Venezuela",
        "state_code": "W",
        "latitude": "10.93770530",
        "longitude": "-65.35695730",
        "type": "federal dependency",
        "cities": []
    },
    {
        "id": 2045,
        "name": "Guárico",
        "state_code": "J",
        "latitude": "8.74893090",
        "longitude": "-66.23671720",
        "type": "state",
        "cities": [
            {
                "id": 130039,
                "name": "Altagracia de Orituco",
                "latitude": "9.86005000",
                "longitude": "-66.38139000"
            },
            {
                "id": 130053,
                "name": "Calabozo",
                "latitude": "8.92416000",
                "longitude": "-67.42929000"
            },
            {
                "id": 130150,
                "name": "San Juan de los Morros",
                "latitude": "9.91152000",
                "longitude": "-67.35381000"
            },
            {
                "id": 130167,
                "name": "Valle de La Pascua",
                "latitude": "9.21554000",
                "longitude": "-66.00734000"
            },
            {
                "id": 130171,
                "name": "Zaraza",
                "latitude": "9.35029000",
                "longitude": "-65.32452000"
            }
        ]
    },
    {
        "id": 2055,
        "name": "La Guaira",
        "state_code": "X",
        "latitude": "29.30522680",
        "longitude": "-94.79138540",
        "type": "state",
        "cities": [
            {
                "id": 130055,
                "name": "Caraballeda",
                "latitude": "10.61216000",
                "longitude": "-66.85192000"
            },
            {
                "id": 130060,
                "name": "Catia La Mar",
                "latitude": "10.60545000",
                "longitude": "-67.03238000"
            },
            {
                "id": 130092,
                "name": "La Guaira",
                "latitude": "10.60156000",
                "longitude": "-66.93293000"
            },
            {
                "id": 130102,
                "name": "Maiquetía",
                "latitude": "10.59450000",
                "longitude": "-66.95624000"
            }
        ]
    },
    {
        "id": 2038,
        "name": "Lara",
        "state_code": "K",
        "latitude": "33.98221650",
        "longitude": "-118.13227470",
        "type": "state",
        "cities": [
            {
                "id": 130047,
                "name": "Barquisimeto",
                "latitude": "10.06470000",
                "longitude": "-69.35703000"
            },
            {
                "id": 130051,
                "name": "Cabudare",
                "latitude": "10.02658000",
                "longitude": "-69.26203000"
            },
            {
                "id": 130057,
                "name": "Carora",
                "latitude": "10.17283000",
                "longitude": "-70.08100000"
            },
            {
                "id": 130079,
                "name": "El Tocuyo",
                "latitude": "9.78709000",
                "longitude": "-69.79294000"
            },
            {
                "id": 130099,
                "name": "Los Rastrojos",
                "latitude": "10.02588000",
                "longitude": "-69.24166000"
            },
            {
                "id": 130137,
                "name": "Quíbor",
                "latitude": "9.92866000",
                "longitude": "-69.62010000"
            }
        ]
    },
    {
        "id": 2053,
        "name": "Mérida",
        "state_code": "L",
        "latitude": "20.96737020",
        "longitude": "-89.59258570",
        "type": "state",
        "cities": [
            {
                "id": 130074,
                "name": "Ejido",
                "latitude": "8.54665000",
                "longitude": "-71.24087000"
            },
            {
                "id": 130080,
                "name": "El Vigía",
                "latitude": "8.61350000",
                "longitude": "-71.65702000"
            },
            {
                "id": 130124,
                "name": "Mérida",
                "latitude": "8.58972000",
                "longitude": "-71.15611000"
            },
            {
                "id": 130109,
                "name": "Mucumpiz",
                "latitude": "8.41667000",
                "longitude": "-71.13333000"
            },
            {
                "id": 130115,
                "name": "Municipio Libertador",
                "latitude": "8.33333000",
                "longitude": "-71.11667000"
            }
        ]
    },
    {
        "id": 2037,
        "name": "Miranda",
        "state_code": "M",
        "latitude": "42.35193830",
        "longitude": "-71.52907660",
        "type": "state",
        "cities": [
            {
                "id": 130048,
                "name": "Baruta",
                "latitude": "10.43424000",
                "longitude": "-66.87558000"
            },
            {
                "id": 130058,
                "name": "Carrizal",
                "latitude": "10.34985000",
                "longitude": "-66.98632000"
            },
            {
                "id": 130061,
                "name": "Caucaguita",
                "latitude": "10.35782000",
                "longitude": "-66.80252000"
            },
            {
                "id": 130062,
                "name": "Caucagüito",
                "latitude": "10.48666000",
                "longitude": "-66.73799000"
            },
            {
                "id": 130063,
                "name": "Chacao",
                "latitude": "10.49581000",
                "longitude": "-66.85367000"
            },
            {
                "id": 130064,
                "name": "Charallave",
                "latitude": "10.24247000",
                "longitude": "-66.85723000"
            },
            {
                "id": 130073,
                "name": "Cúa",
                "latitude": "10.16245000",
                "longitude": "-66.88248000"
            },
            {
                "id": 130075,
                "name": "El Cafetal",
                "latitude": "10.46541000",
                "longitude": "-66.82951000"
            },
            {
                "id": 130076,
                "name": "El Hatillo",
                "latitude": "10.42411000",
                "longitude": "-66.82581000"
            },
            {
                "id": 130083,
                "name": "Guarenas",
                "latitude": "10.47027000",
                "longitude": "-66.61934000"
            },
            {
                "id": 130084,
                "name": "Guatire",
                "latitude": "10.47400000",
                "longitude": "-66.54241000"
            },
            {
                "id": 130089,
                "name": "La Dolorita",
                "latitude": "10.48830000",
                "longitude": "-66.78608000"
            },
            {
                "id": 130097,
                "name": "Los Dos Caminos",
                "latitude": "10.49389000",
                "longitude": "-66.82863000"
            },
            {
                "id": 130100,
                "name": "Los Teques",
                "latitude": "10.34447000",
                "longitude": "-67.04325000"
            },
            {
                "id": 130126,
                "name": "Ocumare del Tuy",
                "latitude": "10.11820000",
                "longitude": "-66.77513000"
            },
            {
                "id": 130129,
                "name": "Petare",
                "latitude": "10.47679000",
                "longitude": "-66.80786000"
            },
            {
                "id": 130139,
                "name": "San Antonio de Los Altos",
                "latitude": "10.38853000",
                "longitude": "-66.95179000"
            },
            {
                "id": 130155,
                "name": "Santa Teresa del Tuy",
                "latitude": "10.23291000",
                "longitude": "-66.66474000"
            }
        ]
    },
    {
        "id": 2054,
        "name": "Monagas",
        "state_code": "N",
        "latitude": "9.32416520",
        "longitude": "-63.01475780",
        "type": "state",
        "cities": [
            {
                "id": 130056,
                "name": "Caripito",
                "latitude": "10.11135000",
                "longitude": "-63.09985000"
            },
            {
                "id": 130107,
                "name": "Maturín",
                "latitude": "9.74569000",
                "longitude": "-63.18323000"
            },
            {
                "id": 130117,
                "name": "Municipio Maturín",
                "latitude": "9.40000000",
                "longitude": "-63.03333000"
            },
            {
                "id": 130122,
                "name": "Municipio Uracoa",
                "latitude": "8.99960000",
                "longitude": "-62.35164000"
            }
        ]
    },
    {
        "id": 2052,
        "name": "Nueva Esparta",
        "state_code": "O",
        "latitude": "10.99707230",
        "longitude": "-63.91132960",
        "type": "state",
        "cities": [
            {
                "id": 130087,
                "name": "Juan Griego",
                "latitude": "11.08172000",
                "longitude": "-63.96549000"
            },
            {
                "id": 130088,
                "name": "La Asunción",
                "latitude": "11.03333000",
                "longitude": "-63.86278000"
            },
            {
                "id": 130130,
                "name": "Porlamar",
                "latitude": "10.95771000",
                "longitude": "-63.86971000"
            }
        ]
    },
    {
        "id": 2036,
        "name": "Portuguesa",
        "state_code": "P",
        "latitude": "9.09439990",
        "longitude": "-69.09702300",
        "type": "state",
        "cities": [
            {
                "id": 130038,
                "name": "Acarigua",
                "latitude": "9.55451000",
                "longitude": "-69.19564000"
            },
            {
                "id": 130043,
                "name": "Araure",
                "latitude": "9.58144000",
                "longitude": "-69.23851000"
            },
            {
                "id": 130082,
                "name": "Guanare",
                "latitude": "9.04183000",
                "longitude": "-69.74206000"
            },
            {
                "id": 130168,
                "name": "Villa Bruzual",
                "latitude": "9.33186000",
                "longitude": "-69.11968000"
            }
        ]
    },
    {
        "id": 2056,
        "name": "Sucre",
        "state_code": "R",
        "latitude": "-19.03534500",
        "longitude": "-65.25921280",
        "type": "state",
        "cities": [
            {
                "id": 130059,
                "name": "Carúpano",
                "latitude": "10.66516000",
                "longitude": "-63.25387000"
            },
            {
                "id": 130072,
                "name": "Cumaná",
                "latitude": "10.45397000",
                "longitude": "-64.18256000"
            },
            {
                "id": 130086,
                "name": "Güiria",
                "latitude": "10.57721000",
                "longitude": "-62.29841000"
            },
            {
                "id": 130123,
                "name": "Municipio Valdez",
                "latitude": "10.57945000",
                "longitude": "-62.30029000"
            }
        ]
    },
    {
        "id": 2048,
        "name": "Táchira",
        "state_code": "S",
        "latitude": "7.91370010",
        "longitude": "-72.14161320",
        "type": "state",
        "cities": [
            {
                "id": 130070,
                "name": "Colón",
                "latitude": "8.03125000",
                "longitude": "-72.26053000"
            },
            {
                "id": 130090,
                "name": "La Fría",
                "latitude": "8.21523000",
                "longitude": "-72.24888000"
            },
            {
                "id": 130091,
                "name": "La Grita",
                "latitude": "8.13316000",
                "longitude": "-71.98390000"
            },
            {
                "id": 130114,
                "name": "Municipio José María Vargas",
                "latitude": "8.03514000",
                "longitude": "-72.05675000"
            },
            {
                "id": 130138,
                "name": "Rubio",
                "latitude": "7.70131000",
                "longitude": "-72.35569000"
            },
            {
                "id": 130140,
                "name": "San Antonio del Táchira",
                "latitude": "7.81454000",
                "longitude": "-72.44310000"
            },
            {
                "id": 130144,
                "name": "San Cristóbal",
                "latitude": "7.76694000",
                "longitude": "-72.22500000"
            },
            {
                "id": 130163,
                "name": "Táriba",
                "latitude": "7.81880000",
                "longitude": "-72.22427000"
            }
        ]
    },
    {
        "id": 2043,
        "name": "Trujillo",
        "state_code": "T",
        "latitude": "36.67343430",
        "longitude": "-121.62875880",
        "type": "state",
        "cities": [
            {
                "id": 130049,
                "name": "Boconó",
                "latitude": "9.25385000",
                "longitude": "-70.25105000"
            },
            {
                "id": 130120,
                "name": "Municipio Pampanito",
                "latitude": "9.41147000",
                "longitude": "-70.49592000"
            },
            {
                "id": 130121,
                "name": "Municipio San Rafael de Carvajal",
                "latitude": "9.30756000",
                "longitude": "-70.58965000"
            },
            {
                "id": 130159,
                "name": "Trujillo",
                "latitude": "9.36583000",
                "longitude": "-70.43694000"
            },
            {
                "id": 130166,
                "name": "Valera",
                "latitude": "9.31778000",
                "longitude": "-70.60361000"
            }
        ]
    },
    {
        "id": 2041,
        "name": "Yaracuy",
        "state_code": "U",
        "latitude": "10.33938900",
        "longitude": "-68.81088490",
        "type": "state",
        "cities": [
            {
                "id": 130066,
                "name": "Chivacoa",
                "latitude": "10.15951000",
                "longitude": "-68.89453000"
            },
            {
                "id": 130112,
                "name": "Municipio Independencia",
                "latitude": "10.33472000",
                "longitude": "-68.75555000"
            },
            {
                "id": 130125,
                "name": "Nirgua",
                "latitude": "10.15039000",
                "longitude": "-68.56478000"
            },
            {
                "id": 130145,
                "name": "San Felipe",
                "latitude": "10.33991000",
                "longitude": "-68.74247000"
            },
            {
                "id": 130170,
                "name": "Yaritagua",
                "latitude": "10.08081000",
                "longitude": "-69.12420000"
            }
        ]
    },
    {
        "id": 2042,
        "name": "Zulia",
        "state_code": "V",
        "latitude": "10.29102370",
        "longitude": "-72.14161320",
        "type": "state",
        "cities": [
            {
                "id": 130050,
                "name": "Cabimas",
                "latitude": "10.39907000",
                "longitude": "-71.45206000"
            },
            {
                "id": 130069,
                "name": "Ciudad Ojeda",
                "latitude": "10.20161000",
                "longitude": "-71.31480000"
            },
            {
                "id": 130094,
                "name": "La Villa del Rosario",
                "latitude": "10.32580000",
                "longitude": "-72.31343000"
            },
            {
                "id": 130095,
                "name": "Lagunillas",
                "latitude": "10.13008000",
                "longitude": "-71.25946000"
            },
            {
                "id": 130101,
                "name": "Machiques",
                "latitude": "10.06077000",
                "longitude": "-72.55212000"
            },
            {
                "id": 130103,
                "name": "Maracaibo",
                "latitude": "10.66663000",
                "longitude": "-71.61245000"
            },
            {
                "id": 130143,
                "name": "San Carlos del Zulia",
                "latitude": "9.00098000",
                "longitude": "-71.92683000"
            },
            {
                "id": 130154,
                "name": "Santa Rita",
                "latitude": "10.53642000",
                "longitude": "-71.51104000"
            }
        ]
    }
]

const data: any = [];
for (const _state of venezuela) {
    const state: any = {
        name: _state.name,
        code: _state.state_code,
        city: []
    };
    for (const _city of (_state.cities || [])) {
        const city: any = {
            name: _city.name,
            code: _city.name
        }
        state.city.push(city);
    }
    data.push(state);
}

@Component({
    selector: 'app-location',
    templateUrl: './location.component.html',
    styleUrls: ['./location.component.scss'],
    animations: [
        trigger(
            'enterAnimation', [
            transition(':enter', [
                style({ transform: 'translateY(100%)', opacity: 0 }),
                animate('500ms', style({ transform: 'translateY(0)', opacity: 1 }))
            ]),
            transition(':leave', [
                style({ transform: 'translateY(0)', opacity: 1 }),
                animate('200ms', style({ transform: 'translateY(100%)', opacity: 0 }))
            ])
        ]
        )
    ]
})
export class LocationComponent implements OnInit {
    private objectName = 'country';
    private module = 'location';
    private modulePlural = 'locations';
    public guid: string = '';
    public body: Country = new Country
    private cache: Country = new Country;
    public editable: boolean = true;
    public form!: FormGroup;
    public displayDialogCreateCity: any = null;

    constructor(private inertia: InertiaService,
        private ui: UiService,
        private router: Router,
        private activatedRoute: ActivatedRoute) { }

    async ngOnInit() {
        const params: any = this.activatedRoute.snapshot.params;
        this.guid = params.guid;

        if (this.guid) {
            await this.init();
        }

        this.form = new FormGroup({
            name: new FormControl([this.body.name, Validators.required]),
        });
    }

    async init() {
        const select = await this.inertia.getElement(this.objectName, this.guid, this.body.$$$$);
        if (select?.$guid) {
            this.body = new Country(clone(select));
        }

        this.cache = new Country(clone(this.body));
    }

    async submit() {
        if (this.form.valid) {
            if (!this.body.$guid) {
                this.body.countrystate = data;
            }
            const crud = await this.inertia.saveElement(this.objectName, this.body);
            if (crud?.$guid) {
                if (this.guid) {
                    this.ui.messageSuccess('Location was successfully updated');
                    await this.init();
                } else {
                    this.ui.messageSuccess('Location was successfully created');
                    this.router.navigate([`${this.module}/${crud.$guid}`]);
                }
            }
        } else {
            this.touch();
            this.ui.messageError('Please fill all required fields');
        }
    }

    getCities(state: CountryState) {
        let arr = [];
        for (const city of state.city) {
            arr.push(city.name);
        }
        return arr.join(', ');
    }

    addState() {
        this.body.countrystate.push(new CountryState);
    }

    addCity(state: CountryState) {
        state.city.push(new City);
    }

    removeSelected($guid: string, elements: Array<any>) {
        if ($guid) {
            for (const element of (elements.filter((x: any) => x.$_select) as Array<any>)) {
                element.$remove = true;
                delete element.$_select;
            }
            for (let i = 0; i < elements.length; i++) {
                if (elements[i].$remove && !elements[i].$guid) {
                    elements.splice(i--, 1);
                }
            }
        } else {
            for (let i = 0; i < elements.length; i++) {
                if (elements[i].$_select) {
                    elements.splice(i--, 1);
                }
            }
        }
    }

    restore() {
        this.body = new Country(clone(this.cache));
        this.editable = false;
    }

    list() {
        this.router.navigate([this.modulePlural]);
    }

    touch() {
        for (const k in this.form.controls) {
            this.form.controls[k].markAsTouched();
        }
    }

    hasError(field: string) {
        if (this.form.controls[field]?.touched && this.form.controls[field].errors && this.form.controls[field].errors?.['required']) {
            return 'Order state name is required';
        }
        return null;
    }

    dialogCreateCity(city: any) {
        this.displayDialogCreateCity = { target: city, content: clone(city) };
    }

    submitCreateCity() {
        Object.assign(this.displayDialogCreateCity.target, this.displayDialogCreateCity.content);
        this.displayDialogCreateCity = null;
    }

    hasBulkAction(arr: Array<any> = []) {
        return arr.filter((x: any) => x.$_select).length;
    }
}

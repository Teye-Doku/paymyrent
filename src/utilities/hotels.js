import houseone from '../images/houses/houseone.jpg';
import housetwo from '../images/houses/housetwo.jpg';
import housethree from '../images/houses/housethree.jpeg';
import housefour from '../images/houses/housefour.jpg';
import housefive from '../images/houses/housefive.jpg';
import housesix from '../images/houses/housesix.jpg';
import hoino from '../images/houses/houseone/hoino.jpg';
import hoint from '../images/houses/houseone/hoint.jpg';
import htino from '../images/houses/housetwo/htino.jpg';
import htint from '../images/houses/housetwo/htint.jpg';
import hthino from '../images/houses/housethree/hthino.jpg';
import hthint from '../images/houses/housethree/hthint.jpg';
import hfino from '../images/houses/housefour/hfino.jpg';
import hfint from '../images/houses/housefour/hfint.jpg';
import hfiino from '../images/houses/housefive/hfiino.jpg';
import hfiint from '../images/houses/housefive/hfiint.jpg';
import hsino from '../images/houses/housesix/hsino.jpg';
import hsint from '../images/houses/housesix/hsint.jpg';

export const hotels = [
    {
        id: "1",
        name: 'American House',
        place: 'East Legon,Accra',
        bed: '3 Bedrooms',
        bathroom: '2 Bathroom',
        price: '3,000',
        img: houseone,
        interior: [
            hoino,
            hoint
        ]
    },
    {
        id: "2",
        name: 'AU Village',
        place: 'Cantoments,Accra',
        bed: '3 Bedrooms',
        bathroom: '2 Bathroom',
        price: '4,000',
        img: housetwo,
        interior: [
            htino,
            htint
        ]
    },
    {
        id: "3",
        name: 'American House',
        place: 'Tantra Hill',
        bed: '3 Bedrooms',
        bathroom: '2 Bathroom',
        price: '2,500',
        img: housethree,
        interior: [
            hthino,
            hthint
        ]
       
    },
    {
        id: "4",
        name: '4 bedrooms townhouse',
        place: 'Labadi,Accra',
        bed: '3 Bedrooms',
        bathroom: '2 Bathroom',
        price: '5,500',
        img: housefour,
        interior: [
            hfino,
            hfint
        ]
    },
    {
        id: "5",
        name: 'Classic Hub',
        place: 'Haatso,Accra',
        bed: '3 Bedrooms',
        bathroom: '2 Bathroom',
        price: '4,500',
        img: housefive,
        interior: [
            hfiino,
            hfiint
        ]
      
    },
    {
        id: "6",
        name: 'Takroadi House',
        place: 'Tema,Community 4',
        bed: '3 Bedrooms',
        bathroom: '2 Bathroom',
        price: '2,000',
        img: housesix,
        interior: [
            hsino,
            hsint
        ]
    }
];
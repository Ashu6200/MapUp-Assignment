import * as turf from '@turf/turf';

const getRegionInfo = (region) => {
    let regionInfo = {};

    switch (region) {
        case 'us':
            // United States region info
            regionInfo = {
                name: 'United States',
                img: 'https://th.bing.com/th/id/OIP.OlJAZb4qgBLjgmxe_QIMoAHaE7?pid=ImgDet&rs=1',
                desc: "The United States of America (USA) is a country primarily located in North America, comprising 50 states, a federal district, five major unincorporated territories, nine Minor Outlying Islands, and 326 Indian reservations. It is the world's third-largest country in terms of both land and total area. The USA shares land borders with Canada to the north and Mexico to the south and has maritime borders with the Bahamas, Cuba, Russia, and other nations. With a population of over 333 million, it is the most populous country in the Americas and the third-most populous in the world. Washington, D.C. serves as the national capital, while New York City is its most populous city and primary financial center.",
                lat: 39.381266,
                lng: -97.922211,
                currency: 'USD',
                speedUnits: 'mph',
                distanceUnits: 'miles',
                volumeUnits: 'gallons',
                timezone: 'America/New_York',
                // Adding a polygon geometry for demonstration
                polygon: turf.polygon([
                    [
                        [-122.45, 37.75],
                        [-122.49, 37.75],
                        [-122.49, 37.71],
                        [-122.45, 37.71],
                        [-122.45, 37.75],
                    ],
                ]),
            };
            break;

        case 'in':
            // India region info
            regionInfo = {
                name: 'India',
                img: 'https://wallpapercave.com/wp/wp4496477.jpg',
                desc: "India, officially the Republic of India, is a South Asian country. It is the seventh-largest country in the world by area and the most populous as of June 2023. Since gaining independence in 1947, it has been the world's most populous democracy. India is bordered by the Indian Ocean to the south, the Arabian Sea to the southwest, and the Bay of Bengal to the southeast. It shares land borders with Pakistan to the west, China, Nepal, and Bhutan to the north, and Bangladesh and Myanmar to the east. Additionally, it has maritime borders with Sri Lanka, the Maldives, Thailand, Myanmar, and Indonesia through its Andaman and Nicobar Islands.",
                lat: 20.5937,
                lng: 78.9629,
                currency: 'INR',
                speedUnits: 'kmph',
                distanceUnits: 'kilometers',
                volumeUnits: 'liters',
                timezone: 'Asia/Kolkata',
                // Adding a polygon geometry for demonstration
                polygon: turf.polygon([
                    [
                        [77.5341, 12.582],
                        [77.5541, 12.582],
                        [77.5541, 12.562],
                        [77.5341, 12.562],
                        [77.5341, 12.582],
                    ],
                ]),
            };
            break;

        case 'uk':
            // United Kingdom region info
            regionInfo = {
                name: 'United Kingdom',
                img: 'https://www.skyscanner.com/wp-content/uploads/2018/05/GettyImages-183625769.jpg?fit=1048,699',
                desc: "The United Kingdom of Great Britain and Northern Ireland, commonly known as the United Kingdom (UK) or Britain, is a country located in Northwestern Europe, situated off the north-western coast of the continental mainland. It is composed of four constituent countries: England, Scotland, Wales, and Northern Ireland. The UK includes the island of Great Britain, the north-eastern part of the island of Ireland, and most of the smaller islands within the British Isles. The country is bordered by the Atlantic Ocean, the North Sea, the English Channel, the Celtic Sea, and the Irish Sea. Its total area is approximately 242,495 square kilometers (93,628 square miles), and it has an estimated population of over 68 million people as of 2023.",
                lat: 55.3781,
                lng: -3.436,
                currency: 'GBP',
                speedUnits: 'mph',
                distanceUnits: 'miles',
                volumeUnits: 'liters',
                timezone: 'Europe/London',
                // Adding a polygon geometry for demonstration
                polygon: turf.polygon([
                    [
                        [-3.4214, 55.3835],
                        [-3.4014, 55.3835],
                        [-3.4014, 55.3635],
                        [-3.4214, 55.3635],
                        [-3.4214, 55.3835],
                    ],
                ]),
            };
            break;

        default:
            // Default region info
            regionInfo = {
                lat: 0,
                lng: 0,
                currency: '',
                speedUnits: '',
                distanceUnits: '',
                volumeUnits: '',
                timezone: '',
            };
            break;
    }

    return regionInfo;
};

// Function to calculate distance between two points using Turf.js
const calculateDistance = (startPoint, endPoint) => {
    const from = turf.point(startPoint);
    const to = turf.point(endPoint);
    const options = { units: 'kilometers' };
    return turf.distance(from, to, options);
};

const calculateCentroid = (polygon) => {
    return turf.explode(polygon);
};

// Usage:
const startPoint = [-122.4194, 37.7749];
const endPoint = [-118.2437, 34.0522];
const distance = calculateDistance(startPoint, endPoint);
console.log('Distance (in kilometers):', distance);

const region = 'us';
const regionData = getRegionInfo(region);
const centroidCoordinates = calculateCentroid(regionData.polygon);
console.log('Centroid Coordinates:', centroidCoordinates);

export default getRegionInfo;

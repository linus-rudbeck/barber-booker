export const barberData = [
    {
        id: 1,
        name: "Hårsnitten AB",
        location: "Stockholm",
        priceRange: "low",
        services: ["Haircut", "Beard Trim"],
        reviews: [
            { user: "Anna", rating: 4.5, comment: "Great haircut, friendly staff!" },
            { user: "Erik", rating: 5, comment: "Best barber in town!" }
        ]
    },
    {
        id: 2,
        name: "Lockig & Kort",
        location: "Gothenburg",
        priceRange: "medium",
        services: ["Haircut", "Coloring", "Shave"],
        reviews: [
            { user: "Maria", rating: 4, comment: "Good service, but a bit pricey." },
            { user: "Johan", rating: 4.5, comment: "Nice atmosphere, skilled barbers." }
        ]
    },
    {
        id: 3,
        name: "Svenska Klipp",
        location: "Malmö",
        priceRange: "high",
        services: ["Haircut", "Styling", "Facial"],
        reviews: [
            { user: "Sofia", rating: 5, comment: "Expensive, but worth it!" },
            { user: "Anders", rating: 4, comment: "Great haircut, friendly staff." }
        ]
    },
    {
        id: 4,
        name: "Sax & Kamm",
        location: "Uppsala",
        priceRange: "low",
        services: ["Haircut", "Beard Trim"],
        reviews: [
            { user: "Lisa", rating: 4, comment: "Affordable prices, good haircut." },
            { user: "Per", rating: 3.5, comment: "Decent service, nothing exceptional." }
        ]
    },
    {
        id: 5,
        name: "Lockigt & Fint",
        location: "Linköping",
        priceRange: "medium",
        services: ["Haircut", "Coloring", "Shave"],
        reviews: [
            { user: "Eva", rating: 4.5, comment: "Nice staff, great haircut!" },
            { user: "Nils", rating: 4, comment: "Good experience overall." }
        ]
    },
    {
        id: 6,
        name: "Snits & Snurr",
        location: "Gävle",
        priceRange: "high",
        services: ["Haircut", "Styling", "Facial"],
        reviews: [
            { user: "Karin", rating: 5, comment: "Absolutely amazing haircut!" },
            { user: "Olof", rating: 4.5, comment: "Professional service, worth the price." }
        ]
    },
    {
        id: 7,
        name: "Klipp & Form",
        location: "Örebro",
        priceRange: "low",
        services: ["Haircut", "Trim"],
        reviews: [
            { user: "Helena", rating: 3.5, comment: "Average haircut, nothing special." },
            { user: "Lars", rating: 4, comment: "Affordable prices, quick service." }
        ]
    },
    {
        id: 8,
        name: "Locks & Curls",
        location: "Jönköping",
        priceRange: "medium",
        services: ["Haircut", "Coloring", "Trim"],
        reviews: [
            { user: "Emma", rating: 4, comment: "Good color job, friendly staff." },
            { user: "Daniel", rating: 4.5, comment: "Satisfied with the haircut." }
        ]
    },
    {
        id: 9,
        name: "Snygg & Stilig",
        location: "Helsingborg",
        priceRange: "high",
        services: ["Haircut", "Styling", "Shave"],
        reviews: [
            { user: "Ida", rating: 5, comment: "Excellent service, highly recommend!" },
            { user: "Fredrik", rating: 4, comment: "Good haircut, but a bit expensive." }
        ]
    },
    {
        id: 10,
        name: "Klipp & Skär",
        location: "Norrköping",
        priceRange: "low",
        services: ["Haircut", "Trim", "Beard Shave"],
        reviews: [
            { user: "Sara", rating: 4.5, comment: "Friendly staff, quick service." },
            { user: "Gustav", rating: 3.5, comment: "Decent haircut, nothing extraordinary." }
        ]
    },
    {
        id: 11,
        name: "Lockar & Luggar",
        location: "Västerås",
        priceRange: "medium",
        services: ["Haircut", "Coloring", "Trim"],
        reviews: [
            { user: "Anna", rating: 4, comment: "Nice atmosphere, skilled barbers." },
            { user: "Anders", rating: 4.5, comment: "Good experience overall." }
        ]
    },
    {
        id: 12,
        name: "Klipp & Fix",
        location: "Kristianstad",
        priceRange: "high",
        services: ["Haircut", "Styling", "Beard Trim"],
        reviews: [
            { user: "Maria", rating: 5, comment: "Professional service, worth the price." },
            { user: "Johan", rating: 4, comment: "Satisfied with the haircut." }
        ]
    },
    {
        id: 13,
        name: "Lock & Lugg",
        location: "Lund",
        priceRange: "low",
        services: ["Haircut", "Trim", "Beard Shave"],
        reviews: [
            { user: "Elin", rating: 4, comment: "Good haircut, friendly staff." },
            { user: "David", rating: 4.5, comment: "Affordable prices, quick service." }
        ]
    }
];

// Function to get all distinct values for a given property
export function getProperty(propertyName){

    // Get all locations from the barber data
    const entries = barberData.map(barber => barber[propertyName]);

    // Create a set to store only distinct locations
    const set = new Set(entries)

    // Use destructuring to convert the set back to an array
    const distinct = [...set];

    // return the array
    return distinct;
}

// Function to get a single barber by ID
export function getBarberById(id){
    return barberData.find(barber => barber.id === id);
}
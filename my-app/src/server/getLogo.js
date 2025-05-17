const website = [
  { make: "Audi", website: "audi.com" },
  { make: "BMW", website: "bmw.com" },
  { make: "Mercedes-Benz", website: "www.group.mercedes-benz.com" },
  { make: "Volkswagen", website: "www.volkswagen.com" },
  { make: "SEAT", website: "seat.com" },
  { make: "Land Rover", website: "landrover.com" },
  { make: "Mazda", website: "www.mazda.com" },
  { make: "Toyota", website: "toyota.com" },
  { make: "Bugatti", website: "bugatti.com" },
  { make: "McLaren", website: "mclaren.com" },
];

function getWebsiteByMake(userInput) {
  const make = userInput.trim().toLowerCase();

  const found = website.find((item) => item.make.toLowerCase() === make);

  if (found) {
    return found.website;
  } else {
    return "Website not found for the specified car make.";
  }
}

export default getWebsiteByMake;

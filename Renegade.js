function toggleDrive(car, driveType) {
  const activeButton = document.querySelector(`#${car}-4x4`);
  const inactiveButton = document.querySelector(`#${car}-4x2`);
  if (driveType === '4x4') {
      activeButton.classList.add('active');
      inactiveButton.classList.remove('active');
  } else {
      activeButton.classList.remove('active');
      inactiveButton.classList.add('active');
  }
  const carsData = {
      "Laredo A": {
          "price": "$36,495",
          "lease": "$428 monthly for 36 mo.",
          "drive": ["4x2"],
          "wheelbase": ["2 row"],
          "link": "build_laredo_a.html"
      },
      "Laredo X": {
          "price": "$38,785",
          "lease": "$391 monthly for 42 mo.",
          "drive": ["4x4", "4x2"],
          "wheelbase": ["2 row", "3 row"],
          "link": "build_laredo_x.html"
      },
      "Laredo": {
          "price": "$38,035",
          "lease": "$370 monthly for 42 mo.",
          "drive": ["4x4", "4x2"],
          "wheelbase": ["2 row", "3 row"],
          "link": "build_laredo.html"
      },
      "Altitude": {
          "price": "$42,640",
          "lease": "$422 monthly for 42 mo.",
          "drive": ["4x4","4x2"],
          "wheelbase": ["2 row", "3 row"],
          "link": "build_altitude.html"
      },
      "Altitude X": {
        "price": "$43,140",
        "lease": "$442 monthly for 42 mo.",
        "drive": ["4x4", "4x2"],
        "wheelbase": ["2 row", "3 row"],
        "link": "build_altitude_x.html"
    },
    "Limited": {
        "price": "$45,905",
        "lease": "$456 monthly for 42 mo.",
        "drive": ["4x4","4x2"],
        "wheelbase": ["2 row", "3 row"],
        "link": "build_limited.html"
    },
    "Overland": {
        "price": "$60,995",
        "lease": "$664 monthly for 42 mo.",
        "drive": ["4x4"],
        "wheelbase": ["2 row", "3 row"],
        "link": "build_overland.html"
    },
    "Summit": {
        "price": "$62,560",
        "lease": "$716 monthly for 42 mo.",
        "drive": ["4x4"],
        "wheelbase": ["2 row", "3 row"],
        "link": "build_summit.html"
    },
    "Summit Reserve": {
        "price": "$67,040",
        "lease": "$766 monthly for 42 mo.",
        "drive": ["4x4"],
        "wheelbase": ["2 row", "3 row"],
        "link": "build_summit_reverse.html"
    }
  };

  function setCarData(car) {
      const carData = carsData[car];
      document.getElementById("price").innerText = carData.price;
      document.getElementById("lease").innerText = carData.lease;
      document.getElementById("drive").innerHTML = carData.drive.map(d => `<input type="checkbox" value="${d}">${d}`).join(' ');
      document.getElementById("wheelbase").innerHTML = carData.wheelbase.map(w => `<option value="${w}">${w}</option>`).join(' ');
      document.getElementById("build").setAttribute("href", carData.link);
  }
}
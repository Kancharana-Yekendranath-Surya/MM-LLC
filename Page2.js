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
            "Wagoneer": {
                "price": "$65,945",
                "lease": "$738 monthly for 36 mo.",
                "drive": ["4x4", "4x2"],
                "wheelbase": ["Standard", "Wagoneer L"],
                "link": "build_wagoneer.html"
            },
            "Series II": {
                "price": "$75,825",
                "lease": "$969 monthly for 42 mo.",
                "drive": ["4x4", "4x2"],
                "wheelbase": ["Standard", "Wagoneer L"],
                "link": "build_series_ii.html"
            },
            "Carbide": {
                "price": "$79,520",
                "lease": "$1,014 monthly for 42 mo.",
                "drive": ["4x4", "4x2"],
                "wheelbase": ["Standard", "Wagoneer L"],
                "link": "build_carbide.html"
            },
            "Series III": {
                "price": "$89,320",
                "lease": "$1,067 monthly for 42 mo.",
                "drive": ["4x4"],
                "wheelbase": ["Standard", "Wagoneer L"],
                "link": "build_series_iii.html"
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
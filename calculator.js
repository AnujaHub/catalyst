let currentCalc = "";

function openForm(type) {
    currentCalc = type;
    document.getElementById("calc-form").style.display = "block";
    document.getElementById("result").innerText = "";

    let formFields = document.getElementById("form-fields");
    formFields.innerHTML = "";

    if (type === "molarity") {
        document.getElementById("calc-title").innerText = "Calculate Molarity";
        formFields.innerHTML = `
            <label for="solute">Mass of Solute (g):</label>
            <input type="number" id="solute" placeholder="Enter mass in grams">
            
            <label for="volume">Solution Volume (L):</label>
            <input type="number" id="volume" placeholder="Enter volume in liters">
            
            <label for="molar-mass">Molar Mass of Solute (g/mol):</label>
            <input type="number" id="molar-mass" placeholder="Enter molar mass">
        `;
    } else if (type === "molality") {
        document.getElementById("calc-title").innerText = "Calculate Molality";
        formFields.innerHTML = `
            <label for="solute">Mass of Solute (g):</label>
            <input type="number" id="solute" placeholder="Enter mass in grams">
            
            <label for="solvent">Mass of Solvent (kg):</label>
            <input type="number" id="solvent" placeholder="Enter mass in kg">
            
            <label for="molar-mass">Molar Mass of Solute (g/mol):</label>
            <input type="number" id="molar-mass" placeholder="Enter molar mass">
        `;
    } else if (type === "normality") {
        document.getElementById("calc-title").innerText = "Calculate Normality";
        formFields.innerHTML = `
            <label for="equivalents">Number of Equivalents:</label>
            <input type="number" id="equivalents" placeholder="Enter equivalents">
            
            <label for="volume">Solution Volume (L):</label>
            <input type="number" id="volume" placeholder="Enter volume in liters">
        `;
    }
}

function closeForm() {
    document.getElementById("calc-form").style.display = "none";
    document.getElementById("result").innerText = "";
}

function calculate() {
    let result = 0;

    if (currentCalc === "molarity") {
        let soluteMass = parseFloat(document.getElementById("solute").value);
        let solutionVolume = parseFloat(document.getElementById("volume").value);
        let molarMass = parseFloat(document.getElementById("molar-mass").value);
        
        if (isNaN(soluteMass) || isNaN(solutionVolume) || isNaN(molarMass)) {
            alert("Please enter all values correctly.");
            return;
        }

        let moles = soluteMass / molarMass;
        result = moles / solutionVolume;
    } 
    
    else if (currentCalc === "molality") {
        let soluteMass = parseFloat(document.getElementById("solute").value);
        let solventMass = parseFloat(document.getElementById("solvent").value);
        let molarMass = parseFloat(document.getElementById("molar-mass").value);
        
        if (isNaN(soluteMass) || isNaN(solventMass) || isNaN(molarMass)) {
            alert("Please enter all values correctly.");
            return;
        }

        let moles = soluteMass / molarMass;
        result = moles / solventMass;
    } 
    
    else if (currentCalc === "normality") {
        let equivalents = parseFloat(document.getElementById("equivalents").value);
        let solutionVolume = parseFloat(document.getElementById("volume").value);
        
        if (isNaN(equivalents) || isNaN(solutionVolume)) {
            alert("Please enter all values correctly.");
            return;
        }

        result = equivalents / solutionVolume;
    }

    document.getElementById("result").innerText = result.toFixed(3);
}


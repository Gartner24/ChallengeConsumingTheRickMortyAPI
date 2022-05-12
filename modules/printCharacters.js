const printCharacter = (data, container) => {

    data.forEach(character => {
        const {name, status, species, image, location, origin} = character;
        let alive = "dot-alive";
        if (status != "Alive") {
            alive = "dot-unknown"
        }
        const div = document.createElement('div');
        div.classList.add('character');
        div.innerHTML = `
            <img src="${image}" alt="">
            <div class="character-info">
                <div class="info" id="title">
                    <h3>${name}</h3>
                    <span class="sub-info">
                        <div class=${alive}></div>
                        ${status} - ${species}
                    </span>
                </div>
                
                <div class="info">
                    <span class="sub-title">Last known location:</span>
                    <br>
                    <span class="sub-info">${location.name}</span>
                </div>

                <div class="info">
                    <span class="sub-title">First seen in:</span>
                    <br>
                    <span class="sub-info">${origin.name}</span>  
                </div>              
            </div>
        `;
        container.appendChild(div);
        // (status == 'Alive') ? idDot.classList.add('dot-alive') : idDot.classList.add('dot-unknown');
    })
};

export default printCharacter;
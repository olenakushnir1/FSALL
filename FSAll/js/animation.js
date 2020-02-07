    let prevDropOpened = null;

    function toggleBar(id) {
        let dropdown = $(`#${id}`);
        let dropdownImg = $(`#${id}i`);
        
        if (dropdown.css("display") == "none") {
            dropdown.css({"display": "flex"});
         
            if (dropdownImg) {
                dropdownImg.css({"display": "none"});
            }
            if (prevDropOpened && prevDropOpened.attr('id') != dropdown.attr('id')) {
                prevDropOpened.css({"display": "none"});
    
                let prevImg = $(`#${prevDropOpened.attr('id')}i`);
                if (prevImg) {
                    prevImg.css({"display": "block"});
                }
            }
            prevDropOpened = dropdown;
        } else {
            dropdown.css({"display": "none"});
            if (dropdownImg) {
                dropdownImg.css({"display": "block"});
            }
        }
    }
    
    let ids = ['1di', '2di', '3di'];//values of attribute 'dropid'
    let currentId = 0;
    
    function autoToggler() {
        toggleBar(ids[currentId++]);
        if (currentId >= ids.length) {
            currentId = 0
        }
    }
    
    function getInterval() {
        return setInterval(autoToggler, 5000);//time in ms
    }

    let dropInterval = getInterval();
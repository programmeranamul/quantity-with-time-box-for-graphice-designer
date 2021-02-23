const sName = document.getElementById("s-name");
const imageQuantity = document.getElementById("img-quantity-input");
let imgQuantityInfo = document.getElementById("img-guantity-info");
const imgBasicPrice = document.getElementById("img-basic-price");
const imgStanderdPrice = document.getElementById("img-standerd-price")
const imgPremiumPrice = document.getElementById("img-premium-price")
const imgInfoimg = document.getElementById("img-info-img");
const imgInfoDes = document.getElementById("img-infoDes");
const customImgInfo = document.getElementById("img-custom-info");
const imgTime = document.getElementById("img-time");
let imgDelevaryTime;


let service;
const ChangHandler = (e) => {
    service = e.target.value;
    sName.innerText = service;
    imgQuantityInfo.innerText = imageQuantity.value;
    imgAllUpdate()
}

document.getElementById("selecService").addEventListener("change", ChangHandler);

const imgTimeHandler = (e) => {
    console.log(e.target.value);
    imgDelevaryTime = e.target.value;
    imgQuantityInfo.innerText = imageQuantity.value;
    imgAllUpdate()
}

imgTime.addEventListener("change", imgTimeHandler);


const imgQuantityHandler = () => {
    console.log(imageQuantity.value);
    imgQuantityInfo.innerText = imageQuantity.value;
    imgAllUpdate()
}
const imgQuantityHandler1 = () => {
    imgQuantityInfo.innerText = imageQuantity.value;
    imgAllUpdate()
}
imageQuantity.addEventListener("keyup", imgQuantityHandler)
imageQuantity.addEventListener("change", imgQuantityHandler1)

const imgAllUpdate = () => {
    const sNameText = sName.innerText
    let fainalImgQuantity = parseInt(imgQuantityInfo.innerText)
    console.log(fainalImgQuantity);
    if (isNaN(fainalImgQuantity)) {
        fainalImgQuantity = 0;
        imgQuantityInfo.innerText = 0
    }
    if (sNameText === "Selec Your Service") {
        imgBasicPrice.value = 0;
        imgInfoimg.src = "img/dow.png";
        customImgInfo.style.display = "none";
        imgInfoDes.style.display = "block";
    }
    else {
        imgInfoDes.style.display = "none";
        customImgInfo.style.display = "block";

        if (sNameText === "Clipping Path Service") {
            // imgInfoimg.src = "img/s.jpg";
            // imgBasicPrice.value = fainalImgQuantity * 2;
            // imgStanderdPrice.value = fainalImgQuantity * 2;
            // imgPremiumPrice.value = fainalImgQuantity * 2;
            //updateAll("img/s.jpg",0.99,1.39,3.49,fainalImgQuantity);
            if (imgDelevaryTime == 12) {
                updateAll("img/s.jpg", 12, 12, 12, fainalImgQuantity);
            } else if (imgDelevaryTime == 24) {
                updateAll("img/s.jpg", 24, 24, 24, fainalImgQuantity);
            } else {
                updateAll("img/s.jpg", 0.99, 1.39, 3.49, fainalImgQuantity);
            }

        } else if (sNameText === "Background Remove Service") {
            if (imgDelevaryTime == 12) {
                updateAll("img/bg.jpg", 12, 12, 12, fainalImgQuantity);
            } else if (imgDelevaryTime == 24) {
                updateAll("img/bg.jpg", 24, 24, 24, fainalImgQuantity);
            } else {
                updateAll("img/bg.jpg", 0.39, 1.49, 3.49, fainalImgQuantity);
            }
        }
        else if (sNameText === "Image Masking Servuce") {
            if (imgDelevaryTime == 12) {
                updateAll("img/Image-masking.jpg", 12, 12, 12, fainalImgQuantity);
            } else if (imgDelevaryTime == 24) {
                updateAll("img/Image-masking.jpg", 24, 24, 24, fainalImgQuantity);
            } else {
                updateAll("img/Image-masking.jpg", 0.99, 1.99, 2.99, fainalImgQuantity);
            }
        }
        else if (sNameText === "Deop Shadow Service") {
            if (imgDelevaryTime == 12) {
                updateAll("img/Drop-shadow.jpg", 12, 12, 12, fainalImgQuantity);
            } else if (imgDelevaryTime == 24) {
                updateAll("img/Drop-shadow.jpg", 24, 24, 24, fainalImgQuantity);
            } else {
                updateAll("img/Drop-shadow.jpg", 0.39, 1.49, 2.99, fainalImgQuantity);
            }
        }
        else if (sNameText === "Ghost Mannequin Service") {
            if (imgDelevaryTime == 12) {
                updateAll("img/Ghost.jpg", 12, 12, 12, fainalImgQuantity);
            } else if (imgDelevaryTime == 24) {
                updateAll("img/Ghost.jpg", 24, 24, 24, fainalImgQuantity);
            } else {
                updateAll("img/Ghost.jpg", 1.49, 1.99, 2.99, fainalImgQuantity);
            }
        }
        else if (sNameText === "Color Variants & Color Changing") {
            if (imgDelevaryTime == 12) {
                updateAll("img/color-variant.jpg", 12, 12, 12, fainalImgQuantity);
            } else if (imgDelevaryTime == 24) {
                updateAll("img/color-variant.jpg", 24, 24, 24, fainalImgQuantity);
            } else {
                updateAll("img/color-variant.jpg", 0.99, 1.49, 4.99, fainalImgQuantity);
            }
        }
        else if (sNameText === "Product Photo Editing") {
            if (imgDelevaryTime == 12) {
                updateAll("img/Model-image-retouchin.jpg", 12, 12, 12, fainalImgQuantity);
            } else if (imgDelevaryTime == 24) {
                updateAll("img/Model-image-retouchin.jpg", 24, 24, 24, fainalImgQuantity);
            } else {
                updateAll("img/Model-image-retouchin.jpg", 0.99, 1.39, 2.99, fainalImgQuantity);
            }
        }
        else {
            if (imgDelevaryTime == 12) {
                updateAll("img/raster-women-image-to-vector-shillhoutte.jpg", 12, 12, 12, fainalImgQuantity);
            } else if (imgDelevaryTime == 24) {
                updateAll("img/raster-women-image-to-vector-shillhoutte.jpg", 24, 24, 24, fainalImgQuantity);
            } else {
                updateAll("img/raster-women-image-to-vector-shillhoutte.jpg", 4.49, 14.99, 49.99, fainalImgQuantity);
            }
        }
    }

}

function updateAll(img, besicPice, standadPrice, Primu, fainalImgQuantity) {
    imgInfoimg.src = img;
    imgBasicPrice.value = (fainalImgQuantity * besicPice).toFixed(2);
    imgStanderdPrice.value = (fainalImgQuantity * standadPrice).toFixed(2);
    imgPremiumPrice.value = (fainalImgQuantity * Primu).toFixed(2);
}





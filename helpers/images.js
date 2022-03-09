const fs = require('fs');
const basePath = './static/images/';
const urlBasePath = '/images/';
const cardUrl = "https://www.unicornsdatabase.com/images/cards/";

const fetchCardImage = (id, imageUrl) => {
    // check if we have a local file to display
    // NOTE: we will not put images into the src code due to copyright mostly
    // The override is to take from the unicorns database site but I don't want to hammer it 
    // whilst developing the app so local files is easier!
    // It's also important to make sure your local files are the same name as the unicorn database
    // to keep things easier.
    const localImgSrc = `${basePath}${imageUrl}`;
    if (fs.existsSync(`${localImgSrc}`)) {
        return `${urlBasePath}${imageUrl}`;
    }

    // check if we are providing the entire URL
    if (imageUrl.startsWith("http")) {
        return imageUrl;
    }
    else {
        return `${cardUrl}${imageUrl}`;
    }
};

module.exports = {
    fetchCardImage
};
const packs = require('../json/packs.json');
const { fetchCardImage } = require('../helpers/images');

const packDatabase = [ ...packs ];

module.exports = {
    fetchPack: (packId) => {
        let pack = packDatabase.find(el => el.id === packId);
        if (!pack) {
            return null;
        }

        return {
            ...pack,
            image: fetchCardImage(pack.id, pack.image)
        };
    },
    fetchPacks: () => {
        return packDatabase.map(pack => {
            return {
                ...pack,
                image: fetchCardImage(pack.id, pack.image)
            }
        });
    },
    packCollection: packDatabase
};
module.exports = {
    onLoad: () => {
        console.log(`Плагин "test2" загружен.`);
        console.log(2);
    },
    onUnload: () => {
        console.log(`Плагин "test2" выгружен.`);
    }
};
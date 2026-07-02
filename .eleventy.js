module.exports = (cfg) => {
    cfg.addPassthroughCopy({"public/style.css": "style.css"});
    return {
        dir: {
            input: "src",
            output: "out",
            includes: "_includes"
        }
    };
};
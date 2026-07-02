module.exports = (cfg) => {
    cfg.addPassthroughCopy("public");
    return {
        dir: {
            input: "src",
            output: "out",
            includes: "_includes"
        }
    };
};
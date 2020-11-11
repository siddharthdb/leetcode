var simplifyPath = function(path) {
    if (path.length === 0) {
        return path;
    }
    
    const pathStack = [];
    
    let components = path.split("/");
        
    for(const directory of components) {
        if (directory === "." || directory === "") {
            continue;
        } else if (directory === "..") {
            if (pathStack.length !== 0) {
                pathStack.pop();
            }
        } else {
            pathStack.push(directory)
        }
    }
    
    let result = "";

    for (let dir of pathStack) {
        result = result + "/" + dir
    }
    
    return result.length > 0 ? result : "/";
};

console.log(simplifyPath("/a/./b/../../c/"));
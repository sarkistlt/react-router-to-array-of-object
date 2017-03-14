function extractChildRoutes(route, prefix) {
    let paths = [];
    const childRoutes = route.props && route.props.children ?
        route.props.children : route.childRoutes;
    if (childRoutes) {
        if (Array.isArray(childRoutes)) {
            childRoutes.forEach((r) => {
                paths = paths.concat(extractRoute(r, prefix));
            });
        } else {
            paths = paths.concat(extractRoute(childRoutes, prefix));
        }
    }
    return paths;
}

function extractRoute(route, prefix) {
    const path = route.props && route.props.path ? route.props.path : route.path;
    const name = route.props && route.props.name ? route.props.name : route.name;
    let paths = [];

    if (!path) {
        if (Array.isArray(route)) {
            route.forEach((r) => {
                paths = paths.concat(extractRoute(r, prefix));
            });

            return paths;
        } else {
            return extractChildRoutes(route, prefix);
        }
    }
    const currentPath = (
        `${prefix || ''}${path}`
    );

    if (currentPath && name) {
        let p = `${currentPath.startsWith('/') ? '' : '/'}${currentPath}`;
        paths.push({path: p, name: name});
        paths = paths.concat(extractChildRoutes(route, `${currentPath}/`));
    }
    return paths;
}

export default function routesToArray(route) {
    let paths = [];
    if (Array.isArray(route)) {
        route.forEach((r) => {
            paths = paths.concat(extractRoute(r));
        });
    } else {
        paths = paths.concat(extractRoute(route));
    }

    return paths;
}
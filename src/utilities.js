export const getInitials = (name)=> {
    let nameArrays = name.split(' ');
    return `${nameArrays[0].slice(0,1)}${nameArrays[1].slice(0,1)}`
}


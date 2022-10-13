function stringSplit () {
    //const fullname = prompt("Nombre y Apellido: ");
    const fullname = "bruno  luis diaz cabanillas";
    const array_fullname = fullname.split(" ");
    console.log(array_fullname);
}

function stringReplace() {
    const fullname = "bruno  luis diaz cabanillas";
    const fullname_replaced = fullname.replace ("i", "Y");
    const fullname_replaced_all = fullname.replaceAll ("i", "Y");
    console.log(fullname);
    console.log(fullname_replaced);
    console.log(fullname_replaced_all);
}


function stringLength () {
    const fullname = "bruno luis diaz cabanillas";
    const fullname_length = fullname.length;
    console.log(fullname);
    console.log(fullname_length);
    const fullname_no_white_spaces = fullname.replaceAll (" ")
    }
}
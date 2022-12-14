/*let greenCharacter = document.createElement('img')
greenCharacter.src = 'assets/green-character.gif'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '100px'
greenCharacter.style.bottom = '100px'
document.body.append(greenCharacter) */

//* Pine tree*//

/*let pineTree = document.createElement('img')
pineTree.src = 'assets/pine-tree.png'
pineTree.style.position = 'fixed'
pineTree.style.left = '450px'
pineTree.style.bottom = '200px'
document.body.append(pineTree)*/

function newImage(filePath, position, left, bottom) {
    let image = document.createElement('img')
    image.src = filePath
    image.style.position = position
    image.style.left = left
    image.style.bottom = bottom
    document.body.append(image)
}

newImage('assets/green-character.gif', 'fixed', '100px', '100px')

newImage("assets/pine-tree.png", "fixed", "450px", "200px");

newImage("assets/tree.png", "fixed", "200px", "300px");

newImage("assets/pillar.png", "fixed", "350px", "100px");

newImage("assets/crate.png", "fixed", "150px", "200px");

newImage("assets/well.png", "fixed", "500px", "425px");

function newItem(filePath, position, left, bottom) {
    let item = document.createElement('img')
    item.src = filePath
    item.style.position = position
    item.style.left = left
    item.style.bottom = bottom
    document.body.append(item)

    item.addEventListener('dblclick', function(){
        item.remove()
    })
}

newItem('assets/sword.png', 'fixed', '500px', '405px');

newItem("assets/sheild.png", "fixed", "165x", "185px");

newItem("assets/staff.png", "fixed", "600px", "100px");
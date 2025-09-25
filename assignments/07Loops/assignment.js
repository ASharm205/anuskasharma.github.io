function drawScene() {
    alert("button is clicked!"); 
    
    var scene = document.getElementById('scene');
    if (!scene) {
        alert("scene element not found!");
        return;
    }
    
    scene.innerHTML = '';
    
    var date = new Date();
    var hour = date.getHours();
    
    
    if (hour >= 18 || hour < 6) {
        scene.className = 'night';
        var moon = document.createElement('div');
        moon.className = 'moon';
        scene.appendChild(moon);
        console.log("added moon");
    } else {
        scene.className = '';
        var sun = document.createElement('div');
        sun.className = 'sun';
        scene.appendChild(sun);
        console.log("added sun");
    }
    
    // draws 6 clouds using for loop
    for (var i = 0; i < 6; i++) {
        var cloud = document.createElement('div');
        cloud.className = 'cloud';
        cloud.style.left = (i * 120 + 30) + 'px';
        scene.appendChild(cloud);
    }
    console.log("added 6 clouds");
    
    // draws 6 trees using for loop
    for (var i = 0; i < 6; i++) {
        var tree = document.createElement('div');
        tree.className = 'tree';
        tree.style.left = (i * 120 + 50) + 'px';
        
        var leaves = document.createElement('div');
        leaves.className = 'tree-leaves';
        
        var trunk = document.createElement('div');
        trunk.className = 'tree-trunk';
        
        tree.appendChild(leaves);
        tree.appendChild(trunk);
        scene.appendChild(tree);
    }
    console.log("added 6 trees");
    
    alert(" drawn successfully!");
}
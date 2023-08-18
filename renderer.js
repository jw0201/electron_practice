const { ipcRenderer } = require('electron');

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('click-me');
    
    button.addEventListener('click', () => {
        ipcRenderer.send('button-clicked', 'Button was clicked');
    });
});


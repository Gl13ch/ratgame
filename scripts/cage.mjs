// window.onload = () => {
    
// }

const selectedCage = (JSON.parse(sessionStorage.getItem('currentCage')))

console.log(selectedCage[0].id)


window.addEventListener('DOMContentLoaded', () => {
    const loadCage = () => {
        let cage = document.createElement("h3")
            cage.className = 'cage'
            cage.textContent = `${selectedCage[0].id} ${selectedCage[0].cageName}`
    
            document.body.appendChild(cage)
    }
    
    loadCage()
})

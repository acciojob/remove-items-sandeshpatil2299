//your JS code here. If required.
let colorSelect= document.querySelector("#colorSelect");
let removeBtn= document.querySelector('input[type="button"][value="Select and Remove"]');

removeBtn.addEventListener("click", () =>  {
    if(colorSelect.selectedIndex !== -1){
        colorSelect.remove(colorSelect.selectedIndex);
    }
});
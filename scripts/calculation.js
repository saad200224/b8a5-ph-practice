let total = 0;
function handleClick(target){
    const entryProductList = document.getElementById("entry-list");
    const productName = target.childNodes[3].childNodes[3].innerText;
    const li = document.createElement('li');
    li.innerText = productName;
    entryProductList.appendChild(li);

    const price = target.childNodes[3].childNodes[5].innerText.split(" ")[0];
    total = parseInt(total) + parseInt(price);
    document.getElementById("total-span").innerText = total.toFixed(2);

    return total;

    // const inputField = document.getElementById('coupon-input');
    // const inputValue = inputField.value;

    // if (total >= 200){
    //     const discount = total * 0.2;
    //     const discountField = document.getElementById('discount-span');
    //     discountField.innerText = discount.toFixed(2);

    //     const netTotal = document.getElementById('net-total');
    //     netTotal.innerText = (total - discount).toFixed(2);

    // }else{
    //     const discount = total * 0;
    //     const discountField = document.getElementById('discount-span');
    //     discountField.innerText = discount.toFixed(2);

    //     const netTotal = document.getElementById('net-total');
    //     netTotal.innerText = (total - discount).toFixed(2);
    // }
}

function goHome(){
    window.location.href = 'index.html'
}

function couponButton(){

    const inputField = document.getElementById('coupon-input');
    const inputValue = inputField.value;

    if ( inputValue === 'SELL200'){
        const discount = total * 0.2;
        const discountField = document.getElementById('discount-span');
        discountField.innerText = discount.toFixed(2);

    }else{
        const discount = total * 0;
        const discountField = document.getElementById('discount-span');
        discountField.innerText = discount.toFixed(2);
    }  
}



function discountCalculation(){

}

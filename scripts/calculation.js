let total = 0;
function handleClick(target){
    const entryProductList = document.getElementById("entry-list");
    const productName = target.childNodes[3].childNodes[3].innerText;
    const count = entryProductList.childElementCount;
    const ol = document.createElement('ol');
    ol.innerText = `${count + 1} .${productName}`;
    entryProductList.appendChild(ol);

    const price = target.childNodes[3].childNodes[5].innerText.split(" ")[0];
    total = parseInt(total) + parseInt(price);
    document.getElementById("total-span").innerText = total.toFixed(2);

    const netTotal = document.getElementById('net-total');
    netTotal.innerText = total.toFixed(2);

    if ( total > 0){
        const buttonPurchase =  document.getElementById('btn-purchase');
        buttonPurchase.removeAttribute('disabled');
        buttonPurchase.classList.remove('bg-gray-400');

    }
    if ( total >= 200){
        const buttonCoupon = document.getElementById('btn-coupon');
        buttonCoupon.removeAttribute('disabled');
        buttonCoupon.classList.remove('bg-gray-400');
    }

    return total.toFixed(2);
}

function couponButton(){
    const inputField = document.getElementById('coupon-input');
    const inputValue = inputField.value;

    if ( inputValue === 'SELL200' && total >= 200){
        const discount = (total * 0.2).toFixed(2);
        document.getElementById('discount-span').innerText = discount;

        const netTotal = document.getElementById('net-total');
        netTotal.innerText = (total.toFixed(2)-discount).toFixed(2);
        
    } else{
        const discount = (total * 0).toFixed(2);
        document.getElementById('discount-span').innerText = discount;

        const netTotal = document.getElementById('net-total');
        netTotal.innerText = (total.toFixed(2)-discount).toFixed(2);
    } 
}

function goHome(){
    window.location.href = 'index.html'
}
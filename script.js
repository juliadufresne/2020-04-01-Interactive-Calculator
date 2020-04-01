function addZeroes(num) {
    const stringNum = num.toString().split('.')[1]
    const len = stringNum && stringNum.length > 2 ? stringNum.length : 2
    return Number(num).toFixed(len)
}

$('#target').submit(function(e){
    e.preventDefault()
    const bill = $('.money').val()
    const tip = $('.radio:checked').val()
    const tipPercentage = (tip / 100) + 1
    const totalAmountUnrounded = bill * tipPercentage
        const totalAmountRounded = Math.round(totalAmountUnrounded * 100) / 100
    const tipAmountUnrounded = totalAmountRounded - bill
        const tipAmountRounded = Math.round(tipAmountUnrounded * 100) / 100

        let finalTip = addZeroes(tipAmountRounded)
        let finalBill = addZeroes(totalAmountRounded)

    if(isNaN(bill) === true) {
        alert("Please enter a valid amount")
        $('.money').val("")
    } else {
        let tipAmountToAppend = 
        `
        <div class="formField">
            <label class="res">Tip amount</label>
            <div class="tipAmt">
                <p class="final">$   ${finalTip}</p>
            </div>
        </div>
        `
    
        let totalAmountToAppend = 
        `
        <div class="formField">
            <label class="res">Total bill amount</label>
            <div class="billAmt">
                <p class="final">$   ${finalBill}</p>
            </div>
        </div>
        
        `
    
        $('.tip').html(tipAmountToAppend)
        $('.bill').html(totalAmountToAppend)
    }

})
/* =============== CHECK WHAT PAGE WE ON =============== */
current = document.getElementsByTagName('head')
if (current[0].id === '1') {
    document.querySelector('.step_1').classList.add('selected')
}
if (current[0].id === '2') {
    document.querySelector('.step_2').classList.add('selected')
}
if (current[0].id === '3') {
    document.querySelector('.step_3').classList.add('selected')
}
if (current[0].id === '4') {
    document.querySelector('.step_4').classList.add('selected')
}

/* =============== 1ST PAGE FORM VALIDATOR =============== */
if (current[0].id === '1'){
    localStorage.clear()
    form = document.getElementById('form')
    name_div = document.getElementById('fname')
    email_div = document.getElementById('femail')
    number_div = document.getElementById('fnumber')
    name_inp = document.querySelector('[name=name]');
    email_inp = document.querySelector('[name=email]');
    number_inp = document.querySelector('[name=number]');

    form.addEventListener("submit", (event) => {
        let err = false
        if (name_inp.value === "" || name_inp == null){
            name_div.classList.add('failed')
            err = true
        }
        if (email_inp.value === "" || email_inp == null){
            email_div.classList.add('failed')
            err = true
        }
        if (number_inp.value === "" || number_inp == null){
            number_div.classList.add('failed')
            err = true
        }
        if (err === true){
            event.preventDefault()
        }})}

/* =============== 2ND PAGE PLAN SELECTOR =============== */
function clicked(inp) {
    if (inp == '1st') {
        plans[0].classList.add('highlighted')
        plans[1].classList.remove('highlighted')
        plans[2].classList.remove('highlighted')
        document.querySelector('[value=arcade]').setAttribute('checked','')
        localStorage.setItem('Arcade', 9)
        localStorage.removeItem('Advanced', 12)
        localStorage.removeItem('Pro', 15)
    }
    if (inp == '2nd') {
        plans[0].classList.remove('highlighted')
        plans[1].classList.add('highlighted')
        plans[2].classList.remove('highlighted')
        document.querySelector('[value=advanced]').setAttribute('checked','')
        localStorage.removeItem('Arcade', 9)
        localStorage.setItem('Advanced', 12)
        localStorage.removeItem('Pro', 15)
    }
    if (inp == '3rd') {
        plans[0].classList.remove('highlighted')
        plans[1].classList.remove('highlighted')
        plans[2].classList.add('highlighted')
        document.querySelector('[value=pro]').setAttribute('checked','')
        localStorage.removeItem('Arcade', 9)
        localStorage.removeItem('Advanced', 12)
        localStorage.setItem('Pro', 15)
    }}

function month_or_year(inp,page){
    if (inp == 'year'){
        localStorage.setItem('year','')
        localStorage.removeItem('month')
    }
    else {
        localStorage.setItem('month','')
        localStorage.removeItem('year')
    }
    prices = document.getElementsByClassName('price')
    if (page == '2'){
        if (inp == 'year'){
            prices[0].innerHTML = "$90/yr"
            prices[1].innerHTML = "$120/yr"
            prices[2].innerHTML = "$150/yr"
        }
        if (inp == 'month'){
            prices[0].innerHTML = "$9/mo"
            prices[1].innerHTML = "$12/mo"
            prices[2].innerHTML = "$15/mo"
        }}
    if (page == '3'){
        if (inp == 'year'){
            prices[0].innerHTML = "+$10/yr"
            prices[2].innerHTML = "+$20/yr"
            prices[1].innerHTML = "+$20/yr"
        }
        if (inp == 'month'){
            prices[0].innerHTML = "+$1/mo"
            prices[1].innerHTML = "+$2/mo"
            prices[2].innerHTML = "+$2/mo"
        }}}

if (current[0].id === '2'){
    plans = document.getElementsByClassName('plans')
    period = document.getElementsByClassName('free-period')
    yearly = document.getElementById('yearly')
    monthly = document.getElementById('monthly')
    plans[0].addEventListener("mousedown", () => { clicked('1st') });
    plans[1].addEventListener("mousedown", () => { clicked('2nd') });
    plans[2].addEventListener("mousedown", () => { clicked('3rd') });
    document.getElementById('chk').addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        yearly.classList.add("enabled_p");
        monthly.classList.remove("enabled_p");
        period[0].style.display = 'block'
        period[1].style.display = 'block'
        period[2].style.display = 'block'
        month_or_year('year','2')
    }
    else {
        yearly.classList.add("enabled_p");
        monthly.classList.remove("enabled_p");
        period[0].style.display = 'none'
        period[1].style.display = 'none'
        period[2].style.display = 'none'
        month_or_year('month','2')
    }})}

if (current[0].id === '2'){
    form = document.getElementById('form')
    form.addEventListener("submit", (event) => {
        let err = false
        if (document.getElementsByClassName('plans')[0].classList.contains('highlighted') ||
            document.getElementsByClassName('plans')[1].classList.contains('highlighted') ||
            document.getElementsByClassName('plans')[2].classList.contains('highlighted')){
            err = false
        }
        else {
            document.getElementById('next-button').classList.add('plan-form-failed')
            err = true
        }
        if (err === true){
            event.preventDefault()
    }})}

/* =============== 3RD PAGE ADDON SELECTOR =============== */
if (current[0].id === '3'){
    if (new URLSearchParams(window.location.search).get('timeframe') !== null){
        month_or_year('year','3')
        }
    else {
        month_or_year('month','3')
    }
    addons = document.getElementsByClassName('addons')
    checkbox = document.getElementsByClassName('addon-checkbox')

    if (localStorage.getItem('Online_service') !== null){
        checkbox[0].setAttribute("checked",'')
        addons[0].classList.add('highlighted')
    }
    if (localStorage.getItem('Larger_storage') !== null){
        checkbox[1].setAttribute("checked",'')
        addons[1].classList.add('highlighted')
    }
    if (localStorage.getItem('Customizable_Profile') !== null){
        checkbox[2].setAttribute("checked",'')
        addons[2].classList.add('highlighted')
    }

    addons[0].addEventListener("mousedown", () => { 
        if (checkbox[0].hasAttribute('checked')){
            addons[0].classList.remove('highlighted')
            checkbox[0].removeAttribute("checked")
            localStorage.removeItem('Online_service')
        }
        else {
            addons[0].classList.add('highlighted')
            checkbox[0].setAttribute("checked",'')
            localStorage.setItem('Online_service', 1)
        }})
    addons[1].addEventListener("mousedown", () => { 
        if (checkbox[1].hasAttribute('checked')){
            addons[1].classList.remove('highlighted')
            checkbox[1].removeAttribute("checked")
            localStorage.removeItem('Larger_storage')
        }
        else {
            addons[1].classList.add('highlighted')
            checkbox[1].setAttribute("checked",'')
            localStorage.setItem('Larger_storage', 2)
        }})
    addons[2].addEventListener("mousedown", () => { 
        if (checkbox[2].hasAttribute('checked')){
            addons[2].classList.remove('highlighted')
            checkbox[2].removeAttribute("checked")
            localStorage.removeItem('Customizable_Profile')
        }
        else {
            addons[2].classList.add('highlighted')
            checkbox[2].setAttribute("checked",'')
            localStorage.setItem('Customizable_Profile', 2)
        }})}

/* =============== 4th PAGE ADDON SELECTOR =============== */

if (current[0].id === '4'){
    let sum = 0;
    if (localStorage.hasOwnProperty('month')){
        if (localStorage.hasOwnProperty('Arcade')){
            document.getElementById('checkout-form-plan-text').innerHTML = 'Arcade (Monthly)'
        }
        if (localStorage.hasOwnProperty('Advanced')){
            document.getElementById('checkout-form-plan-text').innerHTML = 'Advanced (Monthly)'
        }
        if (localStorage.hasOwnProperty('Pro')){
            document.getElementById('checkout-form-plan-text').innerHTML = 'Pro (Monthly)'
        }

        if (localStorage.hasOwnProperty('Online_service')){
            document.getElementById('checkout-online_service').style.display = 'flex'
            document.getElementById('addon1_price').innerHTML = `+$${localStorage.getItem('Online_service')*1}/mo`
            sum += (localStorage.getItem('Online_service'))*1
            document.getElementById('checkout-hr').style.display = 'block'
        }
        if (localStorage.hasOwnProperty('Larger_storage')){
            document.getElementById('checkout-larger_storage').style.display = 'flex'
            document.getElementById('addon2_price').innerHTML = `+$${localStorage.getItem('Larger_storage')*1}/mo`
            sum += (localStorage.getItem('Larger_storage'))*1
            document.getElementById('checkout-hr').style.display = 'block'
        }
        if (localStorage.hasOwnProperty('Customizable_Profile')){
            document.getElementById('checkout-customizable_profile').style.display = 'flex'
            document.getElementById('addon3_price').innerHTML = `+$${localStorage.getItem('Customizable_Profile')*1}/mo`
            sum += (localStorage.getItem('Customizable_Profile'))*1
            document.getElementById('checkout-hr').style.display = 'block'
        }
    document.getElementById('plan-price').innerHTML = `$${localStorage.getItem(document.getElementById('checkout-form-plan-text').innerHTML.split(' ')[0])}/mo`
    sum += localStorage.getItem(document.getElementById('checkout-form-plan-text').innerHTML.split(' ')[0])*1
    document.getElementById('pr').innerHTML = `$${sum}/mo`
    }
    else {
        if (localStorage.hasOwnProperty('Arcade')){
            document.getElementById('checkout-form-plan-text').innerHTML = 'Arcade (Yearly)'
        }
        if (localStorage.hasOwnProperty('Advanced')){
            document.getElementById('checkout-form-plan-text').innerHTML = 'Advanced (Yearly)'
        }
        if (localStorage.hasOwnProperty('Pro')){
            document.getElementById('checkout-form-plan-text').innerHTML = 'Pro (Yearly)'
    }

        if (localStorage.hasOwnProperty('Online_service')){
            document.getElementById('checkout-online_service').style.display = 'flex'
            document.getElementById('addon1_price').innerHTML = `+$${localStorage.getItem('Online_service')*10}/yr`
            sum += localStorage.getItem('Online_service')*10
            document.getElementById('checkout-hr').style.display = 'block'
        }
        if (localStorage.hasOwnProperty('Larger_storage')){
            document.getElementById('checkout-larger_storage').style.display = 'flex'
            document.getElementById('addon2_price').innerHTML = `+$${localStorage.getItem('Larger_storage')*10}/yr`
            sum += localStorage.getItem('Larger_storage')*10
            document.getElementById('checkout-hr').style.display = 'block'
        }
        if (localStorage.hasOwnProperty('Customizable_Profile')){
            document.getElementById('checkout-customizable_profile').style.display = 'flex'
            document.getElementById('addon3_price').innerHTML = `+$${localStorage.getItem('Customizable_Profile')*10}/yr`
            sum += localStorage.getItem('Customizable_Profile')*10
            document.getElementById('checkout-hr').style.display = 'block'
        }
    document.getElementById('plan-price').innerHTML = `$${localStorage.getItem(document.getElementById('checkout-form-plan-text').innerHTML.split(' ')[0])*10}/yr`    
    sum += +localStorage.getItem(document.getElementById('checkout-form-plan-text').innerHTML.split(' ')[0])*10  
    document.getElementById('pr').innerHTML = `$${sum}/yr`
}
    console.log(sum)

}




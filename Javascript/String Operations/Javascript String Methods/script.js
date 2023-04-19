// Code for slice() method:
// let our_string='Please enter the string you want to slice: '
function slice_text() {
    let our_string = prompt('Please enter the string you want to slice: ')
    const our_slice_source = prompt('The digit from where you want to start slicing the string: ')
    const our_slice_dest = prompt('The digit where you want to end slicing the string: ')
    let our_sliced_text = our_string.slice(our_slice_source, our_slice_dest)

    document.getElementById('our_string').innerHTML=our_string
    document.getElementById('slice_source').innerHTML = our_slice_source
    document.getElementById('slice_dest').innerHTML = our_slice_dest
    document.getElementById('sliced-part').innerHTML = `'${our_sliced_text}'`
    document.getElementById('syntaxThisCase').innerHTML=`${our_string}.slice(${our_slice_source}, ${our_slice_dest})`
}

function clearSliceText() {
    document.getElementById('our_string').innerHTML= ''
    document.getElementById('slice_source').innerHTML = ''
    document.getElementById('slice_dest').innerHTML = ''
    document.getElementById('sliced-part').innerHTML = ''
    document.getElementById('syntaxThisCase').innerHTML= ''
}

// Code for replace() method:
// Replacing string content
function replace_text() {
    const btn = document.querySelector('Button')

    let our_string2 = prompt('Please enter any text:')
    const stringToBeReplaced = prompt('Please enter the string that needs to be replaced:')
    const replacementString = prompt('Please enter the string that is the replacement for above string:')
    let newText = our_string2.replace(stringToBeReplaced, replacementString)
    document.getElementById('entered-text').innerHTML = our_string2
    document.getElementById('stringToBeReplaced').innerHTML = stringToBeReplaced
    document.getElementById('replacementString').innerHTML = replacementString
    document.getElementById('newText').innerHTML = newText
    document.getElementById('syntaxThisCase2').innerHTML= `${our_string2}.replace(${stringToBeReplaced}, ${replacementString})`
}

function clearReplaceText() {
    document.getElementById('entered-text').innerHTML = ''
    document.getElementById('stringToBeReplaced').innerHTML = ''
    document.getElementById('replacementString').innerHTML = ''
    document.getElementById('newText').innerHTML = ''
    document.getElementById('syntaxThisCase2').innerHTML= ''
}

// document.addEventListener('click', replace_text)
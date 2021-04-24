//<![CDATA[
function addLink() {
    var body_element = document.getElementsByTagName('body')[0];
    var selection = window.getSelection();
    var pagelink = "<p><br>НЕ КОПИРУЙ! Если хочешь запостить нашу статью, то попроси разрешения!<br><br> https://vk.com/wang_ling</p>";
    var copytext = (''+selection).split(/\s+/g).join(' '+pagelink+' ');
    var newdiv = document.createElement('div');
    newdiv.style.position = 'absolute';
    newdiv.style.left = '-99999px';
    body_element.appendChild(newdiv);
    newdiv.innerHTML = copytext;
    selection.selectAllChildren(newdiv);
    window.setTimeout( function() {
        body_element.removeChild(newdiv);
    }, 0);
    document.querySelector('.banner').style.display = 'flex'
}
document.oncopy = addLink;

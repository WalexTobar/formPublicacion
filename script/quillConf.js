var container = document.getElementById('editor');
var options = {
    debug: 'info',
    module:{
        toolbar:'#toolbar'
    },
    placeholder: 'Edita tu texto',
    readOnly: false,
    theme: 'snow'
};
var editor = new Quill(container, options);
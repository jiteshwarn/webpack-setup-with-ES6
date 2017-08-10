import msg from './Message.js'
import $ from 'Jquery'
$(function() {
    $("#showBtn").on("click", function() {
        debugger;
        var o = new msg();
        o.show();
    })
})
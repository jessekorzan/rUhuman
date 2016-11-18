<?php
    
    // example of server-side check. rUhuman?
    // jesse korzan
    // https://github.com/jessekorzan/rUhuman
    
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST'); 
    
    $chk = $_GET['rUhuman_chk'];
    $dbl_chk = $_GET['rUhuman_dbl_chk'];
    
    $response = "BOT";
    
    if ($chk === $dbl_chk) {
       $response = "HUMAN";
       // HUMAN detected
       // process form values
    } else {
        // BOT detected
        // reject form
    }
    
    echo $response;
    
?>